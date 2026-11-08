import { seeking } from "@/data/profile";

export function Seeking() {
  return (
    <dl className="specs">
      {seeking.map((g) => (
        <div key={g.name}>
          <dt>{g.name}</dt>
          {g.items.map((item) => (
            <dd key={item}>{item}</dd>
          ))}
        </div>
      ))}
    </dl>
  );
}
