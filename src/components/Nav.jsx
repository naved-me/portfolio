import { motion, useScroll, useSpring } from "framer-motion";
import { profile } from "../data";

const links = [
  ["about", "About"],
  ["research", "Research"],
  ["projects", "Projects"],
  ["contact", "Contact"],
];

export default function Nav() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, { stiffness: 100, damping: 30 });

  return (
    <div className="fixed top-6 inset-x-0 z-50 flex justify-center px-6 pointer-events-none">
      <motion.header
        initial={{ y: -60, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1], delay: 0.2 }}
        className="glass-panel rounded-full pointer-events-auto px-6 py-3 flex items-center gap-8 relative overflow-hidden"
      >
        {/* progress bar: fills as you scroll down the page */}
        <motion.div
          style={{ scaleX }}
          className="absolute bottom-0 left-0 right-0 h-[2px] bg-gradient-to-r from-signal to-signal-alt origin-left opacity-80"
        />
        
        <a href="#top" className="font-mono text-sm tracking-widest text-white font-bold flex items-center gap-2">
          <span className="w-2 h-2 rounded-full bg-signal animate-pulse"></span>
          {profile.name.split(' ')[0].toUpperCase()}
        </a>
        
        <ul className="hidden md:flex gap-6 font-mono text-xs tracking-wide text-paper-dim">
          {links.map(([id, label]) => (
            <li key={id}>
              <a href={`#${id}`} className="hover:text-white transition-colors relative group py-2">
                {label}
                <span className="absolute -bottom-1 left-0 w-0 h-[1px] bg-signal transition-all group-hover:w-full"></span>
              </a>
            </li>
          ))}
        </ul>
        
        <a
          href={profile.resumeUrl}
          className="font-mono text-[10px] tracking-wider uppercase border border-line rounded-full px-4 py-2 hover:bg-white/10 hover:text-white hover:border-white/30 transition-all duration-300 ml-4"
        >
          Resume
        </a>
      </motion.header>
    </div>
  );
}
