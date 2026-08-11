import { motion } from "framer-motion";
import { profile } from "../data";

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.12, delayChildren: 0.1 } },
};

const item = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] } },
};

export default function Hero() {
  const nameChars = profile.name.split("");
  
  return (
    <motion.section
      id="top"
      variants={container}
      initial="hidden"
      animate="show"
      className="min-h-screen flex flex-col justify-center px-6 pt-24 max-w-5xl mx-auto relative"
    >
      {/* Decorative background blur */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80vw] h-[80vw] max-w-2xl max-h-2xl bg-signal/5 blur-[120px] rounded-full pointer-events-none" />

      <motion.div variants={item} className="flex items-center gap-3 mb-6 relative z-10">
        <span className="w-8 h-[1px] bg-signal"></span>
        <p className="font-mono text-signal text-xs sm:text-sm tracking-widest">
          {profile.role.toUpperCase()}
        </p>
      </motion.div>

      <h1 className="font-display text-[13vw] sm:text-[7rem] leading-[0.95] tracking-tight relative z-10 flex flex-wrap">
        {nameChars.map((char, i) => (
          <motion.span
            key={i}
            variants={{
              hidden: { opacity: 0, y: 40, rotate: -5 },
              show: { opacity: 1, y: 0, rotate: 0, transition: { type: "spring", damping: 12, stiffness: 100 } }
            }}
            className={char === " " ? "w-[4vw] sm:w-[2rem]" : "text-gradient"}
          >
            {char}
          </motion.span>
        ))}
      </h1>

      <motion.p
        variants={item}
        className="font-body text-paper-dim text-lg sm:text-xl mt-8 max-w-xl leading-relaxed relative z-10"
      >
        {profile.tagline}
      </motion.p>

      <motion.div variants={item} className="mt-12 flex flex-wrap gap-4 font-mono text-sm relative z-10">
        <motion.a
          whileHover={{ scale: 1.05, boxShadow: "0 0 20px rgba(45, 212, 191, 0.4)" }}
          whileTap={{ scale: 0.95 }}
          href="#research"
          className="rounded-full bg-signal text-ink px-8 py-3.5 font-bold tracking-wide"
        >
          View research →
        </motion.a>
        <motion.a
          whileHover={{ scale: 1.05, backgroundColor: "rgba(255,255,255,0.05)" }}
          whileTap={{ scale: 0.95 }}
          href="#contact"
          className="rounded-full border border-line glass-panel px-8 py-3.5 hover:text-white transition-colors"
        >
          Get in touch
        </motion.a>
      </motion.div>

      <motion.div
        variants={item}
        className="absolute bottom-10 left-6 font-mono text-[10px] uppercase tracking-widest text-paper-dim flex flex-col items-center gap-4"
      >
        <span className="origin-left rotate-90 translate-y-6">Scroll</span>
        <motion.div 
          className="w-[1px] h-12 bg-line overflow-hidden mt-6"
        >
          <motion.div 
            className="w-full h-full bg-signal"
            animate={{ y: ["-100%", "100%"] }}
            transition={{ duration: 1.5, repeat: Infinity, ease: "linear" }}
          />
        </motion.div>
      </motion.div>
    </motion.section>
  );
}
