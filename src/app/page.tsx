import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";

import { Container } from "@/components/Container";
import { PlaceholderImage } from "@/components/PlaceholderImage";
import { BlogCard } from "@/components/BlogCard";
import { ClosingCta } from "@/components/ClosingCta";
import {
  getSiteSettings,
  getServicePages,
  getBlogPosts,
} from "@/lib/data";
import { formatServiceAreas } from "@/lib/format";
import { SITE_URL } from "@/lib/site-config";

export async function generateMetadata(): Promise<Metadata> {
  const settings = await getSiteSettings();
  const title = `Električar ${settings.city} | Montaža, servis i popravka instalacija`;
  const description = `Montaža, servis, popravka i dijagnostika električnih instalacija u ${settings.city}u i okolini. Dolazak isti dan, garancija na rad. Pozovite ${settings.phone}.`;

  return {
    title: { absolute: title },
    description,
    alternates: { canonical: "/" },
    openGraph: { title, description, type: "website", url: SITE_URL },
  };
}

export default async function HomePage() {
  const [settings, servicePages, posts] = await Promise.all([
    getSiteSettings(),
    getServicePages(),
    getBlogPosts(),
  ]);

  const experienceYears = settings.foundedYear
    ? new Date().getFullYear() - settings.foundedYear
    : undefined;

  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden bg-gradient-to-b from-surface via-surface to-white">
        <div
          className="pointer-events-none absolute inset-0 opacity-[0.35]"
          style={{
            backgroundImage: "radial-gradient(rgba(12,20,32,0.14) 1px, transparent 1px)",
            backgroundSize: "22px 22px",
            maskImage: "linear-gradient(to bottom, black, transparent 70%)",
          }}
        />
        <div className="pointer-events-none absolute -right-32 top-0 h-96 w-96 rounded-full bg-accent/15 blur-3xl" />
        <div className="pointer-events-none absolute -left-24 bottom-0 h-72 w-72 rounded-full bg-amber-300/10 blur-3xl" />
        <Container className="relative grid grid-cols-1 items-center gap-12 py-16 md:grid-cols-2 md:py-24">
          <div>
            <span className="inline-flex items-center gap-2 rounded-full border border-accent/25 bg-white px-3 py-1 text-sm font-semibold text-accent-dark shadow-sm">
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-accent opacity-60" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-accent" />
              </span>
              Dostupni danas u {settings.city}u
            </span>
            <h1 className="mt-5 text-4xl font-bold leading-[1.1] text-navy sm:text-6xl">
              <span className="bg-gradient-to-r from-accent to-amber-500 bg-clip-text text-transparent">
                Električar {settings.city}
              </span>
              <span className="mt-3 block text-xl font-semibold text-navy/70 sm:text-2xl">
                Elektroinstalacije, rasveta, servis uređaja i hitne intervencije
              </span>
            </h1>
            <p className="mt-5 max-w-md text-lg text-muted">
              Brz izlazak na teren, transparentne cene i pažljiv pristup{experienceYears ? ` i preko ${experienceYears} godina iskustva` : ""} sa instalacijama u stanovima, kućama i poslovnom prostoru.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link
                href="/kontakt"
                className="rounded-full bg-accent px-7 py-3.5 text-sm font-semibold text-navy shadow-lg shadow-accent/25 transition hover:bg-accent-dark hover:text-white"
              >
                Prijavite kvar
              </Link>
              <a
                href="#usluge"
                className="rounded-full border border-navy/15 bg-white/70 px-7 py-3.5 text-sm font-semibold text-navy backdrop-blur transition hover:bg-navy hover:text-white"
              >
                Pogledajte usluge
              </a>
            </div>
            <ul className="mt-9 flex flex-wrap gap-x-6 gap-y-2 text-sm text-navy/80">
              <li className="flex items-center gap-2">
                <span className="text-accent-dark">✓</span> Dolazak isti dan
              </li>
              <li className="flex items-center gap-2">
                <span className="text-accent-dark">✓</span> Garancija na sve radove
              </li>
              <li className="flex items-center gap-2">
                <span className="text-accent-dark">✓</span> Cena poznata unapred
              </li>
            </ul>
          </div>
          <div className="relative">
            {settings.heroImageUrl ? (
              <div className="relative h-72 w-full overflow-hidden rounded-3xl shadow-xl shadow-navy/10 sm:h-[26rem]">
                <Image src={settings.heroImageUrl} alt={settings.title} fill className="object-cover" />
              </div>
            ) : (
              <PlaceholderImage
                label="Hero slika: električar na terenu"
                className="h-72 w-full rounded-3xl shadow-xl shadow-navy/10 sm:h-[26rem]"
              />
            )}
            {experienceYears !== undefined && (
              <div className="absolute -bottom-5 left-5 flex items-center gap-3 rounded-2xl bg-white p-4 pr-6 text-navy shadow-xl ring-1 ring-black/5">
                <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-accent/15 text-xl">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" className="h-6 w-6 text-accent-dark">
                    <path d="M13 2 4 14h6l-1 8 10-13h-7l1-7Z" fill="currentColor" />
                  </svg>
                </span>
                <span>
                  <span className="block text-2xl font-bold leading-none">
                    {experienceYears}+
                  </span>
                  <span className="text-xs text-muted">godina iskustva</span>
                </span>
              </div>
            )}
            {settings.workingHours && (
              <div className="absolute -top-4 right-5 rounded-full bg-white/90 px-4 py-2 text-xs font-semibold text-navy shadow-md ring-1 ring-black/5 backdrop-blur">
                {settings.workingHours}
              </div>
            )}
          </div>
        </Container>
        {settings.trustBadges.length > 0 && (
          <div className="relative border-t border-black/5 bg-white/60 backdrop-blur">
            <Container className="py-4">
              <div
                className="relative overflow-hidden"
                style={{
                  maskImage:
                    "linear-gradient(to right, transparent, black 12%, black 88%, transparent)",
                }}
              >
                <div className="marquee-track flex w-max items-center gap-12">
                  {[...settings.trustBadges, ...settings.trustBadges].map((badge, i) => (
                    <span
                      key={`${badge}-${i}`}
                      className="flex items-center gap-2 whitespace-nowrap text-sm font-semibold uppercase tracking-widest text-navy/40"
                    >
                      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" className="spark-pulse h-3.5 w-3.5 text-accent">
                        <path d="M13 2 4 14h6l-1 8 10-13h-7l1-7Z" fill="currentColor" />
                      </svg>
                      {badge}
                    </span>
                  ))}
                </div>
              </div>
            </Container>
          </div>
        )}
      </section>

      {/* Featured services */}
      <section id="usluge" className="scroll-mt-24 py-16">
        <Container>
          <div className="flex items-end justify-between">
            <div>
              <span className="inline-flex items-center gap-2 text-sm font-semibold uppercase tracking-wide text-accent-dark">
                <span className="h-px w-6 bg-accent" />
                Usluge
              </span>
              <h2 className="mt-2 text-3xl font-bold text-navy sm:text-4xl">Oblasti usluga</h2>
            </div>
            <Link href="/usluge" className="hidden text-sm font-semibold text-accent-dark hover:underline sm:block">
              Sve usluge →
            </Link>
          </div>
          <div className="mt-8 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {servicePages.map((page) => (
              <Link
                key={page.slug}
                href={`/usluge/${page.slug}`}
                className="group flex flex-col rounded-2xl border border-black/5 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:border-accent/30 hover:shadow-lg"
              >
                <h3 className="font-semibold text-navy group-hover:text-accent-dark">
                  {page.title}
                </h3>
                {page.heroSubtitle && (
                  <p className="mt-2 text-sm text-muted">{page.heroSubtitle}</p>
                )}
                <span className="mt-4 text-sm font-semibold text-accent-dark">
                  Saznajte više →
                </span>
              </Link>
            ))}
          </div>
          <div className="mt-6 flex flex-col gap-3 sm:hidden">
            <Link
              href="/cenovnik"
              className="rounded-full bg-accent px-6 py-3 text-center text-sm font-semibold text-navy transition hover:bg-accent-dark hover:text-white"
            >
              Pogledajte cenovnik
            </Link>
            <Link
              href="/usluge"
              className="rounded-full border border-navy/15 px-6 py-3 text-center text-sm font-semibold text-navy transition hover:bg-navy hover:text-white"
            >
              Vidi sve usluge
            </Link>
          </div>
        </Container>
      </section>

      {/* How it works */}
      <section className="bg-surface py-16">
        <Container>
          <div className="mx-auto max-w-2xl text-center">
            <span className="inline-flex items-center gap-2 text-sm font-semibold uppercase tracking-wide text-accent-dark">
              <span className="h-px w-6 bg-accent" />
              Kako radimo
              <span className="h-px w-6 bg-accent" />
            </span>
            <h2 className="mt-2 text-3xl font-bold text-navy sm:text-4xl">
              Od poziva do rešenog kvara u tri koraka
            </h2>
          </div>
          <div className="relative mt-12 grid grid-cols-1 gap-10 sm:grid-cols-3 sm:gap-6">
            <div className="pointer-events-none absolute left-[16.66%] right-[16.66%] top-7 hidden border-t-2 border-dashed border-accent/30 sm:block" />
            {[
              {
                step: "1",
                title: "Pozovite ili pošaljite upit",
                text: "Opišite kvar ili šta vam treba. Odmah dobijate okvirnu cenu i termin, bez čekanja.",
              },
              {
                step: "2",
                title: "Dolazak i dijagnostika",
                text: "Električar izlazi na teren u dogovoreno vreme, utvrđuje uzrok i potvrđuje cenu pre početka rada.",
              },
              {
                step: "3",
                title: "Rešen problem, sa garancijom",
                text: "Radovi se završavaju na licu mesta kad god je moguće. Na sve radove dajemo garanciju.",
              },
            ].map((item) => (
              <div key={item.step} className="relative text-center">
                <span className="relative z-10 mx-auto flex h-14 w-14 items-center justify-center rounded-2xl bg-accent text-xl font-bold text-navy shadow-lg shadow-accent/25">
                  {item.step}
                </span>
                <h3 className="mt-5 text-lg font-semibold text-navy">{item.title}</h3>
                <p className="mx-auto mt-2 max-w-xs text-sm text-muted">{item.text}</p>
              </div>
            ))}
          </div>
          <div className="mt-12 text-center">
            <a
              href={`tel:${settings.phone.replace(/\s/g, "")}`}
              className="inline-block rounded-full bg-navy px-7 py-3.5 text-sm font-semibold text-white transition hover:bg-accent hover:text-navy"
            >
              Pozovite {settings.phone}
            </a>
          </div>
        </Container>
      </section>

      {/* About */}
      <section className="relative overflow-hidden bg-navy py-16 text-white">
        <div className="pointer-events-none absolute -right-24 top-0 h-72 w-72 rounded-full bg-accent/10 blur-3xl" />
        <Container className="relative grid grid-cols-1 items-center gap-10 md:grid-cols-2">
          {settings.aboutImageUrl ? (
            <div className="relative h-72 w-full overflow-hidden rounded-3xl ring-1 ring-white/10 sm:h-96">
              <Image src={settings.aboutImageUrl} alt={settings.title} fill className="object-cover" />
            </div>
          ) : (
            <PlaceholderImage
              label="Slika: električar na terenu"
              tone="navy"
              className="h-72 w-full rounded-3xl ring-1 ring-white/10 sm:h-96"
            />
          )}
          <div>
            <span className="text-sm font-semibold uppercase tracking-wide text-accent">
              O nama
            </span>
            <h2 className="mt-2 text-3xl font-bold">
              Stručan pristup svakoj instalaciji
            </h2>
            <p className="mt-4 text-white/70">
              {settings.title} pruža usluge montaže, servisa, popravke i
              dijagnostike električnih instalacija{settings.foundedYear ? ` od ${settings.foundedYear}. godine` : ""}.
              Pokrivamo: {formatServiceAreas(settings.city, settings.serviceAreas)}.
            </p>
            <p className="mt-3 text-white/70">
              Radimo po važećim tehničkim propisima, sa atestiranom opremom i
              pisanom dokumentacijom o merenjima.
            </p>
            <dl className={`mt-8 grid gap-4 border-y border-white/10 py-6 ${experienceYears !== undefined ? "grid-cols-3" : "grid-cols-2"}`}>
              {experienceYears !== undefined && (
                <div>
                  <dd className="text-3xl font-bold text-accent sm:text-4xl">
                    {experienceYears}+
                  </dd>
                  <dt className="mt-1 text-xs text-white/50">godina iskustva</dt>
                </div>
              )}
              <div>
                <dd className="text-3xl font-bold text-accent sm:text-4xl">7</dd>
                <dt className="mt-1 text-xs text-white/50">oblasti usluga</dt>
              </div>
              <div>
                <dd className="text-3xl font-bold text-accent sm:text-4xl">
                  {settings.serviceAreas.length}
                </dd>
                <dt className="mt-1 text-xs text-white/50">delova grada pokriveno</dt>
              </div>
            </dl>
            <div className="mt-8 flex flex-wrap gap-3">
              <a
                href={`tel:${settings.phone.replace(/\s/g, "")}`}
                className="rounded-full bg-accent px-6 py-3 text-sm font-semibold text-navy shadow-lg shadow-accent/25 transition hover:bg-accent-dark hover:text-white"
              >
                Pozovite {settings.phone}
              </a>
              <Link
                href="/kontakt"
                className="rounded-full border border-white/20 px-6 py-3 text-sm font-semibold text-white transition hover:bg-white hover:text-navy"
              >
                Kontakt
              </Link>
            </div>
          </div>
        </Container>
      </section>

      {/* CTA strip */}
      <section className="py-16">
        <Container className="grid grid-cols-1 gap-6 sm:grid-cols-3">
          {[
            {
              href: "/cenovnik",
              eyebrow: "Cenovnik",
              title: "Proverite cene usluga",
              text: "Elektroinstalacije, rasveta, osigurači, utičnice, servis uređaja i klime, po kategorijama.",
              icon: (
                <path d="M9 7h6m-6 4h6m-6 4h3M5 3h14a1 1 0 0 1 1 1v16a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1Z" />
              ),
            },
            {
              href: "/usluge",
              eyebrow: "Usluge",
              title: "Sve što radimo",
              text: "Od nove instalacije do hitne intervencije, pregledajte šta svaka usluga uključuje.",
              icon: (
                <path d="M13 2 4 14h6l-1 8 10-13h-7l1-7Z" />
              ),
            },
            {
              href: "/kontakt",
              eyebrow: "Kvar",
              title: "Prijavite kvar",
              text: "Opišite problem i dogovorite izlazak električara, po potrebi i hitno.",
              icon: (
                <path d="m14.7 6.3 3 3L8 19H5v-3l9.7-9.7Zm2-2 1.6-1.6a1 1 0 0 1 1.4 0l1.6 1.6a1 1 0 0 1 0 1.4L19.7 7.3l-3-3Z" />
              ),
            },
          ].map((card) => (
            <Link
              key={card.href}
              href={card.href}
              className="group rounded-2xl border border-black/5 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:border-accent/30 hover:shadow-lg"
            >
              <div className="flex items-start justify-between">
                <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-accent/15 text-accent-dark transition group-hover:bg-accent group-hover:text-navy">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.8"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="h-5 w-5"
                  >
                    {card.icon}
                  </svg>
                </span>
                <span className="text-accent-dark opacity-0 transition group-hover:translate-x-1 group-hover:opacity-100">
                  →
                </span>
              </div>
              <span className="mt-4 block text-xs font-semibold uppercase tracking-wide text-accent-dark">
                {card.eyebrow}
              </span>
              <h3 className="mt-1 text-lg font-semibold text-navy">{card.title}</h3>
              <p className="mt-1 text-sm text-muted">{card.text}</p>
            </Link>
          ))}
        </Container>
      </section>

      {/* Blog preview */}
      <section className="bg-surface py-16">
        <Container>
          <div className="flex items-end justify-between">
            <div>
              <span className="inline-flex items-center gap-2 text-sm font-semibold uppercase tracking-wide text-accent-dark">
                <span className="h-px w-6 bg-accent" />
                Blog
              </span>
              <h2 className="mt-2 text-3xl font-bold text-navy sm:text-4xl">Korisni tekstovi o instalacijama</h2>
            </div>
            <Link href="/blog" className="hidden text-sm font-semibold text-accent-dark hover:underline sm:block">
              Ceo blog →
            </Link>
          </div>
          <div className="mt-8 grid grid-cols-1 gap-6 sm:grid-cols-3">
            {posts.slice(0, 3).map((post) => (
              <BlogCard key={post.slug} post={post} />
            ))}
          </div>
        </Container>
      </section>

      <ClosingCta phone={settings.phone} />
    </>
  );
}
