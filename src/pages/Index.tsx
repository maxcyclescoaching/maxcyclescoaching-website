import { Navbar } from "@/components/Navbar";
import { Button } from "@/components/ui/button";
import { ArrowRight, Bike, Target, Users } from "lucide-react";

const Index = () => {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      
      {/* Hero Section */}
      <section className="relative h-[600px] bg-gradient-to-r from-primary to-blue-900 animate-fade-in">
        <div className="absolute inset-0 bg-black/50" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full flex items-center">
          <div className="text-white">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Max Cycles Coaching
            </h1>
            <p className="text-xl md:text-2xl mb-8 max-w-2xl">
              Professionelles Radsport-Coaching, maßgeschneidert auf deine Ziele. Von Anfängern bis zu Elite-Athleten.
            </p>
            <Button size="lg" className="bg-secondary hover:bg-orange-600">
              Starte jetzt <ArrowRight className="ml-2" />
            </Button>
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
              <Button variant="outline" className="border-primary text-primary hover:bg-primary hover:text-white">
                Mehr über meinen Ansatz
              </Button>
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
          <div className="grid md:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
                <service.icon className="w-12 h-12 text-secondary mb-4" />
                <h3 className="text-xl font-semibold mb-3">{service.title}</h3>
                <p className="text-gray-600">{service.description}</p>
              </div>
            ))}
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

const services = [
  {
    icon: Target,
    title: "Individueller Trainingsplan",
    description: "Maßgeschneiderte Trainingsprogramme, die auf deine spezifischen Ziele, deinen Zeitplan und dein aktuelles Fitnesslevel abgestimmt sind."
  },
  {
    icon: Users,
    title: "Persönliches Coaching",
    description: "Regelmäßiges Feedback und Anpassungen deines Trainingsplans mit direktem Zugang zu professioneller Coaching-Unterstützung."
  },
  {
    icon: Bike,
    title: "Leistungsanalyse",
    description: "Detaillierte Analyse deiner Trainingsdaten zur Optimierung der Leistung und Verfolgung deiner Fortschritte."
  }
];

const achievements = [
  "Lizenzierter Radsport-Trainer",
  "Über 10 Jahre Wettkampferfahrung",
  "Spezialisiert auf Straßenrad- und Zeitfahrtraining",
  "Nachgewiesene Erfolge in der Athletenentwicklung"
];

export default Index;