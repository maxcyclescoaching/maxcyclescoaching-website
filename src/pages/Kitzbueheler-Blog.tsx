import { Navbar } from "@/components/Navbar";
import { Button } from "@/components/ui/button";
import { ArrowRight, Mountain, Gauge, Target, Utensils, TrendingDown, Route, Link, ExternalLink, Copyright } from "lucide-react";
import { lazy, Suspense, useMemo } from "react";
import { NutritionCalculator } from "@/components/NutritionCalculator";
import { SiteFooter } from "@/components/SiteFooter";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Table, TableBody, TableCaption, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { StickyBlogCta } from "@/components/StickyBlogCta";

const ContactForm = lazy(() => import("@/components/ContactForm"));

const KitzbuehelerBlog = () => {
  const currentYear = new Date().getFullYear();
  const publicationDate = "2026-06-12";
  const formattedPublicationDate = useMemo(() => 
    new Date(publicationDate).toLocaleDateString("de-DE", {
      day: "numeric",
      month: "long",
      year: "numeric",
    }), [publicationDate]
  );

  const faqItems = useMemo(
    () => [
      {
        key: "distanz-hm",
        question: "Wie viele Kilometer und Höhenmeter hat der Kitzbüheler Radmarathon?",
        answer: (
          <div className="space-y-2">
            <p>
              Der Kitzbüheler Radmarathon in der Klassik-Variante ist 216 km lang und hat über 4.600 Höhenmeter. Die Strecke führt
              über fünf Schlüsselanstiege: Pass Thurn, Gerlospass, Kerschbaumer Sattel, Brandenberg und zum Schluss das Kitzbüheler Horn.
              Die Kitz-Variante lässt das Kitzbüheler Horn weg und kommt damit auf 209 km und 3.800 hm.
            </p>
            <p>
              Zielzeiten der Klassik-Variante liegen im Bereich von 6h für die Top-Fahrer bis zum Zeitlimit von 12h.
            </p>
          </div>
        ),
        answerText:
          "Der Kitzbüheler Radmarathon in der Klassik-Variante ist 216 km lang und hat über 4.600 Höhenmeter. Die Strecke führt über fünf Schlüsselanstiege: Pass Thurn, Gerlospass, Kerschbaumer Sattel, Brandenberg und zum Schluss das Kitzbüheler Horn. Zielzeiten reichen grob von ca. 6 Stunden (Top-Fahrer) bis zum Zeitlimit von etwa 12 Stunden.",
      },
      {
        key: "pacing",
        question: "Welche Pacing-Strategie ist beim Kitzbüheler Radmarathon sinnvoll?",
        answer: (
          <div className="space-y-2">
            <p>
              Erfolgreiches Pacing ist für den Kitzbüheler neben der physischen Vorbereitung und Verpflegung der Hauptfaktor.
              Man sollte an den ersten Anstiegen nicht zu schnell fahren, um später weiterhin seine Leistung konstant halten zu können.
              Zwischen 80-90% der Schwellenleistung (FTP) an den Anstiegen ist für viele Fahrer ein guter Richtwert, um nicht zu überziehen.
            </p>
            <p>
              Eine konkrete Orientierung findest du oben in der Pacing-Sektion inklusive Richtwerten pro Anstieg:
            </p>
            <a href="#pacing" className="text-primary hover:underline inline-flex items-center gap-1">
              Zur Pacing-Strategie <Link className="w-4 h-4" />
            </a>
          </div>
        ),
        answerText:
          "Sinnvolles Pacing bedeutet, an den ersten Anstiegen nicht zu überziehen und über den Tag eine gleichmäßige Intensität zu halten. Für viele ist an den Anstiegen ein Bereich von ca. 80–93% der Schwellenleistung (FTP) ein guter Richtwert, um später nicht einzubrechen.",
      },
      {
        key: "zeit-realistisch",
        question: "Wie lange dauert der Kitzbüheler Radmarathon und welche Zielzeit ist realistisch?",
        answer: (
          <div className="space-y-2">
            <p>
              Die Zielzeit hängt von Leistungsfähigkeit (FTP, VO2max etc.), Körpergewicht, Gruppendynamik,
              Wetter, Verpflegung, Pacing und Renntaktik ab. Die durchschnittliche Finisher-Zeit liegt bei ca. 8,5-9 Stunden.
            </p>
            <p>
              Genaue Richtwerte, welche Zielzeit für dich realistisch ist findest du in der Tabelle der Pacing-Sektion:
            </p>
            <a href="#pacing" className="text-primary hover:underline inline-flex items-center gap-1">
              Richtwerte &amp; Zielzeiten ansehen <Link className="w-4 h-4" />
            </a>
          </div>
        ),
        answerText:
          "Die Zielzeit hängt u.a. von Leistungsfähigkeit (z.B. FTP), Körpergewicht, Gruppendynamik, Wetter, Verpflegung, Pacing und Renntaktik ab. Die durchschnittliche Finisher-Zeit liegt bei etwa 8,5-9 Stunden; konkrete Richtwerte stehen in der Zielzeiten-Tabelle in der Pacing-Sektion.",
      },
      {
        key: "watt-sub10",
        question: "Wie viel Watt bzw. Watt/kg braucht man für eine Sub-10 Stunden Zeit beim Kitzbüheler Radmarathon?",
        answer: (
          <div className="space-y-2">
            <p>
              Die Zielzeit ist von Wetter, Gruppendynamik und Physiologie des Fahrers oder der Fahrerin abhängig.
              Mit einer Schwellenleistung (FTP) von 3,0 bis 3,5 W/kg und einer normalisierten Leistung von 2,2 bis 2,5 W/kg ist eine Sub-10-Stunden-Zeit bei guten Bedingungen realistisch.
            </p>
            <p>
              Genaue Richtwerte, welche Zielzeit für dich realistisch ist findest du in der Tabelle der Pacing-Sektion:
            </p>
            <a href="#pacing" className="text-primary hover:underline inline-flex items-center gap-1">
              Richtwerte &amp; Zielzeiten ansehen <Link className="w-4 h-4" />
            </a>
          </div>
        ),
        answerText:
          "Für eine Sub-10h-Zeit sind – je nach Bedingungen, Gruppe und individueller Physiologie – häufig ca. 3,0–3,5 W/kg FTP und eine normalisierte Leistung von etwa 2,2–2,5 W/kg ein realistischer Bereich. Genaue Richtwerte stehen in der Pacing-Sektion.",
      },
      {
        key: "watt-sub9",
        question: "Wie viel Watt bzw. Watt/kg braucht man für eine Sub-9 Stunden Zeit beim Kitzbüheler Radmarathon?",
        answer: (
          <div className="space-y-2">
            <p>
              Die Zielzeit ist von Wetter, Gruppendynamik und Physiologie des Fahrers oder der Fahrerin abhängig.
              Mit einer Schwellenleistung (FTP) von 3,5 bis 4,0 W/kg und einer normalisierten Leistung von 2,5 bis 2,9 W/kg ist eine Sub-9-Stunden-Zeit bei guten Bedingungen realistisch.
            </p>
            <p>
              Genaue Richtwerte, welche Zielzeit für dich realistisch ist findest du in der Tabelle der Pacing-Sektion:
            </p>
            <a href="#pacing" className="text-primary hover:underline inline-flex items-center gap-1">
              Richtwerte &amp; Zielzeiten ansehen <Link className="w-4 h-4" />
            </a>
          </div>
        ),
        answerText:
          "Für eine Sub-9h-Zeit sind – je nach Bedingungen, Gruppe und individueller Physiologie – häufig ca. 3,5–4,0 W/kg FTP und eine normalisierte Leistung von etwa 2,5–2,9 W/kg ein realistischer Bereich. Genaue Richtwerte stehen in der Pacing-Sektion.",
      },
      {
        key: "watt-sub8",
        question: "Wie viel Watt bzw. Watt/kg braucht man für eine Sub-8 Stunden Zeit beim Kitzbüheler Radmarathon?",
        answer: (
          <div className="space-y-2">
            <p>
              Die Zielzeit ist von Wetter, Gruppendynamik und Physiologie des Fahrers oder der Fahrerin abhängig.
              Mit einer Schwellenleistung (FTP) von 4,0 bis 4,5 W/kg und einer normalisierten Leistung von 2,9 bis 3,3 W/kg ist eine Sub-8-Stunden-Zeit bei guten Bedingungen realistisch.
            </p>
            <p>
              Genaue Richtwerte, welche Zielzeit für dich realistisch ist findest du in der Tabelle der Pacing-Sektion:
            </p>
            <a href="#pacing" className="text-primary hover:underline inline-flex items-center gap-1">
              Richtwerte &amp; Zielzeiten ansehen <Link className="w-4 h-4" />
            </a>
          </div>
        ),
        answerText:
          "Für eine Sub-8h-Zeit sind – je nach Bedingungen, Gruppe und individueller Physiologie – häufig ca. 4,0–4,5 W/kg FTP und eine normalisierte Leistung von etwa 2,9–3,3 W/kg ein realistischer Bereich. Genaue Richtwerte stehen in der Pacing-Sektion.",
      },
      {
        key: "watt-sub7",
        question: "Wie viel Watt bzw. Watt/kg braucht man für eine Sub-7 Stunden Zeit beim Kitzbüheler Radmarathon?",
        answer: (
          <div className="space-y-2">
            <p>
              Die Zielzeit ist von Wetter, Gruppendynamik und Physiologie des Fahrers oder der Fahrerin abhängig.
              Mit einer Schwellenleistung (FTP) von 5,0 bis 5,5 W/kg und einer normalisierten Leistung von 3,6 bis 4,0 W/kg ist eine Sub-7-Stunden-Zeit bei guten Bedingungen realistisch.
            </p>
            <p>
              Genaue Richtwerte, welche Zielzeit für dich realistisch ist findest du in der Tabelle der Pacing-Sektion:
            </p>
            <a href="#pacing" className="text-primary hover:underline inline-flex items-center gap-1">
              Richtwerte &amp; Zielzeiten ansehen <Link className="w-4 h-4" />
            </a>
          </div>
        ),
        answerText:
          "Für eine Sub-7h-Zeit sind – je nach Bedingungen, Gruppe und individueller Physiologie – häufig ca. 5,0–5,5 W/kg FTP und eine normalisierte Leistung von etwa 3,6–4,0 W/kg ein realistischer Bereich. Genaue Richtwerte stehen in der Pacing-Sektion.",
      },
      {
        key: "watt-wkg",
        question: "Wie viel Watt bzw. W/kg braucht man für den Kitzbüheler?",
        answer: (
          <div className="space-y-2">
            <p>
              Da es beim Kitzbüheler vor allem Anstiege im Bereich von 30 min bis 1 Stunde Fahrzeit gibt, ist die Schwellenleistung (FTP) in Watt pro Kilogramm Körpergewicht der entscheidende Leistungsfaktor.
            </p>
            <p>
              Als Orientierung, welche Leistung du fürs Finish oder für eine bestimmte Zeit brauchst, dient die Zielzeit-Tabelle in der
              Pacing-Sektion:
            </p>
            <a href="#pacing" className="text-primary hover:underline inline-flex items-center gap-1">
              W/kg Orientierung ansehen <Link className="w-4 h-4" />
            </a>
          </div>
        ),
        answerText:
          "Entscheidend ist vor allem deine Schwellenleistung (FTP) in Watt pro Kilogramm Körpergewicht, weil es beim Kitzbüheler lange Anstiege (oft 20min bis 1 Stunde) gibt. Eine praxisnahe Orientierung liefern die W/kg-Leistungsklassen und Zielzeiten in der Pacing-Sektion.",
      },
      {
        key: "ernaehrung",
        question: "Wie viel sollte man beim Kitzbüheler pro Stunde essen und trinken (Kohlenhydrate)?",
        answer: (
          <div className="space-y-2">
            <p>
              Neben der physischen Vorbereitung ist Ernährung der zweitwichtigste Faktor für deinen erfolgreichen Kitzbüheler.
              Dabei ist insbesondere die Kohlenhydratzufuhr, die du pro Stunde aufrechterhalten kannst, entscheidend.
              Die genaue Menge ist individuell und hängt von Trainingszustand, Erfahrung und Magen-Darm-Verträglichkeit ab.
              Die meisten Fahrer sollten zwischen 70-120g Kohlenhydrate pro Stunde zu sich nehmen.
            </p>
            <p>
              Der Rechner im Abschnitt „Ernährung &amp; Energieversorgung“ gibt dir konkrete Empfehlungen
              für deine individuelle Kohlenhydratstrategie:
            </p>
            <a href="#ernaehrung" className="text-primary hover:underline inline-flex items-center gap-1">
              Zum Verpflegungsrechner <Link className="w-4 h-4" />
            </a>
          </div>
        ),
        answerText:
          "Die Kohlenhydratzufuhr ist individuell und hängt u.a. von Trainingszustand, Erfahrung und Magen-Darm-Verträglichkeit ab. Viele Fahrer liegen bei ca. 70–120 g Kohlenhydrate pro Stunde; die konkrete Strategie sollte im Training getestet werden. Der <a href=\"https://maxcyclescoaching.de/tools/verpflegungsrechner\" target=\"_blank\">Verpflegungsrechner</a> gibt dafür eine individuelle Orientierung.",
      },
      {
        key: "termin",
        question: `Wann findet der Kitzbüheler Radmarathon ${currentYear} statt?`,
        answer: (
          <div className="space-y-2">
            <p>
              Der Kitzbüheler findet meist Anfang September statt. Für die exakten Zeiten
              (Start, Cut-offs, Ausgabe Startunterlagen) solltest du dich auf der Webseite des Veranstalters informieren:
            </p>
            <a href="https://kitzbueheler-radmarathon.at/" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline inline-flex items-center gap-1">
              Zur offiziellen Veranstaltungsseite <ExternalLink className="w-4 h-4" />
            </a>
            <p>
              Für deine Vorbereitung ist sinnvoll, zeitig mit dem Training anzufangen.
              Genauere Empfehlungen findest du in der Trainingssektion:
            </p>
            <a href="#training" className="text-primary hover:underline inline-flex items-center gap-1">
              Zu den Trainingstipps <Link className="w-4 h-4" />
            </a>
          </div>
        ),
        answerText:
          "Der Kitzbüheler Radmarathon findet meist Anfang September statt. Verbindliche Details (Startzeiten, Cut-offs, Startunterlagen) stehen auf der offiziellen Veranstalterseite bzw. in der Ausschreibung.",
      },
      {
        key: "trainingdauer",
        question: "Wie lange sollte man für den Kitzbüheler trainieren (Vorbereitung in Wochen)?",
        answer: (
          <div className="space-y-2">
            <p>
              Je nach Ausgangsniveau sind 3-4 Monate strukturierte Vorbereitung sinnvoll. Dennoch sollte davor bereits ein gutes
              Grundniveau vorhanden sein.
            </p>
            <p>
              Der Schlüssel zum Erfolg ist beim Training immer Konstanz. Also lieber zeitig anfangen und häufig trainieren,
              als kurz vor knapp mit Paniktraining das erfolgreiche Finish zu gefährden.
              Mehr konkrete Tipps für deine Vorbereitung findest du in der Trainingssektion:
            </p>
            <a href="#training" className="text-primary hover:underline inline-flex items-center gap-1">
              Zu den Trainingstipps <Link className="w-4 h-4" />
            </a>
          </div>
        ),
        answerText:
          "Je nach Ausgangsniveau sind etwa 3–4 Monate (ca. 12–16 Wochen) strukturierte Vorbereitung sinnvoll, idealerweise auf Basis eines vorhandenen Grundniveaus. Der wichtigste Faktor ist Konstanz: lieber früh beginnen und regelmäßig trainieren statt kurzfristiges „Paniktraining“.",
      },
      {
        key: "uebersetzung",
        question: "Welche Übersetzung/Kassette ist für den Kitzbüheler empfehlenswert?",
        answer: (
          <div className="space-y-2">
            <p>
              Die passende Übersetzung ist von deinem Gewicht und deiner Leistungsfähigkeit abhängig
            </p>
            <p>
              Für viele Fahrer ist ein Setup mit 50/34 vorne und einer großen Kassette mit 11-34 oder größer hinten sinnvoll, damit die auch am sehr steilen Kitzbüheler Horn (bis zu 20%) nicht schieben musst.
              Um deine individuelle optimale Übersetzung zu finden, kannst du meinen Übersetzungsrechner nutzen. Für den Kitzbüheler empfehle ich eine Steigung von 15% oder mehr einzugeben,
              da das am Kitzbüheler Horn den steilsten Abschnitten entspricht.
              Hier findest du den Übersetzungsrechner:
            </p>
            <a href="/tools/uebersetzungsrechner" target="_blank" className="text-primary hover:underline inline-flex items-center gap-1">
              Zum Übersetzungsrechner <ExternalLink className="w-4 h-4" />
            </a>
          </div>
        ),
        answerText:
          "Die passende Übersetzung hängt von Gewicht, Leistungsfähigkeit und bevorzugter Trittfrequenz ab. Für viele ist ein Setup mit 50/34 vorne und 11-34 oder größer hinten sinnvoll, damit du auch am Kitzbüheler Horn (bis zu 20%) nicht schieben musst. Individuelle Empfehlungen liefert der <a href=\"https://maxcyclescoaching.de/tools/uebersetzungsrechner\" target=\"_blank\">Übersetzungsrechner</a>.",
      },
    ],
    [currentYear]
  );

  const faqStructuredData = useMemo(() => {
    return {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      mainEntity: faqItems.map((i) => ({
        "@type": "Question",
        name: i.question,
        acceptedAnswer: { "@type": "Answer", text: i.answerText },
      })),
    };
  }, [faqItems]);

  return (
    <div className="min-h-screen bg-white flex flex-col">
      <Navbar />

      <main className="flex-grow pb-40 xl:pb-0">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(faqStructuredData) }}
        />

        {/* ================= HERO ================= */}

        <section className="relative h-[60vh] sm:h-[70vh] bg-primary">
          <div className="absolute inset-0">
            <img
              src="/images/kitzbueheler_rm.avif"
              alt="Kitzbüheler Radmarathon - Atmosphäre Auffahrt Kitzbüheler Horn"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-primary/40" />
            <span className="absolute bottom-2 right-3 flex items-center gap-1 text-white/80 text-[10px] sm:text-xs drop-shadow-md z-10">
              <Copyright className="w-3 h-3 sm:w-3.5 sm:h-3.5" /> EXPA Pictures
            </span>
          </div>

          <div className="relative h-full flex items-center justify-center text-center text-white px-4 sm:px-6">
            <div>
              <h1 className="text-2xl sm:text-4xl md:text-6xl font-bold mb-4 sm:mb-6 leading-tight">
                Kitzbüheler Radmarathon {currentYear} – Strecke, Pacing-Strategien & Training-Tipps
              </h1>

              <p className="text-base sm:text-xl max-w-3xl mx-auto">
                Alles über Streckenprofil, Leistungsanforderungen und Renntaktik für dein erfolgreiches Finish beim Kitzbüheler.
              </p>
            </div>
          </div>
        </section>

        <section className="py-8 border-b">
          <div className="max-w-5xl mx-auto px-4 space-y-6">
            <div className="flex flex-wrap gap-2 text-sm text-gray-600">
              <span className="font-medium">Autor: Maximilian Lohr</span>
              <span>•</span>
              <span className="font-medium">
                Veröffentlicht am <time dateTime={publicationDate}>{formattedPublicationDate}</time>
              </span>
            </div>

            <details className="rounded-lg border bg-accent p-5">
              <summary className="text-xl font-semibold text-primary cursor-pointer">Inhaltsverzeichnis</summary>
              <ol className="mt-4 space-y-2 text-sm md:text-base">
                <li><a href="#strecke" className="text-primary hover:underline">1. Strecke</a></li>
                <li><a href="#pacing" className="text-primary hover:underline">2. Optimale Pacing-Strategie</a></li>
                <li><a href="#ernaehrung" className="text-primary hover:underline">3. Ernährung &amp; Energieversorgung</a></li>
                <li><a href="#training" className="text-primary hover:underline">4. Trainingstipps</a></li>
                <li><a href="#faq" className="text-primary hover:underline">5. FAQ</a></li>
                <li><a href="#coaching" className="text-primary hover:underline">6. Individuelle Vorbereitung</a></li>
              </ol>
            </details>
          </div>
        </section>


        {/* ================= EINLEITUNG ================= */}

        <section id="einleitung" className="py-10 sm:py-16 max-w-4xl mx-auto px-4">
          <p className="text-lg text-gray-700">
            Der Kitzbüheler Radmarathon gilt als einer der härtesten Jedermann-Radmarathons Europas. 
            Mit 216 Kilometern und über 4.600 Höhenmetern verlangt das Rennen nicht nur enorme Ausdauer,
            sondern vor allem eine intelligente Pacing-Strategie und strukturierte Vorbereitung. <br/>
            Als Coach ist gerade in den letzten Jahren die Nachfrage nach dem Kitzbüheler als Zielevent enorm gestiegen.
            Daher möchte ich dir im Folgenden meine gesammelten Erfahrungen über die Strecke, Training, Pacing und Vorbereitung für deinen erfolgreichen Kitzbüheler {currentYear} weitergeben.
          </p>
        </section>


        {/* ================= STRECKE ================= */}

        <section id="strecke" className="py-12 sm:py-20 bg-accent">
          <div className="max-w-5xl mx-auto px-4">

            <h2 className="text-2xl sm:text-3xl font-bold text-primary mb-6 sm:mb-10 text-center">
              Kitzbüheler Radmarathon Strecke – Profil, Pässe & Höhenmeter
            </h2>

            <div id="cta-startpoint" className="mb-8 sm:mb-12 scroll-mt-24">
              <img 
                src="/images/kitzbueheler_elevation_profile.png" 
                alt="Höhenprofil Kitzbüheler Radmarathon - Pass Thurn, Gerlospass, Kerschbaumer Sattel, Brandenberg und Kitzbüheler Horn" 
                className="w-full h-auto rounded-lg shadow-lg bg-black p-1 sm:p-10"
              />
              <p className="text-center text-sm text-gray-500 mt-2">
                Das offizielle Höhenprofil: 216km und 4600hm mit fünf großen Anstiegen.
              </p>
            </div>

            <div className="space-y-6 sm:space-y-8 text-gray-700">

              <div className="space-y-2">
                <div className="flex items-center gap-3 sm:gap-4">
                  <Mountain className="w-6 h-6 sm:w-8 sm:h-8 text-secondary shrink-0" />
                  <h3 className="font-semibold text-lg sm:text-xl m-0">Teil 1: Von Kitzbühel über den Pass Thurn</h3>
                </div>
                <p>
                  Nach dem Start geht es direkt ca. 18km durchgehend bergauf auf den Pass Thurn. Der Anstieg ist dabei mit ca. 3% Durchschnittssteigung
                  relativ flach und wird nur gegen Ende kurzfristig steiler. Daher ist es hier sehr wichtig eine gute Gruppe zu finden und im Windschatten
                  Energie für die späteren Anstiege zu sparen. Antritte oberhalb der Schwelle (FTP) sollten trotz der Hektik zum Start vermieden werden.
                  Auch sollte man hier schon beginnen sich für die kommenden Kilometer zu verpflegen.
                </p>
              </div>


              <div className="space-y-2">
                <div className="flex items-center gap-3 sm:gap-4">
                  <TrendingDown className="w-6 h-6 sm:w-8 sm:h-8 text-secondary shrink-0" />
                  <h3 className="font-semibold text-lg sm:text-xl m-0">Teil 2: Abfahrt vom Pass Thurn nach Mittersill</h3>
                </div>
                <p>
                  Darauf folgt direkt die erste Abfahrt des Tages. Diese findet auf einer sehr breiten Straße mit wenigen Kurven statt, ist
                  also insgesamt wenig technisch anspruchsvoll. Daher wird hier oft sehr schnell gefahren. Da man hier keine Zeit gutmachen kann, sollte
                  man möglichst einfach in seiner Gruppe bleiben und die Abfahrt zur Regeneration nutzen.
                  Wichtig ist hier zudem, dass es aufgrund der frühen Uhrzeit und der Höhe von über 1.250m noch recht kühl sein kann. Daher sollte man sich vorm Start genau überlegen,
                  was man direkt anzieht und was man oben auf dem Pass noch drüber ziehen kann, um in der Abfahrt nicht auszukühlen.
                </p>
              </div>

              <div className="space-y-2">
                <div className="flex items-center gap-3 sm:gap-4">
                  <Route className="w-6 h-6 sm:w-8 sm:h-8 text-secondary shrink-0" />
                  <h3 className="font-semibold text-lg sm:text-xl m-0">Teil 3: Mittersill bis Wald im Pinzgau</h3>
                </div>
                <p>
                  Der dritte Streckenabschnitt ist ca. 22km lang und der langweiligste Teil der Veranstaltung. Man fährt auf einer großen Bundesstraße flach
                  bis zum Fuße des Gerlospasses. Hier ist es wichtig einfach in der Gruppe zu bleiben und nicht versuchen alleine vorzufahren. Der Abschnitt eignet sich auch gut,
                  um nochmal Flüssigkeit und Kohlenhydrate zu sich zu nehmen.
                </p>
              </div>

              <div className="space-y-2">
                <div className="flex items-center gap-3 sm:gap-4">
                  <Mountain className="w-6 h-6 sm:w-8 sm:h-8 text-secondary shrink-0" />
                  <h3 className="font-semibold text-lg sm:text-xl m-0">Teil 4: Gerlospass</h3>
                </div>
                <p>
                  Der zeitmäßig (neben dem Kitzbüheler Horn) längste Anstieg des Tages mit ca. 11,5 km Länge und 5,6% Durchschnittssteigung. Auch wenn die Steigung erstmal moderat erscheint, sollte man wissen, dass 
                  der Anstieg eher zweigeteilt ist. Der erste Teil ist mit fast 10% Steigung auf 3 km sehr steil und hat einige noch steilere Rampen. Da man sich hier noch recht frisch fühlt,
                  ist es umso wichtiger ständig seine Herzfrequenz- und Leistungswerte zu kontrollieren und sich zurückzuhalten. In der Mitte des Gerlospasses wird es dann zwischenzeitlich flacher
                  und geht z.T. sogar leicht bergab. Hier sollte man sich nochmal für die letzten Kilometer verpflegen, welche wieder steiler werden.
                  Oben zieht sich der Anstieg dann nochmal ein Stück bei geringeren Steigungsprozenten.
                </p>
              </div>

              <div className="space-y-2">
                <div className="flex items-center gap-3 sm:gap-4">
                  <TrendingDown className="w-6 h-6 sm:w-8 sm:h-8 text-secondary shrink-0" />
                  <h3 className="font-semibold text-lg sm:text-xl m-0">Teil 5: Abfahrt vom Gerlospass</h3>
                </div>
                <p>
                  Die Abfahrt vom Gerlospass ist flacher als der Anstieg und gerade die ersten 16 km bergab sind mit -2,4% Steigung in einer guten Gruppe deutlich angenehmer.
                  Der untere Teil der Abfahrt wird dann steiler, schneller und technischer. Abfahrtsliebhaber kommen in den schnellen Kurven und Serpentinen voll auf ihre Kosten.
                  Dennoch kann man auch hier keine wirkliche Zeit gut machen und sollte auf die Gruppe warten.
                </p>
              </div>

              <div className="space-y-2">
                <div className="flex items-center gap-3 sm:gap-4">
                  <Route className="w-6 h-6 sm:w-8 sm:h-8 text-secondary shrink-0" />
                  <h3 className="font-semibold text-lg sm:text-xl m-0">Teil 6: Zell am Ziller bis Imming</h3>
                </div>
                <p>
                  Der nächste flache Teil ist landschaftlich schöner, aber genauso wenig anspruchsvoll wie das Flachstück vorm Gerlospass.
                  Hier gilt es wieder sich zu verpflegen und mit der Gruppe zusammen die Strecke effizient zurückzulegen.
                </p>
              </div>

              <div className="space-y-2">
                <div className="flex items-center gap-3 sm:gap-4">
                  <Mountain className="w-6 h-6 sm:w-8 sm:h-8 text-secondary shrink-0" />
                  <h3 className="font-semibold text-lg sm:text-xl m-0">Teil 7: Kerschbaumer Sattel</h3>
                </div>
                <p>
                  Der Kerschbaumer Sattel ist ca. 6 km lang und hat über 9% sehr konstante Durchschnittssteigung. Hier zeigt sich das erste Mal,
                  ob man in der ersten Streckenhälfte bereits überzogen hat. Vorteilhaft sind hier gleichmäßiges Pacing und gute Verpflegung davor.
                  Auf dem Gipfel gibt es zudem eine Verpflegungsstelle, wo man mit relativ wenig Zeitverlust nochmal die Flaschen auffüllen kann.
                </p>
              </div>

              <div className="space-y-2">
                <div className="flex items-center gap-3 sm:gap-4">
                  <TrendingDown className="w-6 h-6 sm:w-8 sm:h-8 text-secondary shrink-0" />
                  <h3 className="font-semibold text-lg sm:text-xl m-0">Teil 8: Abfahrt vom Kerschbaumer Sattel bis Kramsach </h3>
                </div>
                <p>
                  Die Abfahrt vom Kerschbaumer Sattel ist eng, kurvig und hat nicht den besten Straßenbelag. Zudem gibt es keine Schutzplanken an den Seiten der Straße.
                  Deswegen muss man sich hier zu höchster Konzentration zwingen. Danach geht noch wenige Kilometer flach bis Kramsach, wo dann der Brandenberg beginnt.
                </p>
              </div>

              <div className="space-y-2">
                <div className="flex items-center gap-3 sm:gap-4">
                  <Mountain className="w-6 h-6 sm:w-8 sm:h-8 text-secondary shrink-0" />
                  <h3 className="font-semibold text-lg sm:text-xl m-0">Teil 9: Brandenberg</h3>
                </div>
                <p>
                  Der Bergauf-Teil der Schleife zum Brandenberg ist zwar mit 12 km insgesamt recht lang, aber auch mit unter 3% Durchschnittssteigung ziemlich flach.
                  Der Anstieg ist dabei dreigeteilt mit einer kurzen und einer längeren Abfahrt dazwischen. Die tatsächlichen Bergauf-Passagen sind mit 5-6% Steigung jedoch trotzdem moderat
                  und eher gleichmäßig. Sollte man sich hier in einer kleinen Gruppe befinden, ist das von Vorteil.
                </p>
              </div>

              <div className="space-y-2">
                <div className="flex items-center gap-3 sm:gap-4">
                  <TrendingDown className="w-6 h-6 sm:w-8 sm:h-8 text-secondary shrink-0" />
                  <h3 className="font-semibold text-lg sm:text-xl m-0">Teil 10: Abfahrt vom Brandenberg</h3>
                </div>
                <p>
                  Die Abfahrt vom Brandenberg ist steiler als die Auffahrt, aber breiter als die Kerschbaumer-Abfahrt. Dennoch gibt es sehr schnelle Kurven
                  und technische Passagen. Auch hier sollte man seine Konzentration hochhalten, um sicher und zügig runterzukommen.
                </p>
              </div>

              <div className="space-y-2">
                <div className="flex items-center gap-3 sm:gap-4">
                  <Route className="w-6 h-6 sm:w-8 sm:h-8 text-secondary shrink-0" />
                  <h3 className="font-semibold text-lg sm:text-xl m-0">Teil 11: Kramsach bis Grub</h3>
                </div>
                <p>
                  Das letzte Flachstück des Tages ist mit über 60 km zugleich das mit Abstand Längste. Dabei wird man mit der Vorermüdung dennoch die zwei kleinen Rampen zwischendrin merken,
                  die auf einen warten. Trotzdem ist hier eine gut laufende Gruppe ganz wichtig und man sollte je nach Gruppegröße, aktuellem Körpergefühl und Zielzeit hier auch mal mit Führungsarbeit leisten.
                  Zudem ist die lange Passage gut dafür geeignet sich zu verpflegen und seelisch und moralisch auf die Leiden am Kitzbüheler Horn vorzubereiten.
                  Die Kitz-Strecke biegt jedoch davor ab und kommt ohne den finalen Anstieg wieder in Kitzbühel am Ziel an.
                </p>
              </div>

              <div className="space-y-2">
                <div className="flex items-center gap-3 sm:gap-4">
                  <Mountain className="w-6 h-6 sm:w-8 sm:h-8 text-secondary shrink-0" />
                  <h3 className="font-semibold text-lg sm:text-xl m-0">Teil 12: Bergankunft am Kitzbüheler Horn</h3>
                </div>
                <p>
                  Der letzte Brecher des Tages: Hier entscheidet sich, ob man seine Zielzeit erreicht oder ob man sich die Blöße geben muss am Horn zu schieben. 
                  Das Kitzbüheler Horn ist insgesamt knapp 7 km lang und hat fast 13% Durchschnittssteigung. Hinzu kommen mehrere Rampen von über 20%. Damit ist das einer der steilsten Alpenanstiege, die man so fahren kann.
                  Hinzu kommt möglicherweise die Mittagshitze, die bei den Steigungsprozenten selbst bei unter 20° spürbar sein wird. Im etwas flacheren ersten Teilstück des Anstiegs sollte man sich lieber noch etwas schonen,
                  um später noch über die Rampen zu kommen. Am Anstieg wünscht man sich, egal wie leicht die Übersetzung schon ist, noch einige Gänge mehr.
                  Ansonsten gibt es hier wenig zu sagen. Man kann einfach nur noch fahren, was geht und sich von den Zuschauern treiben lassen. Wenn man dann die längsten 7 km seines Lebens überstanden hat, wird man oben von
                  einer tollen Aussicht und einer großartigen Stimmung empfangen. Und das Gefühl, es geschafft zu haben, ist nach diesen Strapazen umso schöner.
                </p>
              </div>

            </div>
          </div>
        </section>


        {/* ================= PACING ================= */}

        <section id="pacing" className="py-12 sm:py-20">
          <div className="max-w-4xl mx-auto px-4">

            <h2 className="text-2xl sm:text-3xl font-bold text-primary mb-6 sm:mb-10 text-center">
              Optimale Pacing-Strategie für den Kitzbüheler Radmarathon
            </h2>

            <div className="space-y-6 sm:space-y-8 text-gray-700">

              <div className="space-y-2">
                <div className="flex items-center gap-3 sm:gap-4">
                  <Gauge className="w-6 h-6 sm:w-8 sm:h-8 text-secondary shrink-0" />
                  <h3 className="font-semibold text-lg sm:text-xl m-0">
                    Welche Zeit ist realistisch? Leistungsklassen und Zielzeiten
                  </h3>
                </div>
                <div className="mt-4">
                  <Table className="text-xs sm:text-base">
                      <TableCaption>
                        Richtwerte: Zielzeiten hängen u.a. von Gruppenfahrt, Wetter und Verpflegung ab.
                      </TableCaption>
                      <TableHeader>
                        <TableRow>
                          <TableHead className="px-1 sm:px-4">
                            <span className="sm:hidden">Schwellen-<br/>leistung</span>
                            <span className="hidden sm:inline">Schwellenleistung</span>
                          </TableHead>
                          <TableHead className="px-1 sm:px-4">
                            <span className="sm:hidden">Norm.<br/>Leistung</span>
                            <span className="hidden sm:inline">Normalisierte Leistung</span>
                          </TableHead>
                          <TableHead className="px-1 sm:px-4">Zielzeit</TableHead>
                        </TableRow>
                      </TableHeader>
                      <TableBody>
                        <TableRow>
                          <TableCell className="font-medium px-1 sm:px-4">2,5 – 3 W/kg</TableCell>
                          <TableCell className="px-1 sm:px-4">1,8 – 2,2 W/kg</TableCell>
                          <TableCell className="px-1 sm:px-4">10h – 12h <span className="hidden sm:inline">(Zeitlimit)</span></TableCell>
                        </TableRow>
                        <TableRow>
                          <TableCell className="font-medium px-1 sm:px-4">3 – 3,5 W/kg</TableCell>
                          <TableCell className="px-1 sm:px-4">2,2 – 2,5 W/kg</TableCell>
                          <TableCell className="px-1 sm:px-4">Sub-10 Stunden</TableCell>
                        </TableRow>
                        <TableRow>
                          <TableCell className="font-medium px-1 sm:px-4">3,5 – 4 W/kg</TableCell>
                          <TableCell className="px-1 sm:px-4">2,5 – 2,9 W/kg</TableCell>
                          <TableCell className="px-1 sm:px-4">Sub-9 Stunden</TableCell>
                        </TableRow>
                        <TableRow>
                          <TableCell className="font-medium px-1 sm:px-4">4 – 4,5 W/kg</TableCell>
                          <TableCell className="px-1 sm:px-4">2,9 – 3,3 W/kg</TableCell>
                          <TableCell className="px-1 sm:px-4">Sub-8 Stunden</TableCell>
                        </TableRow>
                        <TableRow>
                          <TableCell className="font-medium px-1 sm:px-4">4,5 – 5 W/kg</TableCell>
                          <TableCell className="px-1 sm:px-4">3,3 – 3,6 W/kg</TableCell>
                          <TableCell className="px-1 sm:px-4">Sub 7:30 Stunden</TableCell>
                        </TableRow>
                        <TableRow>
                          <TableCell className="font-medium px-1 sm:px-4">5 – 5,5 W/kg</TableCell>
                          <TableCell className="px-1 sm:px-4">3,6 – 4 W/kg</TableCell>
                          <TableCell className="px-1 sm:px-4">unter 7h</TableCell>
                        </TableRow>
                      </TableBody>
                    </Table>
                  </div>
              </div>  

              <div className="space-y-2">
                <div className="flex items-center gap-3 sm:gap-4">
                  <Gauge className="w-6 h-6 sm:w-8 sm:h-8 text-secondary shrink-0" />
                  <h3 className="font-semibold text-lg sm:text-xl m-0">
                    Warum ist Pacing so wichtig für den Kitzbüheler?
                  </h3>
                </div>
                <p>
                  Der Kitzbüheler Radmarathon ist mit ca. 9 Stunden durchschnittlicher Dauer eines der längsten Radmarathons Europas.
                  Dementsprechend ist es besonders wichtig, eine konkrete Pacing-Strategie zu verfolgen. Ansonsten droht ein Einbruch in der zweiten Rennhälfte,
                  wodurch das Rennen weniger Spaß macht und die Zielzeit deutlich schlechter ausfällt als geplant. 
                </p>
              </div>

              <div className="space-y-2">
                <div className="flex items-center gap-3 sm:gap-4">
                  <Target className="w-6 h-6 sm:w-8 sm:h-8 text-secondary shrink-0" />
                  <h3 className="font-semibold text-lg sm:text-xl m-0">
                    Leistungsanforderungen der fünf großen Anstiege des Kitzbühelers
                  </h3>
                </div>
                <Card className="mt-4">
                    <CardHeader>
                      <CardTitle className="text-lg sm:text-xl">Richtwerte für die 5 Schlüsselabschnitte</CardTitle>
                      <CardDescription>
                        Die meisten Fahrer bewegen sich insgesamt bei einem Intensitätsfaktor (IF) von ca. 0,7 – 0,82, also 70-82% der Schwellenleistung stehen am Ende als normalisierte Leistung da.
                      </CardDescription>
                    </CardHeader>
                    <CardContent className="space-y-5">
                      <p className="leading-relaxed">
                        Entscheidend ist, dass du an den Anstiegen nicht „überziehst“ und die Intensität über den Tag
                        kontrollierst. Die Tabelle hilft dir, die Zielbereiche pro Anstieg schnell zu erfassen.
                      </p>

                      <div className="mt-2">
                        <Table className="text-xs sm:text-base">
                          <TableHeader>
                            <TableRow>
                              <TableHead className="px-1 sm:px-4">Anstieg</TableHead>
                              <TableHead className="px-1 sm:px-4">Länge</TableHead>
                              <TableHead className="px-1 sm:px-4">
                                <span className="sm:hidden">Ø Steig.</span>
                                <span className="hidden sm:inline">Ø Steigung</span>
                              </TableHead>
                              <TableHead className="px-1 sm:px-4">Zielbereich</TableHead>
                              <TableHead className="px-1 sm:px-4">
                                <span className="sm:hidden">Dauer<br/><span className="text-[10px] font-normal">(75kg, 300W FTP)</span></span>
                                <span className="hidden sm:inline">geschätzte Dauer <br/><span className="text-xs font-normal">(Beispielfahrer mit 75kg & 300W FTP)</span></span>
                              </TableHead>
                            </TableRow>
                          </TableHeader>
                          <TableBody>
                            <TableRow>
                              <TableCell className="font-medium px-1 sm:px-4">Pass Thurn</TableCell>
                              <TableCell className="px-1 sm:px-4">17,6 km</TableCell>
                              <TableCell className="px-1 sm:px-4">2,8%</TableCell>
                              <TableCell className="px-1 sm:px-4">74–82%</TableCell>
                              <TableCell className="px-1 sm:px-4">~42min</TableCell>
                            </TableRow>
                            <TableRow>
                              <TableCell className="font-medium px-1 sm:px-4">Gerlospass</TableCell>
                              <TableCell className="px-1 sm:px-4">11,5 km</TableCell>
                              <TableCell className="px-1 sm:px-4">5,6%</TableCell>
                              <TableCell className="px-1 sm:px-4">81–89%</TableCell>
                              <TableCell className="px-1 sm:px-4">~45min</TableCell>
                            </TableRow>
                            <TableRow>
                              <TableCell className="font-medium px-1 sm:px-4">Kerschbaumer Sattel</TableCell>
                              <TableCell className="px-1 sm:px-4">5,9 km</TableCell>
                              <TableCell className="px-1 sm:px-4">9,2%</TableCell>
                              <TableCell className="px-1 sm:px-4">83–91%</TableCell>
                              <TableCell className="px-1 sm:px-4">~30min</TableCell>
                            </TableRow>
                            <TableRow>
                              <TableCell className="font-medium px-1 sm:px-4">Brandenberg</TableCell>
                              <TableCell className="px-1 sm:px-4">12,1 km</TableCell>
                              <TableCell className="px-1 sm:px-4">2,8%</TableCell>
                              <TableCell className="px-1 sm:px-4">79–87%</TableCell>
                              <TableCell className="px-1 sm:px-4">~40min</TableCell>
                            </TableRow>
                            <TableRow>
                              <TableCell className="font-medium px-1 sm:px-4">Kitzbüheler Horn</TableCell>
                              <TableCell className="px-1 sm:px-4">6,7 km</TableCell>
                              <TableCell className="px-1 sm:px-4">12,6%</TableCell>
                              <TableCell className="px-1 sm:px-4">84–92%</TableCell>
                              <TableCell className="px-1 sm:px-4">~50min</TableCell>
                            </TableRow>
                          </TableBody>
                        </Table>
                      </div>

                      <Alert>
                        <AlertTitle>Hinweise</AlertTitle>
                        <AlertDescription>
                          <p>
                            Fahrer mit niedrigerer Leistungsfähigkeit sollten sich tendenziell eher an den unteren Werten orientieren, da
                            sie die Intensität länger halten müssen. Sehr leistungsfähige Fahrer können je nach Tagesform
                            etwas höher ansetzen.
                          </p>
                          <p className="mt-2">
                            An den ungleichmäßigeren Anstiegen (z.B. Gerlospass und Brandenberg) sollte man in den steileren Stücken mehr Leistung
                            abrufen und in den schnelleren Passagen dafür etwas rausnehmen.
                          </p>
                        </AlertDescription>
                      </Alert>
                    </CardContent>
                  </Card>
              </div>

            </div>
          </div>
        </section>


        {/* ================= ERNÄHRUNG ================= */}

        <section id="ernaehrung" className="py-12 sm:py-20 bg-accent">
          <div className="max-w-4xl mx-auto px-4">

            <h2 className="text-2xl sm:text-3xl font-bold text-primary mb-6 sm:mb-10 text-center">
              Ernährung & Energieversorgung
            </h2>

            <div className="grid gap-4 md:grid-cols-[auto,1fr] items-start text-gray-700">
              <Utensils className="w-6 h-6 sm:w-8 sm:h-8 text-secondary shrink-0 hidden md:block" />
              <Card>
                <CardHeader>
                  <CardTitle className="text-xl">Verpflegung als Schlüssel zum Erfolg</CardTitle>
                  <CardDescription>
                    Gute Verpflegung verhindert Einbrüche – und macht die zweite Rennhälfte deutlich angenehmer.
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4 leading-relaxed">
                  <p>
                    Eine ausreichende Kohlenhydratzufuhr während des Rennens ist entscheidend, um Leistungseinbrüche
                    zu vermeiden. Je besser du dich verpflegen kannst, desto schneller wirst du am Ende
                    fahren können und umso mehr Spaß wirst du haben.
                  </p>
                  <p>
                    Plane die Verpflegung im Vorhinein: Wo bekommst du Nachschub? Wie viel Gramm pro Stunde ist realistisch?
                    Und wie organisierst du Flaschen/Gels über den Streckenverlauf?
                  </p>
                  <ul className="list-disc pl-5 space-y-1">
                    <li>Strategie festlegen (g/h Kohlenhydrate, Flüssigkeit, Salz)</li>
                    <li>Produkte im Training testen (Magenverträglichkeit, Handhabung)</li>
                    <li>In langen und intensiven Einheiten gezielt „train the gut“</li>
                  </ul>
                  <p>
                    Unten findest du einen Rechner, um die individuelle Kohlenhydrat-, Salz- und Flüssigkeitszufuhr für
                    deinen Kitzbüheler zu berechnen. Wichtig: Die Strategie muss im Training erprobt werden.
                  </p>
                </CardContent>
              </Card>
            </div>

            <div className="mt-10">
              <NutritionCalculator />
            </div>

          </div>
        </section>

        {/* ================= TRAINING ================= */}

        <section id="training" className="py-12 sm:py-20">
          <div className="max-w-5xl mx-auto px-4">

            <h2 className="text-2xl sm:text-3xl font-bold text-primary mb-6 sm:mb-10 text-center">
              Trainingsplanung & Vorbereitung für den Kitzbüheler Radmarathon
            </h2>

            <div className="space-y-6 sm:space-y-8 text-gray-700">
              <Card>
                <CardHeader>
                  <CardTitle className="text-xl sm:text-2xl">1) Saisonplanung & Makroperiodisierung</CardTitle>
                  <CardDescription>
                    Früh planen, Belastung steuern, und rechtzeitig spezifisch werden.
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4 leading-relaxed">
                  <p>
                    Der Kitzbüheler findet meist Anfang September statt. Eine gute Saisonplanung hilft dir,
                    über Monate konstant zu trainieren – ohne dich zu überlasten.
                  </p>
                  <p>
                    Ich empfehle zeitig mit dem Training zu beginnen und die Vorbereitung wie folgt einzuteilen:
                  </p>

                  <div className="grid gap-4 md:grid-cols-2">
                    <div className="rounded-lg border bg-background p-4">
                      <h4 className="font-semibold text-primary">1. Grundlagenphase (November/Dezember bis März/April)</h4>
                      <ul className="mt-2 list-disc pl-5 space-y-1">
                        <li>Konstanz als oberstes Ziel (min. 3 – 4 Einheiten/Woche)</li>
                        <li>Viel lockeres Grundlagentraining: ca. 55–75% FTP</li>
                        <li>1x pro Woche gezielt intensiv (VO2max-Impuls)</li>
                      </ul>
                    </div>

                    <div className="rounded-lg border bg-background p-4">
                      <h4 className="font-semibold text-primary">2. Aufbauphase (April/Mai bis Mitte Juni)</h4>
                      <ul className="mt-2 list-disc pl-5 space-y-1">
                        <li>Schwachstellen gezielt bearbeiten, z.B. VLAmax senken oder VO2max steigern</li>
                        <li>2 – 3 intensivere Einheiten/Woche sind möglich (individuell)</li>
                        <li>Erholung aktiv einplanen (sonst verpufft der Reiz)</li>
                      </ul>
                    </div>

                    <div className="rounded-lg border bg-background p-4">
                      <h4 className="font-semibold text-primary">3. Spezifische Vorbereitung (Mitte Juni bis Mitte Aug)</h4>
                      <ul className="mt-2 list-disc pl-5 space-y-1">
                        <li>Viel Zeit im Renntempo („Race Pace“) (ca. 75–85% FTP) und leicht unterhalb der FTP</li>
                        <li>Lange Einheiten + Verpflegung/Setup testen</li>
                        <li>je nach Athletentyp mindestens alle 10 Tage ein VO2max-Erhaltungsreiz</li>
                      </ul>
                    </div>

                    <div className="rounded-lg border bg-background p-4">
                      <h4 className="font-semibold text-primary">4. Tapering (letzte 2 Wochen)</h4>
                      <ul className="mt-2 list-disc pl-5 space-y-1">
                        <li>Volumen auf ca. 60 – 80% der Trainingszeit in den vier Vorwochen reduzieren</li>
                        <li>Intensität beibehalten, aber weniger Gesamtstress</li>
                        <li>am Vortag empfiehlt sich eine kurze Vorbelastung zur Aktivierung</li>
                      </ul>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="text-xl sm:text-2xl">2) Schlüsselparameter fürs Rennen</CardTitle>
                  <CardDescription>
                    Vier Stellschrauben, die du im Training gezielt beeinflussen kannst.
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4 leading-relaxed">
                  <p>
                    Für den Kitzbüheler sind vor allem VO2max, FTP, VLAmax und Ermüdungsresistenz (Fatigue Resistance)
                    relevant. Hier die Kurzfassung, wie du sie in der Praxis adressierst:
                  </p>

                  <div className="grid gap-4 md:grid-cols-2">
                    <div className="rounded-lg border bg-background p-4">
                      <h4 className="font-semibold text-primary">VO2max</h4>
                      <p className="mt-2 text-sm text-muted-foreground">
                        Maximale Menge an Sauerstoff, die der Körper aufnehmen und verwenden kann – wichtig als „obere Grenze“ der Leistungsfähigkeit.
                      </p>
                      <ul className="mt-3 list-disc pl-5 space-y-1">
                        <li>Lange, niedrigintensive Einheiten mit viel Energie- und Sauerstoffumsatz</li>
                        <li>Gezielt HIIT und IE (z.B. 4-6 Wiederholungen von 3–6min Intervallen oder 30/30er, 40/20er, 30/15er)</li>
                        <li>Ziel: ca. 15 – 30min intensive Zeit oberhalb der FTP pro Einheit</li>
                      </ul>
                    </div>

                    <div className="rounded-lg border bg-background p-4">
                      <h4 className="font-semibold text-primary">FTP</h4>
                      <p className="mt-2 text-sm text-muted-foreground">
                        Schwelle: ca. 1h-Leistung – zentral für die langen Anstiege.
                      </p>
                      <ul className="mt-3 list-disc pl-5 space-y-1">
                        <li>Viel Zeit knapp unter FTP (z.B. 4×12min @ 88–94%)</li>
                        <li>Progression: ca. 35min → bis 90min Zeit im Bereich pro Einheit</li>
                        <li>Pausen eher kurz (2:1 bis 4:1 Verhältnis aus Belastung zu Pause)</li>
                      </ul>
                    </div>

                    <div className="rounded-lg border bg-background p-4">
                      <h4 className="font-semibold text-primary">VLAmax</h4>
                      <p className="mt-2 text-sm text-muted-foreground">
                        Laktatbildungsrate – je niedriger, desto „ausdauernder“.
                      </p>
                      <ul className="mt-3 list-disc pl-5 space-y-1">
                        <li>Konstantes, überwiegend niedrigintensives Training</li>
                        <li>Sehr harte, kurze Belastungen eher sparsam einsetzen</li>
                        <li>Kraftausdauer: niedrige Kadenz (z.B. 55 – 65rpm) in Intervallen unterhalb der FTP (85%-95%) oder in hochintensiven Intervallen (z.B. 4x5min HIIT)</li>
                      </ul>
                    </div>

                    <div className="rounded-lg border bg-background p-4">
                      <h4 className="font-semibold text-primary">Ermüdungsresistenz</h4>
                      <p className="mt-2 text-sm text-muted-foreground">
                        Hohe Leistung trotz Vorermüdung – entscheidend für die zweite Rennhälfte.
                      </p>
                      <ul className="mt-3 list-disc pl-5 space-y-1">
                        <li>Regelmäßig lange Einheiten (Belastungsdauer trainieren)</li>
                        <li>Intervalle auch mal am Ende langer Ausfahrten einbauen</li>
                        <li>Verpflegung in diesen Einheiten konsequent mit üben</li>
                      </ul>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="text-xl sm:text-2xl">3) Lange Einheiten, Abfahrten & Verpflegung</CardTitle>
                  <CardDescription>
                    Die „Praxisbausteine“, die am Renntag am meisten spürbar sind.
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-6 leading-relaxed">
                  <div>
                    <h4 className="text-lg font-semibold text-primary">Lange Trainingseinheiten</h4>
                    <p className="mt-2">
                      Der Kitzbüheler ist ein langes Rennen – lange Einheiten sind daher Pflicht. In der akuten
                      Vorbereitungsphase (ca. 2 – 3 Monate vorher) sind mindestens alle 2 Wochen 4 – 8h sinnvoll.
                      Starte sehr locker (ca. 50 – 65% FTP) und steigere die Dauer schrittweise.
                      Für fortgeschrittene Fahrer können hier auch Intervalle unterhalb der FTP (z.B. 6x20min Renntempo) eingebaut werden.
                    </p>
                  </div>

                  <div>
                    <h4 className="text-lg font-semibold text-primary">Abfahrten kennen & Technik üben</h4>
                    <p className="mt-2">
                      Schnelles und sicheres Abfahren spart Zeit – und reduziert Risiko. Da eine persönliche Streckenbesichtigung 
                      für die meisten nicht möglich ist, helfen Videos (z.B. auf YouTube) oder Google Streetview, 
                      um Linienwahl und Schlüsselstellen zu kennen. Im Training lohnt es sich, Abfahrten auch mal etwas zügiger zu fahren 
                      – besonders nach Belastung, um Konzentration unter Ermüdung zu schulen.
                      <br/> Tipp: Bei HIIT am Berg ("Hill Reps") kann man gezielt üben Abfahrten im ermüdeten Zustand sicher und konzentriert zu fahren.
                    </p>
                  </div>

                  <div>
                    <h4 className="text-lg font-semibold text-primary">Verpflegung üben: „Train the gut“</h4>
                    <p className="mt-2">
                      Neben dem Trainingszustand ist die Kohlenhydrataufnahme der größte Hebel für deine Zielzeit.
                      Teste die Wettkampfmenge im Training (und ggf. leicht darüber), insbesondere in langen und
                      intensiven Einheiten.
                    </p>
                    <ul className="mt-3 list-disc pl-5 space-y-1">
                      <li>Produkte/Mengen wie im Rennen verwenden (Magenverträglichkeit testen)</li>
                      <li>Steigere schrittweise, z.B. Start bei 60 - 90g/h und jede Woche bei spezifischen Einheiten 5 – 10 g/h mehr</li>
                      <li>Wenn es zu Problemen kommt: Menge reduzieren und Verpflegungsstrategie fürs Rennen entsprechend anpassen</li>
                    </ul>
                  </div>
                </CardContent>
              </Card>
            </div>

          </div>
        </section>


        {/* ================= FAQ ================= */}

        <section id="faq" className="py-12 sm:py-20 bg-accent">
          <div className="max-w-4xl mx-auto px-4">
            <h2 className="text-2xl sm:text-3xl font-bold text-primary mb-4 text-center">
              FAQ: Kitzbüheler Radmarathon – häufige Fragen
            </h2>
            <p className="text-center text-gray-700 mb-8 sm:mb-10">
              Kurze Antworten auf die meistgesuchten Fragen zu Strecke, Training, Pacing und Verpflegung.
            </p>

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
        </section>


        {/* ================= COACHING CTA ================= */}

        <section id="coaching" className="py-12 sm:py-20 bg-primary text-white">
          <div className="max-w-4xl mx-auto text-center px-4">

            <h2 className="text-2xl sm:text-3xl font-bold mb-4 sm:mb-6">
              Individuelle Vorbereitung - Coaching für den Kitzbüheler Radmarathon
            </h2>

            <p className="text-lg sm:text-xl mb-6 sm:mb-8">
              Mit individuell strukturiertem Training, Leistungsanalyse und konkreter Renntaktik
              unterstütze ich dich bei deiner optimalen Vorbereitung.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="#contact">
                <Button size="lg" variant="secondary">
                  Coaching anfragen <ArrowRight className="ml-2 w-5 h-5" />
                </Button>
              </a>
              <a href="/" target="_blank">
                <Button size="lg" variant="secondary" className="bg-white text-primary hover:bg-gray-200">
                  Erfahre mehr <ExternalLink className="ml-2 w-5 h-5" />
                </Button>
              </a>
            </div>

          </div>
        </section>


        {/* ================= KONTAKT ================= */}

        <section id="contact" className="py-12 sm:py-20">
          <div className="max-w-5xl mx-auto px-4">

            <Suspense fallback={<div>Formular wird geladen...</div>}>
              <ContactForm />
            </Suspense>

          </div>
        </section>

      </main>

      <StickyBlogCta
        raceName="Kitzbüheler Radmarathon"
        contactHref="#contact"
        servicesHref="/#services"
      />

      <SiteFooter showEmail />

    </div>
  );
};

export default KitzbuehelerBlog;
