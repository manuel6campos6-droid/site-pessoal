"use client";

import { useState } from "react";
import type { Imagem } from "@/data/types";
import { useIdioma } from "@/lib/idioma";
import { t } from "@/lib/texto";
import { Figura } from "./Figura";
import { Lightbox } from "./Lightbox";
import { Revelar } from "./Revelar";
import { Vazio } from "./Vazio";

/** Grelha editorial de imagens. No telefone é uma coluna; a partir do tablet
 *  alterna larguras para não parecer uma folha de contactos.
 *
 *  `ratio` fixa a forma de todas as imagens: capturas de telemóvel, que são
 *  verticais, ficavam decapitadas nos cortes largos por omissão. */
export function Galeria({
  imagens,
  marcador = "[GALLERY]",
  escura = false,
  ratio,
  inteira = false,
}: {
  imagens?: Imagem[];
  marcador?: string;
  escura?: boolean;
  ratio?: string;
  inteira?: boolean;
}) {
  const { idioma } = useIdioma();
  const [aberta, setAberta] = useState<number | null>(null);

  if (!imagens || imagens.length === 0) {
    return <Vazio marcador={marcador} escura={escura} alto />;
  }

  return (
    <>
      <div
        className={
          ratio
            ? "grid grid-cols-2 gap-2 md:grid-cols-3 md:gap-3 lg:grid-cols-6"
            : "grid grid-cols-1 gap-6 md:grid-cols-6 md:gap-8"
        }
      >
        {imagens.map((img, i) => (
          <Revelar
            key={`${img.src}-${i}`}
            delay={(i % 3) * 0.05}
            // Com forma fixa, todas as imagens valem o mesmo e ficam numa grelha
            // regular. Sem ela, o padrão 4+2 dá ritmo a imagens de formas várias.
            className={ratio ? "" : i % 3 === 0 ? "md:col-span-4" : "md:col-span-2"}
          >
            {/* A fotografia abre em grande ao clique. É um botão, e não uma
                imagem com onClick, para responder também ao teclado. */}
            <button
              type="button"
              onClick={() => setAberta(i)}
              aria-label={`${t(img.alt, idioma)} ${
                idioma === "pt" ? "(abrir em grande)" : "(open larger)"
              }`}
              className="group block w-full cursor-zoom-in text-left"
            >
              <Figura
                imagem={img}
                escura={escura}
                inteira={inteira}
                ratio={ratio ?? (i % 3 === 0 ? "16/10" : "4/5")}
              />
            </button>
          </Revelar>
        ))}
      </div>

      <Lightbox
        imagens={imagens}
        indice={aberta}
        aoFechar={() => setAberta(null)}
        aoMudar={setAberta}
      />
    </>
  );
}
