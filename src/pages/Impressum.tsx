
import { Navbar } from "@/components/Navbar";

const Impressum = () => {
  const currentYear = new Date().getFullYear();

  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <main className="pt-20 pb-16">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-3xl font-bold text-primary mb-8">Impressum</h1>
          
          <div className="prose prose-lg">
            <div className="space-y-6">
              <h2 className="text-2xl font-bold text-primary">Angaben gemäß § 5 TMG</h2>
              <p>MaxCyclesCoaching</p>

              <p>Maximilian Lohr<br />
              MaxCyclesCoaching<br />
              Heimstättenweg 23<br />
              01705 Freital</p>

              <h2 className="text-2xl font-bold text-primary">Kontakt</h2>
              <p>Telefon: +49 151 58424910<br />
              E-Mail: maxcyclescoaching@gmail.com</p>

              <h2 className="text-2xl font-bold text-primary">Gewerbeanmeldung</h2>
              <p>Die Gewerbeerlaubnis wurde am 27.01.2025 von folgender Stelle erteilt: Stadtverwaltung Freital Gewerbeamt.</p>

              <h2 className="text-2xl font-bold text-primary break-words sm:whitespace-nowrap">Verbraucherstreitbeilegung/Universalschlichtungsstelle</h2>
              <p>Wir sind nicht bereit oder verpflichtet, an Streitbeilegungsverfahren vor einer Verbraucherschlichtungsstelle teilzunehmen.</p>

              <h2 className="text-2xl font-bold text-primary">Credits</h2>
              <p>Hauptbild mit freundlicher Genehmigung von Nora Henker: <a href="https://norahenker.de/" target="_blank" className="text-primary hover:underline">https://norahenker.de</a></p>
            </div>

            <p className="mt-8">Quelle: <a href="https://www.e-recht24.de/impressum-generator.html" target="_blank" className="text-primary hover:underline">https://www.e-recht24.de/impressum-generator.html</a></p>
          </div>
        </div>
      </main>

      <footer className="bg-gray-100 py-6" role="contentinfo">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-center text-sm text-gray-600">
            <div>
              © {currentYear} MaxCyclesCoaching. Alle Rechte vorbehalten.
            </div>
            <div className="mt-4 md:mt-0 space-x-4">
              <a href="/impressum" className="hover:text-gray-900">Impressum</a>
              <span className="mx-2">|</span>
              <a href="/datenschutz" className="hover:text-gray-900">Datenschutz</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Impressum;
