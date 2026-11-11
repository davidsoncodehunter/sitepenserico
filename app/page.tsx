import Link from "next/link";
import Capa from "@/components/Capa";
import Checkout from "@/components/Checkout";
import { Footer, Header } from "@/components/Chrome";
import Counter from "@/components/Counter";
import FotoSlot from "@/components/FotoSlot";
import { Arrow, Check, Clock, Instagram, Plus, Send, Shield, Youtube } from "@/components/Icons";
import Reveal from "@/components/Reveal";
import SlideCta from "@/components/SlideCta";
import Spotlight from "@/components/Spotlight";
import Tilt from "@/components/Tilt";
import { BONUS, COMBO_CHECKOUT, FAQ, OFERTA, PRODUTOS } from "@/lib/produtos";

const TAPE = ["Bitcoin", "Futuros", "Carteira", "Mentalidade", "Segurança", "Método", "Disciplina", "DeFi"];

const TRILHA = [
  { slug: "formacao-pense-rico", t: "Mentalidade primeiro", d: "Antes de qualquer ferramenta, a cabeça de quem investe: comportamento, paciência e decisão sem emoção." },
  { slug: "bitcoin-express", t: "Proteção do patrimônio", d: "Como comprar e guardar Bitcoin com segurança, com liberdade e sem cair nos erros mais comuns." },
  { slug: "if30", t: "Operação com regras", d: "Mercado de futuros com entrada, saída e gestão de risco definidas antes de qualquer operação." },
  { slug: "minha-carteira-rica", t: "Tudo numa carteira", d: "Juntar o aprendizado numa carteira sólida, montada com critério e acompanhada com calma." },
];

export default function Home() {
  const porSlug = Object.fromEntries(PRODUTOS.map((p) => [p.slug, p]));

  return (
    <>
      <Header />
      <main>
        {/* HERO */}
        <section className="hero">
          <div className="hero-bg" aria-hidden />
          <div className="wrap">
            <Reveal><span className="badge"><b>Black Friday</b> Oferta por tempo limitado</span></Reveal>
            <Reveal delay={90}>
              <h1 className="h-grad">
                Domine o mercado cripto com <span className="serif grad">método</span>, não com palpite.
              </h1>
            </Reveal>
            <Reveal delay={180}>
              <p className="sub">
                4 formações completas em um só combo: do primeiro Bitcoin até uma carteira bem montada, com quem estuda
                e opera esse mercado todos os dias.
              </p>
            </Reveal>
            <Reveal delay={270}>
              <div className="ctas">
                <Checkout href={COMBO_CHECKOUT} value={1497} className="btn btn-amber btn-lg">Quero o combo</Checkout>
                <Link href="#cursos" className="btn btn-line btn-lg">Ver os 4 cursos</Link>
              </div>
            </Reveal>
            <Reveal delay={340}>
              <div className="checks">
                <span><Shield size={17} /> {OFERTA.garantiaDias} dias de garantia</span>
                <span><Clock size={17} /> Acesso por {OFERTA.acesso}</span>
                <span><Send size={17} /> Grupo no Telegram</span>
              </div>
            </Reveal>
          </div>

          <div className="stage">
            <div className="horizon" aria-hidden />
            <div className="fan">
              {PRODUTOS.map((p) => (
                <Link key={p.slug} href={`/curso/${p.slug}`} className="fan-link" aria-label={`Conhecer o curso ${p.nome}`}>
                  <Capa numero={p.numero} nome={p.nome} src={p.capa ?? undefined} />
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* FAIXA */}
        <div className="marq" aria-hidden>
          <div className="marq-track">
            {[...TAPE, ...TAPE, ...TAPE, ...TAPE].map((t, i) => <span key={i} className="serif">{t}</span>)}
          </div>
        </div>

        {/* NÚMEROS */}
        <section className="sec" style={{ paddingBottom: 0 }}>
          <div className="wrap">
            <Reveal>
              <div className="stats">
                <div className="stat"><b className="grad"><Counter to={4} /></b><span>cursos completos</span></div>
                <div className="stat"><b className="grad"><Counter to={12} /></b><span>meses de acesso</span></div>
                <div className="stat"><b className="grad"><Counter to={7} /></b><span>dias de garantia</span></div>
                <div className="stat"><b className="grad"><Counter to={1} /></b><span>grupo no Telegram</span></div>
              </div>
            </Reveal>
          </div>
        </section>

        {/* MÉTODO */}
        <section id="metodo" className="sec">
          <div className="wrap trail">
            <div className="trail-sticky">
              <Reveal>
                <span className="kicker">O caminho</span>
                <h2 className="h-grad">Cripto não é cassino. É um mercado com <span className="serif grad">regras</span>.</h2>
                <p className="lead" style={{ marginTop: 22, color: "var(--muted)", fontSize: 19, maxWidth: 480 }}>
                  Quem entra sem preparo costuma pagar caro pela lição. O combo existe para você pular essa parte, em
                  quatro etapas que se encaixam.
                </p>
              </Reveal>
            </div>
            <div className="steps">
              {TRILHA.map((s, i) => (
                <Reveal key={s.slug} delay={i * 80}>
                  <div className="step">
                    <div className="step-n">0{i + 1}</div>
                    <div>
                      <h3>{s.t}</h3>
                      <p>{s.d}</p>
                      <span className="who">{porSlug[s.slug].nome}</span>
                    </div>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        {/* CURSOS */}
        <section id="cursos" className="sec" style={{ background: "var(--bg-2)", borderBlock: "1px solid var(--line)" }}>
          <div className="wrap">
            <Reveal className="sec-head">
              <span className="kicker">Dentro do combo</span>
              <h2 className="h-grad">Quatro formações. <span className="serif grad">Um</span> caminho completo.</h2>
            </Reveal>
            <div className="bento">
              {PRODUTOS.map((p, i) => (
                <Reveal key={p.slug} delay={(i % 2) * 90} className={i === 0 || i === 3 ? "card-w wide-w" : "card-w"}>
                  <Link href={`/curso/${p.slug}`} className="card-link" aria-label={`Ver detalhes do curso ${p.nome}`}>
                    <Spotlight className={`card ${i === 0 || i === 3 ? "wide" : "narrow"}`}>
                      <Tilt max={7}><Capa numero={p.numero} nome={p.nome} src={p.capa ?? undefined} /></Tilt>
                      <div className="card-tx">
                        <h3>{p.nome}</h3>
                        <p className="gancho serif" style={{ fontSize: 22 }}>{p.gancho}</p>
                        <p className="desc">{p.paraQuem}</p>
                        <span className="more">Ver detalhes <Arrow size={16} /></span>
                      </div>
                    </Spotlight>
                  </Link>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        {/* AUTOR */}
        <section id="autor" className="sec">
          <div className="wrap author">
            <Reveal className="author-photo">
              <FotoSlot src="/fotos/davidson-retrato.png" alt="Davidson, criador do Pense Rico" label="Foto do Davidson, retrato, 1000×1250" ratio="4 / 5" />
            </Reveal>
            <Reveal delay={120}>
              <span className="kicker">Quem ensina</span>
              <h2 className="h-grad">Eu comecei do <span className="serif grad">zero</span>.</h2>
              <p>
                Sou o Davidson, criador do canal Pense Rico no YouTube. Sou empreendedor e analista de software, e estudo
                Bitcoin, blockchain, DeFi e inteligência artificial há anos.
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
              <div className="chips">
                <span>Criador do canal Pense Rico</span>
                <span>2 graduações</span>
                <span>Analista de software</span>
                <span>WEB3 e criptografia</span>
                <span>Blockchain, DeFi e IA</span>
              </div>
              <div className="sign serif">Davidson</div>
              <div className="socials">
                <a href="https://www.instagram.com/davidson.penserico" target="_blank" rel="noopener noreferrer" aria-label="Instagram do Davidson">
                  <Instagram size={17} /><span>davidson.penserico</span>
                </a>
                <a href="https://www.youtube.com/@PenseRico" target="_blank" rel="noopener noreferrer" aria-label="Canal Pense Rico no YouTube">
                  <Youtube size={17} /><span>Pense Rico</span>
                </a>
              </div>
            </Reveal>
          </div>
        </section>

        {/* OFERTA */}
        <section id="oferta" className="sec offer" style={{ borderTop: "1px solid var(--line)" }}>
          <div className="offer-bg" aria-hidden />
          <div className="wrap">
            <Reveal className="sec-head center">
              <span className="kicker">Oferta Black Friday</span>
              <h2 className="h-grad">Todos os cursos. Todo o suporte. <span className="serif grad">Um</span> preço.</h2>
            </Reveal>

            <Reveal>
              <div className="price-card">
                <div className="price-grid">
                  <div className="price-l">
                    <h3>Combo Pense Rico</h3>
                    <p className="sm">Tudo o que você precisa para começar com método.</p>
                    <ul className="price-list">
                      {PRODUTOS.map((p) => (
                        <li key={p.slug}><Check /><span><b style={{ fontWeight: 600 }}>{p.nome}</b><small>{p.gancho}</small></span></li>
                      ))}
                      <li><Check /><span>Grupo no Telegram<small>Tire dúvidas e acompanhe com a comunidade</small></span></li>
                      <li><Check /><span>Acesso por {OFERTA.acesso}<small>Estude no seu ritmo</small></span></li>
                      <li><Check /><span>Bônus exclusivos</span></li>
                    </ul>
                  </div>
                  <div className="price-r">
                    <span className="old">de {OFERTA.de}</span>
                    <div className="big"><small>12x</small><sup>R$</sup>154<span style={{ fontSize: "0.5em" }}>,82</span></div>
                    <p className="avista">ou <b>{OFERTA.avista}</b> à vista</p>
                    <Checkout href={COMBO_CHECKOUT} value={1497} className="btn btn-amber btn-lg">Garantir minha vaga</Checkout>
                    <div className="assure">
                      <span><Shield size={15} /> {OFERTA.garantiaDias} dias de garantia</span>
                      <span><Check size={15} /> Compra segura pela Hotmart</span>
                    </div>
                    <p className="mini-disclaimer" style={{ textAlign: "left", margin: "14px 0 0" }}>
                      Acesso por {OFERTA.acesso}. Conteúdo educacional: não sou conselheiro financeiro e nada aqui é
                      recomendação ou conselho de investimento; cada decisão é de responsabilidade de quem a toma.
                    </p>
                  </div>
                </div>
              </div>
            </Reveal>

            <div className="bonus">
              {BONUS.map((b, i) => (
                <Reveal key={b.titulo} delay={i * 90}>
                  <div className="bonus-c"><span className="tag">Bônus 0{i + 1}</span><h4>{b.titulo}</h4><p>{b.texto}</p></div>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        {/* GARANTIA */}
        <section className="sec" style={{ paddingTop: 0 }}>
          <div className="wrap">
            <Reveal>
              <div className="guar">
                <div className="seal"><b>{OFERTA.garantiaDias}</b><span>dias</span></div>
                <div>
                  <h3>Risco zero para testar.</h3>
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
        <section id="faq" className="sec" style={{ paddingTop: 0 }}>
          <div className="wrap">
            <Reveal className="sec-head center">
              <span className="kicker">Dúvidas</span>
              <h2 className="h-grad">Perguntas <span className="serif grad">frequentes</span>.</h2>
            </Reveal>
            <Reveal>
              <div className="faq">
                {FAQ.map((f) => (
                  <details key={f.p}>
                    <summary>{f.p}<Plus size={22} /></summary>
                    <p>{f.r}</p>
                  </details>
                ))}
              </div>
            </Reveal>
          </div>
        </section>

        {/* CTA FINAL */}
        <section className="sec final" style={{ borderTop: "1px solid var(--line)" }}>
          <div className="wrap">
            <Reveal>
              <span className="kicker">Sua vez</span>
              <h2 className="h-grad">O mercado não espera. <span className="serif grad">Prepare-se</span> antes de entrar.</h2>
              <div className="ctas"><SlideCta href={COMBO_CHECKOUT} /></div>
              <p style={{ marginTop: 18, color: "var(--dim)", fontSize: 14 }}>
                ou <Link href={COMBO_CHECKOUT} style={{ color: "var(--amber)", textDecoration: "underline" }}>clique aqui para ir direto ao checkout</Link>
              </p>
              <p className="mini-disclaimer">
                Conteúdo educacional: não sou conselheiro financeiro e nada aqui é recomendação ou conselho de
                investimento. Investir envolve risco, e cada decisão é de responsabilidade de quem a toma.
              </p>
            </Reveal>
          </div>
          <div className="stage" aria-hidden><div className="horizon" /></div>
        </section>
      </main>
      <Footer />
    </>
  );
}
