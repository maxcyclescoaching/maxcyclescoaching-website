export interface BlogPost {
  slug: string;
  title: string;
  description: string;
  date: string; // ISO format: YYYY-MM-DD
  image: string;
  imageAlt: string;
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
    image: "/images/oetztaler_rm_2025.jpg",
    imageAlt: "Ötztaler Radmarathon – Atmosphäre und Start 2025",
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