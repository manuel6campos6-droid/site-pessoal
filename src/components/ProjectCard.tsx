"use client";

import Link from "next/link";
import type { Projecto } from "@/data/types";
import { useIdioma } from "@/lib/idioma";
import { t, temConteudo } from "@/lib/texto";
import { Figura } from "./Figura";

/** Cartão de projecto: um bloco cheio, com o texto em cima e a imagem em
 *  baixo. A Apple usa esta forma em toda a parte, e é o fundo do cartão que o
 *  separa da página, sem risca nem sombra a desenhá-lo. */
export function ProjectCard({ projecto }: { projecto: Projecto }) {
  const { idioma } = useIdioma();
  const capa = projecto.cover ?? projecto.images?.[0];

  return (
    <Link
      href={`/projects/${projecto.slug}`}
      className="cartao group flex h-full flex-col p-8 transition-transform duration-500 hover:-translate-y-1 md:p-10"
    >
      <div className="flex items-baseline justify-between gap-4">
        <h3 className="display-md transition-colors duration-300 group-hover:text-accent">
          {projecto.name}
        </h3>
        {projecto.period ? (
          <span className="dado shrink-0 text-ink-3">{projecto.period}</span>
        ) : null}
      </div>

      {temConteudo(projecto.tagline) ? (
        <p className="prose-body mt-3 max-w-md">{t(projecto.tagline, idioma)}</p>
      ) : (
        <p className="marcador mt-3">[ADD CONTENT]</p>
      )}

      <p className="ligacao-azul mt-4 text-sm">
        {idioma === "pt" ? "Saber mais" : "Learn more"}
        <span aria-hidden className="seta">
          &rsaquo;
        </span>
      </p>

      {/* A imagem fecha o cartão e encosta ao fundo, para os cartões da mesma
          linha acabarem à mesma altura mesmo com textos de tamanhos vários. */}
      {capa ? (
        <div className="mt-8 flex-1 self-center pt-2">
          <div className="w-40 md:w-44">
            <Figura
              imagem={capa}
              ratio={projecto.trabalhos ? "3/4" : "1320/2868"}
              marcador="[COVER]"
            />
          </div>
        </div>
      ) : null}
    </Link>
  );
}
