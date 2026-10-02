import { Timer } from "lucide-react";
import { CoachingCyclingCategory, type CategoryPageConfig } from "@/pages/CoachingCyclingCategory";

const config: CategoryPageConfig = {
  eyebrow: "Ultracycling-Coaching",
  title: "Ultracycling-Coaching",
  description: "[Hier beschreibst du deine Erfahrung mit Ultracycling, die von dir betreuten Formate und die besonderen Herausforderungen langer Nonstop- oder Etappen-Events.]",
  audience: [
    "Athlet*innen vor ihrem ersten Ultra-Event",
    "Erfahrene Ultra-Fahrer*innen mit einem konkreten Ziel",
    "Sportler*innen für Nonstop- und Etappenrennen",
    "Fahrer*innen, die Pacing und Selbstversorgung verbessern möchten",
  ],
  focus: [
    { title: "Lange Belastungen vorbereiten", text: "[Beschreibe den Aufbau von Umfang, Dauer und spezifischer Ermüdungsresistenz.]" },
    { title: "Pacing und Energieversorgung", text: "[Ergänze deinen Ansatz für Tempoentscheidungen, Kohlenhydrate, Flüssigkeit und Magenverträglichkeit.]" },
    { title: "Schlaf und Selbstmanagement", text: "[Beschreibe Schlafstrategien, Pausen, Navigation, Materialplanung und Entscheidungen unter Ermüdung.]" },
  ],
  raceFocus: [
    { title: "Pacing und Energieversorgung", text: "[Beschreibe die Strategie für gleichmäßiges Tempo, Kohlenhydrate, Flüssigkeit und lange Phasen ohne Versorgung.]" },
    { title: "Schlaf, Pausen und Entscheidungen", text: "[Ergänze deinen Ansatz für Pausen, Schlafmanagement, Navigation und den Umgang mit Ermüdung.]" },
    { title: "Material und Selbstständigkeit", text: "[Beschreibe Vorbereitung, Reparaturstrategie, Ausrüstung und die Planung von Versorgungspunkten.]" },
  ],
  faqs: [
    { question: "Wie bereite ich mich auf mein erstes Ultracycling-Event vor?", answer: "[Hier deine wichtigsten Schritte für Einsteiger*innen und typische Vorbereitungszeiträume ergänzen.]" },
    { question: "Wie trainiert man für mehrere lange Tage hintereinander?", answer: "[Hier deinen Ansatz für Ermüdungsresistenz, Regeneration und Back-to-back-Training erklären.]" },
    { question: "Unterstützt du auch bei Pacing und Verpflegungsstrategie?", answer: "[Hier deinen konkreten Leistungsumfang und die Werkzeuge für die Wettkampfplanung beschreiben.]" },
    { question: "Wie lange sollte die Vorbereitung auf ein Ultracycling-Rennen dauern?", answer: "[Hier deinen empfohlenen Vorbereitungszeitraum abhängig von Distanz, Höhenmetern und Renndauer ergänzen.]" },
    { question: "Wie trainiert man Schlafmangel und lange Rennnächte?", answer: "[Hier beschreiben, welche Aspekte planbar sind und wie du Schlafstrategie, Pausen und Belastung vorbereitest.]" },
    { question: "Wie plane ich die Verpflegung bei einem Ultracycling-Event?", answer: "[Hier deinen Ansatz für Kohlenhydrate, Flüssigkeit, Koffein, Versorgungspunkte und Verträglichkeit eintragen.]" },
    { question: "Welche Ausrüstung brauche ich für ein Ultracycling-Rennen?", answer: "[Hier deine Empfehlungen zu Material, Ersatzteilen, Navigation, Beleuchtung und Selbstversorgung ergänzen.]" },
  ],
  icon: Timer,
};

const CoachingUltracycling = () => <CoachingCyclingCategory config={config} />;

export default CoachingUltracycling;
