import { currentInsight } from "@/mocks/chess";

export default function Masthead() {
  return (
    <section id="top" className="relative w-full pt-36 pb-14">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-end">
        <div className="lg:col-span-8 animate-fade-up">
          <div className="flex items-center gap-3 text-foreground-400">
            <i className="ri-bookmark-3-line text-sm" />
            <span className="eyebrow">A Private Study in Chess</span>
          </div>

          <h1 className="mt-7 font-heading text-foreground-950 leading-[0.94] text-5xl sm:text-6xl lg:text-7xl xl:text-8xl">
            The board is old.
            <br />
            <span className="italic text-primary-500">The intelligence is not.</span>
          </h1>

          <p className="mt-8 max-w-xl text-foreground-400 text-sm leading-relaxed">
            Inherited knowledge, measured precisely. A quiet instrument for the serious study of position — it observes,
            waits, and speaks only when it matters.
          </p>
        </div>

        <div className="lg:col-span-4 flex lg:justify-end animate-fade-up">
          <div className="w-full lg:w-auto lg:text-right border-l lg:border-l-0 lg:border-r border-background-300/50 pl-5 lg:pl-0 lg:pr-5">
            <div className="eyebrow text-foreground-500">Session</div>
            <div className="mt-3 font-heading text-2xl text-foreground-900">23 Set 2026</div>
            <div className="mt-1 font-mono text-[11px] tracking-[0.2em] text-foreground-500">ARCHIVE / 0184</div>
            <div className="mt-5 font-mono text-[11px] leading-relaxed text-foreground-400 max-w-[16rem] lg:ml-auto">
              {currentInsight.message}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}