// Privremeni (izmišljeni) sadržaj za pokretanje sajta.
// Zamenite stvarnim podacima kroz CMS panel na /studio, ovo su samo razumne
// početne vrednosti da sajt ne bude prazan.

// Helperi za pisanje dugačkog sadržaja u Portable Text formatu (isti format
// koji koristi Sanity), bez ručnog kucanja pune strukture bloka za svaki red.
function h2(text: string) {
  return { _type: "block", style: "h2", children: [{ _type: "span", text }] };
}
function h3(text: string) {
  return { _type: "block", style: "h3", children: [{ _type: "span", text }] };
}
function p(text: string) {
  return { _type: "block", style: "normal", children: [{ _type: "span", text }] };
}
function bullets(items: string[]) {
  return items.map((text) => ({
    _type: "block",
    style: "normal",
    listItem: "bullet" as const,
    level: 1,
    children: [{ _type: "span", text }],
  }));
}

export const siteSettings = {
  title: "Elektro Servis Niš",
  tagline: "Montaža, servis i popravka električnih instalacija u Nišu",
  phone: "065 847 2193",
  phoneSecondary: "018 452 891",
  email: "info@elektroservisnis.rs",
  address: "Bulevar Nemanjića 44, Niš",
  city: "Niš",
  serviceAreas: ["Niš", "Niška Banja", "Medijana", "Pantelej", "Crveni Krst"],
  foundedYear: 2011,
  workingHours: "Pon–Pet: 07–19h, Sub: 08–15h",
  emergencyAvailability: "Hitne intervencije dostupne 0-24, svaki dan u nedelji",
  openingHoursSpecification: [
    {
      dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
      opens: "07:00",
      closes: "19:00",
    },
    {
      dayOfWeek: ["Saturday"],
      opens: "08:00",
      closes: "15:00",
    },
  ],
  // Približne koordinate centra Niša: zameniti tačnom geo-lokacijom adrese firme.
  geo: { lat: 43.3209, lng: 21.8958 },
  trustBadges: [
    "Licencirani električar",
    "Dolazak isti dan",
    "Garancija na rad",
    "Hitne intervencije 0-24",
    "Atestirane instalacije",
  ],
};

export type ServiceItem = {
  slug: string;
  title: string;
  category: "montaza" | "servis" | "popravka" | "dijagnostika";
  subgroup?: string;
  shortDescription: string;
  priceFrom: number;
  priceTo?: number;
  priceNote?: string;
  featured?: boolean;
};

export const services: ServiceItem[] = [
  // ==================== MONTAŽA ====================
  // Podgrupa: Rasveta
  {
    slug: "montaza-plafonske-lampe",
    title: "Montaža plafonske lampe ili luster",
    category: "montaza",
    subgroup: "Rasveta",
    shortDescription: "Postavljanje plafonske svetiljke ili lustera na postojeću instalaciju, uključena provera veze.",
    priceFrom: 1500,
    priceNote: "po komadu",
    featured: true,
  },
  {
    slug: "montaza-spot-rasvete",
    title: "Ugradnja ugradnih (spot) LED svetiljki",
    category: "montaza",
    subgroup: "Rasveta",
    shortDescription: "Bušenje otvora u gips-kartonu ili spuštenom plafonu i ugradnja LED spotova, sa povezivanjem.",
    priceFrom: 900,
    priceNote: "po komadu, za 5+ komada",
  },
  {
    slug: "montaza-zidne-rasvete",
    title: "Montaža zidne svetiljke (aplike)",
    category: "montaza",
    subgroup: "Rasveta",
    shortDescription: "Postavljanje zidne svetiljke uključujući izvlačenje kabla do postojeće tačke.",
    priceFrom: 1800,
    priceNote: "po komadu",
  },
  {
    slug: "ugradnja-senzora-pokreta",
    title: "Ugradnja senzora pokreta za rasvetu",
    category: "montaza",
    subgroup: "Rasveta",
    shortDescription: "Postavljanje i podešavanje senzora pokreta za automatsko paljenje rasvete u hodnicima i stepeništima.",
    priceFrom: 2500,
    priceNote: "po komadu, sa senzorom",
  },
  {
    slug: "instalacija-nove-linije-rasvete",
    title: "Nova instalaciona linija za rasvetu",
    category: "montaza",
    subgroup: "Rasveta",
    shortDescription: "Provlačenje nove instalacije od razvodne table do svetlosne tačke, uključujući žleb i kanalicu.",
    priceFrom: 1600,
    priceTo: 2400,
    priceNote: "po dužnom metru trase, zavisi od podloge",
  },
  // Podgrupa: Utičnice i prekidači
  {
    slug: "montaza-uticnice",
    title: "Ugradnja nove utičnice (na postojeću instalaciju)",
    category: "montaza",
    subgroup: "Utičnice i prekidači",
    shortDescription: "Ugradnja standardne šuko utičnice sa povezivanjem na najbližu instalacionu tačku.",
    priceFrom: 1800,
    priceNote: "po komadu",
    featured: true,
  },
  {
    slug: "montaza-prekidaca",
    title: "Ugradnja ili zamena prekidača",
    category: "montaza",
    subgroup: "Utičnice i prekidači",
    shortDescription: "Zamena starog ili ugradnja novog prekidača (obično, serijskog ili naizmeničnog).",
    priceFrom: 1200,
    priceNote: "po komadu",
  },
  {
    slug: "ugradnja-uticnice-sa-uzemljenjem",
    title: "Ugradnja utičnice sa uzemljenjem (šuko)",
    category: "montaza",
    subgroup: "Utičnice i prekidači",
    shortDescription: "Ugradnja utičnice sa punom zaštitnom vezom na PE provodnik, po važećim propisima.",
    priceFrom: 2000,
    priceNote: "po komadu",
  },
  {
    slug: "ugradnja-uticnice-kuhinja-jaka-struja",
    title: "Ugradnja utičnice za jake trošila (šporet, bojler)",
    category: "montaza",
    subgroup: "Utičnice i prekidači",
    shortDescription: "Postavljanje pojačane utičnice sa zasebnim vodom i osiguračem za šporet, bojler ili klimu.",
    priceFrom: 3500,
    priceNote: "po komadu, uključena posebna linija do table",
  },
  {
    slug: "ugradnja-uticnice-vlazni-prostor",
    title: "Ugradnja utičnice za kupatilo (IP44)",
    category: "montaza",
    subgroup: "Utičnice i prekidači",
    shortDescription: "Ugradnja vodootporne utičnice odgovarajuće IP zaštite za vlažne prostore, po propisima za kupatila.",
    priceFrom: 2400,
    priceNote: "po komadu",
  },
  {
    slug: "montaza-dimera",
    title: "Ugradnja dimera (regulatora jačine svetla)",
    category: "montaza",
    subgroup: "Utičnice i prekidači",
    shortDescription: "Zamena običnog prekidača dimerom, uz proveru kompatibilnosti sa LED izvorima svetlosti.",
    priceFrom: 2200,
    priceNote: "po komadu",
  },
  // Podgrupa: Razvodni ormani i osigurači
  {
    slug: "kompletna-elektricna-instalacija-stan",
    title: "Kompletna nova instalacija za stan",
    category: "montaza",
    subgroup: "Razvodni ormani i osigurači",
    shortDescription: "Potpuna izrada električne instalacije od table do svih tačaka, za stanove u izgradnji ili kompletnoj rekonstrukciji.",
    priceFrom: 1900,
    priceTo: 2600,
    priceNote: "po kvadratnom metru stana",
    featured: true,
  },
  {
    slug: "kompletna-elektricna-instalacija-kuca",
    title: "Kompletna nova instalacija za kuću",
    category: "montaza",
    subgroup: "Razvodni ormani i osigurači",
    shortDescription: "Izrada instalacije za porodičnu kuću, uključujući razvodni orman, sve prostorije i spoljno osvetljenje.",
    priceFrom: 2100,
    priceTo: 2900,
    priceNote: "po kvadratnom metru objekta",
  },
  {
    slug: "ugradnja-razvodnog-ormana",
    title: "Ugradnja ili zamena razvodnog ormana",
    category: "montaza",
    subgroup: "Razvodni ormani i osigurači",
    shortDescription: "Postavljanje novog razvodnog ormana sa modularnom opremom, prilagođeno broju strujnih krugova.",
    priceFrom: 8000,
    priceTo: 15000,
    priceNote: "zavisi od broja modula i tipa ormana",
  },
  {
    slug: "ugradnja-automatskog-osiguraca",
    title: "Ugradnja automatskog osigurača",
    category: "montaza",
    subgroup: "Razvodni ormani i osigurači",
    shortDescription: "Ugradnja novog automatskog osigurača odgovarajuće jačine za dodatnu ili postojeću liniju.",
    priceFrom: 1400,
    priceNote: "po komadu, bez cene osigurača",
  },
  {
    slug: "ugradnja-zastitne-sklopke",
    title: "Ugradnja zaštitne strujne sklopke (FID)",
    category: "montaza",
    subgroup: "Razvodni ormani i osigurači",
    shortDescription: "Postavljanje diferencijalne (FID) sklopke koja isključuje struju pri kvaru izolacije, obavezna po propisima.",
    priceFrom: 3200,
    priceNote: "po komadu, bez cene sklopke",
    featured: true,
  },
  {
    slug: "prosirenje-broja-strujnih-krugova",
    title: "Proširenje broja strujnih krugova na tabli",
    category: "montaza",
    subgroup: "Razvodni ormani i osigurači",
    shortDescription: "Dodavanje novih strujnih krugova na postojeći razvodni orman radi rasterećenja ili dodatnih trošila.",
    priceFrom: 2800,
    priceNote: "po novom krugu",
  },
  // Podgrupa: Uzemljenje i zaštita
  {
    slug: "izrada-uzemljenja",
    title: "Izrada novog sistema uzemljenja",
    category: "montaza",
    subgroup: "Uzemljenje i zaštita",
    shortDescription: "Postavljanje uzemljivača i izvoda uzemljenja za objekte koji ga nemaju ili ga menjaju.",
    priceFrom: 18000,
    priceTo: 35000,
    priceNote: "zavisi od tipa terena i dužine trake",
  },
  {
    slug: "ugradnja-gromobranske-instalacije",
    title: "Ugradnja gromobranske instalacije",
    category: "montaza",
    subgroup: "Uzemljenje i zaštita",
    shortDescription: "Postavljanje hvataljki, sprovodnika i uzemljenja gromobranske instalacije za porodične kuće.",
    priceFrom: 45000,
    priceTo: 90000,
    priceNote: "zavisi od tipa krova i veličine objekta",
  },
  {
    slug: "ugradnja-prenaponske-zastite",
    title: "Ugradnja prenaponske zaštite (odvodnik prenapona)",
    category: "montaza",
    subgroup: "Uzemljenje i zaštita",
    shortDescription: "Postavljanje odvodnika prenapona u razvodni orman radi zaštite uređaja od udara groma i naponskih udara.",
    priceFrom: 5500,
    priceTo: 9000,
    priceNote: "zavisi od klase zaštite",
  },

  // ==================== SERVIS I ODRŽAVANJE ====================
  // Podgrupa: Pregled i atestiranje
  {
    slug: "godisnji-pregled-instalacije",
    title: "Godišnji pregled električne instalacije",
    category: "servis",
    subgroup: "Pregled i atestiranje",
    shortDescription: "Vizuelna i instrumentalna provera stanja instalacije, razvodnog ormana i zaštitnih uređaja.",
    priceFrom: 4500,
    priceNote: "za stan do 70m²",
    featured: true,
  },
  {
    slug: "atestiranje-instalacije",
    title: "Atestiranje električne instalacije",
    category: "servis",
    subgroup: "Pregled i atestiranje",
    shortDescription: "Merenje i izdavanje izveštaja o ispravnosti instalacije, potrebno pri useljenju, prodaji ili osiguranju.",
    priceFrom: 7000,
    priceTo: 12000,
    priceNote: "zavisi od broja strujnih krugova",
  },
  {
    slug: "provera-zastitne-sklopke",
    title: "Provera i test zaštitne (FID) sklopke",
    category: "servis",
    subgroup: "Pregled i atestiranje",
    shortDescription: "Funkcionalni test diferencijalne sklopke i provera vremena isključenja u slučaju kvara.",
    priceFrom: 1800,
    priceNote: "po sklopki",
  },
  {
    slug: "servisni-ugovor-poslovni-prostor",
    title: "Periodični servisni pregled za poslovni prostor",
    category: "servis",
    subgroup: "Pregled i atestiranje",
    shortDescription: "Redovan kvartalni ili polugodišnji pregled instalacije u kancelarijama, lokalima i magacinima.",
    priceFrom: 6000,
    priceTo: 15000,
    priceNote: "zavisi od kvadrature i broja tabli",
  },
  // Podgrupa: Zamena dotrajale opreme
  {
    slug: "zamena-stare-instalacije-delimicna",
    title: "Delimična zamena dotrajale instalacije",
    category: "servis",
    subgroup: "Zamena dotrajale opreme",
    shortDescription: "Zamena instalacije u jednoj ili dve prostorije bez zadiranja u ceo objekat, uz zadržavanje postojeće table.",
    priceFrom: 25000,
    priceTo: 60000,
    priceNote: "zavisi od broja prostorija i tačaka",
  },
  {
    slug: "zamena-aluminijumske-instalacije",
    title: "Zamena aluminijumske instalacije bakarnom",
    category: "servis",
    subgroup: "Zamena dotrajale opreme",
    shortDescription: "Kompletna zamena stare aluminijumske instalacije bakarnom, uključujući nove razvodne kutije i tablu.",
    priceFrom: 2200,
    priceTo: 3000,
    priceNote: "po kvadratnom metru",
    featured: true,
  },
  {
    slug: "zamena-porcelanske-table",
    title: "Zamena stare porcelanske table modularnom",
    category: "servis",
    subgroup: "Zamena dotrajale opreme",
    shortDescription: "Uklanjanje zastarele porcelanske razvodne table i ugradnja moderne modularne table sa FID zaštitom.",
    priceFrom: 9000,
    priceTo: 16000,
    priceNote: "zavisi od broja strujnih krugova",
  },
  {
    slug: "zamena-dotrajalih-uticnica-prekidaca",
    title: "Zamena dotrajalih utičnica i prekidača (paket)",
    category: "servis",
    subgroup: "Zamena dotrajale opreme",
    shortDescription: "Zamena više starih ili oštećenih utičnica i prekidača u jednom izlasku, po povoljnijoj paket ceni.",
    priceFrom: 1000,
    priceNote: "po komadu, za 10+ komada odjednom",
  },

  // ==================== POPRAVKA KVAROVA ====================
  // Podgrupa: Hitne intervencije
  {
    slug: "hitna-intervencija-nestanak-struje",
    title: "Hitna intervencija zbog potpunog nestanka struje",
    category: "popravka",
    subgroup: "Hitne intervencije",
    shortDescription: "Izlazak na teren u najkraćem roku radi utvrđivanja i otklanjanja uzroka potpunog prekida napajanja.",
    priceFrom: 3500,
    priceNote: "izlazak i dijagnostika, van radnog vremena viša tarifa",
    featured: true,
  },
  {
    slug: "hitna-intervencija-kratak-spoj",
    title: "Hitna intervencija zbog kratkog spoja",
    category: "popravka",
    subgroup: "Hitne intervencije",
    shortDescription: "Lociranje i saniranje kratkog spoja koji izaziva iskrenje, miris paljevine ili trajno ispadanje osigurača.",
    priceFrom: 4000,
    priceNote: "izlazak i osnovna sanacija",
  },
  {
    slug: "hitna-intervencija-vikend",
    title: "Hitna intervencija van radnog vremena / vikendom",
    category: "popravka",
    subgroup: "Hitne intervencije",
    shortDescription: "Izlazak servisera van standardnog radnog vremena, uveče, vikendom ili praznikom.",
    priceFrom: 5000,
    priceNote: "izlazak, uvećana tarifa za vanredni termin",
  },
  // Podgrupa: Popravke instalacije
  {
    slug: "ispadanje-osiguraca-dijagnostika-popravka",
    title: "Učestalo ispadanje osigurača, dijagnostika i popravka",
    category: "popravka",
    subgroup: "Popravke instalacije",
    shortDescription: "Utvrđivanje uzroka čestog ispadanja automatskog osigurača ili FID sklopke i otklanjanje kvara.",
    priceFrom: 2800,
    priceTo: 6000,
    priceNote: "zavisi od uzroka kvara",
    featured: true,
  },
  {
    slug: "popravka-loseg-kontakta",
    title: "Popravka lošeg kontakta u instalaciji",
    category: "popravka",
    subgroup: "Popravke instalacije",
    shortDescription: "Saniranje labavih spojeva u razvodnim kutijama ili tabli koji izazivaju treperenje svetla ili zagrevanje.",
    priceFrom: 2200,
    priceTo: 4500,
    priceNote: "po lokaciji kvara",
  },
  {
    slug: "popravka-instalacije-nakon-vlage",
    title: "Sanacija instalacije nakon prodora vode",
    category: "popravka",
    subgroup: "Popravke instalacije",
    shortDescription: "Provera i saniranje delova instalacije oštećenih prokišnjavanjem ili prodorom vode iz susednog stana.",
    priceFrom: 3000,
    priceTo: 10000,
    priceNote: "zavisi od obima štete",
  },
  {
    slug: "zamena-osteceneg-kabla",
    title: "Zamena oštećenog dela instalacionog kabla",
    category: "popravka",
    subgroup: "Popravke instalacije",
    shortDescription: "Zamena kabla oštećenog glodarima, prilikom bušenja zida ili usled starenja izolacije.",
    priceFrom: 1800,
    priceTo: 4000,
    priceNote: "po dužini oštećenog segmenta",
  },
  {
    slug: "popravka-uticnice-prekidaca-u-kvaru",
    title: "Popravka utičnice ili prekidača u kvaru",
    category: "popravka",
    subgroup: "Popravke instalacije",
    shortDescription: "Otklanjanje kvara na pojedinačnoj utičnici ili prekidaču koji ne radi ili iskri.",
    priceFrom: 1600,
    priceNote: "po komadu",
  },
  {
    slug: "popravka-nakon-udara-groma",
    title: "Sanacija instalacije nakon udara groma / prenapona",
    category: "popravka",
    subgroup: "Popravke instalacije",
    shortDescription: "Pregled i saniranje instalacije i uređaja oštećenih naponskim udarom, uključujući zamenu izgorelih komponenti.",
    priceFrom: 4500,
    priceTo: 12000,
    priceNote: "zavisi od obima oštećenja",
  },
  {
    slug: "otklanjanje-treperenja-svetla",
    title: "Otklanjanje treperenja ili slabljenja svetla",
    category: "popravka",
    subgroup: "Popravke instalacije",
    shortDescription: "Dijagnostika i popravka uzroka treperenja rasvete: od labavog kontakta do preopterećene linije.",
    priceFrom: 2000,
    priceTo: 4000,
  },

  // ==================== DIJAGNOSTIKA I MERENJE ====================
  // Podgrupa: Merenja
  {
    slug: "merenje-otpora-uzemljenja",
    title: "Merenje otpora uzemljenja",
    category: "dijagnostika",
    subgroup: "Merenja",
    shortDescription: "Instrumentalno merenje otpora uzemljivača sa izdavanjem izveštaja o izmerenim vrednostima.",
    priceFrom: 3500,
    priceNote: "po mernom mestu",
    featured: true,
  },
  {
    slug: "merenje-otpora-izolacije",
    title: "Merenje otpora izolacije provodnika",
    category: "dijagnostika",
    subgroup: "Merenja",
    shortDescription: "Provera kvaliteta izolacije instalacije radi otkrivanja skrivenih kvarova pre nego što izazovu požar ili udar struje.",
    priceFrom: 3000,
    priceTo: 6000,
    priceNote: "zavisi od broja strujnih krugova",
  },
  {
    slug: "termoviziski-pregled-table",
    title: "Termovizijski pregled razvodne table",
    category: "dijagnostika",
    subgroup: "Merenja",
    shortDescription: "Snimanje termalnom kamerom radi otkrivanja pregrejanih spojeva i preopterećenih vodova pre nego što dođe do kvara.",
    priceFrom: 6000,
    priceTo: 9000,
    priceNote: "zavisi od broja modula u tabli",
    featured: true,
  },
  {
    slug: "merenje-opterecenja-strujnih-krugova",
    title: "Merenje opterećenja strujnih krugova",
    category: "dijagnostika",
    subgroup: "Merenja",
    shortDescription: "Merenje realnog opterećenja pojedinačnih linija radi procene da li instalacija podnosi dodatna trošila.",
    priceFrom: 2500,
    priceTo: 5000,
  },
  // Podgrupa: Pregledi pre kupovine/renoviranja
  {
    slug: "pregled-instalacije-pre-kupovine-stana",
    title: "Pregled instalacije pre kupovine stana ili kuće",
    category: "dijagnostika",
    subgroup: "Pregledi pre kupovine/renoviranja",
    shortDescription: "Nezavisna provera stanja instalacije pre potpisivanja ugovora, sa pisanim nalazom i procenom troškova eventualne sanacije.",
    priceFrom: 6500,
    priceTo: 11000,
    priceNote: "zavisi od kvadrature nekretnine",
    featured: true,
  },
  {
    slug: "procena-instalacije-pre-renoviranja",
    title: "Procena instalacije pre renoviranja",
    category: "dijagnostika",
    subgroup: "Pregledi pre kupovine/renoviranja",
    shortDescription: "Analiza postojeće instalacije i predlog rasporeda novih tačaka pre početka radova na renoviranju.",
    priceFrom: 4000,
    priceTo: 8000,
  },
  {
    slug: "konsultacije-projektovanje-instalacije",
    title: "Konsultacije i osnovni raspored instalacije za novogradnju",
    category: "dijagnostika",
    subgroup: "Pregledi pre kupovine/renoviranja",
    shortDescription: "Savetodavni izlazak radi definisanja broja i rasporeda utičnica, prekidača i rasvetnih tela pre početka radova.",
    priceFrom: 5000,
    priceTo: 9000,
    priceNote: "zavisi od kvadrature objekta",
  },
];

export type ServicePageItem = {
  slug: string;
  title: string;
  heroSubtitle: string;
  body: unknown[];
  checklist: { title: string; description: string }[];
  ctaBandTitle: string;
  ctaBandText: string;
  ctaBandBullets: string[];
  whyUs: { title: string; description: string }[];
  faq: { question: string; answer: string }[];
};

export const servicePages: ServicePageItem[] = [
  {
    slug: "montaza",
    title: "Montaža električnih instalacija",
    heroSubtitle:
      "Nova instalacija za stanove, kuće i poslovni prostor, izvedena po pravilima struke i spremna za tehnički prijem.",
    body: [
      p("Kad me neko pozove da uradim novu instalaciju, prva stvar koju uvek pitam nije koliko utičnica žele, nego kako planiraju da žive u tom prostoru. Instalacija koja se radi za dvadeset ili trideset godina unapred mora da prati navike ukućana, ne samo trenutne standarde, i to je razlika koju vidim svaki put kad uporedim dobro i loše planiranu montažu."),
      h2("Kako pristupam novoj instalaciji"),
      p("Pre nego što povučem prvi metar kabla, sedim sa investitorom i prolazim kroz svaku prostoriju posebno. Gde stoji krevet, gde će biti televizor, da li planiraju radni sto uz prozor, da li kuhinja ima ostrvo. Ova faza traje kratko, ali štedi mnogo vremena i para kasnije, jer je mnogo jeftinije pomeriti tačku na papiru nego posle useljenja dovlačiti novu liniju kroz gotov zid."),
      p("Nakon toga radim raspored strujnih krugova. Ovo je deo posla koji investitori retko vide, ali je suštinski za bezbednost i udobnost korišćenja. Rasveta i utičnice se po pravilu razdvajaju na zasebne krugove, kuhinja i kupatilo dobijaju svoje posebne linije zbog jačih trošila i vlage, a šporet, bojler i eventualna klima uvek imaju sopstveni vod direktno do razvodnog ormana."),
      h2("Materijal koji koristim i zašto je to bitno"),
      p("Za sve nove instalacije koristim isključivo bakarne provodnike odgovarajućeg preseka, nikad aluminijumske, bez obzira na to što su nešto jeftiniji. Aluminijum vremenom oksidira na spojevima, kontakt slabi, mesto se zagreva, i to je jedan od najčešćih uzroka starih kvarova na koje nailazim kod instalacija iz osamdesetih i devedesetih godina. Ne vidim razlog da klijentu ugradim rešenje za koje već znam da će praviti probleme za petnaest godina."),
      p("Isto važi i za razvodne kutije, prekidače i utičnice. Radim sa proizvođačima čiji proizvodi imaju važeće ateste i koji se lako nabavljaju na tržištu, jer ako za pet godina nekom prekidaču zatreba zamena, želim da taj deo i dalje postoji u prodaji, a ne da se traži po sajtovima za polovnu opremu."),
      h2("Zaštita kao sastavni deo montaže, ne dodatak"),
      p("Svaka nova instalacija koju radim dobija diferencijalnu (FID) zaštitnu sklopku, po mogućstvu odvojenu za svaki veći strujni krug. Ovo nije stavka koju predlažem kao opciju da bih naplatio više, nego zakonska obaveza i, još važnije, stvar koja doslovno štiti nekog od strujnog udara ako dođe do kvara u izolaciji uređaja ili kabla. Isto tako, uvek ugrađujem odvodnik prenapona u tablu, jer je jedan udar groma dovoljan da spali sve što je priključeno u kući, od bojlera do televizora, a cena te zaštite je zanemarljiva u odnosu na štetu koju sprečava."),
      h2("Šta razlikuje montažu u stanu od montaže u kući"),
      p("Kod stanova, najveće ograničenje su obično već postavljene cevi i kanali u armiranobetonskoj ploči, pa se trasa mora prilagoditi onome što je izvodljivo bez rušenja nosećih elemenata. Kod kuća imam više slobode, ali se pojavljuju druge teme, uzemljenje i gromobranska zaštita, spoljno osvetljenje dvorišta, napajanje pomoćnih objekata poput garaže ili letnje kuhinje. Za kuće uvek preporučujem da se uzemljenje planira paralelno sa temeljima, dok se još kopa, jer je to trenutak kad je najjeftinije i najlakše izvesti kvalitetan uzemljivač."),
      h2("Tehnički prijem i dokumentacija"),
      p("Na kraju svake veće montaže radim merenja otpora izolacije i otpora uzemljenja i predajem investitoru zapisnik sa izmerenim vrednostima. Ovo nije formalnost, nego dokaz da je instalacija bezbedna i da zadovoljava propise, a taj papir će vam zatrebati i ako budete kasnije prodavali nekretninu ili sklapali osiguranje. Instalacija koja nema nikakvu dokumentaciju o merenjima je uvek znak da nešto nije urađeno kako treba, čak i kad na prvi pogled sve izgleda uredno."),
    ],
    checklist: [
      { title: "Plan strujnih krugova", description: "Rasveta, utičnice, kuhinja, kupatilo i jaka trošila razdvojeni na zasebne linije." },
      { title: "Bakarni provodnici", description: "Isključivo bakar odgovarajućeg preseka, bez kompromisa sa jeftinijim aluminijumom." },
      { title: "FID zaštitna sklopka", description: "Diferencijalna zaštita na svakom značajnijem strujnom krugu, po propisima." },
      { title: "Prenaponska zaštita", description: "Odvodnik prenapona u razvodnom ormanu za zaštitu od udara groma i naponskih udara." },
      { title: "Merenje i zapisnik", description: "Merenje otpora izolacije i uzemljenja sa pisanim zapisnikom po završetku radova." },
      { title: "Usklađenost sa propisima", description: "Instalacija izvedena u skladu sa važećim tehničkim propisima, spremna za tehnički prijem." },
    ],
    ctaBandTitle: "Planirate novogradnju ili kompletnu rekonstrukciju?",
    ctaBandText:
      "Javite se pre nego što počnu zidarski radovi. Zajedno ćemo isplanirati raspored tačaka tako da instalacija prati kako stvarno živite, ne samo trenutne standarde.",
    ctaBandBullets: [
      "Besplatna konsultacija i okvirna procena pre početka radova",
      "Rad usklađen sa građevinskom dinamikom, bez kašnjenja drugih majstora",
      "Pisani zapisnik o merenjima po završetku montaže",
      "Garancija na sve izvedene radove",
    ],
    whyUs: [
      { title: "Planiranje pre bušenja", description: "Svaka montaža počinje razgovorom o tome kako ćete stvarno koristiti prostor, ne generičkim rasporedom." },
      { title: "Samo proveren materijal", description: "Bakar, atestirana oprema i proizvođači čiji delovi ostaju dostupni na tržištu i posle godina." },
      { title: "Zaštita kao standard", description: "FID sklopka i prenaponska zaštita ugrađuju se po pravilu, ne kao dodatna stavka za doplatu." },
      { title: "Dokumentovan rezultat", description: "Svaka veća montaža završava se merenjima i pisanim zapisnikom, ne samo usmenim uveravanjem." },
    ],
    faq: [
      { question: "Koliko traje kompletna nova instalacija za stan?", answer: "Za prosečan stan od 60 do 70 kvadrata, računajte na pet do sedam radnih dana, u zavisnosti od broja prostorija i složenosti rasporeda." },
      { question: "Da li mogu sam da biram gde idu utičnice?", answer: "Da, apsolutno. Raspored pravimo zajedno na osnovu vašeg plana nameštaja, mi samo predlažemo tehnička rešenja i eventualne dopune iz iskustva." },
      { question: "Da li je FID sklopka obavezna?", answer: "Da, po važećim propisima diferencijalna zaštita je obavezan deo svake nove instalacije i značajno smanjuje rizik od strujnog udara." },
      { question: "Da li radite i manje dopune postojeće instalacije?", answer: "Da, radimo i pojedinačne utičnice, prekidače i rasvetna tela na postojećoj instalaciji, ne samo kompletne montaže." },
    ],
  },
  {
    slug: "servis",
    title: "Servis i redovno održavanje",
    heroSubtitle:
      "Periodični pregledi, atestiranje i zamena dotrajale opreme, pre nego što mali problem postane skup kvar.",
    body: [
      p("Najveći deo poziva koje dobijam za popravke ne bi ni postojao da je neko šest meseci ranije platio jedan redovan pregled instalacije. To nije prodajna fraza, nego nešto što viđam iz nedelje u nedelju. Instalacija stari tiho, bez upozorenja, sve dok se ne javi kroz treperenje svetla, zagrejanu utičnicu ili osigurač koji počne da ispada bez očiglednog razloga."),
      h2("Zašto instalacija uopšte stari, iako se ne koristi agresivno"),
      p("Provodnici, spojevi i zaštitna oprema izloženi su stalnim malim ciklusima zagrevanja i hlađenja svaki put kad se trošilo uključi i isključi. Vremenom, spojevi u razvodnim kutijama i na tabli mogu da olabave, izolacija provodnika gubi elastičnost, a kontakti u prekidačima i utičnicama se troše mehaničkim korišćenjem. Ništa od ovoga se ne vidi golim okom dok ne postane ozbiljno, i baš zato redovan pregled ima smisla, otkriva probleme dok su još jeftini za popravku."),
      h2("Šta tačno radim na godišnjem pregledu"),
      p("Pregled počinje vizuelnom proverom razvodnog ormana, tražim tragove zagrevanja, potamnele priključke ili neobičan miris paljevine, koji je često prvi znak lošeg kontakta. Zatim testiram rad FID zaštitne sklopke, jer sklopka koja izgleda ispravno spolja ponekad ne isključuje struju u propisanom vremenu kad zaista dođe do kvara, a to se ne može proveriti bez pravog testa. Na kraju radim merenje otpora izolacije na strujnim krugovima gde je to izvodljivo bez rasklapanja zidova, i sve nalaze upisujem u kratak izveštaj koji ostaje kod vas."),
      h2("Atestiranje, kad vam realno zatreba"),
      p("Atestiranje se razlikuje od običnog pregleda po tome što rezultat mora da bude formalni dokument sa izmerenim vrednostima, ne samo moja procena na licu mesta. Ovo najčešće traže kupci pre kupovine nekretnine, osiguravajuće kuće pre izdavanja polise, ili vlasnici poslovnog prostora radi usklađenosti sa propisima o bezbednosti na radu. Ako planirate prodaju stana u narednih godinu dana, iskreno preporučujem da atestiranje uradite unapred, jer otkriveni nedostatak tokom pregovora sa kupcem gotovo uvek dovodi do popusta na cenu koji je veći od same sanacije."),
      h2("Kada zamena, a ne popravka"),
      p("Kod starijih objekata, posebno onih sa aluminijumskom instalacijom iz sedamdesetih do devedesetih godina, redovno mi se dešava da tokom pregleda otkrijem da bi pojedinačne popravke bile samo gašenje požara, u doslovnom i prenesenom smislu. Kad vidim da su spojevi na više mesta oksidirani, da je izolacija provodnika krta i da puca pri savijanju, i da porcelanska tabla više nema mesta za savremenu zaštitnu opremu, iskreno kažem klijentu da je delimična ili kompletna zamena instalacije bolja investicija od niza pojedinačnih intervencija koje bi se ionako ubrzo ponovo pokvarile."),
      h2("Kako izgleda servisni ugovor za poslovni prostor"),
      p("Za lokale, kancelarije i magacine radim periodične preglede na kvartalnoj ili polugodišnjoj bazi, u zavisnosti od intenziteta korišćenja prostora i broja uređaja priključenih na instalaciju. Ovo je posebno važno za prostore sa jačim trošilima, rashladnim uređajima ili opremom koja radi non-stop, jer se tu opterećenje akumulira brže nego u stambenom prostoru, a prekid rada zbog kvara direktno znači izgubljen prihod za vlasnika."),
    ],
    checklist: [
      { title: "Vizuelna provera table", description: "Pregled razvodnog ormana radi tragova zagrevanja, oksidacije i labavih spojeva." },
      { title: "Test FID sklopke", description: "Funkcionalna provera da zaštitna sklopka zaista isključuje struju u propisanom vremenu." },
      { title: "Merenje otpora izolacije", description: "Provera stanja izolacije provodnika na dostupnim strujnim krugovima." },
      { title: "Pisani izveštaj", description: "Kratak nalaz sa izmerenim vrednostima i preporukama, ostaje kod vlasnika objekta." },
      { title: "Procena rizičnih mesta", description: "Identifikacija delova instalacije koji zahtevaju popravku ili zamenu u doglednom periodu." },
    ],
    ctaBandTitle: "Servisni ugovor za firme i zgrade",
    ctaBandText:
      "Za poslovne prostore i zajednice stanara nudimo redovne periodične preglede po unapred dogovorenom rasporedu, uz prioritetan izlazak u slučaju kvara.",
    ctaBandBullets: [
      "Kvartalni ili polugodišnji pregledi po dogovoru",
      "Prioritetan termin za ugovorne klijente u slučaju kvara",
      "Pisana dokumentacija za potrebe inspekcije i osiguranja",
      "Fiksna cena pregleda utvrđena unapred, bez iznenađenja",
    ],
    whyUs: [
      { title: "Pregled, ne pogađanje", description: "Koristimo merne instrumente, ne samo vizuelnu procenu, jer se najozbiljniji problemi ne vide golim okom." },
      { title: "Iskren savet o zameni", description: "Kad popravka više nema smisla, to i kažemo, umesto da naplaćujemo niz privremenih rešenja." },
      { title: "Dokumentacija koja vredi", description: "Izveštaji i atesti koje izdajemo prihvataju se kod osiguravajućih kuća i u prometu nekretnina." },
      { title: "Dosledan raspored", description: "Servisni ugovori se poštuju po dogovorenom kalendaru, bez podsećanja i odlaganja." },
    ],
    faq: [
      { question: "Koliko često treba raditi pregled instalacije?", answer: "Za stambeni prostor preporučujemo pregled na svake dve do tri godine, a za poslovni prostor sa intenzivnijim korišćenjem jednom godišnje ili češće." },
      { question: "Da li je atest isto što i redovan pregled?", answer: "Ne, atestiranje je formalniji proces sa merenjima i pisanim dokumentom koji se izdaje po standardizovanoj proceduri, dok je redovan pregled brža provera stanja." },
      { question: "Šta ako pregled pokaže ozbiljan problem?", answer: "Dobijate jasan nalaz sa procenom hitnosti i okvirnom cenom sanacije, odluku o daljim koracima uvek donosite vi." },
      { question: "Da li radite preglede za zajednice stanara?", answer: "Da, radimo periodične preglede zajedničkih delova instalacije u zgradama, uključujući stepenišnu rasvetu i glavne razvode." },
    ],
  },
  {
    slug: "popravka",
    title: "Popravka kvarova",
    heroSubtitle:
      "Od trajnog ispadanja osigurača do hitnih intervencija bez struje, brzo lociramo uzrok i rešavamo problem na licu mesta.",
    body: [
      p("Kvar na električnoj instalaciji retko izgleda dramatično dok se ne otkrije, obično je to samo osigurač koji ispadne po drugi put u istom danu, ili utičnica koja je malo toplija nego što bi trebalo. Problem je što se iza tako bezazlenog simptoma ponekad krije nešto što stvarno ugrožava bezbednost, i deo mog posla je da tu razliku prepoznam brzo, bez nepotrebnog rasklapanja zidova."),
      h2("Kako pristupam dijagnostici kvara"),
      p("Prvo pitanje koje postavljam klijentu nije šta se pokvarilo, nego kada je problem počeo i šta se promenilo neposredno pre toga. Da li je neko nedavno kupio novo trošilo, da li je bilo radova u stanu, da li se problem javlja uvek u isto doba dana. Ovi detalji često skrate dijagnostiku sa sat vremena na desetak minuta, jer usmeravaju gde tačno da tražim uzrok umesto da proveravam celu instalaciju od table naovamo."),
      h2("Ispadanje osigurača, najčešći poziv koji dobijam"),
      p("Kad osigurač ispada odmah nakon uključivanja jednog konkretnog uređaja, uzrok je skoro uvek kvar na tom uređaju ili njegovom kablu, ne na instalaciji, i to je dobra vest jer je jeftino za popravku. Teži slučaj je kad osigurač ispada bez jasnog obrasca, nasumično, u različito doba dana. Tu obično tražim labav kontakt u razvodnoj kutiji, oštećenje izolacije na mestu gde je kabl savijen ili pritisnut, ili preopterećenje linije sa previše trošila na istom krugu. Ovaj tip kvara zahteva strpljivo isključivanje trošila jedno po jedno dok se ne izoluje uzrok."),
      h2("Kratak spoj, zašto ne sme da čeka"),
      p("Kratak spoj je jedina vrsta kvara kod koje uvek insistiram na hitnom izlasku, bez obzira na doba dana. Miris paljevine, vidljivo iskrenje ili osigurač koji ispadne odmah pri uključivanju glavne sklopke su znaci da negde u instalaciji dolazi do direktnog kontakta faznog i nultog provodnika, što stvara visoku struju i realan rizik od požara. U ovakvim situacijama prvo isključujem sve dostupne strujne krugove i onda ih vraćam jedan po jedan dok se kvar ne izoluje na konkretnu liniju ili uređaj."),
      h2("Kvarovi koje donosi vreme, vlaga i glodari"),
      p("Značajan broj popravki koje radim nema veze sa starošću instalacije, nego sa spoljnim uzrocima. Prokišnjavanje krova ili curenje iz susednog stana može da ošteti izolaciju kablova provučenih kroz plafon, a to se često ne primeti odmah, nego tek kad vlaga izazove kvar nedeljama kasnije. Glodari u potkrovljima i podrumima znaju da pregrizu izolaciju kabla, što stvara skriveni rizik od kratkog spoja na mestu koje nije lako vidljivo. U oba slučaja, važno je ne samo popraviti oštećeni deo, nego proveriti i okolne segmente instalacije, jer retko kad je problem izolovan na tačno jedno mesto."),
      h2("Zašto uvek proveravam uzrok, ne samo simptom"),
      p("Mogao bih da zamenim pregoreli osigurač i odem za pet minuta, i tehnički bi struja radila. Ali ako je osigurač pregoreo zbog preopterećenja linije koje se ponavlja svaki put kad se uključe određena trošila, taj isti poziv ću dobiti ponovo za mesec dana. Zato uvek tražim pravi uzrok, čak i kad to znači da intervencija traje malo duže, jer je to jedini način da kvar stvarno bude rešen, a ne samo odložen."),
    ],
    checklist: [
      { title: "Brza dijagnostika", description: "Ciljano lociranje uzroka na osnovu opisa problema, bez nepotrebnog rasklapanja instalacije." },
      { title: "Hitan izlazak za kratak spoj", description: "Prioritetna intervencija kod znakova iskrenja, mirisa paljevine ili trajnog ispadanja osigurača." },
      { title: "Sanacija uzroka, ne samo simptoma", description: "Popravljamo pravi izvor kvara kako se problem ne bi ponovio za kratko vreme." },
      { title: "Provera okolnih segmenata", description: "Kod kvarova izazvanih vlagom ili glodarima proveravamo i susedne delove instalacije." },
      { title: "Objašnjenje nalaza", description: "Na kraju svake intervencije dobijate jasno objašnjenje šta je bio uzrok i šta je urađeno." },
    ],
    ctaBandTitle: "Hitne intervencije i popravke",
    ctaBandText:
      "Kratak spoj, potpuni nestanak struje ili miris paljevine ne čekaju radno vreme. Dostupni smo za hitne pozive svaki dan u nedelji.",
    ctaBandBullets: [
      "Prioritetan izlazak kod kratkog spoja ili mirisa paljevine",
      "Dijagnostika i sanacija u istoj poseti kad god je to izvodljivo",
      "Transparentna cena pre početka radova",
      "Dostupnost 0-24 za hitne slučajeve",
    ],
    whyUs: [
      { title: "Tražimo uzrok, ne krpimo simptom", description: "Svaka popravka počinje pitanjem zašto se kvar dogodio, ne samo kako da se trenutno otkloni." },
      { title: "Brz odziv na hitne pozive", description: "Kod kratkog spoja i potpunog nestanka struje izlazimo prioritetno, bez obzira na doba dana." },
      { title: "Iskustvo sa starim i novim instalacijama", description: "Podjednako sigurno radimo na aluminijumskim instalacijama iz osamdesetih i savremenim bakarnim sistemima." },
      { title: "Jasna komunikacija", description: "Objašnjavamo šta je uzrok kvara i šta tačno rade, bez stručnog žargona koji ništa ne znači klijentu." },
    ],
    faq: [
      { question: "Šta da radim ako mi non-stop ispada osigurač?", answer: "Isključite sumnjivi uređaj ako ga prepoznajete i pozovite nas. Ne pokušavajte da vraćate osigurač u nedogled, to je znak da negde postoji kvar koji treba locirati." },
      { question: "Koliko brzo možete da dođete kod hitne intervencije?", answer: "Za kratak spoj i potpuni nestanak struje trudimo se da izađemo isti dan, često u roku od sat do dva u okviru Niša i okoline." },
      { question: "Da li je bezbedno sam pokušati da otklonim kvar?", answer: "Ne preporučujemo. Rad na instalaciji pod naponom bez odgovarajućeg znanja i opreme nosi realan rizik od strujnog udara, čak i za naizgled jednostavne intervencije." },
      { question: "Da li dajete garanciju na izvedenu popravku?", answer: "Da, na sve izvedene popravke dajemo garanciju, a ako se isti kvar ponovi u garantnom roku, sanacija je besplatna." },
    ],
  },
  {
    slug: "dijagnostika",
    title: "Dijagnostika i merenje",
    heroSubtitle:
      "Merenje otpora uzemljenja, termovizijski pregled i provera instalacije pre kupovine stana, sa jasnim pisanim nalazom.",
    body: [
      p("Dijagnostika je deo posla koji najviše volim, jer tu se najjasnije vidi razlika između instalacije koja samo radi i instalacije koja je stvarno bezbedna. Ova dva pojma nisu isto, uređaj može da uključite i on će raditi godinama dok ispod površine postoji problem koji se ne vidi golim okom, sve dok jednog dana ne postane ozbiljan."),
      h2("Merenje otpora uzemljenja, zašto je to broj koji stvarno nešto znači"),
      p("Uzemljenje postoji da bi, u slučaju kvara na uređaju ili instalaciji, struja imala bezbedan put ka zemlji umesto kroz telo osobe koja dodirne metalni deo kućišta. Da bi ta zaštita zaista radila, otpor uzemljivača mora da bude ispod propisane granice, a jedini način da se to proveri je merenje specijalizovanim instrumentom, ne procena na osnovu izgleda instalacije. Radim ovo merenje kod novih kuća pre puštanja u rad, ali i kod starijih objekata gde uzemljenje nikad nije ni izmereno, samo pretpostavljeno da postoji i da radi."),
      h2("Termovizijski pregled, kako otkrivam problem pre nego što postane vidljiv"),
      p("Termalna kamera pokazuje raspodelu temperature na površini razvodne table i priključaka, i mesta koja su primetno toplija od okoline gotovo uvek ukazuju na loš kontakt ili preopterećenje koje se golim okom ne vidi. Ovo je posebno korisno kod starijih tabli i kod poslovnih prostora sa jačim trošilima, gde bih inače morao da isključim struju i rasklapam tablu da bih fizički proverio svaki spoj. Termovizijski pregled radim pod punim opterećenjem, dok su trošila uključena, jer se problem često ne vidi kad je sve u mirovanju."),
      h2("Merenje otpora izolacije, provera koju ne možete videti"),
      p("Izolacija provodnika je jedina barijera između struje i svega što je oko kabla, zidova, nameštaja, ljudi. Vremenom, pod uticajem vlage, toplote i mehaničkog naprezanja, izolacija gubi kvalitet, i to se ne vidi spolja sve dok ne dođe do kvara. Merenje otpora izolacije daje konkretan broj koji pokazuje da li je provodnik i dalje bezbedan ili se približava kraju svog veka, i to je merenje koje uvek preporučujem kao deo svakog ozbiljnijeg pregleda starije instalacije."),
      h2("Pregled pre kupovine stana ili kuće, iz mog ugla"),
      p("Kad me neko pozove da pregledam nekretninu pre kupovine, uloga mi je jasna, radim isključivo u interesu kupca, ne prodavca. Prolazim kroz razvodnu tablu, proveravam da li postoji i radi zaštitna sklopka, merim otpor izolacije na dostupnim krugovima, i vizuelno pregledam vidljive delove instalacije, utičnice, prekidače, razvodne kutije gde su dostupne. Na kraju dobijate pisani nalaz sa konkretnim stanjem i, ako ima nedostataka, okvirnom procenom troška sanacije, koju možete iskoristiti u pregovorima oko cene."),
      p("Iskreno, ovaj pregled najviše se isplati kod starijih zgrada, izgrađenih pre osamdesetih godina, gde je verovatnoća zastarele aluminijumske instalacije i nepostojećeg uzemljenja znatno veća. Kod novogradnje pregled traje kraće i ređe otkriva ozbiljne probleme, ali i tu se ponekad nađe nešto što vredi znati pre potpisivanja ugovora."),
      h2("Šta raditi sa nalazom posle pregleda"),
      p("Nalaz koji dobijate nije samo formalnost za fioku. Ako otkrijemo da uzemljenje ne zadovoljava propisanu vrednost, to je konkretan, merljiv problem koji se može i treba sanirati, ne nagađanje. Isto važi za termovizijski pregled, mesto koje se pokaže kao pregrejano na snimku je mesto gde je kvar već u nastajanju, i intervencija u tom trenutku je neuporedivo jeftinija i jednostavnija nego čekanje da se pretvori u kvar koji zahteva hitnu intervenciju."),
    ],
    checklist: [
      { title: "Merenje otpora uzemljenja", description: "Instrumentalna provera da uzemljivač zadovoljava propisanu vrednost otpora." },
      { title: "Termovizijski snimak pod opterećenjem", description: "Otkrivanje pregrejanih spojeva i preopterećenih vodova dok su trošila uključena." },
      { title: "Merenje otpora izolacije", description: "Provera stanja izolacije provodnika kao pokazatelj preostalog veka instalacije." },
      { title: "Pisani nalaz sa procenom", description: "Konkretan izveštaj sa izmerenim vrednostima i, po potrebi, okvirnom cenom sanacije." },
      { title: "Nezavisna procena za kupce", description: "Pregled nekretnine pre kupovine, isključivo u interesu naručioca pregleda." },
    ],
    ctaBandTitle: "Kupujete stan ili planirate renoviranje?",
    ctaBandText:
      "Pre nego što potpišete ugovor ili počnete radove, proverite stvarno stanje instalacije. Bolje potrošiti nekoliko hiljada dinara na pregled nego otkriti problem posle useljenja.",
    ctaBandBullets: [
      "Nezavisan pregled u interesu kupca ili investitora",
      "Pisani nalaz koji možete koristiti u pregovorima",
      "Termovizijski i instrumentalni pregled, ne samo vizuelna procena",
      "Preporuka za dalje korake ako se otkriju nedostaci",
    ],
    whyUs: [
      { title: "Merimo, ne procenjujemo napamet", description: "Svaki nalaz je potkrepljen konkretnim izmerenim vrednostima, ne samo utiskom sa terena." },
      { title: "Nezavisnost kod pregleda pre kupovine", description: "Radimo isključivo u interesu naručioca pregleda, bez obzira ko je vlasnik nekretnine." },
      { title: "Oprema za termovizijski pregled", description: "Koristimo termalnu kameru za otkrivanje problema koji se ne vide golim okom." },
      { title: "Jasan pisani nalaz", description: "Rezultat pregleda dobijate u razumljivom obliku, sa konkretnim brojevima i preporukama." },
    ],
    faq: [
      { question: "Koliko traje termovizijski pregled razvodne table?", answer: "Za standardnu tablu u stanu ili kući, pregled traje između trideset i četrdeset pet minuta, uključujući snimanje pod opterećenjem." },
      { question: "Da li je merenje uzemljenja obavezno za novu kuću?", answer: "Da, merenje otpora uzemljenja je obavezan deo tehničkog prijema nove instalacije i preduslov za bezbedno korišćenje objekta." },
      { question: "Šta ako pregled pre kupovine otkrije ozbiljan problem?", answer: "Dobijate pisani nalaz sa procenom troška sanacije koji možete koristiti u pregovorima o ceni nekretnine ili kao osnov za odustajanje od kupovine." },
      { question: "Da li mogu da naručim samo jedno merenje, ne ceo pregled?", answer: "Da, merenje otpora uzemljenja, otpora izolacije i termovizijski pregled mogu se naručiti pojedinačno, zavisno od toga šta vam je potrebno." },
    ],
  },
];

export type BlogPostItem = {
  slug: string;
  title: string;
  category: "bezbednost" | "odrzavanje" | "renoviranje" | "saveti";
  excerpt: string;
  summary: string;
  keyTakeaways: string[];
  publishedAt: string;
  body: unknown[];
  faq: { question: string; answer: string }[];
};

export const blogPosts: BlogPostItem[] = [
  {
    slug: "znaci-da-je-instalacija-zastarela-i-opasna",
    title: "Pet znakova da je vaša instalacija zastarela i opasna",
    category: "bezbednost",
    excerpt:
      "Ne mora da vas udari struja da biste znali da nešto nije u redu. Evo na šta obraćam pažnju kad procenjujem stanje starije instalacije.",
    summary:
      "Miris paljevine, tople utičnice, treperenje svetla pri uključivanju uređaja i osigurači koji stalno ispadaju su znaci koje ne treba ignorisati. Aluminijumska instalacija starija od trideset pet do četrdeset godina posebno zaslužuje pažnju, jer se degradira tiho, bez upozorenja.",
    keyTakeaways: [
      "Topla utičnica ili prekidač pri normalnom korišćenju nije normalna pojava",
      "Treperenje svetla kad uključite veći uređaj ukazuje na preopterećenu ili oslabljenu liniju",
      "Aluminijumska instalacija starija od trideset pet godina je ozbiljan kandidat za zamenu",
      "Miris paljevine, čak i kratak i slab, zahteva odmah isključivanje i poziv električaru",
    ],
    publishedAt: "2026-02-14T09:00:00.000Z",
    body: [
      p("Svaki put kad uđem u stan star tridesetak i više godina, prvo što uradim, i pre nego što me neko išta pita, jeste da otvorim razvodnu tablu i pogledam kako izgleda. Devedeset posto onoga što mi treba da znam o stanju instalacije vidim u prvih pet minuta, i evo šta tačno tražim, jer isto to možete i sami proveriti pre nego što me pozovete."),
      h2("Prvi znak: utičnice ili prekidači koji se greju"),
      p("Utičnica ili prekidač koji su primetno topli na dodir, čak i kad ništa jako ne troše, gotovo uvek znače da negde u kontaktu postoji otpor veći nego što bi trebalo, bilo zbog labavog spoja, bilo zbog oksidacije na aluminijumskom provodniku. Ovo nije nešto što treba čekati da se pogorša. Toplota na mestu spoja je energija koja se gubi, i vremenom, ta ista toplota može da otopi izolaciju oko provodnika i izazove kratak spoj."),
      h2("Drugi znak: treperenje svetla kad se uključi veći uređaj"),
      p("Ako svetlo u kuhinji primetno zatreperi kad uključite mikrotalasnu ili veš mašinu, to je instalacija koja vam govori da je opterećena više nego što bi trebalo za tu liniju. Kod novije instalacije ovo se gotovo nikad ne dešava jer su strujni krugovi pravilno razdvojeni, dok kod starijih instalacija često nalazim da rasveta i utičnice dele isti vod, što nije bilo neuobičajeno pre nekoliko decenija, ali danas ne zadovoljava ni osnovne standarde bezbednosti."),
      h2("Treći znak: osigurači koji ispadaju bez očiglednog razloga"),
      p("Povremeno ispadanje osigurača kad uključite previše uređaja odjednom je normalno, to je osigurač koji radi svoj posao. Problem je kad osigurač ispada nasumično, bez jasnog obrasca, jer to obično znači da negde postoji povremeni kratak spoj ili slab kontakt koji se javlja samo pod određenim uslovima, na primer kad se kabl malo pomeri ili zagreje. Ovakav kvar je teže locirati, ali ga nikako ne treba ignorisati samo zato što osigurač i dalje „radi svoj posao” i isključuje struju."),
      h2("Četvrti znak: aluminijumski provodnici"),
      p("Ako je vaš stan ili kuća izgrađena pre osamdesetih godina i nikad nije imala kompletnu zamenu instalacije, velika je verovatnoća da su provodnici aluminijumski, ne bakarni. Aluminijum sam po sebi nije opasan materijal, ali ima lošije karakteristike od bakra kad je u pitanju formiranje pouzdanog, dugotrajnog kontakta na spojevima, posebno u kombinaciji sa modernim prekidačima i utičnicama koji su projektovani prvenstveno za bakarne provodnike. Kombinacija starog aluminijuma i nove opreme je čest izvor problema koje viđam na terenu."),
      h2("Peti znak: nema zaštitne (FID) sklopke u razvodnom ormanu"),
      p("Ovo je verovatno najvažnija stavka na listi, jer se direktno tiče bezbednosti ljudi, ne samo opreme. Diferencijalna zaštitna sklopka isključuje struju u deliću sekunde ako dođe do kvara u izolaciji uređaja ili instalacije koji bi inače mogao da izazove strujni udar. Ako otvorite svoju tablu i vidite samo obične automatske osigurače, bez FID sklopke, to je nedostatak koji preporučujem da se sanira što pre, nezavisno od svega ostalog."),
      h2("Šta uraditi ako prepoznajete dva ili više ovih znakova"),
      p("Ne morate odmah da planirate kompletnu zamenu instalacije. Prvi razuman korak je pregled, gde dolazim, proveravam stanje table, radim osnovna merenja i dajem vam realnu sliku, uz procenu da li je potrebna delimična sanacija, dodavanje zaštitne sklopke, ili je situacija ozbiljnija i zahteva širu intervenciju. Iskreno, u većini slučajeva problem se može rešiti bez rušenja zidova, samo treba znati tačno gde i šta popraviti."),
    ],
    faq: [
      { question: "Da li stara instalacija uvek znači opasnost?", answer: "Ne nužno, ali starost povećava verovatnoću problema. Najbolji način da saznate stvarno stanje je pregled sa merenjima, ne pretpostavka na osnovu godina objekta." },
      { question: "Koliko košta da se doda FID sklopka na postojeću tablu?", answer: "Ugradnja zaštitne sklopke na postojeći razvodni orman obično košta nekoliko hiljada dinara, zavisno od tipa table i broja krugova koje treba pokriti." },
      { question: "Da li mogu sam da proverim da li imam aluminijumsku instalaciju?", answer: "Delimično, ako otvorite utičnicu i vidite sivkast, mat provodnik umesto crvenkastog sjajnog, verovatno je aluminijum, ali za sigurnu potvrdu najbolje je da to proveri električar." },
    ],
  },
  {
    slug: "zasto-osiguraci-stalno-ispadaju",
    title: "Zašto vam osigurač stalno ispada i kako da znate da li je hitno",
    category: "bezbednost",
    excerpt:
      "Osigurač koji ispada nije uvek isti problem. Evo kako razlikujem bezazlen slučaj preopterećenja od ozbiljnijeg kvara koji traži hitnu pažnju.",
    summary:
      "Osigurač ispada zbog tri glavna razloga: preopterećenja linije, kratkog spoja na uređaju ili instalaciji, i kvara na samoj FID zaštitnoj sklopki. Obrazac ispadanja, da li je uvek isti uređaj u pitanju ili je nasumično, najviše govori o pravom uzroku.",
    keyTakeaways: [
      "Ispadanje odmah pri uključivanju konkretnog uređaja obično znači kvar na tom uređaju, ne na instalaciji",
      "Nasumično ispadanje bez jasnog obrasca je znak koji zahteva stručnu dijagnostiku",
      "Ispadanje FID sklopke (ne automatskog osigurača) je uvek ozbiljniji signal",
      "Nikad ne premošćavajte ili blokirajte osigurač da bi prestao da ispada, to je direktan rizik od požara"
    ],
    publishedAt: "2026-03-05T09:00:00.000Z",
    body: [
      p("Ovo je poziv koji dobijam skoro svake nedelje, neko na drugom kraju linije, po pravilu pomalo nervozan, objašnjava da mu osigurač „stalno ispada” i pita da li treba da brine. Iskren odgovor je da zavisi, i u ovom tekstu objašnjavam po čemu razlikujem bezazlen slučaj od onog koji zahteva hitan izlazak."),
      h2("Prvo, koja vrsta osigurača vam ispada"),
      p("U razvodnom ormanu obično imate dve vrste zaštite, automatske osigurače koji štite pojedinačne linije od preopterećenja i kratkog spoja, i jednu ili dve zaštitne (FID) sklopke koje štite od strujnog udara. Ako vam ispada automatski osigurač za jednu konkretnu liniju, na primer samo za kuhinju, to je lokalizovan problem. Ako vam ispada glavna FID sklopka, koja isključuje struju u celom stanu odjednom, to je ozbiljniji signal jer znači da postoji kvar u izolaciji negde u instalaciji ili na nekom uređaju, i to je scenario gde preporučujem brži poziv."),
      h2("Obrazac ispadanja govori više nego što mislite"),
      h3("Ispada uvek kad uključite isti uređaj"),
      p("Ovo je, paradoksalno, dobra vest. Ako se osigurač uvek isključi u trenutku kad upalite veš mašinu, mikrotalasnu ili grejalicu, uzrok je gotovo sigurno na tom uređaju ili njegovom kablu, ne na vašoj instalaciji. Rešenje je popravka ili zamena uređaja, ne intervencija na instalaciji, mada je uvek dobro proveriti i samu utičnicu ako je uređaj stariji."),
      h3("Ispada kad se uključi previše uređaja odjednom"),
      p("Ovo je klasično preopterećenje linije, česta situacija kod starijih instalacija gde je previše utičnica spojeno na jedan strujni krug slabijeg preseka. Rešenje je obično dodavanje nove linije za deo trošila, na primer zaseban vod za kuhinjske aparate, čime se rasterećuje postojeći krug."),
      h3("Ispada nasumično, bez jasnog obrasca"),
      p("Ovo je slučaj koji zahteva pravu dijagnostiku, jer uzrok može biti bilo šta od labavog kontakta u razvodnoj kutiji, oštećene izolacije na mestu gde je kabl savijen ili pritisnut nameštajem, do vlage koja je ušla u instalaciju. Ovde ne pomaže nagađanje, potrebno je sistematski isključivati i proveravati delove instalacije dok se kvar ne izoluje."),
      h2("Šta nikad ne treba raditi"),
      p("Nikad nemojte premošćavati osigurač žicom ili metalnim predmetom da bi prestao da ispada, i nikad nemojte ugrađivati osigurač veće jačine od one predviđene za taj strujni krug samo da bi „rešili” učestalo ispadanje. Osigurač ispada zato što nešto nije u redu, i onemogućavanje te zaštite ne rešava problem, samo uklanja signal upozorenja dok se problem ne pretvori u požar. Ovo zvuči kao ekstremna izjava, ali sam na terenu video posledice tačno ovakve improvizacije, i nije lepo za videti."),
      h2("Kad je situacija stvarno hitna"),
      ...bullets([
        "Osjeća se miris paljevine ili dima pri ili nakon ispadanja",
        "Osigurač ili prekidač je vidno pocrneo ili deformisan",
        "Čuje se pucketanje ili zujanje iz razvodne table",
        "Ispada glavna FID sklopka, ne samo pojedinačni osigurač",
        "Ispadanje se javlja sve češće u kratkom periodu, u roku od nekoliko dana",
      ]),
      p("Ako prepoznajete bilo šta od ovoga, isključite glavni prekidač ako je bezbedno to učiniti i pozovite nas odmah. Za sve ostale, blaže slučajeve, dovoljno je zakazati redovan termin u narednih nekoliko dana."),
    ],
    faq: [
      { question: "Da li je opasno da osigurač povremeno ispadne?", answer: "Ne, povremeno ispadanje pri preopterećenju je normalna, bezbedna funkcija osigurača. Opasno je ignorisati učestalo ili nasumično ispadanje bez pokušaja da se otkrije uzrok." },
      { question: "Koliko dugo mogu da čekam ako mi ispada osigurač?", answer: "Ako je obrazac jasan i vezan za konkretan uređaj, možete sačekati nekoliko dana do redovnog termina. Ako je ispadanje nasumično ili praćeno mirisom paljevine, preporučujemo hitan poziv." },
      { question: "Zašto mi ispada osigurač samo kad pada kiša?", answer: "Ovo često ukazuje na vlagu koja je ušla u spoljnu instalaciju, razvodnu kutiju ili prodire kroz oštećenu izolaciju, i zahteva pregled na terenu da bi se tačno locirala." },
    ],
  },
  {
    slug: "da-li-je-samostalan-elektricarski-rad-legalan-i-bezbedan",
    title: "Da li smete sami da radite na strujnim instalacijama u Srbiji",
    category: "saveti",
    excerpt:
      "Zamena sijalice je jedno, a provlačenje nove linije kroz zid nešto sasvim drugo. Evo gde je granica koju ne bih prelazio ni ja bez odgovarajuće pripreme.",
    summary:
      "Sitne intervencije poput zamene sijalice ili prekidača identičnog tipa su uobičajene i relativno bezbedne uz osnovnu opreznost. Radovi na razvodnom ormanu, provlačenje novih linija i bilo šta što zahteva tehnički prijem trebalo bi prepustiti licenciranom električaru, i zbog bezbednosti i zbog validnosti dokumentacije.",
    keyTakeaways: [
      "Zamena sijalice ili identičnog prekidača/utičnice je uobičajena kućna intervencija",
      "Rad na razvodnom ormanu i provlačenje novih linija nosi realan rizik bez odgovarajućeg znanja",
      "Za nekretnine u prometu i osiguranje često je potrebna dokumentacija koju izdaje ovlašćeno lice",
      "Najveći rizik kod samostalnog rada nije trenutna greška, nego skriveni nedostatak koji se otkrije godinama kasnije",
    ],
    publishedAt: "2026-04-01T09:00:00.000Z",
    body: [
      p("Ovo pitanje mi ljudi postavljaju često, obično kroz varijaciju „mogu li ovo sam da uradim, ili je pametnije da pozovem nekoga”. Iskren odgovor zavisi od toga o kakvom se poslu radi, i u ovom tekstu pokušavam da povučem realnu, praktičnu granicu, ne samo formalnu."),
      h2("Šta je uobičajeno i relativno bezbedno samostalno raditi"),
      p("Zamena pregorele sijalice, čišćenje prekidača ili utičnice spolja, zamena prekidača identičnim modelom uz prethodno isključivanje odgovarajućeg osigurača, sve su to intervencije koje veliki broj ljudi radi samostalno bez problema. Ključna reč je „identičnim”, jer zamena jednog tipa uređaja drugim, na primer običnog prekidača dimerom, već zahteva razumevanje kompatibilnosti sa vrstom rasvete, što nije uvek očigledno."),
      h2("Gde bih ja lično stao, i zašto"),
      p("Bilo kakav rad unutar razvodnog ormana, provlačenje nove linije kroz zid, dodavanje nove utičnice na postojeći strujni krug, ili bilo šta što zahteva otvaranje zida ili poda, po mom mišljenju prelazi granicu koju treba prepustiti nekome ko to radi profesionalno. Ne zato što je nemoguće naučiti, nego zato što posledice greške nisu uvek trenutne. Loše urađen spoj možda neće praviti probleme mesecima, čak godinama, a onda se javi baš u trenutku kad je najgore, na primer kao uzrok požara ili strujnog udara."),
      h2("Pravni aspekt, kad vam stvarno treba licencirani izvođač"),
      p("Za novogradnju i veće rekonstrukcije, tehnički prijem instalacije zahteva dokumentaciju koju izdaje odgovorno lice, sa odgovarajućim merenjima i atestima. Ovo nije nešto što možete sami sebi izdati, bez obzira koliko dobro ste uradili posao. Slično važi i za osiguranje nekretnine, mnoge polise imaju klauzule koje se odnose na stanje električne instalacije, i u slučaju štete izazvane požarom, osiguravajuća kuća može tražiti dokaz da je instalacija bila u ispravnom stanju."),
      h2("Najveći rizik nije ono što mislite"),
      p("Kad ljudi razmišljaju o riziku samostalnog rada, prva asocijacija je strujni udar u trenutku rada, i to jeste realan rizik, ali uz osnovnu opreznost i isključivanje odgovarajućeg osigurača, taj rizik je kontrolisan za jednostavnije intervencije. Veći, podmukliji rizik je loše izveden spoj koji radi naizgled normalno godinama, a onda otkaže na način koji ugrožava nekog drugog, možda čak i novog vlasnika stana koji nema pojma da je taj deo instalacije rađen amaterski."),
      h2("Praktičan savet: kad sumnjate, pitajte pre nego što počnete"),
      p("Ne moram da dobijem posao da bih odgovorio na kratko pitanje telefonom. Ako niste sigurni da li je neka intervencija u domenu „mogu sam” ili „treba profesionalac”, slobodno pozovite i opišite šta planirate, radije ću vam za dva minuta reći da je to bezbedno da uradite sami, nego da posle sanirati posledice nečega što je krenulo po zlu."),
    ],
    faq: [
      { question: "Mogu li sam da zamenim prekidač istim modelom?", answer: "Da, uz prethodno isključivanje odgovarajućeg osigurača na razvodnoj tabli, ovo je uobičajena i relativno bezbedna intervencija za većinu ljudi." },
      { question: "Da li mi treba dozvola za manje elektro radove u sopstvenom stanu?", answer: "Za sitne intervencije poput zamene prekidača ili sijalice, ne treba vam posebna dozvola. Za veće zahvate koji utiču na instalaciju, preporučuje se angažovanje licenciranog izvođača, posebno zbog dokumentacije." },
      { question: "Šta ako prodajem stan gde su radovi rađeni samostalno?", answer: "Preporučujemo pregled pre prodaje kako biste imali jasnu sliku stanja instalacije i eventualno sanirate sporne delove pre nego što to postane predmet pregovora sa kupcem." },
    ],
  },
  {
    slug: "sta-proveravam-pri-pregledu-instalacije-pre-kupovine-stana",
    title: "Šta tačno proveravam kada pregledam instalaciju pre kupovine stana",
    category: "renoviranje",
    excerpt:
      "Kupovina stana je verovatno najveća investicija koju ćete napraviti. Evo tačno šta radim kada me neko pozove da proverim instalaciju pre nego što potpiše ugovor.",
    summary:
      "Pregled pre kupovine obuhvata vizuelnu proveru razvodne table, test zaštitne sklopke, merenje otpora izolacije na dostupnim krugovima i procenu starosti i tipa provodnika. Rezultat je pisani nalaz koji kupac može koristiti u pregovorima ili kao osnov za odluku.",
    keyTakeaways: [
      "Pregled traje između sat i sat i po vremena za prosečan stan",
      "Najvažniji pojedinačni nalaz je prisustvo i ispravnost FID zaštitne sklopke",
      "Aluminijumska instalacija nije diskvalifikujuća, ali menja procenu vrednosti i budućih troškova",
      "Pisani nalaz je koristan alat u pregovorima o ceni, ne samo informacija za sebe",
    ],
    publishedAt: "2026-04-22T09:00:00.000Z",
    body: [
      p("Kad me pozove neko ko je pronašao stan koji mu se sviđa i želi proveru pre potpisivanja, uvek na početku razgovora kažem istu stvar: radim isključivo u vašem interesu, ne u interesu prodavca ili agencije. Ovo je važno da se kaže naglas, jer nalaz koji dajem mora da bude iskren, čak i kad to znači da će kupac na osnovu njega tražiti popust ili odustati od kupovine."),
      h2("Prvi korak: razgovor i osnovne informacije"),
      p("Pre nego što uopšte otvorim tablu, pitam koliko je zgrada stara, da li je bilo renoviranja i kada, i da li prodavac zna nešto o poslednjem servisu ili proveri instalacije. Ove informacije mi daju okvir, stan iz devedesetih koji nikad nije renoviran zahteva drugačiji nivo pažnje od stana u zgradi izgrađenoj pre pet godina."),
      h2("Drugi korak: vizuelni pregled razvodne table"),
      p("Ovde tražim tip table (moderna modularna ili stara porcelanska), prisustvo i tip zaštitnih uređaja, tragove zagrevanja ili oksidacije na spojevima, i opšti utisak o urednosti ožičenja. Neuredna, improvizovana tabla sa dodatnim, vidno naknadno dodatim vodovima je uvek signal da je vredno dublje pogledati ostatak instalacije."),
      h2("Treći korak: test zaštitne sklopke"),
      p("Svaka tabla sa modernom zaštitom ima test dugme na FID sklopki, koje simulira kvar i proverava da li sklopka zaista isključuje struju. Iznenađujuće često nailazim na sklopke koje fizički postoje, ali ne funkcionišu ispravno, što znači da stan izgleda zaštićen, a zapravo nije. Ako sklopka uopšte ne postoji, to je stavka koju uvek posebno naglašavam u nalazu, jer je ugradnja relativno jeftina, ali suštinski važna za bezbednost."),
      h2("Četvrti korak: merenje otpora izolacije"),
      p("Gde je to izvodljivo bez rasklapanja zidova, merim otpor izolacije na dostupnim strujnim krugovima direktno sa razvodne table. Ovo merenje daje konkretan broj koji pokazuje da li je izolacija provodnika i dalje u dobrom stanju ili se približava kraju svog veka. Nizak otpor izolacije je jasan signal da instalacija, ili bar deo nje, uskoro zahteva zamenu."),
      h2("Peti korak: procena tipa i starosti provodnika"),
      p("Kroz otvorene utičnice ili prekidače, kad je to moguće bez oštećenja, procenjujem da li su provodnici bakarni ili aluminijumski, i vizuelno stanje izolacije. Ovo je često presudna informacija za kupca, jer aluminijumska instalacija starija od trideset pet do četrdeset godina realno znači da bi kompletna zamena trebalo da bude uračunata u budžet, bilo kroz nižu ponuđenu cenu, bilo kroz plan radova nakon useljenja."),
      h2("Šta dobijate na kraju"),
      p("Pisani nalaz sa svim izmerenim vrednostima, opisom stanja table i instalacije, i, ako ima nedostataka, okvirnom procenom troška sanacije. Ovaj dokument nije samo informacija za vas, mnogi klijenti su ga uspešno koristili kao argument u pregovorima o ceni, a neki su na osnovu njega odlučili da odustanu od kupovine kad se pokazalo da je potrebna sanacija veća nego što su bili spremni da prihvate."),
    ],
    faq: [
      { question: "Koliko unapred treba zakazati pregled pre kupovine?", answer: "Preporučujemo zakazivanje čim se ozbiljno zainteresujete za nekretninu, obično možemo izaći u roku od nekoliko dana, a pregled traje sat do sat i po." },
      { question: "Da li prodavac mora da dozvoli pregled?", answer: "Pregled se po pravilu radi uz saglasnost prodavca ili agenta, i to je standardna praksa koju ozbiljni prodavci retko odbijaju." },
      { question: "Šta ako pregled otkrije da nema uzemljenja?", answer: "To beležimo u nalazu sa procenom troška izrade uzemljenja, što je značajna, ali ne i nerešiva stavka, i može poslužiti kao osnov za pregovore o ceni." },
    ],
  },
  {
    slug: "kako-izabrati-elektricara-pitanja-koja-treba-postaviti",
    title: "Kako izabrati električara: pitanja koja vredi postaviti pre nego što potvrdite termin",
    category: "saveti",
    excerpt:
      "Cena nije jedini, a ni najvažniji faktor. Evo šta bih ja pitao da tražim električara za sopstveni stan, iz perspektive nekog ko je godinama na terenu.",
    summary:
      "Pri izboru električara vredi proveriti da li izdaje račun i garanciju, da li poseduje odgovarajuće kvalifikacije, da li jasno objašnjava obim posla pre početka, i da li koristi atestiran materijal. Najniža ponuđena cena je često znak da se negde štedi na koracima koji se kasnije skupo plate.",
    keyTakeaways: [
      "Tražite pisanu ponudu ili barem jasno opisan obim posla pre početka radova",
      "Račun i garancija na izvedene radove su standard koji ozbiljan izvođač uvek nudi",
      "Enormno niska cena u odnosu na prosek tržišta je razlog za oprez, ne za slavlje",
      "Dobar električar objašnjava šta i zašto radi, ne izbegava pitanja",
    ],
    publishedAt: "2026-05-10T09:00:00.000Z",
    body: [
      p("Ljudi me često pitaju za preporuku kolege iz drugih gradova, i svaki put kad odgovaram, dajem im isti set pitanja koja bih i sam postavio nekom kome bih poverio svoju instalaciju. Ne postoji jedinstven „pravi” odgovor na svako od ovih pitanja, ali način na koji neko odgovara govori mnogo o njegovoj ozbiljnosti."),
      h2("Da li izdaje račun i garanciju na izveden posao"),
      p("Ovo je osnovno, ali iznenađujuće često zanemareno pitanje. Račun nije samo formalnost za poresku upravu, on je i vaš dokaz da je posao izveden, korisan ako se problem ponovi ili ako kasnije prodajete nekretninu. Garancija na rad, obično šest meseci do godinu dana, pokazuje da izvođač stoji iza kvaliteta svog posla, ne samo da je „odradio i otišao”."),
      h2("Da li objašnjava obim posla i cenu pre početka"),
      p("Ozbiljan električar će, pre nego što počne rad, objasniti šta tačno planira da uradi i zašto, i dati vam jasnu cenu ili barem opseg cene pre nego što uzme alat u ruke. Ako neko izbegava konkretan odgovor na pitanje „koliko će ovo koštati” i stalno odgovara neodređeno, to je signal da će konačna cena verovatno biti veća nego što ste očekivali."),
      h2("Da li koristi atestiran materijal"),
      p("Pitajte konkretno kakvu opremu koristi, i ne zadovoljavajte se odgovorom „dobru robu”. Atestirana oprema poznatih proizvođača je nešto skuplja od nepoznatih, neatestiranih alternativa, ali razlika u ceni je mala u odnosu na ukupan trošak posla, dok je razlika u pouzdanosti i bezbednosti značajna. Ovo je jedno od retkih mesta gde uštedu od nekoliko hiljada dinara ne bih preporučio."),
      h2("Da li vam jasno objašnjava šta je pronašao i šta radi"),
      p("Dobar znak je kad vam električar, na primer tokom dijagnostike kvara, objasni šta je tačno pronašao i zašto je do problema došlo, umesto da samo kaže „popravljeno je” i ode. Ovo ne znači da morate da razumete svaki tehnički detalj, ali objašnjenje pokazuje da je posao stvarno urađen razumno, ne samo „zakrpljen” da problem privremeno nestane."),
      h2("Zašto najniža cena nije uvek najbolji izbor"),
      p("Razumem da cena igra ulogu, i sam vodim računa da moje cene budu realne za tržište. Ali kad vidim ponudu koja je značajno niža od proseka, prvo pitanje koje sebi postavim je gde se štedi, da li je to na materijalu, na vremenu provedenom na svakom koraku poput vakumiranja ili testiranja, ili na iskustvu izvođača. Ova ušteda se retko vidi odmah, ali se gotovo uvek naplati kasnije, kroz kraći vek trajanja instalacije ili učestalije kvarove."),
      h2("Poslednji, možda najvažniji test"),
      p("Kako se neko ponaša kad postavite pitanje koje im možda ne odgovara, na primer „zašto je ovo skuplje nego kod konkurencije” ili „šta tačno uključuje ova cena”. Izvođač koji strpljivo i konkretno odgovori zaslužuje poverenje više nego onaj koji postane odbrambeno raspoložen ili izbegava odgovor. Iskreno, ovo je test koji bih i sam želeo da prođem kad me neko pita isto."),
    ],
    faq: [
      { question: "Da li je normalno tražiti pisanu ponudu pre početka radova?", answer: "Da, apsolutno, i ozbiljan izvođač neće imati problem da vam da jasnu ponudu ili barem opisan obim posla i okvirnu cenu pre nego što počne." },
      { question: "Koliko treba da traje garancija na elektro radove?", answer: "Standardna garancija je između šest meseci i godinu dana, zavisno od vrste posla, veći zahvati poput kompletne montaže obično nose dužu garanciju." },
      { question: "Da li treba da tražim preporuke pre angažovanja?", answer: "Korisno je, ali nije neophodno, jer konkretna pitanja o materijalu, garanciji i obimu posla često daju jasniju sliku od opštih preporuka." },
    ],
  },
  {
    slug: "priprema-instalacije-za-renoviranje",
    title: "Kako pripremiti instalaciju stana pre nego što počne renoviranje",
    category: "renoviranje",
    excerpt:
      "Renoviranje je idealna prilika da se instalacija uradi kako treba, ali samo ako se elektro deo isplanira pre, ne usred radova. Evo redosleda koji preporučujem.",
    summary:
      "Elektro deo renoviranja treba planirati pre početka radova, ne usred njih, jer izmene nakon što su zidovi već zatvoreni koštaju mnogo više. Ključni koraci su procena postojeće instalacije, definisanje rasporeda novih tačaka prema planu nameštaja, i usklađivanje sa ostalim izvođačima oko redosleda radova.",
    keyTakeaways: [
      "Elektro raspored treba definisati pre zidarskih radova, ne posle njih",
      "Procena postojeće instalacije pokazuje da li je pametnije raditi delimičnu ili kompletnu zamenu",
      "Redosled radova (prvo elektro trase, pa gletovanje i farbanje) štedi vreme i novac",
      "Rezervne cevi (prazne instalacione cevi) tokom renoviranja su jeftin način da se olakšaju buduće izmene",
    ],
    publishedAt: "2026-06-08T09:00:00.000Z",
    body: [
      p("Najčešća greška koju vidim kod renoviranja nije loše izveden elektro rad, nego elektro rad koji je isplaniran prekasno, kad su zidovi već zagletovani i obojeni, i kad svaka izmena znači ponovno bušenje i prljavštinu. U ovom tekstu opisujem redosled koji preporučujem svima koji planiraju veće renoviranje."),
      h2("Korak jedan: procena postojeće instalacije, pre nego što odlučite šta menjate"),
      p("Pre nego što odlučite da li menjate celu instalaciju ili samo dodajete par tačaka, vredi uraditi kratku procenu postojećeg stanja. Ako je instalacija bakarna, relativno nova i u dobrom stanju, često ima smisla samo dodati nove tačke tamo gde ih nedostaje. Ako je aluminijumska ili stara više od tri decenije, renoviranje je idealna prilika da se uradi kompletna zamena, jer ćete svakako otvarati zidove za druge radove, pa je dodatni trošak elektro dela relativno manji nego kad bi se radio kao samostalna intervencija kasnije."),
      h2("Korak dva: raspored tačaka prema stvarnom planu nameštaja, ne generičkom šablonu"),
      p("Ovo je faza koju najviše volim jer tu se prave odluke koje ćete osećati svaki dan narednih dvadeset godina. Sednite sa planom prostorije i razmislite konkretno, gde ide krevet, da li imate noćne lampe sa obe strane, gde stoji televizor i da li vam treba utičnica iza njega za skrivanje kablova, da li planirate radni sto, da li kuhinja ima ostrvo koje zahteva sopstvenu utičnicu. Generički raspored, po jedna utičnica na svakom zidu, retko odgovara stvarnom korišćenju prostora, i skoro uvek se na kraju pokaže da negde nedostaje utičnica tačno tamo gde vam najviše treba."),
      h2("Korak tri: usklađivanje redosleda sa drugim izvođačima"),
      p("Elektro trase se rade pre gletovanja i farbanja, to je jasno svima, ali manje je očigledno da treba uskladiti i sa vodoinstalaterima, posebno u kupatilu i kuhinji, gde se elektro i vodovodne instalacije često ukrštaju u istom delu zida. Dobra praksa je da elektro i vodoinstalater dođu istog dana na dogovor oko trasa, kako se ne bi desilo da vodovodna cev prolazi tačno tamo gde je planirana utičnica."),
      h2("Korak četiri: razmislite o rezervnim cevima za budućnost"),
      p("Ovo je mali trik koji preporučujem svakom klijentu tokom renoviranja, postavljanje jedne ili dve prazne instalacione cevi od table do ključnih tačaka u stanu, na primer do dnevnog boravka ili budućeg radnog prostora. Cena ove cevi tokom renoviranja je zanemarljiva, ali vam omogućava da za par godina, ako vam zatreba nova linija, na primer za dodatni uređaj ili pametnu kuću, ne morate ponovo da bušite i prljate gotov zid, samo provučete novi kabl kroz već postojeću cev."),
      h2("Korak pet: ne zaboravite pametne funkcije, čak i ako ih odmah ne koristite"),
      p("Sve više klijenata pita za pripremu instalacije za pametne prekidače, senzore pokreta ili automatizovanu rasvetu. Čak i ako trenutno ne planirate da to sve ugradite, jeftinije je pripremiti dodatni provodnik (na primer neutralni vod na mestu prekidača, koji je potreban za većinu pametnih prekidača) tokom renoviranja nego naknadno, kad je zid već gotov. Ne morate odmah kupiti opremu, samo ostavite mogućnost otvorenu."),
      h2("Kad je najbolje vreme da nas pozovete"),
      p("Idealno, u fazi kad imate gotov idejni plan prostorija i okvirnu ideju rasporeda nameštaja, ali pre nego što je bilo šta zazidano. U tom trenutku možemo zajedno da prođemo kroz svaku prostoriju, predložimo raspored na osnovu iskustva sa sličnim prostorima, i date vam realnu cenu pre nego što majstori uopšte počnu da rade."),
    ],
    faq: [
      { question: "Da li je jeftinije raditi elektro instalaciju tokom renoviranja ili posle?", answer: "Znatno je jeftinije tokom renoviranja, dok su zidovi već otvoreni za druge radove. Naknadna izmena gotovog zida uvek podrazumeva dodatni trošak bušenja, gletovanja i farbanja." },
      { question: "Koliko unapred treba pozvati električara u odnosu na početak renoviranja?", answer: "Preporučujemo kontakt čim imate gotov idejni raspored prostorija, obično dve do četiri nedelje pre planiranog početka radova, kako bismo stigli da se uklopimo u vaš raspored izvođača." },
      { question: "Da li vredi postavljati prazne cevi za buduće linije?", answer: "Da, to je jeftina investicija koja olakšava buduće izmene bez ponovnog otvaranja zida, i preporučujem je kod svakog većeg renoviranja." },
    ],
  },
];
