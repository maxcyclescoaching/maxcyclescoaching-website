import { Navbar } from "@/components/Navbar";
import { Button } from "@/components/ui/button";
import { ArrowRight, Bike, Target, Users } from "lucide-react";
import { useState } from "react";
import { ServiceDialog } from "@/components/ServiceDialog";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { useToast } from "@/components/ui/use-toast";
import { LightboxDialog } from "@/components/LightboxDialog";

const startYear = 2021;
const currentYear = new Date().getFullYear();
const experienceYears = currentYear - startYear;

const achievements = [
  "German Cycling (BDR) zertifizierter Coach",
  `Über ${experienceYears} Jahre Wettkampferfahrung`,
  "Spezialisiert auf Straßenradsport",
  "Nachweisbare Erfolge in der Athletenentwicklung"
];

const Index = () => {
  const [isPhilosophyOpen, setIsPhilosophyOpen] = useState(false);
  const [isCoachingOpen, setIsCoachingOpen] = useState(false);
  const [isDiagnosticsOpen, setIsDiagnosticsOpen] = useState(false);
  const [isCertificateOpen, setIsCertificateOpen] = useState(false);

  // Add structured data for Google
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "SportsClub",
    "name": "MaxCyclesCoaching",
    "description": "Professionelles Radsport-Coaching, maßgeschneidert auf deine Ziele. Von Anfängern bis zu Elite-Athleten.",
    "image": "/lovable-uploads/hero_img.JPEG",
    "address": {
      "@type": "PostalAddress",
      "addressCountry": "DE"
    },
    "offers": [
      {
        "@type": "Offer",
        "name": "1:1 Coaching",
        "price": "99",
        "priceCurrency": "EUR",
        "description": "Individueller Trainingsplan basierend auf deinen Zielen und deinem Zeitplan"
      },
      {
        "@type": "Offer",
        "name": "Leistungsdiagnostik",
        "price": "149",
        "priceCurrency": "EUR",
        "description": "Detaillierte Analyse deiner Trainingsdaten"
      }
    ]
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Add structured data script */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
      
      <Navbar />
      
      <main>
        {/* Hero Section */}
        <section className="relative h-screen bg-[#003366] animate-fade-in" aria-label="Hero">
        <div className="absolute inset-0">
          <img 
            src="/lovable-uploads/hero_img.JPEG" 
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
              Professionelles Radsport-Coaching, maßgeschneidert auf deine Ziele. Von Amateuren bis zu Elite-Athleten.
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
        <section id="about" className="py-20" aria-label="Über mich">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-primary">
              Über mich
            </h2>
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <p className="text-gray-600 mb-6">
                  Hi, ich bin Max, leidenschaftlicher Radsportler und Coach. Seit 2021 widme ich mich mit voller Begeisterung dem Radsport und biete seit Ende 2023 individuelles 1:1 Coaching und Leistungsdiagnostiken an. Zudem habe ich Anfang 2025 die German Cycling (BDR) Zertifizierung zum BasisCoach erhalten.<br />
                  Mein Wissen baue ich kontinuierlich aus - durch Fachliteratur, Studien und praxisnahe Erfahrungen. Dieses wissenschaftlich fundierte Know-how bildet die Grundlage meiner Trainingsphilosophie, die ich gezielt auf die individuellen Bedürfnisse meiner Athleten übertrage. <br />
                  Mein Ziel? Dich dabei zu unterstützen, dein volles Potenzial auf dem Rad auszuschöpfen!
                </p>
              </div>
              <div className="bg-accent rounded-lg p-8 self-start">
                <ul className="space-y-4">
                  {achievements.map((achievement, index) => (
                    <li 
                      key={index} 
                      className={`flex items-center text-gray-700 ${
                        index === 0 ? 
                        'cursor-pointer group transition-all duration-200 hover:text-[#003366] relative' : ''
                      }`}
                      onClick={() => {
                        if (index === 0) setIsCertificateOpen(true);
                      }}
                    >
                      <Bike className={`w-6 h-6 mr-3 ${
                        index === 0 ? 'text-secondary group-hover:text-[#003366] transition-colors' : 'text-secondary'
                      }`} />
                      {index === 0 ? (
                        <span className="inline-flex items-center">
                          {achievement}
                          <span className="ml-2 text-xs text-[#003366] font-medium">(Zertifikat ansehen)</span>
                        </span>
                      ) : achievement}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Philosophy Section */}
        <section id="philosophy" className="py-20 bg-accent" aria-label="Philosophie">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-primary">
            Philosophie
          </h2>
          <div className="text-center max-w-3xl mx-auto">
            <p className="text-gray-600 mb-8">
              Meine Coaching-Philosophie basiert auf einem ganzheitlichen Ansatz, der nicht nur die physische Leistung, sondern auch mentale Stärke und Ernährung berücksichtigt. Jeder Athlet ist einzigartig und verdient einen individuell zugeschnittenen Trainingsplan.
            </p>
            <Button 
                  variant="secondary" 
                  className="text-white"
                  onClick={() => setIsPhilosophyOpen(true)}
                >
                  Mehr über meinen Ansatz
            </Button>
          </div>
        </div>
        </section>

        {/* Services Section */}
        <section id="services" className="py-20" aria-label="Leistungen">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-primary">
            Leistungen
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            {/* 1:1 Coaching */}
            <div className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <h3 className="text-2xl font-semibold mb-2 text-[#003366]">1:1 Coaching</h3>
              <p className="text-lg text-gray-600 mb-6">99€/Monat, ohne Mindestlaufzeit</p>
              <ul className="space-y-4 text-left mb-6">
                <li className="flex items-start">
                  <Target className="w-6 h-6 text-secondary mt-1 mr-3 flex-shrink-0" />
                  <span>Individueller Trainingsplan basierend auf deinen Zielen und deinem Zeitplan</span>
                </li>
                <li className="flex items-start">
                  <Users className="w-6 h-6 text-secondary mt-1 mr-3 flex-shrink-0" />
                  <span>Regelmäßiges Feedback und Anpassungen deines Trainingsplans</span>
                </li>
                <li className="flex items-start">
                  <Bike className="w-6 h-6 text-secondary mt-1 mr-3 flex-shrink-0" />
                  <span>Direkter Zugang zu professioneller Coaching-Unterstützung</span>
                </li>
              </ul>
              <div className="space-y-3">
                <Button 
                  variant="secondary" 
                  className="w-full text-white"
                  onClick={() => setIsCoachingOpen(true)}
                >
                  Mehr erfahren
                </Button>
                <a href="#contact">
                  <Button variant="outline" className="w-full">
                    Anfragen
                  </Button>
                </a>
              </div>
            </div>

            {/* Leistungsdiagnostik */}
            <div className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <h3 className="text-2xl font-semibold mb-2 text-[#003366]">Individuelle Leistungsdiagnostik</h3>
              <p className="text-lg text-gray-600 mb-6">149€</p>
              <ul className="space-y-4 text-left mb-6">
                <li className="flex items-start">
                  <Target className="w-6 h-6 text-secondary mt-1 mr-3 flex-shrink-0" />
                  <span>Detaillierte Analyse deiner Trainingsdaten</span>
                </li>
                <li className="flex items-start">
                  <Users className="w-6 h-6 text-secondary mt-1 mr-3 flex-shrink-0" />
                  <span>Optimierung der Leistung durch datenbasierte Erkenntnisse</span>
                </li>
                <li className="flex items-start">
                  <Bike className="w-6 h-6 text-secondary mt-1 mr-3 flex-shrink-0" />
                  <span>Kontinuierliche Verfolgung deiner Fortschritte</span>
                </li>
              </ul>
              <div className="space-y-3">
                <Button 
                  variant="secondary" 
                  className="w-full text-white"
                  onClick={() => setIsDiagnosticsOpen(true)}
                >
                  Mehr erfahren
                </Button>
                <a href="#contact">
                  <Button variant="outline" className="w-full">
                    Anfragen
                  </Button>
                </a>
              </div>
            </div>
          </div>
        </div>
        </section>

        {/* Testimonials Section */}
        <section id="testimonials" className="py-20 bg-gray-100" aria-label="Testimonials">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-8 text-[#003366]">Das sagen meine Athlet:innen</h2>
          <div className="space-y-8">
            <div className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <p className="text-xl mb-4">"Das Coaching hat meine Leistung auf ein neues Level gehoben. Ich habe meine persönlichen Bestzeiten erreicht!"</p>
              <p className="font-semibold text-secondary">- Max Mustermann</p>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <p className="text-xl mb-4">"Dank der individuellen Betreuung fühle ich mich bestens vorbereitet für meine Wettkämpfe."</p>
              <p className="font-semibold text-secondary">- Anna Müller</p>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <p className="text-xl mb-4">"Die Leistungsdiagnostik hat mir geholfen, meine Schwächen zu erkennen und gezielt daran zu arbeiten."</p>
              <p className="font-semibold text-secondary">- Peter Schmidt</p>
            </div>
          </div>
        </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="py-20 bg-primary text-white" aria-label="Kontakt">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-8">Kontakt</h2>
            <p className="text-xl mb-8 text-center">
              Bereit, deine Ziele zu erreichen? Lass uns gemeinsam daran arbeiten.
            </p>
            
            <ContactForm />
          </div>
        </section>

        {/* Footer Section */}
        <footer className="bg-gray-100 py-6" role="contentinfo">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col md:flex-row justify-between items-center text-sm text-gray-600">
              <div>
                © {currentYear} MaxCyclesCoaching. Alle Rechte vorbehalten.
              </div>
              <div className="mt-4 md:mt-0 space-x-4">
                <a href="#" className="hover:text-gray-900">Impressum</a>
                <span className="mx-2">|</span>
                <a href="#" className="hover:text-gray-900">Datenschutz</a>
              </div>
            </div>
          </div>
        </footer>

        <LightboxDialog
          isOpen={isCertificateOpen}
          onClose={() => setIsCertificateOpen(false)}
          imageSrc="/lovable-uploads/german_cycling_certificate.png"
          imageAlt="German Cycling (BDR) Coach Certificate"
        />

        <ServiceDialog
          isOpen={isPhilosophyOpen}
          onClose={() => setIsPhilosophyOpen(false)}
          title="Mein Coaching-Ansatz"
          description="Mein Coaching-Ansatz basiert auf einer engen Zusammenarbeit mit jedem einzelnen Athleten. Durch die Kombination von wissenschaftlichen Trainingsprinzipien und praktischer Erfahrung entwickle ich maßgeschneiderte Trainingspläne, die optimal auf deine individuellen Ziele und Bedürfnisse abgestimmt sind."
        />

        <ServiceDialog
          isOpen={isCoachingOpen}
          onClose={() => setIsCoachingOpen(false)}
          title="1:1 Coaching Details"
          description="Das 1:1 Coaching bietet dir eine vollständig personalisierte Betreuung. Du erhältst einen auf dich zugeschnittenen Trainingsplan, der sich kontinuierlich an deine Fortschritte anpasst. Regelmäßige Feedback-Gespräche und Anpassungen des Plans gewährleisten eine optimale Entwicklung. Die monatliche Gebühr beträgt 99€, ohne Mindestlaufzeit."
        />

        <ServiceDialog
          isOpen={isDiagnosticsOpen}
          onClose={() => setIsDiagnosticsOpen(false)}
          title="Leistungsdiagnostik Details"
          description="Die individuelle Leistungsdiagnostik umfasst eine umfassende Analyse deiner aktuellen Fitness und Leistungsfähigkeit. Durch modernste Methoden und Tools können wir deine Stärken und Verbesserungspotenziale identifizieren. Die Analyse kostet einmalig 149€ und beinhaltet eine detaillierte Auswertung sowie Handlungsempfehlungen."
        />
      </main>
    </div>
  );
};

const ContactForm = () => {
  const { toast } = useToast();

  const formSchema = z.object({
    name: z.string().min(2, "Name muss mindestens 2 Zeichen lang sein"),
    email: z.string().email("Bitte geben Sie eine gültige E-Mail-Adresse ein"),
    message: z.string().min(10, "Nachricht muss mindestens 10 Zeichen lang sein"),
  });

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      message: "",
    },
  });

  const onSubmit = async (values: z.infer<typeof formSchema>) => {
    console.log("Form submitted with values:", values);
    
    // Create mailto link with form data
    const subject = encodeURIComponent("Neue Kontaktanfrage von MaxCyclesCoaching");
    const body = encodeURIComponent(
      `Name: ${values.name}\nEmail: ${values.email}\n\nNachricht:\n${values.message}`
    );
    const mailtoLink = `mailto:maxcyclescoaching@gmail.com?subject=${subject}&body=${body}`;
    
    // Open default email client
    window.location.href = mailtoLink;
    
    // Show success message
    toast({
      title: "Erfolgreich!",
      description: "Die E-Mail wurde in Ihrem E-Mail-Programm geöffnet. Bitte senden Sie diese ab.",
    });
    
    // Reset form
    form.reset();
  };

  return (
    <div className="max-w-2xl mx-auto bg-white rounded-lg p-8 text-gray-900">
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
          <FormField
            control={form.control}
            name="name"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Name</FormLabel>
                <FormControl>
                  <Input placeholder="Ihr Name" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          
          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem>
                <FormLabel>E-Mail</FormLabel>
                <FormControl>
                  <Input type="email" placeholder="ihre.email@beispiel.de" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          
          <FormField
            control={form.control}
            name="message"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Nachricht</FormLabel>
                <FormControl>
                  <Textarea 
                    placeholder="Ihre Nachricht an uns" 
                    className="min-h-[150px]"
                    {...field} 
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          
          <Button 
            type="submit" 
            size="lg"
            className="w-full bg-[#003366] hover:bg-[#002244]"
          >
            Nachricht senden
          </Button>
        </form>
      </Form>
    </div>
  );
};

export default Index;
