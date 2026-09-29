import StatusPill from "@/components/base/StatusPill";
import { engineSnapshot } from "@/mocks/chess";

export default function EnginePanel() {
  const rows = [
    { label: "Position", value: engineSnapshot.position, mono: false },
    { label: "Evaluation", value: engineSnapshot.evaluation, mono: true },
    { label: "Depth", value: engineSnapshot.depth, mono: true },
    { label: "Best idea", value: engineSnapshot.bestIdea, mono: false },
    { label: "Time", value: engineSnapshot.time, mono: true },
  ];

  return (
    <section className="w-full flex flex-col">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2 text-foreground-400">
          <i className="ri-cpu-line text-sm" />
          <span className="eyebrow">Local Intelligence</span>
        </div>
        <StatusPill label="Ready" tone="accent" />
      </div>

      <div className="mt-5">
        <div className="flex items-baseline gap-2">
          <h2 className="font-heading text-4xl text-foreground-950">Stockfish</h2>
          <span className="font-heading text-2xl text-primary-500">19</span>
        </div>
        <p className="mt-2 font-label text-[10px] tracking-[0.24em] uppercase text-foreground-500">
          Local Warm Engine · Single Thread
        </p>
      </div>

      <div className="mt-7 border-t border-background-300/50">
        {rows.map((row) => (
          <div
            key={row.label}
            className="grid grid-cols-2 gap-4 py-3 border-b border-background-300/40 items-center"
          >
            <span className="eyebrow text-foreground-500">{row.label}</span>
            <span
              className={`text-right text-[13px] ${
                row.mono ? "font-mono text-foreground-700" : "text-foreground-800"
              } ${row.value === "—" || row.value === "Awaiting position" ? "text-foreground-500" : ""}`}
            >
              {row.value}
            </span>
          </div>
        ))}
      </div>

      <div className="mt-6">
        <span className="eyebrow text-foreground-500">Principal Variation</span>
        <div className="mt-3 min-h-[52px] flex items-center">
          {engineSnapshot.principalVariation.length > 0 ? (
            <p className="font-mono text-[11px] leading-relaxed text-foreground-700">
              {engineSnapshot.principalVariation.join("  ")}
            </p>
          ) : (
            <span className="font-mono text-[11px] text-foreground-500">
              Engine is idle — awaiting a validated position.
            </span>
          )}
        </div>
      </div>

      <div className="mt-auto pt-8 flex items-center gap-2 text-foreground-500">
        <i className="ri-lock-line text-sm" />
        <span className="font-mono text-[10px] tracking-[0.14em]">
          The engine never leaves this device.
        </span>
      </div>
    </section>
  );
}