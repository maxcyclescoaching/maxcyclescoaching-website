export default function Page() {
  return (
    <main className="min-h-screen flex items-center justify-center p-6 text-center">
      <div>
        <h1 className="text-3xl font-bold text-primary mb-3">Seite nicht gefunden</h1>
        <p className="text-gray-600 mb-6">Die angefragte Seite existiert nicht oder wurde verschoben.</p>
        <a className="text-primary underline" href="/">
          Zur Startseite
        </a>
      </div>
    </main>
  );
}
