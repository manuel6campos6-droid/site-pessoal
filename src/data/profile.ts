import { type Perfil } from "./types";

// Só entra aqui o que está escrito no CV. O posicionamento e a introdução
// ficam por escrever: uma frase de abertura é uma decisão dele, não uma
// deducao a partir da lista de empregos.
export const perfil: Perfil = {
  name: "Manuel Veríssimo Carreira",
  positioning: {
    en: "[SHORT POSITIONING STATEMENT]",
    pt: "[SHORT POSITIONING STATEMENT]",
  },
  intro: {
    en: "[ONE-SENTENCE INTRODUCTION]",
    pt: "[ONE-SENTENCE INTRODUCTION]",
  },
  about: [
    { en: "[ADD CONTENT]", pt: "[ADD CONTENT]" },
  ],
  location: { en: "Lisbon, Portugal", pt: "Lisboa, Portugal" },
  email: "manuel6campos6@gmail.com",
  links: [
    { label: { en: "LinkedIn", pt: "LinkedIn" }, href: "https://linkedin.com/in/manuelrcarreira" },
  ],
  portrait: undefined,
};
