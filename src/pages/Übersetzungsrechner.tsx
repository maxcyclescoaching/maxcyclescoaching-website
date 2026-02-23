import { Navbar } from "@/components/Navbar";
import { GearCalculator } from "@/components/GearCalculator";
import { Helmet } from "react-helmet-async";
import { SiteFooter } from "@/components/SiteFooter";

const Übersetzungsrechner = () => {
  const canonicalUrl = "https://maxcyclescoaching.de/tools/uebersetzungsrechner";

  return (
    <div className="min-h-screen bg-white flex flex-col">
      <Helmet>
        <title>Übersetzungsrechner / Ritzelrechner Radfahren | Trittfrequenz, Geschwindigkeit & Übersetzung</title>
        <meta
          name="description"
          content="Übersetzungsrechner fürs Radfahren: Berechne die passende Übersetzung für Trittfrequenz, Tempo und Streckenprofil."
        />
        <link rel="canonical" href={canonicalUrl} />
        <meta property="og:title" content="Übersetzungsrechner | MaxCycles Coaching" />
        <meta
          property="og:description"
          content="Berechne die passende Übersetzung für dein nächstes Event auf dem Rad."
        />
        <meta property="og:url" content={canonicalUrl} />
        <meta property="og:type" content="website" />
        <meta name="twitter:card" content="summary_large_image" />
      </Helmet>
      <Navbar />
      <main className="flex-grow pt-24 pb-20 px-4">
        <div className="max-w-4xl mx-auto text-center mb-10">
          <h1 className="text-4xl font-bold text-primary mb-4">Übersetzungsrechner / Ritzelrechner</h1>
          <p className="text-gray-600">
            Berechne deine ideale Übersetzung für dein nächstes Event.
          </p>
          <h2 className="text-lg text-gray-700">Passende Übersetzung (Kettenblatt & Kassette) für jede Strecke und Leistung:</h2>
        </div>
        <GearCalculator />
      </main>

      <SiteFooter showEmail />
    </div>
  );
};

export default Übersetzungsrechner;