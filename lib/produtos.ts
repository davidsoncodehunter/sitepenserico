// Fonte única dos produtos. Quando chegar o link da Hotmart de cada curso,
// é só trocar `checkout` de null para a URL.
export const COMBO_CHECKOUT = "https://pay.hotmart.com/W102392561B?checkoutMode=10";

export const PIXEL_ID = "272592461997638";

export const OFERTA = {
  de: "R$ 7.108,00",
  parcelas: "12x R$ 154,82",
  avista: "R$ 1.497,00",
  garantiaDias: 7,
  acesso: "1 ano",
};

export type Produto = {
  slug: string;
  numero: string;
  nome: string;
  gancho: string;
  descricao: string;
  aprende: string[];
  paraQuem: string;
  checkout: string | null;
};

export const PRODUTOS: Produto[] = [
  {
    slug: "if30",
    numero: "01",
    nome: "IF30",
    gancho: "Mercado de futuros com método",
    descricao:
      "Aprenda a operar o mercado de futuros com segurança e consistência, com regras claras de entrada, saída e gestão de risco.",
    aprende: [
      "Como funciona o mercado de futuros, sem mistério",
      "Gestão de risco antes de qualquer operação",
      "Rotina e disciplina para operar com consistência",
    ],
    paraQuem: "Para quem quer operar futuros com regras, não com palpite.",
    checkout: null,
  },
  {
    slug: "bitcoin-express",
    numero: "02",
    nome: "Bitcoin Express",
    gancho: "Invista com liberdade e proteja o que é seu",
    descricao:
      "O caminho direto para investir em Bitcoin com liberdade e proteger o seu patrimônio, do primeiro passo à custódia segura.",
    aprende: [
      "Como comprar e guardar Bitcoin com segurança",
      "Custódia: carteiras, chaves e boas práticas",
      "Erros comuns que fazem iniciantes perder dinheiro",
    ],
    paraQuem: "Para quem quer começar em Bitcoin do jeito certo, sem tropeçar.",
    checkout: null,
  },
  {
    slug: "formacao-pense-rico",
    numero: "03",
    nome: "Formação Pense Rico",
    gancho: "A mentalidade de quem pensa como investidor",
    descricao:
      "Desenvolva a mentalidade e as estratégias de quem realmente pensa como investidor, a base que sustenta todo o resto.",
    aprende: [
      "Mentalidade e comportamento diante do mercado",
      "Estratégias de quem investe a longo prazo",
      "Como tomar decisões sem se deixar levar pela emoção",
    ],
    paraQuem: "Para quem quer construir a base antes de escolher a ferramenta.",
    checkout: null,
  },
  {
    slug: "minha-carteira-rica",
    numero: "04",
    nome: "Minha Carteira Rica",
    gancho: "Uma carteira sólida, montada com critério",
    descricao:
      "Construa uma carteira sólida e bem estruturada, entendendo o porquê de cada escolha e como acompanhar tudo no tempo.",
    aprende: [
      "Como montar e dividir uma carteira cripto",
      "Critérios para escolher e acompanhar ativos",
      "Quando revisar, ajustar e manter a calma",
    ],
    paraQuem: "Para quem quer uma carteira pensada, não montada no impulso.",
    checkout: null,
  },
];

export const BONUS = [
  { titulo: "Bônus 1", texto: "Descrição do bônus a definir." },
  { titulo: "Bônus 2", texto: "Descrição do bônus a definir." },
  { titulo: "Bônus 3", texto: "Descrição do bônus a definir." },
];

export const FAQ = [
  {
    p: "Preciso ter experiência para começar?",
    r: "Não. O combo foi montado para levar você do zero até operar e investir com método. Cada curso cobre uma parte do caminho.",
  },
  {
    p: "Como recebo o acesso?",
    r: "A compra é feita pela Hotmart. Assim que o pagamento é confirmado, você recebe o acesso por e-mail. O acesso dura 1 ano.",
  },
  {
    p: "E se eu não gostar?",
    r: "Você tem 7 dias de garantia, contados a partir da compra. Se não for para você, é só pedir o reembolso pela própria Hotmart.",
  },
  {
    p: "Existe suporte?",
    r: "Sim. Você entra no grupo do Telegram para tirar dúvidas e acompanhar o conteúdo com a comunidade.",
  },
  {
    p: "Posso comprar os cursos separados?",
    r: "Em breve. Por enquanto o combo é a forma mais completa e com o melhor preço.",
  },
  {
    p: "Isso garante lucro?",
    r: "Não. Todo investimento em criptomoedas envolve risco, inclusive de perda do capital. O que entregamos é conhecimento e método para você decidir com mais segurança. Resultados variam de pessoa para pessoa.",
  },
];
