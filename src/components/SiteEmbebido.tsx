"use client";

import { useState } from "react";
import { useIdioma } from "@/lib/idioma";
import { t } from "@/lib/texto";
import type { Texto } from "@/data/types";

/** Mostra outro site a correr dentro de uma moldura de browser.
 *
 *  A moldura só funciona se esse site autorizar quem o emoldura: quase todos
 *  recusam, por causa de clickjacking. Quando o browser bloqueia, não há erro
 *  nenhum a apanhar em JavaScript, e a moldura fica cinzenta e calada. Por
 *  isso o botão de abrir noutro separador está sempre presente, e não só
 *  quando alguma coisa corre mal. */
export function SiteEmbebido({
  src,
  href,
  label,
  titulo,
  altura = "portrait",
}: {
  /** O endereço a carregar dentro da moldura. */
  src: string;
  /** O site a abrir ao clicar: pode ser a página de entrada, não a emoldurada. */
  href: string;
  /** O que se lê na barra de endereço da moldura. */
  label: string;
  /** Título acessível da moldura, obrigatório para leitores de ecrã. */
  titulo: Texto;
  /** `portrait` para uma app de telemóvel, `landscape` para um site. */
  altura?: "portrait" | "landscape";
}) {
  const { idioma } = useIdioma();
  // A moldura só carrega depois de um clique: um site inteiro dentro de outro
  // é peso a mais para quem só está a passar os olhos.
  const [aCarregar, setACarregar] = useState(false);

  return (
    <div className="overflow-hidden rounded-xl border border-rule bg-paper-2">
      <div className="flex items-center gap-3 border-b border-rule px-4 py-2.5">
        <span className="flex shrink-0 gap-1.5" aria-hidden>
          {[0, 1, 2].map((i) => (
            <span key={i} className="size-2.5 rounded-full bg-rule" />
          ))}
        </span>
        <span className="mono-label truncate text-ink-3">{label}</span>
        <a
          href={href}
          target="_blank"
          rel="noreferrer noopener"
          className="mono-label ml-auto shrink-0 whitespace-nowrap text-ink-2 transition-colors hover:text-accent"
        >
          {idioma === "pt" ? "Abrir" : "Open"} ↗
        </a>
      </div>

      <div
        className="relative w-full bg-paper"
        style={{ aspectRatio: altura === "portrait" ? "10/16" : "16/10" }}
      >
        {aCarregar ? (
          <iframe
            src={src}
            title={t(titulo, idioma)}
            loading="lazy"
            // O conteúdo é de um site nosso, mas continua noutra origem: a
            // sandbox dá-lhe o que precisa para correr e mais nada.
            sandbox="allow-scripts allow-same-origin allow-forms allow-popups"
            className="absolute inset-0 size-full border-0"
          />
        ) : (
          <button
            type="button"
            onClick={() => setACarregar(true)}
            className="group absolute inset-0 flex flex-col items-center justify-center gap-3 transition-colors hover:bg-paper-2/60"
          >
            <span className="flex size-14 items-center justify-center rounded-full border border-rule text-lg text-ink-2 transition-colors group-hover:border-accent group-hover:text-accent">
              ▸
            </span>
            <span className="mono-label text-ink-3">
              {idioma === "pt" ? "Carregar a app" : "Load the app"}
            </span>
          </button>
        )}
      </div>
    </div>
  );
}
