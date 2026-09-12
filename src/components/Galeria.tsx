"use client";

import type { Imagem } from "@/data/types";
import { Figura } from "./Figura";
import { Revelar } from "./Revelar";
import { Vazio } from "./Vazio";

/** Grelha editorial de imagens. No telefone é uma coluna; a partir do tablet
 *  alterna larguras para não parecer uma folha de contactos. */
export function Galeria({
  imagens,
  marcador = "[GALLERY]",
  escura = false,
}: {
  imagens?: Imagem[];
  marcador?: string;
  escura?: boolean;
}) {
  if (!imagens || imagens.length === 0) {
    return <Vazio marcador={marcador} escura={escura} alto />;
  }

  return (
    <div className="grid grid-cols-1 gap-6 md:grid-cols-6 md:gap-8">
      {imagens.map((img, i) => (
        <Revelar
          key={`${img.src}-${i}`}
          delay={(i % 3) * 0.05}
          // O padrão 4+2 dá ritmo sem precisar de tamanhos escolhidos à mão.
          className={i % 3 === 0 ? "md:col-span-4" : "md:col-span-2"}
        >
          <Figura
            imagem={img}
            escura={escura}
            ratio={i % 3 === 0 ? "16/10" : "4/5"}
          />
        </Revelar>
      ))}
    </div>
  );
}
