"use client";

import { useRef, useState } from "react";
import { Arrow, Check } from "./Icons";

declare global {
  interface Window { fbq?: (...args: unknown[]) => void }
}

// "Deslize para garantir": arrastar até o fim abre o checkout. Também funciona por teclado (Enter/Espaço).
export default function SlideCta({ href, label = "Deslize para garantir sua vaga" }: { href: string; label?: string }) {
  const track = useRef<HTMLDivElement>(null);
  const [x, setX] = useState(0);
  const [drag, setDrag] = useState(false);
  const [done, setDone] = useState(false);
  const HANDLE = 56;

  const max = () => (track.current ? track.current.clientWidth - HANDLE - 8 : 0);

  const go = () => {
    setDone(true);
    setX(max());
    window.fbq?.("track", "InitiateCheckout", { value: 1497, currency: "BRL" });
    window.setTimeout(() => { window.location.href = href; }, 380);
  };

  const onDown = (e: React.PointerEvent) => {
    if (done) return;
    (e.target as HTMLElement).setPointerCapture(e.pointerId);
    setDrag(true);
  };
  const onMove = (e: React.PointerEvent) => {
    if (!drag || !track.current) return;
    const r = track.current.getBoundingClientRect();
    setX(Math.min(Math.max(e.clientX - r.left - HANDLE / 2 - 4, 0), max()));
  };
  const onUp = () => {
    if (!drag) return;
    setDrag(false);
    if (x >= max() * 0.88) go();
    else setX(0);
  };

  const pct = max() ? x / max() : 0;

  return (
    <div className="slide" ref={track} data-done={done} aria-live="polite">
      <span className="slide-fill" style={{ width: x + HANDLE + 4 }} />
      <span className="slide-label" style={{ opacity: 1 - pct * 1.4 }}>{label}</span>
      <button
        type="button"
        className="slide-handle"
        style={{ transform: `translateX(${x}px)`, transition: drag ? "none" : "transform 0.45s cubic-bezier(0.22,0.8,0.2,1)" }}
        onPointerDown={onDown}
        onPointerMove={onMove}
        onPointerUp={onUp}
        onPointerCancel={onUp}
        onKeyDown={(e) => { if (e.key === "Enter" || e.key === " ") { e.preventDefault(); go(); } }}
        aria-label={`${label}. Arraste até o fim ou pressione Enter.`}
      >
        {done ? <Check size={22} /> : <Arrow size={22} />}
      </button>
    </div>
  );
}
