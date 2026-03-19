import { getIndexSeo } from "./seo";

const structuredData = {
  "@context": "https://schema.org",
  "@type": "SportsClub",
  name: "MaxCyclesCoaching",
  description:
    "Professionelles Radsport-Coaching, maßgeschneidert auf deine Ziele. Von Anfängern bis zu Elite-Athleten.",
  image: "/images/hero_img.webp",
  address: {
    "@type": "PostalAddress",
    addressCountry: "DE",
    adressLocality: "Dresden",
    postalCode: "01189",
  },
  email: "maxcyclescoaching@gmail.com",
  sameAs: ["https://www.instagram.com/maxcyclescoaching"],
  offers: [
    {
      "@type": "Offer",
      name: "1:1 Coaching",
      price: "99",
      priceCurrency: "EUR",
      description: "Individueller Trainingsplan basierend auf deinen Zielen und deinem Zeitplan",
      availability: "https://schema.org/InStock",
      url: "https://maxcyclescoaching.de/#services",
    },
    {
      "@type": "Offer",
      name: "Leistungsdiagnostik",
      price: "149",
      priceCurrency: "EUR",
      description:
        "Persönliche Diagnostik mittels Laktat und Muskelsauerstoffmessung deines metabolischen Profils",
      availability: "https://schema.org/InStock",
      url: "https://maxcyclescoaching.de/#services",
    },
  ],
};

export function Head() {
  const { title, description, canonicalUrl } = getIndexSeo();

  return (
    <>
      <meta name="description" content={description} />
      <link rel="canonical" href={canonicalUrl} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={canonicalUrl} />
      <meta property="og:type" content="website" />
      <meta name="twitter:card" content="summary_large_image" />
      <script type="application/ld+json">{JSON.stringify(structuredData)}</script>
    </>
  );
}
