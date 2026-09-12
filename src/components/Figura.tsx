"use client";

import Image from "next/image";
import type { Imagem } from "@/data/types";
import { useIdioma } from "@/lib/idioma";
import { t } from "@/lib/texto";

/** Imagem com moldura e legenda. Sem imagem desenha a caixa de proporção
 *  correcta, para o layout não mudar quando a foto chegar. */
export function Figura({
  imagem,
  ratio = "4/3",
  marcador = "[IMAGE]",
  escura = false,
  prioridade = false,
}: {
  imagem?: Imagem;
  ratio?: string;
  marcador?: string;
  escura?: boolean;
  prioridade?: boolean;
}) {
  const { idioma } = useIdioma();

  return (
    <figure className="w-full max-w-full">
      <div
        className={`relative w-full max-w-full overflow-hidden rounded-lg ${
          escura ? "bg-night-2" : "bg-paper-2"
        } ${imagem ? "" : "border border-dashed " + (escura ? "border-night-rule" : "border-rule")}`}
        style={{ aspectRatio: ratio }}
      >
        {imagem ? (
          <Image
            src={imagem.src}
            alt={t(imagem.alt, idioma)}
            fill
            sizes="(max-width: 768px) 100vw, 50vw"
            priority={prioridade}
            className="object-cover transition-transform duration-700 hover:scale-[1.03]"
          />
        ) : (
          <div className="absolute inset-0 flex items-center justify-center">
            <span className="mono-label text-accent">{marcador}</span>
          </div>
        )}
      </div>
      {imagem?.caption ? (
        <figcaption
          className={`mt-3 text-sm ${escura ? "text-night-ink-2" : "text-ink-3"}`}
        >
          {t(imagem.caption, idioma)}
        </figcaption>
      ) : null}
    </figure>
  );
}
