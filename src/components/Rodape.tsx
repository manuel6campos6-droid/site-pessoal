"use client";

import { perfil } from "@/data/profile";
import { useIdioma } from "@/lib/idioma";

export function Rodape() {
  const { idioma } = useIdioma();
  return (
    <footer className="border-t border-night-rule bg-night py-10 text-night-ink-2">
      <div className="shell flex flex-col gap-3 md:flex-row md:items-center md:justify-between">
        <span className="mono-label">
          © {new Date().getFullYear()} {perfil.name}
        </span>
        <a href="#top" className="mono-label link-risca w-fit">
          {idioma === "pt" ? "Voltar ao topo ↑" : "Back to top ↑"}
        </a>
      </div>
    </footer>
  );
}
