import { useState } from "react";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";

export const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="bg-white/90 shadow-sm backdrop-blur-sm fixed w-full z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center space-x-3">
            <img 
              src="/lovable-uploads/16a35b81-27fd-4d26-bdfb-c50116d5f665.png" 
              alt="MaxCyclesCoaching Logo" 
              className="h-10 w-auto"
            />
            <span className="text-2xl font-bold text-primary">MaxCyclesCoaching</span>
          </div>
          
          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            <a href="#about" className="text-gray-600 hover:text-primary">Über mich</a>
            <a href="#philosophy" className="text-gray-600 hover:text-primary">Philosophie</a>
            <a href="#services" className="text-gray-600 hover:text-primary">Leistungen</a>
            <Button variant="default">Kontakt</Button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-gray-600 hover:text-primary focus:outline-none"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
              <a href="#about" className="block px-3 py-2 text-gray-600 hover:text-primary">Über mich</a>
              <a href="#philosophy" className="block px-3 py-2 text-gray-600 hover:text-primary">Philosophie</a>
              <a href="#services" className="block px-3 py-2 text-gray-600 hover:text-primary">Leistungen</a>
              <Button variant="default" className="w-full mt-2">Kontakt</Button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};