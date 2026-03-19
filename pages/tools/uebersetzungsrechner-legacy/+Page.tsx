import { useEffect } from "react";

export default function Page() {
  useEffect(() => {
    window.location.replace("/tools/uebersetzungsrechner");
  }, []);

  return (
    <main className="min-h-screen flex items-center justify-center p-6 text-center">
      <p>
        Du wirst weitergeleitet. Falls nichts passiert, klicke auf{" "}
        <a className="text-primary underline" href="/tools/uebersetzungsrechner">
          /tools/uebersetzungsrechner
        </a>
        .
      </p>
    </main>
  );
}
