import { getUebersetzungsrechnerSeo } from "./seo";

export function Head() {
  const { title, description, canonicalUrl } = getUebersetzungsrechnerSeo();

  return (
    <>
      <meta name="description" content={description} />
      <link rel="canonical" href={canonicalUrl} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={canonicalUrl} />
      <meta property="og:type" content="website" />
      <meta name="twitter:card" content="summary_large_image" />
    </>
  );
}
