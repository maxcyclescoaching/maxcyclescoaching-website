
import { Navbar } from "@/components/Navbar";

const Datenschutz = () => {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <main className="pt-20 pb-16">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-3xl font-bold text-[#003366] mb-8">Datenschutzerklärung</h1>
          
          <div className="prose prose-lg">
            {/* Add your Datenschutz content here */}
          </div>
        </div>
      </main>
    </div>
  );
};

export default Datenschutz;
