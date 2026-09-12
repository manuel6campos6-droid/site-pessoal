"use client";

import type { ReactNode } from "react";
import { motion, useReducedMotion } from "framer-motion";
import { useIdioma } from "@/lib/idioma";
import { t } from "@/lib/texto";
import type { Seccao as Dados } from "@/data/sections";
import { Revelar } from "./Revelar";

/** Moldura de uma secção: número, régua, título grande e o corpo.
 *  O fundo escuro é uma propriedade da secção, declarada em data/sections.ts,
 *  para a barra de navegação poder inverter as cores sem repetir a lista. */
export function Seccao({
  dados,
  children,
  alinhamento = "esquerda",
}: {
  dados: Dados;
  children: ReactNode;
  alinhamento?: "esquerda" | "direita";
}) {
  const { idioma } = useIdioma();
  const semMovimento = useReducedMotion();
  const escura = dados.escura ?? false;
  const titulo = t(dados.label, idioma);

  return (
    <section
      id={dados.id}
      // A margem de rolagem é a altura exacta da barra fixa. A mais, deixava
      // ver uma faixa da secção anterior por baixo dela.
      className={`scroll-mt-16 py-(--spacing-section) md:scroll-mt-[5.0625rem] ${
        escura ? "bg-night text-night-ink" : "bg-paper text-ink"
      }`}
    >
      <div className="shell">
        <header
          className={`flex flex-col ${
            alinhamento === "direita" ? "md:items-end md:text-right" : ""
          }`}
        >
          <Revelar>
            <div
              className={`mono-label num-tabular flex items-center gap-4 ${
                escura ? "text-night-ink-2" : "text-ink-3"
              }`}
            >
              <span>{dados.index}</span>
              <span
                aria-hidden
                className={`h-px w-10 ${escura ? "bg-night-rule" : "bg-rule"}`}
              />
              {dados.kicker ? <span>{t(dados.kicker, idioma)}</span> : null}
            </div>
          </Revelar>

          <motion.h2
            className="display-lg mt-3"
            initial={semMovimento ? undefined : { opacity: 0, y: 8 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          >
            {titulo}
          </motion.h2>
        </header>
        <div className="mt-14 md:mt-20">{children}</div>
      </div>
    </section>
  );
}
