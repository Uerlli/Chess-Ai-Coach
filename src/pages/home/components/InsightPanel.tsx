import { useState } from "react";
import { currentInsight, trainingCredo, voiceOptions } from "@/mocks/chess";

const SEVERITY_TONE: Record<string, string> = {
  Mistake: "text-primary-400 border-primary-500/50",
  Blunder: "text-accent-500 border-accent-500/50",
  Imprecision: "text-foreground-400 border-background-400",
};

export default function InsightPanel() {
  const [voiceEnabled, setVoiceEnabled] = useState(true);
  const [muted, setMuted] = useState(false);
  const [volume, setVolume] = useState(70);
  const [voice, setVoice] = useState(voiceOptions[0]);
  const [speaking, setSpeaking] = useState(false);

  const handleReplay = () => {
    if (muted) return;
    setSpeaking(true);
    window.setTimeout(() => setSpeaking(false), 1400);
  };

  const tone = SEVERITY_TONE[currentInsight.severity] ?? SEVERITY_TONE.Mistake;

  return (
    <section id="insights" className="w-full flex flex-col">
      <div className="flex items-center justify-between">
        <span className="eyebrow text-foreground-500">II / Insights</span>
        <span className="flex items-center gap-1 text-foreground-400">
          {[0, 1, 2].map((bar) => (
            <span
              key={bar}
              className={`w-[2px] bg-primary-500 ${speaking ? "animate-breathe" : ""}`}
              style={{ height: `${6 + bar * 3}px` }}
            />
          ))}
        </span>
      </div>

      <h2 className="mt-5 font-heading text-3xl text-foreground-950">Trainer's Note</h2>

      <p className="mt-6 font-heading italic text-xl text-foreground-700 leading-snug">
        “{trainingCredo}”
      </p>

      <div className={`mt-7 border-l-2 pl-5 ${tone.split(" ")[1]}`}>
        <div className="flex items-center gap-3">
          <span className={`font-label text-[10px] tracking-[0.24em] uppercase ${tone.split(" ")[0]}`}>
            {currentInsight.severity}
          </span>
          <span className="font-mono text-[10px] tracking-[0.16em] text-foreground-500">
            {currentInsight.move}
          </span>
        </div>
        <p className="mt-3 text-sm leading-relaxed text-foreground-800">{currentInsight.message}</p>
      </div>

      <div className="mt-auto pt-8">
        <div className="flex items-center justify-between pb-4 border-t border-background-300/50 pt-5">
          <div className="flex items-center gap-2 text-foreground-400">
            <i className="ri-mic-line text-sm" />
            <span className="eyebrow">Mentor Voice</span>
          </div>
          <button
            type="button"
            onClick={() => setVoiceEnabled((prev) => !prev)}
            aria-label="Toggle mentor voice"
            className={`relative w-11 h-6 border transition-colors cursor-pointer ${
              voiceEnabled ? "border-primary-500 bg-primary-500/25" : "border-background-400 bg-background-200"
            }`}
          >
            <span
              className={`absolute top-[3px] w-4 h-4 transition-all ${
                voiceEnabled ? "left-[25px] bg-primary-500" : "left-[3px] bg-foreground-400"
              }`}
            />
          </button>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <label className="block">
            <span className="eyebrow text-foreground-500">Voice</span>
            <div className="relative mt-2">
              <select
                value={voice}
                onChange={(event) => setVoice(event.target.value)}
                disabled={!voiceEnabled}
                className="w-full appearance-none bg-background-100 border border-background-300/60 px-3 py-2 text-xs text-foreground-800 outline-none focus:border-primary-500/70 disabled:opacity-50 cursor-pointer"
              >
                {voiceOptions.map((option) => (
                  <option key={option} value={option}>
                    {option}
                  </option>
                ))}
              </select>
              <i className="ri-arrow-down-s-line absolute right-3 top-1/2 -translate-y-1/2 text-foreground-400 pointer-events-none" />
            </div>
          </label>

          <label className="block">
            <span className="eyebrow text-foreground-500">Volume</span>
            <div className="mt-2 flex items-center gap-3 h-[34px]">
              <input
                type="range"
                min={0}
                max={100}
                value={volume}
                onChange={(event) => setVolume(Number(event.target.value))}
                disabled={!voiceEnabled}
                className="w-full accent-primary-500 cursor-pointer disabled:opacity-50"
              />
              <span className="font-mono text-[11px] text-foreground-500 w-9 text-right">{volume}%</span>
            </div>
          </label>
        </div>

        <div className="mt-4 flex items-center gap-2">
          <button
            type="button"
            onClick={handleReplay}
            disabled={!voiceEnabled}
            className="flex-1 inline-flex items-center justify-center gap-2 px-4 py-2.5 border border-background-300/60 text-[11px] font-label tracking-[0.16em] uppercase text-foreground-300 hover:text-primary-400 hover:border-primary-500/50 transition-colors cursor-pointer whitespace-nowrap disabled:opacity-40 disabled:cursor-not-allowed"
          >
            <i className={`${speaking ? "ri-volume-up-line" : "ri-restart-line"} text-sm`} />
            {speaking ? "Speaking…" : "Replay"}
          </button>
          <button
            type="button"
            onClick={() => setMuted((prev) => !prev)}
            aria-label="Mute mentor voice"
            className={`w-11 h-11 flex items-center justify-center border transition-colors cursor-pointer ${
              muted ? "border-primary-500/60 text-primary-400" : "border-background-300/60 text-foreground-300"
            }`}
          >
            <i className={`${muted ? "ri-volume-mute-line" : "ri-volume-down-line"} text-base`} />
          </button>
        </div>
      </div>
    </section>
  );
}