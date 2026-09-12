import { type Percurso } from "./types";

export const educacao: Percurso[] = [
  {
    organisation: "Católica Lisbon School of Business and Economics",
    role: {
      en: "Bachelor's in Business Administration",
      pt: "Licenciatura em Gestão",
    },
    period: "09/2023 – 07/2026",
    location: { en: "Lisbon, Portugal", pt: "Lisboa, Portugal" },
    notes: [
      {
        en: "Coursework: Finance; Management and Control Systems; Economics; Introduction to Law; Mathematics; Statistics",
        pt: "Cadeiras: Finanças; Sistemas de Gestão e Controlo; Economia; Introdução ao Direito; Matemática; Estatística",
      },
    ],
  },
  {
    organisation: "University of St Gallen, HSG",
    role: { en: "Exchange semester", pt: "Semestre de intercâmbio" },
    period: "02/2026 – 06/2026",
    location: { en: "St Gallen, Switzerland", pt: "St Gallen, Suíça" },
  },
];

/** Certificações e formação avulsa, fora do percurso académico. */
export const certificacoes = [
  { label: { en: "Bloomberg Market Concepts", pt: "Bloomberg Market Concepts" }, year: "2026" },
];
