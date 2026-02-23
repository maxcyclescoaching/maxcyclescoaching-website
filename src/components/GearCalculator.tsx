import { useMemo, useState } from "react";
import { HelpCircle } from "lucide-react";

/* ================= Tooltip-Komponente ================= */
const Tooltip = ({ text }: { text: string }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="relative inline-block ml-2">
      <button
        type="button"
        onClick={() => setIsOpen((p) => !p)}
        onMouseEnter={() => setIsOpen(true)}
        onMouseLeave={() => setIsOpen(false)}
        className="touch-manipulation"
      >
        <HelpCircle className="w-4 h-4 text-gray-400" />
      </button>

      {isOpen && (
        <div className="absolute left-0 mt-2 bg-gray-800 text-white text-sm p-3 rounded w-64 z-10 shadow-lg">
          {text}
        </div>
      )}
    </div>
  );
};

/* ================= Physik-Konstanten ================= */
const G = 9.81;
const RHO = 1.226;
const CDA = 0.4;
const CRR = 0.0035;
const DRIVETRAIN = 0.97;
const WHEEL_CIRC = 2.12;

/* ================= Herstellerdaten ================= */
const chainrings = {
  Shimano: [[50, 34],[52, 36],[54, 40],[53, 39]],
  SRAM: [[46, 33],[48, 35],[50, 37]],
  Campagnolo: [[53, 39],[52, 36],[50, 34],[48, 32]]
};

const cassettes = {
  Shimano: [
    { min: 11, max: 25 },
    { min: 11, max: 28 },
    { min: 11, max: 30 },
    { min: 11, max: 32 },
    { min: 11, max: 34 },
    { min: 11, max: 36 }
  ],
  SRAM: [
    { min: 10, max: 28 },
    { min: 10, max: 30 },
    { min: 10, max: 33 },
    { min: 10, max: 36 }
  ],
  Campagnolo: [
    { min: 10, max: 25 },
    { min: 10, max: 27 },
    { min: 10, max: 29 },
    { min: 10, max: 33 },
    { min: 11, max: 29 },
    { min: 11, max: 32 },
    { min: 11, max: 34 }
  ]
};

/* ================= Physik-Funktionen ================= */
function solveVelocity(power: number, mass: number, gradient: number) {
  const slope = gradient / 100;
  let v = 5;

  for (let i = 0; i < 30; i++) {
    const f =
      (mass * G * slope +
        mass * G * CRR +
        0.5 * RHO * CDA * v * v) *
        v -
      power * DRIVETRAIN;

    const df =
      mass * G * slope +
      mass * G * CRR +
      1.5 * RHO * CDA * v * v;

    v = v - f / df;
  }

  return v;
}

/* ================= GearCalculator ================= */
export const GearCalculator = () => {
  const [weight, setWeight] = useState<number>();
  const [equipment, setEquipment] = useState<number>();
  const [gradient, setGradient] = useState<number>();
  const [power, setPower] = useState<number>();
  const [cadence, setCadence] = useState<number>();

  const isGradientInvalid =
    gradient !== undefined && (gradient < 3 || gradient > 30);

  const handleGradientBlur = () => {
    if (gradient === undefined) return;
    if (gradient < 3) setGradient(3);
    if (gradient > 30) setGradient(30);
  };

  const result = useMemo(() => {
    if (!weight || !equipment || !gradient || !power || !cadence) return null;
    if (gradient < 3 || gradient > 30) return null;

    const mass = weight + equipment;
    const velocity = solveVelocity(power, mass, gradient);
    const kmh = (velocity * 3.6).toFixed(1);

    const requiredRatio =
      velocity / ((cadence / 60) * WHEEL_CIRC);

    const output: any = {};

    Object.keys(chainrings).forEach((brand) => {
      const ringResults: any[] = [];

      chainrings[brand as keyof typeof chainrings].forEach((ring) => {
        const valid = cassettes[
          brand as keyof typeof cassettes
        ]
          .filter(cass => ring[1] / cass.max <= requiredRatio)
          .sort((a,b)=>a.max-b.max);

        if (valid.length > 0) {
          ringResults.push({
            chainring: `${ring[0]}/${ring[1]}`,
            cassettes: valid.slice(0,5)
          });
        }
      });

      output[brand] = ringResults.slice(0,5);
    });

    return { kmh, brands: output };

  }, [weight, equipment, gradient, power, cadence]);

  return (
    <div className="max-w-2xl mx-auto bg-white shadow-lg rounded-xl p-8 space-y-6">

      <h3 className="text-2xl font-semibold text-primary">
        Übersetzungsrechner
      </h3>

      {/* ================= Input-Felder ================= */}
      <div className="grid grid-cols-2 gap-6">

        <div>
          <label className="font-semibold flex items-center">
            Körpergewicht (kg)
            <Tooltip text="Reines Körpergewicht ohne Rad oder Ausrüstung" />
          </label>
          <input type="number"
            onChange={(e)=>setWeight(Number(e.target.value))}
            className="w-full border p-2 rounded mt-1"/>
        </div>

        <div>
          <label className="font-semibold flex items-center">
            Ausrüstungsgewicht (kg)
            <Tooltip text="Gewicht von Rad, Flaschen, Anbauteilen, Werkzeug und Kleidung" />
          </label>
          <input type="number"
            onChange={(e)=>setEquipment(Number(e.target.value))}
            className="w-full border p-2 rounded mt-1"/>
        </div>

        <div>
          <label className="font-semibold flex items-center">
            Steigung (%)
            <Tooltip text="Steigung in Prozent. Mindestwert 3 %, Maximalwert 30 %" />
          </label>
          <input type="number"
            value={gradient ?? ""}
            onChange={(e)=>setGradient(Number(e.target.value))}
            onBlur={handleGradientBlur}
            className={`w-full border p-2 rounded mt-1 ${
              isGradientInvalid ? "bg-red-200 border-red-500" : ""
            }`}
          />
        </div>

        <div>
          <label className="font-semibold flex items-center">
            Leistung (W)
            <Tooltip text="Durchschnittliche Leistung am Berg bzw. Anstieg in Watt" />
          </label>
          <input type="number"
            onChange={(e)=>setPower(Number(e.target.value))}
            className="w-full border p-2 rounded mt-1"/>
        </div>

        <div className="col-span-2">
          <label className="font-semibold flex items-center">
            Trittfrequenz (rpm)
            <Tooltip text="Minimal gewünschte Kadenz am Berg. Typischerweise zwischen 75 und 95 rpm" />
          </label>
          <input type="number"
            onChange={(e)=>setCadence(Number(e.target.value))}
            className="w-full border p-2 rounded mt-1"/>
        </div>
      </div>

      {/* ================= Ergebnisse ================= */}
      <div className="bg-gray-50 p-6 rounded-xl space-y-6">
        <div className="text-lg">
          <b>Geschwindigkeit am Berg:</b> {result?.kmh ?? "—"} km/h
        </div>

        {result &&
          Object.entries(result.brands).map(([brand, rings]: any) => (
            <div key={brand} className="bg-white p-4 rounded-lg border shadow-sm">
              <div className="font-semibold text-primary mb-3">{brand}</div>

              {rings.length === 0 && (
                <div className="text-gray-500">Keine passende Kombination</div>
              )}

              {rings.map((r: any, i: number) => (
                <div key={i} className="mb-3 text-sm leading-relaxed">
                  <div className="font-medium">{r.chainring}</div>
                  <div className="text-gray-700">
                    mindestens {r.cassettes[0].min}-{r.cassettes[0].max}
                  </div>
                  {r.cassettes.length > 1 && (
                    <div className="text-gray-500">
                      auch möglich:{" "}
                      {r.cassettes
                        .slice(1)
                        .map((c: any) => `${c.min}-${c.max}`)
                        .join(", ")}
                    </div>
                  )}
                </div>
              ))}
            </div>
          ))}
      </div>
    </div>
  );
};