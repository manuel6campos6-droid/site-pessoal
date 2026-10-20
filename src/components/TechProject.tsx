"use client";

import type { ProjectoTecnico } from "@/data/types";
import { useIdioma } from "@/lib/idioma";
import { t, temConteudo } from "@/lib/texto";
import { Etiqueta } from "./Etiqueta";
import { Galeria } from "./Galeria";
import { Metricas } from "./Metricas";
import { ProductDemo } from "./ProductDemo";
import { SystemDiagram } from "./SystemDiagram";
import { TechStack } from "./TechStack";

/** Projecto técnico. No computador o texto e o produto ficam lado a lado, com
 *  os lados a alternar de linha para linha; no telefone empilham. */
export function TechProject({
  projecto,
  invertido = false,
  escura = false,
}: {
  projecto: ProjectoTecnico;
  invertido?: boolean;
  escura?: boolean;
}) {
  const { idioma } = useIdioma();
  const temTitulo = temConteudo(projecto.title);

  return (
    <article className="grid grid-cols-1 items-center gap-8 md:grid-cols-2 md:gap-14">
      <div className={invertido ? "md:order-2" : ""}>
        <div className="flex flex-wrap items-center gap-3">
          {projecto.kind ? (
            <Etiqueta escura={escura}>{t(projecto.kind, idioma)}</Etiqueta>
          ) : null}
          {projecto.period ? (
            <Etiqueta escura={escura}>{projecto.period}</Etiqueta>
          ) : null}
        </div>
        {temTitulo ? (
          <h3 className="display-md mt-4">{t(projecto.title, idioma)}</h3>
        ) : (
          <p className="marcador mt-4">[TECH PROJECT]</p>
        )}
        {temConteudo(projecto.description) ? (
          <p
            className={`prose-body mt-4 ${escura ? "text-night-ink-2" : ""}`}
          >
            {t(projecto.description, idioma)}
          </p>
        ) : (
          <p className="marcador mt-4">[ADD CONTENT]</p>
        )}

        {projecto.stack && projecto.stack.length > 0 ? (
          <div className="mt-6">
            <TechStack stack={projecto.stack} escura={escura} />
          </div>
        ) : null}

        {(projecto.link || projecto.repo) && (
          <div className="mt-6 flex flex-wrap gap-5">
            {[projecto.link, projecto.repo].map((l, i) =>
              l ? (
                <a
                  key={i}
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
              ) : null,
            )}
          </div>
        )}

        {projecto.outcomes && projecto.outcomes.length > 0 ? (
          <div className="mt-8">
            <Metricas metricas={projecto.outcomes} escura={escura} />
          </div>
        ) : null}
      </div>

      <div className={invertido ? "md:order-1" : ""}>
        <ProductDemo
          imagem={projecto.screenshots?.[0]}
          url={projecto.link?.href.replace(/^https?:\/\//, "").replace(/\/$/, "")}
          escura={escura}
        />
        {projecto.flow && projecto.flow.length > 0 ? (
          <div className="mt-6">
            <SystemDiagram passos={projecto.flow} escura={escura} />
          </div>
        ) : null}
        {/* A janela mostra so a primeira captura. As restantes ficam numa
            grelha por baixo, em pequeno, e abrem em grande ao clique. */}
        {projecto.screenshots && projecto.screenshots.length > 1 ? (
          <div className="mt-4">
            <Galeria
              imagens={projecto.screenshots.slice(1)}
              ratio="1320/2868"
              escura={escura}
            />
          </div>
        ) : null}
      </div>
    </article>
  );
}
