import { type Imagem, type Viagem } from "./types";

// O CV fala de "33+ países" mas só nomeia estes. Ficam só os nomeados: pôr 33
// pontos no mapa obrigaria a inventar 25 países.
export const viagens: Viagem[] = [
  { country: { en: "United States", pt: "Estados Unidos" }, code: "US" },
  { country: { en: "Russia", pt: "Rússia" }, code: "RU" },
  { country: { en: "Mongolia", pt: "Mongólia" }, code: "MN" },
  { country: { en: "China", pt: "China" }, code: "CN" },
  { country: { en: "Oman", pt: "Omã" }, code: "OM" },
  { country: { en: "Sri Lanka", pt: "Sri Lanka" }, code: "LK" },
];

/** Número de países, dado por ele. É maior do que a lista acima, que só tem os
 *  países nomeados no CV. O "mais de" vive no componente, para o número ficar
 *  sozinho em tipo grande. */
export const totalDePaises = "30";

/** Nota de abertura da secção: a forma de viajar, e o que ele diz que tira
 *  dela. A segunda frase é dele, não do CV. */
export const notaDeViagem = {
  en: "Three consecutive years of backpacking trips, up to two months at a time, with friends and also alone. Travelling is one of my biggest passions: I have learned more from it than from any course. Understanding the differences, and connecting with the unknown.",
  pt: "Três anos seguidos de viagens de mochila às costas, até dois meses de cada vez, com amigos e também sozinho. Viajar é uma das minhas maiores paixões: aprendi mais a viajar do que em qualquer cadeira. Ensinou-me a perceber as diferenças e a lidar com o desconhecido.",
};

// Fotografias das viagens. O texto alternativo descreve o que se vê na imagem;
// o país só aparece quando a própria fotografia o mostra (uma bandeira, um
// monumento identificável), para não afirmar um sítio que a foto não prova.
export const fotosDeViagem: Imagem[] = [
  {
    src: "/viagens/01.jpg",
    alt: {
      en: "Buddhist monks walking down steps lined with prayer flags, mountains behind",
      pt: "Monges budistas a descer degraus com bandeiras de oração, montanhas ao fundo",
    },
  },
  {
    src: "/viagens/02.jpg",
    alt: {
      en: "A blue Soviet-style fur hat with a red star badge, worn in a souvenir shop",
      pt: "Um chapéu de pelo azul ao estilo soviético com estrela vermelha, numa loja de recordações",
    },
  },
  {
    src: "/viagens/03.jpg",
    alt: {
      en: "The General Staff Building arch on Palace Square, Saint Petersburg",
      pt: "O arco do Estado-Maior na Praça do Palácio, em São Petersburgo",
    },
  },
  {
    src: "/viagens/04.jpg",
    alt: {
      en: "An Orthodox cathedral with a bell tower and onion domes",
      pt: "Uma catedral ortodoxa com torre sineira e cúpulas em bolbo",
    },
  },
  {
    src: "/viagens/05.jpg",
    alt: {
      en: "Two friends sharing a pastry, one holding up the paper bag",
      pt: "Dois amigos a partilhar um doce, um deles a levantar o saco de papel",
    },
  },
  {
    src: "/viagens/06.jpg",
    alt: {
      en: "A city avenue with tram lines and the Bosnian flag on a building",
      pt: "Uma avenida com carris de eléctrico e a bandeira bósnia num edifício",
    },
  },
  {
    src: "/viagens/07.jpg",
    alt: {
      en: "A marble plaque on a yellow wall marking a café frequented by Eça de Queiroz in Havana",
      pt: "Uma placa de mármore numa parede amarela, sobre um café frequentado por Eça de Queiroz em Havana",
    },
  },
  {
    src: "/viagens/08.jpg",
    alt: {
      en: "A street vendor with bananas and papayas, the Cuban flag hanging further down the street",
      pt: "Um vendedor de rua com bananas e papaias, a bandeira cubana ao fundo da rua",
    },
  },
  {
    src: "/viagens/09.jpg",
    alt: {
      en: "An airport gate wall reading \"Have stories to tell not stuff to show\"",
      pt: "Uma parede de porta de embarque com a frase «Have stories to tell not stuff to show»",
    },
  },
  {
    src: "/viagens/10.jpg",
    alt: {
      en: "A walkway pinned to a cliff face above a gorge, on the Caminito del Rey",
      pt: "Um passadiço preso à parede de um desfiladeiro, no Caminito del Rey",
    },
  },
  {
    src: "/viagens/11.jpg",
    alt: {
      en: "The Parthenon on the Acropolis against a clear blue sky",
      pt: "O Pártenon na Acrópole, contra um céu azul limpo",
    },
  },
  {
    src: "/viagens/12.jpg",
    alt: {
      en: "A man in a black hat and coat walking past the Western Wall in Jerusalem",
      pt: "Um homem de chapéu e casaco pretos a passar junto ao Muro das Lamentações, em Jerusalém",
    },
  },
  {
    src: "/viagens/13.jpg",
    alt: {
      en: "Inside a brightly painted local bus, passengers standing in the aisle",
      pt: "Dentro de um autocarro local pintado de cores vivas, com passageiros de pé no corredor",
    },
  },
  {
    src: "/viagens/14.jpg",
    alt: {
      en: "Two travellers checking their phones between hostel bunk beds",
      pt: "Dois viajantes a ver os telemóveis entre beliches de um hostel",
    },
  },
  {
    src: "/viagens/15.jpg",
    alt: {
      en: "A person sitting on an overhanging rock above a deep canyon",
      pt: "Uma pessoa sentada numa rocha suspensa sobre um desfiladeiro",
    },
  },
  {
    src: "/viagens/16.jpg",
    alt: {
      en: "The Great Wall of China climbing over a wooded ridge",
      pt: "A Muralha da China a subir por uma crista arborizada",
    },
  },
  {
    src: "/viagens/17.jpg",
    alt: {
      en: "A guide speaking to a group of visitors at a brick building in Auschwitz",
      pt: "Um guia a falar para um grupo de visitantes junto a um edifício de tijolo em Auschwitz",
    },
  },
  {
    src: "/viagens/18.jpg",
    alt: {
      en: "A river winding through green steppe, with grazing herds",
      pt: "Um rio a serpentear por estepe verde, com manadas a pastar",
    },
  },
  {
    src: "/viagens/19.jpg",
    alt: {
      en: "A skyline of lit towers across the water at night",
      pt: "Uma linha de torres iluminadas do outro lado da água, à noite",
    },
  },
  {
    src: "/viagens/20.jpg",
    alt: {
      en: "A blue tuk-tuk parked under a thatched porch, two men talking beside it",
      pt: "Um tuk-tuk azul estacionado sob um alpendre de colmo, com dois homens a conversar ao lado",
    },
  },
  {
    src: "/viagens/21.jpg",
    alt: {
      en: "Walkers on the Caminito del Rey boardwalk, pinned high on the gorge wall",
      pt: "Caminhantes no passadiço do Caminito del Rey, preso ao alto da parede do desfiladeiro",
    },
  },
  {
    src: "/viagens/22.jpg",
    alt: {
      en: "The Parthenon seen from below, with restoration scaffolding at its base",
      pt: "O Pártenon visto de baixo, com andaimes de restauro na base",
    },
  },
  {
    src: "/viagens/23.jpg",
    alt: {
      en: "A bearded man in a black hat and coat crossing the plaza at the Western Wall",
      pt: "Um homem de barba, chapéu e casaco pretos a atravessar o largo do Muro das Lamentações",
    },
  },
  {
    src: "/viagens/24.jpg",
    alt: {
      en: "A traveller laughing aboard a bus painted inside with bright murals, in Sri Lanka",
      pt: "Um viajante a rir dentro de um autocarro pintado de murais garridos, no Sri Lanka",
    },
  },
  {
    src: "/viagens/25.jpg",
    alt: {
      en: "Two travellers checking their phones in a hostel dorm",
      pt: "Dois viajantes a ver os telemóveis num quarto de hostel",
    },
  },
  {
    src: "/viagens/26.jpg",
    alt: {
      en: "A person sitting on a rock ledge above a hazy mountain range in Oman",
      pt: "Uma pessoa sentada numa saliência de rocha sobre uma serra enevoada, em Omã",
    },
  },
  {
    src: "/viagens/27.jpg",
    alt: {
      en: "Visitors walking the Great Wall of China as it climbs to a watchtower",
      pt: "Visitantes a percorrer a Muralha da China, que sobe até uma torre de vigia",
    },
  },
  {
    src: "/viagens/28.jpg",
    alt: {
      en: "A group of visitors listening to a guide outside Block 10 at Auschwitz",
      pt: "Um grupo de visitantes a ouvir um guia à porta do Bloco 10, em Auschwitz",
    },
  },
  {
    src: "/viagens/29.jpg",
    alt: {
      en: "The Mongolian steppe, a river crossing green pasture between low hills",
      pt: "A estepe da Mongólia, com um rio a atravessar pastagem verde entre colinas baixas",
    },
  },
  {
    src: "/viagens/30.jpg",
    alt: {
      en: "Lit skyscrapers reflected in the river at night, Chinese signs on the façades",
      pt: "Arranha-céus iluminados reflectidos no rio à noite, com letreiros chineses nas fachadas",
    },
  },
  {
    src: "/viagens/31.jpg",
    alt: {
      en: "A blue tuk-tuk and a dog on a gravel drive, seen from under a thatched roof in Sri Lanka",
      pt: "Um tuk-tuk azul e um cão num caminho de gravilha, vistos de sob um telhado de colmo, no Sri Lanka",
    },
  },
];
