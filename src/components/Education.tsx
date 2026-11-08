import { education } from "@/data/profile";

export function Education() {
  return (
    <ul className="edu">
      {education.map((e, i) => (
        <li key={e.name} className={i === 0 ? "tile tile-black edu-feature" : "tile tile-grey"}>
          <span className="edu-score">
            {e.score}
            {e.unit && <span className="edu-unit"> {e.unit}</span>}
          </span>
          <span className="edu-name">{e.name}</span>
          <span className="edu-meta">
            {e.school} · {e.years}
          </span>
          {e.note && <span className="edu-note">{e.note}</span>}
        </li>
      ))}
    </ul>
  );
}
