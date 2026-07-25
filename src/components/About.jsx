import { about, journey } from "../data";
import SectionHeading from "./SectionHeading";

export default function About() {
  return (
    <section id="about" className="px-6 py-28 max-w-5xl mx-auto">
      <SectionHeading index="01" label="About" />
      <p className="font-body text-paper-dim text-lg max-w-2xl leading-relaxed mb-16">
        {about}
      </p>

      <div className="border-l border-line pl-8 space-y-10">
        {journey.map((j, i) => (
          <div key={i} className="relative">
            <span className="absolute -left-[calc(2rem+1px)] top-1 font-mono text-xs text-signal">
              {j.year}
            </span>
            <h3 className="font-display text-2xl">{j.title}</h3>
            {j.place && (
              <p className="font-mono text-xs text-paper-dim mt-1 tracking-wide">
                {j.place.toUpperCase()}
              </p>
            )}
            <p className="text-paper-dim mt-2 max-w-xl">{j.detail}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
