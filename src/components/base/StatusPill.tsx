interface StatusPillProps {
  label: string;
  tone?: "idle" | "active" | "warn" | "accent";
  className?: string;
}

const DOT_TONE: Record<NonNullable<StatusPillProps["tone"]>, string> = {
  idle: "bg-foreground-300",
  active: "bg-secondary-500",
  warn: "bg-primary-500",
  accent: "bg-accent-500",
};

const TEXT_TONE: Record<NonNullable<StatusPillProps["tone"]>, string> = {
  idle: "text-foreground-400",
  active: "text-secondary-700",
  warn: "text-primary-500",
  accent: "text-accent-600",
};

export default function StatusPill({ label, tone = "idle", className = "" }: StatusPillProps) {
  return (
    <span className={`inline-flex items-center gap-2 whitespace-nowrap ${className}`}>
      <span className="relative flex w-2 h-2 items-center justify-center">
        <span className={`absolute inset-0 rounded-full ${DOT_TONE[tone]} ${tone !== "idle" ? "animate-breathe" : ""}`} />
      </span>
      <span className={`font-label text-[10px] tracking-[0.24em] uppercase ${TEXT_TONE[tone]}`}>{label}</span>
    </span>
  );
}