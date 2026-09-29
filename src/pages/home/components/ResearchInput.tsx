import { useState } from "react";
import { isValidFen } from "@/pages/home/utils/chessBoard";
import { researchFenSample } from "@/mocks/chess";

type AnalyzeState = "idle" | "analyzing" | "ready";

export default function ResearchInput() {
  const [fen, setFen] = useState(researchFenSample);
  const [state, setState] = useState<AnalyzeState>("idle");
  const [error, setError] = useState("");

  const handleAnalyze = () => {
    if (!isValidFen(fen)) {
      setError("The position is not a valid FEN. Check the placement field.");
      setState("idle");
      return;
    }
    setError("");
    setState("analyzing");
    window.setTimeout(() => setState("ready"), 1000);
  };

  const buttonLabel =
    state === "analyzing" ? "Analyzing…" : state === "ready" ? "Analyzed" : "Analyze Now";

  return (
    <section className="w-full py-7 border-t border-background-300/50">
      <span className="eyebrow text-foreground-500">Research Position</span>
      <div className="mt-4 flex flex-col lg:flex-row lg:items-center gap-3">
        <input
          value={fen}
          onChange={(event) => {
            setFen(event.target.value);
            if (error) setError("");
            if (state === "ready") setState("idle");
          }}
          spellCheck={false}
          placeholder="Paste a FEN to study with the engine"
          className="flex-1 bg-background-100 border border-background-300/60 px-4 py-3 font-mono text-[12px] text-foreground-800 placeholder:text-foreground-500 outline-none focus:border-primary-500/70"
        />
        <button
          type="button"
          onClick={handleAnalyze}
          className="inline-flex items-center justify-center gap-2 px-6 py-3 text-[11px] font-label tracking-[0.16em] uppercase whitespace-nowrap bg-primary-500 text-background-50 hover:bg-primary-600 transition-colors cursor-pointer"
        >
          <i className="ri-flashlight-line text-sm" />
          {buttonLabel}
        </button>
      </div>
      <p
        className={`mt-3 font-mono text-[10px] tracking-[0.12em] ${
          error ? "text-primary-400" : "text-foreground-500"
        }`}
      >
        {error || "Load a position to the local engine without ever leaving this device."}
      </p>
    </section>
  );
}