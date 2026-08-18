import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";

import Image from "next/image";

import { Container } from "@/components/Container";
import { PageHero } from "@/components/PageHero";
import { PlaceholderImage } from "@/components/PlaceholderImage";
import { RichText } from "@/components/RichText";
import { ServiceRow } from "@/components/ServiceRow";
import { ClosingCta } from "@/components/ClosingCta";
import { JsonLd } from "@/components/JsonLd";
import {
  getServicePages,
  getServicePageBySlug,
  getServices,
  getSiteSettings,
} from "@/lib/data";
import { SITE_URL } from "@/lib/site-config";

export async function generateStaticParams() {
  const pages = await getServicePages();
  return pages.map((page) => ({ slug: page.slug }));
}

export async function generateMetadata(
  props: PageProps<"/usluge/[slug]">,
): Promise<Metadata> {
  const { slug } = await props.params;
  const page = await getServicePageBySlug(slug);
  if (!page) return {};

  const settings = await getSiteSettings();
  const title =
    page.seo?.title ?? `${page.title} u ${settings.city}u | cene i informacije`;
  const description =
    page.seo?.description ??
    (page.heroSubtitle
      ? `${page.heroSubtitle} Pozovite ${settings.phone} za besplatnu procenu.`
      : `${page.title} u ${settings.city}u. Pozovite ${settings.phone} za besplatnu procenu.`);

  return {
    title,
    description,
    alternates: { canonical: `/usluge/${page.slug}` },
    openGraph: {
      images: [`${SITE_URL}/opengraph-image`], title, description, type: "website", url: `${SITE_URL}/usluge/${page.slug}` },
  };
}

export default async function UslugaDetailPage(
  props: PageProps<"/usluge/[slug]">,
) {
  const { slug } = await props.params;
  const [page, allServices, settings] = await Promise.all([
    getServicePageBySlug(slug),
    getServices(),
    getSiteSettings(),
  ]);

  if (!page) notFound();

  const relatedServices = allServices.filter((s) => s.category === page.slug);

  const breadcrumbJsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Početna", item: SITE_URL },
      { "@type": "ListItem", position: 2, name: "Usluge", item: `${SITE_URL}/usluge` },
      { "@type": "ListItem", position: 3, name: page.title, item: `${SITE_URL}/usluge/${page.slug}` },
    ],
  };

  const serviceJsonLd = {
    "@context": "https://schema.org",
    "@type": "Service",
    serviceType: page.heroTitle ?? page.title,
    provider: { "@type": "Electrician", name: settings.title, telephone: settings.phone },
    areaServed: {
      "@type": "City",
      name: settings.city,
      geo: { "@type": "GeoCoordinates", latitude: 43.3209, longitude: 21.8958 },
    },
    description: page.heroSubtitle,
  };

  const faqJsonLd = page.faq.length
    ? {
        "@context": "https://schema.org",
        "@type": "FAQPage",
        mainEntity: page.faq.map((item) => ({
          "@type": "Question",
          name: item.question,
          acceptedAnswer: { "@type": "Answer", text: item.answer },
        })),
      }
    : null;

  return (
    <>
      <JsonLd data={breadcrumbJsonLd} />
      <JsonLd data={serviceJsonLd} />
      {faqJsonLd && <JsonLd data={faqJsonLd} />}

      <PageHero
        eyebrow="Usluge"
        title={page.heroTitle ?? page.title}
        subtitle={page.heroSubtitle}
        primaryCta={{ label: `Pozovite ${settings.phone}`, href: `tel:${settings.phone.replace(/\s/g, "")}` }}
        secondaryCta={{ label: "Prijavite kvar", href: "/kontakt" }}
        breadcrumb={
          <nav className="mb-3 text-sm text-white/60">
            <Link href="/usluge" className="hover:text-white">Usluge</Link>
            <span className="mx-2">/</span>
            <span className="text-white">{page.title}</span>
          </nav>
        }
      />

      {/* Checklist */}
      {page.checklist.length > 0 && (
        <section className="py-10">
          <Container>
            <span className="text-sm font-semibold uppercase tracking-wide text-accent-dark">
              Šta uključuje
            </span>
            <h2 className="mt-2 text-2xl font-bold text-navy">{page.title}</h2>
            <ul className="mt-5 grid grid-cols-1 gap-x-8 gap-y-2.5 sm:grid-cols-2 lg:grid-cols-3">
              {page.checklist.map((item, i) => (
                <li
                  key={i}
                  className="flex items-center gap-2 text-sm font-medium text-navy"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="h-3.5 w-3.5 shrink-0 text-accent-dark">
                    <path fillRule="evenodd" d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z" clipRule="evenodd" />
                  </svg>
                  {item.title}
                </li>
              ))}
            </ul>
          </Container>
        </section>
      )}

      {/* Pricing */}
      {relatedServices.length > 0 && (
        <section className="bg-surface py-14">
          <Container>
            <span className="text-sm font-semibold uppercase tracking-wide text-accent-dark">
              Cene
            </span>
            <h2 className="mt-2 text-3xl font-bold text-navy">Cenovnik: {page.title.toLowerCase()}</h2>
            <p className="mt-2 max-w-2xl text-sm text-muted">
              Cene su orijentacione. Za tačnu ponudu prilagođenu vašem prostoru
              pozovite {settings.phone}.
            </p>
            <div className="mt-8 space-y-2">
              {relatedServices.slice(0, 4).map((service) => (
                <ServiceRow key={service.slug} service={service} />
              ))}
            </div>
            {relatedServices.length > 4 && (
              <div
                className="mt-2 max-h-14 overflow-hidden"
                style={{
                  maskImage: "linear-gradient(to bottom, black, transparent)",
                  WebkitMaskImage: "linear-gradient(to bottom, black, transparent)",
                }}
              >
                <ServiceRow service={relatedServices[4]} />
              </div>
            )}
            <Link
              href="/cenovnik"
              className="mt-6 inline-block text-sm font-semibold text-accent-dark hover:underline"
            >
              Pogledajte kompletan cenovnik →
            </Link>
          </Container>
        </section>
      )}

      {/* CTA band */}
      {page.ctaBandTitle && (
        <section className="bg-white pb-12">
          <Container>
            <div className="flex flex-col items-start gap-5 rounded-2xl border border-accent/25 bg-accent/5 p-6 sm:flex-row sm:items-center sm:justify-between sm:p-8">
              <div>
                <h2 className="text-xl font-bold text-navy">{page.ctaBandTitle}</h2>
                {page.ctaBandText && (
                  <p className="mt-2 max-w-xl text-sm text-muted">{page.ctaBandText}</p>
                )}
                {page.ctaBandBullets.length > 0 && (
                  <div className="mt-3 grid grid-cols-1 gap-x-6 gap-y-1 sm:grid-cols-2">
                    {page.ctaBandBullets.map((bullet, i) => (
                      <div key={i} className="flex items-start gap-2 text-sm text-navy/80">
                        <span className="mt-0.5 text-accent-dark">✓</span>
                        <span>{bullet}</span>
                      </div>
                    ))}
                  </div>
                )}
              </div>
              <a
                href={`tel:${settings.phone.replace(/\s/g, "")}`}
                className="shrink-0 rounded-full bg-navy px-6 py-3 text-center text-sm font-semibold text-white transition hover:bg-navy-light"
              >
                Pozovite {settings.phone}
              </a>
            </div>
          </Container>
        </section>
      )}

      {/* Detaljan tekst */}
      {page.body ? (
        <section className="py-14">
          <Container className="max-w-3xl">
            <span className="text-sm font-semibold uppercase tracking-wide text-accent-dark">
              Sve što treba da znate
            </span>
            <div className="mt-2">
              <RichText value={page.body} />
            </div>
          </Container>
        </section>
      ) : null}

      {/* Why us */}
      {page.whyUs.length > 0 && (
        <section className="bg-surface py-14">
          <Container className="grid grid-cols-1 items-center gap-10 md:grid-cols-2">
            <div>
              <span className="text-sm font-semibold uppercase tracking-wide text-accent-dark">
                Zašto mi
              </span>
              <h2 className="mt-2 text-3xl font-bold text-navy">Zašto izabrati naš servis?</h2>
              <div className="mt-8 grid grid-cols-1 gap-x-12 gap-y-8 sm:grid-cols-2">
                {page.whyUs.map((item, i) => (
                  <div key={i}>
                    <h3 className="font-semibold text-navy">{item.title}</h3>
                    <p className="mt-1 text-sm text-muted">{item.description}</p>
                  </div>
                ))}
              </div>
            </div>
            {page.imageUrl ? (
              <div className="relative h-72 w-full overflow-hidden rounded-3xl sm:h-96">
                <Image src={page.imageUrl} alt={page.title} fill className="object-cover" />
              </div>
            ) : (
              <PlaceholderImage
                label={`Slika: ${page.title.toLowerCase()}`}
                className="h-72 w-full rounded-3xl sm:h-96"
              />
            )}
          </Container>
        </section>
      )}

      {/* FAQ — important for AEO (Answer Engine Optimization) */}
      {page.faq.length > 0 && (
        <section className="py-14">
          <Container className="max-w-3xl">
            <span className="text-sm font-semibold uppercase tracking-wide text-accent-dark">
              Najčešća pitanja
            </span>
            <h2 className="mt-2 text-3xl font-bold text-navy">
              Pitanja i odgovori o usluzi &quot;{page.title.toLowerCase()}&quot;
            </h2>
            <div className="mt-8 space-y-3">
              {page.faq.map((item, i) => (
                <details
                  key={i}
                  className="group rounded-2xl border border-black/5 bg-white p-6 shadow-sm"
                >
                  <summary className="cursor-pointer list-none font-semibold text-navy marker:content-none">
                    <span className="flex items-center justify-between">
                      {item.question}
                      <span className="ml-4 text-accent-dark transition group-open:rotate-45">+</span>
                    </span>
                  </summary>
                  <p className="mt-3 text-sm text-muted">{item.answer}</p>
                </details>
              ))}
            </div>
          </Container>
        </section>
      )}

      <ClosingCta phone={settings.phone} />
    </>
  );
}
