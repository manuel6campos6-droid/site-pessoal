"use client";

import type { PassoFluxo } from "@/data/types";
import { useIdioma } from "@/lib/idioma";
import { t } from "@/lib/texto";
import { Vazio } from "./Vazio";

/** Diagrama de um fluxo. Horizontal no computador, vertical no telefone: uma
 *  fila de caixas estreitas não se lê em 400px. */
export function SystemDiagram({
  passos,
  marcador = "[SYSTEM DIAGRAM]",
  escura = false,
}: {
  passos?: PassoFluxo[];
  marcador?: string;
  escura?: boolean;
}) {
  const { idioma } = useIdioma();
  if (!passos || passos.length === 0) {
    return <Vazio marcador={marcador} escura={escura} />;
  }

  return (
    <ol className="flex flex-col items-stretch gap-3 md:flex-row md:items-stretch">
      {passos.map((passo, i) => (
        <li key={i} className="flex flex-1 items-center gap-3 md:flex-col md:items-stretch">
          <div
            className={`flex-1 rounded-lg border p-4 ${
              escura ? "border-night-rule bg-night-2" : "border-rule bg-paper-2/60"
            }`}
          >
            <span className="mono-label text-accent">
              {String(i + 1).padStart(2, "0")}
            </span>
            <p className="mt-2 font-medium">{t(passo.label, idioma)}</p>
            {passo.detail ? (
              <p
                className={`mt-1.5 text-sm ${escura ? "text-night-ink-2" : "text-ink-3"}`}
              >
                {t(passo.detail, idioma)}
              </p>
            ) : null}
          </div>
          {i < passos.length - 1 ? (
            <span
              aria-hidden
              className={`shrink-0 md:hidden ${escura ? "text-night-rule" : "text-ink-3"}`}
            >
              ↓
            </span>
          ) : null}
        </li>
      ))}
    </ol>
  );
}
