export default function SectionHeading({ index, label }) {
  return (
    <div className="flex items-baseline gap-4 mb-12">
      <span className="font-mono text-signal text-sm">[{index}]</span>
      <h2 className="font-display text-4xl sm:text-5xl">{label}</h2>
      <span className="flex-1 h-px bg-line ml-4" />
    </div>
  );
}
