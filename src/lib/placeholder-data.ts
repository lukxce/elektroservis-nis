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
  // Približne koordinate centra Niša: zameniti tačnom geo-lokacijom adrese firme.
  geo: { lat: 43.3209, lng: 21.8958 },
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
      p("U Elektro Servis Nišu se trudimo da svaka nova instalacija bude usklađena sa planiranom namenom prostora i važećim propisima, od rasporeda tačaka do zaštitnih sklopki u razvodnoj tabli. Radimo i na adaptaciji starijih instalacija i proširenju postojećih sistema, uz nastojanje da radovi teku prema dogovorenoj dinamici i uz što manje ometanje svakodnevice ukućana."),
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
      p("U Elektro Servis Nišu radimo ugradnju plafonjera, lustera, LED spot rasvete, LED traka, zidnih svetiljki i spoljašnje rasvete sa senzorima pokreta. Pre bušenja u spuštene plafone i gips-karton proveravamo raspored nosećih profila, a transformatore biramo prema ukupnoj snazi priključenih svetiljki."),
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
      p("U Elektro Servis Nišu procenjujemo da li postojeća tabla ima kapacitet za dopunu zaštitnom sklopkom ili je potrebna kompletna zamena modularnom tablom. Zamena obuhvata raspoređivanje osigurača po strujnim krugovima uz jasno obeležavanje, a obim ugrađene zaštite usklađujemo sa propisima i stanjem instalacije."),
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
      p("U Elektro Servis Nišu radimo zamenu pojedinačnih utičnica i prekidača, kao i veće pakete prilikom renoviranja celog stana. Za vlažne prostore ugrađujemo utičnice odgovarajuće zaštite u skladu sa propisima, a za uređaje veće snage predlažemo posebnu liniju sa sopstvenim osiguračem umesto priključenja na već opterećen krug."),
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
      p("U Elektro Servis Nišu radimo dijagnostiku i popravku bojlera, električnih šporeta, veš mašina i TA peći svih vodećih proizvođača. Redovno čišćenje kamenca kod bojlera preporučujemo pre nego što se pojavi ozbiljniji kvar, a kod starijih uređaja klijenta unapred obaveštavamo o okvirnoj ceni popravke kako bi mogao da proceni da li je popravka isplativa u odnosu na zamenu uređaja."),
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
      p("U Elektro Servis Nišu pre montaže proveravamo kapacitet razvodne table i priključnu snagu objekta, a poziciju spoljne i unutrašnje jedinice biramo tako da bude dostupna za budući servis i da buka ne smeta susednim prostorima. Klima uređaj po pravilu dobija sopstvenu strujnu liniju sa odgovarajućim osiguračem do razvodnog ormana."),
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
      p("U Elektro Servis Nišu pre ugradnje proveravamo priključnu snagu objekta i opterećenost postojeće instalacije, a punjaču obezbeđujemo posebnu liniju odgovarajućeg preseka sa sopstvenim osiguračem. Ako postojeći priključak nije dovoljan, predlažemo realne opcije, od punjenja manjom snagom do razgovora sa distributerom o povećanju priključne snage, pre nego što se pristupi kupovini punjača."),
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
];
