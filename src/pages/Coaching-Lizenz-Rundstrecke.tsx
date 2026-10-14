import { Flag } from "lucide-react";
import { CoachingCyclingCategory, type CategoryPageConfig } from "@/pages/CoachingCyclingCategory";

const config: CategoryPageConfig = {
  eyebrow: "Individuelles 1:1 Coaching für Lizenz- und Rundstreckenfahrer",
  title: "Coaching für Lizenz- und Rundstreckenrennen",
  description: "Lizenz- und Rundstreckenrennen sind der Klassiker des Straßenradsports. Schnelles Fahren in Gruppen, intensive Belastungsspitzen und dynamische Rennsituationen verlangen spezifische Vorbereitung. \n Ein klassischer Rennrad Trainingsplan für Fortgeschrittene reicht nicht mehr aus? Du möchtest deine nächste Rennsaison strukturierter angehen, dein Leistungsniveau steigern oder gezielt an Schwächen arbeiten? Dann bist du hier richtig. \n Ich helfe dir, dein Training zu strukturieren, bessere Entscheidungen im Rennen zu treffen und deine Leistungsgrenzen zu verschieben.",
  audience: [
    "Rennfahrer*innen mit UCI-Lizenz oder Jedermann-Erfahrung",
    "Sportler*innen, die mehr als einen Standard Rennrad Trainingsplan für Fortgeschrittene suchen",
    "Fahrer*innen, die Rundstreckenrennen mit anderen Disziplinen verbinden möchten",
    "Ambitionierte Sportler*innen mit einem vollen Rennkalender",
  ],
  focus: [
    { title: "Wiederholbarkeit harter Belastungen", text: "Wiederkehrende Attacken, kurze Anstiege und Antritte nach Kurven zeichnen Rundstreckenrennen aus. Im Training setzen wir daher oft auf kürzere Intervalle wie 30/30s, 40/20s oder 1-Minute-Wiederholungen, die einen wertvollen Reiz für die VO2max setzen." },
    { title: "Schwellenleistung", text: "Um dein gewünschtes Rennergebnis zu erzielen, musst du oft mit einem kurzen Antritt den Unterschied machen. Um aber überhaupt in die richtige Situation zu kommen ist deine Dauerleistungsfähigkeit entscheidend. Deswegen setzen wir auch dafür im Training wichtige Reize." },
    { title: "Maximalleistung im Sprint", text: "Gerade flache Rundstreckenrennen werden oft im Sprint entschieden. Zudem hilft eine höhere Maximalleistung dabei Antritte, z.B. nach Kurven, besser wegzustecken. Deswegen setzen wir gerade in der akuten Vorbereitung häufig auf kurze, maximale Intervalle mit längerer Pausenzeit als Trainingsform." },
  ],
  raceFocus: [
    { title: "Situativ richtige Entscheidungen", text: "Rundstreckenrennen werden oft Ad-hoc entschieden: Der Attacke folgen oder nicht? Den Sprint 200m oder 300m vorm Ziel starten? Neben Übung sind da auch klare Entscheidungen vorm Rennen hilfreich. Wir besprechen deine Rennen vor und legen damit die Grundlage für spätere Entscheidungen." },
    { title: "Verpflegung und Supplementierung", text: "Gerade für kurze Belastungsspitzen gibt es einige Supplements, die dich im Rennen unterstützen können: Koffein, Bikarbonat, Beta-Alanine und natürlich Kohlenhydrate. Was für dich individuell in welchen Mengen Sinn macht erarbeiten und testen wir ausführlich." },
    { title: "Gezielte Saisonhöhepunkte", text: "Für Lizenz- und Rundstreckenfahrer*innen ist der Rennkalender oft voll. Dennoch kann man nicht die gesamte Saison in Bestform sein. Zusammen priorisieren wir deine Rennen, legen eine Periodisierung für dein Trainingsjahr fest und planen Erholungsphasen ein, damit du zum richtigen Zeitpunkt topfit bist." },
  ],
  faqs: [
    { question: "Wie plane ich meine Saison mit mehreren Rundstreckenrennen?", answer: "Viele Rennen sind kein Problem. Wichtig ist nur, dass im Vorhinein festgelegt wird, welche Rennen dir am wichtigsten sind. Gerne besprechen wir in einem unverbindlichen Erstgespräch, ob dein geplanter Saisonaufbau sinnvoll ist und welche Rennen du am höchsten priorisieren solltest." },
    { question: "Gehört Renntaktik zum Coaching?", answer: "Wir besprechen deine Rennen vor und nach. Dabei reden wir unter anderem über taktische Entscheidungen und tauschen Gedanken aus, was du aus Rennerfahrungen für die Zukunft mitnehmen kannst." },
    { question: "Worauf legen wir im Training für Rundstreckenrennen den Fokus?", answer: "Wir schauen uns am Anfang unserer Zusammenarbeit deine Stärken und Potenziale an und legen danach fest, zu welchen Saisonzeitpunkt wir wo den Fokus setzen. Das kann z.B. im Winter mehr Grundlagentraining und in der akuten Vorbereitung viel Sprinttraining bedeuten, ist aber individuell unterschiedlich. In einem unverbindlichen Erstgespräch können wir das gerne für dich individuell klären." },
    { question: "Wann sollte ich mit dem Coaching anfangen?", answer: "Mehr Zeit in der strukturierten Vorbereitung erhöht immer die Wahrscheinlichkeit am Renntag fitter zu sein. Für eine komplette Saisonvorbereitung würde ich neun Monate bis zum Hauptrennen empfehlen. Allerdings können bei vorhandener Grundfitness auch wenige Wochen bereits zu signifikanten Verbesserungen führen." },

  ],
  icon: Flag,
};

const CoachingLizenzRundstrecke = () => <CoachingCyclingCategory config={config} />;

export default CoachingLizenzRundstrecke;
