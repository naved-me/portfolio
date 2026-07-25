import { profile } from "../data";

const links = [
  ["about", "About"],
  ["research", "Research"],
  ["projects", "Projects"],
  ["contact", "Contact"],
];

export default function Nav() {
  return (
    <header className="fixed top-0 inset-x-0 z-50 backdrop-blur-md bg-ink/70 border-b border-line">
      <nav className="max-w-5xl mx-auto flex items-center justify-between px-6 py-4">
        <a href="#top" className="font-mono text-sm tracking-widest text-signal">
          {profile.name.toUpperCase()}
        </a>
        <ul className="hidden sm:flex gap-8 font-mono text-xs tracking-wide text-paper-dim">
          {links.map(([id, label]) => (
            <li key={id}>
              <a href={`#${id}`} className="hover:text-signal transition-colors">
                {label}
              </a>
            </li>
          ))}
        </ul>
        <a
          href={profile.resumeUrl}
          className="font-mono text-xs border border-line rounded-full px-4 py-1.5 hover:border-signal hover:text-signal transition-colors"
        >
          Resume
        </a>
      </nav>
    </header>
  );
}
