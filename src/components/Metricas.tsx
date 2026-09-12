"use client";

import { useEffect, useRef, useState } from "react";
import { useInView, useReducedMotion } from "framer-motion";
import type { Metrica } from "@/data/types";
import { useIdioma } from "@/lib/idioma";
import { t } from "@/lib/texto";

/** Anima um número inteiro à entrada. Valores com texto ("€1.2M", "3 anos")
 *  passam intactos: contar caracteres daria resultados errados. */
function Valor({ valor }: { valor: string }) {
  const semMovimento = useReducedMotion();
  const ref = useRef<HTMLSpanElement>(null);
  const visivel = useInView(ref, { once: true, margin: "-15%" });
  const numero = Number(valor.replace(/[\s,]/g, ""));
  const animavel = !semMovimento && Number.isFinite(numero) && /^[\d\s,]+$/.test(valor);
  const [actual, setActual] = useState(animavel ? 0 : numero);

  useEffect(() => {
    if (!animavel || !visivel) return;
    const inicio = performance.now();
    const duracao = 900;
    let frame = 0;
    const passo = (agora: number) => {
      const p = Math.min((agora - inicio) / duracao, 1);
      // Ease-out: o número trava no fim em vez de parar de repente.
      setActual(Math.round(numero * (1 - Math.pow(1 - p, 3))));
      if (p < 1) frame = requestAnimationFrame(passo);
    };
    frame = requestAnimationFrame(passo);
    return () => cancelAnimationFrame(frame);
  }, [animavel, visivel, numero]);

  return (
    <span ref={ref}>
      {animavel ? actual.toLocaleString("pt-PT") : valor}
    </span>
  );
}

export function Metricas({
  metricas,
  escura = false,
}: {
  metricas?: Metrica[];
  escura?: boolean;
}) {
  const { idioma } = useIdioma();
  if (!metricas || metricas.length === 0) return null;

  return (
    <dl className="grid grid-cols-2 gap-x-8 gap-y-10 md:grid-cols-4">
      {metricas.map((m, i) => (
        <div key={i} className="flex flex-col">
          <dd className="font-display num-tabular text-4xl leading-none tracking-tight md:text-5xl">
            <Valor valor={m.value} />
          </dd>
          <dt
            className={`mono-label mt-3 ${escura ? "text-night-ink-2" : "text-ink-3"}`}
          >
            {t(m.label, idioma)}
          </dt>
          {m.note ? (
            <p className={`mt-2 text-sm ${escura ? "text-night-ink-2" : "text-ink-3"}`}>
              {t(m.note, idioma)}
            </p>
          ) : null}
        </div>
      ))}
    </dl>
  );
}
