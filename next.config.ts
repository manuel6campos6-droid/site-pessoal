import type { NextConfig } from "next";

// O GitHub Pages serve ficheiros estáticos numa subpasta (/site-pessoal).
// Sem `output: "export"` não há pasta `out/`; sem `basePath` os links e as
// imagens apontam para a raiz do domínio e dão 404. O Pages não optimiza
// imagens, por isso `unoptimized`.
const subpasta = process.env.PAGES_BASE_PATH ?? "";

const nextConfig: NextConfig = {
  output: "export",
  basePath: subpasta,
  env: { NEXT_PUBLIC_BASE_PATH: subpasta },
  images: { unoptimized: true },
  trailingSlash: true,
};

export default nextConfig;
