import { Mountain } from "lucide-react";
import { CoachingCyclingCategory, type CategoryPageConfig } from "@/pages/CoachingCyclingCategory";

const config: CategoryPageConfig = {
  eyebrow: "Cross-Country-MTB-Coaching",
  title: "Cross Country Mountainbike: XCO & XCM",
  description: "[Hier deine Erfahrung im Cross-Country-MTB, die betreuten Rennformate und die Verbindung aus Ausdauer, Leistung und Technik beschreiben.]",
  audience: [
    "XCO-Fahrer*innen mit kurzen, intensiven Rennformaten",
    "XCM-Fahrer*innen mit langen Distanzen und Höhenmetern",
    "MTB-Einsteiger*innen mit konkretem Wettkampfziel",
    "Athlet*innen, die Radtraining und Technikentwicklung verbinden möchten",
  ],
  focus: [
    { title: "XCO: Intensität und Technik", text: "[Beschreibe Starts, kurze Anstiege, technische Passagen, wiederholte Spitzen und Fahrtechnik.]" },
    { title: "XCM: Ausdauer und Pacing", text: "[Ergänze deinen Ansatz für lange Distanzen, Höhenmeter, Ernährung und Ermüdungsmanagement.]" },
    { title: "Training und Strecke verbinden", text: "[Beschreibe Streckenanalyse, spezifische Einheiten, Material und die Rolle von Techniktraining.]" },
  ],
  raceFocus: [
    { title: "Renneinteilung und Linienwahl", text: "[Beschreibe, wie du Start, technische Passagen, Anstiege und die Kräfteverteilung im Rennen vorbereitest.]" },
    { title: "Verpflegung und Material", text: "[Ergänze deine Empfehlungen für Energieversorgung, Trinkstrategie, Reifen, Luftdruck und Ersatzmaterial.]" },
    { title: "Bedingungen und Technik", text: "[Beschreibe den Einfluss von Wetter, Untergrund, Strecke und technischer Sicherheit auf die Wettkampfstrategie.]" },
  ],
  faqs: [
    { question: "Was ist der Unterschied zwischen XCO- und XCM-Coaching?", answer: "[Hier die unterschiedlichen Belastungsprofile und Trainingsschwerpunkte verständlich erklären.]" },
    { question: "Kann das Training auch ohne tägliche Trail-Nutzung funktionieren?", answer: "[Hier beschreiben, welche Inhalte auf Straße, Rolle oder Standardstrecken trainierbar sind.]" },
    { question: "Wie viel Techniktraining ist im Coaching enthalten?", answer: "[Hier deinen konkreten Leistungsumfang und mögliche Grenzen des Online-Coachings erläutern.]" },
    { question: "Wie trainiere ich für ein XCO-Rennen?", answer: "[Hier die wichtigsten Trainingsinhalte für kurze, intensive Cross-Country-Rennen und wiederholte Belastungsspitzen ergänzen.]" },
    { question: "Wie bereite ich mich auf ein XCM-Rennen vor?", answer: "[Hier Empfehlungen zu Ausdauer, Höhenmetern, Pacing, Verpflegung und Renndauer eintragen.]" },
    { question: "Wie wichtig ist Fahrtechnik für Cross Country Mountainbike?", answer: "[Hier erklären, welche technischen Fähigkeiten für XCO oder XCM relevant sind und wie sie trainiert werden können.]" },
    { question: "Wie oft sollte ich pro Woche auf dem Mountainbike trainieren?", answer: "[Hier eine differenzierte Antwort abhängig von Ziel, Ausgangsniveau, Trainingszeit und technischem Schwerpunkt ergänzen.]" },
  ],
  icon: Mountain,
};

const CoachingXcoXcm = () => <CoachingCyclingCategory config={config} />;

export default CoachingXcoXcm;
