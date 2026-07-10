import type { Metadata } from "next";

import { PageHero } from "@/components/PageHero";
import { ClosingCta } from "@/components/ClosingCta";
import { JsonLd } from "@/components/JsonLd";
import { CenovnikFilters } from "@/components/CenovnikFilters";
import { getServices, getSiteSettings } from "@/lib/data";
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

      <CenovnikFilters services={services} categoryOrder={categoryOrder} phone={settings.phone} />

      <ClosingCta phone={settings.phone} />
    </>
  );
}
