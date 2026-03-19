import { Navbar } from "@/components/Navbar";
import { GearCalculator } from "@/components/GearCalculator";
import { SiteFooter } from "@/components/SiteFooter";

const Übersetzungsrechner = () => {
  return (
    <div className="min-h-screen bg-white flex flex-col">
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