"use client";

import { useState } from "react";
import { Cursor } from "./Cursor";
import { MenuDeComandos } from "./MenuDeComandos";
import { Navegacao } from "./Navegacao";

/** Junta a navegação e o menu de comandos, que partilham o estado de aberto.
 *  Existe para o layout e a página ficarem servidos no servidor. */
export function Cromo() {
  const [comandos, setComandos] = useState(false);
  return (
    <>
      <Navegacao onAbrirComandos={() => setComandos(true)} />
      <Cursor />
      <MenuDeComandos aberto={comandos} setAberto={setComandos} />
    </>
  );
}
