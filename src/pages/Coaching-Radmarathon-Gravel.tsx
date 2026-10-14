import { Bike } from "lucide-react";
import { CoachingCyclingCategory, type CategoryPageConfig } from "@/pages/CoachingCyclingCategory";

const config: CategoryPageConfig = {
  eyebrow: "Individuelles 1:1 Coaching & dynamischer Radmarathon oder Gravel Trainingsplan",
  title: "Radmarathon- und Gravel-Coaching",
  description: "Ötztaler Radmarathon, The Traka, L'Etape du Tour, Sea Otter und weitere Radmarathons sowie Gravel-Rennen erfreuen sich immer größerer Beliebtheit. Auf der Straße sowie Offroad sind hohe Leistungen über lange Zeit aufrechtzuerhalten. \n Ein vorgefertigter Radmarathon Trainingsplan von der Stange stößt bei anspruchsvollen Zielen schnell an Grenzen. Ganz egal, ob du persönliche Bestzeiten anstrebst, um die Podiumsplätzen mitfahren willst oder dein Ziel einfach ist die gewaltige Distanz zu bewältigen - hier bist du richtig. \nIch unterstütze dich mit spezifischen, auf deinen Alltag abgestimmten Trainingsplänen sowie Tipps zu Pacing, Verpflegung, Wettkampfstrategien.",
  audience: [
    "Athlet*innen mit einem konkreten Radmarathon-Ziel",
    "Gravel-Fahrer*innen mit geplanten Langstrecken-Events",
    "Einsteiger*innen sowie ambitionierte Amateurfahrer*innen",
    "Sportler*innen auf der Suche nach einem Rennrad Trainingsplan für Fortgeschrittene",
  ],
  focus: [
    { title: "Ermüdungsresistenz", text: "Entscheidend ist nicht nur deine frische Leistungsfähigkeit, sondern auch wie schnell du nach stundenlanger Vorermüdung noch fahren kannst. Deswegen schauen wir, dass wir über die Saison möglichst viele Trainingsstunden progressiv akkumulieren und spezifische lange Einheiten mit viel Energieumsatz in der Vorbereitung einbauen." },
    { title: "Schwellenleistung für lange konstante Belastungen", text: "Oft fährst du bei Radmarathons oder bergigen Gravel-Rennen Anstiege von 20-90 Minuten leicht unter deiner FTP. Daher setzen wir im Training oft auf kontrollierte extensive Einheiten in der Tempo-, Sweetspot- oder Schwellenzone, um deine FTP und die Erschöpfungszeit bei der Schwellenleistung zu erhöhen." },
    { title: "Rennspezifische Belastungen", text: "Gravel-Rennen und Radmarathons sind nicht nur lang, sondern bringen meist auch viel Zeit im Bereich der Zone 3 (Tempo) mit sich. Deshalb schauen wir uns im Vorhinein an, welche Belastungsintensität für wie lange zu erwarten ist und integrieren diese in der akuten Vorbereitung bewusst ins Training, damit du genau da effizienter wirst." },
  ],
  raceFocus: [
    { title: "Pacing", text: "Das korrekte Einschätzen der Leistungsfähigkeit im Vorhinein und das Ableiten eines passenden Pacingplans daraus sind entscheidend, um deine Leistung im Rennen optimal einzusetzen. Deswegen besprechen wir vor deinen Zielrennen genau, wie viele Watt du wann treten solltest, um damit möglichst schnell zu fahren und nicht einzubrechen." },
    { title: "Verpflegung", text: "Der Energiehaushalt ist der entscheidende Faktor bei langen Belastungen. Je mehr Energie du extern zuführen und aufnehmen kannst, desto mehr Leistung kannst du abrufen. Wir steigern im Training daher vorher die Kohlenhydratmenge kontrolliert und erstellen vor dem Wettkampf eine genaue Verpflegungsstrategie, wann du was aufnehmen solltest." },
    { title: "Strecke, Material und Fahrtechnik", text: "Kleine Details machen über lange Distanzen oft Minuten aus. Deswegen helfe ich dir, dein Equipment (Aerodynamik, Gewicht, Rollwiderstand) zu optimieren, erkläre dir wie du deine Fahrtechnik am besten üben kannst und zeige dir Wege deine Streckenkenntnisse zu verbessern." },
  ],
  faqs: [
    { 
      question: "Warum ist individuelles Coaching besser als ein statischer Radmarathon Trainingsplan?", 
      answer: "Ein statischer Radmarathon Trainingsplan weiß nicht, ob du krank warst, eine stressige Arbeitswoche hattest oder wie schnell du regenerierst. Bei mir erhältst du einen dynamischen Trainingsplan, der wöchentlich nachjustiert wird, damit du zum Saisonhöhepunkt in Bestform an der Startlinie stehst." 
    },
    { 
      question: "Eignet sich das Coaching als Rennrad Trainingsplan für Fortgeschrittene?", 
      answer: "Ja, absolut. Fortgeschrittene Athleten stagnieren oft mit generischen Plänen, weil die Reize nicht mehr spezifisch genug sind. Wir analysieren deine Leistungsdaten (Power-Duration-Curve, Schwellenleistung, VLamax) und setzen genau die Reize, die dich über dein bisheriges Plateau heben." 
    },
    {
      question: "Wie lange sollte ich mich auf einen Radmarathon vorbereiten?",
      answer: "Im Optimalfall erfolgt die Vorbereitung über die gesamte Saison (ab November bzw. neun Monate vor Start), wenn du schon Erfahrungen im Ausdauersport hast. Kürzere Zeiträume sind auch möglich, aber mehr strukturierte Trainingszeit ist immer von Vorteil." 
    },
    {
      question: "Ist das Coaching auch für Gravel-Rennen geeignet?",
      answer: (
        <>
          Radmarathons und Gravel-Rennen haben oft eine Belastungsdauer von 3 bis 12 Stunden.
          Die physiologischen Anforderungen dafür sind ähnlich. Deswegen ist mein Coaching für
          beides bestens geeignet. Solltest du Interesse an Gravel-Ultracycling oder
          Straßenrennen über 300 km haben, findest du mehr Infos auf der{" "}
          <a
            href="/coaching/radsport/ultracycling"
            className="text-primary underline hover:no-underline"
          >
            Ultracycling-Seite
          </a>.
        </>
      ),
      answerText:
        "Radmarathons und Gravel-Rennen haben oft eine Belastungsdauer von 3 bis 12 Stunden. Die physiologischen Anforderungen dafür sind ähnlich. Deswegen ist mein Coaching für beides bestens geeignet. Solltest du Interesse an Gravel-Ultracycling oder Straßenrennen über 300 km haben, findest du mehr Infos auf der Ultracycling-Seite.",
    },
    { 
      question: "Wie wird das Training in meinen Alltag integriert?", 
      answer: "Wir planen nicht deinen Alltag um das Training herum, sondern besprechen gemeinsam, wann es zeitlich und von der Gesamtbelastung am Sinnvollsten ist zu trainieren. Zudem passe ich dir gerne bei kurzfristigen Änderungen das Training an." 
    },
    { 
      question: "Wie viele Stunden pro Woche muss ich für einen Radmarathon trainieren?", 
      answer: "Das hängt stark von deiner Vorerfahrung und deinen Ansprüchen an dich selbst ab. Individuelles Coaching macht ab 5 Trainingsstunden pro Woche Sinn. Die Erwartungen müssen aber immer dem Trainingsvolumen entsprechen. Gerne besprechen wir im unverbindlichen Erstgespräch, ob deine Erwartungen realistisch sind." 
    },
    { 
      question: "Was ist beim Training für Gravel-Rennen anders als beim Straßen-Radmarathon?", 
      answer: "Der Hauptunterschied liegt neben der Radwahl im Belastungsprofil. Radmarathons haben oft mehrere Anstiege gefolgt von Abfahrten und Flachpassagen. Bei Gravel-Rennen wird die Leistung meist gleichmäßiger über das Event abgerufen. Die spezifischen Anforderungen bestimmen die Trainingsinhalte." 
    },
  ],
  icon: Bike,
};

const CoachingRadmarathonGravel = () => <CoachingCyclingCategory config={config} />;

export default CoachingRadmarathonGravel;
