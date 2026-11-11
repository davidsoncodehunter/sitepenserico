import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import Checkout from "@/components/Checkout";
import { Footer, Header } from "@/components/Chrome";
import { Arrow, Clock } from "@/components/Icons";
import TutorialLeitor from "@/components/TutorialLeitor";
import { COMBO_CHECKOUT } from "@/lib/produtos";
import { getTutorial, nomeCategoria, todosTutoriais } from "@/lib/tutoriais";

type Props = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return todosTutoriais().map((t) => ({ slug: t.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const t = getTutorial(slug);
  return t ? { title: `${t.titulo} | Tutoriais Pense Rico`, description: t.resumo } : {};
}

export default async function TutorialPage({ params }: Props) {
  const { slug } = await params;
  const t = getTutorial(slug);
  if (!t) notFound();

  const mesma = todosTutoriais().filter((x) => x.categoria === t.categoria);
  const i = mesma.findIndex((x) => x.slug === t.slug);
  const anterior = mesma[i - 1];
  const proximo = mesma[i + 1];

  return (
    <>
      <div className="readbar" aria-hidden />
      <Header />
      <main>
        <section className="p-hero t-hero" style={{ paddingBottom: 40 }}>
          <div className="hero-bg" aria-hidden />
          <div className="wrap">
            <Link href="/tutoriais" className="crumb"><Arrow size={15} /> Todos os tutoriais</Link>
            <div className="tmeta">
              <span className="tag">{nomeCategoria(t.categoria)}</span>
              <span className="tag tag-n">{t.nivel}</span>
              <span className="tmeta-i"><Clock size={15} /> {t.minutos} min de leitura</span>
              {t.rascunho && <span className="tag tag-rascunho">Rascunho (só no seu computador)</span>}
            </div>
            {t.tarja1 ? (
              <h1 className="tarjas">
                <span className="tarja">{t.tarja1}</span>
                {t.tarja2 && <span className="tarja tarja-amber">{t.tarja2}</span>}
              </h1>
            ) : (
              <h1 className="h-grad" style={{ fontSize: "clamp(36px, 5.6vw, 72px)" }}>{t.titulo}</h1>
            )}
            {t.resumo && <p className="lead">{t.resumo}</p>}
          </div>
        </section>

        <section style={{ paddingBottom: 40 }}>
          <div className="wrap">
            <TutorialLeitor html={t.html} toc={t.toc} />

            {(anterior || proximo) && (
              <nav className="tnav" aria-label="Outros tutoriais da categoria">
                {anterior ? <Link href={`/tutoriais/${anterior.slug}`}><small>Anterior</small>{anterior.titulo}</Link> : <span />}
                {proximo ? <Link href={`/tutoriais/${proximo.slug}`} className="next"><small>Próximo</small>{proximo.titulo}</Link> : <span />}
              </nav>
            )}

            <div className="tcta">
              <div>
                <h3>Quer ir além dos tutoriais?</h3>
                <p>Conheça o combo com os 4 cursos completos do Pense Rico.</p>
              </div>
              <Checkout href={COMBO_CHECKOUT} value={1497} className="btn btn-amber">Ver o combo</Checkout>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
