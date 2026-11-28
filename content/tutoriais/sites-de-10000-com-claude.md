---
titulo: Crie sites de R$ 10.000 com o Claude
tarja1: Sites de R$ 10.000
tarja2: com o Claude
resumo: Como criar sites e sistemas (SaaS) incríveis com o Claude, sem saber programar, usando só ferramentas gratuitas e a assinatura do Claude. Ache o cliente, monte o site, publique no ar e venda por até R$ 10.000.
categoria: inteligencia-artificial
nivel: Intermediário
data: 2026-11-27
ordem: 6
---

Todos aqueles sites incríveis são feitos com o **Claude**, sem precisar programar — e você pode vender um site desses por **R$ 10.000**. A única coisa que você paga é a **assinatura do Claude** (serve a mais barata). O resto é grátis. Este é o manual do vídeo, com o passo a passo e todas as ferramentas que eu mostrei. Troque o que está entre [colchetes] pelos seus dados.

> **Claude é o seu funcionário.** Ele é muito inteligente e faz quase tudo, mas o processo criativo e a gerência do projeto são seus. Você fala com ele em português: "não quero um site pesado", "reduz a compressão desse vídeo", "trabalha com estas fontes".

## Passo 1: Ache o cliente (de graça)

Antes da ferramenta, o cliente. Abra o **Google Maps** e procure um tipo de negócio local: hamburgueria, mercado, oficina, clínica. Entre em cada um, veja se tem site (muitos não têm ou têm site ruim) e faça contato. Monte o seu portfólio e vá fechando.

Comece vendendo um site por **R$ 2.000** — já pagou o mês. A partir daí você sobe o preço: um pacote completo (site + hospedagem + domínio + sistema) vale muito mais que R$ 10.000.

## Passo 2: Crie as contas grátis

Você só paga a assinatura do Claude. Tudo abaixo é gratuito para começar:

- **GitHub** — guarda os arquivos do site (e você entrega pro comprador depois): https://github.com
- **Vercel** — hospeda o site e o sistema de graça, e ainda te dá um domínio grátis (`seu-site.vercel.app`): https://vercel.com
- **Supabase** — banco de dados grátis, para quando o projeto for um sistema/SaaS (CRM, dashboard, login, assinaturas): https://supabase.com

> **Domínio:** o cliente costuma ter o domínio da empresa; se não tiver, você compra um dentro da própria Vercel e põe no contrato. Para testar, o domínio grátis `.vercel.app` já funciona.

> **Assinatura do Claude:** o plano básico (cerca de R$ 92) já faz muita coisa; tem o de ~R$ 550 e o Ultra (~R$ 1.000). Qualquer um dos dois primeiros já te atende — o crédito do mais barato só acaba mais rápido.

## Passo 3: Prepare o Claude

Use o app do Claude no computador, na aba **Code** (é a que mexe nos seus arquivos). Crie uma pasta no desktop para o projeto, abra um projeto novo no Claude e puxe essa pasta vazia.

```
Claude, quero desenvolver um website para [tipo de negócio, cidade]. Vou te dar componentes e modelos para você copiar. Crie a estrutura do projeto nesta pasta e um GUIA.md com o que eu aprovar e reprovar. Regra fixa: leia o GUIA.md antes de qualquer trabalho e nunca apague o que eu não mandar.
```

> Você pode olhar um site na internet como **referência** e mandar o Claude clonar o estilo (nunca o conteúdo). Existe até skill que clona o layout de um site.

## Passo 4: Deixe o Claude mais inteligente (instale as dependências e skills)

Para o Claude ficar bom de verdade em site e vídeo, você instala algumas **skills e plugins** (GitHub). A lista completa está no **bônus**, no fim deste manual. Você pega um link do GitHub, cola no Claude e manda instalar:

```
Claude, instale tudo o que eu te mandar e me diga o que cada um faz, quem publica, a licença e o tamanho antes de instalar. [cole os links do GitHub da lista]. No fim, rode um teste rápido de cada e me diga o que ficou disponível.
```

> **Segurança:** o prompt faz o Claude ler cada skill antes de instalar. Faça isso com qualquer skill que baixar, de mim ou de qualquer pessoa.

## Passo 5: Pegue os componentes (o que deixa o site caro)

O segredo do visual de R$ 10.000 são os **componentes prontos e animados**. Você entra nessas bibliotecas, acha o efeito que quer (passar o mouse, a tela que rola, botões, lojas, dashboards), clica em **copiar o prompt / o componente** e manda pro Claude. As três que eu uso:

- **Scrolltide** — referências e componentes com animação de scroll (nem tudo é grátis, mas dá para copiar as referências): https://scrolltide.co
- **21st.dev** — biblioteca enorme de componentes; cada um tem um "copiar prompt" pronto: https://21st.dev
- **Origin Kit** — componentes avançados e leves (peguei a logo do app e fiz um botão lindo): https://www.originkit.dev

```
Claude, use este componente de referência [cole o prompt/componente copiado] no meu site, seguindo o meu estilo. Me mostre o resultado antes de salvar. Se eu não gostar do efeito, troca só ele.
```

> **Cores:** para o estudo de cor (inclusive a paleta do cliente), use os **Themes** dessas bibliotecas — copia a paleta e manda pro Claude, que ele segue o padrão.

## Passo 6: Construa o site com o Claude

Agora é montar. O Claude escolhe sozinho a tecnologia (Next.js, JavaScript, HTML) — você não precisa saber nada disso. Peça as mudanças em português simples.

```
Claude, monte o site inteiro com os componentes que escolhemos, mobile primeiro e leve para carregar. Quando terminar, rode local e me mande o endereço para eu ver. Eu peço as mudanças e você refaz só o que eu apontar.
```

Mostre um ajuste no vídeo/para o cliente ("deixa o título maior", "troca o azul") — é o que prova que é de verdade.

## Passo 7: Vídeo no site (opcional)

Se o site pede vídeo, gere no **Google Flow** e mande o arquivo pro Claude colocar na página. Peça compressão para o site não ficar pesado.

```
Claude, coloque este vídeo [arquivo] na seção [hero/topo] do site. Reduza a compressão para não pesar e deixe ele discreto, sem chamar atenção demais.
```

## Passo 8: Sistema e SaaS (se for vender assinatura)

Dá para ir além do site e criar um **sistema** (CRM, dashboard, painel) e vender **assinatura**. Foi assim que eu fiz o meu "minichat" (um sistema que dispara mensagem no Instagram — o concorrente cobra R$ 150 por conta; eu vou vender a R$ 39,90). O banco de dados é o **Supabase**.

```
Claude, conecte o projeto ao Supabase [cole a URL e a chave]. Crie a tabela de [clientes/assinaturas], a tela de login e o painel. Teste criando um registro e me mostre ele no painel.
```

## Passo 9: Publique no ar (GitHub + Vercel)

O Claude sobe o projeto pro **GitHub** e a **Vercel** faz o deploy sozinha. A conexão é por **API** (o token que cada serviço te dá no perfil — você copia e dá pro Claude, nunca divulga).

```
Claude, suba o projeto para um repositório novo no meu GitHub [usuário], conecte na Vercel [cole a API/token] e publique. Me diga o endereço final no ar. Toda vez que eu pedir mudança, atualize e faça o deploy de novo.
```

> Tudo isso rodando **sem pagar hospedagem** — só a assinatura do Claude.

## Passo 10: Apresente e venda

Mostre o site pronto no celular e no computador. Um site profissional, com esses efeitos e funções, tem preço de mercado de **R$ 2.500 a R$ 10.000** — ou uma assinatura mensal que soma isso no ano. Venda o **pacote** (site + domínio + hospedagem + ajustes) e cobre pelo valor, não pelas horas.

## Ferramentas do vídeo

| Ferramenta | Para que serve | Link |
|---|---|---|
| Claude | Constrói o site e o sistema, na aba Code | https://claude.ai |
| GitHub | Guarda os arquivos e entrega pro cliente | https://github.com |
| Vercel | Hospeda de graça e dá domínio | https://vercel.com |
| Supabase | Banco de dados grátis (sistema/SaaS) | https://supabase.com |
| Scrolltide | Componentes com animação de scroll | https://scrolltide.co |
| 21st.dev | Componentes prontos com "copiar prompt" | https://21st.dev |
| Origin Kit | Componentes avançados e leves | https://www.originkit.dev |
| Google Flow | Gera vídeos para o site | https://labs.google/fx/tools/flow |

---

## Bônus: skills e plugins para deixar o Claude mais inteligente

Esta é a lista de GitHub que eu mostro no vídeo (do meu Twitter). Você cola o link no Claude e manda instalar (Passo 4). A maioria é de **edição e motion** (elas deixam o Claude forte também em vídeo — substituem o After Effects), e as últimas ajudam no site e no áudio:

| Skill / plugin | Para que serve | GitHub |
|---|---|---|
| reanimate | Recria animações de referência | github.com/NiazMorshed2007/reanimate |
| motion-design-skill | Motion design (LottieFiles) | github.com/LottieFiles/motion-design-skill |
| mg-styles-15 | 15 estilos de motion graphics | github.com/Vincentwei1021/mg-styles-15 |
| huashu-art-motion | Arte e motion | github.com/alchaincyf/huashu-art-motion |
| anidoodle | Animação estilo desenho | github.com/alexgreensh/anidoodle |
| cinetic | Movimento cinematográfico | github.com/Leonxlnx/cinetic |
| motionmaxxing | Motion avançado | github.com/Tejashmakwana/motionmaxxing |
| Manim | Animações matemáticas/explicativas | github.com/ManimCommunity/manim |
| blender-skills | 3D no Blender | github.com/EL4CTEO/blender-skills |
| three.quarks | Partículas em 3D (three.js) | github.com/Alchemist0823/three.quarks |
| react-postprocessing | Efeitos visuais em React | github.com/pmndrs/react-postprocessing |
| Tweakpane | Painel de ajustes para animação | github.com/cocopon/tweakpane |
| EffectCraft | Efeitos prontos | github.com/storytold/effectcraft |
| librosa | Análise de áudio (sincronizar com a música) | github.com/librosa/librosa |
| WhisperX | Transcrição e legendas | github.com/m-bain/whisperX |
| Remotion (skills) | Vídeo feito com código | github.com/remotion-dev/skills |
| FFmpeg | Converte e processa vídeo/áudio | github.com/FFmpeg/FFmpeg |
| Openverse | Banco de mídias livres | api.openverse.org/v1/ |
