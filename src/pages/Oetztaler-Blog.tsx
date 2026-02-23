import { Navbar } from "@/components/Navbar";
import { Button } from "@/components/ui/button";
import { ArrowRight, Mountain, Gauge, Target, Utensils, TrendingDown, Route, Link, ExternalLink, Copyright } from "lucide-react";
import { lazy, Suspense, useMemo } from "react";
import { NutritionCalculator } from "@/components/NutritionCalculator";
import { SiteFooter } from "@/components/SiteFooter";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { Helmet } from "react-helmet-async";

const ContactForm = lazy(() => import("@/components/ContactForm"));

const OetztalerBlog = () => {
  const currentYear = new Date().getFullYear();
  const publicationDate = "2026-02-23";
  const formattedPublicationDate = useMemo(() => 
    new Date(publicationDate).toLocaleDateString("de-DE", {
      day: "numeric",
      month: "long",
      year: "numeric",
    }), [publicationDate]
  );
  const canonicalUrl = "https://maxcyclescoaching.de/blog/oetztaler";

  const faqItems = useMemo(
    () => [
      {
        key: "distanz-hm",
        question: "Wie viele Kilometer und Höhenmeter hat der Ötztaler Radmarathon?",
        answer: (
          <div className="space-y-2">
            <p>
              Der Ötztaler Radmarathon ist 227 km lang und hat über 5.500 Höhenmeter. Die Strecke führt
              über vier Schlüsselanstiege: Kühtai, Brenner, Jaufenpass und Timmelsjoch.
            </p>
            <p>
              Zielzeiten liegen im Bereich von 7h für die Top-Fahrer bis zum Zeitlimit von ca. 14h.
            </p>
          </div>
        ),
        answerText:
          "Der Ötztaler Radmarathon ist 227 km lang und hat über 5.500 Höhenmeter. Die Strecke führt über vier Schlüsselanstiege: Kühtai, Brenner, Jaufenpass und Timmelsjoch. Zielzeiten reichen grob von ca. 7 Stunden (Top-Fahrer) bis zum Zeitlimit von etwa 14 Stunden.",
      },
      {
        key: "pacing",
        question: "Welche Pacing-Strategie ist beim Ötztaler Radmarathon sinnvoll?",
        answer: (
          <div className="space-y-2">
            <p>
              Erfolgreiches Pacing ist für den Ötztaler neben der physischen Vorbereitung und Verpflegung der Hauptfaktor.
              Man sollte an den ersten Anstiegen nicht zu schnell fahren, um später weiterhin seine Leistung konstant halten zu können.
              Zwischen 75-85% der Schwellenleistung (FTP) an den Anstiegen ist für viele Fahrer ein guter Richtwert, um nicht zu überziehen.
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
          "Sinnvolles Pacing bedeutet, an den ersten Anstiegen nicht zu überziehen und über den Tag eine gleichmäßige Intensität zu halten. Für viele ist an den Anstiegen ein Bereich von ca. 75–85% der Schwellenleistung (FTP) ein guter Richtwert, um später nicht einzubrechen.",
      },
      {
        key: "zeit-realistisch",
        question: "Wie lange dauert der Ötztaler Radmarathon und welche Zielzeit ist realistisch?",
        answer: (
          <div className="space-y-2">
            <p>
              Die Zielzeit hängt von Leistungsfähigkeit (FTP, VO2max etc.), Körpergewicht, Gruppendynamik,
              Wetter, Verpflegung, Pacing und Renntaktik ab. Die durchschnittliche Finisher-Zeit liegt bei ca. 10 Stunden.
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
          "Die Zielzeit hängt u.a. von Leistungsfähigkeit (z.B. FTP), Körpergewicht, Gruppendynamik, Wetter, Verpflegung, Pacing und Renntaktik ab. Die durchschnittliche Finisher-Zeit liegt bei etwa 10 Stunden; konkrete Richtwerte stehen in der Zielzeiten-Tabelle in der Pacing-Sektion.",
      },
      {
        key: "watt-sub10",
        question: "Wie viel Watt bzw. Watt/kg braucht man für eine Sub-10 Stunden Zeit beim Ötztaler Radmarathon?",
        answer: (
          <div className="space-y-2">
            <p>
              Die Zielzeit ist von Wetter, Gruppendynamik und Physiologie des Fahrers oder der Fahrerin abhängig.
              Mit einer Schwellenleistung (FTP) von 3,5 bis 4 W/kg und einer normalisierten Leistung von 2,5 bis 2,9 W/kg ist eine Sub-10-Stunden-Zeit bei guten Bedingungen realistisch.
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
          "Für eine Sub-10h-Zeit sind – je nach Bedingungen, Gruppe und individueller Physiologie – häufig ca. 3,5–4,0 W/kg FTP und eine normalisierte Leistung von etwa 2,5–2,9 W/kg ein realistischer Bereich. Genaue Richtwerte stehen in der Pacing-Sektion.",
      },
      {
        key: "watt-sub9",
        question: "Wie viel Watt bzw. Watt/kg braucht man für eine Sub-9 Stunden Zeit beim Ötztaler Radmarathon?",
        answer: (
          <div className="space-y-2">
            <p>
              Die Zielzeit ist von Wetter, Gruppendynamik und Physiologie des Fahrers oder der Fahrerin abhängig.
              Mit einer Schwellenleistung (FTP) von 4 bis 4,5 W/kg und einer normalisierten Leistung von 2,9 bis 3,3 W/kg ist eine Sub-9-Stunden-Zeit bei guten Bedingungen realistisch.
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
          "Für eine Sub-9h-Zeit sind – je nach Bedingungen, Gruppe und individueller Physiologie – häufig ca. 4,0–4,5 W/kg FTP und eine normalisierte Leistung von etwa 2,9–3,3 W/kg ein realistischer Bereich. Genaue Richtwerte stehen in der Pacing-Sektion.",
      },
      {
        key: "watt-sub8",
        question: "Wie viel Watt bzw. Watt/kg braucht man für eine Sub-8 Stunden Zeit beim Ötztaler Radmarathon?",
        answer: (
          <div className="space-y-2">
            <p>
              Die Zielzeit ist von Wetter, Gruppendynamik und Physiologie des Fahrers oder der Fahrerin abhängig.
              Mit einer Schwellenleistung (FTP) von 4,5 bis 5 W/kg und einer normalisierten Leistung von 3,3 bis 3,6 W/kg ist eine Sub-8-Stunden-Zeit bei guten Bedingungen realistisch.
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
          "Für eine Sub-8h-Zeit sind – je nach Bedingungen, Gruppe und individueller Physiologie – häufig ca. 4,5–5,0 W/kg FTP und eine normalisierte Leistung von etwa 3,3–3,6 W/kg ein realistischer Bereich. Genaue Richtwerte stehen in der Pacing-Sektion.",
      },
      {
        key: "watt-wkg",
        question: "Wie viel Watt bzw. W/kg braucht man für den Ötztaler?",
        answer: (
          <div className="space-y-2">
            <p>
              Da es beim Ötztaler vor allem lange Anstiege im Bereich von 1-2h Fahrzeit gibt, ist die Schwellenleistung (FTP) in Watt pro Kilogramm Körpergewicht der entscheidende Leistungsfaktor.
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
          "Entscheidend ist vor allem deine Schwellenleistung (FTP) in Watt pro Kilogramm Körpergewicht, weil es beim Ötztaler lange Anstiege (oft 1–2 Stunden) gibt. Eine praxisnahe Orientierung liefern die W/kg-Leistungsklassen und Zielzeiten in der Pacing-Sektion.",
      },
      {
        key: "ernaehrung",
        question: "Wie viel sollte man beim Ötztaler pro Stunde essen und trinken (Kohlenhydrate)?",
        answer: (
          <div className="space-y-2">
            <p>
              Neben der physischen Vorbereitung ist Ernährung der zweitwichtigste Faktor für deinen erfolgreichen Ötztaler.
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
        question: `Wann findet der Ötztaler Radmarathon ${currentYear} statt?`,
        answer: (
          <div className="space-y-2">
            <p>
              Der Ötztaler findet traditionell am letzten Sonntag im August statt. Für die exakten Zeiten
              (Start, Cut-offs, Ausgabe Startunterlagen) solltest du dich auf der Webseite des Veranstalters informieren:
            </p>
            <a href="https://www.soelden.com/de/veranstaltungen-freizeittipps/events/oetztaler-radmarathon" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline inline-flex items-center gap-1">
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
          "Der Ötztaler Radmarathon findet traditionell am letzten Sonntag im August statt. Verbindliche Details (Startzeiten, Cut-offs, Startunterlagen) stehen auf der offiziellen Veranstalterseite bzw. in der Ausschreibung.",
      },
      {
        key: "trainingdauer",
        question: "Wie lange sollte man für den Ötztaler trainieren (Vorbereitung in Wochen)?",
        answer: (
          <div className="space-y-2">
            <p>
              Je nach Ausgangsniveau sind 4-5 Monate strukturierte Vorbereitung sinnvoll. Dennoch sollte davor bereits ein gutes
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
          "Je nach Ausgangsniveau sind etwa 4–5 Monate (ca. 16–24 Wochen) strukturierte Vorbereitung sinnvoll, idealerweise auf Basis eines vorhandenen Grundniveaus. Der wichtigste Faktor ist Konstanz: lieber früh beginnen und regelmäßig trainieren statt kurzfristiges „Paniktraining“.",
      },
      {
        key: "uebersetzung",
        question: "Welche Übersetzung/Kassette ist für den Ötztaler empfehlenswert?",
        answer: (
          <div className="space-y-2">
            <p>
              Die passende Übersetzung ist von deinem Gewicht und deiner Leistungsfähigkeit abhängig
            </p>
            <p>
              Für viele Fahrer ist ein Setup mit 50/34 oder 52/36 vorne und einer großen Kassette mit 11-32, 11-34 oder 11-36 hinten sinnvoll, damit die langen Anstiege auch bei Ermüdung kontrolliert fahrbar bleiben.
              Um deine individuelle optimale Übersetzung zu finden, kannst du meinen Übersetzungsrechner nutzen. Für den Ötztaler empfehle ich eine Steigung von 10% einzugeben,
              da das am Kühtai und Timmelsjoch den steilsten Abschnitten entspricht.
              Hier findest du den Übersetzungsrechner:
            </p>
            <a href="/tools/uebersetzungsrechner" target="_blank" className="text-primary hover:underline inline-flex items-center gap-1">
              Zum Übersetzungsrechner <ExternalLink className="w-4 h-4" />
            </a>
          </div>
        ),
        answerText:
          "Die passende Übersetzung hängt von Gewicht, Leistungsfähigkeit und bevorzugter Trittfrequenz ab. Für viele ist ein Setup mit 50/34 oder 52/36 vorne und 11-32, 11-34 oder 11-36 hinten sinnvoll, damit die langen Anstiege auch ermüdet kontrolliert fahrbar bleiben. Individuelle Empfehlungen liefert der <a href=\"https://maxcyclescoaching.de/tools/uebersetzungsrechner\" target=\"_blank\">Übersetzungsrechner</a>.",
      },
    ],
    [currentYear]
  );

  /* ================= SEO Structured Data ================= */

  const structuredData = useMemo(() => ({
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": `Ötztaler Radmarathon ${currentYear} – Strecke, Pacing-Strategien & Training-Tipps`,
    "description": "Analyse der Strecke des Ötztaler Radmarathons mit Pacing-Tipps, Leistungsanforderungen und Trainingsstrategien.",
    "datePublished": publicationDate,
    "author": {
      "@type": "Person",
      "name": "Maximilian Lohr"
    },
    "publisher": {
      "@type": "Organization",
      "name": "MaxCyclesCoaching"
    }
  }), [currentYear, publicationDate]);

  const faqStructuredData = useMemo(
    () => ({
      "@context": "https://schema.org",
      "@type": "FAQPage",
      "mainEntity": faqItems.map((item) => ({
        "@type": "Question",
        "name": item.question,
        "acceptedAnswer": {
          "@type": "Answer",
          "text": item.answerText,
        },
      })),
    }),
    [faqItems]
  );

  return (
    <div className="min-h-screen bg-white flex flex-col">
      <Helmet>
        <title>{`Ötztaler Radmarathon ${currentYear} | Strecke, Pacing & Trainingstipps`}</title>
        <meta
          name="description"
          content={`Ötztaler Radmarathon: Ötztaler Radmarathon ${currentYear}: Streckenanalyse, Watt-Zielwerte, Sub-10, Sub-9, Sub-8 Strategien & Trainingstipps. So bereitest du dich optimal auf 227 km und 5.500 hm vor.`}
        />
        <link rel="canonical" href={canonicalUrl} />
        <meta property="og:title" content={`Ötztaler Radmarathon ${currentYear} | Strecke, Pacing & Trainingstipps`} />
        <meta
          property="og:description"
          content="Alles über Streckenprofil, Leistungsanforderungen und Renntaktik für dein erfolgreiches Finish beim Ötztaler."
        />
        <meta property="og:url" content={canonicalUrl} />
        <meta property="og:type" content="article" />
        <meta name="twitter:card" content="summary_large_image" />
        <script type="application/ld+json">{JSON.stringify(structuredData)}</script>
        <script type="application/ld+json">{JSON.stringify(faqStructuredData)}</script>
      </Helmet>

      <Navbar />

      <main className="flex-grow">

        {/* ================= HERO ================= */}

        <section className="relative h-[60vh] sm:h-[70vh] bg-primary">
          <div className="absolute inset-0">
            <img
              src="/images/oetztaler_rm_2025.jpg"
              alt="Ötztaler Radmarathon - Atmosphäre und Start 2025"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-primary/40" />
            <span className="absolute bottom-2 right-3 flex items-center gap-1 text-white/80 text-[10px] sm:text-xs drop-shadow-md z-10">
              <Copyright className="w-3 h-3 sm:w-3.5 sm:h-3.5" /> Ötztal Tourismus, Fotograf Jürgen Skarwan
            </span>
          </div>

          <div className="relative h-full flex items-center justify-center text-center text-white px-4 sm:px-6">
            <div>
              <h1 className="text-2xl sm:text-4xl md:text-6xl font-bold mb-4 sm:mb-6 leading-tight">
                Ötztaler Radmarathon {currentYear} – Strecke, Pacing-Strategien & Training-Tipps
              </h1>

              <p className="text-base sm:text-xl max-w-3xl mx-auto">
                Alles über Streckenprofil, Leistungsanforderungen und Renntaktik für dein erfolgreiches Finish beim Ötztaler.
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
            Der Ötztaler Radmarathon gilt als einer der härtesten Jedermann-Radmarathons Europas. 
            Mit 227 Kilometern und über 5.500 Höhenmetern verlangt das Rennen nicht nur enorme Ausdauer,
            sondern vor allem eine intelligente Pacing-Strategie und strukturierte Vorbereitung. <br/>
            Als Coach gibt es kaum ein Rennen, das ich so häufig in der Vorbereitung meiner Athletinnen und Athleten als Zielwettkampf habe, wie den Ötztaler.
            Daher möchte ich dir im Folgenden meine gesammelten Erfahrungen über die Strecke, Training, Pacing und Vorbereitung für deinen erfolgreichen Ötztaler {currentYear} weitergeben.
          </p>
        </section>


        {/* ================= STRECKE ================= */}

        <section id="strecke" className="py-12 sm:py-20 bg-accent">
          <div className="max-w-5xl mx-auto px-4">

            <h2 className="text-2xl sm:text-3xl font-bold text-primary mb-6 sm:mb-10 text-center">
              Ötztaler Radmarathon Strecke – Profil, Pässe & Höhenmeter
            </h2>

            <div className="mb-8 sm:mb-12">
              <img 
                src="/images/oetztaler_elevation_profile.png" 
                alt="Höhenprofil Ötztaler Radmarathon - Kühtai, Brenner, Jaufenpass, Timmelsjoch" 
                className="w-full h-auto rounded-lg shadow-lg bg-black p-1 sm:p-10"
              />
              <p className="text-center text-sm text-gray-500 mt-2">
                Das offizielle Höhenprofil: 227km und 5500hm mit vier bekannten Alpenpässen.
              </p>
            </div>

            <div className="space-y-6 sm:space-y-8 text-gray-700">

              <div className="space-y-2">
                <div className="flex items-center gap-3 sm:gap-4">
                  <Route className="w-6 h-6 sm:w-8 sm:h-8 text-secondary shrink-0" />
                  <h3 className="font-semibold text-lg sm:text-xl m-0">Teil 1: Sölden bis Oetz</h3>
                </div>
                <p>
                  Nach dem Start geht es zunächst ca. 31km weitestgehend bergab bis nach Oetz, wo später der 
                  erste Anstieg zum Kühtai beginnt. Hier ist es wichtig, Energie für die folgenden Anstiege zu sparen.
                  Daher sollte man möglichst viel in der Gruppe im Windschatten fahren und die Durchschnittsleistung
                  möglichst niedrig halten, auch Antritte über der Schwelle (FTP) sollten vermieden werden.
                  Auch sollte man hier schon beginnen sich für die kommenden Kilometer zu verpflegen.
                </p>
              </div>


              <div className="space-y-2">
                <div className="flex items-center gap-3 sm:gap-4">
                  <Mountain className="w-6 h-6 sm:w-8 sm:h-8 text-secondary shrink-0" />
                  <h3 className="font-semibold text-lg sm:text-xl m-0">Teil 2: Kühtai</h3>
                </div>
                <p>
                  Das Kühtai ist der erste von vier Anstiegen und mit 17,5km Länge und durchschnittlich ca. 7% Steigung ein erster Test, wie sich die Beine heute anfühlen.
                  Der Anstieg lässt sich dabei in drei Abschnitte unterteilen: Der erste 8km lange Teil bis kurz vor Ochsengarten hat ca. 8,3% Durchschnittssteigung. 
                  Danach folgen ca. 3 flacherer Kilometer mit ca. 4,1% Steigung im Schnitt. 
                  Die letzten 6,5km sind ungleichmäßiger als der erste Teil und haben im Schnitt ca. 6,4% Steigung, wobei es hier anfangs auch einige steile Abschnitte mit bis zu 15% Steigung gibt.
                </p>
              </div>

              <div className="space-y-2">
                <div className="flex items-center gap-3 sm:gap-4">
                  <TrendingDown className="w-6 h-6 sm:w-8 sm:h-8 text-secondary shrink-0" />
                  <h3 className="font-semibold text-lg sm:text-xl m-0">Teil 3: Abfahrt vom Kühtai nach Kematen</h3>
                </div>
                <p>
                  Die Abfahrt vom Kühtai ist technisch wenig anspruchsvoll und verläuft größtenteils gerade ohne enge Kurven. Deswegen werden hier oft auch extrem hohe 
                  Geschwindigkeiten von über 100km/h erreicht. In der Abfahrt sollte man eine möglichst aerodynamische Position einnehmen, um Energie zu sparen.
                </p>
              </div>

              <div className="space-y-2">
                <div className="flex items-center gap-3 sm:gap-4">
                  <Mountain className="w-6 h-6 sm:w-8 sm:h-8 text-secondary shrink-0" />
                  <h3 className="font-semibold text-lg sm:text-xl m-0">Teil 4: Brennerpass</h3>
                </div>
                <p>
                  Der längste, aber moderateste Anstieg mit über 35km Länge und ca. 2% Steigung. Hier entscheidet die Gruppe, wie schnell man fährt.
                  Je nach Gruppengröße empfiehlt es sich hier möglichst viel Windschatten zu fahren. Auch ist hier wieder genug Zeit zum Verpflegen.
                  Im oberen Teil des Brenners gibt es einige kurze, aber steile Rampen. Hier sollte man möglichst wenig über der Schwelle fahren und nur so wenig Leistung aufbringen, wie nötig, um die Gruppe nicht zu verlieren. 
                  Es ist wichtig, hier nicht zu überziehen.
                </p>
              </div>

              <div className="space-y-2">
                <div className="flex items-center gap-3 sm:gap-4">
                  <Route className="w-6 h-6 sm:w-8 sm:h-8 text-secondary shrink-0" />
                  <h3 className="font-semibold text-lg sm:text-xl m-0">Teil 5: Brenner bis Sterzing</h3>
                </div>
                <p>
                  Die Abfahrt vom Brenner ist ähnlich wie die Auffahrt recht flach. Hier ist es wieder wichtig in der Gruppe zu bleiben und möglichst viel Windschatten zu fahren.
                </p>
              </div>

              <div className="space-y-2">
                <div className="flex items-center gap-3 sm:gap-4">
                  <Mountain className="w-6 h-6 sm:w-8 sm:h-8 text-secondary shrink-0" />
                  <h3 className="font-semibold text-lg sm:text-xl m-0">Teil 6: Jaufenpass</h3>
                </div>
                <p>
                  Der Hauptteil des Jaufenpass ist ca. 15km lang und hat konstante 7,5% Steigung. Hier entscheidet sich, ob man seine Zielzeit erreichen kann oder nicht. 
                  Auch zeigt sich, wie gut die Verpflegung und die Pacing-Strategie bisher funktioniert haben. 
                  Auch wenn der Anstieg alleine schon Herausforderung genug ist, sollte man hier noch Energie für das kommende Timmelsjoch sparen. Dieses ist nämlich fast doppelt so lang.
                </p>
              </div>

              <div className="space-y-2">
                <div className="flex items-center gap-3 sm:gap-4">
                  <TrendingDown className="w-6 h-6 sm:w-8 sm:h-8 text-secondary shrink-0" />
                  <h3 className="font-semibold text-lg sm:text-xl m-0">Teil 7: Abfahrt vom Jaufenpass nach St. Leonhard</h3>
                </div>
                <p>
                  Die Abfahrt vom Jaufenpass ist technisch anspruchsvoll mit vielen engen Kurven. Hier kann man gute Fahrtechnik beweisen und Zeit gut machen.
                  Man sollte jedoch nicht vergessen, dass man schon viel geleistet hat und entsprechend müde ist. Daher ist Vorsicht geboten, um nicht zu stürzen oder sich zu verletzen.
                  Auch muss man hier nochmal Verpflegung zu sich nehmen, um die Energiespeicher für die letzten harten Kilometer aufzufüllen.
                </p>
              </div>

              <div className="space-y-2">
                <div className="flex items-center gap-3 sm:gap-4">
                  <Mountain className="w-6 h-6 sm:w-8 sm:h-8 text-secondary shrink-0" />
                  <h3 className="font-semibold text-lg sm:text-xl m-0">Teil 8: Timmelsjoch</h3>
                </div>
                <p>
                  Auf die Abfahrt nach St. Leonhard folgt direkt der finale und zeitmäßig längste Anstieg des Ötztalers. Er entscheidet über Zielzeit und Rennerfolg.
                  Insgesamt ist er ca. 29km lang und hat ca. 6,2% Durchschnittssteigung. Auch hier gibt es im mittleren Teil des Anstiegs ein ca. 4km langes Flachstück mit unter 2% Steigung.
                  Danach folgen die letzten knapp 10km mit 7,5% Steigung im Schnitt. Hier wird jeder leiden. Hinzu kommt noch die Höhe von bis zu 2474m. Damit ist das Timmelsjoch auch der
                  höchste Anstieg des Rennens. Auf über 2000m Höhe sinkt die Sauerstoffsättigung im Blut deutlich, wodurch man ca. 8% Leistungsverlust einrechnen muss.
                </p>
              </div>

              <div className="space-y-2">
                <div className="flex items-center gap-3 sm:gap-4">
                  <TrendingDown className="w-6 h-6 sm:w-8 sm:h-8 text-secondary shrink-0" />
                  <h3 className="font-semibold text-lg sm:text-xl m-0">Teil 9: Spitze Timmelsjoch bis Sölden</h3>
                </div>
                <p>
                  Der letzte Abschnitt des Ötztalers ist eine 20km lange Abfahrt zurück nach Sölden. Jetzt heißt es nur noch die bisherige Leistung nach Hause zu bringen.
                  Die Abfahrt ist gerade im oberen Teil anspruchsvoll und ohne Schutzplanken an den Seiten der Straße sollte man hier besonders aufmerksam fahren.
                  Zudem gibt es in der Abfahrt nochmal eine kleine ca. 1km lange Gegenrampe, wo man seine letzten Kräfte nochmal mobilisieren kann.
                  Gegen Ende der Abfahrt wird die Strecke nochmal flacher und man sollte hier nochmal eine aerodynamische Position einnehmen und die letzten Energiereserven ausschöpfen.
                  Im besten Fall fährt man nicht ganz alleine.
                </p>
              </div>

            </div>
          </div>
        </section>


        {/* ================= PACING ================= */}

        <section id="pacing" className="py-12 sm:py-20">
          <div className="max-w-4xl mx-auto px-4">

            <h2 className="text-2xl sm:text-3xl font-bold text-primary mb-6 sm:mb-10 text-center">
              Optimale Pacing-Strategie für den Ötztaler Radmarathon
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
                          <TableCell className="px-1 sm:px-4">12h – 14h <span className="hidden sm:inline">(Zeitlimit)</span></TableCell>
                        </TableRow>
                        <TableRow>
                          <TableCell className="font-medium px-1 sm:px-4">3 – 3,5 W/kg</TableCell>
                          <TableCell className="px-1 sm:px-4">2,2 – 2,5 W/kg</TableCell>
                          <TableCell className="px-1 sm:px-4">Sub-12 Stunden</TableCell>
                        </TableRow>
                        <TableRow>
                          <TableCell className="font-medium px-1 sm:px-4">3,5 – 4 W/kg</TableCell>
                          <TableCell className="px-1 sm:px-4">2,5 – 2,9 W/kg</TableCell>
                          <TableCell className="px-1 sm:px-4">Sub-10 Stunden</TableCell>
                        </TableRow>
                        <TableRow>
                          <TableCell className="font-medium px-1 sm:px-4">4 – 4,5 W/kg</TableCell>
                          <TableCell className="px-1 sm:px-4">2,9 – 3,3 W/kg</TableCell>
                          <TableCell className="px-1 sm:px-4">Sub-9 Stunden</TableCell>
                        </TableRow>
                        <TableRow>
                          <TableCell className="font-medium px-1 sm:px-4">4,5 – 5 W/kg</TableCell>
                          <TableCell className="px-1 sm:px-4">3,3 – 3,6 W/kg</TableCell>
                          <TableCell className="px-1 sm:px-4">Sub-8 Stunden</TableCell>
                        </TableRow>
                        <TableRow>
                          <TableCell className="font-medium px-1 sm:px-4">5 – 5,5 W/kg</TableCell>
                          <TableCell className="px-1 sm:px-4">3,6 – 4 W/kg</TableCell>
                          <TableCell className="px-1 sm:px-4">unter 7h30</TableCell>
                        </TableRow>
                      </TableBody>
                    </Table>
                  </div>
              </div>  

              <div className="space-y-2">
                <div className="flex items-center gap-3 sm:gap-4">
                  <Gauge className="w-6 h-6 sm:w-8 sm:h-8 text-secondary shrink-0" />
                  <h3 className="font-semibold text-lg sm:text-xl m-0">
                    Warum ist Pacing so wichtig für den Ötztaler?
                  </h3>
                </div>
                <p>
                  Der Ötztaler Radmarathon ist mit ca. 10 Stunden durchschnittlicher Dauer eines der längsten Radmarathons Europas.
                  Dementsprechend ist es besonders wichtig, eine konkrete Pacing-Strategie zu verfolgen. Ansonsten droht ein Einbruch in der zweiten Rennhälfte,
                  wodurch das Rennen weniger Spaß macht und die Zielzeit deutlich schlechter ausfällt als geplant. 
                </p>
              </div>

              <div className="space-y-2">
                <div className="flex items-center gap-3 sm:gap-4">
                  <Target className="w-6 h-6 sm:w-8 sm:h-8 text-secondary shrink-0" />
                  <h3 className="font-semibold text-lg sm:text-xl m-0">
                    Leistungsanforderungen der vier Alpenpässe des Ötztalers
                  </h3>
                </div>
                <Card className="mt-4">
                    <CardHeader>
                      <CardTitle className="text-lg sm:text-xl">Richtwerte für die 4 Schlüsselabschnitte</CardTitle>
                      <CardDescription>
                        Die meisten Fahrer bewegen sich insgesamt bei einem Intensitätsfaktor (IF) von ca. 0,7 – 0,8, also 70-80% der Schwellenleistung stehen am Ende als normalisierte Leistung da.
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
                              <TableCell className="font-medium px-1 sm:px-4">Kühtai</TableCell>
                              <TableCell className="px-1 sm:px-4">17,5 km</TableCell>
                              <TableCell className="px-1 sm:px-4">~7%</TableCell>
                              <TableCell className="px-1 sm:px-4">78–85%</TableCell>
                              <TableCell className="px-1 sm:px-4">~1h 20m</TableCell>
                            </TableRow>
                            <TableRow>
                              <TableCell className="font-medium px-1 sm:px-4">Brenner</TableCell>
                              <TableCell className="px-1 sm:px-4">35 km</TableCell>
                              <TableCell className="px-1 sm:px-4">~2%</TableCell>
                              <TableCell className="px-1 sm:px-4">65–75%</TableCell>
                              <TableCell className="px-1 sm:px-4">~1h 25m</TableCell>
                            </TableRow>
                            <TableRow>
                              <TableCell className="font-medium px-1 sm:px-4">Jaufen</TableCell>
                              <TableCell className="px-1 sm:px-4">15 km</TableCell>
                              <TableCell className="px-1 sm:px-4">~7,5%</TableCell>
                              <TableCell className="px-1 sm:px-4">78–85%</TableCell>
                              <TableCell className="px-1 sm:px-4">~1h 10m</TableCell>
                            </TableRow>
                            <TableRow>
                              <TableCell className="font-medium px-1 sm:px-4">
                                <span className="sm:hidden">Timmelsj.</span>
                                <span className="hidden sm:inline">Timmelsjoch</span>
                              </TableCell>
                              <TableCell className="px-1 sm:px-4">29 km</TableCell>
                              <TableCell className="px-1 sm:px-4">~6,2%</TableCell>
                              <TableCell className="px-1 sm:px-4">70–78%</TableCell>
                              <TableCell className="px-1 sm:px-4">~2h 5m</TableCell>
                            </TableRow>
                          </TableBody>
                        </Table>
                      </div>

                      <Alert>
                        <AlertTitle>Hinweise</AlertTitle>
                        <AlertDescription>
                          <p>
                            *Fahrer mit niedrigerer Leistungsfähigkeit sollten sich tendenziell eher an den unteren Werten orientieren, da
                            sie die Intensität länger halten müssen. Sehr leistungsfähige Fahrer können je nach Tagesform
                            etwas höher ansetzen.
                          </p>
                          <p className="mt-2">
                            Am Kühtai, Jaufenpass und Timmelsjoch kann der erste Teil oft ca. 5% intensiver gefahren werden als
                            der zweite Teil, da dieser in der Höhe liegt – trotzdem: gleichmäßig bleiben schlägt „zu hart starten“.
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
                    deinen Ötztaler zu berechnen. Wichtig: Die Strategie muss im Training erprobt werden.
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
              Trainingsplanung & Vorbereitung für den Ötztaler Radmarathon
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
                    Der Ötztaler findet jedes Jahr am letzten Sonntag im August statt. Eine gute Saisonplanung hilft dir,
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
                    Für den Ötztaler sind vor allem VO2max, FTP, VLAmax und Ermüdungsresistenz (Fatigue Resistance)
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
                        Schwelle: ca. 1h-Leistung – zentral für die langen Alpenanstiege.
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
                      Der Ötztaler ist ein langes Rennen – lange Einheiten sind daher Pflicht. In der akuten
                      Vorbereitungsphase (ca. 2 – 3 Monate vorher) sind mindestens alle 2 Wochen 4 – 8h sinnvoll.
                      Starte sehr locker (ca. 50 – 65% FTP) und steigere die Dauer schrittweise.
                      Für fortgeschrittene Fahrer können hier auch Intervalle unterhalb der FTP (z.B. 4x45min Renntempo) eingebaut werden.
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
                      <li>Wenn es zu Problemen kommt: reduzieren und Verpflegungsstrategie fürs Rennen entsprechend anpassen</li>
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
              FAQ: Ötztaler Radmarathon – häufige Fragen
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
              Individuelle Vorbereitung - Coaching für den Ötztaler Radmarathon
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

      <SiteFooter showEmail />

    </div>
  );
};

export default OetztalerBlog;
