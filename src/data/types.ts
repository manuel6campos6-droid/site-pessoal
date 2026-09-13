// Todo o conteúdo do site vive em /src/data. Os componentes nunca têm texto
// escrito dentro: se um campo estiver vazio, a secção não o desenha.

/** Texto bilingue. Quando ainda não há tradução, usar FALTA_TRADUCAO no lado que falta. */
export type Texto = { en: string; pt: string };

/** Marcador visível para conteúdo em falta. Aparece no site com estilo próprio. */
export const FALTA = "[ADD CONTENT]";
export const FALTA_TRADUCAO = "[FALTA TRADUÇÃO]";

/** Um texto ainda por preencher: marca-se de um lado só e o site mostra-o como pendente. */
export const porPreencher = (nota = FALTA): Texto => ({ en: nota, pt: nota });

export type Idioma = "en" | "pt";

export type Imagem = {
  src: string;
  alt: Texto;
  /** Legenda opcional, usada na galeria editorial. */
  caption?: Texto;
};

export type Ficheiro = {
  label: Texto;
  href: string;
  /** Extensão mostrada como etiqueta: XLSX, PDF, KEY... */
  kind?: string;
};

export type Link = {
  label: Texto;
  href: string;
};

/** Número destacado. O valor é sempre string para aceitar "12", "€1.2M" ou "3 anos". */
export type Metrica = {
  value: string;
  label: Texto;
  note?: Texto;
};

/** Bloco numerado de um caso de estudo. Só se desenha se tiver corpo. */
export type Bloco = {
  /** Título do bloco: Context, Problem, What I built... */
  title: Texto;
  body?: Texto;
  /** Alternativa ao corpo corrido, para listas curtas. */
  bullets?: Texto[];
};

/* ---------- Perfil e educação ---------- */

export type Perfil = {
  name: string;
  /** Uma linha de posicionamento, no topo da homepage. */
  positioning: Texto;
  /** Uma frase de introdução. Curta. */
  intro: Texto;
  /** Parágrafos da secção About. */
  about: Texto[];
  location?: Texto;
  email?: string;
  links: Link[];
  /** Retrato, opcional. */
  portrait?: Imagem;
};

/** Uma linha de percurso: educação, emprego ou actividade. São a mesma forma
 *  e partilham o desenho, por isso partilham o tipo. */
export type Percurso = {
  organisation: string;
  role?: Texto;
  period?: string;
  location?: Texto;
  notes?: Texto[];
};

/* ---------- Percurso e projectos ---------- */

/** Entrada da linha do tempo. O desenho tem de funcionar com quase tudo vazio. */
export type Etapa = {
  /** Identificador estável, usado no url do projecto: /projects/<slug>. */
  slug: string;
  name: string;
  period?: string;
  tagline?: Texto;
  description?: Texto;
  metrics?: Metrica[];
  images?: Imagem[];
  link?: Link;
  details?: Bloco[];
  /** Etiqueta curta do estado: activo, encerrado, em construção. */
  status?: Texto;
};

export type Projecto = Etapa & {
  /** Visual grande no topo da página do projecto. */
  cover?: Imagem;
  role?: Texto;
  /** Galeria no fim da página. */
  gallery?: Imagem[];
  /** Um site que se pode mostrar a funcionar dentro da página. O site tem de
   *  autorizar quem o emoldura, senão o browser recusa e a moldura fica vazia:
   *  ver `SiteEmbebido`. */
  embed?: {
    /** O endereço a carregar na moldura. Costuma ser uma rota de demonstração,
     *  não a página de entrada. */
    src: string;
    /** O que a barra de endereço mostra. */
    label: string;
    /** `portrait` para uma app de telemóvel, `landscape` para um site. */
    shape?: "portrait" | "landscape";
  };
};

/* ---------- Finanças ---------- */

export type ProjectoFinanceiro = {
  slug: string;
  title: Texto;
  /** Tipo de modelo: DCF, LBO, three-statement, unit economics... */
  category?: Texto;
  description?: Texto;
  screenshots?: Imagem[];
  files?: Ficheiro[];
  assumptions?: Texto[];
  outputs?: Metrica[];
  notes?: Texto[];
  /** Tabela de cenários, desenhada só se tiver linhas. */
  scenarios?: Tabela;
};

/** Tabela simples. As linhas têm de ter o mesmo número de células que os cabeçalhos. */
export type Tabela = {
  headers: Texto[];
  rows: string[][];
  caption?: Texto;
};

/* ---------- Tecnologia ---------- */

export type ProjectoTecnico = {
  slug: string;
  title: Texto;
  /** Etiqueta do tipo: website, app, automation, AI, experiment. */
  kind?: Texto;
  period?: string;
  description?: Texto;
  stack?: string[];
  link?: Link;
  repo?: Link;
  screenshots?: Imagem[];
  /** Passos de um fluxo, desenhados como diagrama. */
  flow?: PassoFluxo[];
  outcomes?: Metrica[];
  notes?: Texto[];
};

/** Passo de um diagrama de sistema ou de um fluxo de IA. */
export type PassoFluxo = {
  label: Texto;
  detail?: Texto;
};

/* ---------- Viagens ---------- */

export type Viagem = {
  country: Texto;
  /** Código ISO-2, usado para posicionar no mapa. */
  code?: string;
  locations?: string[];
  year?: string;
  photos?: Imagem[];
  notes?: Texto;
};

/* ---------- Interesses ---------- */

export type Interesse = {
  title: Texto;
  description?: Texto;
  images?: Imagem[];
};
