import { certifications } from "@/data/profile";

export function Certifications() {
  return (
    <>
      <p className="record-lede">
        Short programmes taken alongside the degrees, from employability and digital marketing to
        intercultural competence. Also a participant in the 35th Industrial India Trade Fair, run by the
        Bengal National Chamber of Commerce and Industry.
      </p>
      <ul className="cert-list">
        {certifications.map((c) => (
          <li key={c.title}>
            <span className="badge">{c.org}</span>
            <span className="cert-title">{c.title}</span>
            <span className="cert-desc">{c.desc}</span>
          </li>
        ))}
      </ul>
    </>
  );
}
