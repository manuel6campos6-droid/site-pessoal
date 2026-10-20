"use client";

import { useCallback, useEffect } from "react";
import Image from "next/image";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import type { Imagem } from "@/data/types";
import { comBase } from "@/lib/caminho";
import { useIdioma } from "@/lib/idioma";
import { t } from "@/lib/texto";

/** Fotografia aberta por cima da página. Fecha com Escape, com o botão ou com
 *  um clique fora da imagem; as setas passam à anterior e à seguinte, para não
 *  obrigar a fechar e reabrir a cada foto. */
export function Lightbox({
  imagens,
  indice,
  aoFechar,
  aoMudar,
}: {
  imagens: Imagem[];
  indice: number | null;
  aoFechar: () => void;
  aoMudar: (i: number) => void;
}) {
  const { idioma } = useIdioma();
  const semMovimento = useReducedMotion();
  const aberta = indice !== null;

  const anterior = useCallback(() => {
    if (indice === null) return;
    aoMudar((indice - 1 + imagens.length) % imagens.length);
  }, [indice, imagens.length, aoMudar]);

  const seguinte = useCallback(() => {
    if (indice === null) return;
    aoMudar((indice + 1) % imagens.length);
  }, [indice, imagens.length, aoMudar]);

  useEffect(() => {
    if (!aberta) return;
    const aoTeclar = (e: KeyboardEvent) => {
      if (e.key === "Escape") aoFechar();
      if (e.key === "ArrowLeft") anterior();
      if (e.key === "ArrowRight") seguinte();
    };
    window.addEventListener("keydown", aoTeclar);
    // Com a fotografia aberta o corpo não rola por trás.
    const overflowAnterior = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      window.removeEventListener("keydown", aoTeclar);
      document.body.style.overflow = overflowAnterior;
    };
  }, [aberta, aoFechar, anterior, seguinte]);

  const imagem = indice === null ? undefined : imagens[indice];

  return (
    <AnimatePresence>
      {aberta && imagem ? (
        <motion.div
          className="fixed inset-0 z-90 flex items-center justify-center bg-night/95 p-4 md:p-10"
          initial={{ opacity: semMovimento ? 1 : 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: semMovimento ? 1 : 0 }}
          transition={{ duration: 0.25 }}
          onClick={aoFechar}
          role="dialog"
          aria-modal="true"
          aria-label={t(imagem.alt, idioma)}
        >
          <button
            type="button"
            onClick={aoFechar}
            aria-label={idioma === "pt" ? "Fechar" : "Close"}
            className="absolute top-4 right-4 z-10 flex size-11 items-center justify-center rounded-full bg-night-2 text-2xl leading-none text-night-ink"
          >
            &times;
          </button>

          {imagens.length > 1 ? (
            <>
              <button
                type="button"
                onClick={(e) => {
                  e.stopPropagation();
                  anterior();
                }}
                aria-label={idioma === "pt" ? "Anterior" : "Previous"}
                className="absolute left-2 z-10 flex size-11 items-center justify-center rounded-full bg-night-2 text-xl text-night-ink md:left-6"
              >
                &lsaquo;
              </button>
              <button
                type="button"
                onClick={(e) => {
                  e.stopPropagation();
                  seguinte();
                }}
                aria-label={idioma === "pt" ? "Seguinte" : "Next"}
                className="absolute right-2 z-10 flex size-11 items-center justify-center rounded-full bg-night-2 text-xl text-night-ink md:right-6"
              >
                &rsaquo;
              </button>
            </>
          ) : null}

          {/* O clique na imagem não fecha: só o clique no fundo é que fecha. */}
          <motion.figure
            key={imagem.src}
            className="relative flex max-h-full w-full max-w-4xl flex-col items-center gap-3"
            onClick={(e) => e.stopPropagation()}
            initial={{ opacity: semMovimento ? 1 : 0, scale: semMovimento ? 1 : 0.98 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
          >
            {/* A imagem aberta manda na sua forma: com medidas fixas, uma
                folha de obra ao largo era espremida num molde vertical e
                aparecia cortada dos dois lados. O `fill` mede a caixa, e a
                caixa segue o ecra. */}
            <div className="relative flex h-[80vh] w-full items-center justify-center">
              <Image
                src={comBase(imagem.src)}
                alt={t(imagem.alt, idioma)}
                fill
                sizes="(max-width: 768px) 92vw, 80vw"
                className="rounded-[var(--radius-cartao)] object-contain"
              />
            </div>
            <figcaption className="dado text-night-ink-2">
              {indice + 1} / {imagens.length}
            </figcaption>
          </motion.figure>
        </motion.div>
      ) : null}
    </AnimatePresence>
  );
}
