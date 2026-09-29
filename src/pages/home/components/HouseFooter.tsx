export default function HouseFooter() {
  return (
    <footer className="mt-20 border-t border-background-300/50 bg-background-100">
      <div className="w-full px-6 lg:px-10 py-12">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10">
          <div className="md:col-span-5">
            <div className="flex items-center gap-3">
              <span className="w-9 h-9 flex items-center justify-center border border-primary-500/45">
                <i className="ri-shield-star-line text-primary-500 text-base" />
              </span>
              <span className="font-heading text-lg text-foreground-950 tracking-wide">Chess Intelligence House</span>
            </div>
            <p className="mt-5 font-heading italic text-lg text-primary-500 max-w-md">
              The board is old. The intelligence is not.
            </p>
          </div>

          <div className="md:col-span-4">
            <div className="eyebrow text-foreground-500">The House</div>
            <ul className="mt-4 space-y-3">
              {["Position", "Insights", "Archive", "Research"].map((item) => (
                <li key={item}>
                  <a
                    href={`#${item.toLowerCase()}`}
                    className="font-label text-[12px] tracking-[0.14em] uppercase text-foreground-400 hover:text-primary-400 transition-colors cursor-pointer"
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div className="md:col-span-3">
            <div className="eyebrow text-foreground-500">Fair Play</div>
            <p className="mt-4 text-xs leading-relaxed text-foreground-400">
              Intended for training, opening preparation, study of played games and games against engines. Respect the
              fair-play rules of the platform you play on.
            </p>
          </div>
        </div>

        <div className="mt-12 pt-6 border-t border-background-300/40 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">
          <span className="font-mono text-[10px] tracking-[0.2em] text-foreground-500 uppercase">
            © 2026 Chess Intelligence House
          </span>
          <span className="font-mono text-[10px] tracking-[0.2em] text-foreground-500 uppercase">
            Trained in silence
          </span>
        </div>
      </div>
    </footer>
  );
}