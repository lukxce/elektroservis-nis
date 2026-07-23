import Image from "next/image";
import Link from "next/link";

import { Container } from "@/components/Container";
import { MobileMenu } from "@/components/MobileMenu";
import { getSiteSettings } from "@/lib/data";

const serviceLinks = [
  { href: "/usluge/elektroinstalacije", label: "Elektroinstalacije" },
  { href: "/usluge/rasveta", label: "Ugradnja rasvete" },
  { href: "/usluge/osiguraci-i-table", label: "Osigurači i table" },
  { href: "/usluge/uticnice-i-prekidaci", label: "Utičnice i prekidači" },
  { href: "/usluge/servis-uredjaja", label: "Servis kućnih uređaja" },
  { href: "/usluge/klima-uredjaji", label: "Ugradnja i servis klima uređaja" },
  { href: "/usluge/ev-punjaci", label: "Ugradnja EV punjača" },
];

const navLinks = [
  { href: "/cenovnik", label: "Cenovnik" },
  { href: "/blog", label: "Blog" },
  { href: "/kontakt", label: "Kontakt" },
];

export async function Header() {
  const settings = await getSiteSettings();

  return (
    <header className="sticky top-0 z-40 border-b border-black/5 bg-white/90 backdrop-blur">
      <div className="hidden bg-navy text-white sm:block">
        <Container className="flex items-center justify-between py-2 text-sm">
          <span>{settings.emergencyAvailability ?? settings.tagline}</span>
          <a href={`tel:${settings.phone.replace(/\s/g, "")}`} className="font-medium hover:text-accent">
            {settings.phone}
          </a>
        </Container>
      </div>

      {/* Mobilni red: burger levo, logo centrirano, CTA desno */}
      <Container className="relative grid grid-cols-[auto_1fr_auto] items-center gap-2 py-4 md:hidden">
        <div className="flex justify-start">
          <MobileMenu serviceLinks={serviceLinks} navLinks={navLinks} />
        </div>
        <Link href="/" className="flex min-w-0 items-center justify-center gap-2 text-base font-bold text-navy">
          <Image src="/images/logo.png" alt="" width={28} height={28} className="h-7 w-7 shrink-0" />
          <span className="truncate">{settings.title}</span>
        </Link>
        <div className="flex justify-end">
          <Link
            href="/kontakt"
            className="rounded-full bg-accent px-4 py-2 text-sm font-semibold text-navy transition hover:bg-accent-dark hover:text-white"
          >
            Kontakt
          </Link>
        </div>
      </Container>

      {/* Desktop red */}
      <Container className="hidden items-center justify-between py-4 md:flex">
        <Link href="/" className="flex items-center gap-2 text-lg font-bold text-navy">
          <Image src="/images/logo.png" alt="" width={32} height={32} className="h-8 w-8" />
          {settings.title}
        </Link>
        <nav className="flex items-center gap-6 text-sm font-medium text-navy">
          <div className="group relative">
            <Link href="/usluge" className="flex items-center gap-1 hover:text-accent-dark">
              Usluge
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="h-3.5 w-3.5">
                <path fillRule="evenodd" d="M5.23 7.21a.75.75 0 011.06.02L10 11.084l3.71-3.855a.75.75 0 111.08 1.04l-4.25 4.417a.75.75 0 01-1.08 0L5.21 8.27a.75.75 0 01.02-1.06z" clipRule="evenodd" />
              </svg>
            </Link>
            <div className="invisible absolute left-0 top-full w-64 rounded-2xl border border-black/5 bg-white p-2 opacity-0 shadow-lg transition group-hover:visible group-hover:opacity-100">
              {serviceLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="block rounded-xl px-4 py-2.5 text-sm text-navy hover:bg-surface hover:text-accent-dark"
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </div>
          {navLinks.map((link) => (
            <Link key={link.href} href={link.href} className="hover:text-accent-dark">
              {link.label}
            </Link>
          ))}
        </nav>
        <Link
          href="/kontakt"
          className="rounded-full bg-accent px-5 py-2 text-sm font-semibold text-navy transition hover:bg-accent-dark hover:text-white"
        >
          Zakažite izlazak
        </Link>
      </Container>
    </header>
  );
}
