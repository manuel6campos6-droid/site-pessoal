"use client";

import { fotosDeViagem, notaDeViagem, totalDePaises } from "@/data/travel";
import { useIdioma } from "@/lib/idioma";
import { t } from "@/lib/texto";
import { Galeria } from "./Galeria";
import { Revelar } from "./Revelar";

export function SeccaoViagens() {
  const { idioma } = useIdioma();

  return (
    <div className="flex flex-col gap-16 md:gap-24">
      <Revelar>
        <div className="flex flex-col gap-8 md:flex-row md:items-end md:justify-between">
          <p className="prose-body max-w-2xl text-night-ink-2">
            {t(notaDeViagem, idioma)}
          </p>
          {/* O "mais de" fica por cima, em pequeno: a conta nao e exacta e o
              numero sozinho e que se le a distancia. */}
          <div className="flex flex-col md:items-end">
            <span className="mono-label text-night-ink-2">
              {idioma === "pt" ? "mais de" : "more than"}
            </span>
            <div className="flex items-baseline gap-3">
              <span className="display-md num-tabular">{totalDePaises}</span>
              <span className="mono-label pb-1 text-night-ink-2">
                {idioma === "pt" ? "países" : "countries"}
              </span>
            </div>
          </div>
        </div>
      </Revelar>

      <Revelar>
        <h3 className="mono-label mb-8 text-night-ink-2">
          {idioma === "pt" ? "Fotografias" : "Photographs"}
        </h3>
        {/* Trinta e uma fotografias no padrao editorial davam uma seccao
            interminavel: em grelha quadrada ve-se o conjunto de uma vez e
            cada foto abre em grande ao clique. */}
        <Galeria
          imagens={fotosDeViagem}
          marcador="[TRAVEL PHOTOS]"
          ratio="1/1"
          escura
        />
      </Revelar>
    </div>
  );
}
