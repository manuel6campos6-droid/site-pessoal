import { type Perfil } from "./types";

// O que aqui esta vem do CV e do que ele escreveu sobre si. A ordem das ideias
// e a dele: empreendedorismo primeiro, viagens a seguir, desporto no fim.
export const perfil: Perfil = {
  name: "Manuel Veríssimo Carreira",
  shortName: "Manuel",
  positioning: {
    en: "Entrepreneurship, travel and sport.",
    pt: "Empreendedorismo, viagens e desporto.",
  },
  intro: {
    en: "I have tried, learned, failed and had a lot of fun along the way.",
    pt: "Já tentei, aprendi, falhei e diverti-me bastante pelo caminho.",
  },
  about: [
    {
      en: "From very early on I had an enormous interest in entrepreneurship. I have tried, learned, failed and had a great deal of fun doing it. In 2023 I started university with the goal of learning more.",
      pt: "Desde muito novo que me interesso por empreendedorismo. Já tentei, aprendi, falhei e diverti-me bastante. Em 2023 entrei na universidade com o objectivo de aprender mais.",
    },
    {
      en: "Throughout my life my parents planted the seed of getting to know countries, of seeing other worlds and other cultures, and that became my second passion. This year was my third year backpacking: I have travelled with my parents, with friends and alone.",
      pt: "Os meus pais sempre me incentivaram a conhecer outros países e outras culturas, e isso tornou-se a minha segunda paixão. Este ano foi o terceiro em que viajei de mochila às costas: já viajei com os meus pais, com amigos e sozinho.",
    },
    {
      en: "I am also very fond of sport.",
      pt: "Também gosto muito de fazer desporto.",
    },
  ],
  location: { en: "Lisbon, Portugal", pt: "Lisboa, Portugal" },
  email: "manuel6campos6@gmail.com",
  links: [
    { label: { en: "LinkedIn", pt: "LinkedIn" }, href: "https://linkedin.com/in/manuelrcarreira" },
  ],
  portrait: undefined,
};
