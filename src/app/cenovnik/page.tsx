import type { Metadata } from "next";
import Link from "next/link";

import { Container } from "@/components/Container";
import { PageHero } from "@/components/PageHero";
import { ClosingCta } from "@/components/ClosingCta";
import { JsonLd } from "@/components/JsonLd";
import { getServices, getSiteSettings } from "@/lib/data";
import { formatRsd, serviceCategoryLabel } from "@/lib/format";
import { SITE_URL } from "@/lib/site-config";
import type { Service } from "@/lib/types";

export async function generateMetadata(): Promise<Metadata> {
  const settings = await getSiteSettings();
  const title =
    settings.seoCenovnik?.title ?? `Cenovnik usluga električara u ${settings.city}u`;
  const description =
    settings.seoCenovnik?.description ??
    `Pregledan cenovnik montaže, servisa, popravke i dijagnostike električnih instalacija u ${settings.city}u, po ${serviceCategoryLabel("montaza").toLowerCase()}, podgrupama i stavkama. Pozovite ${settings.phone} za tačnu ponudu.`;

  return {
    title,
    description,
    alternates: { canonical: "/cenovnik" },
    openGraph: { title, description, type: "website", url: `${SITE_URL}/cenovnik` },
  };
}

const categoryOrder = ["montaza", "servis", "popravka", "dijagnostika"];

function groupBySubgroup(items: Service[]) {
  const groups: { name: string; items: Service[] }[] = [];
  for (const item of items) {
    const key = item.subgroup ?? "Ostalo";
    let group = groups.find((g) => g.name === key);
    if (!group) {
      group = { name: key, items: [] };
      groups.push(group);
    }
    group.items.push(item);
  }
  return groups;
}

export default async function CenovnikPage() {
  const [services, settings] = await Promise.all([getServices(), getSiteSettings()]);

  const grouped = categoryOrder
    .map((category) => ({
      category,
      subgroups: groupBySubgroup(services.filter((s) => s.category === category)),
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
        title="Cenovnik montaže, servisa i popravke električnih instalacija"
        subtitle={`Kompletan pregled cena ${settings.title}, po kategorijama i podgrupama usluga. Sve cene su orijentacione i zavise od obima posla, pristupačnosti instalacije i utrošenog materijala — za tačnu ponudu pozovite ili nam pošaljite upit.`}
        primaryCta={{ label: `Pozovite ${settings.phone}`, href: `tel:${settings.phone.replace(/\s/g, "")}` }}
        secondaryCta={{ label: "Prijavite kvar", href: "/kontakt" }}
        stats={[
          { value: `${services.length}+ stavki`, label: "u cenovniku, po kategorijama" },
          { value: `${settings.city} i okolina`, label: "montaža, servis i popravka" },
          ...(experienceYears !== undefined
            ? [{ value: `${experienceYears}+ godina`, label: "iskustva na terenu" }]
            : []),
        ]}
      />

      {/* Quick category nav — korisno za brzo skakanje kroz dug cenovnik */}
      <div className="border-b border-black/5 bg-white">
        <Container>
          <nav className="flex flex-wrap gap-x-6 gap-y-1 overflow-x-auto py-3 text-sm">
            {grouped.map((group) => (
              <a
                key={group.category}
                href={`#${group.category}`}
                className="whitespace-nowrap font-medium text-muted transition hover:text-accent-dark"
              >
                {serviceCategoryLabel(group.category)}
                <span className="ml-1 text-xs text-muted/70">({group.total})</span>
              </a>
            ))}
          </nav>
        </Container>
      </div>

      {/* Price table — gušći prikaz zbog velikog broja stavki */}
      <section className="py-12">
        <Container>
          <p className="max-w-2xl text-sm text-muted">
            Cene su prikazane u dinarima. Stavke su grupisane po kategoriji i
            podgrupi radi lakšeg pronalaženja. Za preciznu procenu ili
            zakazivanje termina pozovite {settings.phone}.
          </p>

          <div className="mt-10 space-y-16">
            {grouped.map((group) => (
              <div key={group.category} id={group.category} className="scroll-mt-24">
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

                <div className="mt-6 grid grid-cols-1 gap-x-10 gap-y-8 lg:grid-cols-2">
                  {group.subgroups.map((subgroup) => (
                    <div key={subgroup.name}>
                      <h3 className="flex items-center gap-2 text-xs font-bold uppercase tracking-wide text-accent-dark">
                        <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
                        {subgroup.name}
                      </h3>
                      <div className="mt-2 divide-y divide-black/5 rounded-lg border border-black/5 bg-white">
                        {subgroup.items.map((service) => (
                          <div
                            key={service.slug}
                            className="flex items-baseline justify-between gap-4 px-3 py-2"
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
              </div>
            ))}
          </div>
        </Container>
      </section>

      <ClosingCta phone={settings.phone} />
    </>
  );
}
