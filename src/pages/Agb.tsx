import { Navbar } from "@/components/Navbar";
import { SiteFooter } from "@/components/SiteFooter";

const Agb = () => {
  return (
    <div className="min-h-screen bg-white flex flex-col">
      <Navbar />
      <main className="flex-grow pt-8 pb-12 sm:py-12">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-3xl font-bold text-primary mb-8">Allgemeine Geschäftsbedingungen (AGB)</h1>

          <div className="prose prose-lg">
            <div className="space-y-6">
              <p><em>MaxCyclesCoaching -<br />
                Trainingsbetreuung und Coaching im Ausdauersport</em></p>

              <p>MaxCyclesCoaching, Inhaber Maximilian Lohr, Heimstättenweg 23, 01705 Freital (nachfolgend „Coach“ genannt).</p>

              <h2 className="text-2xl font-bold text-primary">§ 1 Geltungsbereich und Vertragspartner</h2>
              <p>(1) Diese Allgemeinen Geschäftsbedingungen (AGB) gelten für alle Verträge über Trainingsbetreuung und Coaching-Leistungen zwischen MaxCyclesCoaching, Inhaber Maximilian Lohr, Heimstättenweg 23, 01705 Freital (nachfolgend „Coach“ genannt) und dem jeweiligen Klienten (nachfolgend „Athlet“ genannt).</p>
              <p>(2) Abweichende Bedingungen des Athleten werden nicht anerkannt, es sei denn, der Coach stimmt ihrer Geltung ausdrücklich schriftlich zu.</p>

              <h2 className="text-2xl font-bold text-primary">§ 2 Vertragsgegenstand und Voraussetzungen</h2>
              <p>(1) Der Coach bietet die Erstellung von individuellen Trainingsplänen sowie die beratende Betreuung im Ausdauersport an.</p>
              <p>(2) Die Trainingssteuerung und Kommunikation der Pläne erfolgt über die Software „TrainingPeaks“. Für den Athleten ist hierfür ein kostenfreier Basis-Account (Basic) ausreichend; ein Premium-Abo ist nicht zwingend erforderlich.</p>

              <h2 className="text-2xl font-bold text-primary">§ 3 Leistungsbeschreibungen (Coaching-Pakete)</h2>
              <p>Der genaue Leistungsumfang richtet sich nach dem im Coaching-Vertrag gewählten Paket. Die Kommunikation erfolgt in beiden Paketen via TrainingPeaks-Kommentarfunktion sowie per WhatsApp oder SMS.</p>

              <h3 className="text-xl font-bold text-primary">(A) Basis-Paket (99,00 EUR / Monat)</h3>
              <ul>
                <li><strong>Trainingsplanung:</strong> Die Erstellung des Trainingsplans erfolgt jeweils für vier Wochen im Voraus. Plananpassungen durch den Coach während dieses Zeitraums sind nicht enthalten; akute Änderungen müssen vom Athleten selbst vorgenommen werden.</li>
                <li><strong>Analyse &amp; Feedback:</strong> Am Ende jeden Monats erfolgt eine Analyse des Trainingsblocks inklusive eines schriftlichen Feedbacks.</li>
                <li><strong>Kommunikation &amp; Telefonate:</strong> Der reguläre Kontakt findet bis zu zweimal pro Monat statt. Nach Bedarf ist bis zu ein Telefonat (ca. 30 Minuten) alle zwei Monate inklusive. Ein direkter täglicher Austausch ist nicht Bestandteil des Pakets.</li>
                <li><strong>Event-Planung:</strong> Die Planung von bis zu vier Wettkämpfen/Events pro Jahr ist enthalten. Für bis zu zwei dieser Events erfolgt eine telefonische Vorbesprechung (Pacing, Verpflegung, Setup-Tipps), welche nicht auf das reguläre Telefonkontingent angerechnet wird.</li>
                <li><strong>Zusatzleistungen:</strong> Hinweise zur Verpflegung vor und während der Trainingseinheiten sind inkludiert.</li>
              </ul>

              <h3 className="text-xl font-bold text-primary">(B) All-Inclusive-Paket (189,00 EUR / Monat)</h3>
              <ul>
                <li><strong>Trainingsplanung:</strong> Die Planung erfolgt rollierend (gleitend) im 1- bis 2-Wochen-Rhythmus. Kurzfristige Plananpassungen sind flexibel bis zu zweimal pro Woche möglich.</li>
                <li><strong>Analyse &amp; Feedback:</strong> Jede Trainingseinheit wird spätestens am Folgetag nach Eingang der Trainingsdaten detailliert analysiert und bei Bedarf mit Feedback versehen.</li>
                <li><strong>Kommunikation &amp; Telefonate:</strong> Der schriftliche Kontakt im Rahmen des Coachings ist unbegrenzt. Bei akuten Anfragen erfolgt eine Antwort in der Regel innerhalb von 2 Stunden (zwischen 08:00 und 18:00 Uhr), bei Anfragen ohne Zeitdruck meist innerhalb von 8 Stunden im selben Zeitfenster. Nach Bedarf sind bis zu zwei Telefonate (je ca. 30 Minuten) pro Monat inklusive.</li>
                <li><strong>Event-Planung:</strong> Integration in den Trainingsplan ist für beliebig viele Events enthalten. Bis zu vier Events pro Jahr beinhalten eine telefonische Vorbesprechung (Pacing, Verpflegung, Setup-Tipps; zählt nicht zum regulären Telefonkontingent) sowie eine Nachbesprechung zum Austausch von Feedback und Besprechung von Learnings.</li>
                <li><strong>Zusatzleistungen:</strong> Auf Wunsch werden individuelles Krafttraining sowie bis zu eine Zusatzsportart (z. B. Laufen) in den Plan integriert. Verpflegungshinweise sind inkludiert. Bis zu zwei Laktat-Leistungsdiagnostiken pro Jahr können zum Vorzugspreis von je 149,00 EUR hinzugebucht werden.</li>
              </ul>

              <h2 className="text-2xl font-bold text-primary">§ 4 Vertragslaufzeit, Kündigung und Ausfall</h2>
              <p>(1) Der Coaching-Vertrag wird auf unbestimmte Zeit geschlossen. Eine Mindestvertragslaufzeit besteht nicht.</p>
              <p>(2) Die Kündigungsfrist richtet sich nach dem gebuchten Coaching-Paket:</p>
              <ul>
                <li><strong>Basis-Paket:</strong> Die Kündigungsfrist beträgt 31 Tage zum Ende eines Kalendermonats (Beispiel: Ein Kündigungseingang spätestens am 30.08. führt zur Beendigung des Vertrages zum 30.09.).</li>
                <li><strong>All-Inclusive-Paket:</strong> Die Kündigungsfrist beträgt 14 Tage zum Ende eines Kalendermonats (Beispiel: Ein Kündigungseingang spätestens am 16.09. führt zur Beendigung des Vertrages zum 30.09.).</li>
              </ul>
              <p>(3) Die Kündigung kann in Textform eingereicht werden (z. B. per E-Mail, WhatsApp oder SMS).</p>
              <p>(4) Bei Krankheit, Verletzung oder sonstigem Trainingsausfall des Athleten bleibt die reguläre Kündigungsfrist bestehen. Krankheit oder Verletzung begründen für sich genommen keinen Anspruch auf eine kostenfreie Pausierung. Gesetzliche Rechte zur außerordentlichen Kündigung bleiben unberührt.</p>

              <h2 className="text-2xl font-bold text-primary">§ 5 Vergütung und Zahlungsbedingungen</h2>
              <p>(1) Die Abrechnung der Coaching-Leistungen erfolgt monatlich im Nachhinein. Der Coach stellt dem Athleten jeweils am 1. eines Monats die Rechnung für den vorausgegangenen Leistungsmonat.</p>
              <p>(2) Beginnt der Coaching-Vertrag nicht am ersten Tag eines Kalendermonats, wird der erste Leistungsmonat anteilig ab dem Vertragsbeginn bis zum letzten Kalendertag dieses Monats berechnet. Der anteilige Betrag errechnet sich aus der Anzahl der Kalendertage des ersten Leistungszeitraums geteilt durch 30 und multipliziert mit dem monatlichen Preis des gebuchten Coaching-Pakets.</p>
              <p>(3) Ab dem darauffolgenden Monat wird jeweils der volle monatliche Preis des gebuchten Coaching-Pakets berechnet.</p>
              <p>(4) Der Rechnungsbetrag ist innerhalb von 14 Tagen nach Rechnungsdatum ohne Abzug zur Zahlung fällig.</p>
              <p>(5) Gemäß § 19 UStG (Kleinunternehmerregelung) wird keine Umsatzsteuer berechnet und in der Rechnung ausgewiesen.</p>

              <h2 className="text-2xl font-bold text-primary">§ 6 Mitwirkungspflichten und gesundheitliche Informationen</h2>
              <p>(1) Voraussetzung für eine sachgerechte Trainingsplanung ist die aktive Mitwirkung des Athleten. Der Athlet stellt dem Coach die für die Trainingsplanung erforderlichen Informationen und Trainingsdaten vollständig und wahrheitsgemäß zur Verfügung und sorgt für die ordnungsgemäße Übermittlung bzw. Synchronisierung der vereinbarten Trainingsdaten.</p>
              <p>(2) Der Athlet informiert den Coach zeitnah über relevante Veränderungen, die Einfluss auf die Trainingsplanung oder Trainingsdurchführung haben können. Hierzu zählen insbesondere Verletzungen, Schmerzen, Erkrankungen, außergewöhnliche Erschöpfungszustände sowie wesentliche Veränderungen der beruflichen, privaten oder sonstigen Belastungssituation.</p>
              <p>(3) Der Athlet informiert den Coach insbesondere über ärztliche oder therapeutische Empfehlungen, Einschränkungen oder Trainingsverbote, soweit diese für die Trainingsplanung relevant sind.</p>
              <p>(4) Der Coach ist auf die vom Athleten bereitgestellten Informationen und Trainingsdaten angewiesen. Werden erforderliche Informationen oder Trainingsdaten nicht, nicht vollständig oder verspätet bereitgestellt, kann dies die Erstellung, Anpassung oder Analyse des Trainingsplans beeinträchtigen.</p>
              <p>(5) Der Coach erbringt keine medizinische oder therapeutische Diagnostik oder Behandlung. Bei gesundheitlichen Beschwerden oder Unsicherheiten hinsichtlich der Trainingsfähigkeit ist der Athlet verpflichtet, eigenverantwortlich geeigneten medizinischen oder therapeutischen Rat einzuholen.</p>

              <h2 className="text-2xl font-bold text-primary">§ 7 Gesundheitliche Voraussetzungen und Haftung</h2>
              <p>(1) Der Athlet ist für die eigene gesundheitliche Eignung zur Durchführung der empfohlenen sportlichen Belastungen selbst verantwortlich.</p>
              <p>(2) Das Coaching ersetzt keine medizinische oder therapeutische Behandlung. Die Umsetzung der Trainingsvorgaben erfolgt auf eigene Gefahr und Verantwortung des Athleten.</p>
              <p>(3) Der Coach haftet nur für Vorsatz und grobe Fahrlässigkeit. Die Haftung für leichte Fahrlässigkeit ist ausgeschlossen, es sei denn, es handelt sich um die Verletzung vertragswesentlicher Pflichten (Kardinalpflichten) oder um Schäden aus der Verletzung des Lebens, des Körpers oder der Gesundheit.</p>
              <p>(4) Ein bestimmter sportlicher Erfolg, insbesondere das Erreichen bestimmter Leistungswerte, Wettkampfzeiten, Platzierungen, Qualifikationen oder sonstiger Trainings- oder Wettkampfziele, wird nicht geschuldet. Der tatsächliche Trainingserfolg hängt von zahlreichen Umständen ab, die außerhalb des Einflussbereichs des Coaches liegen.</p>

              <h2 className="text-2xl font-bold text-primary">§ 8 Schlussbestimmungen</h2>
              <p>(1) Es gilt das Recht der Bundesrepublik Deutschland.</p>
              <p>(2) Für Athleten, die Verbraucher sind, gelten die gesetzlichen Gerichtsstände.</p>
              <p>(3) Sollten einzelne Bestimmungen dieser AGB unwirksam sein oder werden, so wird die Wirksamkeit der übrigen Bestimmungen hierdurch nicht berührt.</p>

              <p><em>Stand: September 2026</em></p>
            </div>
          </div>
        </div>
      </main>

      <SiteFooter />
    </div>
  );
};

export default Agb;