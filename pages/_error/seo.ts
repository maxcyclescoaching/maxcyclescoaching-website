export function getErrorSeo() {
  const title = "Seite nicht gefunden | MaxCyclesCoaching";
  const description = "Die angefragte Seite existiert nicht oder wurde verschoben.";
  const canonicalUrl = "https://maxcyclescoaching.de/404";

  return {
    title,
    description,
    canonicalUrl,
  };
}