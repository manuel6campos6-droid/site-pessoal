"use client";

import type { ReactNode } from "react";
import { motion, useReducedMotion } from "framer-motion";
import { useIdioma } from "@/lib/idioma";
import { t, temConteudo } from "@/lib/texto";
import type { Seccao as Dados } from "@/data/sections";

/** Moldura de uma secção: título grande, uma linha de apoio por baixo e o
 *  corpo. Sem número nem régua: é o espaço em volta que separa as secções e
 *  não uma linha desenhada.
 *
 *  O fundo escuro é uma propriedade da secção, declarada em data/sections.ts,
 *  para a barra de navegação poder inverter as cores sem repetir a lista. */
export function Seccao({
  dados,
  children,
}: {
  dados: Dados;
  children: ReactNode;
}) {
  const { idioma } = useIdioma();
  const semMovimento = useReducedMotion();
  const escura = dados.escura ?? false;
  const cinzenta = dados.cinzenta ?? false;
  const titulo = t(dados.label, idioma);

  return (
    <section
      id={dados.id}
      // A margem de rolagem é a altura exacta da barra fixa. A mais, deixava
      // ver uma faixa da secção anterior por baixo dela.
      className={`scroll-mt-12 py-(--spacing-section) md:scroll-mt-14 ${
        escura
          ? "bg-night text-night-ink"
          : cinzenta
            ? "bg-paper-2 text-ink"
            : "bg-paper text-ink"
      }`}
    >
      <div className="shell">
        <header className="max-w-2xl">
          <motion.h2
            className="display-lg"
            initial={semMovimento ? undefined : { opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          >
            {titulo}
          </motion.h2>
          {temConteudo(dados.kicker) ? (
            <motion.p
              className={`prose-body mt-3 ${escura ? "text-night-ink-2" : ""}`}
              initial={semMovimento ? undefined : { opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.7, delay: 0.08, ease: [0.16, 1, 0.3, 1] }}
            >
              {t(dados.kicker!, idioma)}
            </motion.p>
          ) : null}
        </header>
        <div className="mt-14 md:mt-20">{children}</div>
      </div>
    </section>
  );
}
