import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import Capa from "@/components/Capa";
import Checkout from "@/components/Checkout";
import { Footer, Header } from "@/components/Chrome";
import { Arrow, Check } from "@/components/Icons";
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
            <h1 className="h-grad">{p.nome}: <span className="serif grad">{p.gancho.toLowerCase()}</span></h1>
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
                <h4>Faz parte do combo</h4>
                <p>Leve os 4 cursos por {OFERTA.parcelas} ou {OFERTA.avista} à vista. {OFERTA.garantiaDias} dias de garantia.</p>
                <Checkout href={COMBO_CHECKOUT} value={1497} className="btn btn-amber">Quero o combo completo</Checkout>
                {p.checkout && (
                  <p style={{ margin: "16px 0 0" }}><a className="more" href={p.checkout}>Comprar só o {p.nome} <Arrow size={16} /></a></p>
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
