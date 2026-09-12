import { type Projecto } from "./types";

// A ordem deste array é a ordem da linha do tempo e da grelha de projectos.
// Os slugs já existem para as páginas /projects/<slug> não mudarem de endereço
// quando o conteúdo chegar.
export const projectos: Projecto[] = [
  { slug: "kainzow", name: "Kainzow" },
  { slug: "build-brand", name: "Build Brand" },
  { slug: "noite", name: "Noite" },
];

export const projectoPorSlug = (slug: string) =>
  projectos.find((p) => p.slug === slug);
