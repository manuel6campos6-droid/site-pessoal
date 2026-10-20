"use client";

import type { Tabela as Dados } from "@/data/types";
import { useIdioma } from "@/lib/idioma";
import { t } from "@/lib/texto";

/** Tabela de cenários. Rola na horizontal dentro da própria caixa, para o
 *  corpo da página nunca rolar de lado no telefone. */
export function Tabela({ tabela }: { tabela: Dados }) {
  const { idioma } = useIdioma();
  if (tabela.rows.length === 0) return null;

  return (
    <div className="overflow-x-auto rounded-[var(--radius-cartao)] border border-rule">
      <table className="w-full border-collapse text-sm">
        {tabela.caption ? (
          <caption className="px-4 py-3 text-left text-ink-3">
            {t(tabela.caption, idioma)}
          </caption>
        ) : null}
        <thead>
          <tr>
            {tabela.headers.map((h, i) => (
              <th
                key={i}
                scope="col"
                className="mono-label border-b border-rule bg-paper-2 px-4 py-3 text-left whitespace-nowrap text-ink-3"
              >
                {t(h, idioma)}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {tabela.rows.map((linha, i) => (
            <tr key={i} className="border-b border-rule last:border-0">
              {linha.map((celula, k) => (
                <td
                  key={k}
                  className={`px-4 py-3 whitespace-nowrap ${
                    k === 0 ? "text-ink" : "font-mono num-tabular text-ink-2"
                  }`}
                >
                  {celula}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
