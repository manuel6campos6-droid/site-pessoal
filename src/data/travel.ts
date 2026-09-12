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

/** Número total de países, dado por ele. É maior do que a lista acima, que só
 *  tem os países nomeados no CV. */
export const totalDePaises = "33+";

/** Nota de abertura da secção, com o que o CV diz sobre a forma de viajar. */
export const notaDeViagem = {
  en: "Three consecutive years of backpacking trips, up to two months at a time, with friends and also alone.",
  pt: "Três anos seguidos de viagens de mochila às costas, até dois meses de cada vez, com amigos e também sozinho.",
};

// [TRAVEL PHOTOS]
export const fotosDeViagem: Imagem[] = [];
