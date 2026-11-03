// Bildmarke: zwei Pfeile im Kreis (alt wird neu), unten in Rot
export default function Logo() {
  return (
    <span className="inline-flex items-center gap-2.5">
      <svg viewBox="0 0 32 32" className="h-8 w-8" aria-hidden="true">
        <rect width="32" height="32" rx="4" fill="#102a4c" />
        <path d="M9 13a7.5 7.5 0 0 1 13.4-3.2" fill="none" stroke="#fff" strokeWidth="2.6" strokeLinecap="round" />
        <path d="M23 19a7.5 7.5 0 0 1-13.4 3.2" fill="none" stroke="#e05a62" strokeWidth="2.6" strokeLinecap="round" />
        <path d="M23.6 5.6v5.2h-5.2" fill="none" stroke="#fff" strokeWidth="2.6" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M8.4 26.4v-5.2h5.2" fill="none" stroke="#e05a62" strokeWidth="2.6" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
      <span className="leading-tight">
        <span className="block text-base font-bold text-tinte">Riesteränderungen</span>
        <span className="block text-xs text-leise">Was 2027 für Ihren Vertrag gilt</span>
      </span>
    </span>
  );
}
