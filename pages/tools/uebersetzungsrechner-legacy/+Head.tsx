import { getUebersetzungsrechnerLegacySeo } from "./seo";

export function Head() {
  const { title, description, canonicalUrl } = getUebersetzungsrechnerLegacySeo();

  return (
    <>
      <meta name="description" content={description} />
      <meta name="robots" content="noindex" />
      <link rel="canonical" href={canonicalUrl} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={canonicalUrl} />
      <meta property="og:type" content="website" />
    </>
  );
}
