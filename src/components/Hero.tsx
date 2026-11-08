import Image from "next/image";
import { person } from "@/data/profile";
import { Chevron } from "./Icons";

export function Hero() {
  return (
    <section id="top" className="hero" aria-labelledby="hero-title">
      <div className="frame">
        <div className="hero-copy">
          <h1 id="hero-title" className="hero-title">
            <span className="hero-line">I keep people data right.</span>{" "}
            <span className="hero-line hero-line-2">So people decisions feel easy.</span>
          </h1>
          <p className="hero-who">
            <strong>{person.name}</strong> — Human Capital Operations at PwC AC, with an MBA in Human
            Resources.
          </p>
          <div className="hero-actions">
            <a className="pill" href={person.resume} target="_blank" rel="noopener noreferrer">
              Download résumé
            </a>
            <a className="chev-link" href="#contact">
              Get in touch <Chevron />
            </a>
          </div>
        </div>

        <div className="highlights" aria-label="Highlights">
          <figure className="tile tile-photo">
            <Image
              src="/Sanjana.jpg"
              alt="Portrait of Sanjana Karfa"
              fill
              preload
              sizes="(max-width: 640px) 100vw, (max-width: 900px) 100vw, 680px"
              className="photo"
            />
            <figcaption>
              <span className="photo-name">{person.name}</span>
              <span className="photo-meta">Open to full-time HR roles · on-site, hybrid or remote</span>
            </figcaption>
          </figure>
          <a className="tile tile-deep" href="#career">
            <span className="tile-num">2+</span>
            <span className="tile-text">
              years in Human Capital Operations at PwC AC, across HRIS, onboarding audits and RCSA.
            </span>
            <span className="chev-link">
              The career <Chevron />
            </span>
          </a>
          <a className="tile tile-grey" href="#education">
            <span className="tile-num">8.30</span>
            <span className="tile-text">CGPA in an MBA in Human Resources, The University of Burdwan.</span>
            <span className="chev-link">
              Education <Chevron />
            </span>
          </a>
        </div>
      </div>
    </section>
  );
}
