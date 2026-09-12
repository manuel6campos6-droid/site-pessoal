"use client";

import { motion, useReducedMotion, useScroll, useTransform } from "framer-motion";
import { perfil } from "@/data/profile";
import { seccoes } from "@/data/sections";
import { useIdioma } from "@/lib/idioma";
import { ePlaceholder, t } from "@/lib/texto";

/** O nome entra letra a letra. Palavra a palavra o efeito perde-se num nome
 *  curto, e caracter a caracter num nome longo fica lento; o compromisso é
 *  uma cascata rápida com atraso pequeno. */
function NomeAnimado({ nome }: { nome: string }) {
  const semMovimento = useReducedMotion();
  if (semMovimento) return <>{nome}</>;

  return (
    <>
      {/* O nome inteiro fica legível a leitores de ecrã; os pedaços animados
          são decoração e ficam escondidos deles. */}
      <span className="sr-only">{nome}</span>
      <span aria-hidden>
        {Array.from(nome).map((letra, i) => (
          <motion.span
            key={i}
            className="inline-block"
            initial={{ opacity: 0, y: "0.35em" }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.8,
              delay: 0.15 + i * 0.035,
              ease: [0.16, 1, 0.3, 1],
            }}
          >
            {letra === " " ? " " : letra}
          </motion.span>
        ))}
      </span>
    </>
  );
}

export function Hero() {
  const { idioma } = useIdioma();
  const semMovimento = useReducedMotion();
  const { scrollY } = useScroll();
  // Paralaxe muito curta: o primeiro ecrã afunda um pouco ao sair, nada mais.
  const y = useTransform(scrollY, [0, 600], [0, semMovimento ? 0 : 70]);
  const opacity = useTransform(scrollY, [0, 420], [1, semMovimento ? 1 : 0.2]);

  const posicionamento = t(perfil.positioning, idioma);
  const introducao = t(perfil.intro, idioma);

  return (
    <section
      id="top"
      className="relative flex min-h-[92svh] flex-col justify-between pt-28 pb-10 md:pt-36"
    >
      <motion.div style={{ y, opacity }} className="shell flex-1">
        <div className="flex h-full flex-col justify-center">
          {/* Linha de abertura: a régua cresce da esquerda e puxa o olho para
              o posicionamento. */}
          <div className="flex items-center gap-4">
            <motion.span
              aria-hidden
              className="h-px w-16 origin-left bg-accent"
              initial={{ scaleX: semMovimento ? 1 : 0 }}
              animate={{ scaleX: 1 }}
              transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
            />
            <motion.p
              className={`mono-label ${ePlaceholder(posicionamento) ? "text-accent" : "text-ink-2"}`}
              initial={{ opacity: semMovimento ? 1 : 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.1 }}
            >
              {posicionamento}
            </motion.p>
          </div>

          <h1 className="display-xl mt-6 max-w-5xl">
            <NomeAnimado nome={perfil.name} />
          </h1>

          <motion.p
            className={`mt-8 max-w-xl ${
              ePlaceholder(introducao) ? "mono-label text-accent" : "prose-body"
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
        className="shell flex flex-col gap-6 md:flex-row md:items-end md:justify-between"
        initial={{ opacity: semMovimento ? 1 : 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.9, delay: 0.9 }}
      >
        <a
          href="#about"
          className="group inline-flex items-center gap-3 text-ink-2 transition-colors hover:text-ink"
        >
          <span className="mono-label link-risca">
            {idioma === "pt" ? "Explorar o percurso" : "Explore my story"}
          </span>
          <motion.span
            aria-hidden
            className="text-lg"
            animate={semMovimento ? undefined : { y: [0, 5, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          >
            ↓
          </motion.span>
        </a>

        <ol className="hidden gap-x-6 gap-y-1 md:flex md:flex-wrap md:justify-end">
          {seccoes.map((s) => (
            <li key={s.id}>
              <a
                href={`#${s.id}`}
                className="mono-label num-tabular text-ink-3 transition-colors hover:text-accent"
              >
                {s.index}
              </a>
            </li>
          ))}
        </ol>
      </motion.div>
    </section>
  );
}
