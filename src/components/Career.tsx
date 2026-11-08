import { career } from "@/data/profile";

export function Career() {
  return (
    <ol className="career">
      {career.map((entry, i) => (
        <li key={entry.title} className={i === 0 ? "career-now" : undefined}>
          <p className="career-date">{entry.date}</p>
          <div className="career-body">
            <h3>{entry.title}</h3>
            <p className="career-place">
              <span className="career-date-inline">{entry.date} · </span>
              {entry.place}
            </p>
            {entry.points && (
              <ul className="career-points">
                {entry.points.map((point) => (
                  <li key={point}>{point}</li>
                ))}
              </ul>
            )}
          </div>
        </li>
      ))}
    </ol>
  );
}
