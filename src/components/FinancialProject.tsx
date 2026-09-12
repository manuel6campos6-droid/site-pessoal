"use client";

import type { ProjectoFinanceiro } from "@/data/types";
import { useIdioma } from "@/lib/idioma";
import { t, temConteudo } from "@/lib/texto";
import { Etiqueta } from "./Etiqueta";
import { Figura } from "./Figura";
import { Metricas } from "./Metricas";
import { Tabela } from "./Tabela";

/** Cartão de um trabalho financeiro. É mais analítico que o resto do site de
 *  propósito: números monoespaçados, linhas finas, pouca cor. */
export function FinancialProject({ projecto }: { projecto: ProjectoFinanceiro }) {
  const { idioma } = useIdioma();
  const temTitulo = temConteudo(projecto.title);

  return (
    <article className="rounded-lg border border-rule bg-paper p-6 md:p-10">
      <div className="flex flex-col gap-5 md:flex-row md:items-start md:justify-between">
        <div className="max-w-xl">
          {projecto.category ? (
            <Etiqueta>{t(projecto.category, idioma)}</Etiqueta>
          ) : null}
          {temTitulo ? (
            <h3 className="display-md mt-4">{t(projecto.title, idioma)}</h3>
          ) : (
            <p className="mono-label mt-4 text-accent">[FINANCIAL PROJECT]</p>
          )}
          {temConteudo(projecto.description) ? (
            <p className="prose-body mt-4">{t(projecto.description, idioma)}</p>
          ) : (
            <p className="mono-label mt-4 text-accent">[ADD CONTENT]</p>
          )}
        </div>
        {projecto.files && projecto.files.length > 0 ? (
          <ul className="flex shrink-0 flex-col gap-2">
            {projecto.files.map((f, i) => (
              <li key={i}>
                <a
                  href={f.href}
                  className="mono-label inline-flex items-center gap-2 rounded-full border border-rule px-3 py-1.5 text-ink-2 hover:border-accent hover:text-accent"
                >
                  {f.kind ? <span className="text-accent">{f.kind}</span> : null}
                  {t(f.label, idioma)} ↓
                </a>
              </li>
            ))}
          </ul>
        ) : null}
      </div>

      {projecto.screenshots && projecto.screenshots.length > 0 ? (
        <div className="mt-8">
          <Figura imagem={projecto.screenshots[0]} ratio="16/9" marcador="[MODEL SCREENSHOT]" />
        </div>
      ) : null}

      {(projecto.assumptions?.length ?? 0) > 0 ||
      (projecto.outputs?.length ?? 0) > 0 ? (
        <div className="hairline mt-8 grid grid-cols-1 gap-8 pt-8 md:grid-cols-2 md:gap-12">
          {projecto.assumptions && projecto.assumptions.length > 0 ? (
            <div>
              <h4 className="mono-label text-ink-3">
                {idioma === "pt" ? "Pressupostos" : "Key assumptions"}
              </h4>
              <ul className="mt-4 flex flex-col gap-2">
                {projecto.assumptions.map((a, i) => (
                  <li key={i} className="font-mono text-sm text-ink-2">
                    {t(a, idioma)}
                  </li>
                ))}
              </ul>
            </div>
          ) : null}
          {projecto.outputs && projecto.outputs.length > 0 ? (
            <div>
              <h4 className="mono-label mb-4 text-ink-3">
                {idioma === "pt" ? "Resultados" : "Key outputs"}
              </h4>
              <Metricas metricas={projecto.outputs} />
            </div>
          ) : null}
        </div>
      ) : null}

      {projecto.scenarios ? (
        <div className="mt-8">
          <Tabela tabela={projecto.scenarios} />
        </div>
      ) : null}

      {projecto.notes && projecto.notes.length > 0 ? (
        <div className="hairline mt-8 pt-8">
          <h4 className="mono-label text-ink-3">
            {idioma === "pt" ? "O que aprendi" : "What I learned"}
          </h4>
          <ul className="mt-4 flex flex-col gap-2">
            {projecto.notes.map((n, i) => (
              <li key={i} className="text-ink-2">
                {t(n, idioma)}
              </li>
            ))}
          </ul>
        </div>
      ) : null}
    </article>
  );
}
