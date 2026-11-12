import type { Metadata } from "next";
import Link from "next/link";
import { Footer, Header } from "@/components/Chrome";
import { OFERTA } from "@/lib/produtos";

export const metadata: Metadata = {
  title: "Termos de uso | Pense Rico",
  description:
    "As regras de uso do site e dos cursos do Pense Rico: o que está incluído, prazo de acesso, garantia, direitos autorais e aviso de risco.",
  alternates: { canonical: "/termos" },
};

export default function Termos() {
  return (
    <>
      <Header />
      <main className="legal">
        <div className="wrap">
          <span className="kicker">Regras do jogo</span>
          <h1 className="h-grad">Termos de <span className="serif grad">uso</span></h1>
          <p className="legal-data">Atualizados em 12 de novembro de 2026</p>

          <h2>O que este site é</h2>
          <p>
            O Pense Rico é um projeto de <b>educação</b> sobre o mercado de criptomoedas. Tudo o que está aqui — páginas,
            tutoriais e aulas — tem finalidade informativa e educacional.
          </p>

          <h2>O que este site não é</h2>
          <p>
            Não somos consultoria de investimentos, corretora, gestora de recursos nem conselheiros financeiros, e não
            temos registro para essas atividades. Nada aqui é recomendação de compra ou venda de qualquer ativo, nem
            promessa de retorno. Não administramos, não recebemos e não investimos dinheiro de alunos.
          </p>

          <h2>Aviso de risco</h2>
          <p>
            Investir em criptomoedas é de alto risco e pode levar à perda parcial ou total do capital. O mercado é
            volátil e opera sem garantia de instituições como o FGC. Operações com derivativos e alavancagem podem
            gerar perdas maiores que o valor aportado. Resultados passados, seus ou de qualquer outra pessoa, não
            garantem resultados futuros, e os resultados variam de pessoa para pessoa. Toda decisão de investimento é
            de responsabilidade exclusiva de quem a toma.
          </p>

          <h2>Compra, acesso e garantia</h2>
          <ul>
            <li>A venda e o pagamento são feitos pela <b>Hotmart</b>, que emite a nota e dá suporte ao pagamento.</li>
            <li>O acesso ao conteúdo comprado vale por <b>{OFERTA.acesso}</b>, contado da confirmação do pagamento.</li>
            <li>
              Você tem <b>{OFERTA.garantiaDias} dias de garantia</b> a partir da compra: dentro desse prazo, o
              reembolso é pedido pela própria Hotmart, sem necessidade de justificativa.
            </li>
            <li>O acesso é pessoal. Compartilhar login, gravar ou redistribuir as aulas encerra o acesso sem reembolso.</li>
            <li>
              Aulas, bônus e materiais podem ser atualizados, acrescentados ou substituídos ao longo do período de
              acesso, mantendo-se o conteúdo equivalente ao que foi anunciado.
            </li>
          </ul>

          <h2>Grupos e comunidade</h2>
          <p>
            O grupo no Telegram é espaço de estudo e dúvidas. Não é permitido oferecer investimentos, pedir dinheiro,
            divulgar links de indicação, aplicar golpes ou ofender outras pessoas. Quem fizer isso é removido. Nunca
            pedimos senha, chave privada ou seed da sua carteira: ninguém da equipe vai pedir isso em nenhuma hipótese.
          </p>

          <h2>Direitos autorais</h2>
          <p>
            Todo o conteúdo — aulas, textos, tutoriais, indicadores e materiais — é protegido por direito autoral.
            Copiar, revender, republicar ou distribuir sem autorização por escrito é proibido e sujeito às medidas
            legais cabíveis.
          </p>

          <h2>Conteúdo de terceiros</h2>
          <p>
            Ferramentas e serviços citados (corretoras, carteiras, TradingView e outros) têm regras próprias e não são
            de nossa responsabilidade. Confira sempre o site oficial de cada um.
          </p>

          <h2>Lei aplicável</h2>
          <p>
            Estes termos seguem a legislação brasileira. Dúvidas e pedidos:{" "}
            <a href="mailto:pensericodigital@gmail.com">pensericodigital@gmail.com</a>.
          </p>

          <p className="legal-volta">
            <Link href="/">← Voltar para a página inicial</Link> · <Link href="/privacidade">Política de privacidade</Link>
          </p>
        </div>
      </main>
      <Footer />
    </>
  );
}
