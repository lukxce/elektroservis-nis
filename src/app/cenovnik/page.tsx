import type { Metadata } from "next";
import Link from "next/link";

import { Container } from "@/components/Container";
import { PageHero } from "@/components/PageHero";
import { ClosingCta } from "@/components/ClosingCta";
import { JsonLd } from "@/components/JsonLd";
import { getServices, getSiteSettings } from "@/lib/data";
import { formatRsd, serviceCategoryLabel } from "@/lib/format";
import { SITE_URL } from "@/lib/site-config";

export async function generateMetadata(): Promise<Metadata> {
  const settings = await getSiteSettings();
  const title =
    settings.seoCenovnik?.title ?? `Cenovnik usluga električara u ${settings.city}u`;
  const description =
    settings.seoCenovnik?.description ??
    `Pregledan cenovnik elektroinstalacija, rasvete, osigurača, utičnica, servisa uređaja i klima u ${settings.city}u. Pozovite ${settings.phone} za tačnu ponudu.`;

  return {
    title,
    description,
    alternates: { canonical: "/cenovnik" },
    openGraph: { title, description, type: "website", url: `${SITE_URL}/cenovnik` },
  };
}

const categoryOrder = [
  "elektroinstalacije",
  "rasveta",
  "osiguraci-i-table",
  "uticnice-i-prekidaci",
  "servis-uredjaja",
  "klima-uredjaji",
  "ev-punjaci",
];

export default async function CenovnikPage() {
  const [services, settings] = await Promise.all([getServices(), getSiteSettings()]);

  const grouped = categoryOrder
    .map((category) => ({
      category,
      items: services.filter((s) => s.category === category),
      total: services.filter((s) => s.category === category).length,
    }))
    .filter((group) => group.total > 0);

  const experienceYears = settings.foundedYear
    ? new Date().getFullYear() - settings.foundedYear
    : undefined;

  const breadcrumbJsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Početna", item: SITE_URL },
      { "@type": "ListItem", position: 2, name: "Cenovnik usluga", item: `${SITE_URL}/cenovnik` },
    ],
  };

  const servicesJsonLd = services.map((service) => ({
    "@context": "https://schema.org",
    "@type": "Service",
    serviceType: service.title,
    provider: { "@type": "Electrician", name: settings.title, telephone: settings.phone },
    areaServed: settings.city,
    offers: {
      "@type": "Offer",
      priceCurrency: "RSD",
      price: service.priceFrom,
      description: service.priceNote,
    },
  }));

  return (
    <>
      <JsonLd data={breadcrumbJsonLd} />
      {servicesJsonLd.map((data, i) => (
        <JsonLd key={i} data={data} />
      ))}

      <PageHero
        eyebrow="Cenovnik usluga"
        title="Cenovnik usluga električara u Nišu"
        subtitle={`Kompletan pregled cena ${settings.title}, po kategorijama usluga. Sve cene su orijentacione i zavise od obima posla, pristupačnosti instalacije i utrošenog materijala — za tačnu ponudu pozovite ili nam pošaljite upit.`}
        primaryCta={{ label: `Pozovite ${settings.phone}`, href: `tel:${settings.phone.replace(/\s/g, "")}` }}
        secondaryCta={{ label: "Prijavite kvar", href: "/kontakt" }}
        stats={[
          { value: `${services.length}+ stavki`, label: "u cenovniku, po kategorijama" },
          { value: `${settings.city} i okolina`, label: "elektroinstalacije i servis" },
          ...(experienceYears !== undefined
            ? [{ value: `${experienceYears}+ godina`, label: "iskustva na terenu" }]
            : []),
        ]}
      />

      {/* Quick category nav — velika, upadljiva dugmad umesto sitnih linkova */}
      <div className="border-b border-black/5 bg-white">
        <Container>
          <nav className="flex flex-wrap gap-2 overflow-x-auto py-4">
            {grouped.map((group) => (
              <a
                key={group.category}
                href={`#${group.category}`}
                className="flex shrink-0 items-center gap-2 rounded-full border border-navy/10 bg-surface px-4 py-2 text-sm font-semibold text-navy transition hover:border-accent hover:bg-accent hover:text-navy"
              >
                {serviceCategoryLabel(group.category)}
                <span className="rounded-full bg-white px-1.5 py-0.5 text-xs font-bold text-accent-dark">
                  {group.total}
                </span>
              </a>
            ))}
          </nav>
        </Container>
      </div>

      {/* Price table */}
      <section className="py-12">
        <Container>
          <p className="max-w-2xl text-sm text-muted">
            Cene su prikazane u dinarima. Za preciznu procenu ili zakazivanje
            termina pozovite {settings.phone}.
          </p>

          <div className="mt-10 space-y-14">
            {grouped.map((group) => (
              <div key={group.category} id={group.category} className="scroll-mt-32">
                <div className="flex flex-wrap items-baseline justify-between gap-3 border-b-2 border-navy pb-3">
                  <h2 className="text-2xl font-bold text-navy">
                    {serviceCategoryLabel(group.category)}
                    <span className="ml-2 text-sm font-normal text-muted">
                      ({group.total} {group.total === 1 ? "stavka" : "stavki"})
                    </span>
                  </h2>
                  <Link
                    href={`/usluge/${group.category}`}
                    className="text-sm font-semibold text-accent-dark hover:underline"
                  >
                    Sve o ovoj usluzi →
                  </Link>
                </div>

                <div className="mt-4 divide-y divide-black/5 rounded-lg border border-black/5 bg-white">
                  {group.items.map((service) => (
                    <div
                      key={service.slug}
                      className="flex items-baseline justify-between gap-4 px-4 py-3"
                    >
                      <div className="min-w-0">
                        <p className="truncate text-sm font-medium text-navy">
                          {service.title}
                        </p>
                        {service.priceNote && (
                          <p className="truncate text-[11px] text-muted">
                            {service.priceNote}
                          </p>
                        )}
                      </div>
                      <div className="shrink-0 text-right text-sm font-bold text-navy">
                        od {formatRsd(service.priceFrom)}
                        {service.priceTo && (
                          <span className="block text-[11px] font-normal text-muted">
                            do {formatRsd(service.priceTo)}
                          </span>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </Container>
      </section>

      <ClosingCta phone={settings.phone} />
    </>
  );
}
