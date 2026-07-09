// Puni Sanity CMS početnim (izmišljenim) sadržajem iz src/lib/placeholder-data.ts,
// tako da sajt ne bude prazan kad se poveže pravi Sanity projekat.
// Pokretanje: npm run seed
// Zahteva NEXT_PUBLIC_SANITY_PROJECT_ID, NEXT_PUBLIC_SANITY_DATASET i SANITY_API_WRITE_TOKEN u .env.local

import { createClient } from "@sanity/client";
import { config as loadEnv } from "dotenv";

loadEnv({ path: ".env.local" });

// Učitano preko tsx loadera (pokrenuto kao `tsx scripts/seed.mjs`), pa import
// TypeScript fajla radi direktno, bez ručnog dupliranja sadržaja ovde.
const { siteSettings, services, servicePages, blogPosts } = await import(
  "../src/lib/placeholder-data.ts"
);

const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID;
const dataset = process.env.NEXT_PUBLIC_SANITY_DATASET || "production";
const token = process.env.SANITY_API_WRITE_TOKEN;

if (!projectId || !token) {
  console.error(
    "Nedostaje NEXT_PUBLIC_SANITY_PROJECT_ID ili SANITY_API_WRITE_TOKEN u .env.local — podesite Sanity projekat pre pokretanja seed skripte.",
  );
  process.exit(1);
}

const client = createClient({
  projectId,
  dataset,
  apiVersion: "2025-01-01",
  token,
  useCdn: false,
});

// Sanity zahteva _key na svakom elementu niza objekata (blokovi, span-ovi,
// stavke checklist-e/faq-a...). Ova funkcija rekurzivno dodaje _key svuda
// gde nedostaje, bez ručnog pisanja strukture za svaki blok teksta.
let keyCounter = 0;
function withKeys(value) {
  if (Array.isArray(value)) {
    return value.map((item) => {
      const keyed = withKeys(item);
      if (keyed && typeof keyed === "object" && !Array.isArray(keyed) && !keyed._key) {
        keyCounter += 1;
        return { _key: `k${keyCounter}`, ...keyed };
      }
      return keyed;
    });
  }
  if (value && typeof value === "object") {
    const out = {};
    for (const [key, v] of Object.entries(value)) {
      out[key] = withKeys(v);
    }
    return out;
  }
  return value;
}

async function run() {
  console.log("Kreiram siteSettings...");
  await client.createOrReplace(
    withKeys({
      _id: "siteSettings",
      _type: "siteSettings",
      ...siteSettings,
    }),
  );

  console.log(`Kreiram ${services.length} usluga (cenovnik)...`);
  for (const service of services) {
    await client.createOrReplace(
      withKeys({
        _id: `service-${service.slug}`,
        _type: "service",
        ...service,
        slug: { _type: "slug", current: service.slug },
      }),
    );
  }

  console.log(`Kreiram ${servicePages.length} stranica usluga...`);
  for (const page of servicePages) {
    await client.createOrReplace(
      withKeys({
        _id: `servicePage-${page.slug}`,
        _type: "servicePage",
        ...page,
        slug: { _type: "slug", current: page.slug },
      }),
    );
  }

  console.log(`Kreiram ${blogPosts.length} blog postova...`);
  for (const post of blogPosts) {
    await client.createOrReplace(
      withKeys({
        _id: `blogPost-${post.slug}`,
        _type: "blogPost",
        ...post,
        slug: { _type: "slug", current: post.slug },
      }),
    );
  }

  console.log("Gotovo.");
}

run().catch((err) => {
  console.error(err);
  process.exit(1);
});
