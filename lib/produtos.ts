// Fonte única dos produtos. Quando chegar o link da Hotmart de cada curso,
// é só trocar `checkout` de null para a URL.
export const COMBO_CHECKOUT = "https://pay.hotmart.com/W102392561B?checkoutMode=10";

export const PIXEL_ID = "272592461997638";

// Prazo real da Black Friday — mesma data para todo mundo, sem reset por visita.
// Quando passar, o Countdown some sozinho. Para um novo ciclo, troque esta data.
export const BLACK_FRIDAY_FIM = "2026-11-27T23:59:59-03:00";

export const OFERTA = {
  de: "R$ 6.292,00",
  parcelas: "12x R$ 134,45",
  parcelaQtd: "12x",
  parcelaInteiro: "134",
  parcelaCentavos: "45",
  avista: "R$ 1.299,99",
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
  /** valor de venda avulsa (hoje só referência: soma dos 4 bate nos R$ 6.292 do combo) */
  valor: string;
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
    valor: "R$ 1.497,00",
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
    valor: "R$ 997,00",
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
    valor: "R$ 1.899,00",
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
    valor: "R$ 1.899,00",
    capa: "/fotos/capa-minha-carteira-rica.png",
  },
];

export const BONUS = [
  {
    icone: "Book",
    titulo: "Mais de 500 livros em Drive",
    texto: "Uma biblioteca com mais de 500 livros selecionados sobre mercado, investimentos e mentalidade, liberada assim que você entra no combo.",
  },
  {
    icone: "Users",
    titulo: "Grupo VIP para tirar dúvida",
    texto: "Acesso ao grupo fechado para tirar dúvida direto com quem também está estudando e operando com você.",
  },
  {
    icone: "BarChart",
    titulo: "Acesso à Crypto Rico",
    texto: "Plataforma de análise de carteira com IA e indicadores técnicos de compra — sozinha, custaria R$ 199 por mês. Aqui vem incluída.",
  },
  {
    icone: "Clock",
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
