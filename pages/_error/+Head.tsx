import { getErrorSeo } from "./seo";

export function Head() {
  const { title, description, canonicalUrl } = getErrorSeo();

  return (
    <>
      <meta name="description" content={description} />
      <meta name="robots" content="noindex,follow" />
      <link rel="canonical" href={canonicalUrl} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={canonicalUrl} />
      <meta property="og:type" content="website" />
    </>
  );
}