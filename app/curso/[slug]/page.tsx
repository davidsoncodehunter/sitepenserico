import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import Checkout from "@/components/Checkout";
import { Footer, Header } from "@/components/Chrome";
import FotoSlot from "@/components/FotoSlot";
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
        <section className="page-hero grain">
          <div className="wrap">
            <Link href="/#cursos" className="crumb">← TODOS OS CURSOS</Link>
            <span className="eyebrow" style={{ display: "flex", marginTop: 28 }}>Curso {p.numero}</span>
            <h1>{p.nome}: <span className="em">{p.gancho.toLowerCase()}</span></h1>
            <p>{p.descricao}</p>
          </div>
        </section>

        <section className="pad light">
          <div className="wrap detail">
            <div>
              <span className="eyebrow">O que você aprende</span>
              <ul>{p.aprende.map((a) => <li key={a}>{a}</li>)}</ul>
              <p style={{ marginTop: 32, color: "var(--muted)", fontSize: 18 }}>{p.paraQuem}</p>
            </div>
            <div>
              <FotoSlot alt={`Capa do curso ${p.nome}`} label={`Capa do ${p.nome} (arte do ChatGPT). 1200×1200`} ratio="1 / 1" />
              <div className="soon" style={{ marginTop: 24 }}>
                <b>Este curso faz parte do combo.</b>
                <p style={{ margin: "8px 0 18px" }}>
                  Leve os 4 por {OFERTA.parcelas} ou {OFERTA.avista} à vista. {OFERTA.garantiaDias} dias de garantia.
                </p>
                <Checkout href={COMBO_CHECKOUT} value={1497} className="btn btn-ink">Quero o combo completo</Checkout>
                {p.checkout && (
                  <p style={{ marginTop: 16 }}><a className="link-arrow" href={p.checkout}>Comprar só o {p.nome} →</a></p>
                )}
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
