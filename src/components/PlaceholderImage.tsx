type PlaceholderImageProps = {
  label: string;
  className?: string;
  tone?: "navy" | "light";
};

export function PlaceholderImage({
  label,
  className = "",
  tone = "navy",
}: PlaceholderImageProps) {
  const bg =
    tone === "navy"
      ? "bg-gradient-to-br from-navy to-navy-light"
      : "bg-gradient-to-br from-surface to-white";
  const text = tone === "navy" ? "text-white/60" : "text-navy/40";

  return (
    <div
      className={`relative flex items-center justify-center overflow-hidden ${bg} ${className}`}
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 64 64"
        fill="none"
        className={`h-10 w-10 ${text}`}
      >
        <path
          d="M34 6 14 36h14l-4 22 22-30H32l2-22Z"
          stroke="currentColor"
          strokeWidth="2.5"
          strokeLinejoin="round"
        />
      </svg>
      <span
        className={`absolute bottom-2 left-2 rounded bg-black/30 px-2 py-1 text-[10px] font-medium ${
          tone === "navy" ? "text-white/80" : "text-navy/60"
        }`}
      >
        {label}
      </span>
    </div>
  );
}
