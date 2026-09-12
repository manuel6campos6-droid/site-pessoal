import { FALTA, porPreencher, type Perfil } from "./types";

// Nada aqui é inventado. Cada campo espera conteúdo dado explicitamente.
export const perfil: Perfil = {
  name: "[NAME]",
  positioning: porPreencher("[SHORT POSITIONING STATEMENT]"),
  intro: porPreencher("[ONE-SENTENCE INTRODUCTION]"),
  about: [porPreencher(FALTA)],
  location: undefined,
  email: undefined,
  links: [],
  portrait: undefined,
};
