import { Navbar } from "@/components/Navbar";
import { Button } from "@/components/ui/button";
import { ArrowRight, Bike, Target, Users, Calendar, LineChart, Trophy, MessageCircle, ActivitySquare, Gauge, NotebookPen, Timer, FlaskConical } from "lucide-react";
import { useState, lazy, Suspense, useMemo, useEffect } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { ServiceDialog } from "@/components/ServiceDialog";
import { LightboxDialog } from "@/components/LightboxDialog";
import { SiteFooter } from "@/components/SiteFooter";

const ContactForm = lazy(() => import("@/components/ContactForm"));

const startYear = 2021;
const currentYear = new Date().getFullYear();
const experienceYears = currentYear - startYear;

const Index = () => {
  const [isPhilosophyOpen, setIsPhilosophyOpen] = useState(false);
  const [isCoachingOpen, setIsCoachingOpen] = useState(false);
  const [isDiagnosticsOpen, setIsDiagnosticsOpen] = useState(false);
  const [isCertificateOpen, setIsCertificateOpen] = useState(false);

  useEffect(() => {
    if (window.location.hash) {
      const id = window.location.hash.replace("#", "");
      const element = document.getElementById(id);
      if (element) {
        setTimeout(() => {
          element.scrollIntoView({ behavior: "smooth" });
        }, 100);
      }
    }
  }, []);

  const achievements = useMemo(() => [
    "German Cycling (BDR) zertifizierter Coach",
    `Über ${experienceYears} Jahre Wettkampferfahrung`,
    "Spezialisiert auf Straßenradsport",
    "Nachweisbare Erfolge in der Athletenentwicklung"
  ], [experienceYears]);

  const faqItems = useMemo(
    () => [
      {
        key: "coaching-start",
        question: "Wie kann ich ins Coaching starten?",
        answer: (
          <p>
            Nach einem unverbindlichen Erstgespräch analysiere ich dein bisheriges Training und erarbeite eine
            Saisonperiodisierung für deine Ziele, deinen Alltag und deine Physiologie. Danach bekommst du einen
            wöchentlichen Trainingsplan über TrainingPeaks.
          </p>
        ),
        answerText:
          "Nach einem unverbindlichen Erstgespräch analysiere ich dein Training und erstelle eine individuelle Saisonperiodisierung. Danach bekommst du wöchentlich einen Plan über TrainingPeaks.",
      },
      {
        key: "coaching-zielgruppe",
        question: "Für wen ist das Coaching geeignet?",
        answer: (
          <p>
            Das Coaching ist für alle geeignet, die ambitioniert Ausdauersport betreiben. Konkrete Ziele helfen uns,
            das Training klar auszurichten. Ob du neu im Radsport bist oder schon viel Erfahrung hast, ist zweitrangig.
          </p>
        ),
        answerText:
          "Das Coaching ist für ambitionierte Ausdauersportler geeignet. Entscheidend sind Motivation, Trainingsbereitschaft und klare Ziele, nicht dein bisheriges Leistungsniveau.",
      },
      {
        key: "coaching-voraussetzungen",
        question: "Welche Voraussetzungen brauche ich für das Coaching?",
        answer: (
          <p>
            Damit wir dein Training sauber analysieren können, brauchst du mindestens einen Radcomputer oder eine Uhr
            sowie einen Herzfrequenzsensor. Ein Leistungsmesser ist ideal, damit ich die Einheiten noch genauer steuern
            und auswerten kann.
          </p>
        ),
        answerText:
          "Für die Analyse brauchst du mindestens einen Radcomputer oder eine Uhr sowie einen Herzfrequenzsensor. Ein Leistungsmesser ist ideal, um das Training genauer zu steuern.",
      },
      {
        key: "coaching-kosten",
        question: "Wie hoch sind die Kosten und Zahlungsmodalitäten?",
        answer: (
          <p>
            Das 1:1 Coaching kostet 99 € pro Monat. Es gibt keine Mindestlaufzeit. Die Abrechnung erfolgt monatlich nach Ablauf des Abrechnungszeitraums per
            Banküberweisung. Die Rechnung erhältst du jeweils zu Beginn des Folgemonats.
          </p>
        ),
        answerText:
          "Das 1:1 Coaching kostet 99 € pro Monat, ohne Mindestlaufzeit. Abgerechnet wird monatlich per Banküberweisung; die Rechnung kommt zu Beginn des Folgemonats.",
      },
      {
        key: "coaching-beginn",
        question: "Ab wann können wir beginnen?",
        answer: (
          <p>
            Der Einstieg ist grundsätzlich jederzeit möglich. Je früher wir in der Saison starten, desto mehr Zeit haben
            wir für den Aufbau. Nach dem Erstgespräch kann der erste Plan direkt in der Folgewoche starten.
          </p>
        ),
        answerText:
          "Der Einstieg ins Coaching ist jederzeit möglich. Nach dem Erstgespräch kann der erste Trainingsplan direkt in der Folgewoche starten.",
      },
      {
        key: "coaching-ablauf",
        question: "Wie läuft das Coaching konkret ab?",
        answer: (
          <p>
            Ich plane dir jede Woche individuelle Einheiten, lade sie in TrainingPeaks hoch und bewerte deine Daten nach
            jeder Einheit. So können wir das Training laufend anpassen und bei Bedarf flexibel nachsteuern.
          </p>
        ),
        answerText:
          "Ich plane dir wöchentlich individuelle Einheiten in TrainingPeaks, bewerte deine Daten nach jeder Einheit und passe das Training laufend an.",
      },
      {
        key: "coaching-kommunikation",
        question: "Wie oft kommunizieren wir während des Coachings?",
        answer: (
          <p>
            Wir kommunizieren so oft wie nötig, am liebsten direkt über WhatsApp oder SMS. Wenn mir etwas auffällt,
            melde ich mich proaktiv. Fragen beantworte ich möglichst schnell (meist unter 2h Antwortzeit). Zusätzlich sprechen wir regelmäßig
            telefonisch über Fortschritte und Anpassungen.
          </p>
        ),
        answerText:
          "Wir kommunizieren so oft wie nötig, am liebsten direkt über WhatsApp oder SMS. Ich melde mich proaktiv und beantworte Fragen möglichst schnell.",
      },
      {
        key: "coaching-flexibilitaet",
        question: "Wie flexibel ist das Coaching bei Arbeit, Urlaub, Trainingslager oder Krankheit?",
        answer: (
          <p>
            Das Coaching ist sehr flexibel. Wenn etwas dazwischenkommt, passe ich den Plan kurzfristig an, damit dein
            Training zu deiner aktuellen Situation passt. Ob Krankheit, Trainingslager oder Stressphase: Wir finden immer
            eine Lösung.
          </p>
        ),
        answerText:
          "Das Coaching ist sehr flexibel. Bei Krankheit, Urlaub, Trainingslager oder Stressphasen passe ich den Plan kurzfristig an.",
      },
      {
        key: "coaching-fortschritt",
        question: "Wie lange dauert es, bis ich Fortschritte sehe?",
        answer: (
          <p>
            Das ist individuell und hängt von deinem Trainingsalter, der bisherigen Struktur und deiner aktuellen Form ab.
            Erste Verbesserungen sind oft schon im ersten Monat sichtbar. Um ihr volles Leistungspotenzial auszuschöpfen benötigen
            die meisten Athleten jedoch mehrere Jahre strukturiertest Training. Je länger wir zusammenarbeiten, umso besser können wir
            das Training so abstimmen, dass du optimal darauf ansprichst.
          </p>
        ),
        answerText:
          "Erste Verbesserungen sind oft schon im ersten Monat sichtbar. Die Geschwindigkeit hängt von Trainingsalter, bisheriger Struktur und aktueller Form ab.",
      },
      {
        key: "coaching-kuendigung",
        question: "Welche Kündigungsfrist gilt für das Coaching?",
        answer: (
          <p>
            Die Kündigung ist jederzeit zum Ende eines Abrechnungszeitraums möglich. Es gibt keine Mindestlaufzeit, damit
            du maximal flexibel bleibst.
          </p>
        ),
        answerText:
          "Die Kündigung ist jederzeit zum Ende eines Abrechnungszeitraums möglich. Es gibt keine Mindestlaufzeit, sodass du flexibel bleibst.",
      },
      {
        key: "coaching-diagnostik",
        question: "Bietest du Leistungsdiagnostiken vor Ort an?",
        answer: (
          <p>
            Ja, ich biete Leistungsdiagnostiken vor Ort an. Je nach Ziel können wir außerdem auch alternative Testformen
            nutzen, damit du eine realistische und praxistaugliche Einschätzung deiner Leistung bekommst.
          </p>
        ),
        answerText:
          "Ja, Leistungsdiagnostiken vor Ort sind möglich. Je nach Ziel können wir auch alternative Testformen nutzen, damit du eine praxistaugliche Einschätzung bekommst.",
      },
      {
        key: "coaching-mtb-gravel",
        question: "Ist das Coaching auch für MTB- und Gravel-Radfahrer geeignet?",
        answer: (
          <p>
            Ja, das Coaching eignet sich auch für (Cross Country) MTB- und Gravel-Fahrer. In Sachen Fahrtechnik kann ich remote natürlich nur eingeschränkt helfen, die
            physiologische Trainingsplanung funktioniert aber für alle Disziplinen gleich gut.
          </p>
        ),
        answerText:
          "Ja, das Coaching ist auch für MTB- und Gravel-Fahrer geeignet. Die physiologische Trainingsplanung lässt sich gut übertragen.",
      },
      {
        key: "coaching-laufen-triathlon",
        question: "Bietest du auch Coaching für Läufer und Triathleten an?",
        answer: (
          <p>
            Ja, ich unterstütze dich auch bei Lauf- oder Triathlonzielen. Mein Schwerpunkt bleibt zwar der Radsport und gerade in Sachen Technik
            kann ich dir beim Laufen und Schwimmen wenig helfen, aber die Gestaltung der Trainingseinheiten kann genauso für Läufer oder Multi-Sportler angepasst werden.
          </p>
        ),
        answerText:
          "Ja, auch Lauf- und Triathlonziele kann ich begleiten. Der Schwerpunkt liegt auf Radsport, die Trainingsplanung lässt sich aber individuell anpassen.",
      },
      {
        key: "coaching-vorteile",
        question: "Warum sollte ich mich überhaupt für ein individuelles Coaching entscheiden?",
        answer: (
          <p>
            Eine 1:1-Betreuung ist genauer auf deinen Alltag, deine Zeitverfügbarkeit und deine physiologischen Potenziale
            abgestimmt als ein Standardplan. Dazu kommen direkter Austausch, regelmäßiges Feedback und bessere
            Entwicklungsmöglichkeiten.
          </p>
        ),
        answerText:
          "Ein individuelles Coaching ist präziser auf Alltag, Zeitverfügbarkeit und physiologische Potenziale abgestimmt als ein Standardplan und bietet direkten Austausch sowie Feedback.",
      },
    ],
    []
  );

  const faqJsonLd = useMemo(() => {
    return {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      mainEntity: faqItems.map((f) => ({
        "@type": "Question",
        name: f.question,
        acceptedAnswer: {
          "@type": "Answer",
          text: f.answerText || "",
        },
      })),
    };
  }, [faqItems]);

  return (
    <div className="min-h-screen bg-white flex flex-col">
      <Navbar />
      
      <main className="flex-grow">
        <section id="hero" className="relative min-h-[100svh] bg-primary animate-fade-in" aria-label="Hero">
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
          <div className="relative min-h-[100svh] max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-16 lg:py-24 flex items-center justify-center">
            <div className="w-full text-center text-white">
              <img 
                src="/images/logo_white.png" 
                alt="MaxCyclesCoaching Logo" 
                className="h-28 sm:h-32 w-auto mx-auto mb-6 sm:mb-8"
                loading="eager"
              />
              <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-5 sm:mb-7 text-shadow-lg">
                Individuelles Rennrad-Coaching für ambitionierte Radsportler
              </h1>
              <div className="grid grid-cols-3 gap-1.5 sm:gap-4 max-w-5xl mx-auto mb-6 sm:mb-10">
                <div className="rounded-lg bg-white/15 backdrop-blur-sm border border-white/30 px-1.5 py-2 sm:px-5 sm:py-5 min-h-[96px] sm:min-h-[132px] flex flex-col justify-center">
                  <p className="text-xl sm:text-4xl font-bold leading-tight">+25W</p>
                  <p className="text-[11px] sm:text-base font-medium mt-1 leading-snug">
                    <span className="sm:hidden">FTP-Plus pro Jahr</span>
                    <span className="hidden sm:inline">FTP-Verbesserung pro Jahr</span>
                  </p>
                </div>
                <div className="rounded-lg bg-white/15 backdrop-blur-sm border border-white/30 px-1.5 py-2 sm:px-5 sm:py-5 min-h-[96px] sm:min-h-[132px] flex flex-col justify-center">
                  <p className="text-xl sm:text-4xl font-bold leading-tight">Ab 99€</p>
                  <p className="text-[11px] sm:text-base font-medium mt-1 leading-snug">pro Monat</p>
                </div>
                <div className="rounded-lg bg-white/15 backdrop-blur-sm border border-white/30 px-1.5 py-2 sm:px-5 sm:py-5 min-h-[96px] sm:min-h-[132px] flex flex-col justify-center">
                  <p className="text-xl sm:text-4xl font-bold leading-tight">2000+</p>
                  <p className="text-[11px] sm:text-base font-medium mt-1 leading-snug">
                    <span className="sm:hidden">analysierte Einheiten</span>
                    <span className="hidden sm:inline">analysierte Trainingseinheiten</span>
                  </p>
                </div>
              </div>
              <a href="#services">
                <Button 
                  size="lg" 
                  variant="secondary"
                  className="text-white transform hover:scale-105 transition-all duration-200 text-2xl py-9 px-14 shadow-xl shadow-black/30"
                >
                  Starte jetzt <ArrowRight className="ml-2 w-8 h-8" />
                </Button>
              </a>
            </div>
          </div>
        </section>

        <section id="about" className="py-20" aria-label="Über mich">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h3 className="text-3xl md:text-4xl font-bold text-center mb-12 text-primary">
              Über mich
            </h3>
            <div className="text-center md:text-left grid md:grid-cols-2 gap-12 items-center">
              <div>
                <p className="text-gray-600">
                Hi, ich bin Max – <b>zertifizierter Radsportcoach</b> und <b>leidenschaftlicher Athlet</b>. <br />
                Seit meiner Jugend fahre ich ambitioniert Rennrad und konnte dabei auch schon einige persönliche Erfolge feiern. <br />
                Meine Schwerpunkte liegen auf <b>individuellem 1:1 Coaching für ambitionierte Radsportler</b> und <b>Laktat-Leistungsdiagnostiken</b>, die ich seit Ende 2023 anbiete. <br />
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
            <h3 className="text-3xl md:text-4xl font-bold text-center mb-12 text-primary">
              Philosophie
            </h3>
            <div className="text-center max-w-3xl mx-auto">
              <p className="text-gray-600 mb-8">
              Ein <b>effektives Training</b> beginnt mit einer <b>fundierten Analyse</b>: <br />
              Zunächst erfasse ich deine <b>Wettkampfziele</b> und erstelle ein <b>individuelles Athletenprofil</b> basierend auf vorhandenen Trainingsdaten und einer detaillierten <b>Leistungsdiagnostik</b> (Vor-Ort oder Remote). <br />
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
                  <h2 className="text-2xl font-semibold text-primary">1:1 Radsport Coaching</h2>
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
                      Unverbindlich Anfragen
                    </Button>
                  </a>
                </div>
              </div>

              <div className="bg-gradient-to-br from-white to-[#E8F0F8] p-8 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-200">
                <div className="flex items-center gap-3 mb-4">
                  <ActivitySquare className="w-8 h-8 text-primary" />
                  <h2 className="text-2xl font-semibold text-primary">Individuelle Leistungsdiagnostik</h2>
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
                      Unverbindlich Anfragen
                    </Button>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="testimonials" className="py-20 bg-gray-100" aria-label="Testimonials">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h3 className="text-3xl md:text-4xl font-bold mb-8 text-primary">Das sagen meine Kund*innen</h3>
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
                    href="https://www.strava.com/athletes/6711546" 
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

        <section id="faq" className="py-6 sm:py-14">
          <div className="max-w-5xl mx-auto px-4">
            <h2 className="text-2xl sm:text-3xl font-bold text-primary mb-4 text-center">
              Häufig gestellte Fragen (FAQ)
            </h2>
            <p className="text-center text-gray-700 mb-8 sm:mb-10">
              Kurze Antworten auf die meistgesuchten Fragen zum Thema individuelles Coaching und Trainingsplanung.
            </p>

            <div className="md:hidden">
              <Card>
                <CardContent className="p-0">
                  <Accordion type="single" collapsible className="w-full">
                    {faqItems.map((item) => (
                      <AccordionItem key={item.key} value={item.key}>
                        <AccordionTrigger className="px-4 sm:px-6 text-left">
                          {item.question}
                        </AccordionTrigger>
                        <AccordionContent className="px-4 sm:px-6 pb-4 text-gray-700 text-base">
                          {item.answer}
                        </AccordionContent>
                      </AccordionItem>
                    ))}
                  </Accordion>
                </CardContent>
              </Card>
            </div>

            <div className="hidden items-start gap-6 md:grid md:grid-cols-2">
              {[faqItems.slice(0, Math.ceil(faqItems.length / 2)), faqItems.slice(Math.ceil(faqItems.length / 2))].map(
                (columnItems, columnIndex) => (
                  <Card key={columnIndex}>
                    <CardContent className="p-0">
                      <Accordion type="single" collapsible className="w-full">
                        {columnItems.map((item) => (
                          <AccordionItem key={item.key} value={item.key}>
                            <AccordionTrigger className="px-4 sm:px-6 text-left">
                              {item.question}
                            </AccordionTrigger>
                            <AccordionContent className="px-4 sm:px-6 pb-4 text-gray-700 text-base">
                              {item.answer}
                            </AccordionContent>
                          </AccordionItem>
                        ))}
                      </Accordion>
                    </CardContent>
                  </Card>
                )
              )}
            </div>

            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />
          </div>
        </section>

        <section id="contact" className="py-20 bg-primary text-white" aria-label="Kontakt">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h3 className="text-3xl md:text-4xl font-bold text-center mb-8">Kontakt</h3>
            <p className="text-2xl mb-12 text-center font-medium">
              Lass uns gemeinsam dein volles Potenzial auszuschöpfen! <br/> Frage einfach über das Formular ein unverbindliches Erstgespräch fürs Coaching oder eine Diagnostik an!
            </p>

            <Suspense fallback={<div className="h-96 flex items-center justify-center text-white">Formular wird geladen...</div>}>
              <ContactForm />
            </Suspense>
          </div>
        </section>

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
            <p>Die Wochenplanung erfolgt flexibel in einem Rhythmus von 1 bis 3 Wochen über TrainingPeaks. So kann das Training optimal auf Alltag, Ernährung und Regenerationsstatus abgestimmt werden, um eine ganzheitliche Belastungssteuerung zu gewährleisten. Gleichzeitig bleibt der Fokus stets auf der langfristigen Leistungsentwicklung, damit die Höchstform genau zum richtigen Zeitpunkt erreicht wird.</p>
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
              <p>In regelmäßigen Gesprächen betrachten wir nicht nur deine Trainingsdaten, sondern auch Faktoren wie Ernährung, Schlaf und Stress. So entsteht ein ganzheitliches Bild, das uns hilft, dein volles Potenzial auszuschöpfen.</p>
            </div>

            <div>
              <p className="font-bold">3. Regelmäßige Leistungsdiagnostik</p>
              <p>Alle 3 Monate überprüfen wir deinen aktuellen Leistungsstand durch gezielte Tests. So erkennen wir Fortschritte frühzeitig und können deine Trainingsreize optimal anpassen. <br/> Dabei können die Tests entweder in Form von einer vergünstigten Laktat-Leistungsdiagnostik Vor-Ort oder über Leistungstests bei dir zu Hause bzw. auf der Straße durchgeführt werden.</p>
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
        <SiteFooter showEmail />
      </main>
    </div>
  );
};

export default Index;
