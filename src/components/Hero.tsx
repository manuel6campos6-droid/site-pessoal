"use client";

import { motion, useReducedMotion, useScroll, useTransform } from "framer-motion";
import { perfil } from "@/data/profile";
import { useIdioma } from "@/lib/idioma";
import { ePlaceholder, t } from "@/lib/texto";

export function Hero() {
  const { idioma } = useIdioma();
  const semMovimento = useReducedMotion();
  const { scrollY } = useScroll();
  // Paralaxe muito curta: o primeiro ecrã afunda um pouco ao sair, nada mais.
  const y = useTransform(scrollY, [0, 600], [0, semMovimento ? 0 : 28]);
  const opacity = useTransform(scrollY, [0, 480], [1, semMovimento ? 1 : 0.45]);

  const posicionamento = t(perfil.positioning, idioma);
  const introducao = t(perfil.intro, idioma);

  return (
    <section
      id="top"
      className="relative pt-28 pb-16 md:pt-36 md:pb-24"
    >
      <motion.div style={{ y, opacity }} className="shell">
        <div>
          {/* Linha de abertura: a régua cresce da esquerda e puxa o olho para
              o posicionamento. */}
          <motion.p
            className={`mono-label ${ePlaceholder(posicionamento) ? "marcador" : "text-ink-3"}`}
            initial={{ opacity: semMovimento ? 1 : 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
          >
            {posicionamento}
          </motion.p>

          <motion.h1
            className="display-xl mt-5 max-w-2xl"
            initial={{ opacity: semMovimento ? 1 : 0, y: semMovimento ? 0 : 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
          >
            {perfil.name}
          </motion.h1>

          <motion.p
            className={`mt-8 max-w-xl ${
              ePlaceholder(introducao) ? "marcador" : "prose-body"
            }`}
            initial={{ opacity: semMovimento ? 1 : 0, y: semMovimento ? 0 : 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.55, ease: [0.16, 1, 0.3, 1] }}
          >
            {introducao}
          </motion.p>
        </div>
      </motion.div>

      {/* Rodapé do primeiro ecrã: o convite a explorar de um lado, o índice das
          secções do outro. Dá a ver a extensão do site sem obrigar a rolar. */}
      <motion.div
        className="shell mt-12 md:mt-16"
        initial={{ opacity: semMovimento ? 1 : 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.9, delay: 0.5 }}
      >
        <a
          href="#about"
          className="group inline-flex items-center gap-3 text-ink-2 transition-colors hover:text-ink"
        >
          <span className="mono-label link-risca">
            {idioma === "pt" ? "Explorar o percurso" : "Explore my story"}
          </span>
          <span aria-hidden className="transition-transform duration-500 group-hover:translate-y-0.5">
            ↓
          </span>
        </a>

      </motion.div>
    </section>
  );
}
