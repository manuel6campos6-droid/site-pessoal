"use client";

import { certificacoes, educacao } from "@/data/education";
import { actividades, competencias, experiencia } from "@/data/experience";
import { perfil } from "@/data/profile";
import type { Percurso } from "@/data/types";
import { useIdioma } from "@/lib/idioma";
import { ePlaceholder, t, temConteudo } from "@/lib/texto";
import { Figura } from "./Figura";
import { Revelar } from "./Revelar";
import { Vazio } from "./Vazio";

/** Lista de entradas com organização, papel e período: serve a educação, a
 *  experiência e as actividades, que têm todas a mesma forma. */
function Entradas({
  titulo,
  itens,
}: {
  titulo: string;
  itens: Percurso[];
}) {
  const { idioma } = useIdioma();
  if (itens.length === 0) return null;

  return (
    <section className="hairline pt-10">
      <h3 className="mono-label text-ink-3">{titulo}</h3>
      <ul className="mt-6 flex flex-col gap-7">
        {itens.map((e, i) => (
          <Revelar key={i} delay={i * 0.04}>
            <li className="flex flex-col gap-1">
              <div className="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1">
                <span className={ePlaceholder(e.organisation) ? "marcador" : "text-lg"}>
                  {e.organisation}
                </span>
                {e.period ? (
                  <span
                    className={`num-tabular ${
                      ePlaceholder(e.period) ? "marcador" : "mono-label text-ink-3"
                    }`}
                  >
                    {e.period}
                  </span>
                ) : null}
              </div>
              {e.role ? (
                <span className={temConteudo(e.role) ? "text-ink-2" : "marcador"}>
                  {t(e.role, idioma)}
                </span>
              ) : null}
              {e.location ? (
                <span className="text-sm text-ink-3">{t(e.location, idioma)}</span>
              ) : null}
              {e.notes && e.notes.length > 0 ? (
                <ul className="mt-2 flex flex-col gap-1.5">
                  {e.notes.map((n, k) => (
                    <li key={k} className="text-sm leading-relaxed text-ink-3">
                      {t(n, idioma)}
                    </li>
                  ))}
                </ul>
              ) : null}
            </li>
          </Revelar>
        ))}
      </ul>
    </section>
  );
}

export function SobreEEducacao() {
  const { idioma } = useIdioma();
  const paragrafos = perfil.about.filter(temConteudo);

  return (
    <div className="grid grid-cols-1 gap-14 md:grid-cols-12 md:gap-10">
      <div className="md:col-span-7">
        {paragrafos.length > 0 ? (
          <div className="flex max-w-2xl flex-col gap-5">
            {paragrafos.map((p, i) => (
              <p key={i} className="prose-body">
                {t(p, idioma)}
              </p>
            ))}
          </div>
        ) : (
          <div className="max-w-2xl">
            <Vazio
              marcador="[ABOUT]"
              nota={{
                en: "Who I am, in a few short paragraphs.",
                pt: "Quem sou, em poucos parágrafos curtos.",
              }}
            />
          </div>
        )}

        <div className="mt-12 flex flex-col gap-10">
          <Entradas
            titulo={idioma === "pt" ? "Educação" : "Education"}
            itens={educacao}
          />
          <Entradas
            titulo={idioma === "pt" ? "Experiência" : "Experience"}
            itens={experiencia}
          />
          <Entradas
            titulo={idioma === "pt" ? "Actividades" : "Activities"}
            itens={actividades}
          />
        </div>
      </div>

      <div className="md:col-span-4 md:col-start-9">
        <Revelar delay={0.08}>
          {perfil.portrait ? (
            <Figura imagem={perfil.portrait} ratio="4/5" marcador="[PORTRAIT]" />
          ) : null}
          {perfil.location ? (
            <p
              className={`mono-label text-ink-3 ${perfil.portrait ? "mt-4" : ""}`}
            >
              {t(perfil.location, idioma)}
            </p>
          ) : null}

          {/* Competências e línguas: uma coluna de dados ao lado do texto, sem
              ocupar a leitura principal. */}
          <dl className="hairline mt-8 flex flex-col gap-6 pt-8 text-sm">
            <div>
              <dt className="mono-label text-ink-3">
                {idioma === "pt" ? "Línguas" : "Languages"}
              </dt>
              <dd className="mt-2 flex flex-col gap-1">
                {competencias.languages.map((l, i) => (
                  <span key={i} className="text-ink-2">
                    {t(l.label, idioma)}
                    <span className="text-ink-3"> · {t(l.level, idioma)}</span>
                  </span>
                ))}
              </dd>
            </div>
            <div>
              <dt className="mono-label text-ink-3">
                {idioma === "pt" ? "Ferramentas" : "Tools"}
              </dt>
              <dd className="mt-2 text-ink-2">
                {[...competencias.finance, ...competencias.tools].join(" · ")}
              </dd>
            </div>
            {certificacoes.length > 0 ? (
              <div>
                <dt className="mono-label text-ink-3">
                  {idioma === "pt" ? "Certificações" : "Certificates"}
                </dt>
                <dd className="mt-2 flex flex-col gap-1">
                  {certificacoes.map((c, i) => (
                    <span key={i} className="text-ink-2">
                      {t(c.label, idioma)}
                      <span className="num-tabular text-ink-3"> · {c.year}</span>
                    </span>
                  ))}
                </dd>
              </div>
            ) : null}
          </dl>
        </Revelar>
      </div>
    </div>
  );
}
