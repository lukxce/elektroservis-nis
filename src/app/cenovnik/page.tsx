import type { Metadata } from "next";

import { Container } from "@/components/Container";
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

  const priceFaq = [
    {
      question: `Koliko košta električar u ${settings.city}u?`,
      answer: `Zavisi od vrste intervencije. Zamena utičnice ili prekidača je najjeftinija stavka, od 1200 dinara, dok zamena stare porcelanske table modularnom ide od 9000 do 16000 dinara, u zavisnosti od broja strujnih krugova. Za tačnu cenu za vaš stan ili kuću u ${settings.city}u, najbolje je da nam opišete problem telefonom, čest izlazak na teren se ne naplaćuje posebno ako se posao izvede.`,
    },
    {
      question: "Kolika je cena zamene osigurača?",
      answer: "Zamena automatskog osigurača košta od 1400 dinara. Ugradnja FID (diferencijalne) zaštitne sklopke, koja je znatno važnija za bezbednost jer štiti od strujnog udara, ide od 3200 dinara. Ako razvodna tabla uopšte nema FID sklopku, to je prva stvar koju preporučujemo da se doda, bez obzira na starost ostatka instalacije.",
    },
    {
      question: "Koliko košta zamena razvodne table?",
      answer: "Zamena stare porcelanske table modularnom kreće se od 9000 do 16000 dinara, zavisno od broja strujnih krugova i da li se dodaje FID sklopka i odvodnik prenapona. Ovo je jedna od intervencija koje najviše poboljšaju bezbednost starije instalacije, i vredi je uraditi pre nego što dođe do kvara, ne posle.",
    },
    {
      question: "Kolika je cena servisa bojlera?",
      answer: "Servis i čišćenje bojlera (uklanjanje kamenca, provera grejača i termostata) košta od 2500 do 4000 dinara. Ako je grejač već pregoreo, zamena grejača na bojleru ide od 3000 do 5500 dinara, u zavisnosti od tipa i snage bojlera.",
    },
    {
      question: "Da li se izlazak na teren naplaćuje posebno?",
      answer: `Ne, izlazak na teren na teritoriji ${settings.city} i okoline je uključen u cenu intervencije. Naplaćuje se samo sam rad i eventualni materijal, po cenama iz cenovnika.`,
    },
  ];

  const faqJsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: priceFaq.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: { "@type": "Answer", text: item.answer },
    })),
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
      <JsonLd data={faqJsonLd} />
      {servicesJsonLd.map((data, i) => (
        <JsonLd key={i} data={data} />
      ))}

      <PageHero
        eyebrow="Cenovnik usluga"
        title="Cenovnik usluga električara u Nišu"
        subtitle={`Kompletan pregled cena ${settings.title}, po kategorijama usluga. Sve cene su orijentacione i zavise od obima posla, pristupačnosti instalacije i utrošenog materijala, za tačnu ponudu pozovite ili nam pošaljite upit.`}
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

      <section className="py-14">
        <Container className="max-w-3xl">
          <span className="font-mono text-sm font-semibold uppercase tracking-wide text-accent">Koliko košta električar</span>
          <h2 className="mt-2 text-3xl font-bold text-navy">Od čega zavisi cena</h2>
          <p className="mt-4 text-muted">
            Cena električara u {settings.city}u najviše zavisi od vrste intervencije, ne od
            same posete. Zamena utičnice ili osigurača je brz i jeftin posao, dok zamena cele
            razvodne table ili proširenje instalacije zahteva više vremena i materijala, pa je
            i cena srazmerno veća.
          </p>
          <p className="mt-4 text-muted">
            Izlazak na teren na teritoriji {settings.city} i okoline ne naplaćujemo posebno.
            Ispod je pregled cena po usluzi, sa rasponom koji pokriva uobičajene slučajeve na
            terenu.
          </p>
        </Container>
      </section>

      <CenovnikFilters services={services} categoryOrder={categoryOrder} phone={settings.phone} />

      <section className="bg-surface py-14">
        <Container className="max-w-3xl">
          <span className="font-mono text-sm font-semibold uppercase tracking-wide text-accent">Pitanja o ceni</span>
          <h2 className="mt-2 text-3xl font-bold text-navy">Najčešća pitanja o cenama</h2>
          <div className="mt-8 space-y-6">
            {priceFaq.map((item) => (
              <div key={item.question}>
                <h3 className="font-semibold text-navy">{item.question}</h3>
                <p className="mt-1 text-muted">{item.answer}</p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      <ClosingCta phone={settings.phone} />
    </>
  );
}
