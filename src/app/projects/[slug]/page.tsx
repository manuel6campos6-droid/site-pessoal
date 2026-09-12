import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { Cromo } from "@/components/Cromo";
import { ProjectDetail } from "@/components/ProjectDetail";
import { Rodape } from "@/components/Rodape";
import { Transicao } from "@/components/Transicao";
import { projectoPorSlug, projectos } from "@/data/projects";

// As páginas são estáticas: os projectos vivem em ficheiros, não numa base.
export function generateStaticParams() {
  return projectos.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const projecto = projectoPorSlug(slug);
  if (!projecto) return {};
  return {
    title: `${projecto.name} — [ADD CONTENT]`,
    description: projecto.tagline?.en ?? "[ADD CONTENT]",
  };
}

export default async function PaginaDeProjecto({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const projecto = projectoPorSlug(slug);
  if (!projecto) notFound();

  return (
    <>
      <Cromo />
      <Transicao>
      <main>
        <ProjectDetail projecto={projecto} />
      </main>
      </Transicao>
      <Rodape />
    </>
  );
}
