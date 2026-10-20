import { Contacto } from "@/components/Contacto";
import { Cromo } from "@/components/Cromo";
import { GrelhaDeProjectos } from "@/components/GrelhaDeProjectos";
import { Hero } from "@/components/Hero";
import { Recomendacoes } from "@/components/Recomendacoes";
import { Rodape } from "@/components/Rodape";
import { Transicao } from "@/components/Transicao";
import { SeccaoFinancas } from "@/components/SeccaoFinancas";
import { SeccaoInteresses } from "@/components/SeccaoInteresses";
import { SeccaoTecnologia } from "@/components/SeccaoTecnologia";
import { SeccaoViagens } from "@/components/SeccaoViagens";
import { Seccao } from "@/components/Seccao";
import { SobreEEducacao } from "@/components/SobreEEducacao";
import { Timeline } from "@/components/Timeline";
import { seccoes } from "@/data/sections";

// A ordem da narrativa: sobre → recomendações → percurso → projectos → finanças →
// tecnologia → viagens → pessoal → contacto. As secções escuras marcam as mudanças de tom.
const s = (id: string) => seccoes.find((x) => x.id === id)!;

export default function Home() {
  return (
    <>
      <Cromo />
      <Transicao>
      <main>
        <Hero />

        <Seccao dados={s("about")}>
          <SobreEEducacao />
        </Seccao>

        <Seccao dados={s("recommendations")}>
          <Recomendacoes />
        </Seccao>

        <Seccao dados={s("journey")}>
          <Timeline />
        </Seccao>

        <Seccao dados={s("projects")}>
          <GrelhaDeProjectos />
        </Seccao>

        <Seccao dados={s("finance")}>
          <SeccaoFinancas />
        </Seccao>

        <Seccao dados={s("technology")}>
          <SeccaoTecnologia />
        </Seccao>

        <Seccao dados={s("travel")}>
          <SeccaoViagens />
        </Seccao>

        <Seccao dados={s("interests")}>
          <SeccaoInteresses />
        </Seccao>

        <Seccao dados={s("contact")}>
          <Contacto />
        </Seccao>
      </main>
      </Transicao>
      <Rodape />
    </>
  );
}
