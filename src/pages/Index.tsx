
import { Navbar } from "@/components/Navbar";
import { Button } from "@/components/ui/button";
import { ArrowRight, Bike, Target, Users, Calendar, LineChart, Trophy, MessageCircle, ActivitySquare, Gauge, NotebookPen, Timer, FlaskConical } from "lucide-react";
import { useState, lazy, Suspense, useMemo } from "react";
import { ServiceDialog } from "@/components/ServiceDialog";
import { LightboxDialog } from "@/components/LightboxDialog";

const ContactForm = lazy(() => import("@/components/ContactForm"));

const startYear = 2021;
const currentYear = new Date().getFullYear();
const experienceYears = currentYear - startYear;

const Index = () => {
  const [isPhilosophyOpen, setIsPhilosophyOpen] = useState(false);
  const [isCoachingOpen, setIsCoachingOpen] = useState(false);
  const [isDiagnosticsOpen, setIsDiagnosticsOpen] = useState(false);
  const [isCertificateOpen, setIsCertificateOpen] = useState(false);

  const achievements = useMemo(() => [
    "German Cycling (BDR) zertifizierter Coach",
    `Über ${experienceYears} Jahre Wettkampferfahrung`,
    "Spezialisiert auf Straßenradsport",
    "Nachweisbare Erfolge in der Athletenentwicklung"
  ], [experienceYears]);

  const structuredData = useMemo(() => ({
    "@context": "https://schema.org",
    "@type": "SportsClub",
    "name": "MaxCyclesCoaching",
    "description": "Professionelles Radsport-Coaching, maßgeschneidert auf deine Ziele. Von Anfängern bis zu Elite-Athleten.",
    "image": "/images/hero_img.webp",
    "address": {
      "@type": "PostalAddress",
      "addressCountry": "DE",
      "adressLocality": "Dresden",
      "postalCode": "01189"
    },
    "email": "maxcyclescoaching@gmail.com",
    "sameAs": [
      "https://www.instagram.com/maxcyclescoaching",
    ],
    "offers": [
      {
        "@type": "Offer",
        "name": "1:1 Coaching",
        "price": "99",
        "priceCurrency": "EUR",
        "description": "Individueller Trainingsplan basierend auf deinen Zielen und deinem Zeitplan",
        "availability": "https://schema.org/InStock",
        "url": "https://maxcyclescoaching.com/#services"
      },
      {
        "@type": "Offer",
        "name": "Leistungsdiagnostik",
        "price": "149",
        "priceCurrency": "EUR",
        "description": "Persönliche Diagnostik mittels Laktat und Muskelsauerstoffmessung deines metabolischen Profils",
        "availability": "https://schema.org/InStock",
        "url": "https://maxcyclescoaching.com/#services"
      }
    ]
  }), []);

  return (
    <div className="min-h-screen bg-white">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
      
      <Navbar />
      
      <main>
        <section id="hero" className="relative h-screen bg-primary animate-fade-in" aria-label="Hero">
          <div className="absolute inset-0">
            <img 
                src="/images/hero_img.webp" 
                alt="Cyclist in front of beautiful landscape" 
                className="w-full h-full object-cover"
                loading="eager" 
                fetchPriority="high"
            />
            <div className="absolute inset-0 bg-primary/25" />
          </div>
          <div className="relative h-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-center">
            <div className="text-center text-white">
              <img 
                src="/images/logo_white.png" 
                alt="MaxCyclesCoaching Logo" 
                className="h-24 sm:h-32 w-auto mx-auto mb-6 sm:mb-8"
                loading="eager"
              />
              <h1 className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-bold mb-4 sm:mb-6 text-shadow-lg">
                MaxCyclesCoaching
              </h1>
              <p className="text-xl sm:text-2xl md:text-3xl mb-8 sm:mb-10 max-w-3xl mx-auto px-4 font-medium text-shadow">
                Professionelles Radsport-Coaching, maßgeschneidert auf deine Ziele. Von Amateuren bis zu Elite-Athleten.
              </p>
              <a href="#services">
                <Button 
                  size="lg" 
                  variant="secondary"
                  className="text-white transform hover:scale-105 transition-all duration-200 text-lg py-6 px-8"
                >
                  Starte jetzt <ArrowRight className="ml-1 w-6 h-6" />
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
            <div className="text-center md:text-left grid md:grid-cols-2 gap-12 items-center">
              <div>
                <p className="text-gray-600">
                Hi, ich bin Max – <b>zertifizierter Radsportcoach</b> und <b>leidenschaftlicher Athlet</b>. <br />
                Seit meiner Jugend fahre ich ambitioniert Rennrad und konnte dabei auch schon einige persönliche Erfolge feiern. <br />
                Meine Schwerpunkte als Coach liegen auf <b>individuellem 1:1 Coaching</b> und <b>Laktat-Leistungsdiagnostiken</b>, die ich seit Ende 2023 anbiete. <br />
                Aufgrund meines Wirtschaftsinformatik-Studiums an der HTW-Dresden liegt mir die Arbeit mit <b>wissenschaftlichen Studien und Fachliteratur</b> – ergänzt durch wertvolle <b>Erfahrungen</b> aus <b>Training</b> und <b>Wettkampf</b>. <br />
                Mein Ziel? Dich dabei zu unterstützen, dein <b>volles Potenzial auf dem Rad auszuschöpfen</b>!        
                </p>
              </div>
              <div className="bg-accent rounded-lg p-10 self-center">
                <ul className="space-y-5 text-left">
                  {achievements.map((achievement, index) => (
                    <li 
                      key={index} 
                      className={`flex items-center text-gray-700 md:text-mdlg ${
                        index === 0 ? 
                        'cursor-pointer group transition-all duration-200 hover:text-primary relative' : ''
                      }`}
                      onClick={() => {
                        if (index === 0) setIsCertificateOpen(true);
                      }}
                    >
                      <Bike className={`w-6 h-6 mr-3 flex-shrink-0 ${
                        index === 0 ? 'text-secondary group-hover:text-primary transition-colors' : 'text-secondary'
                      }`} />
                      {index === 0 ? (
                        <span className="inline-flex items-center">
                          {achievement}
                          <span className="ml-2 text-xs text-primary font-medium">(Zertifikat ansehen)</span>
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
              Ein <b>effektives Training</b> beginnt mit einer <b>fundierten Analyse</b>: <br />
              Zunächst erfasse ich deine <b>Wettkampfziele</b> und erstelle ein <b>individuelles</b> Athletenprofil mittels einer detaillierten <b>Leistungsdiagnostik.</b> <br />
              So erkennen wir nicht nur deine <b>Stärken</b>, sondern identifizieren auch gezielt <b>Potenziale</b> – der Schlüssel zu <b>nachhaltigen Verbesserungen</b>.
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
              <div className="bg-gradient-to-br from-white to-[#E8F0F8] p-8 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 border border-blue-100">
                <div className="flex items-center gap-3 mb-4">
                  <Users className="w-8 h-8 text-secondary" />
                  <h3 className="text-2xl font-semibold text-primary">1:1 Coaching</h3>
                </div>
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
                <div className="space-y-4">
                  <Button 
                    variant="secondary" 
                    className="w-full text-white mb-1"
                    onClick={() => setIsCoachingOpen(true)}
                  >
                    Mehr erfahren
                  </Button>
                  <a href="#contact">
                    <Button variant="outline" className="w-full border-secondary text-secondary hover:text-secondary/50">
                      Anfragen
                    </Button>
                  </a>
                </div>
              </div>

              <div className="bg-gradient-to-br from-white to-[#E8F0F8] p-8 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-200">
                <div className="flex items-center gap-3 mb-4">
                  <ActivitySquare className="w-8 h-8 text-primary" />
                  <h3 className="text-2xl font-semibold text-primary">Individuelle Leistungsdiagnostik</h3>
                </div>
                <p className="text-lg text-gray-600 mb-6">149€/Diagnostik</p>
                <ul className="space-y-4 text-left mb-6">
                  <li className="flex items-center">
                    <FlaskConical className="w-6 h-6 text-primary mr-3 flex-shrink-0" />
                    <span className="text-primary">Umfassende Testung</span>
                  </li>
                  <li className="flex items-center">
                    <NotebookPen className="w-6 h-6 text-primary mr-3 flex-shrink-0" />
                    <span className="text-primary">Umfangreiche Auswertung</span>
                  </li>
                  <li className="flex items-center">
                    <Target className="w-6 h-6 text-primary mr-3 flex-shrink-0" />
                    <span className="text-primary">Gezielte Trainingsoptimierung</span>
                  </li>
                  <li className="flex items-center">
                    <LineChart className="w-6 h-6 text-primary mr-3 flex-shrink-0" />
                    <span className="text-primary">Langfristige Entwicklung</span>
                  </li>
                  <li className="flex items-center">
                    <Timer className="w-6 h-6 text-primary mr-3 flex-shrink-0" />
                    <span className="text-primary">Flexible Protokolle</span>
                  </li>
                </ul>
                <div className="space-y-4">
                  <Button 
                    variant="default" 
                    className="w-full text-white mb-1"
                    onClick={() => setIsDiagnosticsOpen(true)}
                  >
                    Mehr erfahren
                  </Button>
                  <a href="#contact">
                    <Button variant="outline" className="w-full border-primary text-primary hover:text-primary/50">
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
            <h2 className="text-3xl md:text-4xl font-bold mb-8 text-primary">Das sagen meine Kund*innen</h2>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="bg-white p-8 rounded-lg shadow-md hover:shadow-xl transition-all duration-300 flex flex-col h-full">
                <div className="flex flex-col items-center mb-2">
                  <img 
                    src="/images/mandy_profile_img.png" 
                    alt="Profilbild von Mandy Salzmann" 
                    className="w-16 h-16 rounded-full mb-4"
                  />
                  <div className="flex gap-1">
                    {[...Array(5)].map((_, i) => (
                      <svg key={i} className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                    ))}
                  </div>
                </div>
                <div className="flex flex-col flex-grow justify-center">
                  <p className="text-lg md:text-base text-center mb-4">"Die umfangreiche Leistungsdiagnostik ist professionell und auf dem aktuellsten Stand. <br/> Man erhält hinterher nicht nur eine ausführliche Auswertung, sondern auch eine Anleitung und Tipps für das zukünftige Training, um leistungsfähiger sprich besser zu werden. Danke Max!"</p>
                </div>
                <div className="mt-auto">
                  <p className="font-semibold text-primary">- Mandy, Lommatzsch</p>
                  <a 
                    href="https://www.strava.com/activities/11117887697" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-[#fc4c01] hover:text-[#fc4c01]/50 mt-2 font-medium transition-colors duration-200"
                  >
                    <img src="/images/strava.svg" alt="Strava" className="w-5 h-5 transition-transform duration-200 group-hover:scale-110" />
                    <span className="border-b border-transparent hover:border-[#fc4c01]">Auf Strava ansehen</span>
                  </a>
                </div>
              </div>
              <div className="bg-white p-8 rounded-lg shadow-md hover:shadow-xl transition-all duration-300 flex flex-col h-full">
                <div className="flex flex-col items-center mb-2">
                  <img 
                    src="/images/ken_profile_img.jpeg" 
                    alt="Profilbild von Ken Wagner" 
                    className="w-16 h-16 rounded-full mb-4"
                  />
                  <div className="flex gap-1">
                    {[...Array(5)].map((_, i) => (
                      <svg key={i} className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                    ))}
                  </div>
                </div>
                <div className="flex flex-col flex-grow justify-center">
                  <p className="text-lg text-center mb-4">"Durch Max konnte ich an meinen Schwächen arbeiten, meine FTP deutlich steigern und beim Dreiländergiro 2024 den 13. Platz von 1500 Startern erreichen. Danke Max 🥳💪"</p>
                </div>
                <div className="mt-auto">
                  <p className="font-semibold text-primary">- Ken Wagner, Dresden</p>
                  <a 
                    href="https://www.strava.com/activities/11773171164" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-[#fc4c01] hover:text-[#fc4c01]/50 mt-2 font-medium transition-colors duration-200"
                  >
                    <img src="/images/strava.svg" alt="Strava" className="w-5 h-5 transition-transform duration-200 group-hover:scale-110" />
                    <span className="border-b border-transparent hover:border-[#fc4c01]">Auf Strava ansehen</span>
                  </a>
                </div>
              </div>
              <div className="bg-white p-8 rounded-lg shadow-md hover:shadow-xl transition-all duration-300 flex flex-col h-full">
                <div className="flex flex-col items-center mb-2">
                  <img 
                    src="/images/jeremias_profile_img.jpg" 
                    alt="Profilbild von Jeremias Zieher" 
                    className="w-16 h-16 rounded-full mb-4"
                  />
                  <div className="flex gap-1">
                    {[...Array(5)].map((_, i) => (
                      <svg key={i} className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                    ))}
                  </div>
                </div>
                <div className="flex flex-col flex-grow justify-center">
                  <p className="text-lg text-center mb-4">"Max lebt den Radsport, das merkt man. <br /> Er ist immer auf dem aktuellsten Stand und versucht, das Beste aus jedem Sportler durch gezieltes Training herauszuholen."</p>
                </div>
                <div className="mt-auto">
                  <p className="font-semibold text-primary">- Jeremias Zieher, Dresden</p>
                  <a 
                    href="https://www.strava.com/activities/11092079227" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-[#fc4c01] hover:text-[#fc4c01]/50 mt-2 font-medium transition-colors duration-200"
                  >
                    <img src="/images/strava.svg" alt="Strava" className="w-5 h-5 transition-transform duration-200 group-hover:scale-110" />
                    <span className="border-b border-transparent hover:border-[#fc4c01]">Auf Strava ansehen</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="contact" className="py-20 bg-primary text-white" aria-label="Kontakt">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-8">Kontakt</h2>
            <p className="text-2xl mb-12 text-center font-medium">
              Lass uns gemeinsam dein volles Potenzial auszuschöpfen!
            </p>
            
            <Suspense fallback={<div className="h-96 flex items-center justify-center text-white">Formular wird geladen...</div>}>
              <ContactForm />
            </Suspense>
          </div>
        </section>

        <footer className="bg-gray-100 py-6" role="contentinfo">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col md:flex-row justify-between items-center text-sm text-gray-600">
              <div>
                © {currentYear} MaxCyclesCoaching. Alle Rechte vorbehalten.
              </div>
              <div className="text-sm sm:text-base mt-4 md:mt-0 space-x-1 sm:space-x-4">
                <a href="mailto:maxcyclescoaching@gmail.com" className="hover:text-gray-900">E-Mail: maxcyclescoaching@gmail.com</a>
                <span className="mx-2">|</span>
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
          imageSrc="/images/german_cycling_certificate.png"
          imageAlt="German Cycling (BDR) Coach Certificate"
        />

        <ServiceDialog
          isOpen={isPhilosophyOpen}
          onClose={() => setIsPhilosophyOpen(false)}
          title="Mein Coaching-Ansatz"
        >
          <div className="space-y-4">
            <p>Mein Ansatz basiert auf strukturierten Trainingsblöcken, die individuell auf die Athlet*innen abgestimmt sind. Ich setze dabei bewusst auf kleine, intendierte Anpassungen, um den Fortschritt messbar und nachhaltig steuerbar zu machen.</p>
            <p>Die Wochenplanung erfolgt flexibel in einem Rhythmus von 1 bis 3 Wochen über TrainingPeaks. So kann das Training optimal auf Alltag, Ernährung und Regeneration abgestimmt werden, um eine ganzheitliche Belastungssteuerung zu gewährleisten. Gleichzeitig bleibt der Fokus stets auf der langfristigen Leistungsentwicklung, damit die Höchstform genau zum richtigen Zeitpunkt erreicht wird.</p>
          </div>
        </ServiceDialog>

        <ServiceDialog
          isOpen={isCoachingOpen}
          onClose={() => setIsCoachingOpen(false)}
          title="1:1 Coaching – Details"
        >
          <div className="space-y-4">
            <div>
              <br />
              <p className="font-bold">1. Maßgeschneiderte Trainingsplanung</p>
              <p>Gemeinsam entwickeln wir einen Trainingsplan, der perfekt auf deine Saisonziele, deine verfügbare Zeit und deinen Alltag zugeschnitten ist – für nachhaltigen Fortschritt ohne Überlastung. <br/> Perfekt für Straßenradsportler, MTB- und Gravelfahrer sowie Duathleten!</p>
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
          title="Leistungsdiagnostik – Details"
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

export default Index;
