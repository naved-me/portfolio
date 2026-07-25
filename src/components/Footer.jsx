import { profile } from "../data";

export default function Footer() {
  return (
    <footer className="px-6 py-10 border-t border-line">
      <div className="max-w-5xl mx-auto flex flex-col sm:flex-row justify-between items-center gap-4 font-mono text-xs text-paper-dim">
        <span>© {new Date().getFullYear()} {profile.name}</span>
        <a href="#top" className="hover:text-signal transition-colors">
          Back to top ↑
        </a>
      </div>
    </footer>
  );
}
