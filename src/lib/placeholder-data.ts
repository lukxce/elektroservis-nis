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
    shortDescription: "Dodavanje novog strujnog kruga na postojeći razvodni orman radi rasterećenja ili dodatnih trošila.",
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
    title: "Ugradnja utičnice za jaka trošila (šporet, bojler)",
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
    body: [
      p("Kad me neko iz Niša pozove da uradim novu instalaciju — bilo da je u pitanju stan u novogradnji na Medijani, kuća u Niškoj Banji ili poslovni prostor na Bulevaru Nemanjića — prva stvar koju uvek pitam nije koliko utičnica žele, nego kako planiraju da koriste taj prostor. Instalacija koja se radi za dvadeset ili trideset godina unapred mora da prati navike ukućana, ne samo trenutne standarde."),
      h2("Kako pristupam novoj instalaciji"),
      p("Pre nego što povučem prvi metar kabla, sedim sa investitorom i prolazim kroz svaku prostoriju posebno. Gde stoji krevet, gde će biti televizor, da li planiraju radni sto uz prozor, da li kuhinja ima ostrvo. Ova faza traje kratko, ali štedi mnogo vremena i para kasnije, jer je mnogo jeftinije pomeriti tačku na papiru nego posle useljenja dovlačiti novu liniju kroz gotov zid."),
      p("Nakon toga radim raspored strujnih krugova. Rasveta i utičnice se po pravilu razdvajaju na zasebne krugove, kuhinja i kupatilo dobijaju svoje posebne linije zbog jačih trošila i vlage, a šporet, bojler i eventualna klima uvek imaju sopstveni vod direktno do razvodnog ormana. Ovo je deo posla koji investitori retko vide, ali je suštinski za bezbednost i udobnost korišćenja."),
      h2("Materijal koji koristim i zašto je to bitno"),
      p("Za sve nove instalacije koristim isključivo bakarne provodnike odgovarajućeg preseka, nikad aluminijumske, bez obzira na to što su nešto jeftiniji. Aluminijum vremenom oksidira na spojevima, kontakt slabi, mesto se zagreva, i to je jedan od najčešćih uzroka starih kvarova na koje nailazim kod instalacija iz osamdesetih i devedesetih godina. Kvalitetan materijal čini razliku između instalacije koja radi bez problema decenijama i one koja počne da pravi probleme posle pet godina."),
      h2("Zaštita kao sastavni deo montaže, ne dodatak"),
      p("Svaka nova instalacija koju radim dobija diferencijalnu (FID) zaštitnu sklopku, po mogućstvu odvojenu za svaki veći strujni krug, i odvodnik prenapona u tablu. Ovo nisu stavke koje predlažem kao opciju da bih naplatio više, nego zakonska obaveza i stvar koja doslovno štiti nekog od strujnog udara. Bez FID zaštite, kvar u izolaciji bilo kog uređaja može da bude opasan po život."),
      h2("Tehnički prijem i dokumentacija"),
      p("Na kraju svake veće montaže radim merenja otpora izolacije i otpora uzemljenja i predajem investitoru zapisnik sa izmerenim vrednostima. Taj papir će vam zatrebati i ako budete kasnije prodavali nekretninu ili sklapali osiguranje. Ovo je korak koji mnogi preskaču, ali je bitan jer dokazuje da je instalacija izvedena po pravilima struke."),
      h2("Česti problemi u starijim niškim zgradama"),
      p("U stanovima na teritoriji Niša, posebno u zgradama iz sedamdesetih i osamdesetih na Medijani, Paliluli i Crvenom Krstu, redovno nalazim aluminijumske provodnike koji su odavno prešli svoj projektovani vek. Kontakti na spojevima su oslabljeni, izolacija krta, a table često još uvek porcelanske, bez ijedne zaštitne sklopke. Renoviranje u ovakvim stanovima je idealna prilika za kompletnu zamenu instalacije, jer se zidovi svakako otvaraju za druge radove, pa je dodatni trošak elektro dela relativno manji nego kad bi se radio kao samostalna intervencija."),
      h2("Koliko košta nova instalacija u Nišu"),
      p("Cena nove elektro instalacije za stan kreće od 1.900 do 2.600 dinara po kvadratnom metru, a za kuću od 2.100 do 2.900 dinara. Razvođenje instalacije za jednu prostoriju je od 8.000 do 15.000 dinara. U cenu je uključen sav materijal, rad, merenja i zapisnik po završetku. Za tačnu ponudu prilagođenu vašem prostoru pozovite nas — izlazak i procena su besplatni na teritoriji Niša i okolnih naselja."),
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
    body: [
      p("Ugradnja rasvete u Nišu je jedan od najčešćih poziva koje dobijam. Bilo da je u pitanju novi stan u novogradnji na Medijani gde vlasnik želi modernu spot rasvetu, ili starija kuća u Niškoj Banji gde treba zameniti dotrajale plafonjere i dodati spoljašnje osvetljenje, rasveta je deo posla gde greška najbrže postane vidljiva. Loše centrirana spot rasveta ili luster koji visi krivo primetiće svako ko uđe u prostoriju, i zato svakoj ugradnji pristupam isto pažljivo, bez obzira na obim posla."),
      h2("Tipovi rasvete koje ugrađujem"),
      p("Radim sve vrste unutrašnje i spoljašnje rasvete: klasične plafonjere i lustere, ugradnu LED spot rasvetu u gips-karton i spuštene plafone, LED trake sa transformatorima i dimer regulacijom, zidne svetiljke i kompletnu spoljašnju rasvetu sa senzorima pokreta. Za svaki tip svetiljke postoji pravi način montaže i povezivanja, i razlika između uredno i loše urađene rasvete nije samo u izgledu nego i u trajnosti i bezbednosti."),
      h2("LED spot rasveta za spuštene plafone"),
      p("Ugradnja spot rasvete u spušten plafon ili gips-karton zahteva preciznost. Pre bušenja uvek proverim raspored nosećih profila da ne bih oštetio konstrukciju plafona i izazvao naknadno krpljenje. Rastojanje između spotova planiram tako da rasveta bude ravnomerna, bez tamnih uglova, a transformator biram prema ukupnoj snazi svih svetiljki na jednoj liniji. Slab transformator je najčešći uzrok treperenja LED rasvete, problem koji redovno rešavam kod Nišlija koje su pokušale samostalnu ugradnju."),
      h2("Spoljašnja i senzorska rasveta"),
      p("Za spoljašnju rasvetu oko kuća u Nišu i okolini ugrađujem svetiljke odgovarajuće IP zaštite, otporne na kišu, vlagu i temperaturne promene. Senzori pokreta su praktičan dodatak za dvorišta, prilaze i garaže. Podešavam osetljivost i trajanje tako da se svetlo pali samo kad je potrebno, bez lažnih aktivacija od prolaznika ili kućnih ljubimaca. Za stepenišnu rasvetu u stambenim zgradama koristim tajmere koji drže svetlo upaljeno dovoljno dugo da se popnu spratovi, a onda se automatski gase."),
      h2("Najčešći problemi sa rasvetom na koje nailazim"),
      p("Najčešći poziv koji dobijam za rasvetu u Nišu nije nova ugradnja, nego popravka postojeće. Treperenje LED trake obično znači slab ili nekompatibilan transformator, a zagrevanje oko starih sijaličnih grla je znak da je vreme za zamenu celom svetiljkom, ne samo sijalicom. U starijim niškim stanovima često nalazim rasvetu vezanu na isti strujni krug sa utičnicama, pa svetlo treperi kad se uključi veš mašina ili mikrotalasna — rešenje je razdvajanje na zasebne krugove."),
      h2("Koliko košta ugradnja rasvete u Nišu"),
      p("Cena zavisi od tipa svetiljke i složenosti montaže. Montaža jedne plafonjere ili lustera kreće od 1.500 dinara, ugradnja LED spotova od 900 dinara po komadu za veće narudžbine, a LED traka sa transformatorom od 2.500 dinara po dužnom metru. Za kompletnu rasvetu stana ili kuće nudim besplatan predlog rasporeda svetiljki pre kupovine, jer dobar plan štedi i novac i vreme. Pozovite za besplatnu konsultaciju, dolazim na adresu u Nišu i okolini."),
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
    body: [
      p("Razvodna tabla je srce svake električne instalacije, i deo prostora gde najmanje treba štedeti. U svom radu po Nišu, od stanova na Medijani do kuća u Paliluli i Niškoj Banji, najčešći nedostatak koji pronalazim je stara porcelanska tabla bez zaštitne sklopke — problem koji postoji u većini objekata starijih od dvadeset godina."),
      h2("Kada razvodna tabla zahteva zamenu"),
      p("Ako tabla ima dovoljno mesta za dodatni modul, često je dovoljno samo dodati zaštitnu sklopku ili osigurač za novi strujni krug. Međutim, ako je porcelanska, bez mesta za proširenje, ili vidno oštećena, preporučujem kompletnu zamenu modularnom tablom. Ovo je investicija koja se retko ponavlja i direktno utiče na bezbednost cele instalacije. Kod novogradnji u Nišu table su po pravilu modularne, ali kod starije gradnje situacija je često zabrinjavajuća."),
      h2("FID zaštitna sklopka — zašto je obavezna"),
      p("Diferencijalna zaštitna sklopka, poznatija kao FID, isključuje struju u deliću sekunde ako dođe do kvara u izolaciji koji bi mogao da izazove strujni udar. Po važećim propisima, ovo je obavezan deo svake instalacije, ali u praksi je ogroman broj stanova u Nišu još uvek bez nje. Ugradnja FID sklopke na postojeću tablu je relativno jeftina intervencija koja može da spasi život, i preporučujem je kao apsolutni minimum zaštite."),
      h2("Stare porcelanske table u niškim stanovima"),
      p("U zgradama iz šezdesetih, sedamdesetih i osamdesetih godina na teritoriji Niša redovno nalazim porcelanske table sa topljivim osiguračima. Ove table nemaju zaštitu od strujnog udara, nemaju odvodnik prenapona, i često su preopterećene jer je broj uređaja u domaćinstvima daleko veći nego kad su projektovane. Zamena porcelanske table modularnom, sa FID sklopkom i prenaponskom zaštitom, obično se završi za jedno prepodne bez velikih građevinskih radova."),
      h2("Šta ugradnja nove table uključuje"),
      p("Svaka nova tabla koju montiram dobija diferencijalnu zaštitnu sklopku za svaki veći strujni krug, odvodnik prenapona koji štiti uređaje od udara groma i naponskih udara u mreži, i uredno obeležene osigurače da znate koji krug štite. Na kraju intervencije radim test svake zaštitne komponente i objašnjavam ukućanima kako da reaguju kad osigurač ispadne, jer mnogi ne znaju razliku između automatskog osigurača i FID sklopke."),
      h2("Koliko košta zamena razvodne table u Nišu"),
      p("Zamena stare porcelanske table modularnom za standardan stan sa tri do pet strujnih krugova kreće od 9.000 do 16.000 dinara, zavisno od složenosti. Dodavanje FID sklopke na postojeću modularnu tablu je jeftinije, od 3.200 dinara plus cena same sklopke. Za tačnu ponudu prilagođenu vašoj situaciji pozovite nas, izlazak i procena stanja table su besplatni na teritoriji Niša."),
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
    body: [
      p("Utičnice i prekidači deluju kao najjednostavniji deo električne instalacije, ali baš tu najčešće nailazim na improvizacije kod klijenata u Nišu. Utičnica bez uzemljenja u kuhinji, prekidač na pogrešnom mestu posle renoviranja, ili jednostavno nedovoljno utičnica za savremenu upotrebu prostora — sve su to situacije koje rešavam svakodnevno, u stanovima na Medijani, kućama u Paliluli i poslovnim prostorima širom grada."),
      h2("Zamena starih utičnica i prekidača"),
      p("Ako su vam utičnice labave, prekidači škljocaju glasnije nego ranije, ili ako primetite da se zagrevaju pri normalnom korišćenju, vreme je za zamenu. Zamena stare utičnice ili prekidača novim je brza intervencija koja se obično završi za petnaestak minuta po komadu. Kad radim zamenu više komada odjednom, cena po komadu je povoljnija, što je praktično kod renoviranja celog stana."),
      h2("Kada treba nova utičnica na postojećoj instalaciji"),
      p("Ako postojeća instalacija ima dovoljno kapaciteta, dodavanje nove utičnice na blizak vod je brza intervencija u jednoj poseti. Za prostorije sa jačim trošilima, poput kuhinje ili radionice, često je bolje rešenje posebna linija sa sopstvenim osiguračem umesto dodavanja na već opterećen strujni krug. Ovo je naročito važno u starijim niškim stanovima gde su svi uređaji u kuhinji često na jednom krugu."),
      h2("Vodootporne utičnice za kupatilo i terasu"),
      p("Kupatila, terase i dvorišta zahtevaju vodootporne utičnice sa odgovarajućom IP zaštitom i pravilnom udaljenošću od izvora vode. Ovo nije mesto za kompromis — obična utičnica u vlažnom prostoru je ozbiljan bezbednosni rizik. U niškim stanovima često nalazim obične utičnice u kupatilima bez ikakve zaštite, postavljene pre dvadeset ili trideset godina kad propisi nisu bili strogi kao danas."),
      h2("Utičnice za jaka trošila"),
      p("Šporet, bojler, klima uređaj i električna peć za grejanje zahtevaju pojačanu utičnicu sa zasebnim vodom i osiguračem direktno do razvodne table. Priključivanje jakog trošila na običnu utičnicu i deljeni strujni krug je čest uzrok ispadanja osigurača i pregrevanja instalacije. Svaka ugradnja utičnice za jaka trošila uključuje provlačenje posebne linije odgovarajućeg preseka od razvodnog ormana."),
      h2("Koliko košta ugradnja utičnice u Nišu"),
      p("Zamena jedne utičnice ili prekidača kreće od 1.200 dinara po komadu. Ugradnja nove utičnice na postojeću instalaciju je od 1.800 dinara, a vodootporna utičnica za kupatilo ili terasu od 2.400 dinara. Za paketnu zamenu od deset ili više komada odjednom nudimo povoljniju cenu. Pozovite za tačnu ponudu — dolazimo na adresu u Nišu i okolini isti ili naredni dan."),
    ],
    checklist: [
      { title: "Zamena utičnica i prekidača", description: "" },
      { title: "Ugradnja na postojeću liniju", description: "" },
      { title: "Vodootporne utičnice (IP44)", description: "" },
      { title: "Linija za jaka trošila", description: "" },
      { title: "Paket zamena za više komada", description: "" },
    ],
    ctaBandTitle: "Nedostaje vam utičnica tamo gde vam stvarno treba?",
    ctaBandText:
      "Recite nam gde i za šta, predložićemo najbrži i najuredniji način da je dobijete, bez nepotrebnog bušenja.",
    ctaBandBullets: [
      "Izlazak i procena u istom danu",
      "Rad na postojećoj i novoj instalaciji",
      "Poseban vod za jaka trošila kad je potrebno",
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
    body: [
      p("Veliki deo poziva koje dobijam u Nišu nema veze sa zidnom instalacijom, nego sa kućnim uređajima koji su prestali da rade ili rade neispravno. Bojler koji ne greje vodu, šporet kod kojeg radi samo jedna ringla, veš mašina koja ne startuje program — sve su to kvarovi koje redovno rešavam na terenu, od stanova na Bulevaru Nemanjića do kuća u Niškoj Banji."),
      h2("Servis bojlera u Nišu"),
      p("Bojler je uređaj koji zahteva redovno održavanje, a većina vlasnika to ignoriše dok ne prestane da greje. Čišćenje kamenca i provera grejača i termostata produžavaju vek trajanja bojlera za nekoliko godina i smanjuju potrošnju struje. Zamena grejača na bojleru je intervencija koja se radi na licu mesta, obično za sat do dva, bez odnošenja uređaja u servis. U niškoj vodi ima dosta kamenca, pa preporučujem čišćenje bojlera bar jednom u dve godine."),
      h2("Popravka električnog šporeta"),
      p("Električni šporet može da ima kvar na ringlama, rerni ili upravljačkoj elektronici. Najčešći problem su pregorele ringle i neispravni termostati u rerni. Dijagnostiku radim na licu mesta i u većini slučajeva kvar se može otkloniti u istoj poseti. Ako je elektronika potpuno neispravna na starijem modelu, iskreno ću vam reći da je zamena uređaja ekonomičnije rešenje od skupe popravke."),
      h2("Dijagnostika veš mašine i drugih uređaja"),
      p("Veš mašina koja ne uključuje program, ne centrifugira ili prijavljuje grešku na displeju često ima električni kvar koji se može popraviti bez odnošenja u servis — neispravan grejač, prekinut termostat ili oštećena elektronska ploča. Za TA peći, koje su česte u starijim niškim stanovima sa akumulacionim grejanjem, najčešći problem su pregoreli grejni elementi koji se mogu zameniti na licu mesta."),
      h2("Kada popravka nema smisla"),
      p("Iskreno kažem klijentu kad popravka više nije isplativa. Na primer, kod starijeg bojlera gde bi zamena rezervoara koštala skoro koliko i nov uređaj, ili kod veš mašine kojoj je elektronska ploča neispravna a rezervni deo skuplji od polovine cene nove mašine. Cilj mi je da vam uštedim novac, ne da naplatim svaku moguću intervenciju. Kad je zamena bolji izbor, kažem to jasno."),
      h2("Cene servisa kućnih uređaja u Nišu"),
      p("Dijagnostika kvara na licu mesta košta od 1.500 dinara. Servis i čišćenje bojlera je od 2.500 do 4.000 dinara, zamena grejača od 3.000 do 5.500 dinara, a popravka šporeta od 2.000 do 5.000 dinara zavisno od kvara. Dolazim na adresu u Nišu i okolini, obično isti ili naredni dan. Pozovite i opišite kvar telefonom — često mogu unapred da vam kažem okvirnu cenu i da li se popravka isplati."),
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
      "Opišite kvar telefonom, često mogu unapred da vam kažem okvirnu cenu i da li se popravka isplati pre nego što dođem.",
    ctaBandBullets: [
      "Dijagnostika na licu mesta",
      "Iskren savet kad popravka nema smisla",
      "Rad sa svim vodećim brendovima bele tehnike",
      "Garancija na izvedenu popravku",
    ],
    whyUs: [
      { title: "Široko iskustvo", description: "Radim na bojlerima, šporetima, veš mašinama i TA pećima svih vodećih proizvođača." },
      { title: "Brza dijagnostika", description: "Većina kvarova se locira u prvoj poseti, bez nepotrebnog vraćanja." },
      { title: "Iskren savet", description: "Kažemo kad je popravka isplativa, a kad je bolje razmisliti o zameni uređaja." },
      { title: "Rezervni delovi na terenu", description: "Za najčešće kvarove nosim delove sa sobom, bez čekanja na porudžbinu." },
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
    body: [
      p("Ugradnja klime u Nišu nije samo mehanički posao — okačiti unutrašnju i spoljnu jedinicu. Elektro deo montaže, poseban osigurač i pravilno uzemljen priključak, su podjednako važni, i baš tu najčešće viđam propuste kod jeftinijih montaža. Loše izveden elektro priključak može da ošteti klimu i da predstavlja bezbednosni rizik, a to vidim redovno kad me pozovu da pregledam instalaciju posle tuđe montaže."),
      h2("Ugradnja klima uređaja u Nišu"),
      p("Svaka klima koju montiram dobija sopstvenu strujnu liniju sa odgovarajućim osiguračem direktno do razvodnog ormana, bez deljenja voda sa drugim trošilima. Pozicioniranje spoljne jedinice biram tako da bude dostupna za budući servis i da buka ne smeta susedima — u stambenim zgradama na Medijani i Paliluli to zahteva dogovor sa stanarima i ponekad prilagođen izbor pozicije. Unutrašnju jedinicu montiram na mestu koje obezbeđuje ravnomernu distribuciju vazduha, ne samo tamo gde je najlakše."),
      h2("Elektro priprema za klimu"),
      p("Pre montaže klime proveravam da li razvodna tabla ima slobodnog mesta za dodatan osigurač i da li ukupna priključna snaga stana podnosi još jedno jače trošilo. U starijim niškim stanovima sa aluminijumskom instalacijom ponekad je potrebno prvo zameniti dovodni kabl od table do mesta klime, jer stari presek nije dovoljan za sigurno napajanje. Ovo je korak koji mnogi preskaču, ali koji sprečava pregrevanje i ispadanje osigurača."),
      h2("Redovan servis i čišćenje klime"),
      p("Redovno čišćenje filtera, unutrašnje jedinice i kondenzatora na spoljnoj jedinici produžava vek klime i smanjuje potrošnju struje. Preporučujem servis bar jednom godišnje, idealno pre početka letnje sezone u maju ili junu, kad je potražnja manja i lakše se dogovorimo za termin. Zaprljan filter smanjuje protok vazduha i prisiljava kompresor da radi jače, što se direktno odražava na račun za struju."),
      h2("Dopuna freona — kada je stvarno potrebna"),
      p("Dopunu rashladnog gasa radim samo kad merenje pokaže da je stvarno potrebna, ne kao automatsku stavku uz svaki servis. Gubitak freona najčešće znači da negde postoji curenje na spoju ili cevi, i prosta dopuna bez lociranja i saniranja curenja je bacanje novca jer će gas ponovo isteći. Kad merenje pokaže normalan pritisak, dopuna nije potrebna, i to klijentu kažem otvoreno."),
      h2("Koliko košta ugradnja i servis klime u Nišu"),
      p("Standardna ugradnja klima uređaja sa posebnom linijom kreće od 6.000 do 9.000 dinara, servis i čišćenje od 2.500 do 4.000, a dopuna freona od 4.000 do 6.000 dinara. Demontaža stare klime je od 2.500 dinara. Za tačnu ponudu pozovite nas — dolazimo na adresu u Nišu i okolini. Servis radimo tokom cele godine, ne samo u sezoni."),
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
      { question: "Da li klima mora da ima svoju posebnu liniju do table?", answer: "Da, preporučujemo i po propisima je ispravno da klima ima sopstveni osigurač, ne deljen vod sa drugim trošilima." },
      { question: "Koliko često treba servisirati klimu?", answer: "Preporučujemo servis jednom godišnje, idealno pre početka letnje sezone." },
      { question: "Da li svaki servis znači i dopunu freona?", answer: "Ne, dopunu radimo samo kad merenje pokaže da je pritisak gasa ispod normale." },
    ],
  },
  {
    slug: "ev-punjaci",
    title: "Ugradnja EV punjača",
    heroSubtitle:
      "Postavljanje kućnih punjača za električna vozila, sa posebnim vodom i osiguračem prilagođenim snazi punjenja.",
    body: [
      p("Punjač za električni automobil troši znatno više struje od bilo kog drugog kućnog uređaja, i to je prvo što proveravam pre ugradnje — da li postojeća instalacija i priključna snaga objekta uopšte mogu da podnesu dodatno opterećenje. U Nišu je potražnja za kućnim EV punjačima u porastu, posebno kod vlasnika kuća sa garažom ili dvorištem u Niškoj Banji, Paliluli i širem centru."),
      h2("Provera priključne snage pre ugradnje"),
      p("Pre montaže punjača proveravam ukupnu priključnu snagu objekta i trenutnu opterećenost razvodnog ormana. Kućni EV punjač snage 7 kW ili 11 kW predstavlja značajno opterećenje za instalaciju, i ako postojeći priključak nije dovoljan, predlažem realne opcije: punjenje manjom snagom u noćnim satima kad je potrošnja manja, izbor manjeg punjača, ili razgovor sa distributerom o povećanju priključne snage, što u Nišu obično ide preko Elektrodistribucije Srbije."),
      h2("Kako izgleda ugradnja EV punjača"),
      p("Punjač dobija sopstvenu liniju odgovarajućeg preseka kabla, poseban osigurač i zaštitnu sklopku prilagođenu tipu punjenja. Za punjače sa jednofaznim priključkom to je obično kabl preseka 6 mm², a za trofazne 2.5 ili 4 mm² po fazi. Trasu od razvodnog ormana do mesta punjača biram tako da bude što kraća i praktičnija, jer svaki metar kabla košta, a prekratki presek na dugoj trasi izaziva pad napona i pregrevanje."),
      h2("Izbor lokacije za punjač"),
      p("Poziciju punjača biramo zajedno tako da bude praktična za svakodnevno korišćenje. Za garaže je to obično na bočnom zidu, na visini od oko jednog metra, sa dovoljno prostora za kabl. Za dvorišta i otvorene prilaze koristim punjače sa odgovarajućom IP zaštitom za spoljnu montažu, otporne na kišu i temperaturne promene. Ako parkirate na ulici, kućni punjač verovatno nije rešenje, i o tome otvoreno razgovaramo pre nego što bilo šta počnemo."),
      h2("Koje punjače montiram"),
      p("Radim ugradnju svih tipova kućnih wallbox punjača dostupnih na našem tržištu, bez obzira na proizvođača. Najvažnije je da punjač ima odgovarajuće sertifikate i da je kompatibilan sa vašim vozilom. Ako niste sigurni koji model da izaberete, mogu da vam predložim opcije na osnovu snage priključka, tipa vozila i budžeta, ali ne prodajem punjače — ugradnju radim na bilo kojem uređaju koji kupite."),
      h2("Cena ugradnje EV punjača u Nišu"),
      p("Ugradnja kućnog EV punjača kreće od 12.000 do 20.000 dinara bez cene samog punjača, zavisno od dužine trase i potrebnog preseka kabla. Postavljanje posebnog voda je od 8.000 do 18.000 dinara za duže trase. Konsultacija i provera priključne snage košta 3.000 dinara i preporučujem je pre kupovine punjača, kako ne biste kupili uređaj koji vaša instalacija ne može da napaja. Pozovite za besplatnu konsultaciju telefonom — odgovorićemo na osnovna pitanja i bez izlaska na teren."),
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
      { title: "Iskustvo sa jakim trošilima", description: "Poseban vod i zaštita rade se po istim principima kao kod drugih jakih uređaja." },
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
