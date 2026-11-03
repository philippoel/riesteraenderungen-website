import type { Metadata, Viewport } from "next";
import { IBM_Plex_Sans } from "next/font/google";
import Link from "next/link";
import Logo from "@/components/Logo";
import { JUSTAVD, SITE_URL } from "@/lib/seite";
import "./globals.css";

// Wird beim Bauen heruntergeladen und von der Seite selbst ausgeliefert (keine Anfrage an Google)
const plex = IBM_Plex_Sans({ subsets: ["latin"], weight: ["400", "500", "600", "700"], variable: "--font-plex", display: "swap" });

export const viewport: Viewport = { themeColor: "#ffffff" };

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "Riester-Änderungen 2027: Was für Ihren Vertrag jetzt gilt",
    template: "%s | Riesteränderungen",
  },
  description:
    "Ab 2027 keine neuen Riester-Verträge mehr, neue Zulagen bis 540 €, Wechsel möglich: Alle Änderungen für Riester-Sparer, mit Zulagenvergleich alt gegen neu.",
  openGraph: { siteName: "Riesteränderungen", locale: "de_DE", type: "website" },
  formatDetection: { telephone: false },
};

const NAV = [
  { href: "/#zeitplan", text: "Zeitplan" },
  { href: "/#aenderungen", text: "Änderungen" },
  { href: "/#zulagen", text: "Zulagenvergleich" },
  { href: "/#moeglichkeiten", text: "Ihre Möglichkeiten" },
];

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="de" className={`h-full antialiased ${plex.variable}`}>
      <body className="flex min-h-full flex-col font-sans">
        <div className="bg-tinte px-4 py-2 text-center text-xs text-white sm:text-sm">
          <span className="font-semibold text-[#ffb3b8]">Beschlossen:</span> Ab 1. Januar 2027 gilt die neue geförderte Altersvorsorge.
        </div>
        <header className="sticky top-0 z-20 border-b-2 border-tinte bg-white">
          <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-4 py-3 sm:px-6">
            <Link href="/" aria-label="Riesteränderungen, zur Startseite">
              <Logo />
            </Link>
            <nav aria-label="Hauptnavigation" className="hidden gap-6 text-sm font-medium lg:flex">
              {NAV.map((n) => (
                <Link key={n.href} href={n.href} className="text-text hover:text-akzent hover:underline">
                  {n.text}
                </Link>
              ))}
            </nav>
          </div>
        </header>

        <div className="flex flex-1 flex-col">{children}</div>

        <footer className="mt-16 border-t-2 border-tinte bg-band text-sm">
          <div className="mx-auto grid max-w-6xl gap-8 px-4 py-10 sm:px-6 md:grid-cols-[2fr_1fr_1fr]">
            <div>
              <p className="font-bold text-tinte">Riesteränderungen</p>
              <p className="mt-2 max-w-md">
                Allgemeine Informationen zur Riester-Reform und zum Altersvorsorgereformgesetz. Keine Anlage- oder Steuerberatung, ohne Gewähr.
              </p>
              <p className="mt-3">
                Ein Angebot von Philipp Oelmann, Hannover. Persönliche Vertragsprüfung auf{" "}
                <a href={JUSTAVD} className="font-medium text-akzent underline underline-offset-2">justavd.de</a>.
              </p>
            </div>
            <div>
              <p className="font-semibold text-tinte">Themen</p>
              <ul className="mt-2 space-y-1.5">
                {NAV.map((n) => (
                  <li key={n.href}><Link href={n.href} className="hover:text-akzent hover:underline">{n.text}</Link></li>
                ))}
              </ul>
            </div>
            <div>
              <p className="font-semibold text-tinte">Rechtliches</p>
              <ul className="mt-2 space-y-1.5">
                <li><Link href="/impressum/" className="hover:text-akzent hover:underline">Impressum</Link></li>
                <li><Link href="/datenschutz/" className="hover:text-akzent hover:underline">Datenschutz</Link></li>
              </ul>
            </div>
          </div>
        </footer>
      </body>
    </html>
  );
}
