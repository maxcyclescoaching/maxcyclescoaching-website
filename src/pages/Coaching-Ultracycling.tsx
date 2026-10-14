import { Waypoints } from "lucide-react";
import { CoachingCyclingCategory, type CategoryPageConfig } from "@/pages/CoachingCyclingCategory";

const config: CategoryPageConfig = {
  eyebrow: "Individuelles 1:1 Coaching für Langstrecken- und Ultra-Radsport Events",
  title: "Ultracycling-Coaching",
  description: "Egal ob Race Around Austria, Transcontinental Race, Race Across Germany oder die Mountain Races - eins haben sie gemeinsam: Sie sind lang. Sehr lang. \n Wenn du also auf der Suche nach individuellem Coaching mit strukturiertem Training und erfahrungsbasierten Hinweisen zu Verpflegung und Pacing bist, hast du die richtige Seite gefunden. \n Ob mehrere hundert oder mehrere tausend Kilometer - dank eigener Ultra-Erfahrung und Erfahrung im Coaching mehrerer Ultra-Athleten kann ich dich bei der Vorbereitung auf dein nächstes Event bestens unterstützen.",
  audience: [
    "Athlet*innen vor ihrem ersten Ultra-Event",
    "Erfahrene Ultra-Fahrer*innen mit einem konkreten Ziel",
    "Sportler*innen mit supported oder unsupported Ultras als Saisonziele",
    "Fahrer*innen, die ihr nächstes Ultra mit mehr Struktur angehen wollen",
  ],
  focus: [
    { title: "Niedrigintensive Belastung vorbereiten", text: "Ultras sind lang, finden deswegen aber im niedrigintensiven Bereich. Die Grundlagenleistung ist also entscheidend, um in deiner Zielzeit zu finishen. Wir achten im Training daher besonders auf Gesamtvolumen und kontrollierte Einheiten in Zone 2 (Grundlagenausdauer)." },
    { title: "Lange Trainingseinheiten", text: "Du musst beim Ultra nicht nur lange treten, sondern auch lange auf dem Rad sitzen. Daher integrieren wir in der akuten Vorbereitung lange Simulationseinheiten, in denen Setup, Verpflegung und Pacing geübt werden. Zudem wird durch den hohen Energieumsatz ein wertvoller Trainingsreiz gesetzt." },
    { title: "Hohe Intensitäten nicht vernachlässigen", text: "Ultra-Fahrer vergessen oft, Belastungen an oder oberhalb der Schwellenleistung (FTP) ins Trainings einzubauen. Dabei sind diese wichtig für die Anhebung der Gesamtleistungsfähigkeit. Daher setzen wir in der Vorbereitung auch auf VO2max- und Schwellenintervalle." },
  ],
  raceFocus: [
    { title: "Ernährung und Energieversorgung", text: "Das Energiedefizit zu minimieren ist bei Ultra-Rennen entscheidend für deinen Erfolg. Wir besprechen im Vorhinein genau, wie viele Kalorien du auf und abseits des Rads essen musst und wie du diese über den Tag verteilt aufnehmen solltest. Vorher erarbeitete Strategien sorgen hier für Sicherheit im Rennen." },
    { title: "Schlafstrategie", text: "Wer wie lange schläft ist beim Ultracycling oft entscheidend für die Finish-Zeit und Ergebnisliste. Vor deinen Zielevents legen wir eine für dich individuell abgestimmte Schlaf- und Nap-Strategie fest. So kannst du im Rennen das Beste aus deiner Leistungsfähigkeit machen und musst dich nicht auf emotionale Affektentscheidung verlassen." },
    { title: "Mentale Stärke", text: "Die meisten Ultra-Fahrer haben die körperlichen Voraussetzungen zum Finishen. Oft entscheidet aber der Kopf, ob du tatsächlich wie erhofft ankommst. Gerne besprechen wir im Vorhinein, wie du mit Tiefs oder geringerer Motivation bei Nacht umgehst und ich gebe dir Tipps, wie du weiterführende mentale Unterstützung findest." },
  ],
  faqs: [
    { question: "Ist das Coaching in Vorbereitung auf mein erstes Ultracycling-Event geeignet?", answer: "Als Einsteiger*in im Ultracycling kann ich dir wertvolle persönliche und Coaching-Erfahrungen weitergeben. Du bist hier also gut aufgehoben." },
    { question: "Was beinhaltet dein Coaching für Ultra-Events?", answer: "Coaching bedeutet für mich nicht nur individuelle Trainingsplanung, sondern auch gemeinsame Analyse des Zielevent und langfristiges Arbeiten an Potenzialen wie Verpflegung, Pacing, Schlafstrategien und vielem mehr." },
    { question: "Unterstützt du auch bei Pacing, Schlaf- und Verpflegungsstrategie?", answer: "Ja, das ist ein wichtiger Teil des Coachings. Wir besprechen deine Events im Vorhinein detailliert durch und erarbeiten dabei auch Pacing-, Verpflegungs- und Schlafstrategien." },
    { question: "Wie lange sollte die Vorbereitung auf ein Ultracycling-Rennen dauern?", answer: "Wer länger als 12h am Stück Radfahren möchte sollte eine gute Grundlagenausdauer mitbringen. Bei vorhandener Grundfitness ist ein Aufbau für Einsteiger über 1-2 Saisons sinnvoll. Für bereits erfahrene Athleten ist eine Vorbereitungszeit von neun Monaten optimal. Am besten wir besprechen deine individuellen Voraussetzungen im unverbindlichen Erstgespräch und entscheiden dann gemeinsam was realistisch ist." },
    { question: "Welche Ausrüstung brauche ich für ein Ultracycling-Rennen?", answer: "Was genau du brauchst, hängt von deinem Event ab. Gerne besprechen wir in der konkreten Vorbereitung auf deine Events, was du noch optimieren kannst. Im unverbindlichen Erstgespräch können wir zudem darüber reden, ob dir noch essenzielles Equipment für deinen ersten Ultra fehlen sollte." },
  ],
  icon: Waypoints,
};

const CoachingUltracycling = () => <CoachingCyclingCategory config={config} />;

export default CoachingUltracycling;
