import { research } from "../data";
import SectionHeading from "./SectionHeading";

export default function Research() {
  return (
    <section id="research" className="px-6 py-28 max-w-5xl mx-auto">
      <SectionHeading index="02" label="Research & Patents" />
      <div className="grid sm:grid-cols-2 gap-6">
        {research.map((r, i) => (
          <div
            key={i}
            className="border border-line rounded-2xl p-8 hover:border-signal/50 transition-colors"
          >
            <p className="font-mono text-xs text-amber tracking-wide mb-4">
              {r.tag.toUpperCase()}
            </p>
            <h3 className="font-display text-2xl leading-snug mb-3">{r.title}</h3>
            <p className="text-paper-dim leading-relaxed">{r.detail}</p>
            {r.venue && (
              <p className="font-mono text-xs text-paper-dim/70 mt-4">{r.venue}</p>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}
