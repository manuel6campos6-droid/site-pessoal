import { type Percurso } from "./types";

/** Experiência profissional por conta de outrem, separada dos projectos
 *  próprios: o percurso de empreendedorismo e um estágio contam histórias
 *  diferentes e não devem partilhar a mesma lista. */
export const experiencia: Percurso[] = [
  {
    organisation: "BPI Gestão de Ativos",
    role: {
      en: "Asset Management Summer Intern",
      pt: "Estágio de verão em gestão de activos",
    },
    period: "07/2026",
    location: { en: "Lisbon, Portugal", pt: "Lisboa, Portugal" },
    notes: [
      {
        en: "Shadowed investment professionals across departments, with exposure to portfolio management and investment decision-making.",
        pt: "Acompanhei profissionais de investimento nos vários departamentos, com contacto com gestão de carteiras e decisão de investimento.",
      },
    ],
  },
];

/** Actividades extracurriculares e voluntariado. */
export const actividades: Percurso[] = [
  {
    organisation: "Bank Experience Club",
    role: { en: "Head of Corporate Banking", pt: "Head of Corporate Banking" },
    period: "[PERIOD]",
    location: { en: "Católica University", pt: "Universidade Católica" },
    notes: [
      {
        en: "Managed a small team.",
        pt: "Geri uma equipa pequena.",
      },
    ],
  },
  {
    organisation: "Investments Club",
    role: { en: "Member", pt: "Membro" },
    period: "[PERIOD]",
    location: { en: "Católica University", pt: "Universidade Católica" },
  },
  {
    organisation: "Web Summit",
    role: { en: "Volunteer", pt: "Voluntário" },
    period: "2024",
  },
];

/** Competências declaradas no CV, tal como lá estão. */
export const competencias = {
  finance: ["DCF models"],
  tools: ["MS Office Suite", "Canva", "AI tools"],
  languages: [
    { label: { en: "Portuguese", pt: "Português" }, level: { en: "Native", pt: "Nativo" } },
    { label: { en: "English", pt: "Inglês" }, level: { en: "Advanced", pt: "Avançado" } },
    { label: { en: "Spanish", pt: "Espanhol" }, level: { en: "Intermediate", pt: "Intermédio" } },
  ],
};
