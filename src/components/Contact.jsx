import { profile } from "../data";
import SectionHeading from "./SectionHeading";

export default function Contact() {
  return (
    <section id="contact" className="px-6 py-28 max-w-5xl mx-auto">
      <SectionHeading index="05" label="Contact" />
      <p className="font-body text-paper-dim text-lg max-w-xl mb-10">
        Open to research collaborations, ML engineering roles, and interesting problems.
      </p>
      <div className="flex flex-col sm:flex-row gap-4 font-mono text-sm">
        <a
          href={`mailto:${profile.email}`}
          className="rounded-full bg-signal text-ink px-6 py-3 font-medium hover:opacity-90 transition-opacity text-center"
        >
          {profile.email}
        </a>
        <a
          href={profile.github}
          className="rounded-full border border-line px-6 py-3 hover:border-signal hover:text-signal transition-colors text-center"
        >
          GitHub
        </a>
        <a
          href={profile.linkedin}
          className="rounded-full border border-line px-6 py-3 hover:border-signal hover:text-signal transition-colors text-center"
        >
          LinkedIn
        </a>
      </div>
    </section>
  );
}
