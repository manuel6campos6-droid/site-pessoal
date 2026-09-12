"use client";

import {
  createContext,
  useCallback,
  useContext,
  useSyncExternalStore,
} from "react";
import type { Idioma } from "@/data/types";

type Estado = { idioma: Idioma; alternar: () => void };

const Contexto = createContext<Estado>({ idioma: "en", alternar: () => {} });

const CHAVE = "idioma";

/** O idioma escolhido vive no armazenamento do browser, que é estado externo ao
 *  React. Lê-se com useSyncExternalStore para o servidor desenhar sempre em
 *  inglês e o cliente corrigir na primeira leitura, sem cascata de renders. */
const ouvintes = new Set<() => void>();

function subscrever(ouvinte: () => void) {
  ouvintes.add(ouvinte);
  return () => ouvintes.delete(ouvinte);
}

function ler(): Idioma {
  try {
    const guardado = window.localStorage.getItem(CHAVE);
    return guardado === "pt" ? "pt" : "en";
  } catch {
    // Armazenamento bloqueado (janela privada, cookies fechados): fica inglês.
    return "en";
  }
}

function lerNoServidor(): Idioma {
  return "en";
}

export function FornecedorDeIdioma({ children }: { children: React.ReactNode }) {
  const idioma = useSyncExternalStore(subscrever, ler, lerNoServidor);

  const alternar = useCallback(() => {
    const proximo: Idioma = ler() === "en" ? "pt" : "en";
    try {
      window.localStorage.setItem(CHAVE, proximo);
    } catch {
      /* ignorado: sem armazenamento a escolha não persiste */
    }
    document.documentElement.lang = proximo === "pt" ? "pt-PT" : "en";
    ouvintes.forEach((o) => o());
  }, []);

  return <Contexto.Provider value={{ idioma, alternar }}>{children}</Contexto.Provider>;
}

export function useIdioma() {
  return useContext(Contexto);
}
