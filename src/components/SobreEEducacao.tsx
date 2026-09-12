"use client";

import { educacao } from "@/data/education";
import { perfil } from "@/data/profile";
import { useIdioma } from "@/lib/idioma";
import { ePlaceholder, t, temConteudo } from "@/lib/texto";
import { Figura } from "./Figura";
import { Revelar } from "./Revelar";
import { Vazio } from "./Vazio";

export function SobreEEducacao() {
  const { idioma } = useIdioma();
  const paragrafos = perfil.about.filter(temConteudo);

  return (
    <div className="grid grid-cols-1 gap-14 md:grid-cols-12 md:gap-10">
      <div className="md:col-span-7">
        {paragrafos.length > 0 ? (
          <div className="flex max-w-2xl flex-col gap-6">
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
              alto
            />
          </div>
        )}

        <div className="hairline mt-14 pt-10">
          <h3 className="mono-label text-ink-3">
            {idioma === "pt" ? "Educação" : "Education"}
          </h3>
          <ul className="mt-6 flex flex-col gap-8">
            {educacao.map((e, i) => (
              <Revelar key={i} delay={i * 0.05}>
                <li className="flex flex-col gap-1">
                  <div className="flex flex-wrap items-baseline justify-between gap-3">
                    <span
                      className={`text-xl ${
                        ePlaceholder(e.institution) ? "font-mono text-base text-accent" : ""
                      }`}
                    >
                      {e.institution}
                    </span>
                    {e.period ? (
                      <span
                        className={`mono-label ${
                          ePlaceholder(e.period) ? "text-accent" : "text-ink-3"
                        }`}
                      >
                        {e.period}
                      </span>
                    ) : null}
                  </div>
                  {e.degree ? (
                    <span
                      className={
                        temConteudo(e.degree) ? "text-ink-2" : "mono-label text-accent"
                      }
                    >
                      {t(e.degree, idioma)}
                    </span>
                  ) : null}
                  {e.notes && e.notes.length > 0 ? (
                    <ul className="mt-2 flex flex-col gap-1">
                      {e.notes.map((n, k) => (
                        <li key={k} className="text-sm text-ink-3">
                          {t(n, idioma)}
                        </li>
                      ))}
                    </ul>
                  ) : null}
                </li>
              </Revelar>
            ))}
          </ul>
        </div>
      </div>

      <div className="md:col-span-4 md:col-start-9">
        <Revelar delay={0.1}>
          <Figura imagem={perfil.portrait} ratio="4/5" marcador="[PORTRAIT]" />
          {perfil.location ? (
            <p className="mono-label mt-4 text-ink-3">{t(perfil.location, idioma)}</p>
          ) : null}
        </Revelar>
      </div>
    </div>
  );
}
