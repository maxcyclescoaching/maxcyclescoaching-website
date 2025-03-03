
import { useState, memo } from "react";
import { Menu, X, Instagram } from "lucide-react";
import { Button } from "@/components/ui/button";

const NavbarComponent = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleLinkClick = () => {
    setIsMenuOpen(false);
  };

  const MySVG = () => {
    return (
      <svg viewBox="5.277044854881266 623.04 3994.7229551451187 1504.8" style={{ maxHeight: '500px' }} xmlns="http://www.w3.org/2000/svg" id="outputsvg" className="img-fluid" width="3994.7229551451187" height="1504.8"><g style={{ transform: 'none' }} fill="rgb(0,0,0)" id="l45Ax3eFMXs8EmWnNG2N5aT"><g style={{ transform: 'none' }}><path d="M40 2057 c0 -24 -5 -48 -11 -54 -8 -8 -8 -13 0 -17 6 -4 11 -29 11 -57 0 -71 25 -67 69 12 l33 61 32 -58 c21 -38 40 -60 53 -62 19 -3 21 3 25 52 1 31 1 81 0 111 -3 46 -7 55 -23 55 -17 0 -19 -8 -19 -77 l-1 -78 -25 48 c-15 29 -31 47 -42 47 -11 0 -27 -18 -43 -47 l-24 -48 -3 78 c-2 59 -6 77 -17 77 -11 0 -15 -12 -15 -43z" id="pG7i5js49"></path><path d="M326 2058 c8 -23 12 -48 10 -55 -3 -7 1 -16 8 -20 7 -5 21 -29 31 -55 21 -55 47 -64 63 -20 5 15 24 64 41 110 28 76 29 82 12 82 -12 0 -21 -10 -25 -25 -6 -22 -11 -25 -56 -25 -45 0 -50 3 -56 25 -4 15 -13 25 -25 25 -17 0 -17 -2 -3 -42z m114 -52 c0 -2 -7 -21 -16 -42 l-17 -39 -13 35 c-18 49 -17 50 16 50 17 0 30 -2 30 -4z" id="p15XLXwFTb"></path><path d="M560 2094 c0 -3 14 -25 30 -49 17 -24 30 -49 30 -55 0 -6 -13 -31 -30 -55 -35 -51 -36 -55 -12 -55 11 0 28 17 42 41 l23 42 18 -24 c10 -13 21 -32 25 -41 5 -16 44 -27 44 -12 0 3 -13 25 -30 49 -16 24 -30 49 -30 55 0 6 14 31 30 55 17 24 30 46 30 49 0 15 -39 4 -44 -11 -4 -10 -15 -29 -25 -42 l-19 -24 -23 41 c-14 24 -31 42 -41 42 -10 0 -18 -3 -18 -6z" id="p1GmSj571h"></path><path d="M827 2082 c-10 -10 -17 -30 -17 -43 0 -14 -5 -30 -12 -37 -9 -9 -9 -15 0 -24 7 -7 12 -24 12 -38 0 -39 29 -60 82 -60 50 0 78 21 78 58 0 15 -6 22 -20 22 -13 0 -20 -7 -20 -20 0 -13 -9 -22 -27 -26 -43 -11 -58 6 -61 70 -4 66 8 86 49 86 22 0 32 -6 39 -25 5 -14 16 -25 25 -25 23 0 18 46 -7 64 -31 22 -101 21 -121 -2z" id="pQn68ULOT"></path><path d="M1100 2054 c0 -36 -8 -57 -40 -104 -46 -67 -46 -70 -22 -70 9 0 30 20 46 46 l29 46 30 -46 c19 -29 37 -46 49 -46 22 0 24 -3 -39 90 -16 24 -23 49 -23 82 0 36 -4 48 -15 48 -11 0 -15 -12 -15 -46z" id="p19AWlkJk"></path><path d="M1297 2082 c-10 -10 -17 -30 -17 -43 0 -14 -5 -30 -12 -37 -9 -9 -9 -15 0 -24 7 -7 12 -24 12 -38 0 -39 29 -60 82 -60 50 0 78 21 78 58 0 29 -23 28 -35 -1 -11 -25 -58 -35 -81 -16 -19 16 -19 122 0 138 23 19 70 9 81 -16 5 -13 15 -23 22 -23 22 0 15 48 -9 64 -31 22 -101 21 -121 -2z" id="pGAEgiHC5"></path><path d="M1520 2050 c0 -32 -4 -50 -12 -50 -9 0 -9 -3 0 -12 7 -7 12 -34 12 -60 0 -36 4 -48 15 -48 12 0 15 17 15 95 l0 95 50 0 c38 0 50 4 50 15 0 12 -14 15 -65 15 l-65 0 0 -50z" id="pGNauwWOi"></path><path d="M1728 2045 c-1 -30 -1 -80 0 -110 l4 -55 69 0 c55 0 69 3 69 15 0 11 -12 15 -50 15 -49 0 -50 1 -50 29 0 27 3 30 38 33 25 2 37 8 37 18 0 10 -12 16 -37 18 -35 3 -38 6 -38 33 0 28 1 29 50 29 38 0 50 4 50 15 0 12 -14 15 -69 15 l-69 0 -4 -55z" id="p1B97VVfPV"></path><path d="M1950 2076 c-13 -15 -20 -32 -17 -40 9 -23 31 -19 42 7 12 27 62 31 78 5 16 -24 -8 -48 -48 -48 -57 0 -88 -66 -47 -103 41 -37 132 -12 132 36 0 23 -23 21 -38 -3 -14 -24 -54 -26 -72 -5 -18 22 5 45 44 45 37 0 76 34 76 66 0 60 -105 87 -150 40z" id="p0GOewvB7"></path><path d="M2197 2082 c-10 -10 -17 -30 -17 -43 0 -14 -5 -30 -11 -36 -8 -8 -8 -13 0 -17 6 -4 11 -22 11 -40 0 -45 26 -66 82 -66 50 0 78 21 78 58 0 29 -23 28 -35 -1 -11 -25 -58 -35 -81 -16 -19 16 -19 122 0 138 23 19 70 9 81 -16 5 -13 15 -23 22 -23 19 0 15 45 -5 63 -26 24 -104 23 -125 -1z" id="p1C9kvm0vG"></path><path d="M2431 2076 c-19 -20 -23 -36 -23 -86 0 -82 24 -110 92 -110 67 0 82 19 82 111 0 64 -3 75 -24 91 -35 27 -99 24 -127 -6z m107 -83 c3 -71 2 -73 -24 -79 -44 -11 -59 6 -62 70 -4 68 9 88 52 84 l31 -3 3 -72z" id="psQcE1PiQ"></path><path d="M2650 2091 c0 -5 7 -25 15 -45 9 -20 13 -42 9 -48 -4 -5 -1 -14 7 -18 7 -5 20 -28 29 -52 10 -28 22 -44 35 -46 17 -2 26 14 58 100 20 57 37 106 37 111 0 17 -28 5 -38 -18 -10 -21 -18 -25 -57 -25 -39 0 -47 3 -55 25 -9 23 -40 36 -40 16z m112 -123 l-16 -41 -13 29 c-19 44 -16 54 16 54 l29 0 -16 -42z" id="pCV8UrO0C"></path><path d="M2937 2082 c-10 -10 -17 -30 -17 -43 0 -14 -5 -30 -12 -37 -9 -9 -9 -15 0 -24 7 -7 12 -24 12 -38 0 -39 29 -60 82 -60 50 0 78 21 78 58 0 29 -23 28 -35 -1 -6 -14 -21 -23 -38 -25 -44 -5 -57 13 -57 78 0 65 13 83 57 78 17 -2 32 -11 38 -25 5 -13 15 -23 22 -23 22 0 15 48 -9 64 -31 22 -101 21 -121 -2z" id="pjnbxns1k"></path><path d="M3158 2045 c-5 -94 2 -165 18 -165 10 0 14 13 14 45 l0 45 50 0 50 0 0 -45 c0 -32 4 -45 14 -45 10 0 15 16 18 55 5 94 -2 165 -18 165 -10 0 -14 -13 -14 -45 l0 -45 -50 0 -50 0 0 45 c0 32 -4 45 -14 45 -10 0 -15 -16 -18 -55z" id="p1dbPJwce"></path><path d="M3418 2045 c-1 -30 -1 -80 0 -110 3 -45 7 -55 22 -55 15 0 19 10 22 55 1 30 1 80 0 110 -3 45 -7 55 -22 55 -15 0 -19 -10 -22 -55z" id="pYL6lRYLD"></path><path d="M3560 2050 c0 -32 -4 -50 -12 -50 -9 0 -9 -3 0 -12 7 -7 12 -34 12 -60 0 -73 26 -65 75 23 l40 72 3 -72 c2 -62 5 -71 22 -71 15 0 19 9 22 55 1 30 1 80 0 110 -5 76 -29 75 -70 -2 -57 -108 -61 -109 -62 -20 0 62 -3 77 -15 77 -11 0 -15 -12 -15 -50z" id="pVnwzfu8r"></path><path d="M3837 2082 c-10 -10 -17 -30 -17 -43 0 -14 -5 -30 -11 -36 -8 -8 -8 -13 0 -17 6 -4 11 -22 11 -40 0 -45 26 -66 82 -66 50 0 78 21 78 58 0 29 -23 28 -35 -1 -11 -25 -58 -35 -81 -16 -18 14 -19 120 -2 137 17 17 63 15 78 -3 15 -18 5 -35 -21 -35 -36 0 -14 -25 24 -28 37 -3 37 -3 37 36 0 51 -23 72 -82 72 -31 0 -50 -6 -61 -18z" id="p12fupksLS"></path></g></g><g style={{ transform: 'none' }} fill="rgb(0,218,188)" id="l7ApQ1nIRKxSEq0mLrEhNL0"><g style={{ transform: 'none' }}><path d="M1740 1627 c3 -3 57 -12 120 -21 63 -9 127 -18 143 -21 18 -3 27 0 27 9 0 10 -22 15 -77 20 -43 3 -109 9 -148 12 -38 4 -68 4 -65 1z" id="p1CGZ45iok"></path><path d="M1730 1393 c-41 -14 -122 -35 -180 -48 -120 -27 -100 -32 41 -10 144 21 219 44 219 67 0 10 -1 18 -2 17 -2 -1 -37 -12 -78 -26z" id="phIziV6Ey"></path><path d="M2180 1383 c-36 -17 -86 -37 -112 -44 -48 -13 -64 -29 -30 -29 47 0 232 72 232 90 0 19 -29 13 -90 -17z" id="pYH5nxi2f"></path><path d="M1750 1292 c0 -5 16 -22 35 -39 27 -24 35 -39 35 -65 0 -25 3 -29 10 -18 5 8 10 32 10 53 0 35 2 37 25 31 29 -7 32 6 7 29 -19 18 -122 25 -122 9z" id="pBpmRRVMC"></path><path d="M1560 1168 c0 -18 -5 -28 -15 -28 -12 0 -15 -13 -15 -55 0 -31 -4 -55 -10 -55 -11 0 82 -144 100 -155 6 -4 10 8 10 29 0 20 -4 36 -10 36 -5 0 -10 5 -10 12 0 6 -11 26 -25 44 -21 27 -23 37 -15 60 6 14 8 35 4 46 -3 10 1 30 10 43 18 27 13 52 -9 52 -10 0 -15 -11 -15 -29z" id="pEifVhr3H"></path><path d="M1986 1181 c-4 -5 9 -19 28 -31 19 -11 37 -26 39 -33 2 -7 8 -9 12 -5 9 8 -46 78 -62 78 -6 0 -14 -4 -17 -9z" id="pEi10tF2j"></path><path d="M1898 1048 c25 -107 25 -108 7 -167 -15 -50 -20 -58 -31 -46 -11 10 -12 20 -4 40 15 40 12 50 -10 30 -14 -13 -20 -14 -20 -5 0 9 -6 8 -19 -4 -19 -18 -19 -18 0 -63 32 -74 15 -60 -42 37 -29 49 -57 90 -61 90 -23 0 -9 -36 70 -175 l89 -155 58 132 57 132 -16 51 c-24 77 -19 78 20 3 19 -38 39 -68 44 -68 6 0 10 31 10 71 0 59 -2 70 -14 60 -10 -9 -29 5 -88 67 l-74 78 24 -108z" id="poNCiWEhX"></path><path d="M1652 1036 c-11 -24 -10 -26 13 -26 28 0 31 8 12 34 -12 17 -14 16 -25 -8z" id="p7utAzLuw"></path></g></g><g style={{ transform: 'none' }} fill="rgb(0,196,213)" id="l5DUMgOIfAFWXnffmSdRc3y"><g style={{ transform: 'none' }}><path d="M2000 1601 c0 -16 11 -18 98 -26 68 -6 82 -5 82 8 0 10 -17 16 -61 21 -85 8 -119 8 -119 -3z" id="pyH9i60h8"></path><path d="M2315 1449 c-73 -31 -104 -54 -92 -66 10 -9 177 73 177 87 0 14 -7 13 -85 -21z" id="pRcdFwOxF"></path><path d="M1868 1438 c-55 -18 -88 -35 -88 -44 0 -20 9 -18 105 18 47 18 85 38 85 45 0 17 1 17 -102 -19z" id="pD8cD6BVM"></path><path d="M2137 1454 c-16 -9 -27 -18 -24 -21 6 -5 67 24 67 32 0 8 -14 5 -43 -11z" id="pH3H2ywQN"></path><path d="M1850 1280 c-8 -5 -12 -10 -10 -12 35 -26 90 -56 90 -50 0 4 -15 22 -33 40 -23 22 -36 29 -47 22z" id="po4IFH4pb"></path><path d="M2250 1169 c-30 -59 -32 -60 -51 -43 -10 9 -21 15 -22 13 -2 -2 -25 -34 -52 -72 -46 -63 -50 -66 -60 -46 -12 21 -12 21 -28 -5 -21 -31 -22 -104 -3 -148 8 -18 24 -59 37 -91 l22 -59 60 149 c33 81 61 149 62 151 2 2 17 -4 34 -12 41 -22 61 -20 61 4 0 11 7 23 15 26 17 7 21 74 5 74 -5 0 -10 21 -10 46 0 40 -16 74 -34 74 -3 0 -20 -27 -36 -61z" id="p2hiTspLU"></path></g></g><g style={{ transform: 'none' }} fill="rgb(0,173,240)" id="l2aBsQaCb5JdawoKmcR9AlS"><g style={{ transform: 'none' }}><path d="M2150 1587 c0 -11 14 -18 48 -22 102 -14 103 -16 24 -63 -105 -62 -99 -72 9 -16 53 28 94 56 94 64 0 17 -48 35 -122 45 -44 6 -53 4 -53 -8z" id="p1E7ShnYes"></path><path d="M2011 1486 c-36 -12 -67 -28 -69 -34 -6 -20 19 -13 88 23 75 39 70 42 -19 11z" id="pMD7Yh6TO"></path><path d="M2445 1496 c-28 -7 -56 -16 -63 -20 -19 -11 -14 -29 6 -21 9 4 46 18 82 31 70 25 57 30 -25 10z" id="povy3tNdF"></path><path d="M2432 1418 c-7 -7 -12 -24 -12 -39 0 -37 -87 -134 -106 -119 -10 9 -16 5 -28 -19 -18 -34 -21 -61 -6 -61 14 0 12 -37 -2 -43 -10 -4 -10 -6 0 -6 19 -1 16 -71 -3 -71 -13 0 -14 -4 -5 -21 7 -11 9 -27 6 -35 -3 -9 1 -14 13 -14 15 0 157 214 284 427 6 10 -6 13 -61 13 -39 0 -73 -5 -80 -12z" id="p5O6EdmnK"></path><path d="M2044 1137 c3 -10 6 -30 6 -44 0 -21 2 -24 15 -13 20 16 19 23 -6 51 -16 19 -19 20 -15 6z" id="pMkCymPU5"></path></g></g><g style={{ transform: 'none' }} fill="rgb(0,245,155)" id="l3rF1u0PHiU17ibh7VeIRl8"><g style={{ transform: 'none' }}><path d="M1535 1340 c-27 -7 -25 -8 18 -9 26 0 47 4 47 9 0 11 -21 11 -65 0z" id="p6p0Hq3FV"></path><path d="M1929 1335 c27 -21 121 -34 121 -17 0 5 -24 12 -52 14 -29 2 -62 8 -73 12 -15 7 -15 4 4 -9z" id="pRzMgx8Tf"></path><path d="M1755 1280 c10 -11 20 -20 22 -20 1 0 3 9 3 20 0 14 -7 20 -22 20 -20 0 -21 -1 -3 -20z" id="pPOqVuQuB"></path><path d="M1480 1273 c0 -7 5 -15 10 -18 6 -3 10 -38 10 -77 l0 -71 -35 39 c-28 32 -34 36 -35 19 0 -11 39 -77 88 -146 48 -68 94 -135 102 -148 16 -23 16 -23 39 28 14 28 27 51 31 51 4 0 12 -11 18 -25 7 -14 19 -24 29 -24 16 1 16 2 -1 6 -14 4 -16 7 -6 13 10 6 4 24 -26 74 l-38 66 -27 -51 -26 -52 -27 36 c-25 33 -27 40 -17 69 8 22 8 34 2 36 -6 2 -3 19 8 41 13 25 16 42 10 52 -5 8 -9 10 -9 4 0 -5 -22 13 -50 40 -27 27 -50 44 -50 38z" id="pqoFo2prQ"></path></g></g><g style={{ transform: 'none' }} fill="rgb(47,51,55)" id="l76qN6I7BSjGcV9CEQfYnPI"><g style={{ transform: 'none' }}><path d="M243 2065 c0 -22 2 -30 4 -17 2 12 2 30 0 40 -3 9 -5 -1 -4 -23z" id="pwQI0ZWyl"></path><path d="M3423 2060 c0 -25 2 -35 4 -22 2 12 2 32 0 45 -2 12 -4 2 -4 -23z" id="putU3gcrS"></path><path d="M2543 1985 c0 -27 2 -38 4 -22 2 15 2 37 0 50 -2 12 -4 0 -4 -28z" id="ppenauPEE"></path><path d="M1840 1992 c0 -7 -15 -13 -32 -13 -32 -2 -33 -2 -4 -6 28 -5 56 11 43 24 -4 3 -7 1 -7 -5z" id="po9zyI9H5"></path><path d="M3683 1940 c0 -36 2 -50 4 -32 2 17 2 47 0 65 -2 17 -4 3 -4 -33z" id="p16SHPHoG7"></path><path d="M3223 1973 c9 -2 25 -2 35 0 9 3 1 5 -18 5 -19 0 -27 -2 -17 -5z" id="p1DlHgltEP"></path><path d="M243 1915 c0 -22 2 -30 4 -17 2 12 2 30 0 40 -3 9 -5 -1 -4 -23z" id="pWwuxmSBq"></path><path d="M3423 1915 c0 -22 2 -30 4 -17 2 12 2 30 0 40 -3 9 -5 -1 -4 -23z" id="ppLG7JkW5"></path><path d="M2318 1194 c-28 -14 -39 -44 -17 -44 8 0 8 -4 0 -14 -7 -8 -11 -29 -9 -46 3 -30 5 -27 40 44 39 78 37 88 -14 60z" id="p18dKu3BqM"></path></g></g></svg>
    );
  };

  return (
    <nav className="bg-white/90 shadow-sm backdrop-blur-sm fixed w-full z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center space-x-3">
            <a href="/#hero">
              <MySVG />
            </a>
          </div>
          
          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            <a href="/#about" className="text-[#003366] hover:text-opacity-80">Über mich</a>
            <a href="/#philosophy" className="text-[#003366] hover:text-opacity-80">Philosophie</a>
            <a href="/#services" className="text-[#003366] hover:text-opacity-80">Leistungen</a>
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
