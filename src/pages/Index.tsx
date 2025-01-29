import { Navbar } from "@/components/Navbar";
import { Button } from "@/components/ui/button";
import { ArrowRight, Bike, Target, Users } from "lucide-react";

const Index = () => {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      
      {/* Hero Section */}
      <section className="relative h-screen bg-[#003366] animate-fade-in">
        <div className="absolute inset-0">
          <img 
            src="/lovable-uploads/hero_img.png" 
            alt="Hero Background" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-[#003366]/60" />
        </div>
        <div className="relative h-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-center">
          <div className="text-center text-white">
            <img 
              src="/lovable-uploads/logo_white.png" 
              alt="MaxCyclesCoaching Logo" 
              className="h-24 sm:h-32 w-auto mx-auto mb-6 sm:mb-8"
            />
            <h1 className="text-4xl sm:text-5xl md:text-7xl font-bold mb-4 sm:mb-6">
              MaxCyclesCoaching
            </h1>
            <p className="text-lg sm:text-xl md:text-2xl mb-6 sm:mb-8 max-w-2xl mx-auto px-4">
              Professionelles Radsport-Coaching, maßgeschneidert auf deine Ziele. Von Anfängern bis zu Elite-Athleten.
            </p>
            <a href="#about">
              <Button size="lg" className="bg-[#003366] hover:bg-[#002244] text-white">
                Starte jetzt <ArrowRight className="ml-2" />
              </Button>
            </a>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-primary">
            Über mich
          </h2>
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <p className="text-gray-600 mb-6">
                Mit umfangreicher Erfahrung im Wettkampf-Radsport und als Coach widme ich mich der Entwicklung von Radfahrern aller Leistungsstufen. Ob du dich auf deine erste Sportveranstaltung vorbereitest oder Podiumsplätze anstrebst - mein personalisierter Coaching-Ansatz verbindet wissenschaftliche Trainingsprinzipien mit praktischer Erfahrung.
              </p>
              <a href="#philosophy">
                <Button variant="outline" className="border-primary text-primary hover:bg-primary hover:text-white">
                  Mehr über meinen Ansatz
                </Button>
              </a>
            </div>
            <div className="bg-accent rounded-lg p-8">
              <ul className="space-y-4">
                {achievements.map((achievement, index) => (
                  <li key={index} className="flex items-center text-gray-700">
                    <Bike className="w-6 h-6 text-secondary mr-3" />
                    {achievement}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Philosophy Section */}
      <section id="philosophy" className="py-20 bg-accent">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-primary">
            Philosophie
          </h2>
          <div className="text-center max-w-3xl mx-auto">
            <p className="text-gray-600 mb-8">
              Meine Coaching-Philosophie basiert auf einem ganzheitlichen Ansatz, der nicht nur die physische Leistung, sondern auch mentale Stärke und Ernährung berücksichtigt. Jeder Athlet ist einzigartig und verdient einen individuell zugeschnittenen Trainingsplan.
            </p>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-primary">
            Leistungen
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            {/* 1:1 Coaching */}
            <div className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <h3 className="text-2xl font-semibold mb-6 text-[#003366]">1:1 Coaching</h3>
              <ul className="space-y-4 text-left">
                <li className="flex items-start">
                  <Target className="w-6 h-6 text-[#003366] mt-1 mr-3 flex-shrink-0" />
                  <span>Individueller Trainingsplan basierend auf deinen Zielen und deinem Zeitplan</span>
                </li>
                <li className="flex items-start">
                  <Users className="w-6 h-6 text-[#003366] mt-1 mr-3 flex-shrink-0" />
                  <span>Regelmäßiges Feedback und Anpassungen deines Trainingsplans</span>
                </li>
                <li className="flex items-start">
                  <Bike className="w-6 h-6 text-[#003366] mt-1 mr-3 flex-shrink-0" />
                  <span>Direkter Zugang zu professioneller Coaching-Unterstützung</span>
                </li>
              </ul>
            </div>

            {/* Leistungsdiagnostik */}
            <div className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <h3 className="text-2xl font-semibold mb-6 text-[#003366]">Individuelle Leistungsdiagnostik</h3>
              <ul className="space-y-4 text-left">
                <li className="flex items-start">
                  <Target className="w-6 h-6 text-[#003366] mt-1 mr-3 flex-shrink-0" />
                  <span>Detaillierte Analyse deiner Trainingsdaten</span>
                </li>
                <li className="flex items-start">
                  <Users className="w-6 h-6 text-[#003366] mt-1 mr-3 flex-shrink-0" />
                  <span>Optimierung der Leistung durch datenbasierte Erkenntnisse</span>
                </li>
                <li className="flex items-start">
                  <Bike className="w-6 h-6 text-[#003366] mt-1 mr-3 flex-shrink-0" />
                  <span>Kontinuierliche Verfolgung deiner Fortschritte</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section id="testimonials" className="py-20 bg-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-8 text-[#003366]">Testimonials</h2>
          <div className="space-y-8">
            <div className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <p className="text-xl mb-4">"Das Coaching hat meine Leistung auf ein neues Level gehoben. Ich habe meine persönlichen Bestzeiten erreicht!"</p>
              <p className="font-semibold">- Max Mustermann</p>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <p className="text-xl mb-4">"Dank der individuellen Betreuung fühle ich mich bestens vorbereitet für meine Wettkämpfe."</p>
              <p className="font-semibold">- Anna Müller</p>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <p className="text-xl mb-4">"Die Leistungsdiagnostik hat mir geholfen, meine Schwächen zu erkennen und gezielt daran zu arbeiten."</p>
              <p className="font-semibold">- Peter Schmidt</p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-primary text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-8">Kontakt</h2>
          <p className="text-xl mb-8">
            Bereit, deine Ziele zu erreichen? Lass uns gemeinsam daran arbeiten.
          </p>
          <Button size="lg" variant="secondary">
            Kontaktiere mich
          </Button>
        </div>
      </section>
    </div>
  );
};

const achievements = [
  "Lizenzierter Radsport-Trainer",
  "Über 10 Jahre Wettkampferfahrung",
  "Spezialisiert auf Straßenrad- und Zeitfahrtraining",
  "Nachgewiesene Erfolge in der Athletenentwicklung"
];

export default Index;