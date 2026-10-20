"use client";

import { recomendacoes } from "@/data/recommendations";
import { comBase } from "@/lib/caminho";
import { useIdioma } from "@/lib/idioma";
import { t, temConteudo } from "@/lib/texto";
import { Revelar } from "./Revelar";
import { Vazio } from "./Vazio";

export function Recomendacoes() {
  const { idioma } = useIdioma();
  if (recomendacoes.length === 0) return <Vazio marcador="[RECOMMENDATIONS]" />;

  return (
    <ul className="flex max-w-3xl flex-col gap-6">
      {recomendacoes.map((item, i) => (
        <li key={i}>
          <Revelar delay={i * 0.04}>
            <figure className="cartao flex flex-col gap-8 p-8 md:p-12">
              {/* A citação fica sempre em inglês, a língua da carta, por
                  isso o atributo lang: sem ele, um leitor de ecrã lia-a com
                  a pronúncia portuguesa quando o site está em português. */}
              <blockquote lang="en" className="display-md">
                “{item.citacao}”
              </blockquote>
              <figcaption className="flex flex-col gap-1">
                <span className="font-medium">{item.autor}</span>
                {temConteudo(item.cargo) || item.instituicao ? (
                  <span className="text-ink-2">
                    {[t(item.cargo, idioma), item.instituicao].filter(Boolean).join(" · ")}
                  </span>
                ) : null}
                {temConteudo(item.contexto) ? (
                  <span className="text-sm text-ink-3">{t(item.contexto, idioma)}</span>
                ) : null}
                {temConteudo(item.data) ? (
                  <span className="mono-label mt-2 text-ink-3">{t(item.data, idioma)}</span>
                ) : null}
                {item.carta ? (
                  // O download descarrega em vez de abrir outro separador: a carta
                  // é para guardar, e o visitante não perde o site de vista.
                  <a href={comBase(item.carta.href)} download className="ligacao-azul mt-4">
                    {t(item.carta.label, idioma)}
                    {item.carta.kind ? ` (${item.carta.kind})` : ""}
                  </a>
                ) : null}
              </figcaption>
            </figure>
          </Revelar>
        </li>
      ))}
    </ul>
  );
}
