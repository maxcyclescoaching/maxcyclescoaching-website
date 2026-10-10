import { getIndexSeo } from "./seo";

const structuredData = {
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  "@id": "https://maxcyclescoaching.de/#business",
  name: "MaxCyclesCoaching",
  url: "https://maxcyclescoaching.de/",
  description:
    "Individuelles 1:1 Radsport Ausdauer-Coaching für Rennrad, Gravel, XC-MTB und Ultracycling.",
  image: "/images/hero_img.avif",
  address: {
    "@type": "PostalAddress",
    addressCountry: "DE",
    addressLocality: "Freital",
    postalCode: "01705",
  },
  email: "maxcyclescoaching@gmail.com",
  priceRange: "99–189 € / Monat",
  sameAs: ["https://www.instagram.com/maxcyclescoaching"],
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "Coaching-Pakete",
    itemListElement: [
      {
        "@type": "Offer",
        name: "Basis Coaching-Paket",
        price: "99",
        priceCurrency: "EUR",
        url: "https://maxcyclescoaching.de/#services",
      },
      {
        "@type": "Offer",
        name: "All-Inclusive Coaching-Paket",
        price: "189",
        priceCurrency: "EUR",
        url: "https://maxcyclescoaching.de/#services",
      },
    ],
  },
};

export function Head() {
  const { title, description, canonicalUrl } = getIndexSeo();

  return (
    <>
      <meta name="description" content={description} />
      <link rel="canonical" href={canonicalUrl} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={canonicalUrl} />
      <meta property="og:type" content="website" />
      <meta property="og:locale" content="de_DE" />
      <meta property="og:site_name" content="MaxCyclesCoaching" />
      <meta property="og:image" content="https://maxcyclescoaching.de/images/hero_img.avif" />
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="630" />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content="https://maxcyclescoaching.de/images/hero_img.avif" />
      <script type="application/ld+json">{JSON.stringify(structuredData)}</script>
    </>
  );
}
