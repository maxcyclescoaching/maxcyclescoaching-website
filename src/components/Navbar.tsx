
import { useState, memo, useCallback } from "react";
import { Menu, X, Instagram } from "lucide-react";
import { Button } from "@/components/ui/button";

const NavbarComponent = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleLinkClick = useCallback((e: React.MouseEvent<HTMLAnchorElement>) => {
    // Close mobile menu when a link is clicked
    setIsMenuOpen(false);

    // Handle anchor links
    const href = e.currentTarget.getAttribute('href');
    
    if (href?.startsWith('/#')) {
      e.preventDefault();
      const targetId = href.replace('/#', '');
      const targetElement = document.getElementById(targetId);
      
      if (targetElement) {
        // Account for the fixed navbar height (16 = 4rem = 64px)
        const navbarHeight = 64;
        const targetPosition = targetElement.getBoundingClientRect().top + window.scrollY - navbarHeight;
        
        window.scrollTo({
          top: targetPosition,
          behavior: 'smooth'
        });
      }
    }
  };

  return (
    <nav className="bg-white/90 shadow-sm backdrop-blur-sm fixed w-full z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center space-x-3">
            <a href="/#hero" onClick={handleLinkClick}>
              <img 
                src="/images/logo_black.svg" 
                alt="MaxCyclesCoaching Logo" 
                className="h-11 w-auto"
              />
            </a>
          </div>
          
          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            <a href="/#about" className="text-[#003366] hover:text-opacity-80" onClick={handleLinkClick}>Über mich</a>
            <a href="/#philosophy" className="text-[#003366] hover:text-opacity-80" onClick={handleLinkClick}>Philosophie</a>
            <a href="/#services" className="text-[#003366] hover:text-opacity-80" onClick={handleLinkClick}>Leistungen</a>
            <a 
              href="https://www.instagram.com/maxcyclescoaching" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-[#003366] hover:text-opacity-80"
              aria-label="Folge uns auf Instagram"
            >
              <Instagram className="w-6 h-6" />
            </a>
            <a href="/#contact" onClick={handleLinkClick}>
              <Button variant="default" className="bg-[#003366] hover:bg-[#002244]">Kontakt</Button>
            </a>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-[#003366] hover:text-opacity-80 focus:outline-none"
              aria-label={isMenuOpen ? "Close menu" : "Open menu"}
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
              <a 
                href="/#about" 
                className="block px-3 py-2 text-[#003366] hover:text-opacity-80"
                onClick={handleLinkClick}
              >
                Über mich
              </a>
              <a 
                href="/#philosophy" 
                className="block px-3 py-2 text-[#003366] hover:text-opacity-80"
                onClick={handleLinkClick}
              >
                Philosophie
              </a>
              <a 
                href="/#services" 
                className="block px-3 py-2 text-[#003366] hover:text-opacity-80"
                onClick={handleLinkClick}
              >
                Leistungen
              </a>
              <a 
                href="https://www.instagram.com/maxcyclescoaching"
                target="_blank"
                rel="noopener noreferrer"
                className="block px-3 py-2 text-[#003366] hover:text-opacity-80"
                onClick={handleLinkClick}
                aria-label="Folge uns auf Instagram"
              >
                <Instagram className="w-6 h-6 inline-block mr-2" /> Instagram
              </a>
              <a href="/#contact" onClick={handleLinkClick}>
                <Button variant="default" className="w-full mt-2 bg-[#003366] hover:bg-[#002244]">Kontakt</Button>
              </a>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export const Navbar = memo(NavbarComponent);
