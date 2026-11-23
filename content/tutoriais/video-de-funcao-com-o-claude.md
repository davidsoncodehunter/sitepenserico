---
titulo: Vídeo de função com o Claude
tarja1: Vídeo de função
tarja2: com o Claude
resumo: Os modelos, as ferramentas e os prompts para criar vídeo de lançamento e de função com o Claude, deitado e em pé, prontos para copiar e colar.
categoria: inteligencia-artificial
nivel: Intermediário
data: 2026-11-23
ordem: 2
---

Este é o passo a passo para criar vídeos de função e de lançamento com o Claude: os modelos que eu faço, as ferramentas, os prompts prontos e uma skill que gera o vídeo deitado e em pé.

> **Importante:** este tutorial continua o [Edite vídeo com o Claude](/tutoriais/edite-video-com-o-claude). Se você ainda não montou a pasta "Editor de Vídeo" e o GUIA.md, comece por lá.

## Antes de começar

- O app do Claude no computador, na aba **Code**
- Cole **um prompt por vez** e espere ele terminar antes do próximo
- Troque o que está entre [colchetes] pelos seus dados
- Escolher o modelo errado é o que faz o vídeo parecer propaganda: comece pelo Passo 1

## Passo 1: Escolha o modelo

Cada modelo tem uma função. O primeiro passo é saber qual deles combina com o que você quer.

### Cinematográfico de frase

7 a 20 segundos, em pé. Uma frase, 40 ou mais cortes rápidos de cena real, negativo de 2 quadros e duas cores chapadas. Serve para marca e emoção, não explica nada. O primeiro quadro é uma imagem forte, sem texto: é a capa.

### Função, mundo de luz

25 a 35 segundos, em pé, sem voz. Uma nuvem de pontos vira cada cena: foto, cidade, retrato, medalha. Feito em Three.js. Ideal para função que não tem objeto físico, como comunidade.

### Função com objeto real

30 segundos. Recorto a coisa de verdade (a comida do vídeo), dou volume e faço sair do lugar. O app entra como a ferramenta: foto, leitura, números.

### Função no corpo real

26 segundos. A máquina acha a pessoa e as articulações em cada quadro, e o efeito gruda nela. O 3D de anatomia só entra onde a câmera não chega.

> **Nota:** anatomia 3D do exemplo: BodyParts3D, © The Database Center for Life Science, CC BY 4.0. As pessoas vêm de bancos de vídeo.

### Lançamento detalhado (o mais novo)

45 a 55 segundos, deitado (YouTube e marketing) e em pé (Reels). Uma função do começo ao fim, com a história de uma pessoa: pergunta, toque, o app faz, resultado, dia ruim, volta, resposta. Um objeto atravessa o vídeo inteiro. No exemplo da corrida, esse objeto é uma linha: ela é o cadarço, a faixa da rua, a rota, o gráfico e a montanha de corridas.

### Os outros que uso

- **Vídeo que eu gravo (Remotion):** corto os erros, legenda palavra por palavra e animação que nasce na fala. Está no tutorial anterior.
- **Narrado que ensina (Remotion):** primeiro o ensinamento, o app entra no meio.
- **Boneco 2D (Remotion):** um roteiro vira cenas prontas, bom para volume.
- **Treino pronto:** exercício, séries e descanso. A pessoa salva e faz.

### Qual usar?

| Você quer | Modelo |
| --- | --- |
| que lembrem da marca | cinematográfico de frase |
| que entendam uma função em 30 s | função em pé |
| lançar a função e guardar no YouTube | lançamento detalhado |
| que salvem e voltem | narrado que ensina ou treino |
| conversar com quem te segue | vídeo que você grava |

## Passo 2: A receita de cada modelo

Escolha um e cole o prompt. Troque o que está entre [colchetes].

**Cinematográfico de frase**

```
Faça um vídeo em pé de 12 s com a frase "[frase]". 40 ou mais cortes diferentes de [pasta de cenas], 4 a 6 quadros cada, sem repetir cena e sem outra pessoa no quadro. Cena da dor em azul-marinho, da vitória em creme, negativo de 2 quadros a cada 7 cortes. Frase parada no centro, palavra por palavra. Primeiro quadro: imagem forte, desfocada, sem texto. Corte na batida da música [arquivo] e feche com o meu logo.
```

**Função, mundo de luz**

```
Faça um vídeo em pé de 35 s da função [função] em Three.js: uma única nuvem de 60 mil pontos muda de forma em cada cena ([foto] vira [cidade], que vira [objeto]...). Cada forma nasce da anterior, sem corte seco. Retratos e 3D ficam fora do brilho. Sem cartões. Posição de cada ponto é função do tempo.
```

**Função com objeto real**

```
Do take [vídeo] (câmera parada), recorte cada pedaço de [objeto], crie um mapa de altura pela distância da borda para dar volume e preencha o fundo. Os pedaços saem, mostram o que a função [função] calcula, um por vez, com nome e número que fecham a conta, e voltam para o lugar.
```

**Função no corpo real**

```
Em [takes de gente treinando], ache a pessoa e as articulações em cada quadro e acenda só [músculo], acompanhando o movimento, com o fundo escurecendo. Depois mostre a tela [print] e o resultado de cada grupo, um por vez.
```

**Lançamento detalhado**

```
Use a skill video-lancamento: uma função só ([função]), 45 a 55 s, deitado e em pé, um objeto ([linha, anel, gota...]) atravessando tudo. Roteiro, depois 10 quadros parados, depois animação.
```

## Passo 3: Ferramentas e skills

O Claude é pago (assinatura). O resto abaixo é gratuito para começar, mas confira a licença de cada um.

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

```
Instale e teste no meu computador: Node.js, Remotion e FFmpeg. Depois leia a licença destas skills e instale só as que permitem uso comercial: [cole os links]. Antes de rodar qualquer script baixado, me mostre o que ele faz. No fim, rode um teste de cada um e me diga o que funcionou.
```

## Passo 4: Estude a referência sem copiar

Da referência vem a técnica. Nunca a ordem, a abertura, a frase ou o visual. Meu primeiro teste ficou igual demais e eu joguei fora.

```
Estude este vídeo quadro a quadro: [arquivo]
1. folha com 4 quadros por segundo do vídeo inteiro e, em cada transição, 16 a 22 por segundo;
2. meça: quanto tempo fica quase parado, cortes por 10 segundos, volume, onde a música entra;
3. para cada efeito: de onde sai, para onde vai, quantos quadros, o que muda em borrão, tamanho e opacidade;
4. escreva a lista do que é PROIBIDO repetir: ordem, abertura, frases, cores, nomes, layout;
5. me mostre só as técnicas. Depois proponha outro objeto, outra história e outro mundo visual.
```

**O que aprendi medindo**

- O bom lançamento fica perto de 40% do tempo quase parado. Os meus primeiros ficavam em 10%. Faltava respiro, não efeito.
- A tela é a estrela: uma coisa por vez, grande.
- Cada toque causa a próxima cena.
- Tem uma pessoa, com queda e volta.

## Passo 5: Roteiro e quadros parados

O passo que economiza crédito: aprove parado, anime depois.

```
Escreva um vídeo de 45 segundos sobre UMA função: [função]. Quem assiste sem som tem que entender.
Cenas: pergunta que a pessoa não sabe responder; abrir o app; tocar; a virada; a ação com gente de verdade; o que só o app mostra; resultado com número e nome; o detalhe que responde a pergunta; um dia ruim e a volta; a resposta.
Escolha UM objeto que atravesse o vídeo e vire cada cena. Instrução curta no imperativo, no mínimo 1,3 s na tela.
Use só telas reais: [prints]. Não invente botão, número nem resultado.
Depois que eu aprovar o texto, faça 10 quadros parados no motor de verdade e me mostre numa folha numerada. Só anime quando eu disser "pode animar".
```

> **Dica:** o "pode animar" é o seu freio. Você aprova o roteiro e os quadros parados antes de gastar tempo e crédito com animação.

## Passo 6: Os efeitos

Todos vêm prontos na skill, com os tempos.

| Efeito | Quando | Tempo (30 q/s) |
| --- | --- | --- |
| Palavras que saem do borrão | instrução e fecho | 4 entre palavras, 12 cada |
| Mergulho na letra | da pergunta para a 1ª cena | 34 a 38 |
| Negativo | corte forte | 2, até 3 vezes no vídeo |
| Borrão radial | virada da música | 10 a 14 |
| Rastro de movimento | gente em ação | 5 cópias, atraso 2 |
| Dedo com anel | todo toque no app | chega 14, aperta 3 |
| Botão que vira a cena | depois do toque | cresce em 20 |
| Linha de luz | objeto que atravessa | 40 a 60 |
| Número que rola | resultado | 36 a 44 |
| Risco à mão | o dado que responde | 16 |
| Objeto que pousa | foto vira check | 22 |

**Efeito grudado na pessoa (Mac)**

```
No meu Mac, use o framework Vision da Apple em Swift para gerar, de cada quadro de [vídeo], a máscara da pessoa e as articulações. Suavize as posições entre os quadros e grude o efeito [descreva] em [parte do corpo], usando a máscara para não vazar para o fundo. Mostre 8 quadros antes de renderizar.
```

## Passo 7: Deitado e em pé

O mesmo código, duas composições. Nunca corte o deitado para fazer o em pé: reposicione.

|  | Deitado 16:9 | Em pé 9:16 |
| --- | --- | --- |
| Onde | YouTube, site, apresentação | Reels, TikTok, Shorts |
| Texto | à esquerda, objeto à direita | em cima, objeto embaixo |
| Zona livre | rodapé livre para legenda | nada importante no topo e na base |
| Takes | filmados deitados | filmados em pé |

```
Faça as duas versões com o mesmo código: 1920x1080 e 1080x1920. Cada posição e tamanho tem dois valores (deitado e em pé). No em pé, deixe livres os 250 pixels de cima e os 350 de baixo. Se um take só existe num formato, troque por outro; não corte rosto. Me mostre as duas folhas de quadros.
```

## Passo 8: Som e conferência

```
Ache na música [arquivo] a pausa e a volta com o librosa. A volta tem que cair na virada do vídeo (cena 4). Use efeito só no toque e no corte, baixo. Mix final em -14 LUFS.
Antes de entregar, confira: tela preta no meio, primeiro quadro (é a capa), número que não fecha, texto em cima de rosto, instrução com menos de 1,3 s, botão que não existe no app. Exporte sem metadado e abaixo de 64 MB.
```

## Passo 9: A skill pronta

A skill **video-lancamento** acompanha este kit em um arquivo zip (skill-video-lancamento.zip). Ela traz o passo a passo, os efeitos em Remotion, um exemplo que já renderiza deitado e em pé e o script de conferência.

**Instalar**

- Descompacte e ponha a pasta em `~/.claude/skills/` (no Windows, `%USERPROFILE%\.claude\skills\`).
- Abra uma conversa nova no Claude, na aba Code.

```
Use a skill video-lancamento e faça um vídeo da função [nome] do meu app. Comece perguntando o que falta e me mostre o roteiro antes de qualquer imagem.
```

**Testar em 2 minutos**

```
cd skill-video-lancamento/template
npm install
npm run estudio     (abre para ver)
npm run deitado     (gera out/deitado.mp4)
npm run em-pe       (gera out/em-pe.mp4)
```

Testado em Mac com Node 22 e Remotion 4.0.461. Precisa de Node.js e de internet na primeira vez.

**Se der errado**

| Problema | O que fazer |
| --- | --- |
| Inventou tela ou botão | mande os prints e escreva: use só o que está nas telas |
| Parece propaganda | tire efeito e ponha a pessoa fazendo |
| Não dá para ler | uma informação por vez, 1,3 s no mínimo |
| Ficou igual à referência | troque o objeto, a história e o mundo |
| Mergulho fora da letra | use uma letra com miolo: [O], [o], [D], [q] |

---

## O combinado que faz cada vídeo sair melhor

Cole uma vez no seu projeto. A partir daí, o Claude aprende o seu gosto a cada vídeo.

```
Combinado: quando eu aprovar um vídeo, anote no GUIA.md, em "Aprovado", o que ele tem de bom e onde está o código. Quando eu reclamar, anote em "Reprovado" com a minha frase exata. Ajuste é no MESMO vídeo, versão nova; não crie outro sem eu pedir. Saiu versão nova, a velha vai para a Lixeira. Uma função por vídeo. Nenhum vídeo repete o mundo visual do anterior. Nunca entregue abaixo do último aprovado.
```
