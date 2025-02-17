
import { Navbar } from "@/components/Navbar";

const Impressum = () => {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <main className="pt-20 pb-16">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-3xl font-bold text-[#003366] mb-8">Impressum</h1>
          
          <div className="prose prose-lg">
            <pre className="whitespace-pre-wrap text-sm bg-gray-50 p-4 rounded-lg">
              {`<h2>Angaben gemäß § 5 TMG</h2>
<p>MaxCyclesCoaching</p>

<p>Maximilian Lohr<br />
MaxCyclesCoaching<br />
Heimstättenweg 23<br />
01705 Freital</p>

<h2>Kontakt</h2>
<p>Telefon: +49 151 58424910<br />
E-Mail: maxcyclescoaching@gmail.com</p>

<h2>Gewerbeanmeldung</h2>
<p>Die Gewerbeerlaubnis wurde am 27.01.2025 von folgender Stelle erteilt: Stadtverwaltung Freital Gewerbeamt.</p>

<h2>Verbraucherstreitbeilegung/Universalschlichtungsstelle</h2>
<p>Wir sind nicht bereit oder verpflichtet, an Streitbeilegungsverfahren vor einer Verbraucherschlichtungsstelle teilzunehmen.</p>`}
            </pre>

            <p className="mt-4">Quelle: <a href="https://www.e-recht24.de/impressum-generator.html">https://www.e-recht24.de/impressum-generator.html</a></p>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Impressum;
