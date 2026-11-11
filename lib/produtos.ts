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
  /** arte da capa em /public/fotos; null usa a capa desenhada em CSS */
  capa: string | null;
};

export const PRODUTOS: Produto[] = [
  {
    slug: "if30",
    numero: "01",
    nome: "IF30 — Imersão Futuros 30 Dias",
    gancho: "Do zero ao avançado em futuros, em 30 dias",
    descricao:
      "Programa que leva você do zero ao avançado em futuros cripto: 30 dias intensivos de aulas gravadas, com suporte diário no Grupo Vip — 5 horas de teoria e 25 horas de suporte para a sua prática em grupo, para sair da turma confiante e preparado para operar futuros de forma consistente.",
    aprende: [
      "30 dias intensivos de aulas, do zero ao avançado",
      "5 horas de teoria e 25 horas de suporte para a sua prática em grupo",
      "Suporte diário no Grupo Vip",
      "Bônus: Indicador Pense Rico Futuros + grupo fechado de sinais e análises",
    ],
    paraQuem: "Para quem quer operar futuros com regras, não com palpite.",
    checkout: null,
    capa: "/fotos/capa-if30.png",
  },
  {
    slug: "bitcoin-express",
    numero: "02",
    nome: "Bitcoin Express",
    gancho: "O caminho rápido para proteger o que é seu com Bitcoin",
    descricao:
      "Cansado de ver o seu dinheiro perder valor? O Bitcoin Express é o treinamento direto para entender Bitcoin do zero ao avançado, proteger o seu patrimônio da inflação e ter controle total do próprio dinheiro — da primeira compra à custódia segura.",
    aprende: [
      "Bitcoin e criptomoedas do zero ao avançado: como funcionam e por que valorizam",
      "Como comprar, vender e armazenar com segurança, com controle total do seu patrimônio",
      "Como se proteger da inflação e das crises, e como identificar tendências do mercado",
      "Renda passiva em cripto e exposição ao dólar, sempre com os riscos explicados",
      "Bônus: acesso VIP ao grupo fechado de investidores, com suporte 24/7",
    ],
    paraQuem: "Para quem não quer mais depender do sistema para cuidar do próprio dinheiro.",
    checkout: null,
    capa: "/fotos/capa-bitcoin-express.png",
  },
  {
    slug: "formacao-pense-rico",
    numero: "03",
    nome: "Formação Pense Rico",
    gancho: "Do zero absoluto ao mercado cripto completo",
    descricao:
      "A formação completa em vídeo aulas para começar do zero absoluto: Bitcoin, Ethereum, altcoins e meme coins, técnicas de compra e venda, segurança e treinamento psicológico para dominar o mercado — sem precisar entender de informática.",
    aprende: [
      "Bitcoin, Ethereum, altcoins, meme coins, NFT e GameFi, do zero absoluto",
      "Técnicas de compra, venda e trading, com gestão de risco e diversificação",
      "Corretoras, segurança da informação e a parte de tecnologia, sem precisar ser de informática",
      "Mentalidade, educação financeira e treinamento psicológico para dominar o mercado",
    ],
    paraQuem: "Para quem quer começar do zero absoluto e caminhar com as próprias pernas.",
    checkout: null,
    capa: "/fotos/capa-formacao-pense-rico.png",
  },
  {
    slug: "minha-carteira-rica",
    numero: "04",
    nome: "Minha Carteira Rica",
    gancho: "Uma carteira de verdade, montada do zero, ao vivo",
    descricao:
      "Acompanhe em live semanal a construção de uma carteira de investimentos do zero: eu investindo dinheiro de verdade, com todos os cuidados, mostrando cada decisão — os acertos e os erros que milhares de investidores cometem. A meta é aberta: levar essa carteira ao primeiro milhão, ao vivo.",
    aprende: [
      "Live semanal: a carteira sendo montada e gerida do zero, na prática",
      "Cada decisão explicada: os acertos e os erros que investidores cometem",
      "Gestão de risco com dinheiro de verdade, com todos os cuidados",
      "Quando a carteira bater a meta, haverá presente para quem participa da Formação, da Mentoria e da Comunidade",
    ],
    paraQuem: "Para quem aprende vendo de verdade: dinheiro real, decisões reais, toda semana.",
    checkout: null,
    capa: "/fotos/capa-minha-carteira-rica.png",
  },
];

export const BONUS = [
  {
    titulo: "Biblioteca do investidor",
    texto: "Um drive completo de livros selecionados sobre mercado, investimentos e mentalidade, para estudar junto com os cursos.",
  },
  {
    titulo: "Indicador Pense Rico no TradingView",
    texto: "O indicador exclusivo do Pense Rico direto no seu TradingView, para acompanhar o mercado com a mesma leitura ensinada nas aulas.",
  },
  {
    titulo: "Aulas bônus durante toda a permanência",
    texto: "Novas aulas bônus vão sendo adicionadas ao longo do seu acesso, sem custo extra: o conteúdo continua crescendo depois da compra.",
  },
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
