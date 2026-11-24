---
titulo: Vídeos do YouTube milionários
tarja1: Vídeos do YouTube
tarja2: milionários
resumo: Como fazer um curta animado, do personagem à publicação, com o Claude. Os 10 prompts da aula prontos para copiar, as 35 ferramentas com link e as 3 skills para baixar.
categoria: inteligencia-artificial
nivel: Intermediário
data: 2026-11-24
ordem: 3
---

Este é o kit da aula: os prompts prontos para copiar e colar, um por vez, para criar um **curta animado** com o Claude, do personagem até a publicação no YouTube. Troque o que está entre [colchetes] pelos seus dados.

> **Importante:** este tutorial continua o [Edite vídeo com o Claude](/tutoriais/edite-video-com-o-claude). Você usa o app do Claude no computador, na aba **Code**, que mexe nos seus arquivos.

**Baixe o kit completo:** o PDF com os 10 prompts e as 35 ferramentas, e a pasta com o passo a passo e as 3 skills.

<a class="t-download" href="/downloads/kit-curta-animado.zip" download>Baixar o kit completo (zip) <small>279 KB</small></a>
<a class="t-download" href="/downloads/kit-curta-animado.pdf" download>Baixar só o PDF <small>344 KB</small></a>

## Passo 1: Prepare o Claude

Instale o app do Claude no computador e use a aba **Code**, que mexe nos seus arquivos. Assinatura menor funciona, mas o crédito acaba mais rápido.

```
Crie a pasta "Curta Animado" em [Documentos] com: referencias, personagem, sons, cenas e prontos. Crie também um GUIA.md com as seções Aprovado e Reprovado. Regra fixa: leia o GUIA.md antes de qualquer trabalho e nunca apague o que eu não mandar.
```

## Passo 2: Instale as ferramentas

Você não instala nada sozinho: manda o link e ele instala. Baixe só da página oficial.

```
Instale e teste no meu computador: Node.js com Remotion, FFmpeg, whisper.cpp com o modelo large-v3-turbo, yt-dlp e Python com librosa. Antes de instalar qualquer coisa, me diga o que ela faz, quem publica, a licença e o tamanho, e espere o meu OK. No fim, rode um teste curto de cada uma e me diga o que funcionou.
```

## Passo 3: Instale as skills deste kit

São três: **curta animado**, **animação com código** e **edição com o Claude**. Elas já vêm dentro do kit completo, na pasta `skills`. Se quiser, baixe uma por uma:

<a class="t-download" href="/downloads/skill-curta-animado.zip" download>Skill curta animado <small>11 KB</small></a>
<a class="t-download" href="/downloads/skill-animacao-com-codigo.zip" download>Skill animação com código <small>4 KB</small></a>
<a class="t-download" href="/downloads/skill-edicao-com-claude.zip" download>Skill edição com o Claude <small>3 KB</small></a>

```
Instale estas skills no meu Claude: [arraste os 3 arquivos .zip]. Leia cada SKILL.md antes, confira que nenhuma tem comando estranho, copie cada pasta para ~/.claude/skills e me diga quais ficaram disponíveis.
```

> **Atenção:** o prompt manda o Claude ler cada skill antes de instalar. Faça isso com qualquer skill que você baixar, de mim ou de qualquer outra pessoa.

## Passo 4: Escolha a referência

Uma história que você gosta. Vale a técnica, nunca o vídeo.

```
Estude esta referência com a skill curta-animado: [link]. Me mostre a tabela do que acontece e por que prende, e 10 regras de técnica. Liste também tudo o que eu NÃO posso repetir: personagem, frase, ordem das cenas, título e capa.
```

## Passo 5: Crie o personagem

Uma boneca, um boneco ou um bicho. Tem que ser seu.

```
Crie 3 opções de personagem para uma história sobre [tema], para [público]. Desenhe em código, com ficha de poses e rostos. Diga o que nunca muda e o que muda conforme a história. Espere eu escolher.
```

## Passo 6: Escreva a história

Problema, solução e um final que paga o começo.

```
Escreva um curta de [1 minuto] com a mensagem [frase]. Use a estrutura da skill. O vilão precisa ser uma imagem. A pessoa tem que entender sem som. Me dê 3 finais diferentes.
```

## Passo 7: Aprove os quadros

Aqui você corrige barato, antes de animar.

```
Monte uma folha com um quadro por cena, no motor de verdade. Confira cabeça, joelho, cotovelo e mão em cada pose. Espere o meu OK antes de animar.
```

> **Dica:** aprovar os quadros parados antes de animar é o que economiza crédito. Animação refeita custa muito mais que um quadro refeito.

## Passo 8: Anime e ponha o som

A música é escolhida antes, para a virada cair no lugar certo.

```
Ache as batidas desta música com o librosa: [arquivo]. Ponha a virada da música na decisão da personagem. Anime as cenas aprovadas, com efeito em cada toque e passo, sempre abaixo da voz. Anote o nome, o autor e a licença da música.
```

## Passo 9: Confira e publique

Ele erra. Você assiste e fala.

```
Rode o conferir.sh, olhe as folhas de quadros e me diga os erros que VOCÊ achou antes de eu ver. Depois faça a capa, o título com até 60 letras, a descrição com capítulos e 5 hashtags.
```

## Passo 10: Edite a sua aula ou reels

A terceira skill corta, trata e põe animação por cima da sua fala.

```
Edite [vídeo] com a skill edicao-com-claude. Corte só erro e espera, sem comer palavra, e confira cada emenda. Deixe a minha sala aparecer, ponha os vídeos por cima, com a câmera parada e a música bem baixa. Esconda qualquer dado particular da tela.
```

## Todas as ferramentas

Confira a licença de cada uma antes de usar em vídeo de empresa.

**A base (instale primeiro)**

- **Claude:** dirige tudo: escreve, programa, anima e confere. [claude.com/download](https://claude.com/download)
- **FFmpeg:** corta, junta, trata cor e mistura o som. [github.com/FFmpeg/FFmpeg](https://github.com/FFmpeg/FFmpeg)
- **Whisper (whisper.cpp):** acha o tempo certo de cada palavra. [github.com/ggml-org/whisper.cpp](https://github.com/ggml-org/whisper.cpp)
- **WhisperX:** legenda palavra por palavra, alinhada. [github.com/m-bain/whisperX](https://github.com/m-bain/whisperX)
- **yt-dlp:** baixa a legenda para estudar uma referência. [github.com/yt-dlp/yt-dlp](https://github.com/yt-dlp/yt-dlp)
- **Blender:** o 3D. [blender.org/download](https://www.blender.org/download/)
- **Vision (Apple):** separa a pessoa do fundo; já vem no Mac. [developer.apple.com/documentation/vision](https://developer.apple.com/documentation/vision)
- **Google Fonts:** as letras do vídeo. [fonts.google.com](https://fonts.google.com)
- **Pixabay:** música e efeitos gratuitos. [pixabay.com/music](https://pixabay.com/music/)
- **ChatGPT:** pode desenhar o personagem em peças para recortar. [chatgpt.com](https://chatgpt.com)

**Desenho e movimento**

- **Remotion:** o código vira quadro do vídeo. [github.com/remotion-dev/remotion](https://github.com/remotion-dev/remotion)
- **Remotion Skills:** skill oficial de boas práticas. [github.com/remotion-dev/skills](https://github.com/remotion-dev/skills)
- **React:** as bibliotecas de animação rodam nele. [react.dev](https://react.dev)
- **reanimate:** entende uma animação quadro a quadro e refaz. [github.com/NiazMorshed2007/reanimate](https://github.com/NiazMorshed2007/reanimate)
- **motion-design-skill:** tempo e curva de animador. [github.com/LottieFiles/motion-design-skill](https://github.com/LottieFiles/motion-design-skill)
- **mg-styles-15:** 15 estilos de motion, um prompt cada. [github.com/Vincentwei1021/mg-styles-15](https://github.com/Vincentwei1021/mg-styles-15)
- **huashu-art-motion:** pinturas que se mexem, 35 estilos. [github.com/alchaincyf/huashu-art-motion](https://github.com/alchaincyf/huashu-art-motion)
- **cinetic:** filme de lançamento em código. [github.com/Leonxlnx/cinetic](https://github.com/Leonxlnx/cinetic)
- **react-postprocessing:** luz, brilho e acabamento de cinema. [github.com/pmndrs/react-postprocessing](https://github.com/pmndrs/react-postprocessing)
- **viral-claude-shorts:** narração vira vídeo vertical animado. [github.com/hans1801/viral-claude-shorts](https://github.com/hans1801/viral-claude-shorts)
- **anidoodle:** rabiscos e loops em código. [github.com/alexgreensh/anidoodle](https://github.com/alexgreensh/anidoodle)
- **motionmaxxing:** tira a cara de vídeo de IA. [github.com/Tejashmakwana/motionmaxxing](https://github.com/Tejashmakwana/motionmaxxing)
- **Manim:** fórmulas e gráficos animados. [github.com/ManimCommunity/manim](https://github.com/ManimCommunity/manim)
- **blender-skills:** truques de Blender para o Claude. [github.com/EL4CTEO/blender-skills](https://github.com/EL4CTEO/blender-skills)
- **three.quarks:** partículas em 3D. [github.com/Alchemist0823/three.quarks](https://github.com/Alchemist0823/three.quarks)
- **Tweakpane:** botões para ajustar cada detalhe. [github.com/cocopon/tweakpane](https://github.com/cocopon/tweakpane)
- **EffectCraft:** composição e motion, em Rust. [github.com/storytold/effectcraft](https://github.com/storytold/effectcraft)
- **GSAP:** animação para web. [github.com/greensock/GSAP](https://github.com/greensock/GSAP)

**Plugins do Claude**

- **HyperFrames:** blocos prontos de animação. [github.com/heygen-com/hyperframes](https://github.com/heygen-com/hyperframes)
- **Lemo-Opuscar:** 99 estilos prontos. [github.com/lemomo-ai/lemo-opuscar](https://github.com/lemomo-ai/lemo-opuscar)
- **Superpowers:** método de trabalho com plano e conferência. [github.com/obra/superpowers](https://github.com/obra/superpowers)

**Som e voz**

- **librosa:** acha cada batida da música. [github.com/librosa/librosa](https://github.com/librosa/librosa)
- **VoiceStudio:** clona a voz na sua máquina, sem pagar. [github.com/debpalash/VoiceStudio](https://github.com/debpalash/VoiceStudio)
- **ElevenLabs:** voz paga, por conector. [elevenlabs.io](https://elevenlabs.io)
- **Openverse:** sons e imagens livres. [openverse.org](https://openverse.org)

---

## Se este kit te ajudou

Deixa o like e se inscreve no canal. E baixe o kit completo de novo sempre que quiser: ele fica aqui.

<a class="t-download" href="/downloads/kit-curta-animado.zip" download>Baixar o kit completo (zip) <small>279 KB</small></a>
