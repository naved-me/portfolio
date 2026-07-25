import { projects } from "../data";
import SectionHeading from "./SectionHeading";

export default function Projects() {
  return (
    <section id="projects" className="px-6 py-28 max-w-5xl mx-auto">
      <SectionHeading index="03" label="Projects" />
      <div className="space-y-6">
        {projects.map((p, i) => (
          <div
            key={i}
            className="group border-b border-line pb-6 flex flex-col sm:flex-row sm:items-baseline sm:justify-between gap-2"
          >
            <div>
              <h3 className="font-display text-2xl group-hover:text-signal transition-colors">
                {p.title}
              </h3>
              <p className="text-paper-dim mt-2 max-w-xl">{p.detail}</p>
              <div className="flex gap-2 mt-3 flex-wrap">
                {p.stack.map((s) => (
                  <span
                    key={s}
                    className="font-mono text-[11px] tracking-wide text-paper-dim border border-line rounded-full px-2.5 py-1"
                  >
                    {s}
                  </span>
                ))}
              </div>
            </div>
            <div className="flex gap-4 font-mono text-xs shrink-0">
              {p.github && (
                <a href={p.github} className="hover:text-signal transition-colors">
                  GitHub →
                </a>
              )}
              {p.demo && (
                <a href={p.demo} className="hover:text-signal transition-colors">
                  Demo →
                </a>
              )}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
