import type { Metadata } from "next";
import { Footer, Header } from "@/components/Chrome";
import FotoSlot from "@/components/FotoSlot";
import { Check, Clock, Layers, Lock, Plus, Send, Shield, Spark, Whatsapp } from "@/components/Icons";
import Reveal from "@/components/Reveal";
import {
  MENTORIA,
  MENTORIA_FAQ,
  MENTORIA_FOCOS,
  MENTORIA_INCLUI,
  MENTORIA_WHATSAPP,
} from "@/lib/mentoria";

export const metadata: Metadata = {
  title: `${MENTORIA.nome} | Pense Rico`,
  description:
    "Mentoria individual com o Davidson: 12 horas de aula ao vivo, carteira montada com você, 30 dias de suporte pelo WhatsApp e bônus exclusivos. 100% online, vagas limitadas.",
};

const ICONES = { Spark, Layers, Shield, Clock, Check, Lock, Send };

export default function Mentoria() {
  return (
    <>
      <Header />
      <main>
        {/* HERO — texto e foto lado a lado */}
        <section className="sec ment-hero">
          <div className="hero-bg" aria-hidden />
          <div className="wrap ment-hero-grid">
            <Reveal>
              <span className="badge ment-badge"><b>Mentoria 1:1</b> Vagas limitadas por mês</span>
              <h1 className="h-grad" style={{ marginTop: 20 }}>
                {MENTORIA.nome}: <span className="serif grad">{MENTORIA.gancho.toLowerCase()}</span>
              </h1>
              <p className="lead" style={{ marginTop: 18 }}>
                Não é curso, não é turma: é atendimento individual comigo, {MENTORIA.cargaHoraria.toLowerCase()}, com
                foco em resolver o que está travando o seu progresso e montar sua carteira cripto do jeito certo para o
                seu momento.
              </p>
              <div className="ctas" style={{ marginTop: 28 }}>
                <a href={MENTORIA_WHATSAPP} target="_blank" rel="noopener noreferrer" className="btn btn-amber btn-lg">
                  <Whatsapp size={18} /> Falar com o Davidson
                </a>
              </div>
              <div className="checks">
                <span><Clock size={17} /> {MENTORIA.cargaHoraria}</span>
                <span><Shield size={17} /> {MENTORIA.suporte}</span>
              </div>
            </Reveal>
            <Reveal delay={120} className="ment-hero-photo">
              <FotoSlot
                src="/fotos/mentoria-premium.png"
                alt="Mentoria Premium Personalizada"
                label="Imagem premium da Mentoria"
                ratio="4 / 5"
                className="ment-foto"
              />
            </Reveal>
          </div>
        </section>

        {/* O QUE ESTÁ INCLUSO — primeiro item em destaque, resto em grade menor */}
        <section className="sec" style={{ paddingTop: 20 }}>
          <div className="wrap">
            <Reveal className="sec-head">
              <span className="kicker">O que você leva</span>
              <h2 className="h-grad">Um plano <span className="serif grad">inteiro</span>, não um pedaço dele.</h2>
            </Reveal>
            <div className="ment-inclui">
              {MENTORIA_INCLUI.map((i, idx) => (
                <Reveal key={i.titulo} delay={idx * 70} className={idx === 0 ? "ment-item-feat" : "ment-item"}>
                  <div>
                    <span className="ment-item-ic"><Check size={idx === 0 ? 26 : 20} /></span>
                    <h4>{i.titulo}</h4>
                    <p>{i.texto}</p>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        {/* FOCOS — grade assimétrica, ícones com brilho */}
        <section className="sec" style={{ background: "var(--bg-2)", borderBlock: "1px solid var(--line)" }}>
          <div className="wrap">
            <Reveal className="sec-head">
              <span className="kicker">Vários focos, um atendimento</span>
              <h2 className="h-grad">Serve para <span className="serif grad">cada</span> momento, por um motivo diferente.</h2>
            </Reveal>
            <div className="ment-focos">
              {MENTORIA_FOCOS.map((f, i) => {
                const Icone = ICONES[f.icone as keyof typeof ICONES];
                return (
                  <Reveal key={f.titulo} delay={(i % 3) * 80} className={`ment-foco ment-foco-${i}`}>
                    <div>
                      <span className="ment-foco-ic"><Icone size={24} /></span>
                      <h4>{f.titulo}</h4>
                      <p>{f.texto}</p>
                    </div>
                  </Reveal>
                );
              })}
            </div>
          </div>
        </section>

        {/* INVESTIMENTO — plano de um lado, oferta combinada e chamada do outro */}
        <section id="investimento" className="sec ment-invest-sec">
          <div className="offer-bg" aria-hidden />
          <div className="wrap">
            <Reveal className="sec-head center">
              <span className="kicker">Investimento</span>
              <h2 className="h-grad">Um atendimento. <span className="serif grad">Um</span> plano. Só seu.</h2>
            </Reveal>

            <Reveal>
              <div className="ment-invest-grid">
                <div className="ment-invest-plano">
                  <h3>{MENTORIA.nome}</h3>
                  <p className="sm">{MENTORIA.formato}</p>
                  <ul className="price-list">
                    {MENTORIA_INCLUI.map((i) => (
                      <li key={i.titulo}><Check /><span><b style={{ fontWeight: 600 }}>{i.titulo}</b></span></li>
                    ))}
                  </ul>
                </div>
                <div className="ment-invest-cta">
                  <span className="ment-ancora-label">Oferta combinada</span>
                  <span className="old ment-ancora">{MENTORIA.ancora}</span>
                  <p className="ment-invest-txt">
                    O investimento é combinado direto comigo, de acordo com a sua agenda e o seu momento. Me chama no
                    WhatsApp que a gente conversa e já alinha tudo.
                  </p>
                  <a href={MENTORIA_WHATSAPP} target="_blank" rel="noopener noreferrer" className="btn btn-amber btn-lg">
                    <Whatsapp size={18} /> Falar com o Davidson
                  </a>
                  <div className="assure" style={{ marginTop: 14 }}>
                    <span><Shield size={15} /> Poucas vagas por mês</span>
                  </div>
                </div>
              </div>
              <p className="mini-disclaimer" style={{ textAlign: "center", maxWidth: 560, margin: "24px auto 0" }}>
                Mentoria educacional e de método: não sou conselheiro financeiro e nada aqui é recomendação ou garantia
                de resultado. Investir em criptomoedas envolve risco, inclusive de perda de capital, e cada decisão é
                de responsabilidade de quem a toma.
              </p>
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
                {MENTORIA_FAQ.map((f) => (
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
              <h2 className="h-grad">Vamos montar o seu <span className="serif grad">plano</span>?</h2>
              <div className="ctas">
                <a href={MENTORIA_WHATSAPP} target="_blank" rel="noopener noreferrer" className="btn btn-amber btn-lg">
                  <Whatsapp size={18} /> Falar com o Davidson no WhatsApp
                </a>
              </div>
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
