import { Navbar } from "@/components/Navbar";
import { NutritionCalculator } from "@/components/NutritionCalculator";
import { SiteFooter } from "@/components/SiteFooter";

const Verpflegungsrechner = () => {
  return (
    <div className="min-h-screen bg-white flex flex-col">
      <Navbar />
      <main className="flex-grow pt-24 pb-20 px-4">
        <div className="max-w-4xl mx-auto text-center mb-10">
          <h1 className="text-4xl font-bold text-primary mb-4">Verpflegungsrechner</h1>
          <p className="text-gray-600">
            Berechne deinen individuellen Bedarf an Kohlenhydraten, Flüssigkeit und Salz für dein nächstes Event.
          </p>
          <h2 className="text-lg text-gray-700 mt-3">Kohlenhydrate, Flüssigkeit und Salz pro Stunde:</h2>
        </div>
        <NutritionCalculator />
      </main>
      <SiteFooter showEmail />
    </div>
  );
};

export default Verpflegungsrechner;