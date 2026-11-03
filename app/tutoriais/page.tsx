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
        <section className="page-hero grain">
          <div className="wrap">
            <span className="eyebrow">Tutoriais</span>
            <h1>Passo a passo, <span className="em">sem enrolação</span>.</h1>
            <p>Guias para copiar e seguir. Os primeiros chegam em breve.</p>
          </div>
        </section>
        <section className="pad light">
          <div className="wrap">
            <div className="soon">Nenhum tutorial publicado ainda.</div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
