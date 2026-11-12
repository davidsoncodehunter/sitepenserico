import type { Metadata } from "next";
import Link from "next/link";
import { Footer, Header } from "@/components/Chrome";

export const metadata: Metadata = {
  title: "Política de privacidade | Pense Rico",
  description: "Como o site do Pense Rico trata os seus dados: o que é coletado, para quê, e como pedir a exclusão.",
  alternates: { canonical: "/privacidade" },
};

export default function Privacidade() {
  return (
    <>
      <Header />
      <main className="legal">
        <div className="wrap">
          <span className="kicker">Transparência</span>
          <h1 className="h-grad">Política de <span className="serif grad">privacidade</span></h1>
          <p className="legal-data">Atualizada em 12 de novembro de 2026</p>

          <h2>Quem somos</h2>
          <p>
            Este site é do Pense Rico, projeto de educação sobre o mercado de criptomoedas criado pelo Davidson. O
            contato para assuntos de privacidade é o e-mail <a href="mailto:pensericodigital@gmail.com">pensericodigital@gmail.com</a>.
          </p>

          <h2>Quais dados coletamos</h2>
          <p>
            Navegar pelo site não exige cadastro: não pedimos nome, e-mail, telefone nem documento em nenhuma página.
            O que existe é o seguinte:
          </p>
          <ul>
            <li>
              <b>Dados de navegação</b>, coletados pelo Pixel da Meta (Facebook e Instagram): páginas visitadas,
              cliques nos botões de compra, tipo de aparelho e um identificador do seu navegador. Servem para medir os
              anúncios e mostrar o anúncio certo para quem já demonstrou interesse.
            </li>
            <li>
              <b>Dados técnicos da hospedagem</b> (Vercel), como endereço IP e horário do acesso, guardados por pouco
              tempo para segurança e funcionamento do site.
            </li>
          </ul>

          <h2>O que acontece quando você compra</h2>
          <p>
            A compra não é feita aqui. Ao clicar em um botão de compra você é levado para a <b>Hotmart</b>, que é a
            plataforma responsável pelo pagamento e pela entrega do curso. Nome, e-mail, CPF e dados de cartão são
            informados e tratados pela Hotmart, segundo a política de privacidade dela — nós não recebemos e não
            guardamos dados de pagamento. Da Hotmart recebemos apenas a informação de que a compra foi concluída, para
            liberar o seu acesso e o convite do grupo no Telegram.
          </p>

          <h2>Base legal e seus direitos (LGPD)</h2>
          <p>
            Tratamos dados de navegação com base no legítimo interesse de medir e melhorar a divulgação, e dados de
            compra para executar o contrato de venda do curso. Pela Lei Geral de Proteção de Dados (Lei 13.709/2018)
            você pode, a qualquer momento, pedir a confirmação do tratamento, o acesso, a correção, a portabilidade, a
            exclusão dos seus dados ou a revogação do consentimento. Basta escrever para{" "}
            <a href="mailto:pensericodigital@gmail.com">pensericodigital@gmail.com</a>; respondemos em até 15 dias.
          </p>

          <h2>Cookies e como desligar o rastreamento</h2>
          <p>
            O Pixel da Meta usa cookies. Você pode bloqueá-los nas configurações do seu navegador, usar o modo de
            navegação privada, ou ajustar as preferências de anúncios na sua conta do Facebook e do Instagram. O site
            continua funcionando normalmente sem eles.
          </p>

          <h2>Compartilhamento</h2>
          <p>
            Não vendemos e não alugamos dados. Eles são compartilhados apenas com os serviços necessários para o site
            existir: Meta (anúncios), Vercel (hospedagem) e Hotmart (pagamento e entrega do curso).
          </p>

          <h2>Menores de idade</h2>
          <p>
            O conteúdo é destinado a maiores de 18 anos. Não coletamos dados de crianças e adolescentes de forma
            intencional.
          </p>

          <h2>Mudanças nesta política</h2>
          <p>
            Se algo mudar, a data no começo desta página é atualizada. Vale sempre a versão publicada aqui.
          </p>

          <p className="legal-volta">
            <Link href="/">← Voltar para a página inicial</Link> · <Link href="/termos">Termos de uso</Link>
          </p>
        </div>
      </main>
      <Footer />
    </>
  );
}
