import Link from "next/link";
import Checkout from "@/components/Checkout";
import { Footer, Header } from "@/components/Chrome";
import FotoSlot from "@/components/FotoSlot";
import Reveal from "@/components/Reveal";
import { BONUS, COMBO_CHECKOUT, FAQ, OFERTA, PRODUTOS } from "@/lib/produtos";

const TAPE = ["Bitcoin", "Futuros", "Carteira", "Mentalidade", "Segurança", "Método", "Disciplina", "DeFi"];

export default function Home() {
  return (
    <>
      <Header />
      <main>
        {/* HERO */}
        <section className="hero grain">
          <div className="wrap hero-grid">
            <div>
              <Reveal><span className="eyebrow">Black Friday Cripto · Combo Pense Rico</span></Reveal>
              <Reveal delay={80}>
                <h1>Aprenda o mercado cripto com <em>método</em>, não com palpite.</h1>
              </Reveal>
              <Reveal delay={160}>
                <p className="lead">
                  4 formações completas em um só combo. Do primeiro passo em Bitcoin até uma carteira bem montada,
                  com quem estuda e opera esse mercado todos os dias.
                </p>
              </Reveal>
              <Reveal delay={240}>
                <div className="cta-row">
                  <Checkout href={COMBO_CHECKOUT} value={1497}>Quero o combo</Checkout>
                  <Link href="#cursos" className="btn btn-ghost">Ver os 4 cursos</Link>
                </div>
              </Reveal>
              <Reveal delay={320}>
                <div className="trust">
                  <span>{OFERTA.garantiaDias} dias de garantia</span>
                  <span>Acesso por {OFERTA.acesso}</span>
                  <span>Grupo no Telegram</span>
                </div>
              </Reveal>
            </div>

            <Reveal delay={200} className="hero-photo">
              <FotoSlot
                priority
                alt="Davidson, criador do Pense Rico"
                label="Foto do Davidson (vertical, meio corpo, fundo escuro). 1200×1500"
                ratio="4 / 5"
              />
              <div className="badge b1"><b>4 cursos</b>em 1 combo</div>
              <div className="badge b2"><b>{OFERTA.garantiaDias} dias</b>de garantia</div>
            </Reveal>
          </div>
        </section>

        {/* FAIXA */}
        <div className="tape" aria-hidden>
          <div className="tape-track">
            {[...TAPE, ...TAPE, ...TAPE, ...TAPE].map((t, i) => <span key={i}>{t}</span>)}
          </div>
        </div>

        {/* IDEIA */}
        <section className="pad light">
          <div className="wrap">
            <Reveal className="sec-head">
              <span className="eyebrow">O ponto de partida</span>
              <h2>Cripto não é cassino. É um mercado com <span className="em">regras</span>.</h2>
              <p>Quem entra sem preparo costuma pagar caro pela lição. O combo existe para você pular essa parte.</p>
            </Reveal>
            <div className="ideas">
              {[
                ["01", "Base antes de ferramenta", "Você entende como o mercado funciona e como pensar como investidor antes de colocar dinheiro nele."],
                ["02", "Risco em primeiro lugar", "Proteção do patrimônio e gestão de risco vêm antes de qualquer estratégia de ganho."],
                ["03", "Um caminho, não pedaços", "Quatro cursos que se encaixam, em vez de vídeos soltos que não conversam entre si."],
              ].map(([n, t, d], i) => (
                <Reveal key={n} delay={i * 100} className="idea">
                  <div className="n">{n}</div>
                  <h3>{t}</h3>
                  <p>{d}</p>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        {/* CURSOS */}
        <section id="cursos" className="pad on-cream2 light">
          <div className="wrap">
            <Reveal className="sec-head">
              <span className="eyebrow">Dentro do combo</span>
              <h2>Quatro formações. <span className="em">Um</span> caminho completo.</h2>
            </Reveal>
            <div className="courses">
              {PRODUTOS.map((p) => (
                <Reveal key={p.slug} as="article" className="course">
                  <div className="course-art">
                    <FotoSlot alt={`Capa do curso ${p.nome}`} label={`Capa do ${p.nome} (arte do ChatGPT). 1200×1200`} ratio="1 / 1" />
                  </div>
                  <div className="course-body">
                    <div className="course-num" aria-hidden>{p.numero}</div>
                    <h3>{p.nome}</h3>
                    <p className="gancho">{p.gancho}</p>
                    <p className="d">{p.descricao}</p>
                    <ul>{p.aprende.map((a) => <li key={a}>{a}</li>)}</ul>
                    <Link href={`/curso/${p.slug}`} className="link-arrow">Ver detalhes <span aria-hidden>→</span></Link>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        {/* OFERTA */}
        <section id="oferta" className="pad on-ink offer grain">
          <div className="wrap">
            <Reveal className="sec-head" >
              <span className="eyebrow">Oferta Black Friday</span>
              <h2>Todos os cursos. Todo o suporte. <span className="em">Um</span> preço.</h2>
            </Reveal>
            <Reveal>
              <div className="ticket">
                <div className="ticket-l">
                  <h3>Combo Pense Rico</h3>
                  <ul>
                    {PRODUTOS.map((p) => <li key={p.slug}><span><b>{p.nome}</b> · {p.gancho}</span></li>)}
                    <li><span>Grupo no Telegram para tirar dúvidas</span></li>
                    <li><span>Acesso por {OFERTA.acesso}</span></li>
                    <li><span>Bônus exclusivos</span></li>
                  </ul>
                </div>
                <div className="ticket-r">
                  <div className="price-de">de {OFERTA.de}</div>
                  <div className="price-big"><small>12x </small>R$ 154<small>,82</small></div>
                  <div className="price-or">ou {OFERTA.avista} à vista</div>
                  <Checkout href={COMBO_CHECKOUT} value={1497} className="btn btn-ink">Garantir minha vaga</Checkout>
                  <div className="seal">{OFERTA.garantiaDias} dias de garantia · compra segura pela Hotmart</div>
                </div>
              </div>
            </Reveal>
          </div>
        </section>

        {/* BÔNUS */}
        <section className="pad on-ink" style={{ paddingTop: 0 }}>
          <div className="wrap">
            <Reveal className="sec-head">
              <span className="eyebrow">Junto com o combo</span>
              <h2>Bônus <span className="em">exclusivos</span>.</h2>
            </Reveal>
            <div className="bonus">
              {BONUS.map((b, i) => (
                <Reveal key={b.titulo} delay={i * 100} as="article" className="bonus-card">
                  <FotoSlot alt={b.titulo} label={`Arte do ${b.titulo}. 1200×800`} ratio="3 / 2" />
                  <div className="t"><h3>{b.titulo}</h3><p>{b.texto}</p></div>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        {/* AUTOR */}
        <section id="autor" className="pad light">
          <div className="wrap author">
            <Reveal>
              <FotoSlot alt="Davidson" label="Foto do Davidson (retrato, olhando para a câmera). 1000×1250" ratio="4 / 5" />
            </Reveal>
            <Reveal delay={120}>
              <span className="eyebrow">Quem ensina</span>
              <h2>Eu comecei do <span className="em">zero</span>.</h2>
              <p>
                Sou o Davidson, criador do canal Pense Rico no YouTube. Sou empreendedor, analista de software e
                estudo Bitcoin, blockchain, DeFi e inteligência artificial há anos.
              </p>
              <p>
                Mas nem sempre foi assim. Me formei em duas faculdades, montei empresa, quebrei, acertei e fui
                construindo meu patrimônio aos poucos. Só depois de muito estudo e prática no mundo das finanças
                descobri as criptomoedas e fui aprendendo degrau por degrau.
              </p>
              <p>
                Hoje reuni tudo o que aprendi em um único lugar, para você não precisar perder tanto tempo e dinheiro
                para chegar onde cheguei.
              </p>
              <div className="sign">Davidson<small>Criador do Pense Rico · #evolua</small></div>
            </Reveal>
          </div>
        </section>

        {/* GARANTIA */}
        <section className="pad on-ink">
          <div className="wrap">
            <Reveal>
              <div className="guarantee">
                <div className="seal-big"><b>{OFERTA.garantiaDias}</b><span>dias</span></div>
                <div>
                  <h2>Risco zero para testar.</h2>
                  <p>
                    Entre, assista às aulas e veja se faz sentido para você. Se em {OFERTA.garantiaDias} dias achar que
                    não é para você, devolvemos o seu dinheiro, sem burocracia, pela própria Hotmart.
                  </p>
                </div>
              </div>
            </Reveal>
          </div>
        </section>

        {/* FAQ */}
        <section id="faq" className="pad light">
          <div className="wrap">
            <Reveal className="sec-head" >
              <span className="eyebrow">Dúvidas</span>
              <h2>Perguntas <span className="em">frequentes</span>.</h2>
            </Reveal>
            <Reveal>
              <div className="faq">
                {FAQ.map((f) => (
                  <details key={f.p}>
                    <summary>{f.p}</summary>
                    <p>{f.r}</p>
                  </details>
                ))}
              </div>
            </Reveal>
          </div>
        </section>

        {/* CTA FINAL */}
        <section className="pad on-ink final grain">
          <div className="wrap">
            <Reveal>
              <span className="eyebrow">Sua vez</span>
              <h2>O mercado não espera. <span className="em">Prepare-se</span> antes de entrar.</h2>
              <Checkout href={COMBO_CHECKOUT} value={1497}>Garantir minha vaga</Checkout>
            </Reveal>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
