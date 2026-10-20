import { type Projecto } from "./types";

// Ordem cronológica: é assim que a linha do tempo e a grelha os mostram.
// O que está aqui vem do CV, tal como lá está escrito. Os blocos de caso de
// estudo ficam por escrever, um a um.
export const projectos: Projecto[] = [
  {
    slug: "kainzow",
    name: "Kainzow",
    link: {
      label: { en: "@kainzow_", pt: "@kainzow_" },
      href: "https://www.instagram.com/kainzow_/",
    },
    period: "2021 – 2023",
    status: { en: "Closed", pt: "Encerrado" },
    role: { en: "Self-employed · 1.5 years", pt: "Por conta própria · 1,5 anos" },
    cover: {
      src: "/kainzow/01-caixa-de-iphones.jpg",
      alt: {
        en: "A cardboard box filled with sealed iPhone boxes",
        pt: "Uma caixa de cartão cheia de caixas de iPhone seladas",
      },
    },
    gallery: [
      {
        src: "/kainzow/01-caixa-de-iphones.jpg",
        alt: {
          en: "A cardboard box filled with sealed iPhone boxes",
          pt: "Uma caixa de cartão cheia de caixas de iPhone seladas",
        },
      },
      {
        src: "/kainzow/02-iphones-por-vender.jpg",
        alt: {
          en: "Sealed iPhone boxes stacked on a desk",
          pt: "Caixas de iPhone seladas empilhadas numa secretária",
        },
      },
      {
        src: "/kainzow/03-iphone-xr-selados.jpg",
        alt: {
          en: "Six sealed iPhone XR boxes laid out on a desk",
          pt: "Seis caixas de iPhone XR seladas dispostas numa secretária",
        },
      },
      {
        src: "/kainzow/04-macbooks.jpg",
        alt: {
          en: "Thirteen open MacBooks lined up on a wooden floor",
          pt: "Treze MacBooks abertos alinhados num chão de madeira",
        },
      },
      {
        src: "/kainzow/05-bancada-de-portateis.jpg",
        alt: {
          en: "A desk with several MacBooks connected and charging",
          pt: "Uma secretária com vários MacBooks ligados e a carregar",
        },
      },
      {
        src: "/kainzow/06-iphone-aberto.jpg",
        alt: {
          en: "An iPhone opened on a repair mat, battery and screen exposed",
          pt: "Um iPhone aberto numa manta de reparação, com a bateria e o ecrã à vista",
        },
      },
      {
        src: "/kainzow/07-baterias-novas.jpg",
        alt: {
          en: "Four new iPhone batteries still in their sealed trays",
          pt: "Quatro baterias novas de iPhone ainda nos suportes selados",
        },
      },
      {
        src: "/kainzow/08-dois-iphones-na-mao.jpg",
        alt: {
          en: "A red and a black iPhone held above a repair mat",
          pt: "Um iPhone vermelho e outro preto segurados sobre uma manta de reparação",
        },
      },
      {
        src: "/kainzow/09-caixas-de-capas.jpg",
        alt: {
          en: "Boxes of silicone cases being sorted by colour on the floor",
          pt: "Caixas de capas de silicone a serem separadas por cor no chão",
        },
      },
      {
        src: "/kainzow/10-capas-de-silicone.jpg",
        alt: {
          en: "Fifteen iPhone silicone cases laid out in a grid by colour",
          pt: "Quinze capas de silicone para iPhone dispostas em grelha por cor",
        },
      },
    ],
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
        label: { en: "Revenue", pt: "Facturação" },
        note: { en: "Portuguese market", pt: "Mercado português" },
      },
      { value: "100+", label: { en: "iPhones sold", pt: "iPhones vendidos" } },
      { value: "80+", label: { en: "MacBooks sold", pt: "MacBooks vendidos" } },
      { value: "500+", label: { en: "Accessories sold", pt: "Acessórios vendidos" } },
    ],
    details: [
      {
        title: { en: "What I did", pt: "O que fiz" },
        bullets: [
          {
            en: "Launched and managed the business during high school, operating until entering university.",
            pt: "Criei e geri o negócio durante o secundário, até entrar na universidade.",
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
    link: {
      label: { en: "buildbrand.pt", pt: "buildbrand.pt" },
      href: "https://www.buildbrand.pt",
    },
    links: [
      {
        label: { en: "buildbrand.pt", pt: "buildbrand.pt" },
        href: "https://www.buildbrand.pt",
      },
      {
        label: { en: "@buildbrandyouth", pt: "@buildbrandyouth" },
        href: "https://www.instagram.com/buildbrandyouth/",
      },
    ],
    cover: {
      src: "/buildbrand/marca/06-manual.jpg",
      alt: {
        en: "The Build Brand manual open on an iPad, showing print areas and methods for a hoodie",
        pt: "O manual da Build Brand aberto num iPad, com áreas e métodos de impressão para um hoodie",
      },
    },
    abertura: {
      src: "/buildbrand/marca/logotipos.jpg",
      alt: {
        en: "The Build Brand wordmark beside its three variants: Empresas, Youth and Sports",
        pt: "A marca Build Brand ao lado das três variantes: Empresas, Youth e Sports",
      },
    },
    // Do rascunho a caneta ate a marca aplicada: e a ordem em que a coisa
    // aconteceu, e e isso que vale a pena mostrar.
    marca: [
      {
        src: "/buildbrand/marca/01-esboco.jpg",
        alt: {
          en: "The name Build Brand drawn by hand in blue pen on a folded sheet of paper",
          pt: "O nome Build Brand desenhado à mão, a caneta azul, numa folha dobrada",
        },
      },
      {
        src: "/buildbrand/marca/02-esboco-youth.jpg",
        alt: {
          en: "The same sheet with Youth added underneath in cursive",
          pt: "A mesma folha com Youth acrescentado por baixo, em cursivo",
        },
      },
      {
        src: "/buildbrand/marca/03-wordmark.jpg",
        alt: {
          en: "The finished wordmark in blue, repeated down the screen at several sizes",
          pt: "A marca acabada a azul, repetida no ecrã em vários tamanhos",
        },
      },
      {
        src: "/buildbrand/marca/04-autocolante-youth.jpg",
        alt: {
          en: "The Build Brand Youth sticker, the wordmark with Youth in a lighter blue script",
          pt: "O autocolante Build Brand Youth, a marca com Youth num azul mais claro e cursivo",
        },
      },
      {
        src: "/buildbrand/marca/05-monograma.jpg",
        alt: {
          en: "Nine variants of the BB monogram, from flat greys to brushed and worn metal",
          pt: "Nove variantes do monograma BB, do cinzento liso ao metal escovado e gasto",
        },
      },
      {
        src: "/buildbrand/marca/06-manual.jpg",
        alt: {
          en: "The brand manual open on an iPad, showing print areas and methods for a hoodie",
          pt: "O manual da marca aberto num iPad, com áreas e métodos de impressão para um hoodie",
        },
      },
      {
        src: "/buildbrand/marca/logotipos.jpg",
        alt: {
          en: "The Build Brand wordmark beside its three variants: Empresas, Youth and Sports",
          pt: "A marca Build Brand ao lado das três variantes: Empresas, Youth e Sports",
        },
      },
    ],
    trabalhos: [
      {
        numero: 1,
        resumo: {
          en: "Two embroidered hoodies for Biomedical Laboratory Sciences.",
          pt: "Dois hoodies bordados para Ciências Biomédicas Laboratoriais.",
        },
        imagens: [
          {
            src: "/buildbrand/chs/01.jpg",
            alt: {
              en: "A burgundy hoodie embroidered front and back with laboratory stamps",
              pt: "Um hoodie bordô bordado à frente e atrás com selos de laboratório",
            },
          },
          {
            src: "/buildbrand/chs/02.jpg",
            alt: {
              en: "A navy hoodie with an embroidered microscope across the back",
              pt: "Um hoodie azul escuro com um microscópio bordado nas costas",
            },
          },
        ],
      },
      {
        numero: 2,
        resumo: {
          en: "Oversized shirts with a different name and number on each one.",
          pt: "T-shirts oversized com nome e número diferentes em cada uma.",
        },
        imagens: [
          {
            src: "/buildbrand/enfermagem/01.jpg",
            alt: {
              en: "A black oversized shirt with a number and the committee name on the back",
              pt: "Uma t-shirt oversized preta com um número e o nome da comissão nas costas",
            },
          },
          {
            src: "/buildbrand/enfermagem/02.jpg",
            alt: {
              en: "The list of names and numbers printed on each shirt",
              pt: "A lista de nomes e números impressos em cada t-shirt",
            },
          },
        ],
      },
      {
        numero: 3,
        resumo: {
          en: "A shirt plus sunglasses, a lighter and a lanyard.",
          pt: "Uma t-shirt mais óculos de sol, isqueiro e cordão.",
        },
        imagens: [
          {
            src: "/buildbrand/linguas/01.jpg",
            alt: {
              en: "A white shirt printed front and back for Applied Languages",
              pt: "Uma t-shirt branca estampada à frente e atrás para Línguas Aplicadas",
            },
          },
          {
            src: "/buildbrand/linguas/02.jpg",
            alt: {
              en: "Sunglasses with the course logo on the arms",
              pt: "Óculos de sol com o logótipo do curso nas hastes",
            },
          },
          {
            src: "/buildbrand/linguas/03.jpg",
            alt: {
              en: "A lighter printed with the course logo and flames",
              pt: "Um isqueiro com o logótipo do curso e chamas",
            },
          },
          {
            src: "/buildbrand/linguas/04.jpg",
            alt: {
              en: "A blue lanyard printed with the course initials",
              pt: "Um cordão azul com as iniciais do curso",
            },
          },
        ],
      },
      {
        numero: 4,
        resumo: {
          en: "One illustration across two shirt colours and a tote bag.",
          pt: "Uma ilustração em duas cores de t-shirt e num saco de pano.",
        },
        imagens: [
          {
            src: "/buildbrand/bernardas/01.jpg",
            alt: {
              en: "A pink shirt with a line-drawn illustration on the chest",
              pt: "Uma t-shirt cor-de-rosa com uma ilustração a traço no peito",
            },
          },
          {
            src: "/buildbrand/bernardas/02.jpg",
            alt: {
              en: "The same illustration printed in turquoise on a white shirt",
              pt: "A mesma ilustração impressa a turquesa numa t-shirt branca",
            },
          },
          {
            src: "/buildbrand/bernardas/03.jpg",
            alt: {
              en: "A tote bag with the illustration printed in pink",
              pt: "Um saco de pano com a ilustração impressa a cor-de-rosa",
            },
          },
        ],
      },
      {
        numero: 5,
        resumo: {
          en: "A notebook, a pen, a keyring and a lighter, all in the same mark.",
          pt: "Caderno, caneta, porta-chaves e isqueiro, todos na mesma marca.",
        },
        imagens: [
          {
            src: "/buildbrand/forenses/01.jpg",
            alt: {
              en: "A black notebook with the group's logo in white and red",
              pt: "Um caderno preto com o logótipo do núcleo a branco e vermelho",
            },
          },
          {
            src: "/buildbrand/forenses/02.jpg",
            alt: {
              en: "A black pen with the same logo",
              pt: "Uma caneta preta com o mesmo logótipo",
            },
          },
          {
            src: "/buildbrand/forenses/03.jpg",
            alt: {
              en: "A bottle opener keyring with the logo",
              pt: "Um porta-chaves abre-cápsulas com o logótipo",
            },
          },
          {
            src: "/buildbrand/forenses/04.jpg",
            alt: {
              en: "A lighter covered in the logo repeated as a pattern",
              pt: "Um isqueiro coberto pelo logótipo em padrão",
            },
          },
        ],
      },
      {
        numero: 6,
        resumo: {
          en: "A city line and a line of verse, carried across tote bags, notebooks, cups, pens and lighters.",
          pt: "Um desenho da cidade e um verso, levados a sacos, cadernos, copos, canetas e isqueiros.",
        },
        imagens: [
          {
            src: "/buildbrand/coimbra/01.jpg",
            alt: {
              en: "A tote bag printed with a drawing of Coimbra and a line of verse",
              pt: "Um saco de pano com um desenho de Coimbra e um verso",
            },
          },
          {
            src: "/buildbrand/coimbra/02.jpg",
            alt: {
              en: "A white pen printed with «I love Coimbra»",
              pt: "Uma caneta branca com «I love Coimbra»",
            },
          },
          {
            src: "/buildbrand/coimbra/03.jpg",
            alt: {
              en: "A waterproof phone pouch with a printed phrase",
              pt: "Uma bolsa impermeável para telemóvel com uma frase impressa",
            },
          },
          {
            src: "/buildbrand/coimbra/04.jpg",
            alt: {
              en: "A reusable cup printed with a joke about drinking",
              pt: "Um copo reutilizável com uma piada sobre beber",
            },
          },
          {
            src: "/buildbrand/coimbra/05.jpg",
            alt: {
              en: "A cream notebook with the Coimbra drawing and the verse",
              pt: "Um caderno creme com o desenho de Coimbra e o verso",
            },
          },
          {
            src: "/buildbrand/coimbra/06.jpg",
            alt: {
              en: "A black notebook with a white line drawing of Coimbra",
              pt: "Um caderno preto com um desenho a traço branco de Coimbra",
            },
          },
          {
            src: "/buildbrand/coimbra/07.jpg",
            alt: {
              en: "The tote bag again, in a second production run",
              pt: "O saco de pano outra vez, numa segunda produção",
            },
          },
          {
            src: "/buildbrand/coimbra/08.jpg",
            alt: {
              en: "A waterproof phone pouch, in a run of fifty",
              pt: "Uma bolsa impermeável para telemóvel, numa produção de cinquenta",
            },
          },
          {
            src: "/buildbrand/coimbra/09.jpg",
            alt: {
              en: "A purple pen printed with a phrase",
              pt: "Uma caneta roxa com uma frase impressa",
            },
          },
          {
            src: "/buildbrand/coimbra/10.jpg",
            alt: {
              en: "A reusable cup printed with a phrase about the night",
              pt: "Um copo reutilizável com uma frase sobre a noite",
            },
          },
          {
            src: "/buildbrand/coimbra/11.jpg",
            alt: {
              en: "A cream notebook with the Coimbra drawing, in a smaller run",
              pt: "Um caderno creme com o desenho de Coimbra, numa produção mais pequena",
            },
          },
          {
            src: "/buildbrand/coimbra/12.jpg",
            alt: {
              en: "A purple notebook with the Coimbra drawing in white",
              pt: "Um caderno roxo com o desenho de Coimbra a branco",
            },
          },
          {
            src: "/buildbrand/coimbra/13.jpg",
            alt: {
              en: "A black bottle opener keyring with a printed phrase",
              pt: "Um porta-chaves abre-cápsulas preto com uma frase impressa",
            },
          },
          {
            src: "/buildbrand/coimbra/14.jpg",
            alt: {
              en: "A black lanyard printed with a repeating phrase",
              pt: "Um cordão preto com uma frase em repetição",
            },
          },
          {
            src: "/buildbrand/coimbra/15.jpg",
            alt: {
              en: "A lighter printed with a phrase along its length",
              pt: "Um isqueiro com uma frase ao comprido",
            },
          },
          {
            src: "/buildbrand/coimbra/16.jpg",
            alt: {
              en: "A black shirt for Bioanalytical Sciences, printed front and back",
              pt: "Uma t-shirt preta para Ciências Bioanalíticas, estampada à frente e atrás",
            },
          },
        ],
      },
    ],
    tagline: {
      en: "Merchandising and custom apparel, built during the second year of my degree.",
      pt: "Merchandising e vestuário personalizado, começado no segundo ano da licenciatura.",
    },
    description: {
      en: "A merchandising and custom apparel business. I led business development, client acquisition and operations, overseeing finance and logistics to improve turnaround times and margins.",
      pt: "Negócio de merchandising e vestuário personalizado. Tratei do desenvolvimento de negócio, angariação de clientes e operações, e fiquei responsável pelas finanças e pela logística, para melhorar prazos e margens.",
    },
    metrics: [
      {
        value: "€65K",
        label: { en: "Revenue", pt: "Facturação" },
        // Ao lado de "1,3 anos", a receita lia-se como sendo do periodo todo.
        // A nota diz de que ano e, e o numero de anos sai: o periodo ja esta
        // na etiqueta em cima.
        note: {
          en: "In the first year of sales alone",
          pt: "Só no primeiro ano de vendas",
        },
      },
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
            pt: "Fiquei responsável pelas finanças e pela logística, para melhorar prazos de entrega e margens.",
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
];

export const projectoPorSlug = (slug: string) =>
  projectos.find((p) => p.slug === slug);
