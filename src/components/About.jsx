import { motion } from "framer-motion";
import { about, journey } from "../data";
import SectionHeading from "./SectionHeading";
import Reveal from "./Reveal";

export default function About() {
  return (
    <section id="about" className="px-6 py-28 max-w-5xl mx-auto relative">
      <Reveal>
        <SectionHeading index="01" label="About" />
      </Reveal>

      <Reveal delay={0.1}>
        <p className="font-body text-paper-dim text-lg sm:text-xl max-w-3xl leading-loose mb-20 text-justify sm:text-left">
          {about}
        </p>
      </Reveal>

      <div className="relative pl-8 space-y-12">
        {/* Animated gradient border for timeline */}
        <div className="absolute top-0 bottom-0 left-0 w-[2px] bg-line">
          <motion.div 
            className="w-full bg-gradient-to-b from-signal to-signal-alt origin-top"
            initial={{ scaleY: 0 }}
            whileInView={{ scaleY: 1 }}
            viewport={{ once: true, amount: 0.1 }}
            transition={{ duration: 1.5, ease: "easeOut" }}
            style={{ height: "100%" }}
          />
        </div>

        {journey.map((j, i) => (
          <Reveal key={i} delay={i * 0.08} className="relative group">
            <motion.div
              whileInView={{ scale: [0, 1.2, 1] }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="absolute -left-[calc(2rem+5px)] top-1 w-3 h-3 rounded-full bg-signal shadow-[0_0_15px_rgba(45,212,191,0.6)] z-10"
            />
            
            <div className="glass-panel p-6 sm:p-8 rounded-2xl transform transition-all duration-300 group-hover:-translate-y-1 group-hover:shadow-[0_10px_30px_rgba(0,0,0,0.3)]">
              <span className="font-mono text-xs sm:text-sm text-signal font-bold tracking-widest inline-block mb-2">
                {j.year}
              </span>
              <h3 className="font-display text-2xl sm:text-3xl mb-2 text-paper group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-signal group-hover:to-signal-alt transition-colors">
                {j.title}
              </h3>
              {j.place && (
                <p className="font-mono text-[10px] sm:text-xs text-paper-dim/80 mt-1 tracking-wider uppercase">
                  {j.place}
                </p>
              )}
              <p className="text-paper-dim mt-4 max-w-2xl leading-relaxed text-sm sm:text-base">
                {j.detail}
              </p>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
