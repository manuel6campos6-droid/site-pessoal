/** Pilha tecnológica de um projecto. Os nomes vêm sempre dos dados: o site
 *  nunca decide que tecnologias alguém sabe. */
export function TechStack({ stack, escura = false }: { stack?: string[]; escura?: boolean }) {
  if (!stack || stack.length === 0) return null;
  return (
    <ul className="flex flex-wrap gap-2">
      {stack.map((item) => (
        <li
          key={item}
          className={`dado rounded-full px-3 py-1.5 ${
            escura ? "bg-night-2 text-night-ink-2" : "bg-paper-2 text-ink-2"
          }`}
        >
          {item}
        </li>
      ))}
    </ul>
  );
}
