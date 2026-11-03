/**
 * Zulagen im Vergleich: alte Riester-Förderung (gilt für Bestandsverträge weiter) und neue Förderung
 * nach dem Altersvorsorgereformgesetz (ab 01.01.2027). Gleiche Regeln wie auf justavd.de.
 *
 * Alt: 175 € Grundzulage, 300 € je Kind (ab 2008 geboren). Volle Zulage nur mit Mindesteigenbeitrag:
 * 4 % des Vorjahres-Bruttos (höchstens 2.100 €) abzüglich Zulagen, mindestens 60 €. Darunter anteilig gekürzt.
 * Neu: 50 % auf die ersten 360 € Eigenbeitrag, 25 % auf bis zu 1.440 € mehr, höchstens 540 €;
 * je Kind 1 € pro eingezahltem Euro, höchstens 300 €.
 */

export const ALT = { grundzulage: 175, kinderzulage: 300, quote: 0.04, hoechstbetrag: 2100, sockel: 60 } as const;
export const NEU = { foerdergrenze: 1800, grundzulageMax: 540, kinderzulage: 300 } as const;

export function mindesteigenbeitragAlt(einkommen: number, kinder: number) {
  const voll = ALT.grundzulage + Math.max(0, kinder) * ALT.kinderzulage;
  return Math.max(ALT.sockel, Math.min(Math.max(0, einkommen) * ALT.quote, ALT.hoechstbetrag) - voll);
}

export function zulageAlt(eigenbeitragJahr: number, kinder: number, einkommen: number) {
  const voll = ALT.grundzulage + Math.max(0, kinder) * ALT.kinderzulage;
  return voll * Math.min(1, Math.max(0, eigenbeitragJahr) / mindesteigenbeitragAlt(einkommen, kinder));
}

export function zulageNeu(eigenbeitragJahr: number, kinder: number) {
  const eigen = Math.max(0, eigenbeitragJahr);
  const grund = Math.min(Math.min(eigen, 360) * 0.5 + Math.min(Math.max(eigen - 360, 0), NEU.foerdergrenze - 360) * 0.25, NEU.grundzulageMax);
  return grund + Math.max(0, kinder) * Math.min(eigen, NEU.kinderzulage);
}

export const euro = new Intl.NumberFormat("de-DE", { style: "currency", currency: "EUR", maximumFractionDigits: 0 });
