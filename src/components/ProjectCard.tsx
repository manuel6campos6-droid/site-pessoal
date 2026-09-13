"use client";

import Link from "next/link";
import type { Projecto } from "@/data/types";
import { useIdioma } from "@/lib/idioma";
import { t, temConteudo } from "@/lib/texto";
import { Figura } from "./Figura";

export function ProjectCard({ projecto }: { projecto: Projecto }) {
  const { idioma } = useIdioma();
  const capa = projecto.cover ?? projecto.images?.[0];

  return (
    <Link href={`/projects/${projecto.slug}`} className="group block">
      {/* Capturas de telemóvel são verticais e não cabem num molde 4/3: a
          imagem limita-se em largura para não passar de um ecrã de altura.
          Sem capa, a caixa encolhe a uma faixa em vez de ocupar a página
          toda à volta de um marcador. */}
      <div className={`overflow-hidden rounded-lg ${capa ? "max-w-56" : ""}`}>
        <Figura
          imagem={capa}
          ratio={capa ? "1320/2868" : "5/2"}
          marcador="[COVER]"
        />
      </div>
      <div className="mt-5 flex items-baseline justify-between gap-4">
        <h3 className="display-md transition-colors duration-500 group-hover:text-accent">
          {projecto.name}
        </h3>
        {projecto.period ? (
          <span className="mono-label num-tabular shrink-0 text-ink-3">
            {projecto.period}
          </span>
        ) : null}
      </div>
      {temConteudo(projecto.tagline) ? (
        <p className="mt-2 max-w-md text-ink-2">{t(projecto.tagline, idioma)}</p>
      ) : (
        <p className="marcador mt-2">[ADD CONTENT]</p>
      )}
      {projecto.link ? (
        <p className="mono-label mt-2 text-ink-3">{projecto.link.href.replace(/^https?:\/\//, "")}</p>
      ) : null}
    </Link>
  );
}
