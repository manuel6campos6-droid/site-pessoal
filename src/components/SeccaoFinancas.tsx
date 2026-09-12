"use client";

import { projectosFinanceiros } from "@/data/finance";
import { FinancialProject } from "./FinancialProject";
import { Revelar } from "./Revelar";
import { Vazio } from "./Vazio";

export function SeccaoFinancas() {
  if (projectosFinanceiros.length === 0) {
    return <Vazio marcador="[FINANCE]" alto />;
  }
  return (
    <div className="flex flex-col gap-10 md:gap-14">
      {projectosFinanceiros.map((p, i) => (
        <Revelar key={p.slug} delay={i * 0.05}>
          <FinancialProject projecto={p} />
        </Revelar>
      ))}
    </div>
  );
}
