---
titulo: Vídeo cinematográfico com o Claude
tarja1: Vídeo cinematográfico
tarja2: com o Claude
resumo: Os dois jeitos de fazer vídeo cinematográfico com o Claude, em pé e deitado: a frase que faz sentir e a história que faz entender. Prompts prontos para copiar, a skill e o PDF para baixar.
categoria: inteligencia-artificial
nivel: Intermediário
data: 2026-11-23
ordem: 2
---

Este é o passo a passo para fazer vídeo cinematográfico com o Claude, em pé e deitado. Acompanha a skill (zip) e o kit em PDF, que você baixa no Passo 10.

> **Importante:** este tutorial continua o [Edite vídeo com o Claude](/tutoriais/edite-video-com-o-claude). Se você ainda não usou a aba **Code** do Claude, comece por lá.

## Passo 1: Entenda os dois jeitos

Os dois são cinematográficos. Muda o que eles fazem com quem assiste.

### Frase: faz sentir

7 a 20 segundos. Uma frase só e mais de 40 cenas reais passando rápido. Não explica nada: a pessoa sente e quer salvar. O começo é escuro (a dor), o fim é claro (a vitória). Serve para marca, motivação e perfil pessoal.

### História: faz entender

45 a 90 segundos. Alguém vive um problema e o produto aparece como a forma de descobrir a resposta. Um objeto atravessa tudo: no exemplo, é uma linha de luz que nasce no tênis, vira rota, vira gráfico e vira o post. Serve para mostrar um app, um produto ou um serviço. (Números de exemplo.)

| Se você quer | Faça |
| --- | --- |
| que a pessoa sinta e salve | Frase |
| que a pessoa entenda e use | História |
| postar hoje, com o que já tem gravado | Frase |

## Passo 2: Instale tudo

Você faz uma vez só. O Claude instala por você.

- Baixe o app do Claude no computador (Mac ou Windows) e entre na sua conta. É o único pago.
- Abra a aba **Code**. É nela que o Claude mexe nos seus arquivos e gera o vídeo.
- Crie uma pasta chamada "Vídeos Cinematográficos" e escolha essa pasta na aba Code.
- Descompacte a skill (`skill-video-lancamento.zip`) em `~/.claude/skills/`. No Windows: `%USERPROFILE%\.claude\skills\`. Se não achar a pasta, cole o prompt abaixo.
- Abra uma conversa nova para a skill aparecer.

```
Estou começando do zero. Faça comigo, um passo por vez, explicando em português simples:
1. confira se eu tenho Node.js 18 ou mais novo e FFmpeg; se não, me diga o que vai instalar e espere meu OK;
2. coloque a pasta skill-video-lancamento, que está em [onde você salvou], na minha pasta de skills;
3. crie em [minha pasta] as pastas: cenas (o que eu gravei), musica, referencias, prontos;
4. rode o exemplo da skill em pé e deitado e me mostre os dois.
```

**Como conversar com ele**

- Um pedido por vez. Espere terminar.
- Diga o que gostou e o que não gostou com as suas palavras. Ele anota e não repete o erro.
- Peça ajuste no mesmo vídeo: "conserte este, não faça outro".
- Troque o que está entre [colchetes].

**Se quiser testar na mão**

```
cd skill-video-lancamento/template
npm install
npm run frase            (frase em pé)
npm run frase-deitado    (frase deitada)
npm run em-pe            (história em pé)
npm run deitado          (história deitada)
```

## Passo 3: Cinematográfico de frase

O mais rápido de fazer. Você precisa de uma frase e de cenas suas.

**1. A frase.** Curta, que você diria para você mesmo. Teste: um desconhecido postaria isso? "Acredite em você" não. "A dor do processo." sim.

**2. As cenas.** Separe 15 a 20 vídeos seus: treino, rua, trabalho, mão, rosto, detalhe, céu. Assista cada um inteiro e use só o pedaço bom. Nada de ajeitar câmera nem gente estranha ao fundo. Faltou? O Pexels é grátis.

**3. A ordem.** Primeiro a parte difícil (cansaço, escuro, sozinho), em azul-marinho. Depois a virada (força, luz, gente), em creme. Cada cena fica de 4 a 6 quadros: é menos de um quinto de segundo. Nunca repita.

**4. A capa.** O primeiro quadro é o que o Instagram mostra. Tem que ser a imagem mais forte, desfocada de propósito, sem texto. A frase aparece logo depois.

**5. O fim.** Sua marca por um segundo e pouco. Sem "siga", sem arroba.

```
Use a skill video-lancamento, jeito FRASE. Frase: "[sua frase]". Marca: "[sua marca]". Cenas em [pasta cenas]. Música: [arquivo].
1. assista todas as cenas inteiras e anote os segundos bons de cada uma; descarte câmera tremida e gente que não sou eu;
2. monte 44 cortes sem repetir, 5 quadros cada: os 60% primeiros são a dor (azul-marinho), o resto a vitória (creme);
3. negativo de 2 quadros a cada 7 cortes;
4. quadro 0: a imagem mais forte, desfocada, sem texto;
5. corte na batida, música sem parar no meio;
6. antes de gerar, me mostre uma folha com todos os cortes numerados. Eu digo quais tiro.
Faça em pé e deitado.
```

| Se ficou assim | Peça |
| --- | --- |
| parado | "mais cortes, cada cena com 4 quadros" |
| repetindo cena | "não repita nenhuma, me mostre a folha" |
| cor lavada | "negativo mais leve, contraste mais forte" |

## Passo 4: Cinematográfico com história

Para mostrar um app, produto ou serviço sem parecer propaganda.

**A conta que sempre funciona:** pergunta que a pessoa não sabe responder → alguém tentando → um toque no produto → a virada → o que só o produto mostra → a resposta → um dia ruim e a volta → a frase que fecha o começo.

**Exemplo que eu fiz, sobre corrida**

| Na tela | Texto |
| --- | --- |
| rua molhada, a linha de luz | O primeiro quilômetro mente. |
| tênis, celular, dedo | Ele manda você voltar. / Abra Treinos. Toque em Run. |
| play vira sinal verde | Vai mesmo assim. |
| pessoas correndo, cada uma diferente | 1 km. Quero parar. / 2 km. Ainda dá. / 3 km. |
| cidade 3D acende no caminho | Cada rua deixa uma marca. |
| o dedo acha o ponto mais rápido | O terceiro não mente. |
| a foto vira post no app | Poste a prova. |
| todas as corridas viram montanha | Corra até o terceiro. |

```
Use a skill video-lancamento, jeito HISTÓRIA. Produto: [produto]. O que mostrar: UMA coisa só, [função]. Telas reais em [pasta]. Cenas em [pasta].
1. me faça as perguntas que faltarem, de uma vez;
2. escreva a história em 8 a 10 cenas: o que se vê e o texto. Texto curto, com um detalhe real de quem vive isso; a última frase responde a primeira;
3. escolha UM objeto que atravesse tudo e vire cada cena;
4. depois do meu OK, faça 10 quadros parados numa folha numerada. Não anime ainda;
5. depois do meu "pode animar", anime com os efeitos da skill. Cada toque provoca a próxima cena; instrução fica no mínimo 1,3 segundo;
6. não invente tela, botão, número nem resultado. Número de exemplo fecha a conta.
Faça deitado e depois em pé, reposicionando, sem cortar.
Gente: alterne homem e mulher, sem repetir ninguém. Texto nunca em cima do rosto. Se a mesma pessoa aparece como se fosse cliente, avise que é ilustrativo.
```

> **Dica:** o "pode animar" é o seu freio. Você aprova o roteiro e os quadros parados antes de gastar tempo e crédito com animação.

## Passo 5: Estude a referência sem copiar

Da referência você leva a técnica. A ordem, as frases, as cores e a abertura são suas.

```
Estude este vídeo quadro a quadro: [arquivo]
1. folha com 4 quadros por segundo do vídeo inteiro e, em cada transição, 16 a 22 por segundo;
2. meça: quanto tempo fica quase parado, cortes por 10 segundos, onde a música entra;
3. para cada efeito: de onde sai, para onde vai, quantos quadros, o que muda em borrão, tamanho e opacidade;
4. escreva o que é PROIBIDO repetir;
5. me mostre só as técnicas e proponha outro objeto, outra história e outro visual.
```

## Passo 6: Os efeitos

Vêm prontos na skill. Tempo em quadros, a 30 por segundo.

| Efeito | O que é | Tempo |
| --- | --- | --- |
| Palavras do borrão | cada palavra nasce desfocada e firma | 4 entre elas, 12 cada |
| Mergulho na letra | a câmera entra no "O" e a cena está lá dentro | 34 a 38 |
| Negativo | a imagem inverte no corte | 2 |
| Borrão radial | a cena estoura do centro | 10 a 14 |
| Rastro | cópias atrasadas do movimento | 5 cópias |
| Dedo com anel | mostra onde tocar | chega 14, aperta 3 |
| Botão vira cena | o botão cresce até encher a tela | 20 |
| Linha de luz | o objeto que atravessa tudo | 40 a 60 |
| Número que rola | conta e assenta | 36 a 44 |
| Risco à mão | circula a resposta | 16 |
| Objeto que pousa | a foto encolhe e vira outra coisa | 22 |

Um efeito forte por cena. Nada nasce parado, nada some seco.

## Passo 7: Em pé e deitado

O mesmo vídeo, duas montagens. Nunca corte um para fazer o outro.

| | Em pé (9:16) | Deitado (16:9) |
| --- | --- | --- |
| Tamanho | 1080 x 1920 | 1920 x 1080 |
| Onde | Reels, TikTok, Shorts | YouTube, site, apresentação |
| Texto | em cima ou no meio | à esquerda |
| Deixe livre | 250 px em cima e 350 embaixo | rodapé, para legenda |
| Cenas | gravadas em pé | gravadas deitado |

```
Faça a versão [em pé / deitada] deste vídeo. Reposicione cada texto e objeto, não corte. Se alguma cena só existe no outro formato, me avise e sugira outra. Me mostre a folha de quadros antes de gerar.
```

## Passo 8: Som e conferência

- **Música:** escolha uma com licença. Corte na batida. Se ela para no meio, tem que ser o momento mais forte do vídeo; senão, deixe correr.
- **Efeito de som:** baixo, só no toque e no corte forte.
- **Volume:** -14 LUFS.

```
Ache as batidas da música [arquivo] e alinhe os cortes. Mix final em -14 LUFS. Antes de entregar, confira e me diga: tela preta no meio, primeiro quadro, cena repetida, texto em cima de rosto, instrução com menos de 1,3 segundo, número que não fecha. Exporte sem metadado e abaixo de 64 MB.
```

**A conferência que eu faço antes de postar**

- Assisto sem som: entendi?
- Pauso no primeiro quadro: eu clicaria?
- Olho as bordas: tem alguém, placa ou endereço que não devia aparecer?
- Ouço no celular: a música está alta demais?

## Passo 9: Ferramentas e licenças

O Claude é pago (assinatura). O resto abaixo é gratuito para começar; confira a licença de cada um.

| Ferramenta | Para quê | Licença |
| --- | --- | --- |
| Claude, aba Code | escreve, monta, confere | assinatura |
| Remotion · remotion.dev | vídeo feito em código, deitado e em pé | grátis para pessoa e empresa pequena |
| GSAP · gsap.com | tempo e suavidade do movimento | grátis |
| Three.js · threejs.org | cena 3D, luz, partículas | MIT |
| FFmpeg · ffmpeg.org | corte, cor, som, exportação | livre |
| Blender · blender.org | modelos 3D | livre |
| librosa · librosa.org | acha a batida da música | livre |
| Vision (do Mac) | acha a pessoa e as articulações | já vem no Mac |
| Pexels · pexels.com | takes de gente | uso livre, veja as regras |
| Pixabay · pixabay.com/music | música e efeitos | uso livre, veja as regras |

**Skills que estudei**

- **motionmaxxing** · github.com/Tejashmakwana/motionmaxxing: regras de movimento e motor (Apache 2.0)
- **motion-design-skill** · github.com/LottieFiles/motion-design-skill: tempo e easing (MIT)
- **reanimate** · github.com/NiazMorshed2007/reanimate: estudar animação quadro a quadro (MIT)
- **remotion skills** · github.com/remotion-dev/skills: o Claude aprende Remotion
- **gsap-skills** · github.com/greensock/gsap-skills: o Claude aprende GSAP (MIT)
- **mg-styles-15** · github.com/Vincentwei1021/mg-styles-15: 15 estilos com prompt (MIT)
- **huashu-motion** · github.com/alchaincyf/huashu-motion: filmes de lançamento (MIT)

> **Atenção:** há outras skills muito boas com licença que não permite uso comercial. Leia o arquivo LICENSE antes de usar em vídeo da sua empresa.

## Passo 10: A skill pronta e o kit em PDF

A skill **video-lancamento** traz o passo a passo, os efeitos em Remotion, um exemplo que já renderiza em pé e deitado e o script de conferência. O PDF é este tutorial no formato de kit, para guardar ou mandar para alguém. O exemplo é genérico: não traz marca, tela, take nem música de ninguém. Use os seus.

<a class="t-download" href="/downloads/skill-video-lancamento.zip" download>Baixar a skill (zip) <small>17 KB</small></a>
<a class="t-download" href="/downloads/kit-video-cinematografico.pdf" download>Baixar o kit (PDF) <small>1,8 MB</small></a>

**Por dentro da skill:** os três arquivos principais do exemplo. Abra, leia e copie se quiser. O Claude usa esses mesmos arquivos quando você pede o vídeo.

<details class="t-codigo">
<summary><b>efeitos.tsx</b> · os efeitos prontos (palavras do borrão, mergulho, negativo, rastro, dedo com anel, linha de luz, número que rola...)</summary>

```tsx
// Os 10 efeitos. Cada um é função pura do quadro: sempre o mesmo resultado, sem sorteio e sem relógio.
import React from 'react';
import { AbsoluteFill, Easing, Freeze, continueRender, delayRender, interpolate, useCurrentFrame, useCurrentScale } from 'remotion';

const lim = { extrapolateLeft: 'clamp', extrapolateRight: 'clamp' } as const;
/** entra rápido e freia (chegada) */ export const freia = Easing.bezier(0.16, 1, 0.3, 1);
/** acelera pra sair */ export const acelera = Easing.bezier(0.7, 0, 0.84, 0);
export const vai = (q: number, a: number, b: number, e = freia) => interpolate(q, [a, b], [0, 1], { ...lim, easing: e });

/** 1. PALAVRAS QUE SAEM DO BORRÃO: uma a uma, da esquerda pra direita */
export const Palavras: React.FC<{ texto: string; em: number; ate?: number; passo?: number; style?: React.CSSProperties }> = ({ texto, em, ate = 99999, passo = 4, style }) => {
  const q = useCurrentFrame(); const s = vai(q, ate, ate + 8, acelera);
  return <div style={{ fontWeight: 740, letterSpacing: '-0.04em', lineHeight: 1, ...style, opacity: 1 - s, transform: `translateY(${-60 * s}px)`, filter: `blur(${12 * s}px)` }}>
    {texto.split(' ').map((p, i) => { const t = vai(q, em + i * passo, em + i * passo + 12); return <span key={i} style={{ display: 'inline-block', marginRight: '0.24em', opacity: t, filter: `blur(${16 * (1 - t)}px)`, transform: `translateX(${26 * (1 - t)}px)` }}>{p}</span>; })}
  </div>;
};

/** 2. MERGULHO NA LETRA: a câmera entra no miolo da letra marcada com [O] e a próxima cena já está lá dentro.
 *  Escreva o texto com a letra entre colchetes: "[O] quanto você andou hoje?". O miolo é medido sozinho. Use O, Q, D, o, d, b, p ou q. */
export const Mergulho: React.FC<{ em: number; dura?: number; texto: string; W: number; H: number; estilo: React.CSSProperties; fundo: React.ReactNode; dentro: React.ReactNode }> = ({ em, dura = 34, texto, W, H, estilo, fundo, dentro }) => {
  const q = useCurrentFrame(), escala = useCurrentScale(), ref = React.useRef<HTMLSpanElement>(null), base = React.useRef<HTMLDivElement>(null);
  const [m, setM] = React.useState<null | { x: number; y: number; rx: number; ry: number }>(null); const [espera] = React.useState(() => delayRender('medindo a letra'));
  React.useLayoutEffect(() => { const a = ref.current, b = base.current; if (a && b) { const r = a.getBoundingClientRect(), o = b.getBoundingClientRect(); const w = r.width / escala, h = r.height / escala; setM({ x: (r.left - o.left) / escala + w * 0.49, y: (r.top - o.top) / escala + h * 0.5, rx: w * 0.3, ry: h * 0.215 }); } continueRender(espera); }, []); // eslint-disable-line
  const [a, l, d] = texto.split(/\[(.)\]/); const on = q >= em && m; const t = on ? vai(q, em, em + dura, Easing.bezier(0.8, 0, 0.6, 1)) : 0;
  const alvo = m ? (Math.hypot(W, H) / Math.min(m.rx, m.ry)) * 0.62 : 1, k = Math.pow(alvo, t), px = m ? m.x + (W / 2 - m.x) * t : 0, py = m ? m.y + (H / 2 - m.y) * t : 0;
  return <AbsoluteFill>{fundo}<div ref={base} style={{ position: 'absolute', left: 0, top: 0, width: W, height: H, display: 'flex', alignItems: 'center', justifyContent: 'center', transformOrigin: m ? `${m.x}px ${m.y}px` : undefined, transform: on ? `translate(${px - m!.x}px, ${py - m!.y}px) scale(${k})` : undefined }}><div style={estilo}>{a}<span ref={ref}>{l}</span>{d}</div></div>
    {on && <AbsoluteFill style={{ clipPath: `ellipse(${m!.rx * k}px ${m!.ry * k}px at ${px}px ${py}px)` }}>{dentro}</AbsoluteFill>}</AbsoluteFill>;
};

/** 3. NEGATIVO: 2 quadros de imagem invertida bem no corte. Nunca mais que 2. */
export const Negativo: React.FC<{ nos: number[]; children: React.ReactNode }> = ({ nos, children }) => { const q = useCurrentFrame(); const on = nos.some((n) => q >= n && q < n + 2); return <AbsoluteFill style={{ filter: on ? 'invert(1)' : 'none' }}>{children}</AbsoluteFill>; };

/** 4. BORRÃO RADIAL: a cena estoura do centro por poucos quadros */
export const Radial: React.FC<{ em: number; dura?: number; forca?: number; children: React.ReactNode }> = ({ em, dura = 12, forca = 0.5, children }) => {
  const q = useCurrentFrame(); if (q < em || q > em + dura) return <AbsoluteFill>{children}</AbsoluteFill>; const a = forca * (1 - vai(q, em, em + dura)); const N = 9;
  return <AbsoluteFill>{Array.from({ length: N }, (_, i) => <AbsoluteFill key={i} style={{ transform: `scale(${1 + (a * i) / N})`, opacity: 1 / (i + 1) }}>{children}</AbsoluteFill>)}</AbsoluteFill>;
};

/** 5. RASTRO: cópias atrasadas do movimento, como obturador aberto */
export const Rastro: React.FC<{ copias?: number; atraso?: number; children: React.ReactNode }> = ({ copias = 5, atraso = 2, children }) => { const q = useCurrentFrame();
  return <AbsoluteFill>{Array.from({ length: copias }, (_, i) => copias - 1 - i).map((i) => <AbsoluteFill key={i} style={{ opacity: i === 0 ? 1 : 0.32 * (1 - i / copias) }}><Freeze frame={Math.max(0, q - i * atraso)}>{children}</Freeze></AbsoluteFill>)}</AbsoluteFill>; };

/** 6. DEDO QUE TOCA: chega, aperta, solta um anel */
export const Dedo: React.FC<{ em: number; x: number; y: number; chega?: number }> = ({ em, x, y, chega = 14 }) => { const q = useCurrentFrame(); if (q < em - chega - 4 || q > em + 20) return null;
  const t = vai(q, em - chega, em - 3), ap = q < em ? vai(q, em - 3, em) : 1 - vai(q, em, em + 6), an = vai(q, em, em + 16), out = vai(q, em + 8, em + 18);
  return <AbsoluteFill><div style={{ position: 'absolute', left: x - 55, top: y - 55, width: 110, height: 110, borderRadius: 60, border: '4px solid #fff', opacity: 1 - an, transform: `scale(${0.6 + 1.5 * an})`, display: q < em ? 'none' : 'block' }} />
    <div style={{ position: 'absolute', left: x - 48, top: y - 48, width: 96, height: 96, borderRadius: 60, background: 'rgba(255,255,255,.35)', border: '3px solid rgba(255,255,255,.75)', opacity: t * (1 - out), transform: `translate(${(1 - t) * 170}px, ${(1 - t) * 130}px) scale(${1.25 - 0.25 * t - 0.24 * ap})` }} /></AbsoluteFill>; };

/** 7. BOTÃO QUE VIRA A PRÓXIMA CENA: o próprio botão cresce até encher a tela */
export const BotaoVira: React.FC<{ em: number; x: number; y: number; w: number; h: number; W: number; H: number; cor: string; rotulo: string; estado?: string; aperta?: number; dentro?: React.ReactNode }> = ({ em, x, y, w, h, W, H, cor, rotulo, estado, aperta = 24, dentro }) => {
  const q = useCurrentFrame(); const t = vai(q, em, em + 20, Easing.bezier(0.7, 0, 0.2, 1)); const p = q >= em - aperta && q < em - aperta + 8 ? Math.sin(((q - em + aperta) / 8) * Math.PI) * 0.06 : 0; const m = (a: number, b: number) => a + (b - a) * t;
  const troca = estado ? vai(q, em - aperta + 2, em - aperta + 8) : 0;
  return <div style={{ position: 'absolute', left: m(x, 0), top: m(y, 0), width: m(w, W), height: m(h, H), borderRadius: m(h / 2, 0), background: cor, overflow: 'hidden', transform: `scale(${1 - p})`, display: 'grid', placeItems: 'center' }}>
    <span style={{ gridArea: '1/1', color: '#fff', fontSize: h * 0.36, fontWeight: 680, opacity: (1 - troca) * (1 - vai(q, em - 4, em + 2)) }}>{rotulo}</span>{estado && <span style={{ gridArea: '1/1', color: '#fff', fontSize: h * 0.36, fontWeight: 680, opacity: troca * (1 - vai(q, em - 4, em + 2)) }}>{estado}</span>}
    {dentro && <div style={{ position: 'absolute', inset: 0, opacity: vai(q, em + 10, em + 20), filter: `blur(${20 * (1 - vai(q, em + 10, em + 24))}px)` }}>{dentro}</div>}</div>;
};

/** 8. LINHA DE LUZ que se desenha (um objeto que atravessa o vídeo inteiro) */
export const LinhaLuz: React.FC<{ d: string; em: number; dura?: number; cor?: string; grossura?: number; W: number; H: number }> = ({ d, em, dura = 40, cor = 'url(#lz)', grossura = 12, W, H }) => { const q = useCurrentFrame(); const t = vai(q, em, em + dura, Easing.bezier(0.5, 0, 0.2, 1)); if (q < em) return null;
  const P = (w: number, o: number, b: number, c = cor) => <path d={d} fill="none" stroke={c} strokeWidth={w} strokeLinecap="round" strokeLinejoin="round" pathLength={1} strokeDasharray={`${t} 1`} opacity={o} style={{ filter: b ? `blur(${b}px)` : undefined }} />;
  return <svg width={W} height={H} style={{ position: 'absolute', inset: 0, overflow: 'visible' }}><defs><linearGradient id="lz" gradientUnits="userSpaceOnUse" x1="0" y1="0" x2={W} y2="0"><stop offset="0" stopColor="#ff4034" /><stop offset=".5" stopColor="#ffb02e" /><stop offset="1" stopColor="#3ddc6c" /></linearGradient></defs>{P(grossura * 3, 0.5, 34)}{P(grossura * 1.8, 0.7, 12)}{P(grossura, 1, 0)}{P(grossura * 0.28, 0.75, 1, '#fff')}</svg>; };

/** 9. NÚMERO QUE ROLA e assenta */
export const Numero: React.FC<{ de: number; ate: number; em: number; dura?: number; style?: React.CSSProperties; casas?: number }> = ({ de, ate, em, dura = 36, style, casas = 0 }) => { const q = useCurrentFrame(); const t = vai(q, em, em + dura), v = de + (ate - de) * t, vel = vai(q, em, em + dura) < 1 && q > em ? 1 - t : 0;
  return <span style={{ fontVariantNumeric: 'tabular-nums', fontWeight: 760, letterSpacing: '-0.05em', display: 'inline-block', filter: `blur(${vel * 7}px)`, transform: `scale(${1 + 0.06 * Math.sin(Math.min(1, Math.max(0, (q - em - dura + 4) / 10)) * Math.PI)})`, ...style }}>{v.toLocaleString('pt-BR', { minimumFractionDigits: casas, maximumFractionDigits: casas })}</span>; };

/** 10. RISCO À MÃO em volta do resultado */
export const Risco: React.FC<{ em: number; x: number; y: number; rx: number; ry: number; cor?: string }> = ({ em, x, y, rx, ry, cor = '#fff' }) => { const q = useCurrentFrame(); const t = vai(q, em, em + 16, Easing.bezier(0.5, 0, 0.3, 1)); if (q < em) return null;
  const d = Array.from({ length: 46 }, (_, i) => { const a = -2.3 + (i / 45) * 6.75, k = 1 + 0.035 * Math.sin(i * 0.9) + i * 0.0016; return `${i ? 'L' : 'M'} ${x + Math.cos(a) * rx * k} ${y + Math.sin(a) * ry * k}`; }).join(' ');
  return <svg width="100%" height="100%" style={{ position: 'absolute', inset: 0, overflow: 'visible' }}><path d={d} fill="none" stroke={cor} strokeWidth={7} strokeLinecap="round" strokeLinejoin="round" pathLength={1} strokeDasharray={`${t} 1`} /></svg>; };

/** Objeto que ENCOLHE E POUSA dentro do próximo (ex.: a foto vira o check da lista) */
export const Pousa: React.FC<{ em: number; dura?: number; de: [number, number, number]; para: [number, number, number]; children: React.ReactNode }> = ({ em, dura = 22, de, para, children }) => { const q = useCurrentFrame(); const t = vai(q, em, em + dura, Easing.bezier(0.6, 0, 0.2, 1)); const k = (i: number) => de[i] + (para[i] - de[i]) * t;
  return <div style={{ position: 'absolute', left: k(0), top: k(1), transform: `translate(-50%,-50%) scale(${k(2)})`, opacity: t > 0.99 ? 0 : 1 }}>{children}</div>; };
```

</details>

<details class="t-codigo">
<summary><b>Frase.tsx</b> · o jeito Frase: 44 cortes rápidos, duas cores, frase parada e marca no fim</summary>

```tsx
// CINEMATOGRÁFICO DE FRASE: muitos cortes rápidos + uma frase parada + marca no fim. Funciona em pé e deitado.
// 1) ponha as SUAS cenas em public/cenas/ (001.jpg, 002.jpg... ou .mp4) e troque a lista CENAS. 2) troque FRASE e MARCA.
import React from 'react';
import { AbsoluteFill, Img, OffthreadVideo, Sequence, staticFile, useCurrentFrame } from 'remotion';
import { useFormato } from './formato';
import { freia, vai } from './efeitos';
export const FRASE = ['SUA', 'FRASE', 'AQUI.'];              // uma palavra (ou duas) por vez
export const MARCA = 'SUA MARCA';
export const CENAS: string[] = [];                             // ex.: ['cenas/001.jpg', 'cenas/002.mp4#3.5'] (#3.5 = começa em 3,5 s; vazio = cenas de exemplo desenhadas)
const CAPA = 10;                                               // quadros iniciais: imagem forte, desfocada, SEM texto (é a capa do post)
const CORTE = 5;                                               // quadros por cena (4 a 6 = rápido)
const TOTAL_CENAS = 44, FIM = 46; export const DURACAO_FRASE = CAPA + TOTAL_CENAS * CORTE + FIM;
const NAVY = '#0d1b36', CREME = '#efe6d2';
const sorte = (n: number) => { const x = Math.sin(n * 127.1) * 43758.5453; return x - Math.floor(x); };
const Exemplo: React.FC<{ n: number; q: number }> = ({ n, q }) => { const a = sorte(n), b = sorte(n + 50), c = sorte(n + 90); return <AbsoluteFill style={{ background: `linear-gradient(${a * 180}deg, #555, #111)` }}><div style={{ position: 'absolute', left: `${10 + a * 50}%`, top: `${15 + b * 40}%`, width: '46%', height: '46%', borderRadius: c > 0.5 ? '50%' : '8%', background: 'radial-gradient(circle at 35% 30%, #fff, #777 60%, #222)', transform: `translate(${(q % CORTE) * (b > 0.5 ? 7 : -7)}px, 0) rotate(${c * 90}deg)` }} /><div style={{ position: 'absolute', left: 0, right: 0, bottom: `${c * 30}%`, height: '12%', background: '#000', transform: `skewY(${(a - 0.5) * 30}deg)` }} /></AbsoluteFill>; };
const Cena: React.FC<{ n: number; q: number }> = ({ n, q }) => { if (!CENAS.length) return <Exemplo n={n} q={q} />; const s = CENAS[n % CENAS.length]; const st: React.CSSProperties = { width: '100%', height: '100%', objectFit: 'cover' }; const [arq, ini] = s.split('#'); const de = q < CAPA ? 0 : CAPA + n * CORTE; return /\.(mp4|mov|webm)$/i.test(arq) ? <Sequence key={de} from={de} layout="none"><OffthreadVideo src={staticFile(arq)} startFrom={Math.round((Number(ini) || 0) * 30)} muted style={st} /></Sequence> : <Img src={staticFile(arq)} style={st} />; };
/** duas cores chapadas: sombra = NAVY ou preto, luz = CREME. dor = escuro, vitória = claro */
const Duas: React.FC<{ claro: boolean; children: React.ReactNode }> = ({ claro, children }) => <AbsoluteFill><AbsoluteFill style={{ filter: 'grayscale(1) contrast(1.55)' }}>{children}</AbsoluteFill><AbsoluteFill style={{ background: claro ? CREME : '#7f9bd1', mixBlendMode: 'multiply' }} /><AbsoluteFill style={{ background: NAVY, mixBlendMode: claro ? 'screen' : 'lighten', opacity: claro ? 0.55 : 1 }} /></AbsoluteFill>;
export const Frase: React.FC = () => {
  const q = useCurrentFrame(), { f } = useFormato(); const k = Math.floor((q - CAPA) / CORTE), noFim = k >= TOTAL_CENAS, capa = q < CAPA; const n = capa ? 3 : Math.max(0, k); const claro = k >= TOTAL_CENAS * 0.6; const dentro = (q - CAPA) % CORTE;
  const negativo = !capa && !noFim && k % 7 === 3 && dentro < 2; const zoom = 1.06 + (capa ? q * 0.004 : dentro * 0.012); const ini = CAPA + 24, passo = Math.floor((TOTAL_CENAS * CORTE - 40) / (FRASE.length + 1)); const quantas = Math.min(FRASE.length, Math.floor((q - ini) / passo) + 1);
  if (noFim) { const t = vai(q, CAPA + TOTAL_CENAS * CORTE, CAPA + TOTAL_CENAS * CORTE + 14, freia); return <AbsoluteFill style={{ background: '#000', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#fff', fontFamily: 'Inter, system-ui, sans-serif' }}><div style={{ fontSize: f(130, 108), fontWeight: 800, letterSpacing: '-0.03em', transform: `scale(${1.8 - 0.8 * t})`, opacity: t, filter: `blur(${18 * (1 - t)}px)` }}>{MARCA}</div></AbsoluteFill>; }
  return <AbsoluteFill style={{ background: '#000', overflow: 'hidden', filter: negativo ? 'invert(1)' : undefined }}><AbsoluteFill style={{ transform: `scale(${zoom + (capa ? 0.1 : 0)})`, filter: capa ? `blur(${18 - q}px)` : undefined }}><Duas claro={claro}><Cena n={n} q={q} /></Duas></AbsoluteFill><AbsoluteFill style={{ background: 'radial-gradient(ellipse at center, rgba(0,0,0,0) 40%, rgba(0,0,0,.55))' }} />
    {!capa && q >= ini && <AbsoluteFill style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#fff', fontFamily: 'Inter, system-ui, sans-serif', fontWeight: 760, letterSpacing: '0.02em', fontSize: f(64, 54), textAlign: 'center', textShadow: '0 2px 30px rgba(0,0,0,.8)' }}><span>{FRASE.slice(0, Math.max(1, quantas)).join(' ')}</span></AbsoluteFill>}</AbsoluteFill>;
};
```

</details>

<details class="t-codigo">
<summary><b>Video.tsx</b> · o jeito História: as cenas de uma função, do toque ao resultado</summary>

```tsx
// EXEMPLO de uma função só ("Passos"), do começo ao fim: pergunta > toque > o app faz > resultado > resposta.
// Troque textos, cores, cenas e números. Tudo aqui é ilustrativo.
import React from 'react';
import { AbsoluteFill, Sequence, useCurrentFrame } from 'remotion';
import { useFormato } from './formato';
import { BotaoVira, Dedo, LinhaLuz, Mergulho, Negativo, Numero, Palavras, Radial, Rastro, Risco, freia, vai } from './efeitos';
export const DURACAO = 390;
const FONTE = 'Inter, "SF Pro Display", system-ui, sans-serif';
const Chao: React.FC<{ a: string; b: string }> = ({ a, b }) => <AbsoluteFill style={{ background: `radial-gradient(ellipse 80% 70% at 50% 45%, ${a}, ${b} 75%)` }} />;
const Pes: React.FC = () => { const q = useCurrentFrame(), { W, H } = useFormato(); const s = Math.sin(q * 0.32); // no seu vídeo, ponha aqui um take de verdade: <OffthreadVideo src={staticFile('corre.mp4')} />
  return <AbsoluteFill>{[s, -s].map((v, i) => <div key={i} style={{ position: 'absolute', left: W / 2 + v * W * 0.16 - 70, top: H * 0.66 - Math.max(0, -v) * 120, width: 190, height: 74, borderRadius: '60px 90px 24px 24px', background: i ? '#e8e8ee' : '#fff' }} />)}</AbsoluteFill>; };

export const Video: React.FC = () => {
  const q = useCurrentFrame(), { W, H, f, cx } = useFormato();
  const t1 = f(150, 118);
  const bw = f(760, 820), bh = 150, bx = cx - bw / 2, by = f(H * 0.66, H * 0.70);
  const linha = f(`M -40 ${H * 0.82} C ${W * 0.2} ${H * 0.6}, ${W * 0.32} ${H * 0.95}, ${W * 0.5} ${H * 0.66} S ${W * 0.8} ${H * 0.3}, ${W + 40} ${H * 0.36}`, `M -40 ${H * 0.86} C ${W * 0.3} ${H * 0.7}, ${W * 0.2} ${H * 0.62}, ${W * 0.55} ${H * 0.6} S ${W * 0.7} ${H * 0.42}, ${W + 40} ${H * 0.4}`);
  const cena2 = <AbsoluteFill><Chao a="#0f3a2a" b="#04110c" /><Rastro copias={5} atraso={2}><Pes /></Rastro></AbsoluteFill>;
  return (
    <AbsoluteFill style={{ background: '#000', color: '#fff', fontFamily: FONTE, overflow: 'hidden' }}>
      <Negativo nos={[86, 228]}>
        {q < 228 && <Radial em={88} dura={12} forca={0.35}><Mergulho em={48} dura={38} texto="[O] quanto você andou hoje?" W={W} H={H} fundo={<Chao a="#17203a" b="#05060a" />} estilo={{ fontSize: t1, fontWeight: 760, letterSpacing: '-0.045em', color: '#fff', textAlign: 'center', lineHeight: 1.02, width: f(1300, 940) }} dentro={cena2} /></Radial>}
        {q >= 94 && q < 228 && <div style={{ position: 'absolute', left: f(110, 60), top: f(90, 190), fontSize: f(110, 104) }}><Palavras texto="Abra Passos." em={96} ate={150} /></div>}
        {q >= 120 && q < 228 && <div style={{ opacity: vai(q, 120, 130), transform: `translateY(${(1 - vai(q, 120, 134)) * 80}px)` }}><BotaoVira em={196} aperta={34} x={bx} y={by} w={bw} h={bh} W={W} H={H} cor="#16a34a" rotulo="Começar" estado="Contando…" /></div>}
        <Dedo em={162} x={cx + 120} y={by + bh / 2} />
        {q >= 214 && q < 228 && <AbsoluteFill style={{ background: '#16a34a' }} />}
        {q >= 228 && <AbsoluteFill><Chao a="#151a2c" b="#04050a" /><Sequence from={228} layout="none"><LinhaLuz d={linha} em={2} dura={56} W={W} H={H} /></Sequence>
          <div style={{ position: 'absolute', left: f(110, 60), top: f(90, 190), fontSize: f(84, 84) }}><Palavras texto="Olha o seu dia." em={256} ate={352} /></div>
          <div style={{ position: 'absolute', left: f(110, 60), top: f(230, 330), fontSize: f(300, 250), opacity: 1 - vai(q, 352, 362) }}><Numero de={0} ate={8412} em={262} dura={44} /></div>
          <div style={{ position: 'absolute', left: f(124, 70), top: f(540, 600), fontSize: f(60, 60), color: '#b9bfd0', opacity: vai(q, 300, 310) * (1 - vai(q, 352, 362)) }}>passos (número de exemplo)</div>
          {q < 356 && <Risco em={312} x={f(500, 430)} y={f(390, 470)} rx={f(440, 400)} ry={f(180, 165)} cor="#3ddc6c" />}</AbsoluteFill>}
        {q >= 360 && <AbsoluteFill style={{ background: '#05060a', display: 'grid', placeItems: 'center' }}><div style={{ fontSize: f(120, 110), fontWeight: 800, letterSpacing: '-0.04em', transform: `scale(${1.6 - 0.6 * vai(q, 360, 374, freia)})`, opacity: vai(q, 360, 366) }}>SUA MARCA</div></AbsoluteFill>}
      </Negativo>
    </AbsoluteFill>
  );
};
```

</details>

## Se der errado

| O que aconteceu | O que escrever |
| --- | --- |
| Ficou igual à referência | Troque o objeto, a história e o visual. Só a técnica fica. |
| Parece propaganda | Tire efeito e ponha gente fazendo a coisa. |
| Não dá para ler | Uma informação por vez, 1,3 segundo no mínimo. |
| Inventou tela ou botão | Use só o que está nos meus prints. |
| Fonte feia | Me mostre a mesma frase em 6 fontes, lado a lado. |
| Boneco com cara de jogo | Troque por gente de verdade. |
| Efeito saindo da pessoa (no Mac) | Use o Vision da Apple para achar a pessoa em cada quadro e ponha a luz atrás dela. |
| Mudou o que eu gostava | Volte. Só acrescente, não troque o que já estava aprovado. |
| Demorou ou travou | Faça um quadro de teste primeiro e me diga quanto falta. |

**Direitos**

- Use cena, música e fonte com licença. Anote de onde veio.
- Não recrie o vídeo, o logo ou a frase de outra marca.
- Gente de banco de imagem não é seu cliente: não invente depoimento.

---

## O combinado que faz cada vídeo sair melhor

Cole uma vez no seu projeto. A partir daí, o Claude aprende o seu gosto a cada vídeo.

```
Combinado: quando eu aprovar um vídeo, anote no GUIA.md, em "Aprovado", o que ele tem de bom e onde está o código. Quando eu reclamar, anote em "Reprovado" com a minha frase exata. Ajuste é no MESMO vídeo, versão nova; não crie outro sem eu pedir. Saiu versão nova, a velha vai para a Lixeira. Nenhum vídeo repete o visual do anterior. Nunca entregue abaixo do último aprovado. Uma coisa por vez na conversa.
```
