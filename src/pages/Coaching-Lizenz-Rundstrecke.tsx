import { Flag } from "lucide-react";
import { CoachingCyclingCategory, type CategoryPageConfig } from "@/pages/CoachingCyclingCategory";

const config: CategoryPageConfig = {
  eyebrow: "Rennrad-Renncoaching",
  title: "Lizenz- und Rundstreckenrennen",
  description: "[Hier deine Zielgruppe und Erfahrung im Lizenz- beziehungsweise Rundstreckenbereich beschreiben. Ergänze, welche Rennklassen, Distanzen und Leistungsniveaus du betreust.]",
  audience: [
    "Rennfahrer*innen mit Lizenz- oder Rundstreckenzielen",
    "Athlet*innen auf dem Weg zum ersten Straßenrennen",
    "Fahrer*innen mit Fokus auf Attacken und Positionsarbeit",
    "Sportler*innen, die gezielt Formhöhepunkte planen möchten",
  ],
  focus: [
    { title: "Wiederholte harte Belastungen", text: "[Erkläre Trainingsreize für Attacken, Antritte, Anstiege, Windkanten und schnelle Rennverläufe.]" },
    { title: "Rennspezifische Leistung", text: "[Beschreibe relevante Leistungsbereiche, Sprint, VO2max, Schwelle und die Übertragung auf dein Rennformat.]" },
    { title: "Taktik und Position", text: "[Ergänze deine Themen rund um Rennentscheidung, Gruppe, Wind, Kurven, Verpflegung und Renneinteilung.]" },
  ],
  raceFocus: [
    { title: "Rennsituation und Position", text: "[Beschreibe, wie Positionierung, Wind, Kurven und das Fahren im Feld das Rennergebnis beeinflussen.]" },
    { title: "Pacing und Verpflegung", text: "[Ergänze deine Empfehlungen für Energieversorgung, Trinkstrategie und den Umgang mit wechselnden Intensitäten.]" },
    { title: "Taktik und Formhöhepunkt", text: "[Beschreibe, wie Rennkalender, Zielrennen, Attacken, Sprint oder Schlussanstieg in die Vorbereitung einfließen.]" },
  ],
  faqs: [
    { question: "Kann ich mit dem Coaching in den Lizenzradsport einsteigen?", answer: "[Hier beschreiben, welche Voraussetzungen, Rennklassen und Einstiegsziele du begleitest.]" },
    { question: "Wie viele Rennen kann ich pro Saison sinnvoll planen?", answer: "[Hier deine Sicht auf Rennkalender, Belastung und Priorisierung erklären.]" },
    { question: "Gehört Renntaktik zum Coaching?", answer: "[Hier konkrete Inhalte zur Rennvorbereitung und Nachbesprechung ergänzen.]" },
    { question: "Wie trainiere ich für wiederholte Attacken und harte Antritte?", answer: "[Hier passende Trainingsinhalte wie VO2max, anaerobe Belastungen, Erholung zwischen Intervallen und Renndynamik beschreiben.]" },
    { question: "Wie bereite ich mich auf mein erstes Lizenzrennen vor?", answer: "[Hier erklären, welche Grundlagen, Rennpraxis und organisatorischen Schritte für Einsteiger*innen wichtig sind.]" },
    { question: "Wie kann ich meine Sprintleistung im Radsport verbessern?", answer: "[Hier deinen Ansatz zu Sprinttechnik, Kraft, Antritt und Ermüdungssprint ergänzen.]" },
    { question: "Wie plane ich meine Saison mit mehreren Rundstreckenrennen?", answer: "[Hier beschreiben, wie Zielrennen, Vorbereitungsrennen, Belastungsblöcke und Erholung periodisiert werden.]" },
  ],
  icon: Flag,
};

const CoachingLizenzRundstrecke = () => <CoachingCyclingCategory config={config} />;

export default CoachingLizenzRundstrecke;
