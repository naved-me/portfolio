import { profile } from "../data";

export default function Hero() {
  return (
    <section
      id="top"
      className="min-h-screen flex flex-col justify-center px-6 pt-24 max-w-5xl mx-auto"
    >
      <p className="font-mono text-signal text-sm tracking-widest mb-6">
        {profile.role.toUpperCase()} · {profile.location.toUpperCase()}
      </p>
      <h1 className="font-display text-[13vw] sm:text-[7rem] leading-[0.95] tracking-tight">
        {profile.name}
      </h1>
      <p className="font-body text-paper-dim text-lg sm:text-xl mt-8 max-w-xl">
        {profile.tagline}
      </p>
      <div className="mt-10 flex gap-4 font-mono text-sm">
        <a
          href="#research"
          className="rounded-full bg-signal text-ink px-6 py-3 font-medium hover:opacity-90 transition-opacity"
        >
          View research →
        </a>
        <a
          href="#contact"
          className="rounded-full border border-line px-6 py-3 hover:border-signal hover:text-signal transition-colors"
        >
          Get in touch
        </a>
      </div>
    </section>
  );
}
