import { useState } from "react";
import { archiveSessions } from "@/mocks/chess";

export default function ArchivePanel() {
  const [openId, setOpenId] = useState<string | null>(archiveSessions[0]?.id ?? null);

  return (
    <section id="archive" className="w-full flex flex-col">
      <div className="flex items-center justify-between">
        <span className="eyebrow text-foreground-500">III / Archive</span>
        <button
          type="button"
          aria-label="Archive options"
          className="w-8 h-8 flex items-center justify-center text-foreground-400 hover:text-primary-400 transition-colors cursor-pointer"
        >
          <i className="ri-archive-line text-sm" />
        </button>
      </div>

      <h2 className="mt-5 font-heading text-3xl text-foreground-950">Knowledge accumulated</h2>

      <div className="mt-6 divide-y divide-background-300/40 border-t border-background-300/50">
        {archiveSessions.map((session) => {
          const open = openId === session.id;
          return (
            <div key={session.id}>
              <button
                type="button"
                onClick={() => setOpenId(open ? null : session.id)}
                className="w-full py-4 flex items-center gap-4 text-left cursor-pointer group"
              >
                <span className="font-mono text-[11px] tracking-[0.14em] text-primary-500 w-12 shrink-0">
                  {session.id}
                </span>
                <span className="flex-1 min-w-0">
                  <span className="block text-sm text-foreground-800 truncate">
                    {session.player} <span className="text-foreground-500">vs</span> {session.opponent}
                  </span>
                  <span className="block mt-1 text-[11px] text-foreground-500 truncate">{session.opening}</span>
                </span>
                <span className="hidden sm:block font-mono text-[11px] text-foreground-500 w-24 text-right shrink-0">
                  {session.date}
                </span>
                <span className="font-mono text-[11px] text-foreground-600 w-10 text-right shrink-0">
                  {session.result}
                </span>
                <i
                  className={`ri-arrow-down-s-line text-foreground-400 transition-transform ${
                    open ? "rotate-180" : ""
                  }`}
                />
              </button>

              {open && (
                <div className="pb-5 pl-16 pr-2 grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div className="flex gap-8">
                    <Stat label="Accuracy" value={`${session.accuracy}%`} />
                    <Stat label="Insights" value={String(session.insights)} />
                  </div>
                  <div>
                    <div className="eyebrow text-foreground-500">Relevant positions</div>
                    <ul className="mt-3 space-y-2">
                      {session.errors.map((error) => (
                        <li key={error} className="flex items-center gap-2 text-[11px] text-foreground-600">
                          <span className="w-1 h-1 bg-accent-500" />
                          {error}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              )}
            </div>
          );
        })}
      </div>
    </section>
  );
}

function Stat({ label, value }: { label: string; value: string }) {
  return (
    <div>
      <div className="eyebrow text-foreground-500">{label}</div>
      <div className="mt-1.5 font-heading text-2xl text-foreground-900">{value}</div>
    </div>
  );
}