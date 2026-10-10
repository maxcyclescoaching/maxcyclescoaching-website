import { Mountain } from "lucide-react";
import { CoachingCyclingCategory, type CategoryPageConfig } from "@/pages/CoachingCyclingCategory";

const config: CategoryPageConfig = {
  eyebrow: "Individuelles 1:1 Coaching für XCO und XCM Rennen",
  title: "XCO- und XCM-Coaching für Cross-Country-Mountainbike",
  description: "Cross Country Rennen werden im aktuellen Radsport oft übersehen. Dabei ist XC eine der anspruchsvollsten Radsport-Disziplinen. Hochintensive, wiederkehrende Belastungen in Verbindung mit technisch anspruchsvollen Strecken sorgen für besondere Anforderungen ans Training. \n Du willst dich auf deine nächste XC-Saison strukturiert vorbereiten? Dann unterstütze ich dich gerne mit meinem Coaching-Angebot. In der Vergangenheit durfte ich bereits mehrere Mountainbiker betreuen und verstehe daher genau, was in der Vorbereitung wichtig ist.",
  audience: [
    "Ambitionierte MTB-Fahrer*innen mit einer anspruchsvollen Rennsaison",
    "Sportler*innen, die sich strukturiert auf XC-Wettkämpfe vorbereiten möchten",
    "MTB-Einsteiger*innen mit konkretem Wettkampfziel",
    "Athlet*innen, die mehrere Rennformate (z.B. Gravel & XC) kombinieren möchten",
  ],
  focus: [
    { title: "XCO: Repetitive, hochintensive Belastung", text: "Bereits zum Start wird es das erste Mal intensiv. Im weiteren Verlauf sorgen knackige Anstiege und technische Passagen für Belastungsspitzen. Im Training setzen wir daher vermehrt auf intermittierende Belastungen wie 30/30s oder 40/20s Intervalle, um Leistungsspitzen sowie die Erholung davon zu trainieren." },
    { title: "XCM: Hohe Leistungen über längere Zeiträume", text: "Da Windschatten weniger Einfluss als in anderen Disziplinen hat, muss hier oft Solo eine hohe Durchschnittsleistung und hohe Normalisierte Leistung über die Wettkampfdauer erbracht werden. Kontrolliertes Training im Sweetspot- und Schwellenbereich hilft dabei dieses Belastungsprofil vorzubereiten." },
    { title: "Technische Komponente nicht vernachlässigen", text: "Wenn das Training rein auf die Physiologie optimiert wird, geht Techniktraining schnell unter. Dabei ist saubere Fahrtechnik nach hochintensiver Belastung deutlich anspruchsvoller als im ausgeruhten Zustand. Wir integrieren daher bewusst technische Passagen in normale Trainingseinheiten." },
  ],
  raceFocus: [
    { title: "Renneinteilung und Taktik", text: "Um das Maximum aus deiner Leistungsfähigkeit herauszuholen ist gerade im XCO die richtige Taktik entscheidend. Wir besprechen daher deine Rennen vor, und nach, um taktische Entscheidungen frühzeitig zu treffen und Fehler im Nachhinein zu identifizieren und daraus zu lernen." },
    { title: "Verpflegung", text: "Kohlenhydrataufnahme, Hydration und Koffeinzufuhr tragen im Rennen entscheidend zur erbrachten Leistung bei. Wir testen deine Verpflegung im Training und erarbeiten gemeinsam einen individuellen Verpflegungsplan fürs Rennen, damit du deine Leistungsfähigkeit am Renntag zeigen kannst." },
    { title: "Bedingungen und Technik", text: "Technische Passagen sowie Einflüsse von Niederschlag, Wind und Temperaturen beeinflussen den Rennverlauf. Deshalb schauen wir uns diese Aspekte in der Vorbesprechung deiner Rennen zusammen an und erarbeiten Strategien, wie du diese am besten angehst und zu deinem Vorteil nutzen kannst." },
  ],
  faqs: [
    { question: "Was ist der Unterschied zwischen XCO- und XCM-Coaching?", answer: "XCO ist kürzer und damit intensiver als XCM. Daher sind im Training unterschiedliche Reize (Volumen, Intensität, spezifische Einheiten) nötig, um dich auf die Anforderungen vorzubereiten." },
    { question: "Welche Aspekte sind im Coaching enthalten?", answer: "Trainingsplanung sowie Tipps zu Verpflegung, Pacing, Taktik und Setup sind Teil des Coachings. Zudem besprechen wir deine Rennen vor und nach. Zum Techniktraining kann ich helfen die richtigen Bedingungen zu schaffen, konkrete Hinweise zur Fahrtechnik kann ich allerdings nicht geben." },
    { question: "Wie oft sollte ich pro Woche auf dem Mountainbike trainieren?", answer: "Wenn deine Saison auf XC-Rennen fokussiert ist, solltest du in der Hauptphase der Saison die meisten Einheiten auf dem Mountainbike absolvieren. Je nach individuellen Voraussetzungen können 20-50% der Einheiten auch auf anderen Rädern absolviert werden ohne die Vorbereitung negativ zu beeinflussen." },
    { question: "Wie viele Rennen kann ich pro Saison einplanen?", answer: "Niemand kann die gesamte Saison über in Topform sein. In der Saisonplanung sollten daher 2 bis 3 Zeiträume definiert werden, wo man die besten Leistungen erbringen möchte. Gerne besprechen wir in einem unverbindlichen Erstgespräch wie wir deine Saison am sinnvollsten aufbauen können." },
  ],
  icon: Mountain,
};

const CoachingXcoXcm = () => <CoachingCyclingCategory config={config} />;

export default CoachingXcoXcm;
