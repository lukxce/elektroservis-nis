#!/usr/bin/env node
/**
 * One-shot script: patches heroTitle + SEO fields on all 7 servicePage
 * documents in the Sanity dataset.
 *
 * Usage:
 *   SANITY_WRITE_TOKEN=<token> node scripts/patch-hero-titles.mjs
 */

import { createClient } from "@sanity/client";

const token = process.env.SANITY_WRITE_TOKEN;
if (!token) {
  console.error("Missing SANITY_WRITE_TOKEN.");
  process.exit(1);
}

const client = createClient({
  projectId: "qmbncw8i",
  dataset: "production",
  apiVersion: "2025-01-01",
  token,
  useCdn: false,
});

const patches = [
  {
    id: "servicePage-elektroinstalacije",
    heroTitle: "Elektroinstalacije u Nišu",
    seo: {
      title: "Elektroinstalacije u Nišu | električar, zamena instalacija",
      description:
        "Profesionalne elektroinstalacije u Nišu. Zamena stare instalacije, razvod za nove objekte, popravka kvarova. Pozovite 063 133 7373.",
    },
  },
  {
    id: "servicePage-rasveta",
    heroTitle: "Ugradnja rasvete u Nišu",
    seo: {
      title: "Ugradnja rasvete u Nišu | LED rasveta, lusteri, spotovi",
      description:
        "Ugradnja unutrašnje i spoljašnje rasvete u Nišu. LED paneli, lusteri, spotovi, senzorska rasveta. Pozovite 063 133 7373.",
    },
  },
  {
    id: "servicePage-osiguraci-i-table",
    heroTitle: "Osigurači i razvodne table u Nišu",
    seo: {
      title: "Osigurači i razvodne table u Nišu | zamena, ugradnja",
      description:
        "Zamena i ugradnja osigurača i razvodnih tabli u Nišu. FID sklopke, automatski osigurači, modernizacija starih tabli. Pozovite 063 133 7373.",
    },
  },
  {
    id: "servicePage-uticnice-i-prekidaci",
    heroTitle: "Utičnice i prekidači u Nišu",
    seo: {
      title: "Utičnice i prekidači u Nišu | zamena, ugradnja novih",
      description:
        "Zamena i ugradnja utičnica i prekidača u Nišu. Šuko utičnice, dvostruke, USB, prigušivači. Pozovite 063 133 7373.",
    },
  },
  {
    id: "servicePage-servis-uredjaja",
    heroTitle: "Servis kućnih uređaja u Nišu",
    seo: {
      title: "Servis kućnih uređaja u Nišu | popravka, priključivanje",
      description:
        "Servis i priključivanje kućnih uređaja u Nišu. Šporeti, bojleri, veš mašine, sudo mašine. Pozovite 063 133 7373.",
    },
  },
  {
    id: "servicePage-klima-uredjaji",
    heroTitle: "Ugradnja i servis klima uređaja u Nišu",
    seo: {
      title: "Ugradnja klime u Nišu | servis klima uređaja, električno povezivanje",
      description:
        "Električno povezivanje, ugradnja i servis klima uređaja u Nišu. Licencirani električar za siguran priključak. Pozovite 063 133 7373.",
    },
  },
  {
    id: "servicePage-ev-punjaci",
    heroTitle: "Ugradnja EV punjača u Nišu",
    seo: {
      title: "Ugradnja EV punjača u Nišu | punjač za električni auto",
      description:
        "Ugradnja punjača za električna vozila u Nišu. Wallbox, trofazno povezivanje, provera kapaciteta instalacije. Pozovite 063 133 7373.",
    },
  },
];

console.log("Patching 7 servicePage documents in project qmbncw8i...\n");

let ok = 0;
let fail = 0;

for (const { id, heroTitle, seo } of patches) {
  try {
    const doc = await client.getDocument(id);
    if (!doc) {
      console.log(`  ⚠  ${id} — document not found, skipping`);
      fail++;
      continue;
    }
    await client.patch(id).set({ heroTitle, seo }).commit();
    console.log(`  ✓  ${id} → heroTitle: "${heroTitle}"`);
    ok++;
  } catch (err) {
    console.error(`  ✗  ${id} — ${err.message}`);
    fail++;
  }
}

console.log(`\nDone: ${ok} patched, ${fail} failed.`);
if (fail > 0) process.exit(1);
