"use client";

import { interesses } from "@/data/interests";
import { useIdioma } from "@/lib/idioma";
import { t, temConteudo } from "@/lib/texto";
import { Figura } from "./Figura";
import { Revelar } from "./Revelar";
import { Vazio } from "./Vazio";

export function SeccaoInteresses() {
  const { idioma } = useIdioma();
  if (interesses.length === 0) return <Vazio marcador="[INTERESTS]" alto />;

  return (
    <div className="grid grid-cols-1 gap-12 md:grid-cols-3 md:gap-10">
      {interesses.map((item, i) => (
        <Revelar key={i} delay={(i % 3) * 0.06}>
          <article>
            {item.images && item.images.length > 0 ? (
              <div className="mb-5">
                <Figura imagem={item.images[0]} ratio="1/1" />
              </div>
            ) : null}
            {temConteudo(item.title) ? (
              <h3 className="display-md">{t(item.title, idioma)}</h3>
            ) : (
              <p className="mono-label text-accent">[INTEREST]</p>
            )}
            {temConteudo(item.description) ? (
              <p className="prose-body mt-3">{t(item.description, idioma)}</p>
            ) : (
              <p className="mono-label mt-3 text-accent">[ADD CONTENT]</p>
            )}
          </article>
        </Revelar>
      ))}
    </div>
  );
}
