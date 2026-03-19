import { getOetztalerSeo } from "./seo";

const publicationDate = "2026-02-23";

const faqStructuredData = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "Wie viele Kilometer und Höhenmeter hat der Ötztaler Radmarathon?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Der Ötztaler Radmarathon ist 227 km lang und hat über 5.500 Höhenmeter. Die Strecke führt über Kühtai, Brenner, Jaufenpass und Timmelsjoch.",
      },
    },
    {
      "@type": "Question",
      name: "Welche Pacing-Strategie ist beim Ötztaler Radmarathon sinnvoll?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Sinnvolles Pacing bedeutet, an den ersten Anstiegen nicht zu überziehen und über den Tag eine möglichst konstante Intensität zu halten.",
      },
    },
    {
      "@type": "Question",
      name: "Wie viel sollte man beim Ötztaler pro Stunde essen und trinken?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Die Kohlenhydratzufuhr ist individuell. Viele Fahrer liegen im Bereich von etwa 70 bis 120 g Kohlenhydrate pro Stunde.",
      },
    },
  ],
};

export function Head() {
  const { title, description, canonicalUrl } = getOetztalerSeo();
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
      <meta property="og:description" content={description} />
      <meta property="og:url" content={canonicalUrl} />
      <meta property="og:type" content="article" />
      <meta name="twitter:card" content="summary_large_image" />
      <script type="application/ld+json">{JSON.stringify(articleStructuredData)}</script>
      <script type="application/ld+json">{JSON.stringify(faqStructuredData)}</script>
    </>
  );
}
