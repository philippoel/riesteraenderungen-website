import ZulagenVergleich from "@/components/ZulagenVergleich";
import { JUSTAVD, STAND } from "@/lib/seite";

const KURZ = [
  "Ab dem 1. Januar 2027 werden keine neuen Riester-Verträge mehr abgeschlossen.",
  "Ihr bestehender Vertrag läuft mit der bisherigen Förderung weiter. Sie müssen nichts tun.",
  "Sie können in die neue Förderung wechseln. Bisherige Zulagen behalten Sie, zurück geht es dann aber nicht mehr.",
  "Die neue Grundzulage ist mit bis zu 540 € im Jahr gut dreimal so hoch wie die alte mit 175 €.",
];

const ZEITPLAN = [
  { datum: "27. März 2026", text: "Der Bundestag beschließt das Altersvorsorgereformgesetz." },
  { datum: "8. Mai 2026", text: "Der Bundesrat stimmt zu. Damit steht die Reform." },
  { datum: "31. Dezember 2026", text: "Letzter Tag, um für 2026 noch Beiträge einzuzahlen und die Riester-Zulage für dieses Jahr zu sichern." },
  { datum: "1. Januar 2027", text: "Die neue Förderung startet. Neue Riester-Verträge gibt es ab jetzt nicht mehr, dafür das Altersvorsorgedepot und neue Garantieprodukte." },
];

const AENDERUNGEN: [string, string, string][] = [
  ["Grundzulage", "175 € im Jahr", "bis 540 € im Jahr: 50 % auf die ersten 360 €, 25 % auf bis zu 1.440 € mehr"],
  ["Kinderzulage", "300 € je Kind (ab Jahrgang 2008)", "1 € je eingezahltem Euro, bis 300 € je Kind"],
  ["Voraussetzung für volle Zulage", "Mindesteigenbeitrag: 4 % des Vorjahresbruttos minus Zulagen", "kein Mindesteigenbeitrag, die Zulage wächst mit dem Beitrag"],
  ["Beitragsgarantie", "Pflicht: 100 % der Beiträge", "frei wählbar: keine, 80 % oder 100 %"],
  ["Anlage", "meist Versicherung oder Fondssparplan mit Garantie", "auch reines Depot mit Fonds und ETFs"],
  ["Kosten", "keine Obergrenze", "Standardprodukt mit höchstens 1,0 % Effektivkosten im Jahr"],
  ["Selbstständige", "meist nicht förderberechtigt", "förderberechtigt"],
  ["Auszahlung", "ab 62 (Verträge ab 2012), Rente oder Auszahlplan", "frühestens ab 65, Rente oder Auszahlungsplan bis mindestens 85, einmal bis 30 %"],
];

const MOEGLICHKEITEN = [
  {
    titel: "Weiterlaufen lassen",
    text: "Der Vertrag bleibt, wie er ist, mit der alten Förderung. Das passt oft zu älteren Verträgen mit hohem Garantiezins oder wenn die Rente nicht mehr weit weg ist.",
  },
  {
    titel: "Beitragsfrei stellen",
    text: "Das Guthaben bleibt im Vertrag und behält seine Förderung. Neue Beiträge zahlen Sie in ein neues Produkt. Laufende Kosten im alten Vertrag fallen aber weiter an.",
  },
  {
    titel: "In die neue Förderung wechseln",
    text: "Das Guthaben wird übertragen, ab dann gelten die neuen Zulagen und Regeln. Lohnt sich eher bei hohen Kosten, geringer Rendite und vielen Jahren bis zur Rente. Der Wechsel ist endgültig.",
  },
];

const CHECKLISTE = [
  "Die letzte jährliche Standmitteilung Ihres Anbieters heraussuchen",
  "Garantiezins und Effektivkosten notieren",
  "Ausrechnen, wie viele Jahre es noch bis zur Rente sind",
  "Prüfen, ob Sie 2026 genug eingezahlt haben, um die volle Zulage zu bekommen",
  "Klären, ob Sie schon Geld für eine Immobilie entnommen haben (Wohn-Riester)",
  "Erst vergleichen, dann entscheiden, und auf keinen Fall vorschnell kündigen",
];

const FRAGEN = [
  {
    frage: "Muss ich wegen der Reform etwas mit meinem Riester-Vertrag machen?",
    antwort: "Nein. Bestehende Verträge haben Bestandsschutz und laufen mit der bisherigen Förderung weiter. Ein Wechsel ist eine Möglichkeit, keine Pflicht.",
  },
  {
    frage: "Verliere ich beim Wechsel meine bisherigen Zulagen?",
    antwort: "Nein. Bei einem Wechsel in die neue Förderung müssen bereits erhaltene Zulagen nicht zurückgezahlt werden. Ihr Vertrag läuft danach aber nur noch nach den neuen Regeln.",
  },
  {
    frage: "Sollte ich meinen Riester-Vertrag kündigen?",
    antwort: "Fast nie. Bei einer Kündigung fordert der Staat Zulagen und Steuervorteile zurück. Weiterlaufen lassen, beitragsfrei stellen oder wechseln sind in aller Regel besser.",
  },
  {
    frage: "Kann ich 2026 noch einen Riester-Vertrag abschließen?",
    antwort: "Bis Ende 2026 ist das grundsätzlich noch möglich, ab dem 1. Januar 2027 nicht mehr. Wer jetzt neu anfangen will, sollte sich die neuen Produkte ansehen und vergleichen, bevor man sich noch an die alten Regeln bindet.",
  },
  {
    frage: "Bekomme ich die neue, höhere Zulage auch für meinen alten Vertrag?",
    antwort: "Nur wenn Sie in die neue Förderung wechseln. Solange der Vertrag nach altem Recht weiterläuft, gibt es die alte Zulage von 175 € plus Kinderzulagen.",
  },
];

export default function Startseite() {
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: FRAGEN.map((f) => ({ "@type": "Question", name: f.frage, acceptedAnswer: { "@type": "Answer", text: f.antwort } })),
  };

  return (
    <main>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

      <section className="mx-auto grid max-w-6xl gap-10 px-4 pt-12 pb-12 sm:px-6 sm:pt-16 lg:grid-cols-[1.4fr_1fr]">
        <div>
          <p className="text-sm font-semibold text-signal">Riester-Reform 2027</p>
          <h1 className="mt-3 text-4xl font-bold leading-tight sm:text-5xl">Riester ändert sich. Was heißt das für Ihren Vertrag?</h1>
          <p className="mt-5 text-lg">
            Millionen Menschen sparen mit Riester fürs Alter. Ab 2027 gelten für die geförderte Altersvorsorge neue Regeln. Hier
            steht, was sich ändert, was gleich bleibt und welche Möglichkeiten Sie mit Ihrem bestehenden Vertrag haben.
          </p>
          <a href="#zulagen" className="mt-8 inline-flex rounded-md bg-akzent px-6 py-3 font-semibold text-white hover:bg-akzent-dunkel">
            Alte und neue Zulage vergleichen
          </a>
        </div>
        <aside className="border-l-4 border-signal bg-band p-6">
          <h2 className="text-lg font-bold">Das Wichtigste in 30 Sekunden</h2>
          <ul className="mt-4 space-y-3">
            {KURZ.map((k) => (
              <li key={k} className="flex gap-3">
                <span aria-hidden="true" className="mt-2 h-2 w-2 shrink-0 bg-signal" />
                <span>{k}</span>
              </li>
            ))}
          </ul>
        </aside>
      </section>

      <section id="zeitplan" className="mx-auto max-w-6xl px-4 py-10 sm:px-6">
        <h2 className="text-3xl font-bold">Der Zeitplan</h2>
        <ol className="mt-8 grid gap-0 md:grid-cols-4">
          {ZEITPLAN.map((z, i) => (
            <li key={z.datum} className="relative border-l-2 border-linie pb-8 pl-6 md:border-l-0 md:border-t-2 md:pt-6 md:pr-6 md:pl-0">
              <span
                aria-hidden="true"
                className={`absolute -left-[7px] top-1 h-3 w-3 md:-top-[7px] md:left-0 ${i === ZEITPLAN.length - 1 ? "bg-signal" : "bg-tinte"}`}
              />
              <p className="zahl font-bold text-tinte">{z.datum}</p>
              <p className="mt-2 text-sm">{z.text}</p>
            </li>
          ))}
        </ol>
      </section>

      <section id="aenderungen" className="mx-auto max-w-6xl px-4 py-10 sm:px-6">
        <h2 className="text-3xl font-bold">Was sich ändert: alt und neu</h2>
        <p className="mt-3 max-w-2xl">
          Links die Regeln, die für Ihren bestehenden Riester-Vertrag weiter gelten. Rechts die neue Förderung ab 2027, für neue Verträge
          und für alle, die wechseln.
        </p>
        <dl className="mt-8 divide-y divide-linie border-y-2 border-tinte md:hidden">
          {AENDERUNGEN.map(([thema, alt, neu]) => (
            <div key={thema} className="py-4 text-sm">
              <dt className="font-bold text-tinte">{thema}</dt>
              <dd className="mt-2 grid grid-cols-[4.5rem_1fr] gap-x-3 gap-y-1">
                <span className="text-leise">Bisher</span>
                <span>{alt}</span>
                <span className="font-semibold text-signal">Ab 2027</span>
                <span>{neu}</span>
              </dd>
            </div>
          ))}
        </dl>
        <table className="mt-8 hidden w-full border-y-2 border-tinte text-left text-sm md:table">
          <thead>
            <tr className="border-b border-linie">
              <th scope="col" className="py-3 pr-4 font-semibold"><span className="sr-only">Thema</span></th>
              <th scope="col" className="py-3 pr-4 font-semibold text-leise">Riester (Bestand)</th>
              <th scope="col" className="py-3 font-semibold text-signal">Neue Förderung ab 2027</th>
            </tr>
          </thead>
          <tbody>
            {AENDERUNGEN.map(([thema, alt, neu]) => (
              <tr key={thema} className="border-b border-linie align-top last:border-0">
                <th scope="row" className="w-1/5 py-3 pr-4 font-semibold text-tinte">{thema}</th>
                <td className="w-2/5 py-3 pr-4">{alt}</td>
                <td className="w-2/5 py-3">{neu}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </section>

      <section id="zulagen" className="mx-auto max-w-6xl px-4 py-10 sm:px-6">
        <h2 className="text-3xl font-bold">Alte gegen neue Zulage</h2>
        <p className="mt-3 max-w-2xl">
          Wie viel Zulage bekommen Sie heute mit Riester, und wie viel wären es nach den neuen Regeln? Stellen Sie Ihren Beitrag und Ihr
          Einkommen ein.
        </p>
        <div className="mt-8">
          <ZulagenVergleich />
        </div>
      </section>

      <section id="moeglichkeiten" className="mx-auto max-w-6xl px-4 py-10 sm:px-6">
        <h2 className="text-3xl font-bold">Drei Möglichkeiten für Ihren Vertrag</h2>
        <div className="mt-8 grid gap-6 md:grid-cols-3">
          {MOEGLICHKEITEN.map((m, i) => (
            <article key={m.titel} className="border-t-4 border-tinte pt-4">
              <p className="zahl text-3xl font-bold text-linie">{i + 1}</p>
              <h3 className="mt-1 text-lg font-bold">{m.titel}</h3>
              <p className="mt-2">{m.text}</p>
            </article>
          ))}
        </div>
        <p className="mt-8 border-l-4 border-signal bg-signal-hell p-4 text-tinte">
          <strong>Nicht kündigen:</strong> Bei einer Kündigung werden Zulagen und Steuervorteile zurückgefordert. Das ist fast immer die
          teuerste Lösung.
        </p>
      </section>

      <section className="mx-auto grid max-w-6xl gap-10 px-4 py-10 sm:px-6 lg:grid-cols-2">
        <div>
          <h2 className="text-3xl font-bold">Checkliste für Ihren Vertrag</h2>
          <p className="mt-3">In einer Viertelstunde wissen Sie, wo Sie stehen.</p>
          <ol className="mt-6 space-y-3">
            {CHECKLISTE.map((c, i) => (
              <li key={c} className="flex gap-4 border-b border-linie pb-3">
                <span className="zahl w-6 shrink-0 font-bold text-signal">{i + 1}.</span>
                <span>{c}</span>
              </li>
            ))}
          </ol>
        </div>
        <div>
          <h2 className="text-3xl font-bold">Häufige Fragen</h2>
          <div className="mt-6 divide-y divide-linie border-y border-linie">
            {FRAGEN.map((f) => (
              <details key={f.frage} className="group py-4">
                <summary className="flex cursor-pointer list-none items-start justify-between gap-4 font-semibold text-tinte">
                  {f.frage}
                  <span aria-hidden="true" className="text-signal group-open:hidden">▾</span>
                  <span aria-hidden="true" className="hidden text-signal group-open:inline">▴</span>
                </summary>
                <p className="mt-2">{f.antwort}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto w-full max-w-6xl px-4 py-10 sm:px-6">
        <div className="bg-tinte p-8 text-white sm:p-10">
          <h2 className="text-3xl font-bold text-white">Ihren Vertrag prüfen lassen</h2>
          <p className="mt-3 max-w-2xl text-[#c9d6e8]">
            Ob Weiterlaufen, Beitragsfreistellung oder Wechsel: Philipp Oelmann aus Hannover rechnet Ihren Riester-Vertrag mit allen
            Kosten gegen die neue Förderung. Das Erstgespräch ist kostenlos.
          </p>
          <a href={`${JUSTAVD}/riester-check/`} className="mt-6 inline-flex rounded-md bg-white px-6 py-3 font-semibold text-tinte hover:bg-band">
            Zum Riester-Check auf justavd.de
          </a>
        </div>
        <p className="mt-6 text-xs text-leise">
          Stand: {STAND}. Grundlage ist das Altersvorsorgereformgesetz (Bundestag 27.03.2026, Bundesrat 08.05.2026). Einzelheiten können
          sich durch Vorgaben der Verwaltung noch ändern. Allgemeine Information, keine Beratung.
        </p>
      </section>
    </main>
  );
}
