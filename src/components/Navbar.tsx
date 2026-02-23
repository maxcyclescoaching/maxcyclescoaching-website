import { useState, memo } from "react";
import { Menu, X, Instagram, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";

const NavbarComponent = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isToolsOpen, setIsToolsOpen] = useState(false);
  const handleLinkClick = () => {
    setIsMenuOpen(false);
    setIsToolsOpen(false);
  };

  return (
    <nav className="bg-white/90 shadow-sm backdrop-blur-sm fixed w-full z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-14 sm:h-16">
          <div className="flex items-center space-x-3">
            <a href="/#hero">
              <img 
                src="/images/logo_black.svg" 
                alt="MaxCyclesCoaching Logo" 
                className="h-9 sm:h-11 w-auto"
              />
            </a>
          </div>
          
          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-3 lg:space-x-8">
            <a href="/#about" className="text-[#003366] hover:text-opacity-80">Über mich</a>
            <a href="/#philosophy" className="text-[#003366] hover:text-opacity-80">Philosophie</a>
            <a href="/#services" className="text-[#003366] hover:text-opacity-80">Leistungen</a>
            <a href="/blog" className="text-[#003366] hover:text-opacity-80">Blog</a>

            {/* Tools Dropdown - hover + click for touch support */}
            <div
              className="relative"
              onMouseEnter={() => setIsToolsOpen(true)}
              onMouseLeave={() => setIsToolsOpen(false)}
            >
              <button
                className="flex items-center text-[#003366] hover:text-opacity-80"
                onClick={() => setIsToolsOpen((prev) => !prev)}
                aria-expanded={isToolsOpen}
              >
                Tools und Rechner <ChevronDown className={`ml-1 w-4 h-4 transition-transform ${isToolsOpen ? "rotate-180" : ""}`} />
              </button>
              {isToolsOpen && (
                <div
                  className="absolute left-0 mt-0 w-48 bg-white shadow-lg rounded-md py-2 z-50 border border-gray-100"
                >
                  <a
                    href="/tools/verpflegungsrechner"
                    className="block px-4 py-2 text-sm text-[#003366] hover:bg-accent"
                    onClick={handleLinkClick}
                  >
                    Verpflegungsrechner
                  </a>
                  <a
                    href="/tools/übersetzungsrechner"
                    className="block px-4 py-2 text-sm text-[#003366] hover:bg-accent"
                    onClick={handleLinkClick}
                  >
                    Übersetzungsrechner
                  </a>
                </div>
              )}
            </div>

            <a 
              href="https://www.instagram.com/maxcyclescoaching" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-[#003366] hover:text-opacity-80"
              aria-label="Folge uns auf Instagram"
            >
              <Instagram className="w-6 h-6" />
            </a>
            <a href="/#contact">
              <Button variant="default" className="bg-[#003366] hover:bg-[#002244]">Kontakt</Button>
            </a>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-[#003366] hover:text-opacity-80 focus:outline-none p-1"
              aria-label={isMenuOpen ? "Close menu" : "Open menu"}
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden border-t border-gray-100 animate-in slide-in-from-top-2 duration-200">
            <div className="px-2 pt-2 pb-4 space-y-1">
              <a 
                href="/#about" 
                className="block px-3 py-3 text-[#003366] hover:bg-accent rounded-md active:bg-accent/80 transition-colors"
                onClick={handleLinkClick}
              >
                Über mich
              </a>
              <a 
                href="/#philosophy" 
                className="block px-3 py-3 text-[#003366] hover:bg-accent rounded-md active:bg-accent/80 transition-colors"
                onClick={handleLinkClick}
              >
                Philosophie
              </a>
              <a 
                href="/#services" 
                className="block px-3 py-3 text-[#003366] hover:bg-accent rounded-md active:bg-accent/80 transition-colors"
                onClick={handleLinkClick}
              >
                Leistungen
              </a>
              <a 
                href="/blog" 
                className="block px-3 py-3 text-[#003366] hover:bg-accent rounded-md active:bg-accent/80 transition-colors"
                onClick={handleLinkClick}
              >
                Blog
              </a>

              {/* Mobile Tools Accordion */}
              <button
                onClick={() => setIsToolsOpen((prev) => !prev)}
                className="flex items-center justify-between w-full px-3 py-3 text-[#003366] hover:bg-accent rounded-md active:bg-accent/80 transition-colors"
                aria-expanded={isToolsOpen}
              >
                Tools und Rechner
                <ChevronDown className={`w-4 h-4 transition-transform ${isToolsOpen ? "rotate-180" : ""}`} />
              </button>
              {isToolsOpen && (
                <>
                  <a 
                    href="/tools/verpflegungsrechner" 
                    className="block px-6 py-3 text-[#003366] hover:bg-accent rounded-md active:bg-accent/80 transition-colors text-sm"
                    onClick={handleLinkClick}
                  >
                    Verpflegungsrechner
                  </a>
                  <a 
                    href="/tools/übersetzungsrechner" 
                    className="block px-6 py-3 text-[#003366] hover:bg-accent rounded-md active:bg-accent/80 transition-colors text-sm"
                    onClick={handleLinkClick}
                  >
                    Übersetzungsrechner
                  </a>
                </>
              )}

              <a 
                href="https://www.instagram.com/maxcyclescoaching"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center px-3 py-3 text-[#003366] hover:bg-accent rounded-md active:bg-accent/80 transition-colors mt-2 pt-3"
                onClick={handleLinkClick}
                aria-label="Folge uns auf Instagram"
              >
                <Instagram className="w-5 h-5 mr-2" /> Instagram
              </a>
              <div className="px-3 pt-2">
                <a href="/#contact" onClick={handleLinkClick} className="block">
                  <Button variant="default" className="w-full bg-[#003366] hover:bg-[#002244] h-12 text-base">Kontakt</Button>
                </a>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export const Navbar = memo(NavbarComponent);
