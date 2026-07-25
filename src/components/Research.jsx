import { motion } from "framer-motion";
import { research } from "../data";
import SectionHeading from "./SectionHeading";
import Reveal from "./Reveal";

export default function Research() {
  return (
    <section id="research" className="px-6 py-28 max-w-5xl mx-auto">
      <Reveal>
        <SectionHeading index="02" label="Research & Patents" />
      </Reveal>
      <div className="grid sm:grid-cols-2 gap-6">
        {research.map((r, i) => (
          <Reveal key={i} delay={i * 0.1}>
            <motion.div
              whileHover={{ y: -6, borderColor: "var(--color-signal)" }}
              transition={{ duration: 0.25 }}
              className="border border-line rounded-2xl p-8 h-full"
            >
              <p className="font-mono text-xs text-amber tracking-wide mb-4">
                {r.tag.toUpperCase()}
              </p>
              <h3 className="font-display text-2xl leading-snug mb-3">{r.title}</h3>
              <p className="text-paper-dim leading-relaxed">{r.detail}</p>
              {r.venue && (
                <p className="font-mono text-xs text-paper-dim/70 mt-4">{r.venue}</p>
              )}
            </motion.div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
