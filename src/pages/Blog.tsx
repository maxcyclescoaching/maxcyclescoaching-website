import { Navbar } from "@/components/Navbar";
import { SiteFooter } from "@/components/SiteFooter";
import { getSortedBlogPosts } from "@/data/blogPosts";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { CalendarDays, ArrowRight } from "lucide-react";
import { Helmet } from "react-helmet-async";
import { useMemo } from "react";

const Blog = () => {
  const posts = useMemo(() => getSortedBlogPosts(), []);

  const canonicalUrl = "https://maxcyclescoaching.de/blog";

  return (
    <div className="min-h-screen bg-white flex flex-col">
      <Helmet>
        <title>Blog | MaxCyclesCoaching – Radsport-Wissen & Trainingstipps</title>
        <meta
          name="description"
          content="Radsport-Blog von MaxCyclesCoaching: Trainingstipps, Rennanalysen, Pacing-Strategien und Ernährungsguides für ambitionierte Radsportler."
        />
        <link rel="canonical" href={canonicalUrl} />
        <meta property="og:title" content="Blog | MaxCyclesCoaching" />
        <meta
          property="og:description"
          content="Trainingstipps, Rennanalysen und Pacing-Strategien für ambitionierte Radsportler."
        />
        <meta property="og:url" content={canonicalUrl} />
        <meta property="og:type" content="website" />
      </Helmet>

      <Navbar />

      <main className="flex-grow">
        {/* Hero */}
        <section className="bg-primary pt-24 pb-12 sm:pt-28 sm:pb-16">
          <div className="max-w-5xl mx-auto px-4 text-center text-white">
            <h1 className="text-3xl sm:text-5xl font-bold mb-4">Blog</h1>
            <p className="text-lg sm:text-xl max-w-2xl mx-auto opacity-90">
              Trainingstipps, Rennanalysen, Pacing-Strategien und mehr – alles
              rund ums Radsport-Training.
            </p>
          </div>
        </section>

        {/* Post-Liste */}
        <section className="py-12 sm:py-20">
          <div className="max-w-5xl mx-auto px-4">
            {posts.length === 0 ? (
              <p className="text-center text-gray-500 text-lg">
                Noch keine Blogposts vorhanden – schau bald wieder vorbei!
              </p>
            ) : (
              <div className="grid gap-8">
                {posts.map((post) => {
                  const formattedDate = new Date(post.date).toLocaleDateString(
                    "de-DE",
                    { day: "numeric", month: "long", year: "numeric" }
                  );

                  return (
                    <a
                      key={post.slug}
                      href={`/blog/${post.slug}`}
                      className="group block"
                    >
                      <Card className="overflow-hidden transition-shadow hover:shadow-lg">
                        <div className="flex flex-col md:flex-row">
                          {/* Bild */}
                          <div className="relative md:w-80 lg:w-96 shrink-0">
                            <img
                              src={post.image}
                              alt={post.imageAlt}
                              className="w-full h-48 md:h-full object-cover transition-transform duration-300 group-hover:scale-[1.03]"
                              loading="lazy"
                            />
                          </div>

                          {/* Text */}
                          <CardContent className="flex flex-col justify-between p-5 sm:p-6 md:p-8 flex-1">
                            <div>
                              {/* Datum */}
                              <div className="flex items-center gap-2 text-sm text-muted-foreground mb-3">
                                <CalendarDays className="w-4 h-4" />
                                <time dateTime={post.date}>
                                  {formattedDate}
                                </time>
                              </div>

                              {/* Titel */}
                              <h2 className="text-xl sm:text-2xl font-bold text-primary mb-3 group-hover:underline decoration-2 underline-offset-4">
                                {post.title}
                              </h2>

                              {/* Beschreibung */}
                              <p className="text-gray-600 leading-relaxed mb-4 line-clamp-3">
                                {post.description}
                              </p>

                              {/* Tags */}
                              <div className="flex flex-wrap gap-2 mb-4">
                                {post.tags.map((tag) => (
                                  <Badge
                                    key={tag}
                                    variant="secondary"
                                    className="text-xs"
                                  >
                                    {tag}
                                  </Badge>
                                ))}
                              </div>
                            </div>

                            {/* CTA */}
                            <div className="flex items-center text-primary font-medium text-sm group-hover:gap-3 gap-2 transition-all">
                              Weiterlesen
                              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                            </div>
                          </CardContent>
                        </div>
                      </Card>
                    </a>
                  );
                })}
              </div>
            )}
          </div>
        </section>
      </main>

      <SiteFooter />
    </div>
  );
};

export default Blog;