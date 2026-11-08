"use client";

import { useEffect, useRef } from "react";
import { navItems, person } from "@/data/profile";
import { CloseIcon, MenuIcon } from "./Icons";

export function Navbar() {
  const menu = useRef<HTMLDetailsElement>(null);
  const trigger = useRef<HTMLElement>(null);

  useEffect(() => {
    function onKey(event: KeyboardEvent) {
      if (event.key === "Escape" && menu.current?.open) {
        menu.current.open = false;
        trigger.current?.focus();
      }
    }
    function onPointer(event: PointerEvent) {
      if (menu.current?.open && !menu.current.contains(event.target as Node)) menu.current.open = false;
    }
    window.addEventListener("keydown", onKey);
    window.addEventListener("pointerdown", onPointer);
    return () => {
      window.removeEventListener("keydown", onKey);
      window.removeEventListener("pointerdown", onPointer);
    };
  }, []);

  const close = () => {
    if (menu.current) menu.current.open = false;
  };

  return (
    <header className="site-header">
      <nav className="frame nav-inner" aria-label="Main navigation">
        <a href="#top" className="wordmark">
          {person.name}
        </a>
        <div className="nav-links">
          {navItems.map((item) => (
            <a key={item.href} href={item.href}>
              {item.label}
            </a>
          ))}
          <a href={person.resume} target="_blank" rel="noopener noreferrer">
            Résumé
          </a>
          <a className="nav-cta" href="#contact">
            Get in touch
          </a>
        </div>
        <details ref={menu} className="mobile-menu">
          <summary ref={trigger} aria-label="Menu">
            <MenuIcon className="icon-open" />
            <CloseIcon className="icon-close" />
          </summary>
          <div className="mobile-menu-panel">
            {navItems.map((item) => (
              <a key={item.href} href={item.href} onClick={close}>
                {item.label}
              </a>
            ))}
            <a href={person.resume} target="_blank" rel="noopener noreferrer" onClick={close}>
              Résumé
            </a>
            <a href="#contact" onClick={close}>
              Get in touch
            </a>
          </div>
        </details>
      </nav>
    </header>
  );
}
