import { motion } from "framer-motion";
import { profile } from "../data";
import SectionHeading from "./SectionHeading";
import Reveal from "./Reveal";

export default function Contact() {
  return (
    <section id="contact" className="px-6 py-28 max-w-5xl mx-auto">
      <Reveal>
        <SectionHeading index="05" label="Contact" />
      </Reveal>
      <Reveal delay={0.1}>
        <p className="font-body text-paper-dim text-lg max-w-xl mb-10">
          Open to research collaborations, ML engineering roles, and interesting problems.
        </p>
      </Reveal>
      <Reveal delay={0.2} className="flex flex-col sm:flex-row gap-4 font-mono text-sm">
        <motion.a
          whileHover={{ scale: 1.03 }}
          whileTap={{ scale: 0.97 }}
          href={`mailto:${profile.email}`}
          className="rounded-full bg-signal text-ink px-6 py-3 font-medium text-center"
        >
          {profile.email}
        </motion.a>
        <motion.a
          whileHover={{ scale: 1.03, borderColor: "var(--color-signal)" }}
          whileTap={{ scale: 0.97 }}
          href={profile.github}
          className="rounded-full border border-line px-6 py-3 hover:text-signal transition-colors text-center"
        >
          GitHub
        </motion.a>
        <motion.a
          whileHover={{ scale: 1.03, borderColor: "var(--color-signal)" }}
          whileTap={{ scale: 0.97 }}
          href={profile.linkedin}
          className="rounded-full border border-line px-6 py-3 hover:text-signal transition-colors text-center"
        >
          LinkedIn
        </motion.a>
      </Reveal>
    </section>
  );
}
