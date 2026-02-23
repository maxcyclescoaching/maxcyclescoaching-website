type SiteFooterProps = {
  showEmail?: boolean;
};

export const SiteFooter = ({ showEmail = false }: SiteFooterProps) => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-100 pt-6 pb-0 min-[852px]:py-6" role="contentinfo">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col min-[852px]:flex-row justify-between items-center gap-4 text-sm text-gray-600 text-center min-[852px]:text-left">
          <div className="hidden min-[852px]:block">© {currentYear} MaxCyclesCoaching. Alle Rechte vorbehalten.</div>
          <div className="text-sm flex flex-col sm:flex-row items-center justify-center gap-2 sm:gap-4 w-full min-[852px]:w-auto pb-6 min-[852px]:pb-0">
            {showEmail && (
              <>
                <a href="mailto:maxcyclescoaching@gmail.com" className="hover:text-gray-900">
                  E-Mail: maxcyclescoaching@gmail.com
                </a>
                <span className="hidden sm:inline">|</span>
              </>
            )}
            <a href="/impressum" className="hover:text-gray-900">Impressum</a>
            <span className="hidden sm:inline">|</span>
            <a href="/datenschutz" className="hover:text-gray-900">Datenschutz</a>
          </div>
        </div>
      </div>
      <div className="min-[852px]:hidden bg-gray-200 py-4 text-center text-sm text-gray-500 w-full">
        © {currentYear} MaxCyclesCoaching. Alle Rechte vorbehalten.
      </div>
    </footer>
  );
};
