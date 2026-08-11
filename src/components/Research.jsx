import { motion } from "framer-motion";
import { research } from "../data";
import SectionHeading from "./SectionHeading";
import Reveal from "./Reveal";
import { useState } from "react";

function ResearchCard({ r }) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.div
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
      whileHover={{ y: -8, scale: 1.02 }}
      transition={{ type: "spring", stiffness: 300, damping: 20 }}
      className="relative h-full rounded-2xl glass-panel p-8 overflow-hidden group cursor-pointer"
    >
      <div 
        className="absolute inset-0 bg-gradient-to-br from-signal/10 to-signal-alt/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" 
      />
      <div className="absolute top-0 left-0 w-full h-[2px] bg-gradient-to-r from-signal to-signal-alt transform origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-500" />
      
      <div className="relative z-10">
        <p className="font-mono text-[10px] sm:text-xs text-signal tracking-widest mb-4 font-semibold uppercase bg-signal/10 inline-block px-3 py-1 rounded-full">
          {r.tag}
        </p>
        <h3 className="font-display text-xl sm:text-2xl leading-snug mb-3 group-hover:text-white transition-colors">
          {r.title}
        </h3>
        <p className="text-paper-dim leading-relaxed text-sm sm:text-base">
          {r.detail}
        </p>
        {r.venue && (
          <p className="font-mono text-[10px] sm:text-xs text-paper-dim/70 mt-6 border-t border-line/50 pt-4">
            {r.venue}
          </p>
        )}
      </div>
      
      {/* Glow effect that follows hover state */}
      <motion.div 
        className="absolute bottom-0 right-0 w-32 h-32 bg-signal/20 rounded-full blur-[50px] pointer-events-none"
        animate={{
          scale: isHovered ? 1.5 : 0.8,
          opacity: isHovered ? 1 : 0
        }}
        transition={{ duration: 0.5 }}
      />
    </motion.div>
  );
}

export default function Research() {
  return (
    <section id="research" className="px-6 py-28 max-w-5xl mx-auto relative">
      <Reveal>
        <SectionHeading index="02" label="Research & Patents" />
      </Reveal>
      <div className="grid sm:grid-cols-2 gap-8 relative z-10">
        {research.map((r, i) => (
          <Reveal key={i} delay={i * 0.1} className="h-full">
            <ResearchCard r={r} />
          </Reveal>
        ))}
      </div>
    </section>
  );
}
