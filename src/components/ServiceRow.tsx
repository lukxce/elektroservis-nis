import Link from "next/link";

import { formatRsd } from "@/lib/format";
import type { Service } from "@/lib/types";

export function ServiceRow({ service, href }: { service: Service; href?: string }) {
  const content = (
    <>
      <div className="min-w-0">
        <h4 className="truncate font-medium text-navy group-hover:text-accent-dark">
          {service.title}
        </h4>
        <p className="mt-0.5 line-clamp-1 text-xs text-muted">{service.shortDescription}</p>
      </div>
      <div className="shrink-0 text-right">
        <span className="font-bold text-navy">
          od {formatRsd(service.priceFrom)}
        </span>
        {service.priceTo && (
          <span className="block text-[11px] text-muted">do {formatRsd(service.priceTo)}</span>
        )}
        {service.priceNote && (
          <span className="hidden text-[11px] text-muted sm:block">{service.priceNote}</span>
        )}
      </div>
    </>
  );

  const className =
    "group flex items-center justify-between gap-4 rounded-xl border border-black/5 bg-white px-4 py-3 shadow-sm";

  if (!href) {
    return <div className={className}>{content}</div>;
  }

  return (
    <Link href={href} className={`${className} transition hover:border-accent/30 hover:shadow-md`}>
      {content}
    </Link>
  );
}
