import emailjs from 'emailjs-com';

export const sendTestEmail = async () => {
  try {
    await emailjs.send(
      'service_5qpb3yc',
      'template_pl451cu',
      {
        from_name: "Automatischer Test",
        from_email: "test@maxcyclescoaching.com",
        message: "Dies ist eine automatisch generierte Testnachricht.",
        to_name: "MaxCyclesCoaching",
      },
      'WssuZiUGQBn1sT-NA'
    );
    console.log("Test-E-Mail erfolgreich gesendet!");
  } catch (error) {
    console.error("Fehler beim Senden der Test-E-Mail:", error);
  }
};