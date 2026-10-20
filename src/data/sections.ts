import { type Texto } from "./types";

/** Uma secção do site. A navegação, o menu de comandos e a ordem da página
 *  saem todos daqui: acrescentar uma secção é acrescentar uma linha. */
export type Seccao = {
  id: string;
  /** Número da secção. Já não aparece na página, que segue o desenho da
   *  Apple; serve o menu de comandos, onde ajuda a contar as secções. */
  index: string;
  label: Texto;
  /** Linha de apoio por baixo do título grande, ao centro. Diz numa frase
   *  o que a secção mostra: um título sozinho deixa o leitor a adivinhar. */
  kicker?: Texto;
  /** Fundo escuro. A barra de navegação inverte as cores em cima destas. */
  escura?: boolean;
  /** Fundo cinzento claro. Serve para separar duas secções claras seguidas:
   *  a branco puro, uma corria para a outra sem se perceber onde acaba. */
  cinzenta?: boolean;
};

export const seccoes: Seccao[] = [
  {
    id: "about",
    index: "01",
    label: { en: "About", pt: "Sobre" },
    kicker: {
      en: "Where I come from and what I am studying.",
      pt: "De onde venho e o que estou a estudar.",
    },
  },
  {
    id: "recommendations",
    index: "02",
    label: { en: "Recommendations", pt: "Recomendações" },
    cinzenta: true,
  },
  {
    id: "journey",
    index: "03",
    label: { en: "Journey", pt: "Percurso" },
    kicker: {
      en: "Two businesses, started and closed, before finishing university.",
      pt: "Dois negócios que criei e fechei antes de acabar a universidade.",
    },
    escura: true,
  },
  {
    id: "projects",
    index: "04",
    label: { en: "Projects", pt: "Projectos" },
    kicker: {
      en: "What I built, and what each one taught me.",
      pt: "O que construí e o que aprendi com cada projecto.",
    },
  },
  {
    id: "finance",
    index: "05",
    label: { en: "Finance / Business plans", pt: "Finanças / Planos de negócio" },
    kicker: {
      en: "Business plans and DCF valuation models. With AI, I can test a business idea in a few days. I like to work with as much data as possible, to make the model as predictable as I can.",
      pt: "Planos de negócio e modelos de avaliação por DCF. Com a IA, consigo testar uma ideia de negócio em poucos dias. Gosto de trabalhar com o máximo de dados possível, para tornar o modelo mais previsível.",
    },
    cinzenta: true,
  },
  {
    id: "technology",
    index: "06",
    label: { en: "Technology", pt: "Tecnologia" },
    kicker: {
      en: "An app and a website, built end to end.",
      pt: "Uma app e um site, feitos do início ao fim.",
    },
  },
  {
    id: "travel",
    index: "07",
    label: { en: "Travel", pt: "Viagens" },
    kicker: {
      en: "Three years of backpacking, on and off the beaten track.",
      pt: "Três anos a viajar de mochila às costas.",
    },
    escura: true,
  },
  {
    id: "interests",
    index: "08",
    label: { en: "Interests", pt: "Interesses" },
    cinzenta: true,
  },
  {
    id: "contact",
    index: "09",
    label: { en: "Contact", pt: "Contacto" },
    escura: true,
  },
];
