"use client";

import { motion, useReducedMotion, useScroll, useTransform } from "framer-motion";
import { useIdioma } from "@/lib/idioma";

export function Hero() {
  const { idioma } = useIdioma();
  const semMovimento = useReducedMotion();
  const { scrollY } = useScroll();
  // Paralaxe muito curta: o primeiro ecrã afunda um pouco ao sair, nada mais.
  const y = useTransform(scrollY, [0, 600], [0, semMovimento ? 0 : 28]);
  const opacity = useTransform(scrollY, [0, 480], [1, semMovimento ? 1 : 0.45]);

  return (
    <section
      id="top"
      className="relative pt-28 pb-16 md:pt-36 md:pb-24"
    >
      {/* O primeiro ecrã é só o convite a descer. O nome vive na barra fixa,
          logo ali em cima. */}
      <motion.div style={{ y, opacity }} className="shell">
        <motion.a
          href="#about"
          className="botao group"
          initial={{ opacity: semMovimento ? 1 : 0, y: semMovimento ? 0 : 8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
        >
          {idioma === "pt" ? "Explorar o percurso" : "Explore my story"}
          <span
            aria-hidden
            className="transition-transform duration-500 group-hover:translate-y-0.5"
          >
            ↓
          </span>
        </motion.a>
      </motion.div>
    </section>
  );
}
