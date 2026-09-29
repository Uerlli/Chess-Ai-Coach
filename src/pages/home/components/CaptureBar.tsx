import { useState } from "react";
import StatusPill from "@/components/base/StatusPill";

const SOURCES = ["OBS Virtual Camera", "USB Capture Device", "Browser Screen Capture"];

type CaptureStatus = "disconnected" | "connecting" | "connected";

const STATUS_LABEL: Record<CaptureStatus, string> = {
  disconnected: "OBS Not Connected",
  connecting: "Connecting…",
  connected: "OBS Connected",
};

const STATUS_TONE: Record<CaptureStatus, "idle" | "warn" | "active"> = {
  disconnected: "idle",
  connecting: "warn",
  connected: "active",
};

export default function CaptureBar() {
  const [source, setSource] = useState(SOURCES[0]);
  const [status, setStatus] = useState<CaptureStatus>("disconnected");
  const [browserCapture, setBrowserCapture] = useState(false);

  const handleConnect = () => {
    if (status === "connected") {
      setStatus("disconnected");
      return;
    }
    setStatus("connecting");
    window.setTimeout(() => setStatus("connected"), 900);
  };

  const connected = status === "connected";

  return (
    <div className="w-full grid grid-cols-1 lg:grid-cols-12 items-center gap-4 py-4 border-t border-background-300/50">
      <div className="lg:col-span-4 flex items-center gap-4">
        <span className="w-10 h-10 flex items-center justify-center border border-background-300/60">
          <i className="ri-record-circle-line text-lg text-primary-500" />
        </span>
        <div>
          <div className="eyebrow text-foreground-500">Capture Source</div>
          <StatusPill label={STATUS_LABEL[status]} tone={STATUS_TONE[status]} className="mt-2" />
        </div>
      </div>

      <div className="lg:col-span-4 flex items-center gap-2">
        <div className="relative flex-1">
          <select
            value={source}
            onChange={(event) => setSource(event.target.value)}
            className="w-full appearance-none bg-background-100 border border-background-300/60 px-4 py-2.5 text-sm text-foreground-800 outline-none focus:border-primary-500/70 cursor-pointer"
          >
            {SOURCES.map((option) => (
              <option key={option} value={option}>
                {option}
              </option>
            ))}
          </select>
          <i className="ri-arrow-down-s-line absolute right-3 top-1/2 -translate-y-1/2 text-foreground-400 pointer-events-none" />
        </div>
        <button
          type="button"
          aria-label="Refresh devices"
          className="w-10 h-10 flex items-center justify-center border border-background-300/60 text-foreground-300 hover:text-primary-400 hover:border-primary-500/50 transition-colors cursor-pointer"
        >
          <i className="ri-refresh-line text-base" />
        </button>
      </div>

      <div className="lg:col-span-4 flex flex-col sm:flex-row items-stretch sm:items-center gap-2 sm:justify-end">
        <button
          type="button"
          onClick={() => setBrowserCapture((prev) => !prev)}
          className={`inline-flex items-center justify-center gap-2 px-4 py-2.5 border text-[11px] font-label tracking-[0.16em] uppercase whitespace-nowrap transition-colors cursor-pointer ${
            browserCapture
              ? "border-primary-500/70 text-primary-400 bg-primary-500/5"
              : "border-background-300/60 text-foreground-300 hover:text-foreground-700"
          }`}
        >
          <i className="ri-window-line text-sm" />
          Browser Capture
          <span
            className={`w-3.5 h-3.5 flex items-center justify-center border ${
              browserCapture ? "border-primary-500 bg-primary-500 text-background-50" : "border-background-400"
            }`}
          >
            {browserCapture && <i className="ri-check-line text-[9px]" />}
          </span>
        </button>

        <button
          type="button"
          onClick={handleConnect}
          className={`inline-flex items-center justify-center gap-2 px-5 py-2.5 text-[11px] font-label tracking-[0.16em] uppercase whitespace-nowrap transition-colors cursor-pointer ${
            connected
              ? "border border-primary-500/60 text-primary-400 hover:bg-primary-500/10"
              : "bg-primary-500 text-background-50 hover:bg-primary-600"
          }`}
        >
          <i className={`${connected ? "ri-link-unlink-m" : "ri-camera-lens-line"} text-sm`} />
          {connected ? "Disconnect" : "Connect to OBS"}
        </button>
      </div>
    </div>
  );
}