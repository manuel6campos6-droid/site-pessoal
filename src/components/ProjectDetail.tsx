"use client";

import Link from "next/link";
import type { Projecto } from "@/data/types";
import { useIdioma } from "@/lib/idioma";
import { t, temConteudo } from "@/lib/texto";
import { Etiqueta } from "./Etiqueta";
import { Figura } from "./Figura";
import { Galeria } from "./Galeria";
import { Metricas } from "./Metricas";
import { Revelar } from "./Revelar";
import { SiteEmbebido } from "./SiteEmbebido";
import { Vazio } from "./Vazio";

/** Página de um projecto. Cada bloco só aparece se tiver conteúdo: a numeração
 *  é calculada na hora, para não haver saltos como 01, 03, 07. */
export function ProjectDetail({ projecto }: { projecto: Projecto }) {
  const { idioma } = useIdioma();
  const blocos = (projecto.details ?? []).filter(
    (b) => temConteudo(b.body) || (b.bullets && b.bullets.length > 0),
  );

  return (
    <article className="pt-32 pb-(--spacing-section) md:pt-40">
      <div className="shell">
        <Link href="/#projects" className="mono-label text-ink-3 hover:text-ink">
          ← {idioma === "pt" ? "Projectos" : "Projects"}
        </Link>

        <header className="mt-10">
          <h1 className="display-lg">{projecto.name}</h1>
          <div className="mt-6 flex flex-wrap items-center gap-3">
            {projecto.period ? <Etiqueta>{projecto.period}</Etiqueta> : null}
            {projecto.status ? <Etiqueta>{t(projecto.status, idioma)}</Etiqueta> : null}
            {projecto.link ? (
              <a
                href={projecto.link.href}
                target="_blank"
                rel="noreferrer noopener"
                className="mono-label border-b border-ink-3 pb-0.5 hover:border-accent hover:text-accent"
              >
                {t(projecto.link.label, idioma)} ↗
              </a>
            ) : null}
          </div>
          {temConteudo(projecto.tagline) ? (
            <p className="prose-body mt-8 max-w-2xl">{t(projecto.tagline, idioma)}</p>
          ) : (
            <div className="mt-8 max-w-2xl">
              <Vazio
                marcador="[SHORT INTRODUCTION]"
                nota={{
                  en: "A two-line introduction to this project.",
                  pt: "Uma introdução de duas linhas a este projecto.",
                }}
              />
            </div>
          )}
        </header>

        {/* Um projecto com site emoldurável mostra-o a funcionar; os outros
            mostram o visual grande. */}
        <div className="mt-10 md:mt-14">
          {projecto.embed ? (
            <div className="mx-auto w-full max-w-md">
              <SiteEmbebido
                src={projecto.embed.src}
                href={projecto.link?.href ?? projecto.embed.src}
                label={projecto.embed.label}
                altura={projecto.embed.shape ?? "landscape"}
                titulo={{
                  en: `${projecto.name}, running live`,
                  pt: `${projecto.name}, a funcionar`,
                }}
              />
            </div>
          ) : (
            <Figura
              imagem={projecto.cover ?? projecto.images?.[0]}
              ratio="16/9"
              marcador="[LARGE VISUAL]"
              prioridade
            />
          )}
        </div>

        {projecto.metrics && projecto.metrics.length > 0 ? (
          <div className="hairline mt-16 pt-12 md:mt-24">
            <Metricas metricas={projecto.metrics} />
          </div>
        ) : null}

        <div className="mt-16 flex flex-col gap-14 md:mt-24 md:gap-20">
          {blocos.length > 0 ? (
            blocos.map((bloco, i) => (
              <Revelar key={i}>
                {/* No computador o número fica numa coluna à esquerda; no
                    telefone passa para cima do título. */}
                <div className="grid grid-cols-1 gap-4 md:grid-cols-12 md:gap-10">
                  <div className="md:col-span-3">
                    <span className="mono-label text-ink-3">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <h2 className="display-md mt-2">{t(bloco.title, idioma)}</h2>
                  </div>
                  <div className="md:col-span-8 md:col-start-5">
                    {temConteudo(bloco.body) ? (
                      <p className="prose-body whitespace-pre-line">
                        {t(bloco.body, idioma)}
                      </p>
                    ) : null}
                    {bloco.bullets && bloco.bullets.length > 0 ? (
                      <ul className="mt-5 flex flex-col gap-3">
                        {bloco.bullets.map((b, k) => (
                          <li key={k} className="flex gap-3 text-ink-2">
                            <span className="mono-label mt-1.5 text-ink-3" aria-hidden>
                              ·
                            </span>
                            <span>{t(b, idioma)}</span>
                          </li>
                        ))}
                      </ul>
                    ) : null}
                  </div>
                </div>
              </Revelar>
            ))
          ) : (
            <Vazio
              marcador="[CASE STUDY]"
              nota={{
                en: "Context, problem, what I built, model, role, results, learnings.",
                pt: "Contexto, problema, o que construí, modelo, papel, resultados, aprendizagens.",
              }}
              alto
            />
          )}
        </div>

        <div className="mt-20 md:mt-28">
          <h2 className="display-md mb-8">
            {idioma === "pt" ? "Galeria" : "Gallery"}
          </h2>
          <Galeria imagens={projecto.gallery ?? projecto.images} />
        </div>
      </div>
    </article>
  );
}
