"use client";

import type { Trabalho } from "@/data/types";
import { useIdioma } from "@/lib/idioma";
import { t, temConteudo } from "@/lib/texto";
import { Galeria } from "./Galeria";
import { Revelar } from "./Revelar";

/** Os trabalhos de um projecto, um bloco cada. O bloco diz o que se produziu e
 *  mostra as folhas desse trabalho: numa galeria única perdia-se onde acaba um
 *  trabalho e começa o outro. Os clientes não são nomeados. */
export function Trabalhos({ trabalhos }: { trabalhos: Trabalho[] }) {
  const { idioma } = useIdioma();

  return (
    <div className="flex flex-col gap-16 md:gap-24">
      {trabalhos.map((trabalho) => (
        <Revelar key={trabalho.numero}>
          <header>
            <h3 className="display-md">
              {idioma === "pt" ? "Projecto" : "Project"} {trabalho.numero}
            </h3>
          </header>
          {temConteudo(trabalho.resumo) ? (
            <p className="prose-body mt-2 max-w-xl">{t(trabalho.resumo!, idioma)}</p>
          ) : null}
          <div className="mt-6">
            <Galeria imagens={trabalho.imagens} ratio="3/2" inteira />
          </div>
        </Revelar>
      ))}
    </div>
  );
}
