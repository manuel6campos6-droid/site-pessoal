"use client";

import { projectos } from "@/data/projects";
import { ProjectCard } from "./ProjectCard";
import { Revelar } from "./Revelar";
import { Vazio } from "./Vazio";

export function GrelhaDeProjectos() {
  if (projectos.length === 0) return <Vazio marcador="[PROJECTS]" alto />;

  return (
    <div className="grid grid-cols-1 gap-12 md:grid-cols-2 md:gap-x-10 md:gap-y-20">
      {projectos.map((p, i) => (
        // Cada segundo cartão desce um pouco no computador, para a grelha não
        // ficar com duas linhas perfeitamente alinhadas.
        <Revelar key={p.slug} delay={(i % 2) * 0.08} className={i % 2 === 1 ? "md:mt-16" : ""}>
          <ProjectCard projecto={p} />
        </Revelar>
      ))}
    </div>
  );
}
