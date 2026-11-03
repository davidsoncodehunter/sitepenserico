import type { Metadata } from "next";
import { Footer, Header } from "@/components/Chrome";
import TutoriaisLista from "@/components/TutoriaisLista";
import { CATEGORIAS, todosTutoriais } from "@/lib/tutoriais";

export const metadata: Metadata = {
  title: "Tutoriais | Pense Rico",
  description: "Tutoriais passo a passo de cripto, carteiras, corretoras e ferramentas, organizados por assunto.",
};

export default function Tutoriais() {
  const itens = todosTutoriais().map(({ slug, titulo, resumo, categoria, nivel, minutos, rascunho }) => ({
    slug, titulo, resumo, categoria, nivel, minutos, rascunho,
  }));

  return (
    <>
      <Header />
      <main>
        <section className="p-hero">
          <div className="hero-bg" aria-hidden />
          <div className="wrap">
            <span className="kicker">Tutoriais</span>
            <h1 className="h-grad">Passo a passo, <span className="serif grad">sem enrolação</span>.</h1>
            <p className="lead">Guias organizados por assunto. Escolha uma categoria ou busque pelo que você precisa.</p>
          </div>
        </section>
        <section className="sec" style={{ paddingTop: 10 }}>
          <div className="wrap">
            {itens.length === 0
              ? <div className="empty">Os primeiros tutoriais chegam em breve.</div>
              : <TutoriaisLista itens={itens} categorias={CATEGORIAS} />}
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
