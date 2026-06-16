export interface BlogPost {
  slug: string;
  title: string;
  description: string;
  date: string; // ISO format: YYYY-MM-DD
  image: string;
  imageAlt: string;
  imageCredit?: string;
  tags: string[];
}

/**
 * Alle Blogposts – neueste Einträge oben hinzufügen.
 * Die Liste wird automatisch nach Datum sortiert (neueste zuerst).
 */
const blogPosts: BlogPost[] = [
  {
    slug: "oetztaler",
    title: "Ötztaler Radmarathon – Strecke, Pacing-Strategien & Training-Tipps",
    description:
      "Analyse der Strecke des Ötztaler Radmarathons mit Pacing-Tipps, Leistungsanforderungen, Ernährungsstrategie und Trainingstipps für ein erfolgreiches Finish.",
    date: "2026-02-23",
    image: "/images/oetztaler_rm_2025_thumb.avif",
    imageAlt: "Ötztaler Radmarathon – Atmosphäre und Start 2025",
    imageCredit: "Ötztal Tourismus, Fotograf Jürgen Skarwan",
    tags: ["Radmarathon", "Pacing", "Training", "Ernährung"],
  },
  {
    slug: "kitzbueheler",
    title: "Kitzbüheler Radmarathon – Strecke, Pacing-Strategien & Training-Tipps",
    description:
      "Template-Artikel zum Kitzbüheler Radmarathon: Streckenanalyse, Pacing- & Trainingstipps. Passe den Inhalt an die tatsächliche Strecke an.",
    date: "2026-06-12",
    image: "/images/kitzbueheler_rm_thumb.avif",
    imageAlt: "Kitzbüheler Radmarathon – Atmosphäre Auffahrt Kitzbüheler Horn",
    imageCredit: "EXPA Pictures",
    tags: ["Radmarathon", "Pacing", "Training", "Ernährung"],
  },
];

/**
 * Gibt alle Blogposts sortiert nach Datum zurück (neueste zuerst).
 */
export function getSortedBlogPosts(): BlogPost[] {
  return [...blogPosts].sort(
    (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
  );
}

export default blogPosts;