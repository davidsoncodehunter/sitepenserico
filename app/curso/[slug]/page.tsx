import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import Capa from "@/components/Capa";
import Checkout from "@/components/Checkout";
import { Footer, Header } from "@/components/Chrome";
import { Arrow, Check, Shield } from "@/components/Icons";
import { COMBO_CHECKOUT, OFERTA, PRODUTOS } from "@/lib/produtos";

type Props = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return PRODUTOS.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const p = PRODUTOS.find((x) => x.slug === slug);
  return p ? { title: `${p.nome} | Pense Rico`, description: p.descricao } : {};
}

export default async function Curso({ params }: Props) {
  const { slug } = await params;
  const p = PRODUTOS.find((x) => x.slug === slug);
  if (!p) notFound();

  return (
    <>
      <Header />
      <main>
        <section className="p-hero">
          <div className="hero-bg" aria-hidden />
          <div className="wrap">
            <Link href="/#cursos" className="crumb"><Arrow size={15} /> Todos os cursos</Link>
            <span className="badge"><b>Black Friday</b> incluso no Combo Pense Rico</span>
            <h1 className="h-grad" style={{ marginTop: 16 }}>{p.nome}: <span className="serif grad">{p.gancho.toLowerCase()}</span></h1>
            <p className="lead">{p.descricao}</p>
          </div>
        </section>

        <section className="sec" style={{ paddingTop: 20 }}>
          <div className="wrap detail">
            <div>
              <span className="kicker">O que você aprende</span>
              <ul className="learn">{p.aprende.map((a) => <li key={a}><Check size={20} />{a}</li>)}</ul>
              <p style={{ marginTop: 32, color: "var(--muted)", fontSize: 19 }}>{p.paraQuem}</p>
            </div>
            <aside className="side">
              <Capa numero={p.numero} nome={p.nome} src={p.capa ?? undefined} />
              <div className="box">
                <h4>Este curso já está no combo</h4>
                <p className="valor-avulso">Valor avulso: <span className="old">{p.valor}</span></p>
                <p>
                  Leve este e mais 3 cursos completos — {OFERTA.parcelas} ou {OFERTA.avista} à vista, em vez dos{" "}
                  {OFERTA.de} somados. {OFERTA.garantiaDias} dias de garantia.
                </p>
                <Checkout href={COMBO_CHECKOUT} value={1299.99} className="btn btn-amber">Quero o combo completo</Checkout>
                <div className="assure" style={{ marginTop: 14 }}>
                  <span><Shield size={15} /> {OFERTA.garantiaDias} dias de garantia</span>
                </div>
                {p.checkout && (
                  <p style={{ margin: "16px 0 0" }}><a className="more" href={p.checkout} target="_blank" rel="noopener noreferrer">Comprar só o {p.nome} <Arrow size={16} /></a></p>
                )}
              </div>
            </aside>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
