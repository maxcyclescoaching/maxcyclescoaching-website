import { Navbar } from "@/components/Navbar";
import { NutritionCalculator } from "@/components/NutritionCalculator";
import { SiteFooter } from "@/components/SiteFooter";
import { Helmet } from "react-helmet-async";

const Verpflegungsrechner = () => {
  const canonicalUrl = "https://maxcyclescoaching.de/tools/verpflegungsrechner";

  return (
    <div className="min-h-screen bg-white flex flex-col">
      <Helmet>
        <title>Verpflegungsrechner Radfahren | Kohlenhydrate, Flüssigkeit & Salz</title>
        <meta
          name="description"
          content="Verpflegungsrechner fürs Radfahren: Berechne deinen Bedarf an Kohlenhydraten, Flüssigkeit und Salz für Training und Wettkampf."
        />
        <link rel="canonical" href={canonicalUrl} />
        <meta property="og:title" content="Verpflegungsrechner | MaxCycles Coaching" />
        <meta
          property="og:description"
          content="Berechne deinen Bedarf an Kohlenhydraten, Flüssigkeit und Salz für dein nächstes Event."
        />
        <meta property="og:url" content={canonicalUrl} />
        <meta property="og:type" content="website" />
        <meta name="twitter:card" content="summary_large_image" />
      </Helmet>
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