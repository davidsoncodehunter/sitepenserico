"use client";

import { useEffect, useState } from "react";
import { Clock } from "./Icons";
import { BLACK_FRIDAY_FIM } from "@/lib/produtos";

const alvo = new Date(BLACK_FRIDAY_FIM).getTime();

function calc() {
  const diff = Math.max(0, alvo - Date.now());
  return {
    d: Math.floor(diff / 86400000),
    h: Math.floor((diff % 86400000) / 3600000),
    m: Math.floor((diff % 3600000) / 60000),
    s: Math.floor((diff % 60000) / 1000),
    acabou: diff <= 0,
  };
}

const n2 = (n: number) => String(n).padStart(2, "0");

/** Prazo real e fixo (mesma data para todo mundo, sem reset por visita). Some sozinho quando passar. */
export default function Countdown() {
  const [t, setT] = useState<ReturnType<typeof calc> | null>(null);

  useEffect(() => {
    setT(calc());
    const id = setInterval(() => setT(calc()), 1000);
    return () => clearInterval(id);
  }, []);

  if (!t || t.acabou) return null;

  return (
    <div className="countdown">
      <Clock size={13} />
      <span>
        Termina em {t.d > 0 && `${t.d}d `}
        {n2(t.h)}h {n2(t.m)}m {n2(t.s)}s
      </span>
    </div>
  );
}
