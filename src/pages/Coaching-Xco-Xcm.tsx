import { Mountain } from "lucide-react";
import { CoachingCyclingCategory, type CategoryPageConfig } from "@/pages/CoachingCyclingCategory";

const config: CategoryPageConfig = {
  eyebrow: "Individuelles 1:1 Coaching für XCO und XCM Rennen",
  title: "Cross Country Mountainbike Coaching",
  description: "Cross Country Rennen werden im aktuellen Radsport oft übersehen. Dabei ist XC eine der anspruchsvollsten Radsport-Disziplinen. Hochintensive, wiederkehrende Belastungen in Verbindung mit technisch anspruchsvollen Strecken sorgen für besondere Anforderungen ans Training. Du willst dich auf deine nächste XC-Saison strukturiert vorbereiten? Dann unterstütze ich dich gerne mit meinem Coaching-Angebot. In der Vergangenheit durfte ich bereits einige Mountainbiker betreuen und verstehe daher genau, was in der Vorbereitung wichtig ist.",
  audience: [
    "Ambitionierte MTB-Fahrer*innen mit einer anspruchsvollen Rennsaison",
    "Sportler*innen, die sich strukturiert auf XC-Wettkämpfe vorbereiten möchten",
    "MTB-Einsteiger*innen mit konkretem Wettkampfziel",
    "Athlet*innen, die mehrere Rennformate (z.B. Gravel & XC) kombinieren möchten",
  ],
  focus: [
    { title: "XCO: Repetitive, hochintensive Belastung", text: "Bereits zum Start wird das erste Mal hart in die Pedale getreten. Im weiteren Verlauf sorgen knackige Anstiege und technische Passagen für Belastungsspitzen. Im Training setzen wir daher vermehrt auf intermittierende Belastungen wie 30/30 oder 40/20 Intervalle, um Leistungsspitzen sowie die Erholung davon zu tranieren." },
    { title: "XCM: Hohe Leistungen über längere Zeiträume", text: "Da Windschatten weniger Einfluss als in anderen Disziplinen hat muss hier oft Solo eine hohe Durchschnittsleistung und hohe Normalisierte Leistung über die Wettkampfdauer erbracht werden. Kontrolliertes Training im Sweetspot- und Schwellenbereich hilft dabei dieses Belastungsprofil vorzubereiten." },
    { title: "Technische Komponente nicht vernachlässigen", text: "Wenn das Training rein auf die Physiologie optimiert wird geht Techniktraining schnell unter. Dabei ist saubere Fahrtechnik nach hochintensiver Belastung deutlich anspruchsvoller als im ausgeruhten Zustand. Wir integrieren daher bewusst technische Passagen in normale Trainingseinheiten." },
  ],
  raceFocus: [
    { title: "Renneinteilung und Taktik", text: "Um das Maximum aus deiner Leistungsfähigkeit herauszuholen ist gerade im XCO die richtige Taktik entscheidend. Wir besprechen daher deine Rennen vor und nach, damit wir Fehler identifizieren und Verbesserungen umsetzen können." },
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
