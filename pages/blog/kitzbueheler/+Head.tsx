import { getKitzbuehelerSeo } from "./seo";

const publicationDate = "2026-06-12";

export function Head() {
  const { title, description, canonicalUrl } = getKitzbuehelerSeo();
  const articleStructuredData = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: title,
    description,
    datePublished: publicationDate,
    author: {
      "@type": "Person",
      name: "Maximilian Lohr",
    },
    publisher: {
      "@type": "Organization",
      name: "MaxCyclesCoaching",
    },
  };

  return (
    <>
      <meta name="description" content={description} />
      <link rel="canonical" href={canonicalUrl} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={canonicalUrl} />
      <meta property="og:type" content="article" />
      <meta property="og:image" content="https://maxcyclescoaching.de/images/kitzbueheler_rm.avif" />
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="630" />
      <meta name="twitter:card" content="summary_large_image" />
      <script type="application/ld+json">{JSON.stringify(articleStructuredData)}</script>
    </>
  );
}
