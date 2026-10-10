import { Navbar } from "@/components/Navbar";
import { SiteFooter } from "@/components/SiteFooter";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowRight, Bike, BriefcaseBusiness, CalendarDays, CheckCircle2, Flag, Gauge, Trophy, Utensils } from "lucide-react";
import { lazy, Suspense, useMemo, useState } from "react";
import { LightboxDialog } from "@/components/LightboxDialog";
import maxImage from "./max.avif";

const ContactForm = lazy(() => import("@/components/ContactForm"));

const UeberMich = () => {
  const [isCertificateOpen, setIsCertificateOpen] = useState(false);

  const startYear = 2021;
  const currentYear = new Date().getFullYear();
  const experienceYears = currentYear - startYear;

  const achievements = useMemo(
    () => [
      "German Cycling (BDR) zertifizierter Coach",
      `Über ${experienceYears} Jahre eigene Wettkampferfahrung`,
      "Spezialisiert auf Radsport",
      "Professionelles Coaching-Angebot seit 2023",
    ],
    [experienceYears]
  );

  const successStories = [
    {
      category: "Eigener Weg",
      title: "Dreiländergiro 2023 Vinschgau - Platz 4 Gesamt",
      description: "Mein erster Radmarathon. Direkt Holzmedaille.",
    },
    {
      category: "Eigener Weg",
      title: "Peaks and Plains 2024 - Sieg Teamwertung",
      description: "Über 500km, unzählige Platten, aber am Ende trotzdem zu zweit die Teamwertung gewonnen.",
    },
    {
      category: "Eigener Weg",
      title: "Kitzbüheler Radmarathon 2025 - 07:00h Gesamtzeit",
      description: "260W Normalized Power für 7 Stunden bei 71kg. War sehr hart, aber Zielzeit erreicht.",
    },
  ];

  const philosophyPoints = [
    {
      number: "01",
      title: "Jedes Training ist individuell",
      summary: "Dein Training muss zu deinem Ziel, deinem Körper und deinem Leben passen.",
      icon: Gauge,
      text: (
        <>
          Zielevents, Zeitverfügbarkeit, Trainingshistorie, individuelle Physiologie, Geschlecht und
          viele weitere Faktoren beeinflussen, welche Trainingsreize du brauchst. Vorhandene
          Trainingsdaten, Ergebnisse aus Leistungsdiagnostiken, deine Selbsteinschätzung und bekannte
          externe Einflüsse bestimmen, wie ich dein Training plane.
          <br />
          Der erste Trainingsplan ist dabei meist nicht direkt perfekt. Mehrere Iterationen helfen
          uns, das Training immer genauer auf deinen Körper abzustimmen. Deshalb erhalten bei mir
          nicht mehrere Personen denselben Plan, sondern jede Person eigene Strukturen und
          Trainingseinheiten.
        </>
      ),
    },
    {
      number: "02",
      title: "Belastung kontrolliert steuern",
      summary: "Eine Saison braucht klare Höhepunkte und geplante Erholung.",
      icon: CalendarDays,
      text: (
        <>
          Niemand kann die gesamte Saison in Topform sein. Deshalb sollte früh feststehen, zu welchen
          Zeitpunkten Bestleistungen erwünscht sind. Darauf aufbauend lege ich die
          Saisonperiodisierung fest und plane ausreichend Zeit für Erholung, Anpassung und
          notwendige Kurskorrekturen ein.
        </>
      ),
    },
    {
      number: "03",
      title: "Training um deinen Alltag planen",
      summary: "Arbeitsstress, Schlaf und spontane Ereignisse gehören in den Trainingsplan.",
      icon: BriefcaseBusiness,
      text: (
        <>
          Stressige Phasen sind normal, sollten aber mit einer passenden Reduktion der
          Trainingsbelastung einhergehen. Andernfalls steigt das Risiko einer Überlastung. Deshalb
          plane ich dein Training nicht nur um den Zeitbudget herum, sondern auch im Hinblick auf deine
          Gesamtbelastung. Bei Zwischenereignissen passe ich Einheiten gerne kurzfristig an.
        </>
      ),
    },
    {
      number: "04",
      title: "Erholung als Teil des Trainings",
      summary: "Dein Körper entwickelt sich nicht während der Belastung, sondern in der Anpassung.",
      icon: Utensils,
      text: (
        <>
          Trainingserfolge hängen nicht allein vom Training ab. Entscheidend ist, die Belastung
          schrittweise zu steigern, strukturierte Erholungsphasen einzuhalten und Schlaf sowie
          Ernährung als festen Teil des Sports zu betrachten. Ich gebe dir Tipps zur Ernährung vor,
          während und nach dem Training und unterstütze dich dabei, deine Regeneration zu optimieren.
        </>
      ),
    },
    {
      number: "05",
      title: "Wettkämpfe ganzheitlich vorbereiten",
      summary: "Fitness ist nur ein Teil dessen, was am Wettkampftag zählt.",
      icon: Flag,
      text: (
        <>
          Pacing, Verpflegung, Radposition, Fahrtechnik, Gruppendynamik, Schlafstrategien bei
          Ultrarennen oder Wechselzeiten im Triathlon können entscheidend sein. Deshalb besprechen
          wir deine Events vorab ausführlich. Nach dem Wettkampf teilen wir Feedback und leiten daraus
          konkrete nächste Schritte ab, um langfristig an deinen Potenzialen zu arbeiten.
        </>
      ),
    },
  ];

  return (
    <div className="min-h-screen bg-white flex flex-col">
      <Navbar />

      <main className="flex-grow">
        <section className="pt-8 pb-12 sm:py-12" aria-label="Über mich Inhalte">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)] gap-10 lg:gap-20 items-start">
              <figure className="relative order-2 lg:order-1">
                <img
                  src={maxImage}
                  alt="Max, Gründer von MaxCyclesCoaching"
                  className="w-full max-h-[720px] aspect-[4/5] object-cover object-center rounded-lg shadow-lg"
                  loading="lazy"
                />
                <figcaption className="mt-3 text-sm text-muted-foreground">
                  Maximilian Lohr · Gründer von MaxCyclesCoaching
                </figcaption>
              </figure>

              <div className="order-1 pt-1 lg:order-2">
                <p className="text-sm font-semibold uppercase tracking-widest text-secondary mb-4">
                  Über mich
                </p>
                <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-primary leading-tight mb-6">
                  Max Lohr
                </h1>
                <p className="text-xl sm:text-2xl text-primary/80 leading-relaxed mb-8">
                  Zertifizierter Radsportcoach und leidenschaftlicher Ausdauersportler.
                </p>
                <div className="space-y-4 text-gray-700 leading-relaxed max-w-2xl">
                  <p>
                    Hi, ich bin Max. Seit ich 16 Jahre alt bin fahre ich ambitioniert Rennrad und interessiere mich
                    für alle Facetten des Ausdauersports.
                  </p>
                  <p>
                    Von Beginn an setze ich mich intensiv mit <b>Trainingswissenschaft</b> auseinander -
                    zunächst für mein eigenes Training; seit 2023 auch, um mein Wissen an andere
                    Athleten weiterzugeben. Aktuelle Studien, praktische Ansätze anderer
                    Athleten und Coaches sowie meine eigene <b>Erfahrung in der Athletenbetreuung </b>bilden die Grundlage meiner Arbeit.
                  </p>
                  <p>
                    Im Januar 2025 habe ich mein Gewerbe angemeldet und mich damit neben meinem
                    Wirtschaftsinformatik-Studium an der HTW Dresden selbstständig gemacht. Seither
                    biete ich individuelles <b>1:1 Online-Coaching für ambitionierte Ausdauerathleten</b> an.
                  </p>
                  <p>
                    Die meisten meiner betreuten Athleten sind im Radsport unterwegs. Auf Wunsch betreue ich
                    vereinzelt auch Läufer und Triathleten.
                  </p>
                  <p>
                    Wer sich einen <b>Trainingsplan erstellen lassen</b> möchte, merkt oft schnell: Ein fixer Plan stößt an Grenzen, wenn Termine und Erschöpfung dazwischenkommen oder du einfach schon lange Ausdauersport betreibst. Mein Ziel ist daher Coaching, das sich an deinen Alltag anpasst – damit du dein <b>volles Potenzial auf dem Rad ausschöpfen</b> kannst.
                  </p>
                </div>

              </div>
            </div>

            <div className="mt-10 lg:mt-14 border-t border-border pt-8">
              <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-6">
                <div className="lg:max-w-xs">
                  <p className="text-sm font-semibold uppercase tracking-widest text-secondary mb-2">
                    Kurzprofil
                  </p>
                  <h2 className="text-2xl font-semibold text-primary">Wofür ich stehe</h2>
                </div>
                <ul className="grid sm:grid-cols-2 lg:grid-cols-4 gap-x-8 gap-y-5 flex-1 lg:max-w-5xl">
                  {achievements.map((achievement, index) => (
                    <li key={index} className="flex items-start gap-3 text-gray-700">
                      {index === 0 ? (
                        <button
                          type="button"
                          onClick={() => setIsCertificateOpen(true)}
                          className="flex items-start gap-3 text-left hover:text-primary transition-colors"
                        >
                          <Bike className="w-5 h-5 mt-0.5 shrink-0 text-secondary" />
                          <span>
                            {achievement}
                            <span className="block text-xs text-primary font-medium mt-1">Zertifikat ansehen</span>
                          </span>
                        </button>
                      ) : (
                        <>
                          <CheckCircle2 className="w-5 h-5 mt-0.5 shrink-0 text-secondary" />
                          <span>{achievement}</span>
                        </>
                      )}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </section>

        <section className="py-14 sm:py-20 bg-accent" aria-label="Erfolge">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-5xl mb-10">
              <p className="text-sm font-semibold uppercase tracking-widest text-secondary mb-3">
                Entwicklung, die sichtbar wird
              </p>
              <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">Eigene Erfolge und Meilensteine</h2>
              <p className="text-lg text-gray-600 leading-relaxed max-w-4xl">
                Hier möchte ich einige persönliche Meilensteine aus meinem sportlichen Weg teilen.
              </p>
            </div>

            <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
              {successStories.map((story) => (
                <Card key={`${story.category}-${story.title}`} className="h-full">
                  <CardContent className="pt-6">
                    <div className="flex items-start gap-3 mb-4">
                      <Trophy className="w-6 h-6 shrink-0 text-secondary" />
                      <div>
                        <p className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                          {story.category}
                        </p>
                        <h3 className="text-lg font-semibold text-primary mt-1">{story.title}</h3>
                      </div>
                    </div>
                    <p className="text-gray-600 leading-relaxed">{story.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        <section className="py-14 sm:py-20" aria-label="Philosophie">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-5xl mb-10">
              <p className="text-sm font-semibold uppercase tracking-widest text-secondary mb-3">
                Mein Coaching-Ansatz
              </p>
              <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">Philosophie</h2>
              <p className="text-lg text-gray-600 leading-relaxed max-w-4xl">
                Gute Trainingsplanung verbindet Daten, Erfahrung und regelmäßigen Austausch. Diese
                fünf Prinzipien bilden die Grundlage meiner Arbeit.
              </p>
            </div>

            <div className="grid gap-5 md:grid-cols-2">
              {philosophyPoints.map((point, index) => {
                const Icon = point.icon;
                const isFeatured = index === 0;

                return (
                  <Card
                    key={point.number}
                    className={`h-full ${isFeatured ? "md:col-span-2 bg-accent border-none" : ""}`}
                  >
                    <CardContent className="pt-6 sm:p-8">
                      <div className="flex items-start gap-4 mb-5">
                        <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-primary text-primary-foreground">
                          <Icon className="h-5 w-5" />
                        </div>
                        <div>
                          <p className="text-xs font-semibold tracking-widest text-secondary">{point.number}</p>
                          <h3 className="text-xl sm:text-2xl font-semibold text-primary mt-1">{point.title}</h3>
                          <p className="text-gray-600 mt-2">{point.summary}</p>
                        </div>
                      </div>
                      <div className="text-gray-700 leading-relaxed">{point.text}</div>
                    </CardContent>
                  </Card>
                );
              })}
            </div>
          </div>
        </section>

        <section className="py-14 sm:py-20 bg-accent" aria-label="Call to action">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl sm:text-4xl font-bold text-primary mb-4">
              Bereit für den nächsten Schritt?
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto mb-8">
              Wenn du strukturiert trainieren und langfristig besser werden willst, schau dir die
              passenden Coaching-Angebote an oder kontaktiere mich direkt.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <a href="/#coaching">
                <Button variant="default" className="w-full sm:w-auto bg-[#003366] hover:bg-[#002244]">
                  Zum Coaching-Angebot <ArrowRight className="ml-2 w-4 h-4" />
                </Button>
              </a>
              <a href="/ueber-mich/#contact">
                <Button variant="outline" className="w-full border-primary text-primary hover:text-primary/70">
                  Kontakt aufnehmen
                </Button>
              </a>
            </div>
          </div>
        </section>

        <section id="contact" className="py-20 bg-primary text-white" aria-label="Kontakt">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-8">Kontakt</h2>
            <p className="text-2xl mb-12 text-center font-medium">
              Lass uns gemeinsam dein volles Potenzial ausschöpfen! <br /> Frage einfach über das
              Formular ein unverbindliches Erstgespräch fürs Coaching oder eine Diagnostik an!
            </p>

            <Suspense fallback={<div className="h-96 flex items-center justify-center text-white">Formular wird geladen...</div>}>
              <ContactForm />
            </Suspense>
          </div>
        </section>
      </main>

      <LightboxDialog
        isOpen={isCertificateOpen}
        onClose={() => setIsCertificateOpen(false)}
        imageSrc="/images/german_cycling_certificate.png"
        imageAlt="German Cycling (BDR) Coach Certificate"
      />

      <SiteFooter />
    </div>
  );
};

export default UeberMich;
