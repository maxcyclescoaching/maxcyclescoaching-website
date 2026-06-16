export function getKitzbuehelerSeo(currentYear = new Date().getFullYear()) {
  const title = `Kitzbüheler Radmarathon ${currentYear} | Strecke, Pacing & Trainingstipps`;
  const description = `Kitzbüheler Radmarathon ${currentYear}: Streckenanalyse, Watt-Zielwerte, Pacing- & Trainingstipps. So bereitest du dich optimal auf 216 km und 4.600 hm vor.`;
  const canonicalUrl = "https://maxcyclescoaching.de/blog/kitzbueheler";

  return {
    currentYear,
    title,
    description,
    canonicalUrl,
  };
}