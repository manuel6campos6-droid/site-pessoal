import { type Projecto } from "./types";

// Ordem cronológica: é assim que a linha do tempo e a grelha os mostram.
// O que está aqui vem do CV, tal como lá está escrito. Os blocos de caso de
// estudo ficam por escrever, um a um.
export const projectos: Projecto[] = [
  {
    slug: "kainzow",
    name: "Kainzow",
    period: "2021 – 2023",
    status: { en: "Closed", pt: "Encerrado" },
    role: { en: "Self-employed · 1.5 years", pt: "Por conta própria · 1,5 anos" },
    tagline: {
      en: "Reselling Apple products, from high school until university.",
      pt: "Revenda de produtos Apple, do secundário até à universidade.",
    },
    description: {
      en: "An independent Apple product reselling business in the Portuguese market, sourcing from suppliers in Germany, the Netherlands and China.",
      pt: "Negócio independente de revenda de produtos Apple no mercado português, com fornecedores na Alemanha, Países Baixos e China.",
    },
    metrics: [
      {
        value: "€50K+",
        label: { en: "Revenue", pt: "Receita" },
        note: { en: "Portuguese market", pt: "Mercado português" },
      },
      { value: "1.5", label: { en: "Years", pt: "Anos" } },
    ],
    details: [
      {
        title: { en: "What I did", pt: "O que fiz" },
        bullets: [
          {
            en: "Launched and managed the business during high school, operating until entering university.",
            pt: "Lancei e geri o negócio durante o secundário, a funcionar até entrar na universidade.",
          },
          {
            en: "Managed inventory and clients.",
            pt: "Geri o stock e os clientes.",
          },
          {
            en: "Sourced products from suppliers in Germany, the Netherlands and China.",
            pt: "Tratei do abastecimento junto de fornecedores na Alemanha, Países Baixos e China.",
          },
        ],
      },
    ],
  },
  {
    slug: "build-brand",
    name: "Build Brand, Lda",
    period: "01/2025 – 03/2026",
    status: { en: "Closed", pt: "Encerrado" },
    role: { en: "Co-founder · 1.3 years", pt: "Co-fundador · 1,3 anos" },
    tagline: {
      en: "Merchandising and custom apparel, built during the second year of my degree.",
      pt: "Merchandising e vestuário personalizado, começado no segundo ano da licenciatura.",
    },
    description: {
      en: "A merchandising and custom apparel business. I led business development, client acquisition and operations, overseeing finance and logistics to improve turnaround times and margins.",
      pt: "Negócio de merchandising e vestuário personalizado. Tratei do desenvolvimento de negócio, angariação de clientes e operações, com finanças e logística a cargo para melhorar prazos e margens.",
    },
    metrics: [
      {
        value: "€65K",
        label: { en: "Revenue", pt: "Receita" },
        note: { en: "First year of sales", pt: "Primeiro ano de vendas" },
      },
      { value: "1.3", label: { en: "Years", pt: "Anos" } },
    ],
    details: [
      {
        title: { en: "What I did", pt: "O que fiz" },
        bullets: [
          {
            en: "Led business development, client acquisition and operations.",
            pt: "Tratei do desenvolvimento de negócio, angariação de clientes e operações.",
          },
          {
            en: "Oversaw finance and logistics to improve turnaround times and margins.",
            pt: "Tive as finanças e a logística a cargo, para melhorar prazos de entrega e margens.",
          },
          {
            en: "Managed supplier sourcing, primarily in Spain.",
            pt: "Geri o abastecimento junto de fornecedores, sobretudo em Espanha.",
          },
          {
            en: "Set pricing strategy and ran supplier negotiations to optimise cost, quality and delivery timelines.",
            pt: "Defini a estratégia de preços e negociei com fornecedores, para equilibrar custo, qualidade e prazos.",
          },
          {
            en: "Handled intra-community transactions and VAT under the EU reverse charge mechanism.",
            pt: "Tratei das transacções intracomunitárias e do IVA em autoliquidação.",
          },
        ],
      },
    ],
  },
  {
    slug: "noite",
    name: "Noite",
    // O CV não fala da Noite: o que aqui aparece é só o nome, até ele
    // escrever o resto.
  },
];

export const projectoPorSlug = (slug: string) =>
  projectos.find((p) => p.slug === slug);
