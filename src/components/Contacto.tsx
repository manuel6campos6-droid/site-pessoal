"use client";

import { perfil } from "@/data/profile";
import { useIdioma } from "@/lib/idioma";
import { t } from "@/lib/texto";

export function Contacto() {
  const { idioma } = useIdioma();
  const semLinks = perfil.links.length === 0 && !perfil.email;

  return (
    <div>
      <p className="display-xl">{idioma === "pt" ? "Vamos falar." : "Let's talk."}</p>

      <div className="mt-14 flex flex-col gap-4 md:mt-20">
        {perfil.email ? (
          <a
            href={`mailto:${perfil.email}`}
            className="display-md w-fit border-b border-night-rule pb-1 transition-colors duration-500 hover:border-accent hover:text-accent"
          >
            {perfil.email}
          </a>
        ) : (
          <span className="marcador">[EMAIL]</span>
        )}

        {perfil.links.length > 0 ? (
          <ul className="mt-4 flex flex-wrap gap-x-8 gap-y-3">
            {perfil.links.map((l) => (
              <li key={l.href}>
                <a
                  href={l.href}
                  target="_blank"
                  rel="noreferrer noopener"
                  className="mono-label border-b border-night-rule pb-1 transition-colors duration-500 hover:border-accent hover:text-accent"
                >
                  {t(l.label, idioma)} ↗
                </a>
              </li>
            ))}
          </ul>
        ) : (
          <div className="mt-4 flex flex-wrap gap-x-8 gap-y-3">
            <span className="marcador">[LINKEDIN]</span>
            <span className="marcador">[OTHER LINKS]</span>
          </div>
        )}
      </div>

      {semLinks ? (
        <p className="mt-10 max-w-md text-sm text-night-ink-2">
          {idioma === "pt"
            ? "Os contactos aparecem aqui quando existirem. Nada é inventado."
            : "Contact details appear here once provided. Nothing is invented."}
        </p>
      ) : null}
    </div>
  );
}
