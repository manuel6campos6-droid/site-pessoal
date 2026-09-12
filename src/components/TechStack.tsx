/** Pilha tecnológica de um projecto. Os nomes vêm sempre dos dados: o site
 *  nunca decide que tecnologias alguém sabe. */
export function TechStack({ stack, escura = false }: { stack?: string[]; escura?: boolean }) {
  if (!stack || stack.length === 0) return null;
  return (
    <ul className="flex flex-wrap gap-2">
      {stack.map((item) => (
        <li
          key={item}
          className={`mono-label rounded border px-2.5 py-1 ${
            escura ? "border-night-rule text-night-ink-2" : "border-rule text-ink-2"
          }`}
        >
          {item}
        </li>
      ))}
    </ul>
  );
}
