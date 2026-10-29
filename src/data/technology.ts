import { type ProjectoTecnico } from "./types";

export const projectosTecnicos: ProjectoTecnico[] = [
  {
    slug: "noite",
    title: { en: "NOITE", pt: "NOITE" },
    kind: { en: "App and website", pt: "App e site" },
    description: {
      en: "A nightlife radar for university students in Portugal: what is happening tonight, where it is on the map and who is going. An iOS and Android app plus a website, sharing the same catalogue, with 600+ downloads. The platform runs on AI agents, about 95% of the operation.",
      pt: "Um guia da vida nocturna universitária em Portugal: o que há esta noite, onde é e quem vai. Existe como app para iOS e Android e como site, com a mesma informação, e tem mais de 600 downloads. A plataforma corre em agentes de IA, cerca de 95% da operação.",
    },
    video: "/tech/noite-live-more.mp4",
    stack: [
      "React Native",
      "Expo",
      "TypeScript",
      "Next.js",
      "Supabase",
      "PostgreSQL",
      "Clerk",
      "Cloudflare Workers",
      "Supabase Edge Functions",
      "Claude API",
      "OpenAI API",
      "AI Agents",
      "Expo Notifications",
      "React Native Maps",
      "EAS Build",
      "EAS Update",
    ],
    link: { label: { en: "noiteapp.com", pt: "noiteapp.com" }, href: "https://noiteapp.com" },
    // A primeira entra na janela de browser; as seguintes, que sao capturas de
    // telemovel, ficam na grelha por baixo.
    screenshots: [
      {
        src: "/tech/noite-site.jpg",
        alt: {
          en: "The NOITE website, with a row of party posters under the headline",
          pt: "O site da NOITE, com uma fila de cartazes de festas por baixo do título",
        },
      },
      {
        src: "/noite/01.jpg",
        alt: {
          en: "Tonight's parties in Lisbon, with the ones already running",
          pt: "As festas desta noite em Lisboa, com as que já estão a decorrer",
        },
      },
      {
        src: "/noite/02.jpg",
        alt: {
          en: "A party page with poster, time, venue and who is going",
          pt: "A página de uma festa com cartaz, hora, local e quem vai",
        },
      },
      {
        src: "/noite/03.jpg",
        alt: {
          en: "Map of Lisbon with the nights happening nearby",
          pt: "Mapa de Lisboa com as noites a acontecer por perto",
        },
      },
      {
        src: "/noite/04.jpg",
        alt: {
          en: "Shortcuts by tonight, this weekend, friends and university",
          pt: "Atalhos por esta noite, fim de semana, amigos e universidade",
        },
      },
      {
        src: "/noite/05.jpg",
        alt: {
          en: "The home screen ranking the nights with most people going",
          pt: "O ecrã inicial a ordenar as noites com mais gente a ir",
        },
      },
      {
        src: "/noite/06.jpg",
        alt: {
          en: "A user profile with friends and upcoming nights",
          pt: "Um perfil com amigos e as próximas noites",
        },
      },
      {
        src: "/noite/07.jpg",
        alt: {
          en: "A party page showing how many people are going",
          pt: "A página de uma festa a mostrar quantas pessoas vão",
        },
      },
    ],
    outcomes: [
      {
        value: "600+",
        label: { en: "Downloads", pt: "Downloads" },
        note: { en: "In one month", pt: "Num mês" },
      },
      {
        value: "95%",
        label: { en: "Run by AI agents", pt: "Gerida por agentes de IA" },
        note: { en: "Of the operation", pt: "Da operação" },
      },
    ],
  },
];
