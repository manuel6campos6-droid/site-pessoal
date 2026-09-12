/** Etiqueta pequena e neutra: período, tipo de modelo, tecnologia. */
export function Etiqueta({
  children,
  escura = false,
}: {
  children: React.ReactNode;
  escura?: boolean;
}) {
  return (
    <span
      className={`mono-label inline-flex items-center rounded-full border px-3 py-1 ${
        escura ? "border-night-rule text-night-ink-2" : "border-rule text-ink-3"
      }`}
    >
      {children}
    </span>
  );
}
