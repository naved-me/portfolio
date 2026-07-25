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
  return (
    <motion.section
      id="top"
      variants={container}
      initial="hidden"
      animate="show"
      className="min-h-screen flex flex-col justify-center px-6 pt-24 max-w-5xl mx-auto"
    >
      <motion.p variants={item} className="font-mono text-signal text-sm tracking-widest mb-6">
        {profile.role.toUpperCase()} · {profile.location.toUpperCase()}
      </motion.p>

      <motion.h1
        variants={item}
        className="font-display text-[13vw] sm:text-[7rem] leading-[0.95] tracking-tight"
      >
        {profile.name}
      </motion.h1>

      <motion.p
        variants={item}
        className="font-body text-paper-dim text-lg sm:text-xl mt-8 max-w-xl"
      >
        {profile.tagline}
      </motion.p>

      <motion.div variants={item} className="mt-10 flex gap-4 font-mono text-sm">
        <motion.a
          whileHover={{ scale: 1.04 }}
          whileTap={{ scale: 0.97 }}
          href="#research"
          className="rounded-full bg-signal text-ink px-6 py-3 font-medium"
        >
          View research →
        </motion.a>
        <motion.a
          whileHover={{ scale: 1.04, borderColor: "var(--color-signal)" }}
          whileTap={{ scale: 0.97 }}
          href="#contact"
          className="rounded-full border border-line px-6 py-3 hover:text-signal transition-colors"
        >
          Get in touch
        </motion.a>
      </motion.div>

      <motion.div
        variants={item}
        className="mt-20 font-mono text-xs text-paper-dim/60 flex items-center gap-2"
      >
        <motion.span
          animate={{ y: [0, 6, 0] }}
          transition={{ duration: 1.6, repeat: Infinity, ease: "easeInOut" }}
        >
          ↓
        </motion.span>
        scroll
      </motion.div>
    </motion.section>
  );
}
