"use client";

import { useEffect, useRef, useState } from "react";

type Item = { id: string; texto: string; passo: number | null };

// Corpo do tutorial + índice lateral que acompanha a leitura + botão "copiar" nos blocos de código.
export default function TutorialLeitor({ html, toc }: { html: string; toc: Item[] }) {
  const corpo = useRef<HTMLDivElement>(null);
  const [ativo, setAtivo] = useState(toc[0]?.id ?? "");

  useEffect(() => {
    const el = corpo.current;
    if (!el) return;

    // botão copiar em cada bloco de código
    el.querySelectorAll("pre").forEach((pre) => {
      if (pre.querySelector(".t-copy")) return;
      const b = document.createElement("button");
      b.type = "button";
      b.className = "t-copy";
      b.textContent = "Copiar";
      b.onclick = async () => {
        try {
          await navigator.clipboard.writeText(pre.querySelector("code")?.innerText ?? pre.innerText);
          b.textContent = "Copiado";
          setTimeout(() => (b.textContent = "Copiar"), 1800);
        } catch { b.textContent = "Selecione e copie"; }
      };
      pre.appendChild(b);
    });

    // item ativo do índice
    const io = new IntersectionObserver(
      (es) => { const v = es.filter((e) => e.isIntersecting).sort((a, b) => a.boundingClientRect.top - b.boundingClientRect.top)[0]; if (v) setAtivo(v.target.id); },
      { rootMargin: "-90px 0px -65% 0px" },
    );
    el.querySelectorAll("h2[id]").forEach((h) => io.observe(h));
    return () => io.disconnect();
  }, [html]);

  return (
    <div className="tlayout">
      {toc.length > 1 && (
        <aside className="ttoc" aria-label="Neste tutorial">
          <h4>Neste tutorial</h4>
          <ol>
            {toc.map((t) => (
              <li key={t.id}>
                <a href={`#${t.id}`} className={ativo === t.id ? "on" : ""}>
                  {t.passo !== null && <b>{t.passo}</b>}
                  <span>{t.texto}</span>
                </a>
              </li>
            ))}
          </ol>
        </aside>
      )}
      <div ref={corpo} className="tbody" dangerouslySetInnerHTML={{ __html: html }} />
    </div>
  );
}
