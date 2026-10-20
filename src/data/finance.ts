import { type ProjectoFinanceiro } from "./types";

// Só entra aqui o que ele pôs na pasta do site. O ficheiro fica descarregável:
// um modelo financeiro lê-se na folha, não numa captura de ecrã.
export const projectosFinanceiros: ProjectoFinanceiro[] = [
  {
    slug: "campervan",
    title: { en: "Campervan rental", pt: "Aluguer de autocaravanas" },
    category: { en: "Business plan", pt: "Plano de negócio" },
    description: {
      en: "A business plan for a campervan rental operation.",
      pt: "Um plano de negócio para uma operação de aluguer de autocaravanas.",
    },
    files: [
      {
        label: { en: "Business plan", pt: "Plano de negócio" },
        href: "/financas/campervan.xlsx",
        kind: "XLSX",
      },
    ],
  },
  {
    slug: "amazon-dsp",
    title: { en: "Amazon DSP: phase two", pt: "Amazon DSP: fase dois" },
    category: { en: "Business plan", pt: "Plano de negócio" },
    description: {
      en: "The second phase of a plan for an Amazon delivery service partner operation.",
      pt: "A segunda fase de um plano para uma operação de parceiro de entregas da Amazon.",
    },
    files: [
      {
        label: { en: "Phase two", pt: "Fase dois" },
        href: "/financas/amazon.xlsx",
        kind: "XLSX",
      },
    ],
  },
  {
    slug: "pizzas",
    title: { en: "Pizzas à maneira", pt: "Pizzas à maneira" },
    category: { en: "Business plan", pt: "Plano de negócio" },
    description: {
      en: "A business plan for a pizza operation.",
      pt: "Um plano de negócio para uma operação de pizzas.",
    },
    files: [
      {
        label: { en: "Model", pt: "Modelo" },
        href: "/financas/pizzas.xlsx",
        kind: "XLSX",
      },
    ],
  },
];
