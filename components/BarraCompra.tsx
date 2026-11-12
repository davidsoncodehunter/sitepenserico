"use client";

import { useEffect, useState } from "react";
import Checkout from "./Checkout";
import { COMBO_CHECKOUT, OFERTA } from "@/lib/produtos";

/** Barra de compra fixa, só no celular. Entra depois que a pessoa passa do topo. */
export default function BarraCompra() {
  const [ver, setVer] = useState(false);

  useEffect(() => {
    const onScroll = () => setVer(window.scrollY > window.innerHeight * 0.85);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div className={`barra ${ver ? "ver" : ""}`} aria-hidden={!ver}>
      <div className="barra-tx">
        <b>{OFERTA.parcelas}</b>
        <span>ou {OFERTA.avista} à vista</span>
      </div>
      <Checkout href={COMBO_CHECKOUT} value={1497} className="btn btn-amber">
        Quero o combo
      </Checkout>
    </div>
  );
}
