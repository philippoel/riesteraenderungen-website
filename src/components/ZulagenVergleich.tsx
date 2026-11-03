"use client";

import { useState } from "react";
import { euro, mindesteigenbeitragAlt, zulageAlt, zulageNeu } from "@/lib/riester";

function Feld(p: { label: string; wert: string; min: number; max: number; step: number; value: number; onChange: (n: number) => void }) {
  return (
    <label className="block">
      <span className="flex items-baseline justify-between gap-3 text-sm">
        {p.label} <strong className="zahl text-lg text-tinte">{p.wert}</strong>
      </span>
      <input type="range" min={p.min} max={p.max} step={p.step} value={p.value} onChange={(e) => p.onChange(Number(e.target.value))} className="mt-2 w-full" />
    </label>
  );
}

export default function ZulagenVergleich() {
  const [rate, setRate] = useState(100);
  const [einkommen, setEinkommen] = useState(45000);
  const [kinder, setKinder] = useState(0);

  const beitrag = rate * 12;
  const alt = zulageAlt(beitrag, kinder, einkommen);
  const neu = zulageNeu(beitrag, kinder);
  const mindest = mindesteigenbeitragAlt(einkommen, kinder);
  const max = Math.max(alt, neu, 1);

  const zeilen = [
    { name: "Riester (alte Förderung)", wert: alt, klasse: "bg-leise" },
    { name: "Neue Förderung ab 2027", wert: neu, klasse: "bg-akzent" },
  ];

  return (
    <div className="grid gap-8 border-t-4 border-tinte bg-band p-5 sm:p-8 lg:grid-cols-2">
      <div className="space-y-6">
        <Feld label="Eigenbeitrag im Monat" wert={euro.format(rate)} min={10} max={175} step={5} value={rate} onChange={setRate} />
        <Feld label="Bruttoeinkommen im Vorjahr" wert={euro.format(einkommen)} min={10000} max={100000} step={1000} value={einkommen} onChange={setEinkommen} />
        <fieldset>
          <legend className="text-sm">Kinder mit Kindergeld</legend>
          <div className="mt-2 flex gap-2">
            {[0, 1, 2, 3].map((k) => (
              <button
                key={k}
                type="button"
                onClick={() => setKinder(k)}
                aria-pressed={kinder === k}
                className={`h-10 flex-1 rounded-md border text-sm font-medium ${kinder === k ? "border-akzent bg-akzent text-white" : "border-linie bg-white text-tinte hover:border-akzent"}`}
              >
                {k}
              </button>
            ))}
          </div>
        </fieldset>
      </div>

      <div aria-live="polite">
        <p className="text-sm">Zulagen pro Jahr bei {euro.format(beitrag)} Eigenbeitrag</p>
        <div className="mt-4 space-y-5">
          {zeilen.map((z) => (
            <div key={z.name}>
              <div className="flex items-baseline justify-between gap-3">
                <span className="font-medium text-tinte">{z.name}</span>
                <span className="zahl text-2xl font-bold text-tinte">{euro.format(z.wert)}</span>
              </div>
              <div className="mt-2 h-3 bg-white">
                <div className={`h-3 ${z.klasse}`} style={{ width: `${(z.wert / max) * 100}%` }} />
              </div>
            </div>
          ))}
        </div>
        <p className="mt-6 border-l-4 border-signal bg-white p-4 text-sm text-tinte">
          {neu > alt
            ? <>Mit der neuen Förderung bekämen Sie <strong className="zahl">{euro.format(neu - alt)}</strong> mehr Zulage im Jahr.</>
            : neu < alt
              ? <>Hier bringt die alte Riester-Förderung <strong className="zahl">{euro.format(alt - neu)}</strong> mehr Zulage im Jahr.</>
              : <>Beide Förderungen bringen hier gleich viel.</>}
          {alt < 175 + kinder * 300 - 0.5 && (
            <> Für die volle Riester-Zulage müssten Sie {euro.format(mindest)} im Jahr einzahlen, also {euro.format(mindest / 12)} im Monat.</>
          )}
        </p>
        <p className="mt-4 text-xs text-leise">
          Nur Zulagen, ohne Steuervorteil, Rendite und Kosten. Riester: Kinderzulage 300 € für Kinder ab Jahrgang 2008. Die Zulagen sind nur
          ein Teil der Entscheidung: Garantiezins, Kosten und Restlaufzeit Ihres Vertrags zählen genauso. Ohne Gewähr.
        </p>
      </div>
    </div>
  );
}
