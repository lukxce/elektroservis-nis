export function formatRsd(amount: number): string {
  return `${new Intl.NumberFormat("sr-Latn-RS").format(amount)} din`;
}

export function formatDate(dateString: string): string {
  return new Intl.DateTimeFormat("sr-Latn-RS", {
    day: "numeric",
    month: "long",
    year: "numeric",
  }).format(new Date(dateString));
}

const categoryLabels: Record<string, string> = {
  elektroinstalacije: "Elektroinstalacije",
  rasveta: "Ugradnja rasvete",
  "osiguraci-i-table": "Osigurači i table",
  "uticnice-i-prekidaci": "Utičnice i prekidači",
  "servis-uredjaja": "Servis kućnih uređaja",
  "klima-uredjaji": "Ugradnja i servis klima uređaja",
  "ev-punjaci": "Ugradnja EV punjača",
};

export function serviceCategoryLabel(category: string): string {
  return categoryLabels[category] ?? category;
}

export function formatServiceAreas(city: string, serviceAreas: string[]): string {
  const municipalities = serviceAreas.filter((area) => area !== city);
  if (municipalities.length === 0) return city;
  return `${city} i okolina (${municipalities.join(", ")})`;
}

const contactReasonLabels: Record<string, string> = {
  montaza: "Montaža instalacije",
  servis: "Servis / redovno održavanje",
  kvar: "Prijava kvara",
  dijagnostika: "Dijagnostika / merenje",
  ostalo: "Ostalo",
};

export function contactReasonLabel(reason: string): string {
  return contactReasonLabels[reason] ?? reason;
}

const blogCategoryLabels: Record<string, string> = {
  bezbednost: "Bezbednost",
  odrzavanje: "Održavanje",
  renoviranje: "Kupovina i renoviranje",
  saveti: "Saveti",
};

export function blogCategoryLabel(category: string): string {
  return blogCategoryLabels[category] ?? category;
}

export const blogCategories = Object.entries(blogCategoryLabels).map(([value, label]) => ({
  value,
  label,
}));
