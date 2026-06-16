import { useEffect, useState } from "react";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

type StickyBlogCtaProps = {
  raceName: string;
  contactHref: string;
  servicesHref: string;
  className?: string;
};

export const StickyBlogCta = ({
  raceName,
  contactHref,
  servicesHref,
  className,
}: StickyBlogCtaProps) => {
  const [isVisible, setIsVisible] = useState(false);
  const [isMinimized, setIsMinimized] = useState(false);

  const handleOpen = () => {
    setIsVisible(true);
    setIsMinimized(false);
  };
  const handleClose = () => setIsMinimized(true);

  useEffect(() => {
    const viewportWindow = window as Window;
    const triggerElement = document.getElementById("cta-startpoint");

    if (!triggerElement) {
      return;
    }

    const activate = () => setIsVisible(true);

    if ("IntersectionObserver" in viewportWindow) {
      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            activate();
          }
        },
        { threshold: 0 }
      );

      observer.observe(triggerElement);

      return () => {
        observer.disconnect();
      };
    }

    const updateVisibility = () => {
      const triggerRect = triggerElement.getBoundingClientRect();

      if (triggerRect.top < viewportWindow.innerHeight && triggerRect.bottom > 0) {
        activate();
      }
    };

    viewportWindow.addEventListener("scroll", updateVisibility, { passive: true });
    viewportWindow.addEventListener("resize", updateVisibility);
    updateVisibility();

    return () => {
      viewportWindow.removeEventListener("scroll", updateVisibility);
      viewportWindow.removeEventListener("resize", updateVisibility);
    };
  }, []);

  if (!isVisible) {
    return null;
  }

  return (
    <div className={cn("z-40", className)}>
      {!isMinimized ? (
        <>
          <div className="fixed inset-x-0 bottom-0 xl:hidden">
            <div className="mx-auto max-w-5xl px-4 pb-4">
              <div className="rounded-2xl border border-primary/15 bg-white/95 px-4 py-3 shadow-[0_-12px_40px_rgba(0,0,0,0.14)] backdrop-blur-md">
                <div className="flex items-start gap-3">
                  <div className="min-w-0 flex-1 text-center">
                    <p className="text-sm font-semibold text-primary leading-tight">
                      Individuelles Coaching für den {raceName}
                    </p>
                    <p className="mt-1 text-xs leading-snug text-gray-600">
                      Pacing, Training und Verpflegung gezielt abstimmen statt nur mitlesen.
                    </p>
                  </div>

                  <Button
                    type="button"
                    variant="ghost"
                    size="icon"
                    className="h-8 w-8 shrink-0 text-gray-500 hover:text-gray-900"
                    onClick={handleClose}
                    aria-label="CTA-Leiste minimieren"
                  >
                    ×
                  </Button>
                </div>

                <div className="mt-3 flex flex-col gap-2 sm:flex-row sm:justify-center">
                  <Button asChild size="sm" className="h-10 px-3">
                    <a href={contactHref}>
                      Anfragen <ArrowRight className="w-4 h-4" />
                    </a>
                  </Button>
                  <Button asChild size="sm" variant="outline" className="h-10 px-3 bg-white/90">
                    <a href={servicesHref} target="_blank" rel="noopener noreferrer">
                      Leistungen ansehen
                    </a>
                  </Button>
                </div>
              </div>
            </div>
          </div>

          <div className="fixed right-6 top-1/2 hidden w-[20rem] max-w-[calc(100vw-3rem)] -translate-y-1/2 xl:block">
            <div className="rounded-2xl border border-primary/15 bg-white/95 p-4 shadow-[0_18px_45px_rgba(0,0,0,0.18)] backdrop-blur-md">
              <div className="flex items-start gap-3">
                <div className="min-w-0 flex-1 text-center">
                  <p className="text-sm font-semibold text-primary leading-tight">
                    Individuelles Coaching für den {raceName}
                  </p>
                  <p className="mt-1 text-xs leading-snug text-gray-600">
                    Pacing, Training und Verpflegung gezielt abstimmen statt nur mitlesen.
                  </p>
                </div>

                <Button
                  type="button"
                  variant="ghost"
                  size="icon"
                  className="h-8 w-8 shrink-0 text-gray-500 hover:text-gray-900"
                  onClick={handleClose}
                  aria-label="CTA-Leiste minimieren"
                >
                  ×
                </Button>
              </div>

              <div className="mt-4 space-y-2">
                <Button asChild className="w-full">
                  <a href={contactHref}>
                    Anfragen <ArrowRight className="w-4 h-4" />
                  </a>
                </Button>
                <Button asChild variant="outline" className="w-full bg-white/90">
                  <a href={servicesHref} target="_blank" rel="noopener noreferrer">
                    Leistungen ansehen
                  </a>
                </Button>
              </div>
            </div>
          </div>
        </>
      ) : (
        <>
          <button
            type="button"
            onClick={handleOpen}
            className="fixed inset-x-0 bottom-0 z-40 xl:hidden"
            aria-label="CTA-Leiste wieder öffnen"
          >
            <div className="mx-auto max-w-5xl px-4 pb-4">
              <div className="inline-flex items-center gap-2 rounded-full border border-primary/15 bg-white/95 px-4 py-2 text-sm font-medium text-primary shadow-lg backdrop-blur-md">
                Doch Interesse am Coaching?
              </div>
            </div>
          </button>

          <button
            type="button"
            onClick={handleOpen}
            className="fixed right-6 top-1/2 z-40 hidden -translate-y-1/2 xl:block"
            aria-label="CTA-Leiste wieder öffnen"
          >
            <div className="rounded-full border border-primary/15 bg-white/95 px-4 py-2 text-sm font-medium text-primary shadow-lg backdrop-blur-md">
              Doch Interesse am Coaching?
            </div>
          </button>
        </>
      )}
    </div>
  );
};

export default StickyBlogCta;
