import React from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { Button } from "@/components/ui/button";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/components/ui/use-toast";
import { ArrowRight, Loader2, Mail } from "lucide-react"; // Mail-Icon hinzugefügt
import emailjs from 'emailjs-com';

const formSchema = z.object({
  name: z.string().min(2, "Name muss mindestens 2 Zeichen lang sein"),
  email: z.string().email("Bitte geben Sie eine gültige E-Mail-Adresse ein"),
  message: z.string().min(10, "Nachricht muss mindestens 10 Zeichen lang sein"),
});

export const ContactForm = () => {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = React.useState(false);

  // SCHALTER: Auf 'true' setzen, um den Hinweis für Kontaktformular-Fehler anzuzeigen. 
  const IS_TEMPORARILY_DISABLED = true;

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      message: "",
    },
  });

  const onSubmit = async (values: z.infer<typeof formSchema>) => {
    setIsSubmitting(true);

    try {
      const templateParams = {
        from_name: values.name,
        from_email: values.email,
        message: values.message,
        to_name: 'MaxCyclesCoaching',
      };

      await emailjs.send(
        'service_5qpb3yc', // EmailJS service ID
        'template_pl451cu', // EmailJS template ID
        templateParams,
        'WssuZiUGQBn1sT-NA' // EmailJS public key
      );

      toast({
        title: "Erfolgreich!",
        description: "Vielen Dank für deine Nachricht. Wir werden uns bald bei dir melden.",
      });
      
      form.reset();
    } catch (error) {
      console.error("Error sending email:", error);
      toast({
        title: "Fehler",
        description: "Es gab ein Problem beim Senden der Nachricht. Bitte versuche es später noch einmal.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  // Temporärer Hinweis bei Fehler mit Kontaktformular
  if (IS_TEMPORARILY_DISABLED) {
    return (
      <div className="max-w-2xl mx-auto bg-white rounded-lg p-10 text-gray-900 text-center shadow-sm border border-gray-100">
        <Mail className="w-12 h-12 mx-auto text-gray-400 mb-4" />
        <h3 className="text-2xl font-semibold mb-2">Kontaktformular vorübergehend deaktiviert</h3>
        <p className="text-gray-600 mb-6">
          Aufgrund von technischen Wartungsarbeiten ist dieses Formular kurzzeitig nicht verfügbar. 
          Bitte kontaktiere mich in der Zwischenzeit für Anfragen direkt per E-Mail:
        </p>
        <a 
          href="mailto:maxcyclescoaching@gmail.com" 
          className="inline-flex items-center justify-center px-6 py-3 bg-secondary text-secondary-foreground hover:bg-secondary/90 rounded-md font-medium transition-colors"
        >
          maxcyclescoaching@gmail.com
        </a>
      </div>
    );
  }

  // Das normale Formular, falls der Schalter auf false steht
  return (
    <div className="max-w-2xl mx-auto bg-white rounded-lg p-8 text-gray-900">
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
          <FormField
            control={form.control}
            name="name"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Name</FormLabel>
                <FormControl>
                  <Input placeholder="Dein Name" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          
          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem>
                <FormLabel>E-Mail</FormLabel>
                <FormControl>
                  <Input type="email" placeholder="max.mustermann@beispiel.de" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          
          <FormField
            control={form.control}
            name="message"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Nachricht</FormLabel>
                <FormControl>
                  <Textarea 
                    placeholder="Deine Nachricht" 
                    className="min-h-[150px]"
                    {...field} 
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          
          <Button 
            type="submit" 
            size="lg"
            variant="secondary"
            disabled={isSubmitting}
            className="w-full text-xl py-6 transform hover:scale-105 transition-all duration-200"
          >
            {isSubmitting ? (
              <>
                <Loader2 className="mr-2 h-6 w-6 animate-spin" /> Wird gesendet...
              </>
            ) : (
              <>
                Nachricht senden <ArrowRight className="ml-1 w-6 h-6" />
              </>
            )}
          </Button>
        </form>
      </Form>
    </div>
  );
};

export default ContactForm;