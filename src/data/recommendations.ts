import { type Recomendacao } from "./types";

export const recomendacoes: Recomendacao[] = [
  {
    citacao:
      "Manuel is a trustworthy, talented, and hard-working student, and I am confident that he will continue to demonstrate the perseverance, optimism, and dedication that he showed throughout the course and in his interactions with his peers.",
    autor: "Sofia Pinto da Rocha",
    cargo: {
      en: "Management & Control Systems Teacher",
      pt: "Professora de Management & Control Systems",
    },
    instituicao: "Católica Lisbon School of Business & Economics",
    contexto: {
      en: "Taught me Management & Control Systems in my final year.",
      pt: "Foi minha professora de Management & Control Systems no último ano.",
    },
    data: { en: "September 2026", pt: "Setembro de 2026" },
    carta: {
      label: { en: "Download the letter", pt: "Descarregar a carta" },
      href: "/cartas/carta-recomendacao-sofia-pinto-da-rocha.pdf",
      kind: "PDF",
    },
  },
];
