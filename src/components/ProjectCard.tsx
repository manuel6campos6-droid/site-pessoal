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
      <div className="overflow-hidden rounded-lg">
        <Figura imagem={capa} ratio="4/3" marcador="[COVER]" />
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
        <p className="mono-label mt-2 text-accent">[ADD CONTENT]</p>
      )}
    </Link>
  );
}
