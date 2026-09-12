import { type Texto } from "./types";

/** Uma secção do site. A navegação, o menu de comandos e a ordem da página
 *  saem todos daqui: acrescentar uma secção é acrescentar uma linha. */
export type Seccao = {
  id: string;
  /** Número editorial mostrado ao lado do título. */
  index: string;
  label: Texto;
  /** Subtítulo curto, por baixo do título grande. */
  kicker?: Texto;
  /** Fundo escuro. A barra de navegação inverte as cores em cima destas. */
  escura?: boolean;
};

export const seccoes: Seccao[] = [
  { id: "about", index: "01", label: { en: "About", pt: "Sobre" } },
  { id: "journey", index: "02", label: { en: "Journey", pt: "Percurso" }, escura: true },
  { id: "projects", index: "03", label: { en: "Projects", pt: "Projectos" } },
  { id: "finance", index: "04", label: { en: "Finance", pt: "Finanças" } },
  { id: "technology", index: "05", label: { en: "Technology", pt: "Tecnologia" } },
  { id: "travel", index: "06", label: { en: "Travel", pt: "Viagens" }, escura: true },
  { id: "interests", index: "07", label: { en: "Interests", pt: "Interesses" } },
  { id: "contact", index: "08", label: { en: "Contact", pt: "Contacto" }, escura: true },
];
