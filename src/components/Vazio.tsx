"use client";

import { useIdioma } from "@/lib/idioma";

/** Estado vazio. Não é um erro: é o desenho de um lugar que está à espera de
 *  conteúdo, para a página ficar apresentável antes de estar preenchida. */
export function Vazio({
  marcador,
  nota,
  escura = false,
  alto = false,
}: {
  /** O marcador exacto pedido, por exemplo [TRAVEL MAP]. */
  marcador: string;
  nota?: { en: string; pt: string };
  escura?: boolean;
  alto?: boolean;
}) {
  const { idioma } = useIdioma();
  const legenda =
    nota?.[idioma] ??
    (idioma === "pt" ? "À espera de conteúdo." : "Awaiting content.");

  return (
    <div
      className={`flex flex-col items-start justify-center gap-3 rounded-lg border border-dashed p-8 md:p-12 ${
        alto ? "min-h-64 md:min-h-80" : "min-h-40"
      } ${
        escura
          ? "border-night-rule bg-night-2/40 text-night-ink-2"
          : "border-rule bg-paper-2/50 text-ink-3"
      }`}
    >
      <span className="marcador">{marcador}</span>
      <p className="max-w-md text-sm leading-relaxed">{legenda}</p>
    </div>
  );
}
