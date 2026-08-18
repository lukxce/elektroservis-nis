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
// Paragraf sa jednim ugrađenim linkom (npr. ka stranici usluge), po Portable
// Text konvenciji za markDefs/marks.
function pLink(before: string, linkText: string, href: string, after = "") {
  const children = [
    { _type: "span", text: before },
    { _type: "span", text: linkText, marks: ["link1"] },
  ];
  if (after) children.push({ _type: "span", text: after });
  return {
    _type: "block",
    style: "normal",
    children,
    markDefs: [{ _type: "link", _key: "link1", href }],
  };
}

export const siteSettings = {
  title: "Električar Niš",
  tagline: "Montaža, servis i popravka električnih instalacija u Nišu",
  phone: "063 133 7373",
  phoneSecondary: "018 452 891",
  email: "kontakt@niselektricar.rs",
  address: "Ćuprijska 33, Niš",
  city: "Niš",
  serviceAreas: ["Niš", "Niška Banja", "Medijana", "Pantelej", "Crveni Krst"],
  workingHours: "Pon–Pet: 07–19h, Sub: 08–15h",
  emergencyAvailability: "Odgovaramo na hitne pozive u najkraćem mogućem roku",
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
  geo: { lat: 43.3229, lng: 21.9291 },
  trustBadges: [
    "Uredna i temeljna izvedba",
    "Dolazak isti dan",
    "Garancija na rad",
    "Brz odziv na hitne pozive",
    "Atestirane instalacije",
  ],
  heroImageUrl: "/images/hero.webp",
  aboutImageUrl: "/images/about.webp",
};

export type ServiceItem = {
  slug: string;
  title: string;
  category:
    | "elektroinstalacije"
    | "rasveta"
    | "osiguraci-i-table"
    | "uticnice-i-prekidaci"
    | "servis-uredjaja"
    | "klima-uredjaji"
    | "ev-punjaci";
  subgroup?: string;
  shortDescription: string;
  priceFrom: number;
  priceTo?: number;
  priceNote?: string;
  featured?: boolean;
};

export const services: ServiceItem[] = [
  // ==================== ELEKTROINSTALACIJE ====================
  {
    slug: "nova-instalacija-stan",
    title: "Postavljanje nove elektro instalacije (stan)",
    category: "elektroinstalacije",
    shortDescription: "Kompletna izrada instalacije od table do svih tačaka, za stanove u izgradnji ili rekonstrukciji.",
    priceFrom: 1900,
    priceTo: 2600,
    priceNote: "po kvadratnom metru",
    featured: true,
  },
  {
    slug: "nova-instalacija-kuca",
    title: "Postavljanje nove elektro instalacije (kuća)",
    category: "elektroinstalacije",
    shortDescription: "Izrada instalacije za porodičnu kuću, uključujući razvodni orman, sve prostorije i spoljno osvetljenje.",
    priceFrom: 2100,
    priceTo: 2900,
    priceNote: "po kvadratnom metru",
  },
  {
    slug: "razvodjenje-jedna-prostorija",
    title: "Razvođenje instalacije za jednu prostoriju",
    category: "elektroinstalacije",
    shortDescription: "Dodavanje ili preraspoređivanje instalacionih tačaka u jednoj prostoriji, bez zadiranja u ostatak stana.",
    priceFrom: 8000,
    priceTo: 15000,
    priceNote: "zavisi od broja tačaka",
  },
  {
    slug: "ugradnja-razvodnog-ormana-elektroinstalacije",
    title: "Ugradnja razvodnog ormana",
    category: "elektroinstalacije",
    shortDescription: "Postavljanje novog razvodnog ormana sa modularnom opremom, prilagođeno broju strujnih krugova.",
    priceFrom: 8000,
    priceTo: 15000,
    priceNote: "zavisi od broja modula",
  },
  {
    slug: "izrada-uzemljenja-elektroinstalacije",
    title: "Izrada novog sistema uzemljenja",
    category: "elektroinstalacije",
    shortDescription: "Postavljanje uzemljivača i izvoda uzemljenja za objekte koji ga nemaju ili ga menjaju.",
    priceFrom: 18000,
    priceTo: 35000,
    priceNote: "zavisi od tipa terena",
  },
  {
    slug: "gromobranska-instalacija",
    title: "Ugradnja gromobranske instalacije",
    category: "elektroinstalacije",
    shortDescription: "Postavljanje hvataljki, sprovodnika i uzemljenja gromobranske instalacije za porodične kuće.",
    priceFrom: 45000,
    priceTo: 90000,
    priceNote: "zavisi od veličine objekta",
  },
  {
    slug: "dodatna-linija-kabl",
    title: "Provlačenje dodatne linije ili kabla",
    category: "elektroinstalacije",
    shortDescription: "Nova instalaciona linija od table do dodatne tačke, uključujući žleb i kanalicu.",
    priceFrom: 1600,
    priceTo: 2400,
    priceNote: "po dužnom metru trase",
  },

  // ==================== UGRADNJA RASVETE ====================
  {
    slug: "montaza-plafonjere-lustera",
    title: "Montaža plafonjere ili lustera",
    category: "rasveta",
    shortDescription: "Postavljanje plafonske svetiljke ili lustera na postojeću instalaciju, uključena provera veze.",
    priceFrom: 1500,
    priceNote: "po komadu",
    featured: true,
  },
  {
    slug: "ugradnja-spot-rasvete",
    title: "Ugradnja ugradnih (spot) LED svetiljki",
    category: "rasveta",
    shortDescription: "Bušenje otvora u gips-kartonu ili spuštenom plafonu i ugradnja LED spotova, sa povezivanjem.",
    priceFrom: 900,
    priceNote: "po komadu, za 5+ komada",
  },
  {
    slug: "montaza-zidne-svetiljke",
    title: "Montaža zidne svetiljke (aplike)",
    category: "rasveta",
    shortDescription: "Postavljanje zidne svetiljke uključujući izvlačenje kabla do postojeće tačke.",
    priceFrom: 1800,
    priceNote: "po komadu",
  },
  {
    slug: "ugradnja-led-trake",
    title: "Ugradnja LED trake sa napajanjem",
    category: "rasveta",
    shortDescription: "Postavljanje LED trake sa odgovarajućim transformatorom i skrivenim povezivanjem.",
    priceFrom: 2500,
    priceTo: 4500,
    priceNote: "po dužnom metru, sa transformatorom",
  },
  {
    slug: "senzorska-spoljasnja-rasveta",
    title: "Postavljanje senzorske ili spoljašnje rasvete",
    category: "rasveta",
    shortDescription: "Ugradnja i podešavanje senzora pokreta za automatsko paljenje rasvete napolju ili u hodnicima.",
    priceFrom: 2500,
    priceNote: "po komadu, sa senzorom",
  },
  {
    slug: "povezivanje-dimer-prekidaca-rasveta",
    title: "Povezivanje dimer prekidača",
    category: "rasveta",
    shortDescription: "Zamena običnog prekidača dimerom, uz proveru kompatibilnosti sa LED izvorima svetlosti.",
    priceFrom: 2200,
    priceNote: "po komadu",
  },

  // ==================== OSIGURAČI I TABLE ====================
  {
    slug: "zamena-automatskog-osiguraca",
    title: "Zamena automatskog osigurača",
    category: "osiguraci-i-table",
    shortDescription: "Zamena pregorelog ili dotrajalog osigurača odgovarajuće jačine za postojeću liniju.",
    priceFrom: 1400,
    priceNote: "bez cene osigurača",
  },
  {
    slug: "ugradnja-fid-sklopke",
    title: "Ugradnja FID (diferencijalne) sklopke",
    category: "osiguraci-i-table",
    shortDescription: "Postavljanje diferencijalne sklopke koja isključuje struju pri kvaru izolacije, obavezna po propisima.",
    priceFrom: 3200,
    priceNote: "bez cene sklopke",
    featured: true,
  },
  {
    slug: "zamena-porcelanske-table-osiguraci",
    title: "Zamena stare porcelanske table modularnom",
    category: "osiguraci-i-table",
    shortDescription: "Uklanjanje zastarele table i ugradnja moderne modularne table sa FID zaštitom.",
    priceFrom: 9000,
    priceTo: 16000,
    priceNote: "zavisi od broja strujnih krugova",
  },
  {
    slug: "ugradnja-odvodnika-prenapona",
    title: "Ugradnja odvodnika prenapona",
    category: "osiguraci-i-table",
    shortDescription: "Postavljanje zaštite u razvodni orman od udara groma i naponskih udara u mreži.",
    priceFrom: 5500,
    priceTo: 9000,
    priceNote: "zavisi od klase zaštite",
  },
  {
    slug: "prosirenje-table-novi-krug",
    title: "Proširenje table za dodatni strujni krug",
    category: "osiguraci-i-table",
    shortDescription: "Dodavanje novog strujnog kruga na postojeći razvodni orman radi rasterećenja ili priključenja dodatnih uređaja.",
    priceFrom: 2800,
    priceNote: "po novom krugu",
  },
  {
    slug: "ugradnja-glavnog-prekidaca",
    title: "Ugradnja glavnog prekidača / sklopke",
    category: "osiguraci-i-table",
    shortDescription: "Postavljanje ili zamena glavnog prekidača na ulazu instalacije u razvodni orman.",
    priceFrom: 2000,
    priceNote: "po komadu",
  },

  // ==================== UTIČNICE I PREKIDAČI ====================
  {
    slug: "zamena-uticnice",
    title: "Zamena utičnice",
    category: "uticnice-i-prekidaci",
    shortDescription: "Zamena stare ili oštećene utičnice novom, uz proveru ispravnosti veze.",
    priceFrom: 1200,
    priceNote: "po komadu",
  },
  {
    slug: "zamena-prekidaca-uticnice",
    title: "Zamena prekidača",
    category: "uticnice-i-prekidaci",
    shortDescription: "Zamena starog ili oštećenog prekidača (običnog, serijskog ili naizmeničnog).",
    priceFrom: 1200,
    priceNote: "po komadu",
  },
  {
    slug: "ugradnja-nove-uticnice",
    title: "Ugradnja nove utičnice (na postojeću instalaciju)",
    category: "uticnice-i-prekidaci",
    shortDescription: "Ugradnja standardne šuko utičnice sa povezivanjem na najbližu instalacionu tačku.",
    priceFrom: 1800,
    priceNote: "po komadu",
    featured: true,
  },
  {
    slug: "vodootporna-uticnica",
    title: "Ugradnja vodootporne utičnice (kupatilo, terasa)",
    category: "uticnice-i-prekidaci",
    shortDescription: "Ugradnja utičnice odgovarajuće IP zaštite za vlažne i spoljne prostore, po propisima.",
    priceFrom: 2400,
    priceNote: "po komadu",
  },
  {
    slug: "uticnica-jaka-trosila",
    title: "Ugradnja utičnice za uređaje veće snage (šporet, bojler)",
    category: "uticnice-i-prekidaci",
    shortDescription: "Postavljanje pojačane utičnice sa zasebnim vodom i osiguračem do razvodne table.",
    priceFrom: 3500,
    priceNote: "uključena posebna linija",
  },
  {
    slug: "paket-zamena-uticnica",
    title: "Zamena više utičnica i prekidača (paket)",
    category: "uticnice-i-prekidaci",
    shortDescription: "Zamena više starih ili oštećenih utičnica i prekidača u jednom izlasku, po povoljnijoj ceni.",
    priceFrom: 1000,
    priceNote: "po komadu, za 10+ odjednom",
  },

  // ==================== SERVIS KUĆNIH UREĐAJA ====================
  {
    slug: "servis-cisscenje-bojlera",
    title: "Servis i čišćenje bojlera",
    category: "servis-uredjaja",
    shortDescription: "Čišćenje kamenca, provera grejača i termostata, produžava vek trajanja bojlera.",
    priceFrom: 2500,
    priceTo: 4000,
    featured: true,
  },
  {
    slug: "zamena-grejaca-bojlera",
    title: "Zamena grejača na bojleru",
    category: "servis-uredjaja",
    shortDescription: "Zamena pregorelog grejnog tela na električnom bojleru bilo koje zapremine.",
    priceFrom: 3000,
    priceTo: 5500,
  },
  {
    slug: "popravka-elektricnog-sporeta",
    title: "Popravka električnog šporeta",
    category: "servis-uredjaja",
    shortDescription: "Dijagnostika i popravka kvara na ringlama, rerni ili upravljačkoj elektronici šporeta.",
    priceFrom: 2000,
    priceTo: 5000,
    priceNote: "zavisi od kvara",
  },
  {
    slug: "servis-ves-masine",
    title: "Servis veš mašine (električni deo)",
    category: "servis-uredjaja",
    shortDescription: "Dijagnostika i popravka električnog kvara koji sprečava uključivanje ili rad programa.",
    priceFrom: 2200,
    priceTo: 5000,
  },
  {
    slug: "popravka-ta-peci",
    title: "Popravka TA peći",
    category: "servis-uredjaja",
    shortDescription: "Otklanjanje kvara na termoakumulacionoj peći, uključujući grejne elemente i termostat.",
    priceFrom: 1800,
    priceTo: 4000,
  },
  {
    slug: "dijagnostika-kucnog-uredjaja",
    title: "Dijagnostika kvara na kućnom uređaju",
    category: "servis-uredjaja",
    shortDescription: "Izlazak i pregled uređaja radi utvrđivanja uzroka kvara pre odluke o popravci.",
    priceFrom: 1500,
    priceNote: "izlazak i pregled",
  },

  // ==================== KLIMA UREĐAJI ====================
  {
    slug: "ugradnja-klime",
    title: "Ugradnja klima uređaja",
    category: "klima-uredjaji",
    shortDescription: "Standardna montaža unutrašnje i spoljne jedinice, sa posebnom strujnom linijom i osiguračem.",
    priceFrom: 6000,
    priceTo: 9000,
    featured: true,
  },
  {
    slug: "servis-cisscenje-klime",
    title: "Servis i čišćenje klima uređaja",
    category: "klima-uredjaji",
    shortDescription: "Čišćenje filtera i unutrašnje jedinice, provera rada pre sezone.",
    priceFrom: 2500,
    priceTo: 4000,
  },
  {
    slug: "dopuna-freona",
    title: "Dopuna freona",
    category: "klima-uredjaji",
    shortDescription: "Dopuna rashladnog gasa nakon merenja koje potvrđuje stvaran gubitak pritiska.",
    priceFrom: 4000,
    priceTo: 6000,
  },
  {
    slug: "demontaza-stare-klime",
    title: "Demontaža stare klime",
    category: "klima-uredjaji",
    shortDescription: "Uklanjanje postojeće klima jedinice pre ugradnje nove ili prilikom renoviranja.",
    priceFrom: 2500,
    priceNote: "po jedinici",
  },
  {
    slug: "zamena-daljinskog-modula-klime",
    title: "Zamena daljinskog upravljača ili modula klime",
    category: "klima-uredjaji",
    shortDescription: "Zamena neispravnog daljinskog upravljača ili upravljačkog modula na klima uređaju.",
    priceFrom: 1800,
    priceTo: 3500,
  },

  // ==================== EV PUNJAČI ====================
  {
    slug: "ugradnja-kucnog-ev-punjaca",
    title: "Ugradnja kućnog EV punjača (wallbox)",
    category: "ev-punjaci",
    shortDescription: "Montaža zidnog punjača za električna vozila, sa posebnom linijom i zaštitom prilagođenom snazi.",
    priceFrom: 12000,
    priceTo: 20000,
    priceNote: "bez cene punjača",
    featured: true,
  },
  {
    slug: "poseban-vod-ev-punjac",
    title: "Postavljanje posebnog voda za EV punjač",
    category: "ev-punjaci",
    shortDescription: "Nova instalaciona linija odgovarajućeg preseka od razvodnog ormana do mesta punjača.",
    priceFrom: 8000,
    priceTo: 18000,
    priceNote: "zavisi od dužine trase",
  },
  {
    slug: "ugradnja-ev-punjaca-garaza-dvoriste",
    title: "Ugradnja EV punjača u garaži ili dvorištu",
    category: "ev-punjaci",
    shortDescription: "Montaža punjača na spoljnu ili unutrašnju poziciju, uz odgovarajuću IP zaštitu.",
    priceFrom: 15000,
    priceTo: 25000,
  },
  {
    slug: "konsultacije-prikljucna-snaga",
    title: "Konsultacije za izbor snage priključka",
    category: "ev-punjaci",
    shortDescription: "Provera postojeće priključne snage objekta i predlog rešenja pre ugradnje punjača.",
    priceFrom: 3000,
    priceNote: "izlazak i konsultacije",
  },

  // ==================== PROŠIRENI CENOVNIK - PO KOMADU ====================
  {
    slug: "zamena-razvodne-kutije",
    title: "Zamena razvodne kutije",
    category: "elektroinstalacije",
    subgroup: "Po komadu",
    shortDescription: "Zamena oštećene ili zastarele razvodne kutije novom, sa ponovnim povezivanjem svih provodnika.",
    priceFrom: 1800,
    priceTo: 2500,
    priceNote: "po komadu",
  },
  {
    slug: "ugradnja-panik-tastera",
    title: "Ugradnja panik tastera",
    category: "uticnice-i-prekidaci",
    subgroup: "Po komadu",
    shortDescription: "Postavljanje panik tastera za isključivanje napajanja u hitnim slučajevima.",
    priceFrom: 2200,
    priceNote: "po komadu, bez kabla",
  },
  {
    slug: "zamena-kabla-po-metru",
    title: "Zamena kabla u postojećem žlebu",
    category: "elektroinstalacije",
    subgroup: "Po metru",
    shortDescription: "Izvlačenje starog i provlačenje novog kabla u postojećem zidnom žlebu ili PVC kanalu.",
    priceFrom: 800,
    priceTo: 1200,
    priceNote: "po dužnom metru",
  },
  {
    slug: "izrada-zleba-u-zidu",
    title: "Izrada žleba u zidu za kabl",
    category: "elektroinstalacije",
    subgroup: "Po metru",
    shortDescription: "Štemovanje žleba u cigli ili betonu, ugradnja kabla i zatvaranje malterom.",
    priceFrom: 1200,
    priceTo: 1800,
    priceNote: "po dužnom metru",
  },
  {
    slug: "ugradnja-pvc-kanala",
    title: "Ugradnja PVC kanala za kabl",
    category: "elektroinstalacije",
    subgroup: "Po metru",
    shortDescription: "Postavljanje PVC zaštitnog kanala po površini zida ili plafona, kad štemovanje nije opcija.",
    priceFrom: 600,
    priceTo: 900,
    priceNote: "po dužnom metru, sa kanalom",
  },
  {
    slug: "ugradnja-duplog-prekidaca",
    title: "Ugradnja dvostrukog (serijskog) prekidača",
    category: "uticnice-i-prekidaci",
    subgroup: "Po komadu",
    shortDescription: "Zamena ili ugradnja serijskog prekidača za upravljanje dvema grupama svetla sa jedne pozicije.",
    priceFrom: 1400,
    priceNote: "po komadu",
  },
  {
    slug: "ugradnja-naizmenicnog-prekidaca",
    title: "Ugradnja naizmeničnog prekidača",
    category: "uticnice-i-prekidaci",
    subgroup: "Po komadu",
    shortDescription: "Ugradnja prekidača za upravljanje jednim svetlom sa dve pozicije (hodnik, stepenište).",
    priceFrom: 1600,
    priceNote: "po komadu, sa povezivanjem",
  },
  {
    slug: "ugradnja-timera-za-rasvetu",
    title: "Ugradnja vremenskog prekidača (tajmera) za rasvetu",
    category: "rasveta",
    subgroup: "Po komadu",
    shortDescription: "Postavljanje tajmera za automatsko gašenje rasvete u hodniku, podrumu ili zajedničkim prostorima.",
    priceFrom: 2800,
    priceNote: "po komadu, sa tajmerom",
  },
  {
    slug: "merenje-otpora-izolacije",
    title: "Merenje otpora izolacije instalacije",
    category: "elektroinstalacije",
    subgroup: "Dijagnostika",
    shortDescription: "Precizno merenje izolacije kablica za utvrđivanje stanja instalacije i lociranje eventualnog kvara.",
    priceFrom: 3000,
    priceTo: 5000,
    priceNote: "za ceo stan ili kucu",
  },
  {
    slug: "zamena-kabla-bojler",
    title: "Zamena priključnog kabla za bojler ili šporet",
    category: "servis-uredjaja",
    subgroup: "Po komadu",
    shortDescription: "Zamena oštećenog ili preprečenog priključnog kabla na uređajima veće snage.",
    priceFrom: 1500,
    priceTo: 2200,
    priceNote: "po komadu, sa kablom",
  },
  {
    slug: "ugradnja-termostat-bojler",
    title: "Zamena termostata na bojleru",
    category: "servis-uredjaja",
    subgroup: "Po komadu",
    shortDescription: "Zamena neispravnog termostata koji uzrokuje pregrevanje ili prekid rada bojlera.",
    priceFrom: 2000,
    priceTo: 3500,
    priceNote: "zavisi od tipa bojlera",
  },
];

export type ServicePageItem = {
  slug: string;
  title: string;
  heroSubtitle: string;
  imageUrl?: string;
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
    slug: "elektroinstalacije",
    title: "Elektroinstalacije",
    heroSubtitle:
      "Nova instalacija za stanove, kuće i poslovni prostor, izvedena po pravilima struke i spremna za tehnički prijem.",
    imageUrl: "/images/usluge/elektroinstalacije.webp",
    body: [
      p("Vršimo izradu novih i adaptaciju postojećih elektroinstalacija u stambenim i poslovnim objektima. Radovi obuhvataju sve faze, od planiranja rasporeda tačaka i postavljanja kablova do montaže razvodne table, utičnica i prekidača. Svaki posao radimo u skladu sa tehničkim standardima i dogovorenim rokovima."),
      h2("Nova instalacija i adaptacija postojeće"),
      p("Kvalitetno izvedena instalacija je osnov bezbednog i dugotrajnog korišćenja objekta. Raspored strujnih krugova, presek provodnika i zaštitna oprema direktno utiču na to koliko će instalacija pouzdano služiti, posebno uz sve veći broj uređaja koji se danas priključuju u jednom domaćinstvu."),
      p("U Električar Nišu se trudimo da svaka nova instalacija bude usklađena sa planiranom namenom prostora i važećim propisima, od rasporeda tačaka do zaštitnih sklopki u razvodnoj tabli. Radimo i na adaptaciji starijih instalacija i proširenju postojećih sistema, uz nastojanje da radovi teku prema dogovorenoj dinamici i uz što manje ometanje svakodnevice ukućana."),
      h2("Najčešći problemi sa starijim instalacijama"),
      p("Starije instalacije, posebno one sa aluminijumskim provodnicima, vremenom gube na pouzdanosti usled oksidacije na spojevima i zamora materijala, što slabi kontakt na spojevima i može izazvati zagrevanje ili prekid napajanja. U praksi se to najčešće ispoljava kroz zagrevanje utičnica, treperenje svetla bez jasnog razloga, učestalo iskakanje osigurača ili odsustvo zaštitne (FID) sklopke u razvodnoj tabli, što su jasni signali da je instalaciji potrebna stručna provera. Pravovremeno prepoznavanje ovih znakova i adaptacija instalacije sprečavaju širenje kvara na kućne uređaje i smanjuju rizik od strujnog udara."),
    ],
    checklist: [
      { title: "Plan strujnih krugova", description: "" },
      { title: "Bakarni provodnici", description: "" },
      { title: "FID zaštitna sklopka", description: "" },
      { title: "Prenaponska zaštita", description: "" },
      { title: "Merenje i zapisnik", description: "" },
      { title: "Usklađenost sa propisima", description: "" },
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
    slug: "rasveta",
    title: "Ugradnja rasvete",
    heroSubtitle:
      "Montaža plafonjera, spot rasvete, LED traka i spoljašnjih svetiljki, sa urednim povezivanjem i testiranjem svake tačke.",
    imageUrl: "/images/usluge/rasveta.webp",
    body: [
      p("Vršimo ugradnju svih vrsta rasvete u stambenim i poslovnim objektima, od klasičnih plafonjera do LED sistema i spoljašnjeg osvetljenja. Usluga obuhvata montažu, povezivanje i proveru svake tačke pod naponom. Radove prilagođavamo tipu plafona, zida i planiranoj snazi rasvete."),
      h2("Montaža i tipovi rasvete"),
      p("Rasveta bitno utiče na funkcionalnost i utisak prostora, a način ugradnje zavisi od tipa svetiljke i konstrukcije plafona ili zida. LED sistemi zahtevaju odgovarajući transformator i pravilno povezivanje kako bi radili stabilno i bez treperenja, dok spoljašnja rasveta mora biti otporna na vremenske uslove."),
      p("U Električar Nišu radimo ugradnju plafonjera, lustera, LED spot rasvete, LED traka, zidnih svetiljki i spoljašnje rasvete sa senzorima pokreta. Pre bušenja u spuštene plafone i gips-karton proveravamo raspored nosećih profila, a transformatore biramo prema ukupnoj snazi priključenih svetiljki."),
      h2("Najčešći problemi sa rasvetom"),
      p("Treperenje LED rasvete najčešće je posledica slabog ili nekompatibilnog transformatora, dok zagrevanje oko starih sijaličnih grla ukazuje na dotrajalost svetiljke i potrebu za zamenom, ne samo sijalice. U starijim objektima rasveta je često vezana na isti strujni krug sa utičnicama, pa svetlo primetno zatreperi pri uključivanju veš mašine ili drugog jačeg uređaja, što je znak da krugovi nisu pravilno razdvojeni. Ovakvi problemi se rešavaju razdvajanjem strujnih krugova ili zamenom dotrajalih transformatora i svetiljki, i što se pre reaguje, manji je rizik da kvar zahvati i ostale delove instalacije."),
    ],
    checklist: [
      { title: "Montaža lustera i plafonjera", description: "" },
      { title: "Ugradnja LED spot rasvete", description: "" },
      { title: "LED trake sa transformatorom", description: "" },
      { title: "Spoljašnja i senzorska rasveta", description: "" },
      { title: "Povezivanje dimer prekidača", description: "" },
    ],
    ctaBandTitle: "Planirate rasvetu za celu kuću ili stan?",
    ctaBandText:
      "Javite se pre kupovine svetiljki, rado ćemo predložiti raspored i tip rasvete koji odgovara vašem prostoru i budžetu.",
    ctaBandBullets: [
      "Besplatan predlog rasporeda rasvete",
      "Rad sa svim tipovima LED sistema",
      "Uredna montaža bez oštećenja plafona i zidova",
      "Garancija na sve izvedene radove",
    ],
    whyUs: [
      { title: "Precizna montaža", description: "Svaka svetiljka centrirana i učvršćena pre nego što smatramo posao završenim." },
      { title: "Rad sa LED sistemima", description: "Iskustvo sa transformatorima, dimerima i pametnim rasvetnim rešenjima." },
      { title: "Testiranje pre odlaska", description: "Svaka tačka se proverava pod naponom, ne samo vizuelno." },
      { title: "Uredan rad", description: "Bušenje i provlačenje kablova bez nepotrebne prljavštine i štete." },
    ],
    faq: [
      { question: "Da li mogu da donesem svoje svetiljke ili ih vi obezbeđujete?", answer: "Možete doneti svoje, radimo montažu bilo koje rasvete koju kupite, ili vam možemo predložiti opcije ako vam ne treba specifičan model." },
      { question: "Zašto mi LED traka treperi?", answer: "Najčešće je uzrok slab ili nekompatibilan transformator, ređe loš kontakt na spoju trake, oboje proveravamo pri izlasku." },
      { question: "Da li ugrađujete rasvetu u spušten plafon ili gips-karton?", answer: "Da, radimo ugradnju u sve vrste plafona, uz prethodnu proveru rasporeda nosećih profila." },
    ],
  },
  {
    slug: "osiguraci-i-table",
    title: "Osigurači i table",
    heroSubtitle:
      "Zamena dotrajalih osigurača, ugradnja zaštitnih sklopki i modernizacija razvodnog ormana po važećim propisima.",
    imageUrl: "/images/usluge/osiguraci-i-table.webp",
    body: [
      p("Vršimo zamenu dotrajalih osigurača, ugradnju zaštitnih sklopki i modernizaciju razvodnog ormana u stambenim i poslovnim objektima. Radovi se izvode u skladu sa važećim propisima i prilagođavaju se broju strujnih krugova i stanju postojeće instalacije. Svaka intervencija se planira tako da prekid napajanja traje što kraće."),
      h2("Stanje razvodne table i zaštita"),
      p("Razvodna tabla je centralni deo instalacije i njeno stanje direktno utiče na bezbednost objekta. Starije, porcelanske table po pravilu nemaju diferencijalnu (FID) zaštitnu sklopku niti odvodnik prenapona, što povećava rizik od strujnog udara i oštećenja uređaja prilikom naponskih udara u mreži."),
      p("U Električar Nišu procenjujemo da li postojeća tabla ima kapacitet za dopunu zaštitnom sklopkom ili je potrebna kompletna zamena modularnom tablom. Zamena obuhvata raspoređivanje osigurača po strujnim krugovima uz jasno obeležavanje, a obim ugrađene zaštite usklađujemo sa propisima i stanjem instalacije."),
      h2("Najčešći izazovi sa osiguračima i tablama"),
      p("Učestalo iskakanje osigurača, zagrevanje table ili odsustvo bilo kakve zaštitne sklopke jasni su signali da instalacija zahteva proveru. U objektima starijim od dvadeset godina ovo je posebno čest nalaz, jer su table projektovane za manji broj uređaja nego što je danas uobičajeno u domaćinstvima. Pravovremena modernizacija table smanjuje rizik od kvarova na celoj instalaciji."),
    ],
    checklist: [
      { title: "Zamena osigurača", description: "" },
      { title: "Ugradnja FID sklopke", description: "" },
      { title: "Modernizacija table", description: "" },
      { title: "Odvodnik prenapona", description: "" },
      { title: "Proširenje za novi krug", description: "" },
    ],
    ctaBandTitle: "Tabla stara više od dvadeset godina?",
    ctaBandText:
      "Besplatno pregledamo stanje vaše table i kažemo iskreno da li je dovoljna dopuna ili je vreme za zamenu.",
    ctaBandBullets: [
      "Besplatna procena stanja table",
      "Ugradnja iste dana za jednostavnije zahvate",
      "Rad sa atestiranom opremom",
      "Garancija na sve izvedene radove",
    ],
    whyUs: [
      { title: "Zaštita kao standard", description: "FID sklopka i prenaponska zaštita ugrađuju se po pravilu, ne kao doplata." },
      { title: "Iskren predlog", description: "Kažemo vam kad je dovoljna dopuna, a kad zamena stvarno ima smisla." },
      { title: "Rad bez dugog prekida struje", description: "Isključenje table planiramo tako da traje što kraće." },
      { title: "Atestirana oprema", description: "Koristimo proizvođače čiji delovi ostaju dostupni na tržištu i godinama kasnije." },
    ],
    faq: [
      { question: "Da li je FID sklopka obavezna?", answer: "Da, po važećim propisima je obavezan deo svake instalacije i značajno smanjuje rizik od strujnog udara." },
      { question: "Koliko traje zamena razvodne table?", answer: "Za standardan stan, zamena table traje između tri i pet sati, uz kratak prekid napajanja." },
      { question: "Da li mogu samo da dodam jedan osigurač bez zamene cele table?", answer: "Da, ako tabla ima slobodno mesto za dodatni modul, ovo je brza i jeftinija intervencija." },
    ],
  },
  {
    slug: "uticnice-i-prekidaci",
    title: "Utičnice i prekidači",
    heroSubtitle:
      "Ugradnja, zamena i dopuna utičnica i prekidača u stanovima, kućama i poslovnom prostoru, po propisima za svaki tip prostorije.",
    imageUrl: "/images/usluge/uticnice-i-prekidaci.webp",
    body: [
      p("Vršimo ugradnju, zamenu i dopunu utičnica i prekidača u stambenim i poslovnim objektima, u skladu sa propisima koji se primenjuju za svaki tip prostorije. Usluga obuhvata i pojedinačnu zamenu i veće pakete radova prilikom renoviranja. Poseban akcenat stavljamo na vlažne prostore i uređaje veće snage koji zahtevaju dodatnu zaštitu."),
      h2("Kada je potrebna zamena ili dopuna"),
      p("Utičnice i prekidači se vremenom troše i gube ispravan kontakt, a labavost, glasnije škljocanje ili zagrevanje pri normalnom korišćenju su znaci da je zamena potrebna. Poseban problem predstavljaju kupatila, terase i dvorišta, gde obična utičnica bez odgovarajuće IP zaštite i propisane udaljenosti od vode predstavlja ozbiljan bezbednosni rizik, kao i priključivanje jačih uređaja poput šporeta i bojlera na deljeni strujni krug, što često izaziva ispadanje osigurača i pregrevanje instalacije."),
      p("U Električar Nišu radimo zamenu pojedinačnih utičnica i prekidača, kao i veće pakete prilikom renoviranja celog stana. Za vlažne prostore ugrađujemo utičnice odgovarajuće zaštite u skladu sa propisima, a za uređaje veće snage predlažemo posebnu liniju sa sopstvenim osiguračem umesto priključenja na već opterećen krug."),
      h2("Najčešći problemi sa utičnicama i prekidačima"),
      p("Utičnica bez uzemljenja, prekidač na neodgovarajućem mestu posle renoviranja ili nedovoljan broj utičnica za savremenu upotrebu prostora spadaju među najčešće nalaze prilikom pregleda starijih instalacija. Ako primetite iskrenje prilikom uključivanja utikača, taman miris u blizini utičnice ili da prekidač ostaje topao i kad je isključen, instalaciju treba što pre proveriti, jer ovakvi znaci ukazuju na oslabljen kontakt koji vremenom može dovesti do ozbiljnijeg kvara."),
    ],
    checklist: [
      { title: "Zamena utičnica i prekidača", description: "" },
      { title: "Ugradnja na postojeću liniju", description: "" },
      { title: "Vodootporne utičnice (IP44)", description: "" },
      { title: "Linija za uređaje veće snage", description: "" },
      { title: "Paket zamena za više komada", description: "" },
    ],
    ctaBandTitle: "Nedostaje vam utičnica tamo gde vam stvarno treba?",
    ctaBandText:
      "Recite nam gde i za šta, predložićemo najbrži i najuredniji način da je dobijete, bez nepotrebnog bušenja.",
    ctaBandBullets: [
      "Izlazak i procena u istom danu",
      "Rad na postojećoj i novoj instalaciji",
      "Poseban vod za uređaje veće snage kad je potrebno",
      "Garancija na sve izvedene radove",
    ],
    whyUs: [
      { title: "Brza intervencija", description: "Većina zamena i dopuna završava se u jednoj poseti." },
      { title: "Poznavanje propisa za vlažne prostore", description: "IP zaštita i razmak od vode po pravilima, ne po proceni." },
      { title: "Paket cena za veći obim", description: "Zamena više utičnica i prekidača odjednom je povoljnija po komadu." },
      { title: "Uredan završetak", description: "Bez vidljivih tragova rada na zidu posle završene intervencije." },
    ],
    faq: [
      { question: "Mogu li da dobijem utičnicu iza televizora da sakrijem kablove?", answer: "Da, ovo je čest zahtev, ugrađujemo utičnicu na željenoj visini i po potrebi kanalicu za dodatne kablove." },
      { question: "Da li obična utičnica može da se koristi u kupatilu?", answer: "Ne, kupatilo zahteva vodootpornu utičnicu odgovarajuće zaštite i propisan razmak od izvora vode." },
      { question: "Koliko košta zamena više utičnica odjednom?", answer: "Za deset ili više komada u jednom izlasku nudimo povoljniju cenu po komadu u odnosu na pojedinačnu zamenu." },
    ],
  },
  {
    slug: "servis-uredjaja",
    title: "Servis kućnih uređaja",
    heroSubtitle:
      "Servis i popravka bojlera, šporeta, veš mašina i TA peći, električni deo kvara, dijagnostika na licu mesta.",
    imageUrl: "/images/usluge/servis-uredjaja.webp",
    body: [
      p("Vršimo servis i popravku bojlera, šporeta, veš mašina i TA peći, sa fokusom na električni deo kvara i dijagnostiku na licu mesta. Usluga obuhvata proveru uređaja, lociranje kvara i, gde je to moguće, popravku bez odnošenja uređaja u servis. Radove prilagođavamo tipu i starosti uređaja."),
      h2("Dijagnostika i popravka kućnih uređaja"),
      p("Kućni uređaji poput bojlera, šporeta i veš mašina svakodnevno su izloženi opterećenju, kamencu i habanju komponenti, što vremenom dovodi do smanjene efikasnosti ili potpunog prestanka rada. Bojler koji sporije greje ili slabije drži temperaturu obično najavljuje nakupljanje kamenca na grejaču, dok šporet kod kojeg radi samo deo ringli ili rerna koja ne drži temperaturu ukazuju na kvar termostata ili grejnog elementa. Veš mašina koja ne pokreće program ili prijavljuje grešku na displeju često ima kvar na grejaču, termostatu ili elektronskoj ploči, koji je u većini slučajeva moguće locirati i otkloniti na licu mesta."),
      p("U Električar Nišu radimo dijagnostiku i popravku bojlera, električnih šporeta, veš mašina i TA peći svih vodećih proizvođača. Redovno čišćenje kamenca kod bojlera preporučujemo pre nego što se pojavi ozbiljniji kvar, a kod starijih uređaja klijenta unapred obaveštavamo o okvirnoj ceni popravke kako bi mogao da proceni da li je popravka isplativa u odnosu na zamenu uređaja."),
      h2("Kada je potrebna hitnija reakcija"),
      p("Iskrenje, miris paljevine, glasno zujanje ili čest prekid rada uređaja tokom korišćenja nisu znaci koje treba ignorisati, jer mogu ukazivati na ozbiljniji kvar u električnom delu uređaja koji, ako se zapostavi, može oštetiti i ostale komponente. U takvim slučajevima preporučuje se isključivanje uređaja iz struje i dijagnostika u što kraćem roku, dok kod blažih simptoma, poput sporijeg zagrevanja bojlera, redovan termin servisa u narednih nekoliko dana najčešće je dovoljan."),
    ],
    checklist: [
      { title: "Servis i čišćenje bojlera", description: "" },
      { title: "Popravka šporeta", description: "" },
      { title: "Dijagnostika veš mašine", description: "" },
      { title: "Popravka TA peći", description: "" },
      { title: "Zamena grejača i termostata", description: "" },
    ],
    ctaBandTitle: "Uređaj ne radi kako treba?",
    ctaBandText:
      "Opišite kvar telefonom, u većini slučajeva je moguće dati okvirnu procenu cene pre izlaska na teren.",
    ctaBandBullets: [
      "Dijagnostika na licu mesta",
      "Iskren savet kad popravka nema smisla",
      "Rad sa svim vodećim brendovima bele tehnike",
      "Garancija na izvedenu popravku",
    ],
    whyUs: [
      { title: "Široko iskustvo", description: "Servis bojlera, šporeta, veš mašina i TA peći svih vodećih proizvođača." },
      { title: "Brza dijagnostika", description: "Većina kvarova se locira u prvoj poseti, bez nepotrebnog vraćanja." },
      { title: "Iskren savet", description: "Kažemo kad je popravka isplativa, a kad je bolje razmisliti o zameni uređaja." },
      { title: "Rezervni delovi na terenu", description: "Za najčešće kvarove rezervni delovi su po pravilu dostupni bez čekanja na porudžbinu." },
    ],
    faq: [
      { question: "Da li popravljate sve marke bojlera i šporeta?", answer: "Da, radimo na svim vodećim brendovima bele tehnike dostupnim na našem tržištu." },
      { question: "Da li dolazite isti dan za popravku bojlera?", answer: "Trudimo se da izađemo isti ili naredni dan, u hitnim slučajevima bez tople vode prioritetno." },
      { question: "Šta ako uređaj ne vredi popravljati?", answer: "Reći ćemo vam iskreno, uz okvirnu procenu troška popravke u odnosu na cenu novog uređaja." },
    ],
  },
  {
    slug: "klima-uredjaji",
    title: "Ugradnja i servis klima uređaja",
    heroSubtitle:
      "Montaža novih klima uređaja, redovan servis i dopuna freona, uz elektro priključak izveden po propisima.",
    imageUrl: "/images/usluge/klima-uredjaji.webp",
    body: [
      p("Vršimo ugradnju, servis i održavanje klima uređaja u stambenim i poslovnim objektima. Usluga obuhvata elektro pripremu, montažu unutrašnje i spoljne jedinice, redovno čišćenje i dopunu freona po potrebi. Radove izvodimo u skladu sa preporukama proizvođača i važećim propisima."),
      h2("Ugradnja i elektro priprema"),
      p("Klima uređaj predstavlja značajno opterećenje za električnu instalaciju, pa elektro priprema, poseban osigurač i pravilno uzemljen priključak podjednako utiču na bezbednost i pouzdanost rada uređaja koliko i sama mehanička montaža. Kod starijih instalacija, posebno onih sa aluminijumskim provodnicima, presek dovodnog kabla često nije dovoljan za bezbedno napajanje klime, što može dovesti do pregrevanja voda ili ispadanja osigurača ako se ne prilagodi pre montaže."),
      p("U Električar Nišu pre montaže proveravamo kapacitet razvodne table i priključnu snagu objekta, a poziciju spoljne i unutrašnje jedinice biramo tako da bude dostupna za budući servis i da buka ne smeta susednim prostorima. Klima uređaj po pravilu dobija sopstvenu strujnu liniju sa odgovarajućim osiguračem do razvodnog ormana."),
      h2("Servis i najčešći problemi"),
      p("Zaprljan filter i kondenzator smanjuju protok vazduha i primoravaju kompresor da radi jače, što se direktno odražava na potrošnju struje i skraćuje vek uređaja, zato se redovan servis preporučuje najmanje jednom godišnje, po mogućstvu pre početka letnje sezone. Ako klima slabije hladi, duže radi da postigne željenu temperaturu ili se čuje neuobičajen zvuk pri radu, najčešći uzrok je zaprljan filter ili gubitak freona usled curenja na spoju ili cevi, i u oba slučaja se preporučuje pregled pre nego što se opterećenje prenese na kompresor i izazove skuplji kvar."),
    ],
    checklist: [
      { title: "Ugradnja klime", description: "" },
      { title: "Posebna linija i osigurač", description: "" },
      { title: "Servis i čišćenje", description: "" },
      { title: "Dopuna freona po potrebi", description: "" },
      { title: "Demontaža stare jedinice", description: "" },
    ],
    ctaBandTitle: "Planirate ugradnju nove klime?",
    ctaBandText:
      "Uradimo elektro pripremu i montažu u istoj poseti, sa posebnom linijom i osiguračem po propisima.",
    ctaBandBullets: [
      "Montaža sa posebnom strujnom linijom",
      "Pozicioniranje pogodno za budući servis",
      "Servis dostupan i van sezone",
      "Garancija na izvedenu montažu",
    ],
    whyUs: [
      { title: "Elektro deo po propisima", description: "Poseban vod i osigurač za svaku klimu, ne deljena linija sa drugim uređajima." },
      { title: "Merimo pre dopune freona", description: "Dopuna se radi samo kad merenje pokaže stvaran gubitak, ne po automatizmu." },
      { title: "Dostupnost van sezone", description: "Servis i montažu radimo tokom cele godine, ne samo u vrhuncu leta." },
      { title: "Uredna montaža", description: "Vodimo računa o izgledu i pristupačnosti jedinica za budući servis." },
    ],
    faq: [
      { question: "Da li klima mora da ima svoju posebnu liniju do table?", answer: "Da, preporučuje se i po propisima je ispravno da klima ima sopstveni osigurač, a ne deljen vod sa drugim uređajima." },
      { question: "Koliko često treba servisirati klimu?", answer: "Preporučujemo servis jednom godišnje, idealno pre početka letnje sezone." },
      { question: "Da li svaki servis znači i dopunu freona?", answer: "Ne, dopunu radimo samo kad merenje pokaže da je pritisak gasa ispod normale." },
    ],
  },
  {
    slug: "ev-punjaci",
    title: "Ugradnja EV punjača",
    heroSubtitle:
      "Postavljanje kućnih punjača za električna vozila, sa posebnim vodom i osiguračem prilagođenim snazi punjenja.",
    imageUrl: "/images/usluge/ev-punjaci.webp",
    body: [
      p("Vršimo ugradnju kućnih punjača za električna vozila, sa posebnim vodom i osiguračem prilagođenim snazi punjenja. Usluga obuhvata proveru priključne snage objekta, izbor odgovarajuće trase i montažu punjača u garaži, dvorištu ili na prilazu. Radove prilagođavamo tipu punjača i postojećoj instalaciji."),
      h2("Priprema instalacije i montaža"),
      p("Punjač za električno vozilo troši znatno više struje od većine kućnih uređaja, pa priključna snaga objekta i stanje razvodnog ormana direktno određuju da li je ugradnja moguća bez dodatnih zahvata na instalaciji. Kućni punjač snage 7 kW ili 11 kW predstavlja značajno dodatno opterećenje, i ukoliko postojeći priključak nije dovoljan, javljaju se simptomi poput sporog punjenja, učestalog ispadanja osigurača ili nemogućnosti da se punjenje uopšte pokrene punom snagom."),
      p("U Električar Nišu pre ugradnje proveravamo priključnu snagu objekta i opterećenost postojeće instalacije, a punjaču obezbeđujemo posebnu liniju odgovarajućeg preseka sa sopstvenim osiguračem. Ako postojeći priključak nije dovoljan, predlažemo realne opcije, od punjenja manjom snagom do razgovora sa distributerom o povećanju priključne snage, pre nego što se pristupi kupovini punjača."),
      h2("Na šta obratiti pažnju pre kupovine punjača"),
      p("Kupovina punjača pre provere priključne snage je čest propust koji dovodi do situacije da uređaj ne može biti bezbedno priključen na postojeću instalaciju ili radi značajno sporije nego što je predviđeno. Zato se provera priključne snage i stanja razvodnog ormana preporučuje kao prvi korak, dok se izbor pozicije, tipa punjača i preseka kabla prilagođava tek nakon što se utvrdi da instalacija može da podnese dodatno opterećenje."),
    ],
    checklist: [
      { title: "Provera priključne snage", description: "" },
      { title: "Posebna linija za punjač", description: "" },
      { title: "Ugradnja wallbox punjača", description: "" },
      { title: "Zaštitna sklopka za EV", description: "" },
      { title: "Montaža u garaži ili dvorištu", description: "" },
    ],
    ctaBandTitle: "Kupujete električni automobil?",
    ctaBandText:
      "Proverimo unapred da li vam priključna snaga dozvoljava kućni punjač, i predložimo najbolje rešenje pre nego što auto stigne.",
    ctaBandBullets: [
      "Besplatna provera priključne snage",
      "Ugradnja prilagođena tipu punjača",
      "Konsultacije bez obaveze",
      "Garancija na izvedenu montažu",
    ],
    whyUs: [
      { title: "Provera pre obećanja", description: "Prvo proveravamo da li instalacija podnosi punjač, tek onda predlažemo rešenje." },
      { title: "Iskustvo sa uređajima veće snage", description: "Poseban vod i zaštita rade se po istim principima kao kod drugih jakih uređaja." },
      { title: "Praktičan raspored", description: "Pozicija punjača se bira prema tome kako stvarno parkirate vozilo." },
      { title: "Savet bez obaveze", description: "Konsultacija o priključnoj snazi je besplatna, čak i ako ugradnju odložite." },
    ],
    faq: [
      { question: "Da li mi treba veći priključak za kućni EV punjač?", answer: "Zavisi od snage punjača i postojeće priključne snage objekta, proveravamo to unapred pre ugradnje." },
      { question: "Koliko traje ugradnja EV punjača?", answer: "Za standardnu ugradnju sa kratkom trasom, računajte na jedan radni dan." },
      { question: "Da li punjač mora da bude u garaži?", answer: "Ne, može se ugraditi i na spoljni zid ili u dvorištu, uz odgovarajuću IP zaštitu za spoljnu montažu." },
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
  coverImageUrl?: string;
  body: unknown[];
  faq: { question: string; answer: string }[];
};

export const blogPosts: BlogPostItem[] = [
  {
    slug: "znaci-da-je-instalacija-zastarela-i-opasna",
    title: "Pet znakova da je vaša instalacija zastarela i opasna",
    category: "bezbednost",
    excerpt:
      "Ne mora da vas udari struja da biste znali da nešto nije u redu. Evo na šta je vredno obratiti pažnju pri proceni stanja starije instalacije.",
    summary:
      "Miris paljevine, tople utičnice, treperenje svetla pri uključivanju uređaja i osigurači koji stalno ispadaju su znaci koje ne treba ignorisati. Aluminijumska instalacija starija od trideset pet do četrdeset godina posebno zaslužuje pažnju, jer se degradira tiho, bez upozorenja.",
    keyTakeaways: [
      "Topla utičnica ili prekidač pri normalnom korišćenju nije normalna pojava",
      "Treperenje svetla kad uključite veći uređaj ukazuje na preopterećenu ili oslabljenu liniju",
      "Aluminijumska instalacija starija od trideset pet godina je ozbiljan kandidat za zamenu",
      "Miris paljevine, čak i kratak i slab, zahteva odmah isključivanje i poziv električaru",
    ],
    publishedAt: "2026-02-14T09:00:00.000Z",
    coverImageUrl: "/images/blog/znaci-da-je-instalacija-zastarela-i-opasna.webp",
    body: [
      p("Kod stana starijeg od tridesetak godina, stanje razvodne table u prvih nekoliko minuta pregleda otkriva veći deo onoga što treba znati o stanju cele instalacije. Evo šta se tačno proverava, i isto to možete sami pogledati pre nego što se pozove električar."),
      h2("Prvi znak: utičnice ili prekidači koji se greju"),
      p("Utičnica ili prekidač koji su primetno topli na dodir, čak i kad ništa jako ne troše, gotovo uvek znače da negde u kontaktu postoji otpor veći nego što bi trebalo, bilo zbog labavog spoja, bilo zbog oksidacije na aluminijumskom provodniku. Ovo nije nešto što treba čekati da se pogorša. Toplota na mestu spoja je energija koja se gubi, i vremenom, ta ista toplota može da otopi izolaciju oko provodnika i izazove kratak spoj."),
      h2("Drugi znak: treperenje svetla kad se uključi veći uređaj"),
      p("Ako svetlo u kuhinji primetno zatreperi kad uključite mikrotalasnu ili veš mašinu, to je instalacija koja vam govori da je opterećena više nego što bi trebalo za tu liniju. Kod novije instalacije ovo se gotovo nikad ne dešava jer su strujni krugovi pravilno razdvojeni, dok se kod starijih instalacija često nailazi na to da rasveta i utičnice dele isti vod, što nije bilo neuobičajeno pre nekoliko decenija, ali danas ne zadovoljava ni osnovne standarde bezbednosti."),
      h2("Treći znak: osigurači koji ispadaju bez očiglednog razloga"),
      p("Povremeno ispadanje osigurača kad uključite previše uređaja odjednom je normalno, to je osigurač koji radi svoj posao. Problem je kad osigurač ispada nasumično, bez jasnog obrasca, jer to obično znači da negde postoji povremeni kratak spoj ili slab kontakt koji se javlja samo pod određenim uslovima, na primer kad se kabl malo pomeri ili zagreje. Ovakav kvar je teže locirati, ali ga nikako ne treba ignorisati samo zato što osigurač i dalje „radi svoj posao” i isključuje struju."),
      h2("Četvrti znak: aluminijumski provodnici"),
      p("Ako je vaš stan ili kuća izgrađena pre osamdesetih godina i nikad nije imala kompletnu zamenu instalacije, velika je verovatnoća da su provodnici aluminijumski, ne bakarni. Aluminijum sam po sebi nije opasan materijal, ali ima lošije karakteristike od bakra kad je u pitanju formiranje pouzdanog, dugotrajnog kontakta na spojevima, posebno u kombinaciji sa modernim prekidačima i utičnicama koji su projektovani prvenstveno za bakarne provodnike. Kombinacija starog aluminijuma i nove opreme je čest izvor problema u praksi."),
      h2("Peti znak: nema zaštitne (FID) sklopke u razvodnom ormanu"),
      p("Ovo je verovatno najvažnija stavka na listi, jer se direktno tiče bezbednosti ljudi, ne samo opreme. Diferencijalna zaštitna sklopka isključuje struju u deliću sekunde ako dođe do kvara u izolaciji uređaja ili instalacije koji bi inače mogao da izazove strujni udar. Ako otvorite svoju tablu i vidite samo obične automatske osigurače, bez FID sklopke, to je nedostatak koji je preporučljivo sanirati što pre, nezavisno od svega ostalog."),
      h2("Šta uraditi ako prepoznajete dva ili više ovih znakova"),
      p("Ne mora se odmah planirati kompletna zamena instalacije. Prvi razuman korak je pregled koji obuhvata proveru stanja table, osnovna merenja i procenu da li je potrebna delimična sanacija, dodavanje zaštitne sklopke, ili je situacija ozbiljnija i zahteva širu intervenciju. U većini slučajeva problem se može rešiti bez rušenja zidova, potrebno je samo tačno utvrditi gde i šta treba popraviti."),
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
      "Osigurač koji ispada nije uvek isti problem. Evo kako se razlikuje bezazlen slučaj preopterećenja od ozbiljnijeg kvara koji traži hitnu pažnju.",
    summary:
      "Osigurač ispada zbog tri glavna razloga: preopterećenja linije, kratkog spoja na uređaju ili instalaciji, i kvara na samoj FID zaštitnoj sklopki. Obrazac ispadanja, da li je uvek isti uređaj u pitanju ili je nasumično, najviše govori o pravom uzroku.",
    keyTakeaways: [
      "Ispadanje odmah pri uključivanju konkretnog uređaja obično znači kvar na tom uređaju, ne na instalaciji",
      "Nasumično ispadanje bez jasnog obrasca je znak koji zahteva stručnu dijagnostiku",
      "Ispadanje FID sklopke (ne automatskog osigurača) je uvek ozbiljniji signal",
      "Nikad ne premošćavajte ili blokirajte osigurač da bi prestao da ispada, to je direktan rizik od požara"
    ],
    publishedAt: "2026-03-05T09:00:00.000Z",
    coverImageUrl: "/images/blog/zasto-osiguraci-stalno-ispadaju.webp",
    body: [
      p("Osigurač koji „stalno ispada” jedan je od najčešćih razloga za poziv električaru, a pitanje da li treba brinuti zavisi od uzroka. U nastavku je objašnjeno po čemu se razlikuje bezazlen slučaj preopterećenja od ozbiljnijeg kvara koji zahteva hitan izlazak."),
      h2("Prvo, koja vrsta osigurača vam ispada"),
      p("U razvodnom ormanu obično imate dve vrste zaštite, automatske osigurače koji štite pojedinačne linije od preopterećenja i kratkog spoja, i jednu ili dve zaštitne (FID) sklopke koje štite od strujnog udara. Ako vam ispada automatski osigurač za jednu konkretnu liniju, na primer samo za kuhinju, to je lokalizovan problem. Ako vam ispada glavna FID sklopka, koja isključuje struju u celom stanu odjednom, to je ozbiljniji signal jer znači da postoji kvar u izolaciji negde u instalaciji ili na nekom uređaju, i to je scenario u kom se preporučuje brži poziv."),
      h2("Obrazac ispadanja govori više nego što mislite"),
      h3("Ispada uvek kad uključite isti uređaj"),
      p("Ovo je, paradoksalno, dobra vest. Ako se osigurač uvek isključi u trenutku kad upalite veš mašinu, mikrotalasnu ili grejalicu, uzrok je gotovo sigurno na tom uređaju ili njegovom kablu, ne na vašoj instalaciji. Rešenje je popravka ili zamena uređaja, ne intervencija na instalaciji, mada je uvek dobro proveriti i samu utičnicu ako je uređaj stariji."),
      h3("Ispada kad se uključi previše uređaja odjednom"),
      p("Ovo je klasično preopterećenje linije, česta situacija kod starijih instalacija gde je previše utičnica spojeno na jedan strujni krug slabijeg preseka. Rešenje je obično dodavanje nove linije za deo uređaja, na primer zaseban vod za kuhinjske aparate, čime se rasterećuje postojeći krug."),
      h3("Ispada nasumično, bez jasnog obrasca"),
      p("Ovo je slučaj koji zahteva pravu dijagnostiku, jer uzrok može biti bilo šta od labavog kontakta u razvodnoj kutiji, oštećene izolacije na mestu gde je kabl savijen ili pritisnut nameštajem, do vlage koja je ušla u instalaciju. Ovde ne pomaže nagađanje, potrebno je sistematski isključivati i proveravati delove instalacije dok se kvar ne izoluje."),
      h2("Šta nikad ne treba raditi"),
      p("Nikad nemojte premošćavati osigurač žicom ili metalnim predmetom da bi prestao da ispada, i nikad nemojte ugrađivati osigurač veće jačine od one predviđene za taj strujni krug samo da bi „rešili” učestalo ispadanje. Osigurač ispada zato što nešto nije u redu, i onemogućavanje te zaštite ne rešava problem, samo uklanja signal upozorenja dok se problem ne pretvori u požar."),
      h2("Kad je situacija stvarno hitna"),
      ...bullets([
        "Oseća se miris paljevine ili dima pri ili nakon ispadanja",
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
      "Zamena sijalice je jedno, a provlačenje nove linije kroz zid nešto sasvim drugo. Evo gde je granica koju je bolje ne prelaziti bez odgovarajuće stručne pripreme.",
    summary:
      "Sitne intervencije poput zamene sijalice ili prekidača identičnog tipa su uobičajene i relativno bezbedne uz osnovnu opreznost. Radovi na razvodnom ormanu, provlačenje novih linija i bilo šta što zahteva tehnički prijem trebalo bi prepustiti licenciranom električaru, i zbog bezbednosti i zbog validnosti dokumentacije.",
    keyTakeaways: [
      "Zamena sijalice ili identičnog prekidača/utičnice je uobičajena kućna intervencija",
      "Rad na razvodnom ormanu i provlačenje novih linija nosi realan rizik bez odgovarajućeg znanja",
      "Za nekretnine u prometu i osiguranje često je potrebna dokumentacija koju izdaje ovlašćeno lice",
      "Najveći rizik kod samostalnog rada nije trenutna greška, nego skriveni nedostatak koji se otkrije godinama kasnije",
    ],
    publishedAt: "2026-04-01T09:00:00.000Z",
    coverImageUrl: "/images/blog/da-li-je-samostalan-elektricarski-rad-legalan-i-bezbedan.webp",
    body: [
      p("Pitanje „mogu li ovo sam da uradim, ili je pametnije pozvati nekoga” jedno je od najčešćih kod manjih elektro intervencija. Odgovor zavisi od toga o kakvom se poslu radi, a u nastavku je povučena realna, praktična granica, ne samo formalna."),
      h2("Šta je uobičajeno i relativno bezbedno samostalno raditi"),
      p("Zamena pregorele sijalice, čišćenje prekidača ili utičnice spolja, zamena prekidača identičnim modelom uz prethodno isključivanje odgovarajućeg osigurača, sve su to intervencije koje veliki broj ljudi radi samostalno bez problema. Ključna reč je „identičnim”, jer zamena jednog tipa uređaja drugim, na primer običnog prekidača dimerom, već zahteva razumevanje kompatibilnosti sa vrstom rasvete, što nije uvek očigledno."),
      h2("Gde je granica samostalnog rada"),
      p("Bilo kakav rad unutar razvodnog ormana, provlačenje nove linije kroz zid, dodavanje nove utičnice na postojeći strujni krug, ili bilo šta što zahteva otvaranje zida ili poda, prelazi granicu koju je bolje prepustiti nekome ko to radi profesionalno. Ne zato što je nemoguće naučiti, nego zato što posledice greške nisu uvek trenutne. Loše urađen spoj možda neće praviti probleme mesecima, čak godinama, a onda se javi baš u trenutku kad je najgore, na primer kao uzrok požara ili strujnog udara."),
      h2("Pravni aspekt: kada je potreban stručan izvođač"),
      p("Za novogradnju i veće rekonstrukcije, tehnički prijem instalacije zahteva dokumentaciju koju izdaje odgovorno lice, sa odgovarajućim merenjima i atestima. Ovo nije nešto što možete sami sebi izdati, bez obzira koliko dobro ste uradili posao. Slično važi i za osiguranje nekretnine, mnoge polise imaju klauzule koje se odnose na stanje električne instalacije, i u slučaju štete izazvane požarom, osiguravajuća kuća može tražiti dokaz da je instalacija bila u ispravnom stanju."),
      h2("Najveći rizik nije ono što mislite"),
      p("Kad ljudi razmišljaju o riziku samostalnog rada, prva asocijacija je strujni udar u trenutku rada, i to jeste realan rizik, ali uz osnovnu opreznost i isključivanje odgovarajućeg osigurača, taj rizik je kontrolisan za jednostavnije intervencije. Veći, podmukliji rizik je loše izveden spoj koji radi naizgled normalno godinama, a onda otkaže na način koji ugrožava nekog drugog, možda čak i novog vlasnika stana koji nema pojma da je taj deo instalacije rađen amaterski."),
      h2("Praktičan savet: kad sumnjate, pitajte pre nego što počnete"),
      p("Kod nedoumice da li je neka intervencija u domenu „mogu sam” ili „treba profesionalac”, najjednostavnije je opisati situaciju telefonom pre početka radova. Kratak razgovor unapred često uštedi mnogo više vremena i novca nego saniranje posledica nečega što je krenulo po zlu."),
    ],
    faq: [
      { question: "Mogu li sam da zamenim prekidač istim modelom?", answer: "Da, uz prethodno isključivanje odgovarajućeg osigurača na razvodnoj tabli, ovo je uobičajena i relativno bezbedna intervencija za većinu ljudi." },
      { question: "Da li mi treba dozvola za manje elektro radove u sopstvenom stanu?", answer: "Za sitne intervencije poput zamene prekidača ili sijalice, ne treba vam posebna dozvola. Za veće zahvate koji utiču na instalaciju, preporučuje se angažovanje stručnog izvođača, posebno zbog dokumentacije." },
      { question: "Šta ako prodajem stan gde su radovi rađeni samostalno?", answer: "Preporučujemo pregled pre prodaje kako biste imali jasnu sliku stanja instalacije i eventualno sanirate sporne delove pre nego što to postane predmet pregovora sa kupcem." },
    ],
  },
  {
    slug: "sta-proveravam-pri-pregledu-instalacije-pre-kupovine-stana",
    title: "Šta tačno proveravam kada pregledam instalaciju pre kupovine stana",
    category: "renoviranje",
    excerpt:
      "Kupovina stana je verovatno najveća investicija koju ćete napraviti. Evo šta tačno obuhvata provera instalacije pre potpisivanja ugovora.",
    summary:
      "Pregled pre kupovine obuhvata vizuelnu proveru razvodne table, test zaštitne sklopke, merenje otpora izolacije na dostupnim krugovima i procenu starosti i tipa provodnika. Rezultat je pisani nalaz koji kupac može koristiti u pregovorima ili kao osnov za odluku.",
    keyTakeaways: [
      "Pregled traje između sat i sat i po vremena za prosečan stan",
      "Najvažniji pojedinačni nalaz je prisustvo i ispravnost FID zaštitne sklopke",
      "Aluminijumska instalacija nije diskvalifikujuća, ali menja procenu vrednosti i budućih troškova",
      "Pisani nalaz je koristan alat u pregovorima o ceni, ne samo informacija za sebe",
    ],
    publishedAt: "2026-04-22T09:00:00.000Z",
    coverImageUrl: "/images/blog/sta-proveravam-pri-pregledu-instalacije-pre-kupovine-stana.webp",
    body: [
      p("Pregled instalacije pre kupovine stana radi se isključivo u interesu kupca, ne prodavca ili agencije, i to je važno naglasiti unapred. Nalaz mora biti iskren, čak i kad to znači da će kupac na osnovu njega tražiti popust ili odustati od kupovine."),
      h2("Prvi korak: razgovor i osnovne informacije"),
      p("Pre otvaranja table proverava se koliko je zgrada stara, da li je bilo renoviranja i kada, i da li prodavac zna nešto o poslednjem servisu ili proveri instalacije. Ove informacije daju okvir za pregled, stan iz devedesetih koji nikad nije renoviran zahteva drugačiji nivo pažnje od stana u zgradi izgrađenoj pre pet godina."),
      h2("Drugi korak: vizuelni pregled razvodne table"),
      p("Pregled table obuhvata tip table (moderna modularna ili stara porcelanska), prisustvo i tip zaštitnih uređaja, tragove zagrevanja ili oksidacije na spojevima, i opšti utisak o urednosti ožičenja. Neuredna, improvizovana tabla sa dodatnim, vidno naknadno dodatim vodovima je uvek signal da je vredno dublje pogledati ostatak instalacije."),
      h2("Treći korak: test zaštitne sklopke"),
      p("Svaka tabla sa modernom zaštitom ima test dugme na FID sklopki, koje simulira kvar i proverava da li sklopka zaista isključuje struju. U praksi nije redak slučaj da sklopka fizički postoji, ali ne funkcioniše ispravno, što znači da stan izgleda zaštićen, a zapravo nije. Ako sklopka uopšte ne postoji, to je stavka koja se posebno naglašava u nalazu, jer je ugradnja relativno jeftina, ali suštinski važna za bezbednost."),
      h2("Četvrti korak: merenje otpora izolacije"),
      p("Gde je to izvodljivo bez rasklapanja zidova, meri se otpor izolacije na dostupnim strujnim krugovima direktno sa razvodne table. Ovo merenje daje konkretan broj koji pokazuje da li je izolacija provodnika i dalje u dobrom stanju ili se približava kraju svog veka. Nizak otpor izolacije je jasan signal da instalacija, ili bar deo nje, uskoro zahteva zamenu."),
      h2("Peti korak: procena tipa i starosti provodnika"),
      p("Kroz otvorene utičnice ili prekidače, kad je to moguće bez oštećenja, procenjuje se da li su provodnici bakarni ili aluminijumski, i vizuelno stanje izolacije. Ovo je često presudna informacija za kupca, jer aluminijumska instalacija starija od trideset pet do četrdeset godina realno znači da bi kompletna zamena trebalo da bude uračunata u budžet, bilo kroz nižu ponuđenu cenu, bilo kroz plan radova nakon useljenja."),
      h2("Šta dobijate na kraju"),
      p("Rezultat je pisani nalaz sa svim izmerenim vrednostima, opisom stanja table i instalacije, i, ako ima nedostataka, okvirnom procenom troška sanacije. Ovaj dokument je koristan i kao argument u pregovorima o ceni, a u pojedinim slučajevima kupci na osnovu njega odlučuju da odustanu od kupovine kad se pokaže da je potrebna sanacija veća nego što su bili spremni da prihvate."),
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
      "Cena nije jedini, a ni najvažniji faktor. Evo koja pitanja vredi postaviti pre nego što se odabere izvođač za sopstveni stan.",
    summary:
      "Pri izboru električara vredi proveriti da li izdaje račun i garanciju, da li poseduje odgovarajuće kvalifikacije, da li jasno objašnjava obim posla pre početka, i da li koristi atestiran materijal. Najniža ponuđena cena je često znak da se negde štedi na koracima koji se kasnije skupo plate.",
    keyTakeaways: [
      "Tražite pisanu ponudu ili barem jasno opisan obim posla pre početka radova",
      "Račun i garancija na izvedene radove su standard koji ozbiljan izvođač uvek nudi",
      "Enormno niska cena u odnosu na prosek tržišta je razlog za oprez, ne za slavlje",
      "Dobar električar objašnjava šta i zašto radi, ne izbegava pitanja",
    ],
    publishedAt: "2026-05-10T09:00:00.000Z",
    coverImageUrl: "/images/blog/kako-izabrati-elektricara-pitanja-koja-treba-postaviti.webp",
    body: [
      p("Kad je potrebna preporuka električara u drugom gradu, koristan je isti set pitanja koji bi trebalo postaviti svakom izvođaču kome se poverava sopstvena instalacija. Ne postoji jedinstven „pravi” odgovor na svako od ovih pitanja, ali način na koji neko odgovara govori mnogo o njegovoj ozbiljnosti."),
      h2("Da li izdaje račun i garanciju na izveden posao"),
      p("Ovo je osnovno, ali iznenađujuće često zanemareno pitanje. Račun nije samo formalnost za poresku upravu, on je i vaš dokaz da je posao izveden, korisan ako se problem ponovi ili ako kasnije prodajete nekretninu. Garancija na rad, obično šest meseci do godinu dana, pokazuje da izvođač stoji iza kvaliteta svog posla, ne samo da je „odradio i otišao”."),
      h2("Da li objašnjava obim posla i cenu pre početka"),
      p("Ozbiljan električar će, pre nego što počne rad, objasniti šta tačno planira da uradi i zašto, i dati vam jasnu cenu ili barem opseg cene pre nego što uzme alat u ruke. Ako neko izbegava konkretan odgovor na pitanje „koliko će ovo koštati” i stalno odgovara neodređeno, to je signal da će konačna cena verovatno biti veća nego što ste očekivali."),
      h2("Da li koristi atestiran materijal"),
      p("Pitajte konkretno kakvu opremu koristi, i ne zadovoljavajte se odgovorom „dobru robu”. Atestirana oprema poznatih proizvođača je nešto skuplja od nepoznatih, neatestiranih alternativa, ali razlika u ceni je mala u odnosu na ukupan trošak posla, dok je razlika u pouzdanosti i bezbednosti značajna. Ovo je jedno od retkih mesta gde ušteda od nekoliko hiljada dinara nije preporučljiva."),
      h2("Da li vam jasno objašnjava šta je pronašao i šta radi"),
      p("Dobar znak je kad vam električar, na primer tokom dijagnostike kvara, objasni šta je tačno pronašao i zašto je do problema došlo, umesto da samo kaže „popravljeno je” i ode. Ovo ne znači da morate da razumete svaki tehnički detalj, ali objašnjenje pokazuje da je posao stvarno urađen razumno, ne samo „zakrpljen” da problem privremeno nestane."),
      h2("Zašto najniža cena nije uvek najbolji izbor"),
      p("Cena svakako igra ulogu, ali kad je ponuda značajno niža od proseka tržišta, vredi se zapitati gde se štedi, da li je to na materijalu, na vremenu provedenom na svakom koraku poput vakumiranja ili testiranja, ili na iskustvu izvođača. Ova ušteda se retko vidi odmah, ali se gotovo uvek naplati kasnije, kroz kraći vek trajanja instalacije ili učestalije kvarove."),
      h2("Poslednji, možda najvažniji test"),
      p("Kako se neko ponaša kad postavite pitanje koje im možda ne odgovara, na primer „zašto je ovo skuplje nego kod konkurencije” ili „šta tačno uključuje ova cena”, često govori više od samog odgovora. Izvođač koji strpljivo i konkretno odgovori zaslužuje poverenje više nego onaj koji postane odbrambeno raspoložen ili izbegava odgovor."),
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
      "Renoviranje je idealna prilika da se instalacija uradi kako treba, ali samo ako se elektro deo isplanira pre, ne usred radova. Evo preporučenog redosleda.",
    summary:
      "Elektro deo renoviranja treba planirati pre početka radova, ne usred njih, jer izmene nakon što su zidovi već zatvoreni koštaju mnogo više. Ključni koraci su procena postojeće instalacije, definisanje rasporeda novih tačaka prema planu nameštaja, i usklađivanje sa ostalim izvođačima oko redosleda radova.",
    keyTakeaways: [
      "Elektro raspored treba definisati pre zidarskih radova, ne posle njih",
      "Procena postojeće instalacije pokazuje da li je pametnije raditi delimičnu ili kompletnu zamenu",
      "Redosled radova (prvo elektro trase, pa gletovanje i farbanje) štedi vreme i novac",
      "Rezervne cevi (prazne instalacione cevi) tokom renoviranja su jeftin način da se olakšaju buduće izmene",
    ],
    publishedAt: "2026-06-08T09:00:00.000Z",
    coverImageUrl: "/images/blog/priprema-instalacije-za-renoviranje.webp",
    body: [
      p("Najčešća greška kod renoviranja nije loše izveden elektro rad, nego elektro rad koji je isplaniran prekasno, kad su zidovi već zagletovani i obojeni, i kad svaka izmena znači ponovno bušenje i prljavštinu. U nastavku je opisan redosled preporučen svima koji planiraju veće renoviranje."),
      h2("Korak jedan: procena postojeće instalacije, pre nego što odlučite šta menjate"),
      p("Pre nego što odlučite da li menjate celu instalaciju ili samo dodajete par tačaka, vredi uraditi kratku procenu postojećeg stanja. Ako je instalacija bakarna, relativno nova i u dobrom stanju, često ima smisla samo dodati nove tačke tamo gde ih nedostaje. Ako je aluminijumska ili stara više od tri decenije, renoviranje je idealna prilika da se uradi kompletna zamena, jer se zidovi svakako otvaraju za druge radove, pa je dodatni trošak elektro dela relativno manji nego kad bi se radio kao samostalna intervencija kasnije."),
      h2("Korak dva: raspored tačaka prema stvarnom planu nameštaja, ne generičkom šablonu"),
      p("Ovo je faza u kojoj se prave odluke koje će se osećati svaki dan narednih dvadeset godina. Vredi razmisliti konkretno, gde ide krevet, da li su potrebne noćne lampe sa obe strane, gde stoji televizor i da li treba utičnica iza njega za skrivanje kablova, da li se planira radni sto, da li kuhinja ima ostrvo koje zahteva sopstvenu utičnicu. Generički raspored, po jedna utičnica na svakom zidu, retko odgovara stvarnom korišćenju prostora, i skoro uvek se na kraju pokaže da negde nedostaje utičnica tačno tamo gde je najpotrebnija."),
      h2("Korak tri: usklađivanje redosleda sa drugim izvođačima"),
      p("Elektro trase se rade pre gletovanja i farbanja, to je jasno svima, ali manje je očigledno da treba uskladiti i sa vodoinstalaterima, posebno u kupatilu i kuhinji, gde se elektro i vodovodne instalacije često ukrštaju u istom delu zida. Dobra praksa je da elektro i vodoinstalater dođu istog dana na dogovor oko trasa, kako se ne bi desilo da vodovodna cev prolazi tačno tamo gde je planirana utičnica."),
      h2("Korak četiri: razmislite o rezervnim cevima za budućnost"),
      p("Praktičan korak koji se preporučuje tokom renoviranja je postavljanje jedne ili dve prazne instalacione cevi od table do ključnih tačaka u stanu, na primer do dnevnog boravka ili budućeg radnog prostora. Cena ove cevi tokom renoviranja je zanemarljiva, a omogućava da se za par godina, ako zatreba nova linija za dodatni uređaj ili pametnu kuću, izbegne ponovno bušenje i prljanje gotovog zida, jer se novi kabl provuče kroz već postojeću cev."),
      h2("Korak pet: ne zaboravite pametne funkcije, čak i ako ih odmah ne koristite"),
      p("Priprema instalacije za pametne prekidače, senzore pokreta ili automatizovanu rasvetu sve je traženija. Čak i ako se trenutno ne planira ugradnja svega toga, jeftinije je pripremiti dodatni provodnik (na primer neutralni vod na mestu prekidača, koji je potreban za većinu pametnih prekidača) tokom renoviranja nego naknadno, kad je zid već gotov. Opremu nije potrebno odmah kupovati, dovoljno je ostaviti mogućnost otvorenu."),
      h2("Kad je najbolje vreme za kontakt"),
      p("Idealno u fazi kad postoji gotov idejni plan prostorija i okvirna ideja rasporeda nameštaja, ali pre nego što je bilo šta zazidano. U tom trenutku je moguće proći kroz svaku prostoriju, predložiti raspored na osnovu iskustva sa sličnim prostorima, i dati realnu cenu pre nego što majstori uopšte počnu da rade."),
    ],
    faq: [
      { question: "Da li je jeftinije raditi elektro instalaciju tokom renoviranja ili posle?", answer: "Znatno je jeftinije tokom renoviranja, dok su zidovi već otvoreni za druge radove. Naknadna izmena gotovog zida uvek podrazumeva dodatni trošak bušenja, gletovanja i farbanja." },
      { question: "Koliko unapred treba pozvati električara u odnosu na početak renoviranja?", answer: "Preporučujemo kontakt čim imate gotov idejni raspored prostorija, obično dve do četiri nedelje pre planiranog početka radova, kako bismo stigli da se uklopimo u vaš raspored izvođača." },
      { question: "Da li vredi postavljati prazne cevi za buduće linije?", answer: "Da, to je jeftina investicija koja olakšava buduće izmene bez ponovnog otvaranja zida, i preporučuje se kod svakog većeg renoviranja." },
    ],
  },
  {
    slug: "boje-instalacionih-zica-sta-treba-da-znate",
    title: "Boje instalacionih žica: šta svako treba da zna",
    category: "bezbednost",
    excerpt:
      "Braon, plava, žuto-zelena. Boje provodnika nisu estetski izbor, nego bezbednosni standard koji vam govori šta je pod naponom pre nego što uopšte dodirnete žicu.",
    summary:
      "Savremeni standard predviđa braon, crnu ili sivu boju za fazni provodnik, plavu za neutralni i žuto-zelenu kombinaciju isključivo za zaštitno uzemljenje. Problem nastaje kod starijih instalacija, gde se boje ne poklapaju uvek sa današnjim standardom, zbog čega se boja provodnika nikad ne sme koristiti kao jedini dokaz da žica nije pod naponom.",
    keyTakeaways: [
      "Braon, crna ili siva boja označava fazni provodnik, plava neutralni, žuto-zelena isključivo zaštitno uzemljenje",
      "Starije instalacije, posebno one iz perioda pre devedesetih, često ne prate ovaj standard",
      "Boja provodnika je orijentir, ne dokaz. Pre bilo kakvog dodira uvek proverite testerom napona",
      "Trofazne instalacije imaju tri različito obojena fazna provodnika, a sva tri su podjednako opasna",
    ],
    publishedAt: "2026-07-10T09:00:00.000Z",
    coverImageUrl: "/images/blog/boje-instalacionih-zica-sta-treba-da-znate.webp",
    body: [
      p("Boje izolacije na instalacionim žicama nisu proizvoljne, one prate standard koji postoji upravo zato da bi svako, od električara do vlasnika stana koji menja prekidač, mogao da prepozna ulogu svakog provodnika pre nego što ga dodirne. Problem je što se taj standard menjao kroz decenije, pa boja sama po sebi nikad ne sme biti jedini dokaz da žica nije pod naponom."),
      h2("Savremeni standard: šta koja boja znači"),
      p("Prema važećem standardu koji se primenjuje i u novim instalacijama u Srbiji, braon, crna ili siva boja izolacije označava fazni provodnik, onaj koji je pod naponom kad je strujno kolo aktivno. Plava boja je rezervisana za neutralni provodnik, koji struju vraća nazad ka izvoru. Žuto-zelena kombinacija, prepoznatljive naizmenične pruge, koristi se isključivo za zaštitni provodnik, odnosno uzemljenje, i ne sme se koristiti ni za šta drugo, čak ni u privremenim instalacijama."),
      h2("Zašto starije instalacije odstupaju od ovoga"),
      p("Instalacije rađene pre devedesetih godina, a mnoge u Nišu i dalje jesu te starosti, često ne prate današnji standard boja. Nekada se crvena koristila za fazu, a plava nije bila strogo rezervisana za neutralni provodnik. Dodatni problem je fizičko starenje izolacije, gde toplota i vreme izbeljuju ili zatamnjuju boju do te mere da je teško sa sigurnošću reći koja je originalno bila. U takvim slučajevima oslanjanje na boju je direktan rizik, ne pomoć."),
      h2("Zašto boja nikad nije dovoljan dokaz"),
      p("Čak i u potpuno novoj instalaciji, boja provodnika govori šta je taj provodnik trebalo da bude, ne šta jeste u datom trenutku. Greška pri povezivanju, bilo od strane prethodnog izvođača ili nekog ko je naknadno intervenisao, može ostaviti fazni provodnik obojen kao neutralni. Zato je pravilo jednostavno, pre bilo kakvog dodira provodnika, čak i kad izgleda isključeno, potrebno je proveriti testerom napona ili multimetrom, ne osloniti se samo na boju izolacije."),
      h2("Trofazne instalacije: tri faze, tri boje, isti rizik"),
      p("Kod trofaznih priključaka, uobičajenih za kuće, veće stanove sa elektro bojlerima ili poslovni prostor, sve tri fazne linije nose različite boje, najčešće braon, crnu i sivu, kako bi se razlikovale jedna od druge radi ravnomernog opterećenja i lakšeg povezivanja uređaja. Bitno je razumeti da su sve tri podjednako opasne, razlika u boji postoji radi organizacije ožičenja, ne radi bezbednosti pojedinačne linije."),
      h2("Kad boja uvezene opreme ne prati domaći standard"),
      p("Rasveta i uređaji uvezeni sa tržišta koja koriste drugačiji standard, na primer iz Severne Amerike, mogu imati potpuno drugačiju šemu boja na sopstvenim kablovima, gde crna često označava fazu, a bela neutralni provodnik. Kod povezivanja takve opreme na domaću instalaciju nije dovoljno uparivati boje po sećanju, potrebno je proveriti deklaraciju proizvođača ili prepustiti povezivanje električaru koji zna na šta da obrati pažnju."),
    ],
    faq: [
      { question: "Da li mogu da se oslonim na boju žice da znam da je bezbedna za dodir?", answer: "Ne. Boja govori koja je uloga provodnika trebalo da bude, ne garantuje trenutno stanje. Uvek proverite testerom napona ili multimetrom pre dodira, bez obzira na boju." },
      { question: "Zašto moja stara instalacija ima drugačije boje žica od onoga što piše na internetu?", answer: "Verovatno je rađena pre uvođenja današnjeg standarda boja, kada su se braon, crvena i plava koristile drugačije nego danas. To je uobičajeno kod instalacija starijih od tridesetak godina." },
      { question: "Da li je žuto-zelena žica uvek uzemljenje?", answer: "Da, ta kombinacija je po standardu rezervisana isključivo za zaštitni provodnik i ne bi trebalo da se koristi za fazu ili neutralni provodnik ni u jednoj ispravno izvedenoj instalaciji." },
    ],
  },
  {
    slug: "sta-je-fid-sklopka-i-zasto-je-obavezna",
    title: "Šta je FID sklopka i zašto je obavezna u svakoj instalaciji",
    category: "bezbednost",
    excerpt:
      "FID sklopka reaguje za manje od četrdeset milisekundi i isključuje struju pre nego što udar postane opasan. Evo kako radi, gde se ugrađuje i zašto je bez nje svaka instalacija nepotpuna.",
    summary:
      "FID (diferencijalna) sklopka, poznata i kao RCD, je zaštitni uređaj koji meri razliku između struje koja ulazi i struje koja izlazi iz strujnog kruga. Ako ta razlika pređe trideset miliampera, što znači da struja negde curi, najčešće kroz ljudsko telo ili oštećenu izolaciju, FID prekida kolo za manje od četrdeset milisekundi. U Srbiji je ugradnja FID sklopke obavezna po pravilniku za nove instalacije, ali većina starijih stanova i kuća u Nišu je nema. Ovaj tekst objašnjava kako FID radi, razlike između tipova, gde se ugrađuje u razvodnoj tabli i koliko košta ugradnja.",
    keyTakeaways: [
      "FID sklopka detektuje curenje struje od 30 mA i isključuje kolo za manje od 40 ms",
      "Obavezna je po srpskom pravilniku za sve nove elektroinstalacije",
      "Tip A pokriva i jednosmerne komponente, tip AC samo naizmenične",
      "Ugradnja u postojeću tablu u Nišu košta od 4500 do 7500 dinara sa materijalom",
    ],
    coverImageUrl: "/images/blog/sta-je-fid-sklopka-i-zasto-je-obavezna.webp",
    publishedAt: "2026-07-30T09:00:00.000Z",
    body: [
      p("FID sklopka je uređaj koji vam može spasiti život, a većina ljudi ne zna da li je uopšte ima u svojoj razvodnoj tabli. U praksi, njen posao je jednostavan: ako struja počne da curi tamo gde ne bi trebalo, kroz oštećenu izolaciju, vlažan zid ili, u najgorem slučaju, kroz vaše telo, FID to detektuje i isključi struju pre nego što udar postane opasan. Vreme reakcije je ispod četrdeset milisekundi, brže nego što nervni sistem stigne da registruje bol."),
      h2("Kako FID sklopka zapravo radi"),
      p("Princip je merni. FID stalno poredi struju koja ulazi u krug kroz fazni provodnik sa strujom koja se vraća kroz neutralni. U ispravnom kolu te dve vrednosti su jednake, jer sve što ode mora da se vrati. Ako se pojavi razlika, to znači da deo struje odlazi negde drugde, u zemlju, kroz oštećenu izolaciju ili kroz osobu koja dodiruje provodnik pod naponom."),
      p("Standardna FID sklopka za domaćinstvo reaguje na razliku od trideset miliampera. To je prag koji je ispod opasnog nivoa za ljudsko telo, a istovremeno dovoljno visok da ne reaguje na normalne, beznačajne gubitke koji postoje u svakoj instalaciji. Kad razlika pređe taj prag, mehanizam unutar FID sklopke fizički prekida kontakt i strujni krug se gasi."),
      h2("Tip AC, tip A i tip B: u čemu je razlika"),
      p("Tip AC reaguje samo na naizmenična curenja struje. To je najjeftiniji i najčešći tip koji se srećeo u starijim tablama. Problem je u tome što sve više uređaja u modernom domaćinstvu, punjači, inverterski uređaji, indukcione ploče, proizvodi jednosmerne komponente u strujnom kolu na koje tip AC ne reaguje."),
      p("Tip A pokriva i jednosmerne pulsirajuće komponente, što ga čini prikladnim za savremene instalacije. Srpski pravilnik za nove instalacije zahteva najmanje tip A na linijama gde su priključeni uređaji sa elektronskim napajanjima, što u praksi znači skoro svuda."),
      p("Tip B pokriva i čiste jednosmerne struje i koristi se u industrijskim primenama, kod trofaznih frekventnih regulatora i punjionica za električna vozila. Za stambene instalacije u Nišu, tip A je standard koji pokriva sve uobičajene potrebe."),
      h2("Gde se FID ugrađuje u razvodnoj tabli"),
      p("FID sklopka se postavlja u razvodnu tablu, posle glavnog prekidača a ispred automatskih osigurača za pojedinačne strujne krugove. Postoje dva pristupa: jedan FID za celu instalaciju ili više FID sklopki, svaka za grupu krugova. Drugi pristup je skuplji, ali praktičniji, jer kad jedan FID reaguje, bez struje ostaje samo deo stana, ne ceo."),
      p("U tipičnom stanu u Nišu sa četiri do šest strujnih krugova, najčešća konfiguracija je dva FID-a: jedan za utičnice i jedan za rasvetu. Važnija linija, recimo kupatilo ili kuhinja, može dobiti sopstveni FID ako vlasnik želi dodatnu sigurnost. Linija za bojler i veš mašinu u vlažnom prostoru posebno zaslužuje izdvojenu zaštitu."),
      h2("Zašto starije instalacije nemaju FID"),
      p("Ugradnja FID sklopke u stambenim objektima u Srbiji postala je obavezna pravilnikom koji se primenjuje na nove instalacije. Stanovi i kuće građeni pre toga, a to je većina stambenog fonda u Nišu, projektovani su samo sa topljivim osiguračima ili automatskim prekidačima. Ti uređaji štite instalaciju od preopterećenja i kratkog spoja, ali ne štite ljude od udara struje pri dodiru."),
      p("To ne znači da je svaka starija instalacija bez zaštite od udara. Neke su naknadno dopunjene FID sklopkom, ali mnoge nisu. Provera je jednostavna: otvorite razvodnu tablu i pogledajte da li pored automatskih osigurača postoji uređaj sa test dugmetom označenim slovom T. Ako tog dugmeta nema, velika je verovatnoća da FID sklopka nije ugrađena."),
      h2("Test dugme: zašto ga treba pritiskati jednom mesečno"),
      p("Svaka FID sklopka ima test dugme. Kad ga pritisnete, sklopka simulira curenje struje i trebalo bi da se isključi. To je jedini način da proverite da li FID zaista radi, jer u normalnim uslovima on ne reaguje i ne daje nikakvu povratnu informaciju o svom stanju. Proizvođači preporučuju testiranje jednom mesečno."),
      p("Ako pritisnete test dugme i ništa se ne desi, FID je neispravan i treba ga zameniti. Ovo se dešava ređe nego kod mehaničkih osigurača, ali se dešava, posebno kod starijih modela koji su u tabli deset i više godina bez zamene."),
      h2("Koliko košta ugradnja FID sklopke u Nišu"),
      p("Ugradnja jedne FID sklopke tipa A u postojeću razvodnu tablu u Nišu košta od 4500 do 7500 dinara, sa materijalom i radom. Cena zavisi od toga da li u tabli ima slobodnog mesta za dodatni modul ili treba prilagoditi raspored. Ako tabla nema mesta, ponekad je praktičnije zameniti celu tablu nego se lomiti sa adaptacijom, ali to se procenjuje na licu mesta."),
      p("Za stan sa dva FID-a, jedan za utičnice i jedan za rasvetu, ukupan trošak je najčešće između 8000 i 13000 dinara. To je jednokratan trošak za uređaj koji traje petnaest do dvadeset godina i koji je jedina zaštita između vas i potencijalno smrtonosnog udara struje."),
    ],
    faq: [
      { question: "Da li FID sklopka zamenjuje osigurače?", answer: "Ne. FID štiti ljude od udara struje, a osigurači štite instalaciju od preopterećenja i kratkog spoja. Potrebno je oboje, jedno ne zamenjuje drugo." },
      { question: "Zašto mi FID stalno iskače?", answer: "Najčešći uzroci su vlaga u nekoj utičnici ili razvodnoj kutiji, oštećena izolacija na kablu ili neispravan uređaj koji curi na masu. Treba utvrditi na kojoj liniji je problem, što se radi isključivanjem jednog po jednog osigurača dok FID prestane da reaguje." },
      { question: "Da li mogu sam da ugrađam FID sklopku?", answer: "Tehnički je moguće ako imate iskustva sa radom na razvodnoj tabli, ali nije preporučljivo. Rad u tabli pod naponom je opasan, a pogrešno povezan FID može da ne reaguje kad treba. Ugradnju treba da radi električar." },
      { question: "Koliko FID sklopki treba za kuću?", answer: "Zavisi od broja strujnih krugova i rasporeda. Minimum je jedan FID za celu instalaciju, ali preporuka je bar dva: jedan za utičnice, jedan za rasvetu. U kući sa više spratova, svaki sprat može imati sopstveni FID za lakšu dijagnostiku." },
      { question: "Da li FID radi bez uzemljenja?", answer: "FID može da reaguje i bez uzemljenja, ali sporije i ne u svim situacijama. Uzemljenje obezbeđuje brz i pouzdan put za struju curenja, pa je kombinacija FID plus uzemljenje potpuna zaštita. Samo jedno od toga je nepotpuno." },
    ],
  },
  {
    slug: "koliko-kosta-zamena-elektro-instalacije-u-stanu-u-nisu",
    title: "Koliko košta zamena elektro instalacije u stanu u Nišu",
    category: "renoviranje",
    excerpt:
      "Realni iznosi po tipu stana, garsonjera, dvosoban i trosoban, sa razlaganjem na razvođenje, tablu i uzemljenje. I zašto je Niš jeftiniji od Beograda.",
    summary:
      "Kompletna zamena elektro instalacije u Nišu kreće se okvirno od 55.000 dinara za garsonjeru do 230.000 dinara za veći trosoban stan, zavisno od kvadrature, broja tačaka i stanja zida. Beograd za isti obim posla naplaćuje rad od 10 do 15 evra po kvadratu, Niš je po pravilu jeftiniji, u proseku 7 do 10 evra po kvadratu za sam rad.",
    keyTakeaways: [
      "Cena zavisi od kvadrature, broja instalacionih tačaka i toga da li se radi u naseljenom ili praznom stanu",
      "Garsonjera: okvirno 55.000 do 90.000 dinara za kompletnu zamenu",
      "Dvosoban stan: okvirno 95.000 do 170.000 dinara",
      "Trosoban stan: okvirno 135.000 do 230.000 dinara",
      "Beograd naplaćuje rad 10 do 15 evra po kvadratu, Niš je jeftiniji, oko 7 do 10 evra po kvadratu",
    ],
    publishedAt: "2026-08-05T09:00:00.000Z",
    coverImageUrl: "/images/blog/koliko-kosta-zamena-elektro-instalacije-u-stanu-u-nisu.webp",
    body: [
      p("Zamena elektro instalacije je jedan od onih poslova gde je „zavisi” tehnički tačan, ali beskoristan odgovor. U ovom tekstu su konkretni iznosi za tri najčešća tipa stana u Nišu, sa razlaganjem na stavke koje čine ukupnu cenu, i poređenjem sa Beogradom, jer se to pitanje redovno postavlja ljudima koji su se doselili ili prodaju nekretninu preko granice grada."),
      h2("Šta ulazi u kompletnu zamenu instalacije"),
      p("Kompletna zamena podrazumeva skidanje stare instalacije do zida, provlačenje novih vodova kroz žlebove do svake prostorije, postavljanje svih utičnica, prekidača i tačaka za rasvetu, ugradnju novog razvodnog ormana sa modularnom opremom, i izradu ili proveru uzemljenja. Cena se najčešće izražava po kvadratnom metru stana, jer kvadratura direktno određuje dužinu vodova i broj tačaka."),
      p("Aktuelna cena u Nišu za ovaj kompletan posao, materijal i rad zajedno, kreće se od 1900 do 2600 dinara po kvadratnom metru. Donji deo raspona važi za prazan stan bez nameštaja, gde je pristup zidovima slobodan, a gornji za naseljen prostor gde se radi u fazama i uz zaštitu postojećeg nameštaja i podova."),
      h2("Cena po tipu stana"),
      h3("Garsonjera (25 do 35 m²)"),
      p("Za garsonjeru kompletna zamena instalacije, uključujući razvodni orman i sve tačke, okvirno iznosi od 55.000 do 90.000 dinara. Ovo je najjednostavniji slučaj, manje prostorija znači manje razvoda i kraće trajanje radova, obično tri do četiri radna dana."),
      h3("Dvosoban stan (50 do 65 m²)"),
      p("Za dvosoban stan, uz standardan broj tačaka po prostoriji, ukupna cena se kreće od 95.000 do 170.000 dinara. Raspon je širi jer dvosobni stanovi u Nišu variraju od kompaktnih stanova iz sedamdesetih do prostranijih stanova u novogradnji, gde veći broj prostorija i dodatnih tačaka (kuhinjski aparati, klima, rasveta u više zona) diže cenu ka gornjoj granici."),
      h3("Trosoban stan (70 do 90 m²)"),
      p("Za trosoban stan, kompletna zamena instalacije okvirno iznosi od 135.000 do 230.000 dinara. Posao obično traje pet do sedam radnih dana. Kod trosobnih stanova je uzemljenje gotovo uvek deo posla, jer stanovi te veličine su po pravilu u starijim zgradama gde uzemljenje često ili ne postoji ili je urađeno nestandardno."),
      h2("Stavke koje čine ukupnu cenu"),
      p("Iznosi iznad su kompletan paket. Ako vas zanima cena pojedinačnih delova posla, evo kako se to razlaže:"),
      ...bullets([
        "Razvođenje instalacije po prostoriji: od 8000 do 15000 dinara, zavisno od broja tačaka koje se dodaju ili premeštaju",
        "Ugradnja novog razvodnog ormana: od 8000 do 15000 dinara, zavisno od broja modula i strujnih krugova",
        "Izrada novog sistema uzemljenja: od 18000 do 35000 dinara, zavisno od tipa terena i dužine uzemljivača",
        "Dodatna linija ili kabl van osnovnog razvoda: od 1600 do 2400 dinara po dužnom metru trase",
      ]),
      p("Ova podela je korisna kad ne radite kompletnu zamenu, nego samo deo posla, na primer zamenu table u stanu čija je ostala instalacija u redu, ili dodavanje uzemljenja objektu koji ga nema."),
      h2("Zašto je Niš jeftiniji od Beograda"),
      p("Ovo pitanje dobijam često od ljudi koji porede ponude sa iskustvom iz Beograda ili od rodbine koja tamo živi. Beograd za kompletnu zamenu instalacije naplaćuje rad, dakle bez materijala, od 10 do 15 evra po kvadratnom metru. U Nišu je taj isti rad, bez materijala, u proseku od 7 do 10 evra po kvadratu."),
      p("Razlika nije u kvalitetu izvedbe niti u ceni materijala, koji je svuda u Srbiji približno isti jer dolazi od istih distributera. Razlika je u troškovima poslovanja: zakup, gorivo, cena rada u gradu generalno. To je razlog zbog kog dobro urađena instalacija u Nišu realno može koštati manje nego prosečna u Beogradu, ne zato što je posao lošiji, nego zato što je struktura troškova drugačija."),
      h2("Šta poskupljuje posao iznad osnovne cene"),
      ...bullets([
        "Rad u naseljenom stanu, gde se mora raditi u fazama i štititi postojeći nameštaj i podovi",
        "Zidovi od betona ili armiranog betona, gde je štemovanje sporije nego kod opeke ili gips-kartona",
        "Veći broj strujnih krugova i modula u tabli, na primer odvojeni krug za klimu, bojler i kuhinjske aparate",
        "Nedostatak postojećeg uzemljenja, koje se u starijim zgradama u centru Niša često mora raditi od nule",
        "Loš raspored postojećih tačaka koji zahteva potpuno novu šemu razvoda umesto praćenja stare",
      ]),
      h2("Da li mora sve odjednom"),
      p("Ne mora. Česta i razumna opcija je fazna zamena: prvo tabla i uzemljenje, jer su to stavke koje se tiču bezbednosti cele instalacije, a razvođenje po prostorijama se radi kasnije, prostorija po prostoriju, uporedo sa renoviranjem tog dela stana. Ovo je posebno praktično za porodice koje ne mogu da isele stan na nedelju dana."),
      p("Jedino upozorenje kod fazne zamene je da nova tabla mora biti dimenzionisana za konačan broj strujnih krugova, ne samo za trenutno stanje, inače se za par godina plaća zamena table po drugi put."),
      h2("Kako izgleda ponuda kod nas"),
      p("Dolazimo na besplatan obilazak, pregledamo postojeću instalaciju i razvodni orman, pitamo šta klijent planira (broj utičnica po zidu, pozicija rasvete, da li se menja raspored prostorija) i dajemo fiksnu cenu sa spiskom stavki pre početka radova. Cena ne varira usred posla, jer je sve provereno unapred, uključujući stanje zidova i postojećeg uzemljenja."),
    ],
    faq: [
      { question: "Da li cena uključuje materijal?", answer: "Da, iznosi u tekstu su za kompletan posao, materijal i rad zajedno. Ako želite samo cenu rada radi poređenja sa drugom ponudom, ona je u proseku 7 do 10 evra po kvadratu u Nišu." },
      { question: "Koliko traje zamena instalacije u dvosobnom stanu?", answer: "U proseku četiri do šest radnih dana za prazan stan, duže ako se radi u naseljenom prostoru u fazama." },
      { question: "Da li mora da se menja i razvodni orman?", answer: "Ne uvek, ali kod kompletne zamene instalacije skoro uvek se preporučuje, jer stara tabla obično nije dimenzionisana za broj strujnih krugova koje savremeno domaćinstvo zahteva." },
      { question: "Šta ako stan nema uzemljenje?", answer: "Kod starijih zgrada u Nišu ovo je čest slučaj. Izrada novog sistema uzemljenja se dodaje kao posebna stavka, od 18000 do 35000 dinara zavisno od tipa terena, i preporučuje se kao deo kompletne zamene, ne kao naknadna dopuna." },
      { question: "Da li dajete pisanu ponudu pre početka radova?", answer: "Da, posle besplatnog obilaska dajemo fiksnu cenu sa spiskom stavki. Cena se ne menja tokom radova osim ako klijent naknadno zatraži dodatan posao van dogovorenog obima." },
    ],
  },
  {
    slug: "ugradnja-ev-punjaca-kod-kuce-sta-treba-znati",
    title: "Ugradnja EV punjača kod kuće: šta treba znati pre kupovine električnog automobila",
    category: "saveti",
    excerpt:
      "Pre nego što potpišete ugovor za novi auto, proverite da li vaša kuća ili stan mogu da prihvate kućni punjač. Snaga, faza, tabla i realan rok ugradnje.",
    summary:
      "Kućni EV punjač zahteva proveru priključne snage objekta pre kupovine automobila, ne posle. Standardni kućni punjač je 7,4 kW na jednoj fazi ili 11 do 22 kW na tri faze, a mnoge starije instalacije u Nišu nemaju dovoljnu priključnu snagu ili trofazni priključak za brže punjenje. Ugradnja standardnog punjača traje jedan radni dan, uz predviđen budžet za posebnu liniju i, u nekim slučajevima, zamenu razvodnog ormana.",
    keyTakeaways: [
      "Proverite priključnu snagu objekta pre kupovine auta, ne posle isporuke punjača",
      "Standardni kućni punjač je 7,4 kW jednofazno ili 11 do 22 kW trofazno",
      "Trofazni priključak nije svuda dostupan, posebno u starijim delovima Niša",
      "Punjaču je uvek potrebna posebna linija sa sopstvenim osiguračem, ne deljenje sa postojećom utičnicom",
      "Standardna ugradnja traje jedan radni dan, ako instalacija to dozvoljava bez dodatnih zahvata",
    ],
    publishedAt: "2026-08-06T09:00:00.000Z",
    coverImageUrl: "/images/blog/ugradnja-ev-punjaca-kod-kuce-sta-treba-znati.webp",
    body: [
      p("Sve više klijenata u Nišu nas zove tek pošto je auto već poručen ili čak stigao, sa pitanjem koliko brzo možemo da ugradimo kućni punjač. Odgovor je skoro uvek isti: brzo, ako instalacija to dozvoljava, a to se saznaje tek na licu mesta. Ovaj tekst je vodič kroz ono što vredi proveriti pre kupovine automobila, ne posle, jer nekoliko pitanja unapred može uštedeti i vreme i novac."),
      h2("Zašto je redosled bitan"),
      p("Kupovina punjača pre provere priključne snage je čest propust. Punjač koji stigne kući ne može uvek biti bezbedno priključen na postojeću instalaciju, ili radi znatno sporije od deklarisane snage jer objekat fizički nema dovoljno struje na raspolaganju. Zato je provera priključne snage i stanja razvodnog ormana korak koji treba uraditi pre nego što se odluči tip i snaga punjača, idealno i pre same kupovine automobila, ako je moguće."),
      h2("Koliko kW zapravo znači"),
      p("Snaga punjenja se izražava u kilovatima (kW) i direktno određuje koliko brzo se automobil puni. Kućni punjači u Srbiji se najčešće nalaze u dva raspona:"),
      ...bullets([
        "7,4 kW na jednoj fazi: standardan izbor za većinu domaćinstava, puni prosečnu bateriju od 60 kWh za oko osam do devet sati",
        "11 kW na tri faze: brže punjenje, ista baterija se puni za oko pet do šest sati, zahteva trofazni priključak",
        "22 kW na tri faze: najbrže za kućnu upotrebu, ali retko iskoristivo do kraja jer većina automobila na jednofaznom punjaču ionako ograničava snagu na 11 kW",
      ]),
      p("Za svakodnevno punjenje preko noći, 7,4 kW jednofazno je sasvim dovoljno za većinu korisnika, jer se automobil puni dok se spava, bez obzira da li to traje šest ili devet sati. Trofazni punjač ima smisla za domaćinstva koja voze više kilometara dnevno ili žele fleksibilnost brzog dopunjavanja tokom dana."),
      h2("Jednofazni ili trofazni priključak: šta imate"),
      p("Ovo je prvo pitanje koje postavljam na terenu. Mnogi stariji stanovi i kuće u Nišu, posebno u delovima grada gradenim pre devedesetih, imaju samo jednofazni priključak. Trofazni priključak je standardniji u novogradnji i u kućama gde je vlasnik već imao potrebu za jačim uređajima, na primer bojler velike snage ili industrijsku mašinu u radionici."),
      p("Ako imate samo jednofazni priključak, to ne znači da punjenje kod kuće nije moguće, samo da je 7,4 kW gornja granica bez dodatnih zahvata na priključku. Prelazak na trofazni priključak je moguć, ali zahteva zahtev distributeru struje i, po pravilu, dodatne troškove i vreme čekanja koje treba planirati unapred, ne u poslednji čas."),
      h2("Da li tabla i priključna snaga izdržavaju punjač"),
      p("Punjač od 7,4 kW predstavlja ozbiljno dodatno opterećenje, po pravilu veće od bilo kog drugog kućnog uređaja, uključujući bojler ili šporet. Ako objekat već radi blizu granice svoje priključne snage, dodavanje punjača bez provere dovodi do učestalog ispadanja glavnog osigurača kod distributera, posebno kad se punjač uključi istovremeno sa drugim jakim uređajima."),
      p("Pre ugradnje proveravamo ukupnu priključnu snagu objekta i koliko je od nje već iskorišćeno, zatim stanje i slobodan prostor u razvodnom ormanu. Ako priključak nije dovoljan, opcije su punjenje manjom snagom, preraspodela opterećenja (na primer ne koristiti bojler i punjač istovremeno), ili razgovor sa distributerom o povećanju priključne snage."),
      h2("Zašto punjač uvek treba posebnu liniju"),
      p("Punjač se nikad ne priključuje na postojeću utičnicu ili deljeni vod, čak i kad je reč o manjoj snazi od 7,4 kW. Potrebna je posebna instalaciona linija odgovarajućeg preseka od razvodnog ormana direktno do punjača, sa sopstvenim osiguračem i, obavezno, odgovarajućom zaštitnom sklopkom (FID tip A ili B, zavisno od tipa punjača). Deljenje voda sa drugim uređajima nije bezbedno pri ovoj snazi i nije nešto što bilo koji ozbiljan izvođač preporučuje."),
      h2("Realan rok i tok ugradnje"),
      p("Za standardnu ugradnju, gde je punjač blizu razvodnog ormana i trasa je kratka, radovi traju jedan radni dan: provera priključne snage i stanja table, provlačenje posebne linije, ugradnja zaštitne sklopke, montaža punjača i test rada. Ako je trasa duža, na primer punjač u dvorištu udaljenom od table, ili ako se dodaje trofazni priključak, računajte na dodatne dane."),
      h2("Cena orijentaciono"),
      p("Ugradnja posebne linije i zaštitne sklopke za standardan jednofazni punjač u Nišu, bez cene samog punjača, kreće se okvirno od 15.000 do 30.000 dinara, zavisno od dužine trase i toga da li tabla ima slobodno mesto za dodatni modul. Za trofazni priključak ili duže trase, cena raste u zavisnosti od obima radova, i uvek je bolje proceniti na licu mesta nego se osloniti na generičku cifru."),
      h2("Šta proveriti pre kupovine punjača, korak po korak"),
      ...bullets([
        "Pozovite električara da proveri priključnu snagu objekta i stanje razvodnog ormana",
        "Utvrdite da li imate jednofazni ili trofazni priključak",
        "Odlučite gde punjač fizički ide, garaža, dvorište ili prilaz, i izmerite realnu udaljenost od table",
        "Na osnovu toga birajte snagu i tip punjača, ne obrnuto",
        "Tek onda kupujte, sa jasnim datumom ugradnje dogovorenim unapred",
      ]),
      p("Za detaljniji pregled celokupne usluge, uključujući tipove punjača i IP zaštitu za spoljnu montažu, pogledajte našu stranicu o ugradnji EV punjača."),
    ],
    faq: [
      { question: "Da li mi treba trofazni priključak za kućni EV punjač?", answer: "Ne obavezno. Za punjenje preko noći, jednofazni priključak sa punjačem od 7,4 kW je sasvim dovoljan za većinu korisnika. Trofazni priključak ima smisla samo ako želite brže punjenje tokom dana ili vozite veći broj kilometara dnevno." },
      { question: "Šta ako moja tabla nema slobodno mesto za novi modul?", answer: "U tom slučaju se procenjuje da li je isplativije proširiti postojeću tablu ili je zameniti novom, sa dovoljno modula i za punjač i za buduće potrebe. Ovo se utvrđuje tokom besplatne provere pre ugradnje." },
      { question: "Koliko traje ugradnja standardnog kućnog punjača?", answer: "Za kratku trasu i dovoljnu priključnu snagu, jedan radni dan: provera, provlačenje linije, ugradnja zaštitne sklopke i montaža punjača." },
      { question: "Da li mogu da priključim punjač na postojeću jaku utičnicu, na primer onu za šporet?", answer: "Ne preporučuje se. Punjač zahteva sopstvenu liniju sa odgovarajućim osiguračem i zaštitnom sklopkom, ne deljenje voda sa drugim uređajem, zbog dužine i konstantnosti opterećenja koje punjenje automobila stvara." },
      { question: "Da li treba da proverim priključnu snagu pre ili posle kupovine auta?", answer: "Pre, ako je moguće. Provera je besplatna i brza, a saznanje da priključak nije dovoljan pre kupovine ostavlja vreme da se to reši sa distributerom, umesto da se otkrije tek kad punjač već stoji u kutiji." },
    ],
  },
  {
    slug: "sta-je-uzemljenje-i-zasto-je-obavezno",
    title: "Šta je uzemljenje i zašto je obavezno u svakom stanu",
    category: "bezbednost",
    excerpt:
      "Uzemljenje je jedna od onih stavki koje se ne vide dok ne zatreba, a tad je već kasno da se pita da li postoji. Evo šta zapravo radi i kako sami da proverite da li ga imate.",
    summary:
      "Uzemljenje obezbeđuje siguran put kojim struja curenja odlazi u zemlju umesto kroz telo osobe koja dodirne neispravan uređaj. Bez njega, oštećena izolacija na kućištu aparata može da ga pretvori u provodnik pod naponom, a osetljiva elektronika ostaje bez zaštite od prenapona. Postoji nekoliko jednostavnih načina da proverite da li vaš stan ima uzemljenje, od izgleda utičnice do jeftinog test utikača, ali za pouzdanu potvrdu i za atest potrebno je stručno merenje.",
    keyTakeaways: [
      "Uzemljenje daje struji curenja siguran put ka zemlji, umesto kroz telo osobe koja dodirne neispravan uređaj",
      "Šuko utičnica sa dva bočna metalna kontakta je znak da linija ima uzemljenje, ali to nije stopostotna potvrda",
      "Jeftin test utikač daje orijentacionu proveru, stručno merenje otpora uzemljenja daje tačan i merljiv rezultat",
      "Atest je obavezan za novogradnju, često se traži pri prodaji nekretnine i kod prijave štete osiguranju",
      "Uzemljenje i FID sklopka rade zajedno, jedno ne zamenjuje drugo",
    ],
    publishedAt: "2026-08-13T09:00:00.000Z",
    coverImageUrl: "/images/blog/sta-je-uzemljenje-i-zasto-je-obavezno.webp",
    body: [
      p("Uzemljenje je jedna od onih stavki u instalaciji koje niko ne primećuje dok sve radi kako treba, a onda postane jedino bitno pitanje u trenutku kad nešto pođe po zlu. U nastavku objašnjavam šta uzemljenje zapravo radi, kako sami da proverite da li ga vaš stan ima, i kada vam treba zvaničan atest."),
      h2("Šta uzemljenje zapravo radi"),
      p("Svaki metalni deo kućišta uređaja, mašina za veš, bojler, šporet, u ispravnom stanju ne bi trebalo da bude pod naponom. Problem nastaje kad se izolacija unutar uređaja ošteti i fazni provodnik dođe u kontakt sa metalnim kućištem. Bez uzemljenja, to kućište postaje provodnik pod naponom, a prva osoba koja ga dodirne i istovremeno je u kontaktu sa zemljom, na primer bosim nogama na pločicama, postaje put kojim struja teče."),
      p("Uzemljenje rešava taj problem tako što spaja metalno kućište uređaja sa zemljom preko provodnika mnogo manjeg otpora nego što ga ima ljudsko telo. Struja curenja instinktivno bira put najmanjeg otpora, pa umesto kroz osobu, najveći deo te struje ode kroz uzemljenje. To istovremeno izazove veliki skok struje na toj liniji, dovoljan da osigurač ili FID sklopka odmah reaguju i isključe napajanje."),
      h2("Zašto je ovo pitanje bezbednosti, ne samo tehnički detalj"),
      ...bullets([
        "Rizik od strujnog udara: bez uzemljenja, telo osobe može postati primarni put struje curenja, sa ozbiljnim ili smrtonosnim posledicama",
        "Oštećenje osetljive elektronike: uzemljenje takođe pomaže odvodu prenapona, na primer pri udaru groma u blizini, pa njegov nedostatak povećava rizik da računar, televizor ili druga elektronika stradaju pri iznenadnom skoku napona",
        "Rizik od požara: struja curenja koja nema uređen put ka zemlji može duže cirkulisati kroz instalaciju nego što bi trebalo, zagrevajući provodnike i spojeve na mestima koja nisu projektovana za to",
      ]),
      p("Važno je razumeti da uzemljenje i FID zaštitna sklopka nisu ista stvar, iako rade najbolje zajedno. FID sklopka meri razliku struje i isključuje kolo kad otkrije curenje, dok uzemljenje daje toj struji curenja put najmanjeg otpora da uopšte ne prođe kroz telo. FID može donekle da radi i bez uzemljenja, ali sporije i manje pouzdano, jer mu nedostaje taj brz, predvidiv put kojim se struja curenja usmerava."),
      h2("Kako sami da proverite da li vaš stan ima uzemljenje"),
      h3("Pogledajte izgled utičnice"),
      p("Standardna šuko utičnica koja ima uzemljenje prepoznaje se po dva metalna kontakta sa strane, gore i dole od otvora za utikač, koji dodiruju odgovarajuće kontakte na utikaču. Ako je vaša utičnica starijeg tipa, bez tih bočnih kontakata, samo sa dve rupice, velika je verovatnoća da ta linija nema uzemljenje. Ovo je brza vizuelna provera, ali nije konačan dokaz, jer utičnica može imati odgovarajući oblik, a da provodnik uzemljenja iza zida nije stvarno povezan ili je prekinut."),
      h3("Koristite jeftin test utikač"),
      p("U prodavnicama alata i elektro opreme postoje mali test utikači sa nekoliko LED lampica, koji se jednostavno utaknu u utičnicu i kombinacijom upaljenih ili ugašenih lampica pokazuju da li postoji faza, nula i uzemljenje, i da li su ispravno raspoređeni. Ovo je koristan, jeftin alat za brzu orijentacionu proveru svake utičnice u stanu, ali ne meri kvalitet uzemljenja, samo njegovo prisustvo."),
      h3("Zatražite stručno merenje otpora uzemljenja"),
      p("Za pouzdanu potvrdu, uzemljenje se meri specijalizovanim instrumentom koji daje tačnu vrednost otpora u omima. Ova vrednost mora biti ispod propisane granice da bi se uzemljenje smatralo ispravnim. Merenje otpora uzemljenja je i deo standardnog postupka pri izdavanju atesta, i preporučuje se svakih nekoliko godina, čak i kad sumnje nema, jer se otpor uzemljivača vremenom menja usled korozije ili promene vlažnosti zemljišta oko njega."),
      h2("Šta ako pregled pokaže da nemate uzemljenje"),
      pLink(
        "Kod starijih zgrada u Nišu, posebno onih građenih pre osamdesetih godina, nedostatak uzemljenja je čest nalaz, ne izuzetak. Rešenje je izrada novog sistema uzemljenja, što obuhvata postavljanje uzemljivača u zemlju ili temelj objekta i povezivanje sa razvodnim ormanom i svim uzemljenim tačkama u stanu. Ovo je posao koji radimo u sklopu naših ",
        "elektroinstalacionih usluga",
        "/usluge/elektroinstalacije",
        ", i ne mora nužno da se radi zajedno sa kompletnom zamenom instalacije, može i kao samostalan zahvat na postojećoj instalaciji.",
      ),
      h2("Kada vam treba zvaničan atest"),
      p("Atest, odnosno izveštaj o ispitivanju električne instalacije koji izdaje ovlašćeno lice, nije isto što i sopstvena provera test utikačem. To je zvanična dokumentacija sa merenjima koja se u nekoliko situacija praktično traži:"),
      ...bullets([
        "Kod novogradnje i tehničkog prijema objekta, gde je atest obavezan deo dokumentacije pre useljenja",
        "Kod prodaje ili kupovine nekretnine, kao dodatna sigurnost i argument u pregovorima o ceni",
        "Kod prijave štete osiguranju, posebno ako je šteta nastala usled požara ili kvara povezanog sa instalacijom, jer polisa može zahtevati dokaz da je instalacija bila u ispravnom stanju",
        "Posle veće rekonstrukcije koja je zahvatila razvodni orman ili deo instalacije",
        "Kad kupujete stan star nekoliko decenija i želite jasnu sliku stanja pre nego što se doselite",
      ]),
      p("U praksi, atest je jeftina investicija u odnosu na ono što potvrđuje ili otkriva. Ako je sve u redu, imate papir koji to dokazuje kad god zatreba. Ako nešto nije u redu, saznajete to na vreme, ne posle nesreće ili odbijene isplate štete."),
      h2("Uzemljenje nije nešto što se „vidi” dok radi"),
      p("Za razliku od pregorele sijalice ili osigurača koji ispadne, uzemljenje ne daje nikakav vidljiv znak da postoji ili da radi ispravno, sve dok se ne desi kvar, a tad je već kasno da se pita. Zato je provera nešto što vredi uraditi unapred, posebno u starijem stanu čije poreklo instalacije ne poznajete pouzdano, umesto da se saznanje odloži do trenutka kad ga zaista zatreba."),
    ],
    faq: [
      { question: "Da li svaka utičnica sa uzemljenim izgledom stvarno ima uzemljenje?", answer: "Ne nužno. Oblik utičnice pokazuje da je predviđena za uzemljenje, ali ne garantuje da je provodnik iza zida stvarno povezan i ispravan. Za sigurnu potvrdu potreban je test utikač ili, još pouzdanije, stručno merenje." },
      { question: "Koliko košta izrada uzemljenja za stan koji ga nema?", answer: "Zavisi od tipa terena i dužine potrebnog uzemljivača, okvirno od 18.000 do 35.000 dinara. Tačna cena se određuje nakon pregleda na licu mesta." },
      { question: "Da li mi treba uzemljenje ako imam FID sklopku?", answer: "Da. FID sklopka i uzemljenje rade najbolje zajedno, ne zamenjuju jedno drugo. FID bez uzemljenja i dalje pruža određenu zaštitu, ali sporiju i manje pouzdanu nego kombinacija oba." },
      { question: "Koliko često treba meriti otpor uzemljenja?", answer: "Preporuka je merenje na svakih nekoliko godina, i obavezno posle bilo kakvih radova u blizini uzemljivača ili ako postoji sumnja da je oštećen, na primer posle iskopa u dvorištu." },
      { question: "Da li stariji dvožični sistem bez uzemljenja znači da je stan nebezbedan za život?", answer: "Ne automatski, ali znači povećan rizik u odnosu na uzemljenu instalaciju, posebno u kupatilu i kuhinji gde je kontakt sa vodom i metalnim površinama čest. Preporučujemo da se ovo sanira, ne da se ignoriše samo zato što dosad nije bilo problema." },
    ],
  },
  {
    slug: "led-rasveta-vs-obicne-sijalice-usteda-struje",
    title: "LED rasveta vs. obične sijalice: uštedite na struji u Nišu",
    category: "saveti",
    excerpt:
      "Razlika u ceni sijalice na polici je mala stavka u odnosu na ono što se potroši i zameni tokom narednih pet godina. Evo orijentacionog poređenja i šta uzeti u obzir pri izboru LED rasvete za dom.",
    summary:
      "LED sijalica troši i do osam do deset puta manje struje od klasične sijalice sa vlaknom, uz životni vek koji je desetine puta duži. Na primeru tipične sijalice korišćene nekoliko sati dnevno tokom pet godina, razlika u potrošnji i broju zamena je značajna, mada su tačni iznosi orijentacioni jer zavise od cene struje i navika korišćenja. Uz štednju, LED rasveta otvara i opcije koje klasične sijalice nisu imale, panele, trake, dimovanje i biranje tona svetlosti prema nameni prostorije.",
    keyTakeaways: [
      "LED sijalica troši orijentaciono osam do deset puta manje struje od klasične sijalice iste svetlosti",
      "Životni vek LED sijalice je petnaest do dvadeset pet puta duži od klasične, što znači znatno manje zamena tokom pet godina",
      "Dimabilna LED sijalica mora biti izričito označena kao takva i uparena sa odgovarajućim dimerom",
      "Toplo belo (2700-3000K) odgovara dnevnim i spavaćim sobama, hladno belo (4000K i više) radnim prostorijama i garažama",
      "LED trake i paneli otvaraju opcije osvetljenja koje klasične sijalice fizički nisu mogle da ponude",
    ],
    publishedAt: "2026-08-20T09:00:00.000Z",
    coverImageUrl: "/images/blog/led-rasveta-vs-obicne-sijalice-usteda-struje.webp",
    body: [
      p("Pitanje „da li se LED rasveta zaista isplati” dobijam često, obično od klijenata koji gledaju cenu na polici i vide da je LED sijalica skuplja od klasične na prvi pogled. Odgovor postaje jasan tek kad se sagleda perioda od nekoliko godina, ne cena jedne sijalice u jednom trenutku. U nastavku je orijentaciono poređenje i praktični saveti za izbor LED rasvete u domu."),
      h2("Zašto LED troši manje: osnovna razlika"),
      p("Klasična sijalica sa vlaknom proizvodi svetlost tako što greje tanku metalnu nit dok ne usija, a najveći deo utrošene energije odlazi u toplotu, ne u svetlost. Halogena sijalica radi na istom principu, uz nešto bolju efikasnost. LED dioda proizvodi svetlost direktno, gotovo bez gubitka na grejanje, zbog čega za istu količinu svetlosti (izraženu u lumenima) troši znatno manje električne energije (izraženu u vatima)."),
      p("U praksi, LED sijalica od osam do devet vati daje otprilike istu količinu svetlosti kao klasična sijalica od šezdeset vati. To je razlika od gotovo sedam puta u potrošnji za isti efekat u prostoriji."),
      h2("Poređenje troška na pet godina (orijentaciono)"),
      p("Sledeći primer je ilustrativan, sa okvirnim brojevima, jer tačna ušteda zavisi od cene struje u vašem tarifnom modelu i od toga koliko sati dnevno sijalica zaista radi. Uzmimo sijalicu koja radi u proseku četiri sata dnevno, što je realno za rasvetu u dnevnoj sobi ili kuhinji, tokom pet godina."),
      ...bullets([
        "Klasična sijalica od 60W: pri četiri sata dnevno kroz pet godina, to je otprilike 438 kWh potrošnje, uz sedam do osam zamena sijalice jer prosečan vek klasične sijalice je oko hiljadu sati rada",
        "LED sijalica od 9W ekvivalentne svetlosti: ista potrošnja vremena daje otprilike 66 kWh, uz jednu, možda nijednu zamenu, jer deklarisan vek LED sijalice je često petnaest do dvadeset pet hiljada sati",
      ]),
      p("Razlika u potrošenim kilovat-satima je otprilike 370 kWh tokom pet godina za jednu sijalicu. Kad se to pomnoži orijentacionom cenom struje i doda ušteda na broju kupljenih sijalica, razlika u ukupnom trošku vlasništva je značajna, čak i ako je sama LED sijalica na početku bila nekoliko puta skuplja od klasične. Za stan sa desetak tačaka rasvete koje se redovno koriste, ušteda tokom pet godina lako pokrije i premaši početnu razliku u ceni, plus vreme koje ne trošite na menjanje pregorelih sijalica. Ove brojke tretirajte kao orijentacione, tačan iznos zavisi od vaše tarife i navika korišćenja."),
      h2("LED paneli i trake: opcije koje klasična rasveta nije imala"),
      p("LED tehnologija nije ograničena na oblik klasične sijalice u grlu. LED panel, tanka pravougaona ili okrugla ploča ugrađena u spušten plafon, daje ravnomerno, difuzno osvetljenje bez oštrih senki, pogodno za kuhinje, kupatila i radne prostorije. LED traka omogućava indirektno osvetljenje, na primer iznad kuhinjskih elemenata, ispod stepenica ili u niši spuštenog plafona, i zahteva odgovarajući transformator dimenzionisan prema dužini trake i broju dioda po metru, da bi radila stabilno i bez treperenja."),
      pLink(
        "Ako planirate rasvetu za celu prostoriju ili kombinaciju panela, traka i spot rasvete, rado predložimo raspored pre nego što se bilo šta kupi, u sklopu naše usluge ",
        "ugradnje rasvete",
        "/usluge/rasveta",
        ".",
      ),
      h2("Dimabilne LED sijalice: na šta obratiti pažnju"),
      p("Ne može se svaka LED sijalica jednostavno staviti na postojeći dimer i očekivati da radi ispravno. Dimer projektovan za klasične sijalice sa vlaknom radi na principu koji nije uvek kompatibilan sa elektronikom unutar LED sijalice, što se u praksi ispoljava kao treperenje, zujanje ili sijalica koja se ne gasi do kraja nego samo zatamni. Rešenje je dvostruko: kupiti sijalicu izričito označenu kao „dimabilna” (dimmable), i uz nju dimer koji proizvođač deklariše kao kompatibilan sa LED opterećenjem. Ako imate stariji dimer iz perioda kad je kuća opremana klasičnim sijalicama, vredi proveriti kompatibilnost pre kupovine LED sijalica, ili unapred planirati zamenu dimera kao deo istog posla."),
      h2("Boja svetlosti: toplo belo, neutralno i hladno belo"),
      p("Boja svetlosti se izražava u stepenima Kelvina (K), i za razliku od naziva, ne opisuje temperaturu sijalice, nego ton svetlosti koji proizvodi. Niža vrednost daje topliju, žućkastu svetlost, viša vrednost daje hladniju, plavičastu svetlost. Praktičan vodič za biranje po prostoriji:"),
      ...bullets([
        "2700 do 3000K, toplo belo: dnevna soba, spavaća soba, trpezarija, prostori gde se želi opušten, prijatniji ambijent uveče",
        "3500 do 4000K, neutralno belo: kuhinja, kupatilo, radna soba, prostori gde je bitna jasnoća bez previše „hladnog” utiska",
        "5000 do 6500K, hladno belo: garaža, radionica, ostava, spoljašnja rasveta gde je prioritet maksimalna vidljivost, ne ugodnost boravka",
      ]),
      p("Česta greška je kupovina sijalica različitog tona za istu prostoriju u različitim trenucima, na primer jedna toplo bela i jedna neutralna u istom plafonjeru, što se odmah primeti golim okom kao neujednačeno osvetljenje. Vredi zapisati ili zapamtiti oznaku Kelvina sa kutije prve kupljene sijalice za svaku prostoriju, radi lakšeg usklađivanja pri budućim dopunama ili zamenama."),
      h2("Praktičan savet pri kupovini"),
      p("Pri izboru LED sijalice, gledajte deklarisane lumene, ne vate, jer lumeni pokazuju stvarnu količinu svetlosti, dok su vati kod LED tehnologije mnogo manje pouzdan pokazatelj jačine nego što su bili kod klasičnih sijalica. Takođe je korisno proveriti indeks reprodukcije boje (CRI), gde viša vrednost, blizu 90 ili više, znači vernije prikazivanje boja predmeta u prostoriji, što je posebno bitno u kuhinji i kupatilu gde se boje hrane i lica menjaju pod lošom rasvetom."),
    ],
    faq: [
      { question: "Da li LED sijalice zaista traju toliko dugo koliko piše na kutiji?", answer: "Deklarisani vek je laboratorijska procena pod standardnim uslovima, pa se u praksi može malo razlikovati, ali LED sijalice od poznatih proizvođača u velikoj većini slučajeva zaista traju znatno duže od klasičnih, po pravilu deset i više godina uobičajene upotrebe." },
      { question: "Zašto mi LED sijalica treperi na starom dimeru?", answer: "Najčešće zato što dimer nije projektovan za LED opterećenje. Rešenje je zamena dimera modelom koji proizvođač deklariše kao kompatibilan sa LED sijalicama, uz sijalicu koja je takođe označena kao dimabilna." },
      { question: "Koju boju svetlosti da izaberem ako nisam siguran?", answer: "Za većinu stambenih prostorija, osim radnih površina, neutralno do toplo belo (3000 do 3500K) je siguran, univerzalan izbor koji ne deluje ni previše žuto ni previše hladno." },
      { question: "Da li LED rasveta zahteva poseban transformator?", answer: "LED trake i pojedini niskonaponski sistemi zahtevaju transformator, dimenzionisan prema ukupnoj snazi priključenih dioda. Standardne LED sijalice sa običnim grlom rade direktno na mrežni napon i ne zahtevaju dodatnu opremu." },
      { question: "Da li se isplati odjednom zameniti sve sijalice u stanu za LED?", answer: "U većini slučajeva da, jer se ušteda i smanjen broj zamena akumuliraju od prvog dana, a ne morate da čekate da klasične sijalice pregore jedna po jedna. Ako je budžet ograničen, ima smisla početi od tačaka koje najduže rade dnevno, jer tu je ušteda najbrža." },
    ],
  },
  {
    slug: "raspored-uticnica-i-prekidaca-pri-renoviranju",
    title: "Raspored utičnica i prekidača pri renoviranju: visine, broj po prostoriji i namenski krugovi",
    category: "renoviranje",
    excerpt:
      "Konkretni brojevi koje treba odlučiti pre nego što dođu moler i keramičar: na kojoj visini idu prekidači i utičnice, koliko ih treba po prostoriji, i šta mora da ima svoj strujni krug.",
    summary:
      "Pre nego što se zidovi zatvore, treba doneti tri grupe odluka: visine prekidača i utičnica, broj tačaka po prostoriji prema stvarnom rasporedu nameštaja, i koje trošila dobijaju sopstveni strujni krug. Klima, šporet, bojler, veš i sudo mašina i kuhinjske utičnice traže namenske linije, a ako u tabli nema mesta za njihove osigurače, tabla se menja tokom renoviranja, ne posle.",
    keyTakeaways: [
      "Prekidači idu na 90 do 110 cm od gotovog poda, opšte utičnice na 30 cm, a kuhinjske iznad radne ploče na 110 do 115 cm",
      "Dnevna soba realno traži osam do deset utičnica, spavaća šest, a kuhinja šest do osam iznad radne ploče plus namenske",
      "Klima, šporet, bojler, veš mašina i sudo mašina moraju imati svoj strujni krug i svoj osigurač",
      "Za klimu se linija povlači do mesta unutrašnje jedinice pre nego što se zid zatvori, i to je stavka koja se najčešće zaboravi",
      "Ako u tabli nema slobodnih mesta za nove osigurače ili nema FID sklopke, tabla se menja tokom renoviranja dok su zidovi otvoreni",
    ],
    publishedAt: "2026-08-18T09:00:00.000Z",
    coverImageUrl: "/images/blog/raspored-uticnica-i-prekidaca-pri-renoviranju.webp",
    body: [
      p("Kada renoviranje krene, elektro deo se rešava u uskom prozoru: posle rušenja i štemovanja, a pre nego što keramičar počne da lepi pločice i moler da gletuje. Sve što se u tom prozoru ne odluči, kasnije se rešava produžnim kablom ili ponovnim otvaranjem gotovog zida."),
      pLink(
        "O tome kada zvati električara i kojim redom ide posao u odnosu na druge izvođače pisali smo posebno, u tekstu ",
        "kako pripremiti instalaciju stana pre nego što počne renoviranje",
        "/blog/priprema-instalacije-za-renoviranje",
        ". Ovaj tekst je nastavak na to i bavi se konkretnim brojevima: koliko tačaka, na kojoj visini i sa kakvim krugom.",
      ),
      h2("Visine: brojevi koji se u praksi koriste"),
      p("Visine se uvek mere od gotovog poda, ne od estriha. Ovo je važno reći na vreme, jer razlika između estriha i gotovog poda sa podlogom i parketom ume da bude i pet centimetara, a utičnica postavljena po estrihu na kraju ispadne preblizu podu."),
      ...bullets([
        "Prekidači: 90 do 110 cm od gotovog poda. Najčešće se radi oko 105 cm, u visini kvake, jer se tako prekidač i kvaka vizuelno poravnaju",
        "Opšte utičnice u sobama: 30 cm od gotovog poda, dovoljno visoko da ne smetaju sokli, a dovoljno nisko da se ne vide iza nameštaja",
        "Utičnice iznad kuhinjske radne ploče: 110 do 115 cm, što je oko 20 do 25 cm iznad radne ploče na standardnih 90 cm",
        "Utičnice iza televizora na zidu: 110 do 130 cm, tačna visina se određuje prema veličini i poziciji nosača, da bi kablovi ostali skriveni",
        "Utičnice pored kreveta: 60 do 70 cm, dakle iznad noćnog ormarića a ne iza njega",
        "Utičnice za mašine u kuhinji i kupatilu: 30 cm, ali pomerene bočno od uređaja, da se utikač može izvući bez izvlačenja mašine",
      ]),
      p("U kupatilu postoji dodatno pravilo koje nije stvar udobnosti nego bezbednosti: utičnice se ne postavljaju u zoni oko kade i tuš kabine. Praktično to znači najmanje 60 cm bočno od ivice kade ili tuša, a nikako direktno iznad njih. Prekidač za svetlo u kupatilu se u novijim stanovima najčešće postavlja izvan prostorije, pored vrata u hodniku."),
      h2("Koliko tačaka po prostoriji"),
      p("Brojevi ispod su ono što u praksi ispadne dovoljno da se posle useljenja ne koriste produžni kablovi. Zvuče kao previše dok se gleda prazan zid, ali gotovo niko se posle renoviranja nije žalio da ima previše utičnica."),
      ...bullets([
        "Dnevna soba: osam do deset. Zona televizora traži tri do četiri same za sebe, plus tačke za lampe, punjače i usisivač",
        "Spavaća soba: šest. Po dve sa svake strane kreveta i dve slobodne za usisivač, peglu ili radni sto",
        "Kuhinja: šest do osam iznad radne ploče, plus posebne tačke iza ugradnih uređaja, koje se ne računaju u tih šest do osam",
        "Kupatilo: jedna do dve van zone oko kade, najčešće pored ogledala za fen i brijač",
        "Hodnik i predsoblje: jedna do dve, jedna od njih blizu vrata za usisivač",
        "Radni prostor: minimum četiri po radnom mestu, jer računar, monitor, punjači i lampa popune četiri utičnice bez ikakvog truda",
      ]),
      p("Raspored se određuje prema stvarnom planu nameštaja, ne prema pravilu jedna po zidu. Najčešća greška je utičnica postavljena tačno tamo gde će stajati orman, i prazan zid tamo gde će stajati sto."),
      h2("Namenski strujni krugovi: šta mora imati svoj osigurač"),
      p("Ovo je deo koji klijenti najčešće ne znaju, a najviše utiče na to da li će instalacija biti bezbedna i da li će osigurač ispadati. Namenski krug znači sopstvenu liniju od table do trošila i sopstveni osigurač, umesto da uređaj deli krug sa utičnicama u sobi."),
      ...bullets([
        "Šporet ili ugradna ploča: sopstvena linija, najčešće trofazna, presek 5x2.5 mm2",
        "Bojler: sopstvena linija 3x2.5 mm2 sa osiguračem 16 A",
        "Veš mašina: sopstvena linija 3x2.5 mm2, 16 A",
        "Sudo mašina: sopstvena linija 3x2.5 mm2, 16 A",
        "Kuhinjske utičnice iznad radne ploče: poseban krug, odvojen od opštih utičnica u ostatku stana",
        "Svaka klima: sopstvena linija 3x2.5 mm2 sa svojim osiguračem, po jedinici",
        "Rasveta: odvojena od utičnica, 3x1.5 mm2 sa osiguračem 10 A",
      ]),
      p("Razlog za odvajanje nije samo opterećenje nego i to što kvar na jednom uređaju tada isključi samo njegov osigurač. Kada veš mašina, bojler i pola stana vise na istom krugu, ispad osigurača ostavi bez struje prostorije koje sa kvarom nemaju veze, a nalaženje uzroka traje znatno duže."),
      h2("Klima: linija koja se najčešće zaboravi"),
      p("Ovo izdvajam posebno jer je najčešći propust koji zatičem posle renoviranja. Klima se obično kupuje i montira posle useljenja, mesecima nakon što su zidovi zatvoreni, pa se pri renoviranju na nju niko ne seti. Rezultat je da se linija za klimu vodi naknadno, po gotovom zidu, u kanalici ili uz štemovanje i ponovno krečenje."),
      p("Ako i najmanje razmišljate o klimi, čak i ako je kupovina za sledeće leto, povucite liniju do mesta gde će stajati unutrašnja jedinica dok je zid otvoren. Trošak je u tom trenutku mali, a kasnije je to poseban posao sa molerskom doradom."),
      p("Isto važi i za punjač za električni automobil kod kuća i garaža. Ako postoji šansa da će za par godina zatrebati, priprema linije do garaže tokom renoviranja košta neuporedivo manje od naknadnog provlačenja."),
      h2("Kada tablu treba menjati"),
      p("Svaki namenski krug traži svoje mesto u tabli. Zbog toga se pitanje table i postavlja tek kada se izbroje krugovi, a ne na početku. Tabla se menja u sledećim situacijama."),
      ...bullets([
        "Nema dovoljno slobodnih mesta za nove osigurače koje traži planirani broj krugova",
        "U tabli su i dalje keramički osigurači sa topljivim uloškom, umesto automatskih",
        "Nema FID sklopke, koja je danas obavezna i predstavlja osnovnu zaštitu od strujnog udara",
        "Instalacija je aluminijumska i menja se u celosti, pa se tabla menja zajedno sa njom",
        "Tabla je u lošem stanju, sa tragovima pregrevanja, zagorelim mestima ili improvizovanim vezama",
      ]),
      pLink(
        "Ako niste sigurni da li vaša tabla ima FID sklopku i šta ona tačno radi, objasnili smo to u tekstu ",
        "šta je FID sklopka i zašto je obavezna",
        "/blog/sta-je-fid-sklopka-i-zasto-je-obavezna",
        ".",
      ),
      p("Menjanje table tokom renoviranja je znatno jednostavnije nego kasnije, jer su zidovi otvoreni, a i prekid napajanja pada u period kada se u stanu ionako ne živi."),
      h2("Kontrolna lista pre nego što dođu moler i keramičar"),
      p("Ovo je lista koju prolazim sa klijentom na licu mesta, prostoriju po prostoriju, pre nego što se bilo šta zatvori."),
      ...bullets([
        "Nacrtan raspored nameštaja po prostorijama, makar grubo, jer bez njega nema razumnog rasporeda tačaka",
        "Određena visina gotovog poda u svakoj prostoriji, da bi se visine merile tačno",
        "Prebrojane utičnice po prostoriji i označene pozicije na zidu, ne samo dogovorene usmeno",
        "Odlučeno gde ide klima, sada ili u budućnosti, i povučena linija do te tačke",
        "Popisani svi veliki potrošači i za svaki određen namenski krug: šporet, bojler, veš i sudo mašina",
        "Prebrojani krugovi i provereno da li tabla ima dovoljno mesta i FID sklopku",
        "Odlučeno da li se ostavljaju prazne rezervne cevi za buduće linije",
        "Usklađen termin sa vodoinstalaterom, posebno u kupatilu i kuhinji gde se trase ukrštaju",
      ]),
      p("Prolazak kroz ovu listu traje pola sata na licu mesta i uštedi znatno više od toga. Sve stavke sa nje se rešavaju jeftino dok je zid otvoren, a svaka od njih posle zatvaranja zida postaje poseban posao sa štemovanjem, gletovanjem i krečenjem."),
      pLink(
        "Ako planirate i kompletnu zamenu instalacije, okvirne cene po kvadraturi za Niš dali smo u tekstu ",
        "koliko košta zamena elektro instalacije u stanu u Nišu",
        "/blog/koliko-kosta-zamena-elektro-instalacije-u-stanu-u-nisu",
        ".",
      ),
    ],
    faq: [
      { question: "Na kojoj visini se postavljaju prekidači i utičnice?", answer: "Prekidači na 90 do 110 cm od gotovog poda, najčešće oko 105 cm u visini kvake. Opšte utičnice na 30 cm, kuhinjske iznad radne ploče na 110 do 115 cm, a one pored kreveta na 60 do 70 cm. Sve visine se mere od gotovog poda, ne od estriha." },
      { question: "Koliko utičnica treba po prostoriji?", answer: "Dnevna soba realno traži osam do deset, spavaća šest, kuhinja šest do osam iznad radne ploče plus posebne tačke iza ugradnih uređaja, kupatilo jednu do dve van zone oko kade, a radno mesto najmanje četiri. Raspored se određuje prema stvarnom planu nameštaja, ne po pravilu jedna po zidu." },
      { question: "Šta mora da ima svoj strujni krug?", answer: "Šporet ili ugradna ploča, bojler, veš mašina, sudo mašina, svaka klima pojedinačno, kuhinjske utičnice iznad radne ploče i rasveta. Odvajanje nije samo pitanje opterećenja nego i toga da kvar na jednom uređaju isključi samo njegov osigurač." },
      { question: "Treba li povlačiti liniju za klimu ako je još nisam kupio?", answer: "Treba, i to je najčešći propust koji zatičem posle renoviranja. Dok je zid otvoren, linija do mesta unutrašnje jedinice košta malo, a naknadno vođenje po gotovom zidu znači kanalicu ili štemovanje sa molerskom doradom." },
      { question: "Kada je potrebno menjati elektro tablu?", answer: "Kada nema dovoljno slobodnih mesta za osigurače novih krugova, kada su u tabli još uvek keramički osigurači, kada nema FID sklopke, kada se menja aluminijumska instalacija u celosti, ili kada tabla ima tragove pregrevanja. Menja se tokom renoviranja dok su zidovi otvoreni." },
      { question: "Koji presek kabla ide za koji krug?", answer: "Za rasvetu 3x1.5 mm2 sa osiguračem 10 A, za utičnice i pojedinačne uređaje poput bojlera, veš i sudo mašine i klime 3x2.5 mm2 sa osiguračem 16 A, a za šporet najčešće trofazna linija preseka 5x2.5 mm2." },
    ],
  },
];
