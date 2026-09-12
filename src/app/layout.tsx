import type { Metadata } from "next";
import { Fraunces, Inter } from "next/font/google";
import { perfil } from "@/data/profile";
import { FornecedorDeIdioma } from "@/lib/idioma";
import "./globals.css";

// Duas famílias: um display com carácter para os títulos e um sans neutro para
// interface e corpo. Carregadas pelo next/font, sem pedidos a terceiros.
const display = Fraunces({
  subsets: ["latin"],
  variable: "--font-display",
  axes: ["SOFT", "WONK"],
  display: "swap",
});

const sans = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
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
    <html lang="en" className={`${display.variable} ${sans.variable}`}>
      <body className="grao">
        <FornecedorDeIdioma>
          {/* Salto directo ao conteúdo, para quem navega por teclado. */}
          <a
            href="#about"
            className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-80 focus:rounded focus:bg-ink focus:px-4 focus:py-2 focus:text-paper"
          >
            Skip to content
          </a>
          {children}
        </FornecedorDeIdioma>
      </body>
    </html>
  );
}
