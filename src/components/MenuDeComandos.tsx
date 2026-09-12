"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { seccoes } from "@/data/sections";
import { useIdioma } from "@/lib/idioma";
import { t } from "@/lib/texto";

/** Detalhe de teclado: ⌘K abre uma lista das secções. É um atalho, não a
 *  navegação principal, por isso nunca é o único caminho para nada. */
export function MenuDeComandos({
  aberto,
  setAberto,
}: {
  aberto: boolean;
  setAberto: (v: boolean) => void;
}) {
  useEffect(() => {
    const tecla = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key.toLowerCase() === "k") {
        e.preventDefault();
        setAberto(!aberto);
      }
      if (e.key === "Escape") setAberto(false);
    };
    window.addEventListener("keydown", tecla);
    return () => window.removeEventListener("keydown", tecla);
  }, [aberto, setAberto]);

  return (
    <AnimatePresence>
      {/* O painel só existe enquanto está aberto: assim a busca e a selecção
          começam limpas de cada vez, sem as reiniciar por efeito. */}
      {aberto ? <Painel fechar={() => setAberto(false)} /> : null}
    </AnimatePresence>
  );
}

function Painel({ fechar }: { fechar: () => void }) {
  const { idioma } = useIdioma();
  const [busca, setBusca] = useState("");
  const [indice, setIndice] = useState(0);
  const campo = useRef<HTMLInputElement>(null);

  useEffect(() => {
    // O foco entra depois da abertura, senão o teclado do telefone salta.
    const id = window.setTimeout(() => campo.current?.focus(), 60);
    return () => window.clearTimeout(id);
  }, []);

  const resultados = useMemo(() => {
    const termo = busca.trim().toLowerCase();
    if (!termo) return seccoes;
    return seccoes.filter((s) =>
      `${t(s.label, "en")} ${t(s.label, "pt")}`.toLowerCase().includes(termo),
    );
  }, [busca]);

  // Se a lista encolheu por causa da busca, a selecção não pode ficar fora dela.
  const seleccionado = Math.min(indice, Math.max(resultados.length - 1, 0));

  const ir = (id: string) => {
    fechar();
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <motion.div
      className="fixed inset-0 z-70 flex items-start justify-center bg-night/40 px-4 pt-[18vh] backdrop-blur-sm"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.15 }}
      onClick={fechar}
    >
      <motion.div
        role="dialog"
        aria-modal="true"
        aria-label={idioma === "pt" ? "Ir para secção" : "Jump to section"}
        className="w-full max-w-lg overflow-hidden rounded-xl border border-rule bg-paper shadow-2xl"
        initial={{ opacity: 0, y: -8, scale: 0.98 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        exit={{ opacity: 0, y: -8, scale: 0.98 }}
        transition={{ duration: 0.18, ease: [0.16, 1, 0.3, 1] }}
        onClick={(e) => e.stopPropagation()}
      >
        <input
          ref={campo}
          value={busca}
          onChange={(e) => {
            setBusca(e.target.value);
            setIndice(0);
          }}
          onKeyDown={(e) => {
            if (e.key === "ArrowDown") {
              e.preventDefault();
              setIndice(Math.min(seleccionado + 1, resultados.length - 1));
            }
            if (e.key === "ArrowUp") {
              e.preventDefault();
              setIndice(Math.max(seleccionado - 1, 0));
            }
            if (e.key === "Enter" && resultados[seleccionado]) {
              ir(resultados[seleccionado].id);
            }
          }}
          placeholder={idioma === "pt" ? "Ir para..." : "Jump to..."}
          className="w-full border-b border-rule bg-transparent px-5 py-4 text-base outline-none placeholder:text-ink-3"
        />
        <ul className="max-h-72 overflow-y-auto py-2">
          {resultados.map((s, i) => (
            <li key={s.id}>
              <button
                type="button"
                onMouseEnter={() => setIndice(i)}
                onClick={() => ir(s.id)}
                className={`flex w-full items-baseline gap-4 px-5 py-2.5 text-left ${
                  i === seleccionado ? "bg-paper-2" : ""
                }`}
              >
                <span className="mono-label text-ink-3">{s.index}</span>
                <span className="text-[0.95rem]">{t(s.label, idioma)}</span>
              </button>
            </li>
          ))}
          {resultados.length === 0 ? (
            <li className="px-5 py-3 text-sm text-ink-3">
              {idioma === "pt" ? "Sem resultados." : "No results."}
            </li>
          ) : null}
        </ul>
      </motion.div>
    </motion.div>
  );
}
