"use client";

import type { Imagem } from "@/data/types";
import { comBase } from "@/lib/caminho";
import { Figura } from "./Figura";

/** Janela de browser em volta de uma captura ou de um vídeo. Dá contexto de
 *  produto a uma imagem sem precisar de um ecrã real. Com `video`, mostra o
 *  vídeo com controlos em vez da captura; sem autoplay, porque este tem som. */
export function ProductDemo({
  imagem,
  video,
  url,
  escura = false,
}: {
  imagem?: Imagem;
  video?: string;
  url?: string;
  escura?: boolean;
}) {
  return (
    <div
      className={`overflow-hidden rounded-xl border ${
        escura ? "border-night-rule bg-night-2" : "border-rule bg-paper-2"
      }`}
    >
      <div
        className={`flex items-center gap-2 border-b px-4 py-2.5 ${
          escura ? "border-night-rule" : "border-rule"
        }`}
      >
        <span className="flex gap-1.5" aria-hidden>
          {[0, 1, 2].map((i) => (
            <span
              key={i}
              className={`size-2.5 rounded-full ${escura ? "bg-night-rule" : "bg-rule"}`}
            />
          ))}
        </span>
        <span
          className={`mono-label truncate ${escura ? "text-night-ink-2" : "text-ink-3"}`}
        >
          {url ?? "[URL]"}
        </span>
      </div>
      <div className="p-2">
        {video ? (
          <div
            className="relative w-full max-w-full overflow-hidden rounded-[var(--radius-cartao)]"
            style={{ aspectRatio: "16/10" }}
          >
            <video
              src={comBase(video)}
              poster={imagem ? comBase(imagem.src) : undefined}
              controls
              playsInline
              className="absolute inset-0 size-full object-cover"
            />
          </div>
        ) : (
          <Figura
            imagem={imagem}
            ratio="16/10"
            marcador="[PRODUCT SCREENSHOT]"
            escura={escura}
          />
        )}
      </div>
    </div>
  );
}
