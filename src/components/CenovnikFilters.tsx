"use client";

import Link from "next/link";
import { useMemo, useState } from "react";

import { Container } from "@/components/Container";
import { formatRsd, serviceCategoryLabel } from "@/lib/format";
import type { Service } from "@/lib/types";

export function CenovnikFilters({
  services,
  categoryOrder,
  phone,
}: {
  services: Service[];
  categoryOrder: string[];
  phone: string;
}) {
  const [search, setSearch] = useState("");
  const [activeCategory, setActiveCategory] = useState<string | null>(null);
  const [filtersOpen, setFiltersOpen] = useState(false);

  const allGroups = useMemo(
    () =>
      categoryOrder
        .map((category) => ({
          category,
          total: services.filter((s) => s.category === category).length,
        }))
        .filter((group) => group.total > 0),
    [services, categoryOrder],
  );

  const query = search.trim().toLowerCase();

  const visibleGroups = useMemo(() => {
    return categoryOrder
      .map((category) => ({
        category,
        items: services.filter(
          (s) =>
            s.category === category &&
            (!activeCategory || activeCategory === category) &&
            (!query || s.title.toLowerCase().includes(query)),
        ),
      }))
      .filter((group) => group.items.length > 0);
  }, [services, categoryOrder, activeCategory, query]);

  const hasResults = visibleGroups.length > 0;

  return (
    <>
      {/* Search + filter toggle */}
      <div className="border-b border-black/5 bg-white">
        <Container className="py-4">
          <div className="flex gap-2">
            <div className="relative flex-1">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
                className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted"
              >
                <path
                  fillRule="evenodd"
                  d="M9 3.5a5.5 5.5 0 100 11 5.5 5.5 0 000-11zM2 9a7 7 0 1112.452 4.391l3.328 3.329a.75.75 0 11-1.06 1.06l-3.329-3.328A7 7 0 012 9z"
                  clipRule="evenodd"
                />
              </svg>
              <input
                type="text"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                placeholder="Pretražite usluge..."
                className="w-full rounded-full border border-black/10 bg-surface py-2.5 pl-10 pr-4 text-sm text-navy outline-none transition focus:border-accent focus:bg-white"
              />
            </div>
            <button
              type="button"
              onClick={() => setFiltersOpen((v) => !v)}
              className={`flex shrink-0 items-center gap-2 rounded-full border px-4 py-2.5 text-sm font-semibold transition sm:hidden ${
                filtersOpen || activeCategory
                  ? "border-accent bg-accent text-navy"
                  : "border-black/10 bg-surface text-navy"
              }`}
            >
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="h-4 w-4">
                <path d="M2.628 1.601C5.028 1.206 7.49 1 10 1s4.973.206 7.372.601a.75.75 0 01.628.74v2.288a2.25 2.25 0 01-.659 1.59l-4.682 4.683a2.25 2.25 0 00-.659 1.59v3.037c0 .684-.31 1.33-.844 1.757l-1.937 1.55A.75.75 0 018 18.25v-5.757a2.25 2.25 0 00-.659-1.591L2.659 6.22A2.25 2.25 0 012 4.629V2.34a.75.75 0 01.628-.74z" />
              </svg>
              Filteri
            </button>
          </div>

          {/* Category pills */}
          <nav
            className={`mt-3 flex-wrap gap-2 overflow-x-auto ${
              filtersOpen ? "flex" : "hidden"
            } sm:flex`}
          >
            <button
              type="button"
              onClick={() => setActiveCategory(null)}
              className={`flex shrink-0 items-center gap-2 rounded-full border px-4 py-2 text-sm font-semibold transition ${
                activeCategory === null
                  ? "border-accent bg-accent text-navy"
                  : "border-navy/10 bg-surface text-navy hover:border-accent hover:bg-accent hover:text-navy"
              }`}
            >
              Sve usluge
            </button>
            {allGroups.map((group) => (
              <button
                key={group.category}
                type="button"
                onClick={() =>
                  setActiveCategory((current) =>
                    current === group.category ? null : group.category,
                  )
                }
                className={`flex shrink-0 items-center gap-2 rounded-full border px-4 py-2 text-sm font-semibold transition ${
                  activeCategory === group.category
                    ? "border-accent bg-accent text-navy"
                    : "border-navy/10 bg-surface text-navy hover:border-accent hover:bg-accent hover:text-navy"
                }`}
              >
                {serviceCategoryLabel(group.category)}
                <span className="rounded-full bg-white px-1.5 py-0.5 text-xs font-bold text-accent-dark">
                  {group.total}
                </span>
              </button>
            ))}
          </nav>
        </Container>
      </div>

      {/* Price table */}
      <section className="py-12">
        <Container>
          <p className="max-w-2xl text-sm text-muted">
            Cene su prikazane u dinarima. Za preciznu procenu ili zakazivanje
            termina pozovite {phone}.
          </p>

          {!hasResults ? (
            <div className="mt-10 rounded-2xl border border-black/5 bg-surface p-10 text-center">
              <p className="font-medium text-navy">Nema rezultata za „{search}”</p>
              <p className="mt-1 text-sm text-muted">
                Pokušajte drugu pretragu ili pozovite {phone} za pomoć.
              </p>
            </div>
          ) : (
            <div className="mt-10 space-y-14">
              {visibleGroups.map((group) => (
                <div key={group.category} id={group.category} className="scroll-mt-32">
                  <div className="flex flex-wrap items-baseline justify-between gap-3 border-b-2 border-navy pb-3">
                    <h2 className="text-2xl font-bold text-navy">
                      {serviceCategoryLabel(group.category)}
                      <span className="ml-2 text-sm font-normal text-muted">
                        ({group.items.length} {group.items.length === 1 ? "stavka" : "stavki"})
                      </span>
                    </h2>
                    <Link
                      href={`/usluge/${group.category}`}
                      className="text-sm font-semibold text-accent-dark hover:underline"
                    >
                      Sve o ovoj usluzi →
                    </Link>
                  </div>

                  <div className="mt-4 divide-y divide-black/5 rounded-lg border border-black/5 bg-white">
                    {group.items.map((service) => (
                      <div
                        key={service.slug}
                        className="flex items-baseline justify-between gap-4 px-4 py-3"
                      >
                        <div className="min-w-0">
                          <p className="truncate text-sm font-medium text-navy">
                            {service.title}
                          </p>
                          {service.priceNote && (
                            <p className="truncate text-[11px] text-muted">
                              {service.priceNote}
                            </p>
                          )}
                        </div>
                        <div className="shrink-0 text-right text-sm font-bold text-navy">
                          od {formatRsd(service.priceFrom)}
                          {service.priceTo && (
                            <span className="block text-[11px] font-normal text-muted">
                              do {formatRsd(service.priceTo)}
                            </span>
                          )}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          )}
        </Container>
      </section>
    </>
  );
}
