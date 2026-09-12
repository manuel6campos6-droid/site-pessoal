"use client";

import type { PassoFluxo } from "@/data/types";
import { SystemDiagram } from "./SystemDiagram";

/** Fluxo de IA. Reaproveita o diagrama de sistema: a diferença é só o
 *  marcador do estado vazio, não vale um segundo desenho. */
export function AIWorkflow({
  passos,
  escura = false,
}: {
  passos?: PassoFluxo[];
  escura?: boolean;
}) {
  return <SystemDiagram passos={passos} marcador="[AI WORKFLOW]" escura={escura} />;
}
