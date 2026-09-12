"use client";

import { projectosTecnicos } from "@/data/technology";
import { Revelar } from "./Revelar";
import { TechProject } from "./TechProject";
import { Vazio } from "./Vazio";

export function SeccaoTecnologia() {
  if (projectosTecnicos.length === 0) {
    return <Vazio marcador="[TECHNOLOGY]" alto />;
  }
  return (
    <div className="flex flex-col gap-20 md:gap-28">
      {projectosTecnicos.map((p, i) => (
        <Revelar key={p.slug}>
          <TechProject projecto={p} invertido={i % 2 === 1} />
        </Revelar>
      ))}
    </div>
  );
}
