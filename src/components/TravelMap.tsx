"use client";

import { useState } from "react";
import type { Viagem } from "@/data/types";
import { useIdioma } from "@/lib/idioma";
import { t } from "@/lib/texto";
import { Vazio } from "./Vazio";

/** Coordenadas de países, acrescentadas à medida das viagens que existirem.
 *  Um país sem entrada aqui aparece na lista mas não no mapa: é melhor faltar
 *  um ponto do que pôr um ponto no sítio errado. */
const COORDENADAS: Record<string, { lat: number; lon: number }> = {
  US: { lat: 39.8, lon: -98.6 },
  RU: { lat: 61.5, lon: 105.3 },
  MN: { lat: 46.9, lon: 103.8 },
  CN: { lat: 35.9, lon: 104.2 },
  OM: { lat: 21.5, lon: 55.9 },
  LK: { lat: 7.9, lon: 80.8 },
};

/** Projecção equirectangular: simples e suficiente para pontos num mapa
 *  decorativo. Devolve percentagens, para o svg escalar sozinho. */
function projectar(lat: number, lon: number) {
  return { x: ((lon + 180) / 360) * 100, y: ((90 - lat) / 180) * 100 };
}

export function TravelMap({ viagens }: { viagens: Viagem[] }) {
  const { idioma } = useIdioma();
  const [activo, setActivo] = useState<string | null>(null);

  if (viagens.length === 0) {
    return (
      <Vazio
        marcador="[TRAVEL MAP]"
        nota={{
          en: "The map draws a point per country once the travel data exists.",
          pt: "O mapa desenha um ponto por país quando os dados das viagens existirem.",
        }}
        escura
        alto
      />
    );
  }

  const pontos = viagens
    .map((v) => {
      const coord = v.code ? COORDENADAS[v.code.toUpperCase()] : undefined;
      if (!coord) return null;
      return { viagem: v, ...projectar(coord.lat, coord.lon) };
    })
    .filter((p): p is NonNullable<typeof p> => p !== null);

  return (
    <div className="relative w-full overflow-hidden rounded-[var(--radius-cartao)] border border-night-rule bg-night-2">
      <svg
        viewBox="0 0 100 50"
        className="h-auto w-full"
        role="img"
        aria-label={idioma === "pt" ? "Mapa das viagens" : "Travel map"}
      >
        {/* Grelha de meridianos e paralelos: dá leitura de mapa sem carregar
            um ficheiro de fronteiras de megabytes. */}
        <g stroke="var(--color-night-rule)" strokeWidth="0.1">
          {Array.from({ length: 11 }, (_, i) => (
            <line key={`v${i}`} x1={i * 10} y1="0" x2={i * 10} y2="50" />
          ))}
          {Array.from({ length: 6 }, (_, i) => (
            <line key={`h${i}`} x1="0" y1={i * 10} x2="100" y2={i * 10} />
          ))}
        </g>
        {pontos.map((p, i) => (
          <circle
            key={i}
            cx={p.x}
            cy={p.y / 2}
            r={activo === p.viagem.code ? 1.1 : 0.7}
            fill="var(--color-accent)"
            className="cursor-pointer transition-all"
            onMouseEnter={() => setActivo(p.viagem.code ?? null)}
            onMouseLeave={() => setActivo(null)}
          />
        ))}
      </svg>

      <ul className="flex flex-wrap items-baseline gap-x-5 gap-y-2 border-t border-night-rule p-5">
        <li className="mono-label mr-2 text-night-ink-2 opacity-60">
          {idioma === "pt" ? "Alguns dos países" : "Some of the countries"}
        </li>
        {viagens.map((v, i) => (
          <li
            key={i}
            onMouseEnter={() => setActivo(v.code ?? null)}
            onMouseLeave={() => setActivo(null)}
            className={`mono-label transition-colors ${
              activo === v.code ? "text-accent" : "text-night-ink-2"
            }`}
          >
            {t(v.country, idioma)}
            {v.year ? <span className="ml-2 opacity-60">{v.year}</span> : null}
          </li>
        ))}
      </ul>
    </div>
  );
}
