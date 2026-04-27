import { getImpressumSeo } from "./seo";

export function Head() {
  const { title, description, canonicalUrl } = getImpressumSeo();

  return (
    <>
      <meta name="description" content={description} />
      <link rel="canonical" href={canonicalUrl} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={canonicalUrl} />
      <meta property="og:type" content="website" />
    </>
  );
}
