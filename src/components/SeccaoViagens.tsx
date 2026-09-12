"use client";

import { fotosDeViagem, notaDeViagem, totalDePaises, viagens } from "@/data/travel";
import { useIdioma } from "@/lib/idioma";
import { t, temConteudo } from "@/lib/texto";
import { Galeria } from "./Galeria";
import { Revelar } from "./Revelar";
import { TravelMap } from "./TravelMap";
import { Vazio } from "./Vazio";

export function SeccaoViagens() {
  const { idioma } = useIdioma();
  const comNotas = viagens.filter((v) => temConteudo(v.notes));

  return (
    <div className="flex flex-col gap-16 md:gap-24">
      <Revelar>
        <div className="flex flex-col gap-8 md:flex-row md:items-end md:justify-between">
          <p className="prose-body max-w-lg text-night-ink-2">
            {t(notaDeViagem, idioma)}
          </p>
          <div className="flex items-baseline gap-3">
            <span className="display-md num-tabular">{totalDePaises}</span>
            <span className="mono-label pb-1 text-night-ink-2">
              {idioma === "pt" ? "países" : "countries"}
            </span>
          </div>
        </div>
      </Revelar>

      <Revelar>
        <TravelMap viagens={viagens} />
      </Revelar>

      <Revelar>
        <h3 className="mono-label mb-8 text-night-ink-2">
          {idioma === "pt" ? "Viagens escolhidas" : "Selected journeys"}
        </h3>
        {comNotas.length > 0 ? (
          <ul className="flex flex-col">
            {comNotas.map((v, i) => (
              <li key={i} className="hairline border-night-rule py-8 first:border-t-0">
                <div className="grid grid-cols-1 gap-4 md:grid-cols-12 md:gap-10">
                  <div className="md:col-span-4">
                    <h4 className="display-md">{t(v.country, idioma)}</h4>
                    <div className="mono-label mt-2 flex flex-wrap gap-3 text-night-ink-2">
                      {v.year ? <span>{v.year}</span> : null}
                      {v.locations && v.locations.length > 0 ? (
                        <span>{v.locations.join(" · ")}</span>
                      ) : null}
                    </div>
                  </div>
                  <p className="prose-body text-night-ink-2 md:col-span-7 md:col-start-6">
                    {t(v.notes, idioma)}
                  </p>
                </div>
              </li>
            ))}
          </ul>
        ) : (
          <Vazio
            marcador="[TRAVEL DATA]"
            nota={{
              en: "Countries, years, locations and a short note per trip.",
              pt: "Países, anos, locais e uma nota curta por viagem.",
            }}
            escura
            alto
          />
        )}
      </Revelar>

      <Revelar>
        <h3 className="mono-label mb-8 text-night-ink-2">
          {idioma === "pt" ? "Fotografias" : "Photographs"}
        </h3>
        <Galeria imagens={fotosDeViagem} marcador="[TRAVEL PHOTOS]" escura />
      </Revelar>
    </div>
  );
}
