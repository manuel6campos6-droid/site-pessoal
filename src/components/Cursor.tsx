"use client";

import { useEffect, useState, useSyncExternalStore } from "react";
import { motion, useMotionValue, useReducedMotion, useSpring } from "framer-motion";

/** Ter um rato é estado do aparelho, não do React: lê-se da media query, que
 *  também avisa quando muda (um tablet com teclado e trackpad acoplado). */
const consulta = () =>
  typeof window === "undefined" ? null : window.matchMedia("(pointer: fine)");

function subscreverAponta(ouvinte: () => void) {
  const mq = consulta();
  mq?.addEventListener("change", ouvinte);
  return () => mq?.removeEventListener("change", ouvinte);
}

const temRato = () => consulta()?.matches ?? false;
// No servidor não há rato nenhum: o cursor só aparece depois de hidratar.
const semRatoNoServidor = () => false;

/** Ponto que segue o rato e cresce sobre o que é clicável. Só existe em
 *  apontadores finos: num ecrã táctil não há rato para seguir, e em quem pede
 *  menos movimento não aparece de todo. */
export function Cursor() {
  const semMovimento = useReducedMotion();
  const rato = useSyncExternalStore(subscreverAponta, temRato, semRatoNoServidor);
  const activo = rato && !semMovimento;
  const [sobreLink, setSobreLink] = useState(false);
  const [visivel, setVisivel] = useState(false);

  const x = useMotionValue(0);
  const y = useMotionValue(0);
  // A mola dá o atraso que faz o ponto parecer seguir o rato em vez de estar
  // colado a ele.
  const sx = useSpring(x, { stiffness: 420, damping: 34, mass: 0.5 });
  const sy = useSpring(y, { stiffness: 420, damping: 34, mass: 0.5 });

  useEffect(() => {
    if (!activo) return;

    const mover = (e: PointerEvent) => {
      x.set(e.clientX);
      y.set(e.clientY);
      setVisivel(true);
      const alvo = e.target as Element | null;
      setSobreLink(Boolean(alvo?.closest("a, button, [role='button'], input")));
    };
    const sair = () => setVisivel(false);

    window.addEventListener("pointermove", mover);
    window.addEventListener("pointerleave", sair);
    return () => {
      window.removeEventListener("pointermove", mover);
      window.removeEventListener("pointerleave", sair);
    };
  }, [activo, x, y]);

  if (!activo) return null;

  return (
    <motion.div
      aria-hidden
      className="pointer-events-none fixed top-0 left-0 z-90 hidden rounded-full border border-accent md:block"
      style={{ x: sx, y: sy, translateX: "-50%", translateY: "-50%" }}
      animate={{
        width: sobreLink ? 42 : 12,
        height: sobreLink ? 42 : 12,
        opacity: visivel ? (sobreLink ? 1 : 0.55) : 0,
        backgroundColor: sobreLink ? "transparent" : "var(--color-accent)",
      }}
      transition={{ duration: 0.22, ease: [0.16, 1, 0.3, 1] }}
    />
  );
}
