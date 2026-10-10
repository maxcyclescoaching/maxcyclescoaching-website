import { Navbar } from "@/components/Navbar";
import { Button } from "@/components/ui/button";
import { ArrowRight, CalendarDays, CheckCircle2, ExternalLink, Flag, MessageCircle, Mountain, Bike, SlidersHorizontal, Sparkles, Waypoints, Trophy, Users } from "lucide-react";
import { lazy, Suspense, useMemo, useEffect, useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { SiteFooter } from "@/components/SiteFooter";
import { ServiceDialog } from "@/components/ServiceDialog";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";

const ContactForm = lazy(() => import("@/components/ContactForm"));

const cyclingCategories = [
  {
    href: "/coaching/radsport/radmarathon-gravel",
    title: "Radmarathons und Gravel-Rennen",
    description: "Individuelle Vorbereitung für lange Straßenrennen, anspruchsvolle Anstiege und Gravel-Events.",
    icon: Bike,
  },
  {
    href: "/coaching/radsport/ultracycling",
    title: "Ultracycling-Events",
    description: "Strukturiertes Training für lange Distanzen, hohe Eigenständigkeit und Belastungen über viele Stunden oder Tage.",
    icon: Waypoints,
  },
  {
    href: "/coaching/radsport/lizenz-rundstrecke",
    title: "Lizenz- und Rundstreckenrennen",
    description: "Leistungsorientierte Planung für wiederholte harte Belastungen, Renntaktik und gezielte Formhöhepunkte.",
    icon: Flag,
  },
  {
    href: "/coaching/radsport/xco-xcm",
    title: "Cross Country Mountainbike",
    description: "Coaching für XCO und XCM mit Fokus auf Leistung, Technik und renntypische Belastungen.",
    icon: Mountain,
  },
];

const Index = () => {
  const [selectedSuccessIndex, setSelectedSuccessIndex] = useState<number | null>(null);
  const athleteSuccessStories = [
    {
      category: "Athleten-Erfolg: Tim Walther",
      title: "Bohemian Border Bash - Platz 3 Gesamt",
      description: "Erstes mehrtägiges Ultra-Rennen mit Podiumsplatz: Tim bewältigte die rund 1.400 Kilometer der Bohemian Border Bash Race und wurde Dritter der Gesamtwertung.",
      longdescription: "Tim kam im Dezember 2025 auf mich zu, um sich strukturiert auf seine erste Ultra-Rennsaison 2026 vorzubereiten. \n Von Beginn an war das Bohemian Border Bash Race das Hauptziel. Zuvor hatte Tim bereits drei weitere Ultra-Rennen erfolgreich gefinisht. \n Nach einem erfolgreichen Aufbau über den Winter ging es im Sommer vor allem darum, die Form zu erhalten, Regenerationsphasen einzuhalten und spezifische Reize zu setzen. \n Beim Bohemian Border Bash konnte Tim die geplante Verpflegungs-, Schlaf- und Pacingstrategie konsequent umsetzen. Das schuf die Grundlage für den dritten Platz in der Solo-Gesamtwertung. \n Dafür, dass es sein erstes mehrtägiges Ultra-Rennen mit Ambitionen war, gab es nur wenige Probleme – was bei einem Ultra keineswegs selbstverständlich ist. Die Kohlenhydrat- und Koffeinaufnahme, die Schlafstrategie und das Mindset haben gepasst. \n Tim war sehr zufrieden mit seiner Leistung und freut sich bereits auf die Vorbereitung für die nächste Saison.",
      athleteQuote: "Max, bester Mann! \n Nach dem letzten Vorbereitungsrennen für das BBBR hat er mein Training nochmal gezielt angepasst und optimiert. \n Fünf Tage vor Start gab es ein ausführliches Strategiegespräch, so dass ich mental wie auch körperlich bestens vorbereitet in das Rennen gestartet bin. \n Dank des Dotwatchings war Max auch während des Rennens immer auf dem Laufenden. Er hat erkannt, dass ich noch eine Schippe drauflegen konnte, und mich darin bestärkt, alles rauszuholen. Das Ergebnis: ein Podiumsplatz! \n Danke Max, hat geklappt!",
      resultUrl: "https://www.strava.com/activities/20125940790",
    },
    {
      category: "Athleten-Erfolg: Christian Schellenberg",
      title: "Liège-Bastogne-Liège Challenge - Erster im Ziel",
      description: "Starker Saisoneinstieg über 245 Kilometer: Christian erreichte nach 7:45 Stunden als erster Teilnehmer das Ziel – mit 283 W Normalized Power und einem langen Solo-Abschnitt.",
      longdescription: "Christians erstes Rennen der Saison 2026 – und direkt ein starkes Ergebnis. \n Die Zahlen sprechen für sich: 7 Stunden und 45 Minuten Fahrzeit mit 283 W Normalized Power und 252 W Durchschnittsleistung bei einem Körpergewicht von circa 75 kg. Das führte über die 245 Kilometer und 4.130 Höhenmeter zu einem Schnitt von fast 32 km/h. \n Obwohl Christian die letzten 80 km allein gefahren ist, überquerte er als erster Teilnehmer die Ziellinie. Auch ohne offizielle Wertung war das ein toller Einstieg in die Saison. \n Um dieses Ergebnis zu erreichen, haben wir im Winter vor allem an den physiologischen Potenzialen gearbeitet: mit vielen kurzen Sprints auf der Rolle und hochintensiven Intervallen als wirksamen VO2max-Reiz. Von Oktober bis Februar steigerten wir die Zeit in den Intervallzonen oberhalb der Schwelle progressiv, bevor wir anschließend spezifischere Reize im Sweetspot-Bereich setzten. \n So konnte Christian bereits im Frühjahr Top-Leistungen abrufen.",
      athleteQuote: "Hier kommt ein Zitat hin. Aktuell ist das ein Platzhalter, um die Formatierung besser einschätzen zu können. \n Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et",
      resultUrl: "https://www.strava.com/",
    },
    {
      category: "Athleten-Erfolg: Natalie Gansauge",
      title: "Erste Ultra-Radsportsaison - fünf erfolgreiche Finishes",
      description: "Nach längerer Verletzungspause zurück zu fünf erfolgreichen Langdistanz-Events – von 12- und 24-Stunden-Rennen bis zum ersten Ultra über 500 Kilometer.",
      longdescription: "Natalie kam im März 2026 auf mich zu, weil sie nach einer verletzungsbedingten Pause in den beiden vergangenen Jahren wieder mehr Rad fahren und sich strukturiert auf ihre Saisonhighlights vorbereiten wollte. \n Im Fokus standen verschiedene Mehrtages- und Ultra-Events, die sie erfolgreich finishen wollte. Am Ende einer erfolgreichen Saison waren ein Finish beim Heavy24-24-Stunden-MTB-Rennen mit persönlicher Bestleistung, ihr erstes Ultra über mehr als 500 km bei der Schleudergang500, das 12-Stunden-MTB-Rennen 2MUCH4YOU, die Mehrtagesfahrt European Peace Ride und das ARC400-Ultrarennen auf der Liste der abgeschlossenen Events. \n Die Saison brachte viele Highlights, aber auch einige Momente, in denen Natalie an den Fähigkeiten ihres Körpers zweifelte. \n Schlussendlich konnten wir einen guten Kompromiss zwischen Trainings- und Erholungsphasen finden, um so viele lange Radevents in der kurzen Zeit zu ermöglichen.",
      athleteQuote: "Max hat mich wirklich unglaublich gut durch die Saison gebracht und mich so intensiv vorbereitet, dass ich über mich selbst hinauswachsen konnte. Gerade in den Momenten, in denen ich an mir und meinen eigenen Fähigkeiten gezweifelt habe, hat Max es geschafft, die beste Version aus mir herauszuholen. \n Neben dem Erfolg beim Heavy24 - meine persönliche Bestleistung aufzustellen, konnten wir gemeinsam  meine Trainingsfortschritte kontinuierlich voranbringen und sogar den nächsten Schritt in Richtung Ultracycling gehen – auf ein Niveau, an das ich selbst lange nicht geglaubt hätte. \n Seine  Expertise, seine individuelle Betreuung und vor allem unser gemeinsames Wir-Gefühl machen für mich den Unterschied. \n Max ist für mich genau der Coach, den man sich an seiner Seite wünscht.",
      resultUrl: "https://www.strava.com/activities/19206772192",
      resultLabel: "Strava-Aktivität ansehen (Schleudergang500)",
    },
  ];
  const selectedSuccessStory = selectedSuccessIndex === null ? null : athleteSuccessStories[selectedSuccessIndex];

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
            sowie einen Herzfrequenzsensor. Ein Leistungsmesser ist ideal, damit wir die Einheiten noch genauer steuern
            und auswerten können.
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
            Das 1:1 Coaching kostet 99–189 € pro Monat. Es gibt keine
            Mindestlaufzeit. Die Abrechnung erfolgt per Banküberweisung. Die Rechnung erhältst
            du jeweils zu Beginn des Folgemonats. Genauere Informationen
            findest du in meinen{" "}
            <a
              href="/agb"
              className="text-primary underline hover:no-underline"
            >
              AGB
            </a>.
          </p>
        ),
        answerText:
          "Das 1:1 Coaching kostet 99–189 € pro Monat. Es gibt keine Mindestlaufzeit. Die Abrechnung erfolgt monatlich zum Ersten des Folgemonats per Banküberweisung. Genauere Informationen findest du in meinen AGB.",
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
            Wie oft wir kommunizieren hängt vom gewählten {" "}
            <a
              href="/#services"
              className="text-primary underline hover:no-underline"
            >
              Coaching-Paket
            </a> ab. Im All-Inclusive-Paket ist ein täglicher Austausch per Textnachricht/WhatsApp sowie bis zu zwei Telefonate im Monat enthalten.{" "}
          </p>
        ),
        answerText:
          "Im All-Inclusive-Paket ist ein täglicher Austausch per WhatsApp/Textnachricht sowie bis zu zwei Telefonate im Monat enthalten.",
      },
      {
        key: "coaching-flexibilitaet",
        question: "Wie flexibel ist das Coaching bei Arbeit, Urlaub, Trainingslager oder Krankheit?",
        answer: (
          <p>
            Das Coaching ist sehr flexibel. Wenn etwas dazwischenkommt, passe ich den Plan bei Wahl des All-Inclusive-Paket kurzfristig an, damit dein
            Training zu deiner aktuellen Situation passt. Ob Krankheit, Trainingslager oder Stressphase: Wir finden immer
            eine Lösung.
          </p>
        ),
        answerText:
          "Das Coaching ist bei Wahl des All-Inclusive-Paket sehr flexibel. Bei Krankheit, Urlaub, Trainingslager oder Stressphasen passe ich den Plan kurzfristig an.",
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
            Die Kündigung ist prinzipiell monatlich möglich. Genaue Informationen je nach Paket findest du in den{" "}
            <a
              href="/agb"
              className="text-primary underline hover:no-underline"
            >
              AGB
            </a>.
          </p>
        ),
        answerText:
          "Die Kündigung ist prinzipiell monatlich möglich. Genaue Informationen je nach Paket findest du in den AGB.",
      },
      {
        key: "coaching-diagnostik",
        question: "Bietest du Leistungsdiagnostiken vor Ort an?",
        answer: (
          <p>
            Ja, ich biete Laktat-Leistungsdiagnostiken vor Ort an. Je nach Ziel können wir außerdem auch alternative Testformen
            nutzen, damit du eine realistische und praxistaugliche Einschätzung deiner Leistung bekommst.
          </p>
        ),
        answerText:
          "Ja, Laktat-Leistungsdiagnostiken vor Ort sind möglich. Je nach Ziel können wir auch alternative Testformen nutzen, damit du eine praxistaugliche Einschätzung bekommst.",
      },
      {
        key: "coaching-mtb-gravel",
        question: "Ist das Coaching auch für MTB- und Gravel-Radfahrer geeignet?",
        answer: (
          <p>
            Ja, das Coaching eignet sich auch für (Cross Country) MTB- und Gravel-Fahrer. Mehr Infos dazu findest du auf der{" "}
            <a
              href="/coaching/radsport/radmarathon-gravel"
              className="text-primary underline hover:no-underline"
            >
              Gravel-Coaching
            </a>
            {" "} und {" "}
            <a
              href="/coaching/radsport/xco-xcm"
              className="text-primary underline hover:no-underline"
            >
              XC-MTB-Coaching
            </a>{" "}Seite.
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
        question: "Warum sollte ich mir einen Trainingsplan individuell erstellen lassen statt einen Standardplan zu kaufen?",
        answer: (
          <p>
            Eine 1:1-Betreuung ist genauer auf deinen Alltag, deine Zeitverfügbarkeit und deine physiologischen Potenziale
            abgestimmt als ein Standardplan. Dazu kommen direkter Austausch, regelmäßiges Feedback und bessere
            Entwicklungsmöglichkeiten. Schlussendlich kannst du dadurch auch größere Leistungssteigerungen erreichen.
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

  const packageFeatures = [
  {
    label: "Zielgruppe",
    icon: Users,
    basis:
      "Für Athleten mit konstantem Alltag, die neu ins strukturierte Training einsteigen möchten.",
    allInclusive:
      "Für Athleten, die eng begleitet werden und das Maximum aus ihren Möglichkeiten rausholen möchten.",
  },
  {
    label: "Trainingsplanung",
    icon: SlidersHorizontal,
    basis:
      "Vier Wochen im Voraus; keine Plananpassungen innerhalb dieses Zeitraums.",
    allInclusive:
      "Rollierende Planung im 1- bis 2-Wochen-Rhythmus; bis zu zwei kurzfristige Anpassungen pro Woche.",
  },
  {
    label: "Analyse & Feedback",
    icon: CheckCircle2,
    basis:
      "Monatliche Analyse des Trainingsblocks inklusive schriftlichem Feedback.",
    allInclusive:
      "Analyse jeder Trainingseinheit spätestens am Folgetag nach Eingang der Daten; bei Bedarf direkt mit Feedback.",
  },
  {
    label: "Kommunikation & Telefonate",
    icon: MessageCircle,
    basis:
      "Bis zu zwei Kontakte pro Monat; ein Telefonat alle zwei Monate inklusive.",
    allInclusive:
      "Unbegrenzter schriftlicher Kontakt; bis zu zwei Telefonate pro Monat inklusive.",
  },
  {
    label: "Event-Planung",
    icon: CalendarDays,
    basis:
      "Bis zu vier Events pro Jahr; zwei telefonische Vorbesprechungen inklusive.",
    allInclusive:
      "Beliebig viele Events; bis zu vier Events mit Vor- und Nachbesprechung pro Jahr.",
  },
  {
    label: "Zusatzleistungen",
    icon: Sparkles,
    basis:
      "Verpflegungshinweise vor und während Trainingseinheiten.",
    allInclusive:
      "Zusätzlich zu Basis-Paket: Integration von Krafttraining und bis zu einer Zusatzsportart im Trainingsplan; bis zu zwei Leistungsdiagnostiken pro Jahr zum Vorzugspreis.",
  },
] as const;

const coachingPackages = [
  {
    key: "basis",
    name: "Basis-Paket",
    price: "99 €",
    featured: false,
  },
  {
    key: "allInclusive",
    name: "All-Inclusive-Paket",
    price: "189 €",
    featured: true,
  },
] as const;

  return (
    <div className="min-h-screen bg-white flex flex-col">
      <Navbar />
      
      <main className="flex-grow">
        <section id="hero" className="relative min-h-[100svh] bg-primary animate-fade-in" aria-label="Hero">
          <div className="absolute inset-0">
            <img
              src="/images/hero_img.avif"
              alt="Radsportler sprinten vor landschaftlich schönem Hintergrund einen Berg hoch"
              className="w-full h-full object-cover object-[62%_center] min-[550px]:object-center"
              loading="eager"
              fetchPriority="high"
            />
            <div className="absolute inset-0 bg-primary/35" />
          </div>
          <div className="relative min-h-[100svh] max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-12 md:py-16 lg:py-24 flex items-center justify-start">
            <div className="w-full max-w-4xl text-left text-white">
              <h1 className="max-w-4xl text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-4 sm:mb-6 text-shadow-lg">
                Mit individuellem Radsport-Coaching zu deiner stärksten Saison.
              </h1>

              <h2 className="max-w-3xl text-base sm:text-xl md:text-2xl leading-relaxed text-white/95 mb-6 sm:mb-7">
                Individueller Trainingsplan im Radsport & persönliches 1:1-Coaching für Rennrad, Gravel, XC-MTB und Ultracycling.
              </h2>

              <ul className="grid gap-2.5 sm:gap-3 sm:grid-cols-2 max-w-4xl mb-8 sm:mb-10 text-sm sm:text-base font-medium">
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-secondary" />
                  Individuelle Trainingsplanung
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-secondary" />
                  Auf deine Ziele und Bedürfnisse abgestimmt
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-secondary" />
                  Ernährungs-, Pacing- und Regenerationstipps
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-secondary" />
                  Täglicher Austausch und Feedback
                </li>
              </ul>

              <p className="sr-only">
                Individuelles Radsport-Coaching für ambitionierte Ausdauerathleten
              </p>

              <a href="#contact" className="block w-full sm:w-auto">
                <Button
                  size="lg"
                  variant="secondary"
                  className="w-full sm:w-auto text-lg sm:text-2xl py-5 px-6 sm:py-9 sm:px-14 h-auto whitespace-normal sm:whitespace-nowrap leading-snug shadow-xl shadow-black/30 transform sm:hover:scale-105 transition-all duration-200"
                >
                  <span>Kostenloses Erstgespräch vereinbaren</span>
                  <ArrowRight className="ml-2 h-5 w-5 sm:h-8 sm:w-8 shrink-0" />
                </Button>
              </a>

              <p className="mt-4 text-sm sm:text-base font-medium text-white/95">
                Unverbindlich anfragen · Keine Mindestlaufzeit
              </p>
            </div>
          </div>
        </section>

        <section className="py-20" aria-label="Inhalte des Coachings">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mb-10">
              <p className="text-sm font-semibold uppercase tracking-widest text-secondary mb-3">Coaching-Inhalte</p>
              <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">Was dich im Coaching erwartet</h2>
            </div>
            <div className="grid gap-6 md:grid-cols-2">
              {[
                { title: "Individuelle Trainingsplanung", text: "Wir schauen uns an, welche Ziele du hast, wo deine Stärken und Potenziale liegen und wie das Training in deinen Alltag passt. Basierend darauf erstelle ich dir, je nach Coaching-Paket, jeweils ein bis vier Wochen im Voraus deinen eigenen Trainingsplan, welchen du dann auf TrainingPeaks abrufen kannst. Bei mir gibt es keine Standard-Pläne, die jeder bekommt." },
                { title: "Flexibel an deinen Alltag angepasst", text: "Das Training sollte nicht deinen Alltag bestimmen, sondern sich an ihn anpassen. Daher plane ich jede Trainingswoche um deine Termine und Trainingszeiten herum, so dass du dich rein auf die Umsetzung des Trainings fokussieren kannst. Sollte mal etwas dazwischenkommen plane ich dir das Training bei Wahl des All-Inclusive-Paket kurzfristig um." },
                { title: "Stetiger Austausch und Feedback", text: "Ich schaue mir jede deiner Trainingseinheiten an und gebe dir bei Bedarf Feedback. Wenn du eine Frage hast oder etwas zur Einheit kommentierst antworte ich dir zügig darauf. Zudem telefonieren wir, je nach Coaching-Paket, aller 2-8 Wochen, um uns ausführlicher auszutauschen." },
                { title: "Ernährung, Schlaf, Regeneration", text: "Auch neben der Trainingseinheit selbst gibt es Faktoren, die Leistung und Trainingsanpassung beeinflussen. Über die Zeit unserer Zusammenarbeit optimieren diese Punkte stetig, damit wir aus jeder Trainingseinheit das Maximum rausholen können." },
                { title: "Saisonperiodisierung", text: "Du bist dir nicht sicher wie viele Rennen du sinnvoll in deine Saison einbauen kannst? Und wie oft solltest du eigentlich Entlastungwochen einbauen? Wir besprechen vor Saisonstart oder zu Beginn des Coachings genau diese Aspekte, damit du deine Ziele erreichst ohne deine Gesundheit oder eine langfristige Leistungsentwicklung zu vernachlässigen." },
                { title: "Vorbesprechungen deiner Wettkämpfe", text: "Du arbeitest monatelang auf dein großes Saisonziel hin. Da sollten in der akuten Vorbereitung keine Kompromisse eingegangen werden. Deswegen gibt es vor deinen Hauptrennen immer eine telefonische Vorbesprechung, in der wir alles zu Pacing, Verpflegung, Taktik, Materialwahl und eventuellen Schlafstrategien besprechen." },
              ].map((item) => (
                <Card key={item.title} className="h-full">
                  <CardContent className="pt-6">
                    <h3 className="text-xl font-semibold text-primary mb-3">{item.title}</h3>
                    <p className="text-gray-600 leading-relaxed">{item.text}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        <section id="services" className="py-20 bg-accent" aria-label="Leistungen">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mb-10">
              <p className="text-sm font-semibold uppercase tracking-widest text-secondary mb-3">Leistungen</p>
              <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">Coaching-Pakete</h2>
              <p className="text-lg text-gray-600 leading-relaxed">
                Persönlichen Trainingsplan erstellen lassen oder ganzheitliches 1:1 Coaching: Zwei Pakete mit einem Ziel – dich schneller zu machen.
              </p>
            </div>
            <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-primary/10 bg-white px-4 py-2 text-sm font-medium text-primary shadow-sm">
              <Sparkles className="h-4 w-4 text-secondary" />
              Individuell geplant · Ohne Mindestlaufzeit
            </div>

            {/* Mobile & Tablet: Gestapelte Paketkarten bis 1023px */}
            <div className="grid gap-6 md:hidden">
              {coachingPackages.map((pkg) => (
                <div
                  key={pkg.key}
                  className={
                    pkg.featured
                      ? "relative rounded-2xl border-2 border-primary bg-white p-6 shadow-xl"
                      : "rounded-2xl border border-primary/10 bg-white p-6 shadow-md"
                  }
                >
                  {pkg.featured && (
                    <div className="absolute -top-3 left-6 inline-flex items-center gap-1 rounded-full bg-primary px-3 py-1 text-xs font-semibold text-white">
                      <Sparkles className="h-3 w-3 text-secondary" />
                      Beliebt
                    </div>
                  )}

                  <div
                    className={`border-b border-gray-100 pb-4 mb-5 ${pkg.featured ? "pt-1" : ""
                      }`}
                  >
                    <h3 className="text-xl font-bold text-primary">
                      {pkg.name}
                    </h3>

                    <div className="mt-1 flex items-baseline gap-1">
                      <span className="text-3xl font-extrabold text-primary">
                        {pkg.price}
                      </span>
                      <span className="text-sm text-gray-500">
                        / Monat
                      </span>
                    </div>
                  </div>

                  <div className="space-y-4 text-sm">
                    {packageFeatures.map((feature) => {
                      const Icon = feature.icon;
                      const description =
                        pkg.key === "basis"
                          ? feature.basis
                          : feature.allInclusive;

                      return (
                        <div key={feature.label}>
                          <span className="mb-1 flex items-center gap-2 font-semibold text-primary">
                            <Icon className="h-4 w-4 shrink-0 text-secondary" />
                            {feature.label}
                          </span>

                          <p className="text-gray-600">
                            {description}
                          </p>
                        </div>
                      );
                    })}
                  </div>
                </div>
              ))}
            </div>

            {/* Desktop: Vergleichstabelle ab 1024px */}
            <div className="hidden md:block overflow-hidden rounded-2xl border border-primary/10 bg-white shadow-xl shadow-primary/10">
              <Table className="w-full table-fixed [&_tbody_tr:nth-child(odd)]:bg-slate-50/70 [&_tbody_td]:py-5 [&_tbody_td:nth-child(2)]:text-gray-700 [&_tbody_td:nth-child(3)]:bg-[#003366]/[0.035] [&_thead_th]:h-auto [&_thead_th]:px-5 [&_thead_th]:py-6 [&_thead_th:first-child]:bg-slate-100 [&_thead_th:nth-child(2)]:bg-white [&_thead_th:nth-child(3)]:bg-[#003366] [&_thead_th:nth-child(3)]:text-white">
                <TableHeader>
                  <TableRow className="bg-accent hover:bg-accent">
                    <TableHead className="w-[28%] text-primary font-semibold">
                      Leistungsumfang
                    </TableHead>
                    <TableHead className="w-[36%] text-primary font-semibold">
                      Basis-Paket · 99 € / Monat
                    </TableHead>
                    <TableHead className="w-[36%] text-primary font-semibold">
                      All-Inclusive-Paket · 189 € / Monat
                    </TableHead>
                  </TableRow>
                </TableHeader>

                <TableBody>
                  {packageFeatures.map((feature) => {
                    const Icon = feature.icon;

                    return (
                      <TableRow key={feature.label}>
                        <TableCell className="font-semibold text-primary">
                          <span className="flex items-center gap-2">
                            <Icon className="h-5 w-5 shrink-0 text-secondary" />
                            {feature.label}
                          </span>
                        </TableCell>

                        <TableCell>
                          {feature.basis}
                        </TableCell>

                        <TableCell>
                          {feature.allInclusive}
                        </TableCell>
                      </TableRow>
                    );
                  })}
                </TableBody>
              </Table>
            </div>

            {/* Gemeinsamer CTA unter beiden Ansichten */}
            <div className="mt-8 text-center">
              <a
                href="#contact"
                className="inline-block w-full sm:w-auto"
              >
                <Button
                  size="lg"
                  className="w-full text-lg h-auto py-2 sm:text-base sm:h-10 sm:w-auto whitespace-normal bg-[#003366] hover:bg-[#002244]"
                >
                  <span>Kostenloses Erstgespräch vereinbaren</span>
                  <ArrowRight className="ml-2 h-5 w-5 shrink-0" />
                </Button>
              </a>
            </div>
          </div>
        </section>

        

        <section id="coaching" className="py-20" aria-label="Radsport-Coaching Kategorien">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mb-10">
              <p className="text-sm font-semibold uppercase tracking-widest text-secondary mb-3">
                Radsport-Coaching
              </p>
              <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
                Coaching für dein Radsportziel
              </h2>
              <p className="text-lg text-gray-600 leading-relaxed">
                Erfahre mehr über die verschiedenen Radsport-Disziplinen, für die das Coaching geeignet ist.
              </p>
            </div>

            <div className="grid gap-6 md:grid-cols-2">
              {cyclingCategories.map((category) => {
                const Icon = category.icon;
                return (
                  <a key={category.href} href={category.href} className="group block">
                    <Card className="h-full transition-shadow hover:shadow-lg">
                      <CardContent className="pt-6">
                        <div className="mb-4 inline-flex h-11 w-11 items-center justify-center rounded-full bg-primary text-primary-foreground">
                          <Icon className="w-5 h-5" />
                        </div>
                        <h3 className="text-xl font-semibold text-primary mb-3">{category.title}</h3>
                        <p className="text-gray-600 leading-relaxed">{category.description}</p>
                        <div className="mt-5 inline-flex items-center gap-2 text-primary font-medium text-sm group-hover:gap-3 transition-all">
                          Spezifische Coaching-Seite öffnen <ArrowRight className="w-4 h-4" />
                        </div>
                      </CardContent>
                    </Card>
                  </a>
                );
              })}
            </div>
          </div>
        </section>

        <section id="testimonials" className="py-20 bg-gray-100" aria-label="Testimonials">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mb-10">
              <p className="text-sm font-semibold uppercase tracking-widest text-secondary mb-3">Erfahrungen</p>
              <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">Das sagen meine Kunden</h2>
            </div>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="bg-white p-8 rounded-lg shadow-md hover:shadow-xl transition-all duration-300 flex flex-col h-full text-center">
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
              <div className="bg-white p-8 rounded-lg shadow-md hover:shadow-xl transition-all duration-300 flex flex-col h-full text-center">
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
              <div className="bg-white p-8 rounded-lg shadow-md hover:shadow-xl transition-all duration-300 flex flex-col h-full text-center">
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
            <div className="mt-10 text-center">
              <a
                href="https://share.google/8GsUJlGPMgwcmqDbf"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-primary font-medium hover:underline"
              >
                Weitere unabhängige Bewertungen auf Google ansehen <ExternalLink className="w-4 h-4" />
              </a>
            </div>

            <div className="mt-16 pt-12 border-t border-gray-300">
              <div className="max-w-4xl mx-auto text-center">
                <div className="flex justify-center mb-4">
                  <div className="rounded-full bg-secondary/15 p-3">
                    <Trophy className="w-7 h-7 text-secondary" />
                  </div>
                </div>
                <h3 className="text-2xl md:text-3xl font-bold text-primary">Athleten-Erfolge</h3>
                <p className="mt-3 text-gray-600 leading-relaxed">
                  Hinter jedem Ergebnis stehen individuelle Ziele, konsequentes Training und eine Planung, die zum Alltag passt.
                </p>
              </div>

              <div className="grid md:grid-cols-3 gap-6 mt-10 text-left">
                {athleteSuccessStories.map((story, index) => (
                  <Card key={story.title} className="flex h-full flex-col bg-white">
                    <CardContent className="flex flex-1 flex-col pt-6">
                      <div className="flex items-start gap-3 mb-4">
                        <Trophy className="w-6 h-6 shrink-0 text-secondary" />
                        <div>
                          <p className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                            {story.category}
                          </p>
                          <h4 className="text-lg font-semibold text-primary mt-1">{story.title}</h4>
                        </div>
                      </div>
                      <p className="text-gray-600 leading-relaxed">{story.description}</p>
                      <Button
                        type="button"
                        variant="ghost"
                        className="mt-auto pt-4 h-auto px-0 text-sm text-primary hover:bg-transparent hover:text-primary/70"
                        onClick={() => setSelectedSuccessIndex(index)}
                      >
                        Mehr erfahren <ArrowRight className="ml-1.5 h-4 w-4" />
                      </Button>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>

            <ServiceDialog
              isOpen={selectedSuccessStory !== null}
              onClose={() => setSelectedSuccessIndex(null)}
              title={selectedSuccessStory?.title ?? "Athleten-Erfolg"}
            >
              {selectedSuccessStory && <div className="space-y-5 text-left">
                <p className="font-semibold">
                  {selectedSuccessStory.category}
                </p>
                <div className="border-t border-gray-200 pt-5">
                  <p className="text-gray-700 whitespace-pre-line">
                    {selectedSuccessStory.longdescription}
                  </p>
                </div>
                {selectedSuccessStory.athleteQuote && (
                  <div className="border-t border-gray-200 pt-5">
                    <p className="text-sm font-semibold uppercase tracking-wider text-muted-foreground">
                      Athletenzitat
                    </p>
                    <blockquote className="mt-2 border-l-4 border-secondary pl-4 italic text-gray-700 whitespace-pre-line">
                      „{selectedSuccessStory.athleteQuote}“
                    </blockquote>
                  </div>
                )}
                {selectedSuccessStory.resultUrl && (
                  <div className="border-t border-gray-200 pt-5">
                    <p className="text-sm font-semibold uppercase tracking-wider text-muted-foreground">
                      Ergebnis
                    </p>
                    <a
                      href={selectedSuccessStory.resultUrl}
                      target="_blank"
                      rel="noreferrer"
                      className="mt-2 inline-flex items-center gap-1.5 font-medium text-primary hover:text-primary/70"
                    >
                      {selectedSuccessStory.resultLabel ?? "Strava-Aktivität ansehen"} <ExternalLink className="h-4 w-4" />
                    </a>
                  </div>
                )}
              </div>}
            </ServiceDialog>
          </div>
        </section>

        <section id="faq" className="py-6 sm:py-14">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mb-8 sm:mb-10">
              <p className="text-sm font-semibold uppercase tracking-widest text-secondary mb-3">Häufige Fragen</p>
              <h2 className="text-2xl sm:text-3xl font-bold text-primary mb-4">Antworten rund um dein Coaching</h2>
              <p className="text-gray-700">
                Kurze Antworten auf die meistgesuchten Fragen zum individuellen Coaching und zur Trainingsplanung.
              </p>
            </div>

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
            <div className="max-w-4xl mx-auto mb-8 text-center">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Starte mit einem unverbindlichen Erstgespräch</h2>
              <p className="text-lg sm:text-xl font-medium">
                Schreib mir kurz, worauf du hinarbeitest. Danach klären wir im unverbindlichen Erstgespräch, ob das Coaching zu dir passt.
              </p>
            </div>

            <Suspense fallback={<div className="h-96 flex items-center justify-center text-white">Formular wird geladen...</div>}>
              <ContactForm />
            </Suspense>
          </div>
        </section>

        <SiteFooter showEmail />
      </main>
    </div>
  );
};

export default Index;
