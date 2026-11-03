import type { Metadata } from "next";
import { Footer, Header } from "@/components/Chrome";

export const metadata: Metadata = {
  title: "Tutoriais | Pense Rico",
  description: "Tutoriais passo a passo de cripto, carteiras e ferramentas.",
};

export default function Tutoriais() {
  return (
    <>
      <Header />
      <main>
        <section className="p-hero">
          <div className="hero-bg" aria-hidden />
          <div className="wrap">
            <span className="kicker">Tutoriais</span>
            <h1 className="h-grad">Passo a passo, <span className="serif grad">sem enrolação</span>.</h1>
            <p className="lead">Guias para copiar e seguir. Os primeiros chegam em breve.</p>
          </div>
        </section>
        <section className="sec" style={{ paddingTop: 20 }}>
          <div className="wrap"><div className="empty">Nenhum tutorial publicado ainda.</div></div>
        </section>
      </main>
      <Footer />
    </>
  );
}
