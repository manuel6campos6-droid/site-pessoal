"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { seccoes } from "@/data/sections";
import { perfil } from "@/data/profile";
import { useIdioma } from "@/lib/idioma";
import { t } from "@/lib/texto";
import { useSeccaoActiva } from "@/lib/useSeccaoActiva";

const ids = seccoes.map((s) => s.id);

export function Navegacao({ onAbrirComandos }: { onAbrirComandos: () => void }) {
  const { idioma, alternar } = useIdioma();
  const activa = useSeccaoActiva(ids);
  // Sobre uma secção de fundo escuro a barra inverte-se, senão o nome e os
  // links desapareciam contra o preto.
  const sobreEscuro = seccoes.find((s) => s.id === activa)?.escura ?? false;
  const [aberto, setAberto] = useState(false);
  const [rolado, setRolado] = useState(false);

  useEffect(() => {
    const medir = () => setRolado(window.scrollY > 24);
    medir();
    window.addEventListener("scroll", medir, { passive: true });
    return () => window.removeEventListener("scroll", medir);
  }, []);

  // O corpo toma a cor da secção em leitura: sem isto ficava uma faixa clara
  // entre a barra fixa e o topo de uma secção escura.
  useEffect(() => {
    document.body.style.backgroundColor = sobreEscuro
      ? "var(--color-night)"
      : "var(--color-paper)";
  }, [sobreEscuro]);

  // Com o menu de telefone aberto, o corpo não rola por trás.
  useEffect(() => {
    document.body.style.overflow = aberto ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [aberto]);

  return (
    <>
      <header
        className={`fixed inset-x-0 top-0 z-50 transition-colors duration-300 ${
          sobreEscuro ? "text-night-ink" : "text-ink"
        } ${
          rolado
            ? sobreEscuro
              ? "bg-night"
              : "bg-paper/85 backdrop-blur-md"
            : "bg-transparent"
        }`}
      >
        <div className="shell flex h-16 items-center justify-between gap-6 md:h-20">
          <a
            href="#top"
            className="link-risca font-display text-lg tracking-tight md:text-xl"
          >
            {perfil.name}
          </a>

          <nav className="hidden items-center gap-7 lg:flex" aria-label="Sections">
            {seccoes.map((s) => (
              <a
                key={s.id}
                href={`#${s.id}`}
                aria-current={activa === s.id ? "true" : undefined}
                className={`mono-label link-risca transition-colors ${
                  activa === s.id
                    ? "opacity-100"
                    : sobreEscuro
                      ? "text-night-ink-2 hover:opacity-100"
                      : "text-ink-3 hover:text-ink-2"
                }`}
              >
                {t(s.label, idioma)}
              </a>
            ))}
          </nav>

          <div className="flex items-center gap-2">
            <button
              type="button"
              onClick={alternar}
              className={`mono-label rounded-full border px-3 py-1.5 transition-colors ${
                sobreEscuro ? "border-night-rule" : "border-rule text-ink-2"
              }`}
              aria-label={idioma === "en" ? "Mudar para português" : "Switch to English"}
            >
              {idioma === "en" ? "PT" : "EN"}
            </button>
            <button
              type="button"
              onClick={onAbrirComandos}
              className={`mono-label hidden rounded-full border px-3 py-1.5 transition-colors md:inline-flex ${
                sobreEscuro ? "border-night-rule" : "border-rule text-ink-2"
              }`}
            >
              ⌘K
            </button>
            <button
              type="button"
              onClick={() => setAberto(true)}
              className={`mono-label rounded-full border px-3 py-1.5 lg:hidden ${
                sobreEscuro ? "border-night-rule" : "border-rule text-ink-2"
              }`}
              aria-expanded={aberto}
            >
              {idioma === "pt" ? "Menu" : "Menu"}
            </button>
          </div>
        </div>
        <div
          className={`h-px transition-opacity duration-300 ${
            sobreEscuro ? "bg-night-rule" : "bg-rule"
          } ${rolado ? "opacity-100" : "opacity-0"}`}
        />
      </header>

      {/* No telefone a navegação é uma folha inteira, não uma cópia encolhida
          da barra de cima. */}
      <AnimatePresence>
        {aberto ? (
          <motion.div
            className="fixed inset-0 z-60 bg-paper lg:hidden"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
          >
            <div className="shell flex h-16 items-center justify-between">
              <span className="font-display text-lg">{perfil.name}</span>
              <button
                type="button"
                onClick={() => setAberto(false)}
                className="mono-label rounded-full border border-rule px-3 py-1.5 text-ink-2"
              >
                {idioma === "pt" ? "Fechar" : "Close"}
              </button>
            </div>
            <nav className="shell mt-6 flex flex-col">
              {seccoes.map((s) => (
                <a
                  key={s.id}
                  href={`#${s.id}`}
                  onClick={() => setAberto(false)}
                  className="hairline flex items-baseline gap-4 py-4"
                >
                  <span className="mono-label text-ink-3">{s.index}</span>
                  <span className="display-md">{t(s.label, idioma)}</span>
                </a>
              ))}
            </nav>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </>
  );
}
