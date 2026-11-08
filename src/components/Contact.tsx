import { person } from "@/data/profile";
import { Chevron } from "./Icons";

export function Contact() {
  return (
    <section id="contact" className="section tone-black contact" aria-labelledby="contact-title">
      <div className="frame">
        <h2 id="contact-title" className="contact-title">
          Let&rsquo;s talk.
        </h2>
        <p className="contact-lede">
          Hiring for HR operations, HRIS or people operations? Write to me directly. I reply within a day.
        </p>
        <div className="contact-actions">
          <a className="pill pill-large" href={`mailto:${person.email}`}>
            Email me
          </a>
          <a className="contact-mail" href={`mailto:${person.email}`}>
            {person.email}
          </a>
        </div>
        <ul className="contact-social">
          <li>
            <a className="chev-link" href={person.linkedin} target="_blank" rel="noopener noreferrer">
              LinkedIn <Chevron />
              <span className="sr-only"> (opens in a new tab)</span>
            </a>
          </li>
          <li>
            <a className="chev-link" href={person.resume} target="_blank" rel="noopener noreferrer">
              Résumé (PDF) <Chevron />
              <span className="sr-only"> (opens in a new tab)</span>
            </a>
          </li>
        </ul>
        <p className="contact-place">Based in {person.location}</p>
      </div>
    </section>
  );
}
