import { attentionPattern } from "@/mocks/chess";

const TONE_CLASS: Record<string, string> = {
  low: "bg-background-600",
  mid: "bg-primary-600",
  high: "bg-primary-400",
  peak: "bg-accent-500",
};

export default function ResearchPanel() {
  return (
    <section id="research" className="w-full py-8 border-t border-background-300/50">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-end">
        <div className="lg:col-span-4">
          <span className="eyebrow text-foreground-500">Research / Error Map</span>
          <h2 className="mt-4 font-heading text-3xl text-foreground-950">Pattern of attention</h2>
        </div>

        <div className="lg:col-span-5 flex items-end gap-[6px] h-12">
          {attentionPattern.map((bar, index) => (
            <span
              key={index}
              className={`flex-1 ${TONE_CLASS[bar.tone]} transition-colors`}
              style={{ height: `${bar.tone === "peak" ? 44 : bar.tone === "high" ? 34 : bar.tone === "mid" ? 24 : 14}px` }}
            />
          ))}
        </div>

        <div className="lg:col-span-3 lg:text-right">
          <div className="eyebrow text-foreground-500">Last 30 Days</div>
          <p className="mt-3 font-heading italic text-lg text-foreground-600">Quiet progress is still progress.</p>
        </div>
      </div>
    </section>
  );
}