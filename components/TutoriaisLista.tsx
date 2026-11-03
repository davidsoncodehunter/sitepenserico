"use client";

import Link from "next/link";
import { useMemo, useState } from "react";
import { Arrow, Clock } from "./Icons";

type Item = { slug: string; titulo: string; resumo: string; categoria: string; nivel: string; minutos: number; rascunho: boolean };
type Cat = { slug: string; nome: string; descricao: string };

export default function TutoriaisLista({ itens, categorias }: { itens: Item[]; categorias: readonly Cat[] }) {
  const [cat, setCat] = useState("todas");
  const [q, setQ] = useState("");

  const filtrados = useMemo(() => {
    const termo = q.trim().toLowerCase();
    return itens.filter(
      (t) =>
        (cat === "todas" || t.categoria === cat) &&
        (!termo || `${t.titulo} ${t.resumo}`.toLowerCase().includes(termo)),
    );
  }, [itens, cat, q]);

  const agrupar = cat === "todas" && !q.trim();
  const comItens = categorias.filter((c) => itens.some((t) => t.categoria === c.slug));

  const card = (t: Item) => (
    <Link key={t.slug} href={`/tutoriais/${t.slug}`} className="tcard">
      <div className="tcard-top">
        <span className="tag">{categorias.find((c) => c.slug === t.categoria)?.nome ?? t.categoria}</span>
        {t.rascunho && <span className="tag tag-rascunho">Rascunho</span>}
      </div>
      <h3>{t.titulo}</h3>
      {t.resumo && <p>{t.resumo}</p>}
      <div className="tcard-foot">
        <span><Clock size={15} /> {t.minutos} min</span>
        <span>{t.nivel}</span>
        <Arrow size={18} className="tcard-arr" />
      </div>
    </Link>
  );

  return (
    <div>
      <div className="tfilters">
        <div className="chipbar" role="tablist" aria-label="Categorias">
          <button className={`chipb ${cat === "todas" ? "on" : ""}`} onClick={() => setCat("todas")}>
            Todos <em>{itens.length}</em>
          </button>
          {comItens.map((c) => (
            <button key={c.slug} className={`chipb ${cat === c.slug ? "on" : ""}`} onClick={() => setCat(c.slug)}>
              {c.nome} <em>{itens.filter((t) => t.categoria === c.slug).length}</em>
            </button>
          ))}
        </div>
        <input
          className="tsearch"
          type="search"
          placeholder="Buscar tutorial…"
          value={q}
          onChange={(e) => setQ(e.target.value)}
          aria-label="Buscar tutorial"
        />
      </div>

      {filtrados.length === 0 && <div className="empty">Nenhum tutorial encontrado.</div>}

      {agrupar
        ? comItens.map((c) => (
            <section key={c.slug} className="tgroup">
              <div className="tgroup-head">
                <h2>{c.nome}</h2>
                <p>{c.descricao}</p>
              </div>
              <div className="tgrid">{itens.filter((t) => t.categoria === c.slug).map(card)}</div>
            </section>
          ))
        : <div className="tgrid">{filtrados.map(card)}</div>}
    </div>
  );
}
