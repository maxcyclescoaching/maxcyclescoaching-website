import { Navbar } from "@/components/Navbar";
import { SiteFooter } from "@/components/SiteFooter";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import { ArrowRight, CheckCircle2, type LucideIcon } from "lucide-react";
import { lazy, Suspense } from "react";

const ContactForm = lazy(() => import("@/components/ContactForm"));

export type CategoryPageConfig = {
  eyebrow: string;
  title: string;
  description: string;
  audience: string[];
  focus: { title: string; text: string }[];
  raceFocus: { title: string; text: string }[];
  faqs: { question: string; answer: string }[];
  icon: LucideIcon;
};

type CoachingCyclingCategoryProps = {
  config: CategoryPageConfig;
};

export const CoachingCyclingCategory = ({ config }: CoachingCyclingCategoryProps) => {
  const Icon = config.icon;

  return (
    <div className="min-h-screen bg-white flex flex-col">
      <Navbar />

      <main className="flex-grow">
        <section className="bg-accent pt-24 pb-12 sm:pt-32 sm:pb-16">
          <div className="max-w-5xl mx-auto px-4">
            <nav aria-label="Breadcrumb" className="text-sm text-muted-foreground mb-6">
              <a href="/#coaching" className="hover:text-primary">Radsport-Coaching</a>
              <span className="mx-2">/</span>
              <span>{config.title}</span>
            </nav>
            <div className="flex items-start gap-4">
              <div className="hidden sm:flex h-14 w-14 shrink-0 items-center justify-center rounded-full bg-primary text-primary-foreground">
                <Icon className="h-7 w-7" />
              </div>
              <div>
                <h1 className="text-3xl sm:text-5xl font-bold text-primary mb-5">{config.title}</h1>
                <p className="text-sm font-semibold uppercase tracking-widest text-secondary mb-3">{config.eyebrow}</p>
              </div>
            </div>
          </div>
        </section>

        <section className="py-14 sm:py-20" aria-label="Überblick">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid gap-8 lg:grid-cols-[minmax(0,1.2fr)_minmax(0,0.8fr)] items-start lg:items-center">
              <div>
                <h2 className="text-3xl font-bold text-primary mb-5">Coaching für dein Ziel</h2>
                <p className="text-lg text-gray-700 leading-relaxed whitespace-pre-line">{config.description}</p>
              </div>
              <Card className="bg-accent border-none">
                <CardHeader>
                  <CardTitle className="text-primary">Für wen ist das geeignet?</CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  {config.audience.map((item) => (
                    <div key={item} className="flex items-start gap-3 text-gray-700">
                      <CheckCircle2 className="w-5 h-5 mt-0.5 shrink-0 text-secondary" />
                      <span>{item}</span>
                    </div>
                  ))}
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        <section className="py-14 sm:py-20 bg-accent" aria-label="Trainingsschwerpunkte">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl mb-10">
              <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">Trainingsschwerpunkte</h2>
              <p className="text-sm font-semibold uppercase tracking-widest text-secondary">Worauf wir im Training für deine spezifischen Ziele achten</p>
            </div>
            <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
              {config.focus.map((item) => (
                <Card key={item.title} className="h-full">
                  <CardHeader>
                    <CardTitle className="text-primary">{item.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-600 leading-relaxed">{item.text}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        <section className="py-14 sm:py-20" aria-label="Rennentscheidende Faktoren">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl mb-10">
              <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">Was für dein Rennen entscheidend ist</h2>
              <p className="text-sm font-semibold uppercase tracking-widest text-secondary">Was über das Training hinaus dein Event beeinflusst</p>
            </div>
            <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
              {config.raceFocus.map((item) => (
                <Card key={item.title} className="h-full">
                  <CardHeader>
                    <CardTitle className="text-primary">{item.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-600 leading-relaxed">{item.text}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        <section className="py-14 sm:py-20 bg-accent" aria-label="Häufige Fragen">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-8">Häufige Fragen</h2>
            <Card>
              <CardContent className="p-0">
                <Accordion type="single" collapsible className="w-full">
                  {config.faqs.map((faq, index) => (
                    <AccordionItem key={faq.question} value={`faq-${index}`}>
                      <AccordionTrigger className="px-5 sm:px-6 text-left">{faq.question}</AccordionTrigger>
                      <AccordionContent className="px-5 sm:px-6 pb-5 text-gray-700 leading-relaxed">{faq.answer}</AccordionContent>
                    </AccordionItem>
                  ))}
                </Accordion>
              </CardContent>
            </Card>
          </div>
        </section>

        <section className="py-14 sm:py-20" aria-label="Nächster Schritt">
          <div className="max-w-4xl mx-auto px-4 text-center">
            <h2 className="text-3xl sm:text-4xl font-bold text-primary mb-4">Bereit für den nächsten Schritt?</h2>
            <p className="text-lg text-gray-600 leading-relaxed mb-8">Beschreibe hier kurz den gewünschten nächsten Schritt und verlinke auf dein Erstgespräch oder das Kontaktformular.</p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <a href="/#coaching">
                <Button className="w-full sm:w-auto bg-[#003366] hover:bg-[#002244]">
                  Zu meinen Coaching-Paketen <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </a>
              <a href="#contact">
                <Button variant="outline" className="w-full sm:w-auto border-primary text-primary hover:text-primary/70">
                  Unverbindlich anfragen
                </Button>
              </a>
            </div>
          </div>
        </section>

        <section id="contact" className="py-20 bg-primary text-white" aria-label="Kontakt">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-8">Kontakt</h2>
            <p className="text-2xl mb-12 text-center font-medium">Lass uns dein nächstes Radsportziel gemeinsam planen.</p>
            <Suspense fallback={<div className="h-96 flex items-center justify-center text-white">Formular wird geladen...</div>}>
              <ContactForm />
            </Suspense>
          </div>
        </section>
      </main>

      <SiteFooter />
    </div>
  );
};
