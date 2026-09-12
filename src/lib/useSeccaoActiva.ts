"use client";

import { useEffect, useState } from "react";

/** Diz qual das secções está a ser lida, para a navegação a destacar.
 *  Escolhe a última secção cujo topo já passou a marca de um terço do ecrã:
 *  com IntersectionObserver sozinho, secções altas e baixas competiam e o
 *  destaque saltava. Devolve vazio nas páginas sem secções nenhumas, para a
 *  navegação não destacar um sítio onde o visitante não está. */
export function useSeccaoActiva(ids: string[]): string {
  const [activa, setActiva] = useState("");

  useEffect(() => {
    const medir = () => {
      const marca = window.innerHeight * 0.34;
      const presentes = ids.filter((id) => document.getElementById(id));
      if (presentes.length === 0) {
        setActiva("");
        return;
      }
      let escolhida = presentes[0];
      for (const id of presentes) {
        const elemento = document.getElementById(id);
        if (!elemento) continue;
        if (elemento.getBoundingClientRect().top <= marca) escolhida = id;
      }
      setActiva(escolhida);
    };
    medir();
    window.addEventListener("scroll", medir, { passive: true });
    window.addEventListener("resize", medir);
    return () => {
      window.removeEventListener("scroll", medir);
      window.removeEventListener("resize", medir);
    };
  }, [ids]);

  return activa;
}
