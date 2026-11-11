---
titulo: Edite vídeo com o Claude
tarja1: Edite vídeo
tarja2: com o Claude
resumo: O passo a passo completo para transformar o Claude no seu editor de vídeo, com os prompts prontos para copiar e colar. Todas as ferramentas são gratuitas.
categoria: inteligencia-artificial
nivel: Iniciante
data: 2026-11-11
ordem: 1
rascunho: sim
---

Este é o passo a passo do vídeo, com os prompts prontos para copiar e colar. São as ferramentas que eu uso nos meus vídeos — todas gratuitas: o Claude instala, testa e edita por você.

> **Importante:** instale o app do Claude no computador (Mac ou Windows) e use a aba **Code**, que mexe nos seus arquivos. Assim ele cria pasta, instala ferramenta e gera o vídeo sozinho.

## O que você vai precisar

- O app do Claude instalado no computador (Mac ou Windows)
- Cole **um prompt por vez** e espere ele terminar antes do próximo
- Troque o que está entre [colchetes] pelos seus dados

## Passo 1: Configuração

Uma pasta com três pastas dentro e um guia que ele lê antes de editar.

```
Crie a pasta "Editor de Vídeo" em [Documentos] com três pastas dentro: "videos brutos" (o que eu gravo), "referencias" (vídeos que eu gosto) e "prontos" (vídeos finais).

Crie também um GUIA.md na raiz com: quem eu sou, sobre o que eu falo, para quem são os meus vídeos, e duas seções vazias: "Aprovado" e "Reprovado".

Regra fixa: antes de qualquer edição, leia o GUIA.md. Nunca apague nada de "videos brutos".
```

## Passo 2: As ferramentas

Todas gratuitas. Você não instala nada: ele instala e testa.

<div class="ferr">
  <div><b>Remotion</b>as animações, feitas em código</div>
  <div><b>FFmpeg</b>cortes, cor e som</div>
  <div><b>Whisper</b>legenda palavra por palavra</div>
  <div><b>yt-dlp</b>baixa os vídeos de referência</div>
</div>

```
Instale e teste no meu computador: Node.js com Remotion, FFmpeg, whisper.cpp com o modelo large-v3-turbo, e yt-dlp. No Mac, use o Homebrew. No fim, rode um teste rápido de cada um e me diga o que funcionou.
```

## Passo 3: O detalhe que dá acabamento — sons e imagens grátis

É o que separa um vídeo amador de um vídeo bem acabado. O Pexels entrega imagem e vídeo de graça: crie a sua chave em pexels.com/api e passe para o Claude guardar.

```
Crie a pasta "sons" dentro de "Editor de Vídeo" e monte um banco de efeitos sonoros: whoosh curto e macio, clique discreto, grave caindo e um riser de 2 segundos. Crie com o FFmpeg ou baixe de um banco de licença livre, e anote a licença de cada um num LEIA-ME.

Regra de som: a minha voz no centro, música uns 20 dB abaixo da voz, efeito sempre baixo, e o vídeo final em -14 LUFS.

Quando faltar imagem ou cena, busque no Pexels com a minha chave [sua chave], em vertical, e me mostre as opções antes de usar.
```

## Passo 4: Estilo

O passo que dá bom gosto para ele. Mande o link de 3 a 5 vídeos de criadores que você gosta, um por vez.

```
Baixe este vídeo com o yt-dlp para "referencias" e estude quadro a quadro: [link]
1. transcreva a fala com o Whisper;
2. monte uma folha com 1 quadro a cada meio segundo do vídeo inteiro e, em cada transição, 12 quadros por segundo;
3. meça o som: volume (LUFS), onde entra música e onde entra efeito;
4. escreva referencias/[nome]/ANALISE.md com uma tabela "tempo | fala | o que aparece" e as regras de corte, câmera, legenda, cor, fonte e som;
5. me mostre as regras e passe para o GUIA.md só as que eu aprovar.
Vale só a técnica: nunca copie o vídeo nem a fala de ninguém.
```

> **Atenção:** vale só a técnica. Nunca copie o vídeo nem a fala de ninguém.

## Passo 5: Edição

Grave, jogue o arquivo em "videos brutos" e cole:

```
Edite "videos brutos/[nome].mp4" seguindo o GUIA.md:
1. transcreva com o Whisper e tire as retomadas, os erros e as pausas longas, sem acelerar a minha fala;
2. monte no Remotion: legenda palavra por palavra, e uma animação para cada ideia, nascendo na palavra que eu falo;
3. som: a regra da pasta "sons", com efeito só nas viradas;
4. antes de gerar o vídeo, me mostre uma folha de quadros (1 a cada meio segundo);
5. depois que eu aprovar, entregue em "prontos" com o nome AAAA-MM-DD título v1.mp4.
```

Para cada vídeo sair melhor que o anterior, cole isto uma vez:

```
Combinado: quando eu aprovar um vídeo, anote no GUIA.md, em "Aprovado", o que ele tem de bom e onde está o código dele. Quando eu reclamar, anote em "Reprovado" com a minha frase exata. Todo vídeo novo começa do último aprovado e nunca fica abaixo dele.
```

> **Dica:** com esse combinado, o Claude aprende o seu gosto a cada vídeo: o que você aprovar vira padrão, e o que você reprovar nunca mais volta.

---

## Próximos passos

Pronto: a partir daqui é gravar, jogar na pasta e colar o prompt de edição. Quando os próximos tutoriais desta categoria chegarem, os botões **Anterior** e **Próximo** aparecem aqui embaixo sozinhos.
