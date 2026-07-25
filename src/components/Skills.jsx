import { skills, certifications } from "../data";
import SectionHeading from "./SectionHeading";

export default function Skills() {
  return (
    <section id="skills" className="px-6 py-28 max-w-5xl mx-auto">
      <SectionHeading index="04" label="Skills & Certifications" />
      <div className="grid sm:grid-cols-2 gap-12">
        <div className="space-y-8">
          {Object.entries(skills).map(([group, items]) => (
            <div key={group}>
              <p className="font-mono text-xs text-signal tracking-wide mb-3">
                {group.toUpperCase()}
              </p>
              <div className="flex flex-wrap gap-2">
                {items.map((s) => (
                  <span
                    key={s}
                    className="text-sm text-paper-dim border border-line rounded-full px-3 py-1.5"
                  >
                    {s}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
        <div>
          <p className="font-mono text-xs text-amber tracking-wide mb-3">CERTIFICATIONS</p>
          <ul className="space-y-3">
            {certifications.map((c) => (
              <li key={c.name} className="flex justify-between border-b border-line pb-3">
                <span>{c.name}</span>
                <span className="font-mono text-xs text-paper-dim shrink-0 ml-4">
                  {c.issuer}
                </span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
