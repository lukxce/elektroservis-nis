import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";

import { Container } from "@/components/Container";
import { JsonLd } from "@/components/JsonLd";
import { PlaceholderImage } from "@/components/PlaceholderImage";
import { getServicePages, getSiteSettings } from "@/lib/data";
import { SITE_URL } from "@/lib/site-config";

export async function generateMetadata(): Promise<Metadata> {
  const settings = await getSiteSettings();
  const title =
    settings.seoUsluge?.title ?? `Usluge električara u ${settings.city}u | instalacije i rasveta`;
  const description =
    settings.seoUsluge?.description ??
    `Elektroinstalacije, rasveta, osigurači i razvodne table, utičnice, servis kućnih uređaja i EV punjači u ${settings.city}u. Cena poznata pre početka radova.`;

  return {
    title,
    description,
    alternates: { canonical: "/usluge" },
    openGraph: { title, description, type: "website", url: `${SITE_URL}/usluge` },
  };
}

export default async function UslugePage() {
  const [pages, settings] = await Promise.all([getServicePages(), getSiteSettings()]);

  const breadcrumbJsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Početna", item: SITE_URL },
      { "@type": "ListItem", position: 2, name: "Usluge", item: `${SITE_URL}/usluge` },
    ],
  };

  return (
    <>
      <JsonLd data={breadcrumbJsonLd} />

      <section className="bg-surface py-14">
        <Container>
          <span className="text-sm font-semibold uppercase tracking-wide text-accent-dark">Usluge</span>
          <h1 className="mt-2 text-4xl font-bold text-navy">
            Sve usluge {settings.title}
          </h1>
          <p className="mt-4 max-w-2xl text-muted">
            Od nove instalacije do hitnih popravki, pogledajte šta svaka usluga
            uključuje, i cene na dnu svake stranice.
          </p>
        </Container>
      </section>

      <section className="py-14">
        <Container>
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
            {pages.map((page) => (
              <Link
                key={page.slug}
                href={`/usluge/${page.slug}`}
                className="group flex flex-col overflow-hidden rounded-2xl border border-black/5 bg-white shadow-sm transition hover:-translate-y-1 hover:shadow-md"
              >
                <div className="relative h-44 w-full overflow-hidden">
                  {page.imageUrl ? (
                    <Image
                      src={page.imageUrl}
                      alt={page.title}
                      fill
                      className="object-cover transition duration-500 group-hover:scale-105"
                    />
                  ) : (
                    <PlaceholderImage label={`Slika: ${page.title}`} className="h-44 w-full" />
                  )}
                </div>
                <div className="flex flex-1 flex-col p-8">
                  <h2 className="text-xl font-bold text-navy group-hover:text-accent-dark">
                    {page.title}
                  </h2>
                  {page.heroSubtitle && (
                    <p className="mt-2 text-muted">{page.heroSubtitle}</p>
                  )}
                  <span className="mt-auto inline-block pt-4 text-sm font-semibold text-accent-dark">
                    Saznajte više →
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </Container>
      </section>
    </>
  );
}
