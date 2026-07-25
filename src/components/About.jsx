import { motion } from "framer-motion";
import { about, journey } from "../data";
import SectionHeading from "./SectionHeading";
import Reveal from "./Reveal";

export default function About() {
  return (
    <section id="about" className="px-6 py-28 max-w-5xl mx-auto">
      <Reveal>
        <SectionHeading index="01" label="About" />
      </Reveal>

      <Reveal delay={0.1}>
        <p className="font-body text-paper-dim text-lg max-w-2xl leading-relaxed mb-16">
          {about}
        </p>
      </Reveal>

      <div className="border-l border-line pl-8 space-y-10">
        {journey.map((j, i) => (
          <Reveal key={i} delay={i * 0.08} className="relative">
            <motion.span
              whileInView={{ scale: [0.5, 1] }}
              viewport={{ once: true }}
              transition={{ duration: 0.4 }}
              className="absolute -left-[calc(2rem+1px)] top-1 font-mono text-xs text-signal"
            >
              {j.year}
            </motion.span>
            <h3 className="font-display text-2xl">{j.title}</h3>
            {j.place && (
              <p className="font-mono text-xs text-paper-dim mt-1 tracking-wide">
                {j.place.toUpperCase()}
              </p>
            )}
            <p className="text-paper-dim mt-2 max-w-xl">{j.detail}</p>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
