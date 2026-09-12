import { FALTA, FALTA_TRADUCAO, type Idioma, type Texto } from "@/data/types";

/** Lê um texto bilingue. Se o lado pedido estiver por traduzir, cai no outro,
 *  para o site nunca mostrar "[FALTA TRADUÇÃO]" a um visitante. */
export function t(texto: Texto | undefined, idioma: Idioma): string {
  if (!texto) return "";
  const escolhido = texto[idioma];
  const alternativo = idioma === "en" ? texto.pt : texto.en;
  if (!escolhido || escolhido === FALTA_TRADUCAO) return alternativo ?? "";
  return escolhido;
}

/** Um texto por preencher não conta como conteúdo: as secções usam isto para
 *  decidir entre desenhar o bloco real ou o estado vazio. */
export function temConteudo(texto: Texto | undefined): boolean {
  if (!texto) return false;
  const valores = [texto.en, texto.pt].filter(Boolean);
  if (valores.length === 0) return false;
  return valores.some(
    (v) => v !== FALTA && v !== FALTA_TRADUCAO && !/^\[[A-Z\s/]+\]$/.test(v.trim()),
  );
}

/** Verdadeiro quando o valor é um marcador do tipo [ADD CONTENT] ou [NAME]. */
export function ePlaceholder(valor: string | undefined): boolean {
  if (!valor) return false;
  return /^\[[A-Z\s/]+\]$/.test(valor.trim());
}
