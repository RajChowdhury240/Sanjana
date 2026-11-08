import { person } from "@/data/profile";

export function Footer() {
  return (
    <footer className="site-footer">
      <div className="frame footer-row">
        <p>
          Copyright © {new Date().getFullYear()} {person.name}.
        </p>
        <a href="#top">Back to top</a>
      </div>
    </footer>
  );
}
