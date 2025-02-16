import { Navbar } from "@/components/Navbar";
import { Button } from "@/components/ui/button";
import { ArrowRight, Bike, Target, Users, Calendar, LineChart, Trophy, MessageCircle, ActivitySquare, Gauge, Brain, Timer } from "lucide-react";
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
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
      
      <Navbar />
      
      <main>
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

        <section id="about" className="py-20" aria-label="Über mich">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-primary">
              Über mich
            </h2>
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <p className="text-gray-600">
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

        <section id="philosophy" className="py-20 bg-accent" aria-label="Philosophie">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-primary">
            Philosophie
          </h2>
          <div className="text-center max-w-3xl mx-auto">
            <p className="text-gray-600 mb-8">
            Ein effektives Training beginnt mit einer fundierten Analyse: <br />
            Zunächst werte ich die spezifischen Wettkampfanforderungen und das individuelle Athletenprofil aus, welches zuvor durch eine Leistungsdiagnostik ermittelt wird. <br />
            So lassen sich Stärken und Potenziale ebenso identifizieren wie gezielte Ansatzpunkte für Verbesserungen.
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

        <section id="services" className="py-20" aria-label="Leistungen">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-primary">
            Leistungen
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <h3 className="text-2xl font-semibold mb-2 text-[#003366]">1:1 Coaching</h3>
              <p className="text-lg text-gray-600 mb-6">99€/Monat, ohne Mindestlaufzeit</p>
              <ul className="space-y-4 text-left mb-6">
                <li className="flex items-center">
                  <Calendar className="w-6 h-6 text-secondary mr-3 flex-shrink-0" />
                  <span>Maßgeschneiderte Trainingsplanung</span>
                </li>
                <li className="flex items-center">
                  <LineChart className="w-6 h-6 text-secondary mr-3 flex-shrink-0" />
                  <span>Detaillierte Analyse</span>
                </li>
                <li className="flex items-center">
                  <Gauge className="w-6 h-6 text-secondary mr-3 flex-shrink-0" />
                  <span>Regelmäßige Leistungsdiagnostiken</span>
                </li>
                <li className="flex items-center">
                  <Trophy className="w-6 h-6 text-secondary mr-3 flex-shrink-0" />
                  <span>Strategische Wettkampfvorbereitung</span>
                </li>
                <li className="flex items-center">
                  <MessageCircle className="w-6 h-6 text-secondary mr-3 flex-shrink-0" />
                  <span>Persönlicher Support</span>
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

            <div className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <h3 className="text-2xl font-semibold mb-2 text-[#003366]">Individuelle Leistungsdiagnostik</h3>
              <p className="text-lg text-gray-600 mb-6">149€/Diagnostik</p>
              <ul className="space-y-4 text-left mb-6">
                <li className="flex items-center">
                  <ActivitySquare className="w-6 h-6 text-secondary mr-3 flex-shrink-0" />
                  <span>Umfassende Testung</span>
                </li>
                <li className="flex items-center">
                  <Brain className="w-6 h-6 text-secondary mr-3 flex-shrink-0" />
                  <span>Umfangreiche Auswertung</span>
                </li>
                <li className="flex items-center">
                  <Target className="w-6 h-6 text-secondary mr-3 flex-shrink-0" />
                  <span>Gezielte Trainingsoptimierung</span>
                </li>
                <li className="flex items-center">
                  <LineChart className="w-6 h-6 text-secondary mr-3 flex-shrink-0" />
                  <span>Langfristige Entwicklung</span>
                </li>
                <li className="flex items-center">
                  <Timer className="w-6 h-6 text-secondary mr-3 flex-shrink-0" />
                  <span>Flexible Protokolle</span>
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

        <section id="contact" className="py-20 bg-primary text-white" aria-label="Kontakt">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-8">Kontakt</h2>
            <p className="text-xl mb-8 text-center">
              Bereit, deine Ziele zu erreichen? Lass uns gemeinsam daran arbeiten.
            </p>
            
            <ContactForm />
          </div>
        </section>

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
        >
          <div className="space-y-4">
            <p>Mein Ansatz basiert auf strukturierten Trainingsblöcken, die individuell auf die Athleten abgestimmt sind. Ich setze dabei bewusst auf kleine, intendierte Anpassungen, um den Fortschritt messbar und nachhaltig steuerbar zu machen.</p>
            <p>Die Wochenplanung erfolgt flexibel in einem Rhythmus von 1-3 Wochen über TrainingPeaks. So kann das Training optimal auf Alltag, Ernährung und Regeneration abgestimmt werden, um eine ganzheitliche Belastungssteuerung zu gewährleisten. Gleichzeitig bleibt der Fokus stets auf der langfristigen Leistungsentwicklung, damit die Höchstform genau zum richtigen Zeitpunkt erreicht wird.</p>
          </div>
        </ServiceDialog>

        <ServiceDialog
          isOpen={isCoachingOpen}
          onClose={() => setIsCoachingOpen(false)}
          title="1:1 Coaching Details"
        >
          <div className="space-y-4">
            <div>
              <br />
              <p className="font-bold">1. Maßgeschneiderte Trainingsplanung</p>
              <p>Gemeinsam entwickeln wir einen Trainingsplan, der perfekt auf deine Saisonziele, deine verfügbare Zeit und deinen Alltag zugeschnitten ist – für nachhaltigen Fortschritt ohne Überlastung.</p>
            </div>

            <div>
              <p className="font-bold">2. Detaillierte Analyse</p>
              <p>In regelmäßigen Gesprächen betrachten wir nicht nur deine Trainingsdaten, sondern auch Faktoren wie Ernährung, Schlaf und Stress. So entsteht ein ganzheitliches Bild, das dir hilft, dein volles Potenzial auszuschöpfen.</p>
            </div>

            <div>
              <p className="font-bold">3. Regelmäßige Leistungsdiagnostik</p>
              <p>Alle 3 Monate überprüfen wir deinen aktuellen Leistungsstand durch gezielte Tests. So erkennst du Fortschritte frühzeitig und kannst deine Trainingsreize optimal anpassen.</p>
            </div>

            <div>
              <p className="font-bold">4. Strategische Vorbereitung</p>
              <p>Ob Wettkampf, persönliche Bestzeit oder neues Fitnesslevel: Wir entwickeln gemeinsam eine Strategie, die dich Schritt für Schritt an dein Ziel bringt – inklusive mentaler Tipps und Taktikempfehlungen.</p>
            </div>

            <div>
              <p className="font-bold">5. Persönlicher Support</p>
              <p>Du profitierst von einer schnellen und direkten Kommunikation (8–18 Uhr) mit einer garantierten Antwortzeit von maximal 4 Stunden. Bei Bedarf vereinbaren wir gerne ein persönliches Telefon- oder Online-Gespräch, um offene Fragen zu klären und dich bestmöglich zu unterstützen.</p>
            </div>
          </div>
        </ServiceDialog>

        <ServiceDialog
          isOpen={isDiagnosticsOpen}
          onClose={() => setIsDiagnosticsOpen(false)}
          title="Leistungsdiagnostik Details"
        >
          <div className="space-y-4">
            <div>
              <br />
              <p className="font-bold">1. Umfassende Testung</p>
              <p>Erhalte ein ganzheitliches Bild deiner aktuellen Fitness: Wir messen mithilfe modernster Technologien (z.B. mobiles Laktatmessgerät, Muskelsauerstoff- und Herzfrequenzmessungen) alle relevanten Parameter, um deinen Leistungsstand präzise zu erfassen.</p>
            </div>

            <div>
              <p className="font-bold">2. Detaillierte Auswertung</p>
              <p>Wir analysieren deine Werte umfassend und verständlich. Du erfährst genau, wie du in Bezug auf Ausdauer, Kraft und Regeneration aufgestellt bist – die Basis für deine optimale Trainingsplanung.</p>
            </div>

            <div>
              <p className="font-bold">3. Gezielte Trainingsoptimierung</p>
              <p>Auf Grundlage der Testergebnisse erstellen wir individuelle Empfehlungen, um dein Training maximal effizient zu gestalten. So kannst du gezielt an Schwachstellen arbeiten und schneller Fortschritte erzielen.</p>
            </div>

            <div>
              <p className="font-bold">4. Langfristige Entwicklung</p>
              <p>Dein Erfolg steht im Fokus: Durch regelmäßige Wiederholungen der Diagnostik und einen fortlaufenden Abgleich deiner Daten kannst du deine Entwicklung kontinuierlich verfolgen und steuern.</p>
            </div>

            <div>
              <p className="font-bold">5. Flexible Protokolle</p>
              <p>Egal, ob im Labor oder draußen auf deiner Lieblingsstrecke – wir passen die Testbedingungen an deine Ziele und Anforderungen an. Damit erhältst du eine realistische Einschätzung deiner Leistung unter echten Bedingungen.</p>
            </div>
          </div>
        </ServiceDialog>
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
    
    const subject = encodeURIComponent("Neue Kontaktanfrage von MaxCyclesCoaching");
    const body = encodeURIComponent(
      `Name: ${values.name}\nEmail: ${values.email}\n\nNachricht:\n${values.message}`
    );
    const mailtoLink = `mailto:maxcyclescoaching@gmail.com?subject=${subject}&body=${body}`;
    
    window.location.href = mailtoLink;
    
    toast({
      title: "Erfolgreich!",
      description: "Die E-Mail wurde in Ihrem E-Mail-Programm geöffnet. Bitte senden Sie diese ab.",
    });
    
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
