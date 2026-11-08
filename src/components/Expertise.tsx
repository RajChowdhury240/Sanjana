import { disciplines, toolkit } from "@/data/profile";

export function Expertise() {
  return (
    <>
      <ul className="disciplines">
        {disciplines.map((d, i) => (
          <li key={d.title} className="discipline">
            <span className="discipline-num">{String(i + 1).padStart(2, "0")}</span>
            <h3>{d.title}</h3>
            <p>{d.desc}</p>
          </li>
        ))}
      </ul>
      <dl className="specs specs-dark">
        {toolkit.map((g) => (
          <div key={g.name}>
            <dt>{g.name}</dt>
            {g.items.map((item) => (
              <dd key={item}>{item}</dd>
            ))}
          </div>
        ))}
      </dl>
    </>
  );
}
