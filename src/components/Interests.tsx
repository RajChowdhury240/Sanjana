import { interests } from "@/data/profile";

export function Interests() {
  return (
    <dl className="specs specs-four">
      {interests.map((i) => (
        <div key={i.name}>
          <dt>{i.name}</dt>
          <dd className="spec-text">{i.text}</dd>
        </div>
      ))}
    </dl>
  );
}
