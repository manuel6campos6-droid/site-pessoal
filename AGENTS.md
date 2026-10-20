# Site pessoal: contexto para agentes

CV digital e portfólio. Next.js 15 (App Router), TypeScript, Tailwind 4,
Framer Motion. Sem base de dados: todo o conteúdo vive em ficheiros.

## Regra dura: nada de inventar

O conteúdo só entra quando o dono do site o dá, por escrito, nesta conversa.
Nunca preencher datas, números, empresas, cursos, países, tecnologias ou
descrições por dedução ou porque «fazem sentido». O que falta fica com um
marcador visível: `[ADD CONTENT]`, `[TRAVEL MAP]`, `[NEEDS INFORMATION]`.
Um site com buracos assumidos é honesto; um com factos inventados não presta.

## Comandos

- `npm run dev` no porto 3100: `npm run dev -- --port 3100`.
- `npm run build`: gate obrigatório antes de dar trabalho por terminado. Corre
  o TypeScript por dentro.
- `npx eslint .`: tem de sair limpo. O React 19 rejeita `setState` dentro de
  efeitos, e isso é erro, não aviso.

## Conteúdo e desenho vivem separados

- `src/data/`: os factos. Um ficheiro por área (`profile`, `education`,
  `projects`, `finance`, `technology`, `travel`, `interests`) e `sections.ts`,
  de onde saem a navegação, o menu ⌘K e a ordem da página.
- `src/components/`: o desenho. Nenhum componente tem factos escritos dentro;
  lê tudo dos dados e desenha um estado vazio quando não há nada.
- Acrescentar conteúdo é editar `src/data/`. Se for preciso mexer no desenho
  para o conteúdo caber, a estrutura de dados é que está errada.

## Textos em duas línguas

Cada texto é `{ en, pt }`. O `t()` de `src/lib/texto.ts` lê o lado pedido e cai
no outro quando a tradução ainda não existe, para o visitante nunca ver
`[FALTA TRADUÇÃO]`. Conteúdo novo entra nas duas línguas; se só houver uma,
marcar a outra com `FALTA_TRADUCAO` e traduzir depois.

## Estados vazios são desenho, não erro

`temConteudo()` distingue texto a sério de marcador. Todo o componente que
mostra conteúdo tem de decidir entre os dois: um `[ADD CONTENT]` em tipo de
título parece conteúdo real, por isso os marcadores usam sempre a etiqueta
monoespaçada cor de acento.

## Design system: nunca cores à mão

Tudo sai dos tokens de `src/app/globals.css` (`@theme`): fundo `paper`, texto
`ink`, secções escuras `night`, um único acento. Escrever um hexadecimal num
componente desfaz o sistema. Tipografia: a San Francisco da Apple, pedida ao
sistema operativo em `--font-display` e `--font-sans` (nao se pode servir como
fonte web), com uma cadeia de recurso para Windows e Android; IBM Plex Mono nas
etiquetas, essa sim servida do site.

As secções escuras estão marcadas com `escura: true` em `data/sections.ts`, e é
daí que a barra de navegação sabe que tem de inverter as cores. Marcar uma
secção como escura em dois sítios diferentes é como se perde o alinhamento.
`cinzenta: true` dá o cinzento claro, para separar duas secções claras seguidas:
a branco puro, uma corria para a outra sem se perceber onde acaba. Um `.cartao`
numa secção cinzenta inverte-se para branco sozinho, senão desaparecia no fundo.

## Movimento

Animação contida: revelações à entrada, a linha do tempo a desenhar-se, o
número a contar. `useReducedMotion` desliga tudo para quem pede menos
movimento, e `@media (prefers-reduced-motion)` apanha o resto. Uma animação
que não se consegue justificar em palavras não entra.

## Responsivo: adaptar, não encolher

O computador e o telefone não recebem o mesmo desenho reduzido. A linha do
tempo tem carril animado no computador e progressão simples no telefone; o
diagrama de sistema é horizontal em cima e vertical em baixo; a navegação é uma
barra no computador e uma folha inteira no telefone. Testar a 320px e a 1920px:
a página nunca pode rolar de lado.

## Estilo da casa

Comentários em português (pt-PT), norma antiga (projecto, actual), sem
travessões «—». Explicam a restrição que o código não mostra, com a
consequência concreta a seguir. Nomes de componentes e ficheiros em português,
excepto os que o pedido nomeou em inglês (`ProjectCard`, `TechStack`).

<!-- BEGIN:nextjs-agent-rules -->

# This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` (resolved from this file's directory; in monorepos the `next` package may not be visible from the repo root) before writing any code. Heed deprecation notices.

This block is written and re-added by `next dev` — verify at `node_modules/next/dist/server/lib/generate-agent-files.js`. Removing it from a diff only re-creates the uncommitted change; committing it with your work keeps the tree clean.

<!-- END:nextjs-agent-rules -->
