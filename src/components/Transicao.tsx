"use client";

import { usePathname } from "next/navigation";
import { motion, useReducedMotion } from "framer-motion";
import type { ReactNode } from "react";

/** Entrada suave a cada mudança de página. A chave é o caminho: sem ela o
 *  React reaproveita a árvore e a transição nunca chega a correr. */
export function Transicao({ children }: { children: ReactNode }) {
  const caminho = usePathname();
  const semMovimento = useReducedMotion();

  if (semMovimento) return <>{children}</>;

  return (
    <motion.div
      key={caminho}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
    >
      {children}
    </motion.div>
  );
}
