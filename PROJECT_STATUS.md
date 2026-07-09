# Elektro Servis Niš — status projekta

Handoff dokument za nastavak rada u novom razgovoru (ako se ovaj kompresuje/izgubi kontekst).
Poslednje ažurirano: 2026-07-09.

## Šta je ovo

Next.js sajt + Sanity CMS admin panel za fiktivnu firmu za montažu, servis,
popravku i dijagnostiku električnih instalacija u Nišu, Srbija. Fokus: agresivna
SEO optimizacija (tehnička + sadržajna).

Ovo je **drugi sajt u nizu** sličnih rank-and-rent sajtova (prvi: klima servis,
`/Users/Digitl/Documents/GitHub/klimaservisnis`), izgrađen na identičnoj arhitekturi.

**Namena:** ovaj sajt je nameran A/B test naspram `elektromilnis.rs`, za istog
prijatelja/klijenta — dva različita pristupa istom zanatu/tržištu u Nišu.

## Lokacija i osnovne odluke

- **Putanja:** `/Users/Digitl/Documents/GitHub/elektroservis-nis`
- **Domen:** `elektroservisnis.rs` (pretpostavljen — proveriti/kupiti pre lansiranja)
- **Grad:** Niš (city-locked, isti pristup kao klima sajt)
- **CMS:** Sanity (besplatan tier, embedovan Studio na `/studio`)
- **Boja/dizajn:** navy (#0c1420) + jantar/amber akcent (#e8a222), umesto plave
  korišćene na klima sajtu — vizuelno razlikovanje između dva sajta istog vlasnika.

## Sadržaj — gušći cenovnik nego kod klima sajta

Ovaj zanat ima znatno više granularnih stavki cenovnika (~40, u 4 kategorije:
`montaza`, `servis`, `popravka`, `dijagnostika`), svaka stavka označena
`subgroup` poljem (npr. "Rasveta", "Utičnice i prekidači", "Razvodni ormani i
osigurači", "Uzemljenje i zaštita" unutar montaže). Stranica `/cenovnik` grupiše
stavke po kategoriji pa po podgrupi, sa gušćim redovima (manji razmak, sitniji
tekst) nego na klima sajtu, plus brza navigacija po kategorijama na vrhu strane.

## Tehnički stek

- Next.js 16.2.10 (App Router, TypeScript, Tailwind v4, Turbopack)
- Sanity CMS: `sanity`, `next-sanity`, `@sanity/vision`, `@sanity/image-url`,
  `@portabletext/react`
- Sanity projekat: **nije još povezan** — `NEXT_PUBLIC_SANITY_PROJECT_ID` nije
  postavljen, pa sajt radi isključivo na `src/lib/placeholder-data.ts` sadržaju
  (vidi `cmsConfigured` proveru u `src/lib/data.ts`). Sajt je potpuno funkcionalan
  i bez CMS-a — Sanity se povezuje kasnije kad klijent bude spreman da uređuje
  sadržaj sam.

## Struktura sadržaja (Sanity schema)

`src/sanity/schemaTypes/`: `siteSettings`, `service` (cenovnik, sa `category` +
`subgroup`), `servicePage` (4 stranice usluga), `blogPost`, `contactSubmission`.

## Stranice (sve rade)

- `/` — početna
- `/usluge`, `/usluge/[montaza|servis|popravka|dijagnostika]`
- `/cenovnik` — gust prikaz ~40 stavki po kategoriji/podgrupi
- `/blog`, `/blog/[slug]` — 6 postova u placeholder podacima
- `/kontakt` — forma šalje u Sanity `contactSubmission` preko `/api/kontakt`
- `/studio/[[...tool]]` — Sanity Studio admin panel (noindex)
- `/sitemap.xml`, `/robots.txt`, `/opengraph-image`

## Sledeći koraci (kad klijent bude spreman)

1. Kupiti/potvrditi domen `elektroservisnis.rs`, ažurirati `NEXT_PUBLIC_SITE_URL`.
2. Kreirati Sanity projekat, postaviti env varijable u `.env.local`
   (`NEXT_PUBLIC_SANITY_PROJECT_ID`, `NEXT_PUBLIC_SANITY_DATASET`,
   `SANITY_API_WRITE_TOKEN`), pokrenuti `npm run seed` da se placeholder sadržaj
   prebaci u CMS kao polazna tačka za uređivanje.
3. Zameniti placeholder slike (trenutno `PlaceholderImage` komponenta) pravim
   fotografijama kroz Studio.
4. Deploy na Vercel, povezati domen.
5. Google Business Profile + recenzije + citati (SEO tehnika sama neće biti
   dovoljna za rangiranje, po iskustvu sa klima sajtom).
