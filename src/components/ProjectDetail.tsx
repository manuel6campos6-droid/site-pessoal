"use client";

import Link from "next/link";
import type { Projecto } from "@/data/types";
import { useIdioma } from "@/lib/idioma";
import { t, temConteudo } from "@/lib/texto";
import { Etiqueta } from "./Etiqueta";
import { Figura } from "./Figura";
import { Galeria } from "./Galeria";
import { Trabalhos } from "./Trabalhos";
import { Metricas } from "./Metricas";
import { Revelar } from "./Revelar";
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
            {/* Um projecto pode ter varias moradas: site, redes, um trabalho
                concreto. Sem `links`, mostra-se so o `link` de sempre. */}
            {(projecto.links ?? (projecto.link ? [projecto.link] : [])).map((l) => (
              <a
                key={l.href}
                href={l.href}
                target="_blank"
                rel="noreferrer noopener"
                className="ligacao-azul text-sm"
              >
                {t(l.label, idioma)}
                <span aria-hidden className="seta">
                  ↗
                </span>
              </a>
            ))}
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

        {/* Capturas de telemóvel são verticais: numa moldura 16/9 ficava só
            uma faixa do meio. A de topo mantém a proporção e limita-se em
            largura, em vez de ser cortada. */}
        <div className="mt-10 md:mt-14">
          {projecto.abertura?.src || projecto.cover?.src || projecto.images?.[0] ? (
            // A abertura, quando existe, e ao largo e ocupa a pagina toda. Sem
            // ela, entra a capa do cartao, que e ao alto e por isso se limita
            // em largura: a toda a largura empurrava a pagina para baixo.
            <div
              className={`w-full ${projecto.abertura ? "" : "mx-auto max-w-xs"}`}
            >
              <Figura
                imagem={
                  projecto.abertura ?? projecto.cover ?? projecto.images?.[0]
                }
                ratio={projecto.abertura ? "1128/191" : "1320/2868"}
                inteira={Boolean(projecto.abertura)}
                marcador="[LARGE VISUAL]"
                prioridade
              />
            </div>
          ) : (
            <Figura ratio="16/9" marcador="[LARGE VISUAL]" prioridade />
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

        {/* Um projecto com clientes mostra-os um a um; os outros continuam a
            mostrar a galeria de sempre. */}
        <div className="mt-20 md:mt-28">
          <h2 className="display-md mb-8">
            {projecto.trabalhos && projecto.trabalhos.length > 0
              ? idioma === "pt"
                ? "Trabalhos"
                : "Selected work"
              : idioma === "pt"
                ? "Galeria"
                : "Gallery"}
          </h2>
          {/* A identidade abre a seccao: e o que atravessa todos os trabalhos,
              e nao mais um trabalho ao lado dos outros. */}
          {projecto.marca && projecto.marca.length > 0 ? (
            <div className="mb-16 md:mb-24">
              <h3 className="display-md mb-6">
                {idioma === "pt" ? "A marca" : "The brand"}
              </h3>
              {/* Esbocos ao alto, ecras ao largo: com uma forma fixa uns
                  ficavam minusculos ao lado dos outros. O quadrado da a todos
                  a mesma area e a imagem cabe inteira dentro dele. */}
              <Galeria imagens={projecto.marca} ratio="1/1" inteira />
            </div>
          ) : null}
          {projecto.trabalhos && projecto.trabalhos.length > 0 ? (
            <Trabalhos trabalhos={projecto.trabalhos} />
          ) : (
            <Galeria imagens={projecto.gallery ?? projecto.images} ratio="1320/2868" />
          )}
        </div>
      </div>
    </article>
  );
}
