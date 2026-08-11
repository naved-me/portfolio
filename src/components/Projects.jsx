import { motion } from "framer-motion";
import { projects } from "../data";
import SectionHeading from "./SectionHeading";
import Reveal from "./Reveal";
import { useState } from "react";

function ProjectRow({ p }) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.div
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
      className="group relative border-b border-line pb-6 mb-6 flex flex-col sm:flex-row sm:items-baseline sm:justify-between gap-4 p-4 rounded-xl transition-colors duration-500 hover:bg-white/[0.02]"
    >
      <div className="absolute top-0 left-0 w-[2px] h-0 bg-gradient-to-b from-signal to-signal-alt group-hover:h-full transition-all duration-500 rounded-full" />
      
      <div className="pl-4 relative z-10 flex-1">
        <h3 className="font-display text-2xl group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-signal group-hover:to-signal-alt transition-all duration-300 transform group-hover:translate-x-2 inline-block">
          {p.title}
        </h3>
        <p className="text-paper-dim mt-3 max-w-2xl leading-relaxed text-sm sm:text-base">
          {p.detail}
        </p>
        <div className="flex gap-2 mt-4 flex-wrap">
          {p.stack.map((s) => (
            <span
              key={s}
              className="font-mono text-[10px] sm:text-[11px] tracking-wide text-paper-dim border border-line/40 rounded-full px-3 py-1 bg-ink-soft/50"
            >
              {s}
            </span>
          ))}
        </div>
      </div>
      
      <div className="flex gap-6 font-mono text-xs shrink-0 pl-4 sm:pl-0 mt-4 sm:mt-0 relative z-10">
        {p.github && (
          <motion.a 
            whileHover={{ y: -2 }}
            href={p.github} 
            className="hover:text-signal transition-colors flex items-center gap-2"
          >
            GitHub <span className="text-[10px]">↗</span>
          </motion.a>
        )}
        {p.demo && (
          <motion.a 
            whileHover={{ y: -2 }}
            href={p.demo} 
            className="hover:text-signal transition-colors flex items-center gap-2"
          >
            Demo <span className="text-[10px]">↗</span>
          </motion.a>
        )}
      </div>
    </motion.div>
  );
}

export default function Projects() {
  return (
    <section id="projects" className="px-6 py-28 max-w-5xl mx-auto relative">
      <Reveal>
        <SectionHeading index="03" label="Projects" />
      </Reveal>
      <div className="space-y-4">
        {projects.map((p, i) => (
          <Reveal key={i} delay={i * 0.06}>
            <ProjectRow p={p} />
          </Reveal>
        ))}
      </div>
    </section>
  );
}
