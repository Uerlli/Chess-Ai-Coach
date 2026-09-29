import ChessBoard from "@/pages/home/components/ChessBoard";
import StatusPill from "@/components/base/StatusPill";
import { captureMeta, STARTING_FEN } from "@/mocks/chess";

export default function BoardPanel() {
  return (
    <section id="position" className="w-full flex flex-col gap-6">
      <div className="flex items-center justify-between">
        <span className="eyebrow text-foreground-500">I / The Board</span>
        <StatusPill label="OBS Not Connected" tone="idle" />
      </div>

      <div className="flex flex-col gap-1">
        <h2 className="font-heading text-3xl text-foreground-950">Position</h2>
        <div className="flex items-center gap-3 mt-1">
          <span className="font-mono text-[11px] text-foreground-500 break-all leading-relaxed">{STARTING_FEN}</span>
        </div>
      </div>

      <div className="w-full max-w-[560px] mx-auto lg:mx-0">
        <ChessBoard fen={STARTING_FEN} />
      </div>

      <div className="flex flex-col sm:flex-row items-start sm:items-center gap-5 pt-5 border-t border-background-300/50">
        <div className="w-[140px] h-[79px] shrink-0 overflow-hidden border border-background-300/60 bg-background-100">
          <img
            src="https://readdy.ai/api/search-image?query=Overhead%20view%20of%20an%20elegant%20wooden%20chess%20board%20on%20a%20dark%20walnut%20table%2C%20warm%20cinematic%20low%20light%2C%20ivory%20and%20deep%20brown%20tones%2C%20minimal%20editorial%20photography%2C%20soft%20shadows%2C%20refined%20and%20quiet%20atmosphere&width=320&height=180&seq=cih-capture-monitor&orientation=landscape"
            alt="Raw capture source preview of the chess board"
            title="Capture source — OBS Virtual Camera"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="grid grid-cols-2 gap-x-10 gap-y-3">
          <Meta label="Source" value={captureMeta.source} />
          <Meta label="Resolution" value={captureMeta.resolution} />
          <Meta label="Frame rate" value={captureMeta.frameRate} />
          <Meta label="Last sync" value={captureMeta.lastSync} />
        </div>
      </div>
    </section>
  );
}

function Meta({ label, value }: { label: string; value: string }) {
  return (
    <div>
      <div className="eyebrow text-foreground-500">{label}</div>
      <div className="mt-1.5 font-mono text-[11px] text-foreground-700">{value}</div>
    </div>
  );
}