import fs from "node:fs";
import path from "node:path";
import { marked } from "marked";

// ---------- classificação ----------
// Para criar uma categoria nova, basta acrescentar uma linha aqui.
export const CATEGORIAS = [
  { slug: "primeiros-passos", nome: "Primeiros passos", descricao: "Comece por aqui: conceitos e o básico do mercado cripto." },
  { slug: "carteiras-e-seguranca", nome: "Carteiras e segurança", descricao: "Como guardar suas criptomoedas e proteger o seu patrimônio." },
  { slug: "corretoras", nome: "Corretoras", descricao: "Abrir conta, depositar, comprar e sacar, passo a passo." },
  { slug: "futuros", nome: "Mercado de futuros", descricao: "Operações em futuros, ordens e gestão de risco." },
  { slug: "ferramentas", nome: "Ferramentas", descricao: "Gráficos, alertas, planilhas e outros recursos do dia a dia." },
  { slug: "inteligencia-artificial", nome: "Inteligência artificial", descricao: "IA aplicada ao seu trabalho e aos seus estudos." },
] as const;

export const NIVEIS = ["Iniciante", "Intermediário", "Avançado"] as const;

export type Categoria = (typeof CATEGORIAS)[number];

export type TutorialMeta = {
  slug: string;
  titulo: string;
  /** título em tarjas no topo da página (opcional): tarja1 branca, tarja2 âmbar */
  tarja1: string;
  tarja2: string;
  resumo: string;
  categoria: string;
  nivel: string;
  data: string;
  ordem: number;
  minutos: number;
  rascunho: boolean;
};

export type Tutorial = TutorialMeta & {
  html: string;
  toc: { id: string; texto: string; passo: number | null }[];
};

const DIR = path.join(process.cwd(), "content", "tutoriais");

// ---------- leitura ----------
function parse(raw: string): { meta: Record<string, string>; body: string } {
  const m = raw.match(/^---\r?\n([\s\S]*?)\r?\n---\r?\n?([\s\S]*)$/);
  if (!m) return { meta: {}, body: raw };
  const meta: Record<string, string> = {};
  for (const line of m[1].split(/\r?\n/)) {
    const i = line.indexOf(":");
    if (i > 0) meta[line.slice(0, i).trim()] = line.slice(i + 1).trim().replace(/^["']|["']$/g, "");
  }
  return { meta, body: m[2] };
}

function slugify(s: string) {
  return s
    .normalize("NFD").replace(/[̀-ͯ]/g, "")
    .toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/^-+|-+$/g, "");
}

function stripTags(s: string) {
  return s.replace(/<[^>]+>/g, "").replace(/&amp;/g, "&").replace(/&quot;/g, '"').replace(/&#39;/g, "'");
}

function render(body: string) {
  const toc: Tutorial["toc"] = [];
  let html = marked.parse(body, { gfm: true, breaks: false }) as string;

  // títulos de seção: "Passo 1: ..." vira cartão numerado; os demais, título comum
  html = html.replace(/<h2>([\s\S]*?)<\/h2>/g, (_, inner: string) => {
    const texto = stripTags(inner).trim();
    const id = slugify(texto) || `secao-${toc.length + 1}`;
    const passo = texto.match(/^passo\s*(\d+)\s*[:.\-–—]?\s*(.*)$/i);
    if (passo) {
      toc.push({ id, texto: passo[2] || texto, passo: Number(passo[1]) });
      return `<h2 id="${id}" class="t-passo"><span class="t-passo-n">${passo[1].padStart(2, "0")}</span><span>${passo[2] || texto}</span></h2>`;
    }
    toc.push({ id, texto, passo: null });
    return `<h2 id="${id}">${inner}</h2>`;
  });

  // avisos: > **Dica:** / **Atenção:** / **Importante:**
  const tipos: Record<string, string> = { dica: "dica", atencao: "atencao", atenção: "atencao", importante: "importante", aviso: "atencao", nota: "nota" };
  html = html.replace(/<blockquote>\s*<p><strong>([^<:]+):?<\/strong>:?/gi, (full, nome: string) => {
    const tipo = tipos[nome.trim().toLowerCase()];
    if (!tipo) return full;
    return `<blockquote class="t-aviso t-${tipo}"><p><strong class="t-aviso-t">${nome.trim()}</strong>`;
  });

  // cada seção "Passo N" vira um cartão creme, como as páginas do kit impresso
  html = html
    .split(/(?=<h2 )/)
    .map((p) => (p.includes('class="t-passo"') ? `<section class="t-cartao">${p}</section>` : p))
    .join("");

  return { html, toc };
}

function load(file: string): Tutorial {
  const slug = file.replace(/\.md$/, "");
  const { meta, body } = parse(fs.readFileSync(path.join(DIR, file), "utf8"));
  const { html, toc } = render(body);
  const palavras = body.split(/\s+/).filter(Boolean).length;
  return {
    slug,
    titulo: meta.titulo || slug,
    tarja1: meta.tarja1 || "",
    tarja2: meta.tarja2 || "",
    resumo: meta.resumo || "",
    categoria: meta.categoria || "primeiros-passos",
    nivel: meta.nivel || "Iniciante",
    data: meta.data || "",
    ordem: Number(meta.ordem) || 999,
    minutos: Math.max(1, Math.round(palavras / 190)),
    rascunho: meta.rascunho === "sim",
    html,
    toc,
  };
}

// Rascunhos só aparecem no seu computador (npm run dev), nunca no site publicado.
export function todosTutoriais(): Tutorial[] {
  if (!fs.existsSync(DIR)) return [];
  const publicar = process.env.NODE_ENV === "production";
  return fs.readdirSync(DIR)
    .filter((f) => f.endsWith(".md"))
    .map(load)
    .filter((t) => !(publicar && t.rascunho))
    .sort((a, b) => a.ordem - b.ordem || b.data.localeCompare(a.data));
}

export function getTutorial(slug: string) {
  return todosTutoriais().find((t) => t.slug === slug);
}

export function nomeCategoria(slug: string) {
  return CATEGORIAS.find((c) => c.slug === slug)?.nome ?? slug;
}
