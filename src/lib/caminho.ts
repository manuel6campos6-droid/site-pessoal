// Ficheiros de `public/` não levam o `basePath` sozinhos quando o site está
// numa subpasta (GitHub Pages): sem este prefixo, imagens e PDFs dão 404.
export const comBase = (caminho: string) =>
  `${process.env.NEXT_PUBLIC_BASE_PATH ?? ""}${caminho}`;
