"use client";

import { useRef } from "react";
import Link from "next/link";
import { motion, useReducedMotion, useScroll, useSpring } from "framer-motion";
import { projectos } from "@/data/projects";
import { useIdioma } from "@/lib/idioma";
import { t, temConteudo } from "@/lib/texto";
import { Revelar } from "./Revelar";
import { Vazio } from "./Vazio";

/** Linha do tempo do percurso. No computador tem a linha vertical que se
 *  desenha à medida da leitura; no telefone é uma progressão simples, porque
 *  a linha animada não sobrevive a uma coluna estreita. */
export function Timeline() {
  const { idioma } = useIdioma();
  const alvo = useRef<HTMLDivElement>(null);
  const semMovimento = useReducedMotion();
  const { scrollYProgress } = useScroll({
    target: alvo,
    offset: ["start 70%", "end 60%"],
  });
  const progresso = useSpring(scrollYProgress, { stiffness: 90, damping: 24 });

  if (projectos.length === 0) {
    return <Vazio marcador="[JOURNEY]" escura alto />;
  }

  return (
    <div ref={alvo} className="relative">
      {/* Carril da linha do tempo, só a partir do tablet. */}
      <div
        aria-hidden
        className="absolute top-0 bottom-0 left-0 hidden w-px bg-night-rule md:block"
      />
      <motion.div
        aria-hidden
        className="absolute top-0 left-0 hidden w-px origin-top bg-accent md:block"
        style={{
          height: "100%",
          scaleY: semMovimento ? 1 : progresso,
        }}
      />

      <ol className="flex flex-col">
        {projectos.map((p, i) => {
          const temTexto = temConteudo(p.tagline) || temConteudo(p.description);
          return (
            <li
              key={p.slug}
              className="border-t border-night-rule first:border-t-0 md:pl-10 lg:pl-16"
            >
              <Revelar delay={i * 0.06}>
                <div className="group py-10 transition-opacity duration-500 md:py-14">
                  <div className="flex flex-col gap-6 md:flex-row md:items-start md:justify-between">
                    <div className="max-w-2xl">
                      <div className="mono-label flex items-center gap-3 text-night-ink-2">
                        <span>{String(i + 1).padStart(2, "0")}</span>
                        {p.period ? <span>{p.period}</span> : null}
                        {p.status ? <span>{t(p.status, idioma)}</span> : null}
                      </div>
                      <h3 className="display-md mt-3 transition-colors duration-500 group-hover:text-accent">
                        {p.name}
                      </h3>
                      {temConteudo(p.tagline) ? (
                        <p className="mt-3 text-lg text-night-ink-2">
                          {t(p.tagline, idioma)}
                        </p>
                      ) : null}
                      {temConteudo(p.description) ? (
                        <p className="prose-body mt-4 text-night-ink-2">
                          {t(p.description, idioma)}
                        </p>
                      ) : null}
                      {!temTexto ? (
                        <p className="mono-label mt-4 text-accent">[ADD CONTENT]</p>
                      ) : null}
                    </div>

                    <div className="flex shrink-0 flex-col items-start gap-4 md:items-end">
                      {p.metrics && p.metrics.length > 0 ? (
                        <dl className="flex gap-8">
                          {p.metrics.slice(0, 2).map((m, k) => (
                            <div key={k}>
                              <dt className="mono-label text-night-ink-2">
                                {t(m.label, idioma)}
                              </dt>
                              <dd className="font-display num-tabular mt-1 text-3xl">{m.value}</dd>
                            </div>
                          ))}
                        </dl>
                      ) : null}
                      <Link
                        href={`/projects/${p.slug}`}
                        className="mono-label inline-flex items-center gap-2 border-b border-night-rule pb-1 transition-colors group-hover:border-accent group-hover:text-accent"
                      >
                        {idioma === "pt" ? "Ver projecto" : "View project"}
                        <span
                          aria-hidden
                          className="transition-transform duration-500 group-hover:translate-x-1"
                        >
                          →
                        </span>
                      </Link>
                    </div>
                  </div>
                </div>
              </Revelar>
            </li>
          );
        })}
      </ol>
    </div>
  );
}
