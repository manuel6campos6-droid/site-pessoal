"use client";

import { interesses } from "@/data/interests";
import { useIdioma } from "@/lib/idioma";
import { t, temConteudo } from "@/lib/texto";
import { Figura } from "./Figura";
import { Revelar } from "./Revelar";
import { Vazio } from "./Vazio";

export function SeccaoInteresses() {
  const { idioma } = useIdioma();
  if (interesses.length === 0) return <Vazio marcador="[INTERESTS]" />;

  return (
    <ul className="flex max-w-3xl flex-col">
      {interesses.map((item, i) => (
        <li
          key={i}
          className="border-t border-rule py-6 first:border-t-0 first:pt-0"
        >
          <Revelar
            delay={i * 0.04}
            className="flex flex-col gap-2 md:flex-row md:items-baseline md:gap-10"
          >
            {temConteudo(item.title) ? (
              <h3 className="display-md md:w-64 md:shrink-0">{t(item.title, idioma)}</h3>
            ) : (
              <p className="marcador md:w-64 md:shrink-0">[INTEREST]</p>
            )}
            {temConteudo(item.description) ? (
              <p className="text-ink-2">{t(item.description, idioma)}</p>
            ) : null}
            {item.images && item.images.length > 0 ? (
              <div className="w-full md:max-w-xs">
                <Figura imagem={item.images[0]} ratio="4/3" />
              </div>
            ) : null}
          </Revelar>
        </li>
      ))}
    </ul>
  );
}
