import { useEffect, useState } from "react";
import { Sparkles } from "lucide-react";

export const IS_BANNER_ACTIVE = true;

export const BANNER_CONFIG = {
  prefix: "Early Bird Rabatt!",
  text: "Sichere dir als Neukunde bis Ende November 50% Rabatt auf deinen ersten Coaching-Monat.",
  linkLabel: "Jetzt Erstgespräch anfragen",
  linkHref: "#contact",
};

const BANNER_EXCLUDED_PATHS = [
  "/agb",
  "/datenschutz",
  "/impressum",
];

export const AnnouncementBanner = () => {
  const [isAtTop, setIsAtTop] = useState(true);
  const [linkHref, setLinkHref] = useState(BANNER_CONFIG.linkHref);
  const [isExcludedPage, setIsExcludedPage] = useState(false);

  useEffect(() => {
    const pathname =
      window.location.pathname.replace(/\/+$/, "") || "/";

    setIsExcludedPage(BANNER_EXCLUDED_PATHS.includes(pathname));

    const handleScroll = () => {
      setIsAtTop(window.scrollY <= 20);
    };

    handleScroll();

    window.addEventListener("scroll", handleScroll, {
      passive: true,
    });

    // Kontaktbereich auf der aktuellen Seite prüfen
    const hasContact = document.getElementById("contact");

    setLinkHref(
      BANNER_CONFIG.linkHref === "#contact" && !hasContact
        ? "/#contact"
        : BANNER_CONFIG.linkHref
    );

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  if (!IS_BANNER_ACTIVE || isExcludedPage || !isAtTop) {
    return null;
  }

  return (
    <aside
      aria-label="News Banner"
      className="bg-primary px-4 py-2.5 text-xs sm:text-sm text-white backdrop-blur-sm"
    >
      <div className="max-w-7xl mx-auto flex items-center justify-center gap-2 text-center">
        <Sparkles className="h-4 w-4 shrink-0 text-secondary hidden sm:inline-block" />

        <p className="leading-relaxed">
          <span className="font-semibold">
            {BANNER_CONFIG.prefix}
          </span>{" "}
          {BANNER_CONFIG.text}{" "}

          {linkHref && (
            <a
              href={linkHref}
              className="font-medium underline hover:text-gray-300 transition-colors whitespace-nowrap ml-1"
            >
              {BANNER_CONFIG.linkLabel} →
            </a>
          )}
        </p>
      </div>
    </aside>
  );
};