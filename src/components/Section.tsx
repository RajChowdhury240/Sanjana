/**
 * A full-bleed colour field. `tone` picks the field; the heading is one
 * two-part statement: `title` in full ink, `subtitle` in the field's grey.
 */
export function Section({
  id,
  tone = "white",
  title,
  subtitle,
  className,
  children,
}: {
  id: string;
  tone?: "white" | "grey" | "black" | "deep";
  title: React.ReactNode;
  subtitle?: React.ReactNode;
  className?: string;
  children: React.ReactNode;
}) {
  return (
    <section
      id={id}
      className={["section", `tone-${tone}`, className].filter(Boolean).join(" ")}
      aria-labelledby={`${id}-title`}
    >
      <div className="frame">
        <h2 id={`${id}-title`} className="section-title">
          {title}
          {subtitle && <span> {subtitle}</span>}
        </h2>
        {children}
      </div>
    </section>
  );
}
