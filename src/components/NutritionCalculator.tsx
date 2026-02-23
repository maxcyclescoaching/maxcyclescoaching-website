import { useEffect, useLayoutEffect, useMemo, useRef, useState } from "react";
import { HelpCircle } from "lucide-react";

/* ================= Konstanten ================= */

const saltLevels = {
  niedrig: 0.75,
  mittel: 1.5,
  hoch: 2.1
};

/* ================= Helper ================= */

function range7(value: number, decimals = 0) {
  const factor = Math.pow(10, decimals);

  return {
    min: Math.round(value * 0.93 * factor) / factor,
    max: Math.round(value * 1.07 * factor) / factor
  };
}

function hydrationFactor(duration: number) {
  if (duration <= 2) return 0.5;
  if (duration <= 4) return 0.6;
  if (duration <= 6) return 0.7;
  if (duration <= 8) return 0.75;
  if (duration <= 10) return 0.8;
  if (duration <= 12) return 0.83;
  if (duration <= 15) return 0.85;
  if (duration <= 24) return 0.87;
  return 0.9;
}

function carbBase(weight: number, ftp: number, duration: number) {

  const formulas = [
    { max: 0.5, calc: () => (40 + 0.6 * weight + ftp / 8) / 3 },
    { max: 1, calc: () => (60 + 0.9 * weight + ftp / 5.1) / 3 },
    { max: 1.5, calc: () => (75 + 1.1 * weight + ftp / 3.9) / 3 },
    { max: 2, calc: () => (90 + 1.3 * weight + ftp / 3.1) / 3 },
    { max: 3, calc: () => (120 + 1.7 * weight + ftp / 2.2) / 3 },
    { max: 4, calc: () => (120 + 1.7 * weight + ftp / 2.1) / 3 },
    { max: 5, calc: () => (110 + 1.6 * weight + ftp / 2.1) / 3 },
    { max: 6, calc: () => (110 + 1.6 * weight + ftp / 2.0) / 3 }
  ];

  for (const f of formulas) {
    if (duration <= f.max) return f.calc();
  }

  return (110 + 1.6 * weight + ftp / 2.0) / 3;
}

/* ================= Tooltip ================= */

const Tooltip = ({ text }: { text: string }) => {
  const [isOpen, setIsOpen] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);
  const popupRef = useRef<HTMLDivElement>(null);

  // Close on click/tap outside
  useEffect(() => {
    if (!isOpen) return;
    const handler = (e: MouseEvent | TouchEvent) => {
      if (containerRef.current && !containerRef.current.contains(e.target as Node)) {
        setIsOpen(false);
      }
    };
    document.addEventListener("mousedown", handler);
    document.addEventListener("touchstart", handler);
    return () => {
      document.removeEventListener("mousedown", handler);
      document.removeEventListener("touchstart", handler);
    };
  }, [isOpen]);

  // Keep tooltip within viewport
  useLayoutEffect(() => {
    if (!isOpen || !popupRef.current) return;
    const el = popupRef.current;
    // Reset any previous inline adjustments
    el.style.transform = "";
    const rect = el.getBoundingClientRect();
    const margin = 8;
    if (rect.left < margin) {
      el.style.transform = `translateX(${margin - rect.left}px)`;
    } else if (rect.right > window.innerWidth - margin) {
      el.style.transform = `translateX(${window.innerWidth - margin - rect.right}px)`;
    }
  }, [isOpen]);

  return (
    <div className="relative inline-block ml-2" ref={containerRef}>
      <button
        type="button"
        className="touch-manipulation"
        onClick={() => setIsOpen((prev) => !prev)}
        onMouseEnter={() => setIsOpen(true)}
        onMouseLeave={() => setIsOpen(false)}
        aria-label="Hilfe"
      >
        <HelpCircle className="w-4 h-4 text-gray-400" />
      </button>

      {isOpen && (
        <div
          ref={popupRef}
          className="absolute top-full mt-1 right-0 bg-gray-800 text-white text-sm p-3 rounded w-60 sm:w-72 z-50 shadow-lg"
        >
          {text}
        </div>
      )}
    </div>
  );
};

/* ================= Input ================= */

const Input = ({ label, value, setValue, placeholder, tooltip }: any) => (
  <div>
    <label className="font-semibold flex items-center text-sm sm:text-base">
      {label}
      {tooltip && <Tooltip text={tooltip} />}
    </label>
    <input
      type="number"
      value={value ?? ""}
      placeholder={placeholder}
      onChange={(e) =>
        setValue(e.target.value ? Number(e.target.value) : undefined)
      }
      className="w-full border rounded p-2.5 sm:p-2 mt-1 text-base"
    />
  </div>
);

/* ================= MAIN ================= */

export const NutritionCalculator = () => {

  const [weight, setWeight] = useState<number>();
  const [ftp, setFtp] = useState<number>();
  const [duration, setDuration] = useState<number>();
  const [sweatRate, setSweatRate] = useState<number>();
  const [saltLevel, setSaltLevel] = useState<"niedrig" | "mittel" | "hoch">("mittel");

  const result = useMemo(() => {

    if (!weight || !ftp || !duration) return null;

    const carbs = range7(carbBase(weight, ftp, duration));

    let hydration = null;
    if (sweatRate) {
      hydration = range7(sweatRate * hydrationFactor(duration), 0);
    }

    let salt = null;
    if (sweatRate) {
      salt = range7(saltLevels[saltLevel], 1);
    }

    return { carbs, hydration, salt };

  }, [weight, ftp, duration, sweatRate, saltLevel]);

  return (
    <div className="max-w-xl mx-auto bg-white shadow-lg rounded-xl p-4 sm:p-8 space-y-5 sm:space-y-6">

      <h3 className="text-xl sm:text-2xl font-semibold text-primary">
        Verpflegungsrechner
      </h3>

      <div className="grid sm:grid-cols-2 gap-4 sm:gap-6">

        <Input 
          label="FTP (W)" 
          value={ftp} 
          setValue={setFtp} 
          placeholder="z.B. 250" 
          tooltip="Functional Threshold Power – Die Schwellenleistung, die du über ca. eine Stunde halten kannst."
        />
        <Input 
          label="Gewicht (kg)" 
          value={weight} 
          setValue={setWeight} 
          placeholder="z.B. 73,5" 
        />
        <Input 
          label="Eventdauer (h)" 
          value={duration} 
          setValue={setDuration} 
          placeholder="z.B. 8,5" 
          tooltip="Die voraussichtliche Fahrzeit deines Events oder Trainings."
        />

        <div>
          <label className="font-semibold flex items-center text-sm sm:text-base">
            Schweißrate (ml/h)
            <Tooltip text="Flüssigkeitsverlust pro Stunde während Belastung. Zum Testen kann man sich bei einem einstündigen Training ohne Flüssigkeitszufuhr vorher und nachher ohne Kleidung wiegen." />
          </label>

          <input
            type="number"
            value={sweatRate ?? ""}
            placeholder="optional"
            onChange={(e) =>
              setSweatRate(e.target.value ? Number(e.target.value) : undefined)
            }
            className="w-full border rounded p-2.5 sm:p-2 mt-1 text-base"
          />
        </div>

        <div>
          <label className="font-semibold flex items-center text-sm sm:text-base">
            Salzverlust
            <Tooltip text="Salzgehalt des Schweißes, z.B. „hoch“ wählen, wenn du an heißen Tagen oft weiße Stellen an der Sportkleidung hast." />
          </label>
          <select
            className="w-full border rounded p-2.5 sm:p-2 mt-1 text-base"
            value={saltLevel}
            onChange={(e) => setSaltLevel(e.target.value as any)}
          >
            <option value="niedrig">Niedrig</option>
            <option value="mittel">Mittel</option>
            <option value="hoch">Hoch</option>
          </select>
        </div>

      </div>

      {/* Ergebnisfeld immer sichtbar */}

      <div className="bg-accent p-4 sm:p-6 rounded-lg space-y-2">

        <p>
          <b>Kohlenhydrate:</b>{" "}
          {result ? `${result.carbs.min} – ${result.carbs.max} g/h` : "—"}
        </p>

        <p>
          <b>Flüssigkeit:</b>{" "}
          {result?.hydration
            ? `${result.hydration.min} – ${result.hydration.max} ml/h`
            : "nicht angegeben"}
        </p>

        <p>
          <b>Salz:</b>{" "}
          {result?.salt
            ? `${result.salt.min.toLocaleString("de-DE")} – ${result.salt.max.toLocaleString("de-DE")} g/l`
            : "nicht angegeben"}
        </p>
      </div>

      </div>
  );
};
