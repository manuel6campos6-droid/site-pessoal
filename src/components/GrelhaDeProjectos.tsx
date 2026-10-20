"use client";

import { projectos } from "@/data/projects";
import { ProjectCard } from "./ProjectCard";
import { Revelar } from "./Revelar";
import { Vazio } from "./Vazio";

export function GrelhaDeProjectos() {
  if (projectos.length === 0) return <Vazio marcador="[PROJECTS]" alto />;

  return (
    <div className="grid grid-cols-1 gap-5 md:grid-cols-2 md:gap-6">
      {projectos.map((p, i) => (
        // Os cartoes ficam lado a lado e da mesma altura: com blocos cheios, o
        // degrau de uma coluna sobre a outra lia-se como desalinhamento.
        <Revelar key={p.slug} delay={(i % 2) * 0.08} className="h-full">
          <ProjectCard projecto={p} />
        </Revelar>
      ))}
    </div>
  );
}
