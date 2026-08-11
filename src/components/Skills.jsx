import { motion } from "framer-motion";
import { skills, certifications } from "../data";
import SectionHeading from "./SectionHeading";
import Reveal from "./Reveal";

export default function Skills() {
  return (
    <section id="skills" className="px-6 py-28 max-w-5xl mx-auto relative">
      {/* Decorative background glow */}
      <div className="absolute top-1/2 right-0 -translate-y-1/2 w-[60vw] h-[60vw] max-w-lg max-h-lg bg-signal-alt/5 blur-[100px] rounded-full pointer-events-none" />

      <Reveal>
        <SectionHeading index="04" label="Skills & Certifications" />
      </Reveal>
      
      <div className="grid sm:grid-cols-2 gap-16 relative z-10">
        <Reveal delay={0.05} className="space-y-10">
          {Object.entries(skills).map(([group, items], groupIndex) => (
            <div key={group}>
              <p className="font-mono text-xs text-signal tracking-widest mb-4 font-semibold">
                {group.toUpperCase()}
              </p>
              <div className="flex flex-wrap gap-3">
                {items.map((s, i) => (
                  <motion.span
                    key={s}
                    animate={{ y: [0, -4, 0] }}
                    transition={{ 
                      duration: 3, 
                      repeat: Infinity, 
                      ease: "easeInOut",
                      delay: (groupIndex * 0.2) + (i * 0.1) 
                    }}
                    whileHover={{ scale: 1.1, backgroundColor: "rgba(45,212,191,0.15)", borderColor: "rgba(45,212,191,0.5)" }}
                    className="text-sm text-paper border border-line/50 rounded-full px-4 py-2 inline-block glass-panel cursor-default shadow-sm transition-colors duration-300"
                  >
                    {s}
                  </motion.span>
                ))}
              </div>
            </div>
          ))}
        </Reveal>
        
        <Reveal delay={0.15}>
          <p className="font-mono text-xs text-amber tracking-widest mb-6 font-semibold">
            CERTIFICATIONS
          </p>
          <ul className="space-y-4">
            {certifications.map((c, i) => (
              <motion.li 
                key={c.name} 
                whileHover={{ x: 6, backgroundColor: "rgba(255,255,255,0.03)" }}
                className="flex flex-col sm:flex-row sm:justify-between sm:items-center border border-line/30 rounded-xl p-4 glass-panel transition-all"
              >
                <span className="text-paper-dim text-sm sm:text-base font-medium leading-snug mb-2 sm:mb-0 max-w-sm">
                  {c.name}
                </span>
                <span className="font-mono text-[10px] sm:text-xs text-signal/80 shrink-0 bg-signal/10 px-3 py-1 rounded-full uppercase tracking-wider">
                  {c.issuer}
                </span>
              </motion.li>
            ))}
          </ul>
        </Reveal>
      </div>
    </section>
  );
}
