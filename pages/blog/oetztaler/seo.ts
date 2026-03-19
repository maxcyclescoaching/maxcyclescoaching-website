export function getOetztalerSeo(currentYear = new Date().getFullYear()) {
  const title = `Ötztaler Radmarathon ${currentYear} | Strecke, Pacing & Trainingstipps`;
  const description = `Ötztaler Radmarathon ${currentYear}: Streckenanalyse, Watt-Zielwerte, Sub-10, Sub-9, Sub-8 Strategien & Trainingstipps. So bereitest du dich optimal auf 227 km und 5.500 hm vor.`;
  const canonicalUrl = "https://maxcyclescoaching.de/blog/oetztaler";

  return {
    currentYear,
    title,
    description,
    canonicalUrl,
  };
}