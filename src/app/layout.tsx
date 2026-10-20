import type { Metadata } from "next";
import { IBM_Plex_Mono } from "next/font/google";
import { perfil } from "@/data/profile";
import { FornecedorDeIdioma } from "@/lib/idioma";
import "./globals.css";

// A San Francisco da Apple e licenciada so para as plataformas deles e nao
// pode ser servida como fonte web. Pede-se ao sistema, que ja a tem instalada
// no Mac e no iPhone, tal como a propria apple.com faz; a cadeia de recurso em
// globals.css trata do Windows e do Android.

// As etiquetas monoespaçadas aparecem em cinquenta sítios, ao lado do corpo.
// Esta vem servida do site: a mono do sistema muda de máquina para máquina e
// as etiquetas mudavam de largura conforme quem abrisse a página.
const mono = IBM_Plex_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
  weight: ["400", "500"],
  display: "swap",
});

export const metadata: Metadata = {
  title: perfil.name,
  description: "[ADD CONTENT]",
  // O endereço final ainda não existe; quando existir, entra aqui e o Open
  // Graph passa a resolver as imagens sozinho.
  openGraph: {
    title: perfil.name,
    description: "[ADD CONTENT]",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="pt-PT" className={mono.variable}>
      <body>
        <FornecedorDeIdioma>
          {/* Salto directo ao conteúdo, para quem navega por teclado. */}
          <a
            href="#about"
            className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-80 focus:rounded focus:bg-ink focus:px-4 focus:py-2 focus:text-paper"
          >
            Saltar para o conteúdo
          </a>
          {children}
        </FornecedorDeIdioma>
      </body>
    </html>
  );
}
