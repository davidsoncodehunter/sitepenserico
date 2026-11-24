---
titulo: Clone do ManyChat
tarja1: Clone do
tarja2: ManyChat
resumo: O prompt para o Claude construir o seu clone do ManyChat para Instagram (comentário vira DM) e o passo a passo para criar as contas e configurar o app da Meta.
categoria: inteligencia-artificial
nivel: Avançado
data: 2026-11-24
ordem: 4
---

Este tutorial tem duas partes: primeiro o **prompt** que manda o Claude construir o sistema, e depois o **passo a passo** para criar as 5 contas e configurar o app oficial da Meta. Todas as contas têm plano grátis e não pedem cartão de crédito.

> **Importante:** você usa o app do Claude no computador, na aba **Code**, que escreve os arquivos do projeto por você.

<a class="t-download" href="/downloads/passo-a-passo-automacao-instagram.docx" download>Baixar o passo a passo (Word) <small>baixar</small></a>

## Passo 1: Cole o prompt no Claude

Esse prompt pede um sistema de automação para Instagram usando só a API oficial da Meta. Copie, cole na aba Code e deixe ele construir.

```
Você é um Engenheiro de Software Staff, Arquiteto de Sistemas, Especialista em IA, APIs, Backend, Frontend, DevOps, Banco de Dados e Segurança.

Sua missão é desenvolver um clone moderno do ManyChat focado em Instagram, utilizando tecnologias gratuitas e de alta escalabilidade.

Você deve agir como se fosse o CTO de uma startup SaaS.

O objetivo é construir uma plataforma completa, organizada, escalável e pronta para produção.

- OBJETIVO

Criar um sistema SaaS de automação para Instagram que permita conectar contas comerciais e automatizar mensagens, comentários e fluxos de conversa utilizando a API Oficial da Meta.

O sistema deve ser totalmente funcional, responsivo e preparado para múltiplos clientes (multi-tenant).

- STACK OBRIGATÓRIA

Frontend:
- Next.js (App Router)
- React
- TypeScript
- Tailwind CSS
- Shadcn/UI

Backend:
- Next.js API Routes
- Supabase
- PostgreSQL

Hospedagem:
- Vercel

Autenticação:
- Supabase Auth

Integrações:
- Meta Graph API
- Instagram Messaging API
- Webhooks
- OAuth

IA:
- OpenAI

- FUNCIONALIDADES

Implemente todas as funcionalidades abaixo:

- Login
- Cadastro
- Dashboard
- Multiusuário
- Multiempresa
- Conectar Instagram
- OAuth Oficial da Meta
- Receber Webhooks
- Responder comentários
- Responder Direct automaticamente
- Criador visual de automações
- Palavras-chave
- Fluxos condicionais
- Delay entre mensagens
- Tags
- Segmentação
- Caixa de entrada
- Histórico de conversas
- IA para responder mensagens
- Configuração de prompts
- Logs
- Configurações
- Página de assinatura
- Estrutura pronta para Stripe futuramente

- PADRÃO DO CÓDIGO

Todo código deve seguir boas práticas.

Arquitetura limpa.

Componentização.

SOLID.

Separação entre backend e frontend.

Código comentado apenas quando necessário.

Nomes claros.

Escalável.

- ENTREGA

Sempre entregue:

- Estrutura completa das pastas
- Todos os arquivos
- Código completo
- SQL do banco
- Variáveis de ambiente
- Como executar localmente
- Como publicar na Vercel
- Como conectar ao Supabase
- Como conectar ao Meta Developer
- Como testar cada funcionalidade

Nunca utilize bibliotecas abandonadas.

Sempre utilize versões atuais.

Sempre explique decisões importantes de arquitetura.

O sistema deve ficar o mais próximo possível do ManyChat, porém utilizando apenas APIs oficiais da Meta e tecnologias modernas.

Após concluir o desenvolvimento, utilize o tutorial abaixo para realizar toda a configuração da infraestrutura e integração com os serviços externos.
```

> **Atenção:** sem o passo a passo abaixo o código fica pronto, mas não conversa com o Instagram. As contas e o app da Meta você cria por conta própria.

## Passo 2: Crie um Gmail dedicado

Uma conta nova mantém o projeto isolado do seu email pessoal. Se um dia virar produto ou você passar para outra pessoa, tudo já está separado.

- Entre em **accounts.google.com/signup**.
- Escolha um email com o nome do projeto, por exemplo `meuchat.projeto@gmail.com`.
- Ative a autenticação em 2 etapas (Configurações → Segurança).
- Anote tudo num gerenciador de senhas (1Password, Bitwarden ou notas seguras).

> **Dica:** esse email será usado em todas as próximas contas. Não perca o acesso.

## Passo 3: Crie o GitHub (guarda o código)

É o cofre onde fica o código, e também de onde a Vercel pega o projeto para pôr no ar.

- Entre em **github.com/signup** e cadastre com o Gmail novo.
- Escolha um username curto, que fará parte da URL do projeto.
- Plano **Free** (repositórios privados ilimitados) e confirme o email.
- Crie um **repositório privado** com o nome do projeto, sem README, sem gitignore e sem license. Deixe vazio.

> **Atenção:** se ficar público, qualquer pessoa pode copiar o seu código. Deixe privado.

## Passo 4: Crie o Supabase (banco de dados)

É o caderno onde o sistema guarda as contas de Instagram conectadas, as automações, os comentários e as DMs. Sem banco, ele esquece tudo a cada reinício.

- Entre em **supabase.com**, clique em **Start your project** e faça login com o Gmail novo.
- Clique em **New Project** e preencha: nome do projeto, senha forte do banco (anote), região **South America (São Paulo)** e plano **Free**.
- Espere cerca de 2 minutos até o projeto ficar pronto.

Em **Settings → API**, anote:

- **Project URL:** algo como `https://xxxxx.supabase.co`.
- **anon key** ou publishable key: chave pública.
- **service_role key** ou secret key: chave secreta.

> **Atenção:** a service_role key nunca se compartilha, nem se cola em código público.

> **Nota:** o limite grátis é de 500 MB de banco. Um sistema pequeno usa menos de 50 MB no primeiro ano.

## Passo 5: Crie a Vercel (hospeda o site)

É o servidor que deixa o painel no ar 24 horas e que recebe os webhooks da Meta. Sem ela não existe URL pública.

- Entre em **vercel.com/signup** e escolha **Continue with GitHub**.
- Autorize a Vercel a acessar seus repositórios e escolha o plano **Hobby** (grátis). Pule a criação de time.
- Clique em **Add New → Project**, escolha o repositório do projeto, deixe as configurações padrão e clique em **Deploy**.
- Vai sair uma URL como `seuprojeto.vercel.app`.

> **Nota:** o limite grátis é de 100 GB de tráfego por mês. Domínio próprio (como `meuchat.com.br`) é opcional: compra no Registro.br e aponta para a Vercel depois.

## Passo 6: Prepare a conta e o app da Meta

Esta é a parte mais chata, mas obrigatória. É aqui que nasce o app oficial que conversa com o Instagram.

**Conta do Facebook.** Se ainda não tiver, crie em **facebook.com/signup** com o Gmail novo e confirme o email.

> **Atenção:** a Meta às vezes pede verificação de identidade (foto de documento) em conta nova. Se pedir, envie. Não tem como pular.

**Modo desenvolvedor.** Em **developers.facebook.com**, clique em **Começar**, aceite os termos e escolha a categoria **Desenvolvedor**.

**Criar o app.** Em **developers.facebook.com/apps**, clique em **Criar app** e preencha:

- Nome do app: o nome do projeto.
- Email de contato: o Gmail novo.
- Casos de uso: **Outro** → **Crie um app sem um caso de uso**.
- Tipo: **Empresa**.
- Portfólio empresarial: **Ainda não quero me conectar a um portfólio empresarial**.

Confirme a criação (pode pedir a senha do Facebook de novo) e anote o **ID do App**.

## Passo 7: Adicione o caso de uso do Instagram e as permissões

- No painel do app, abra **Casos de uso** → **Adicionar casos de uso**.
- Procure **Gerenciar mensagens e conteúdo no Instagram**, marque, clique em **Adicionar** e depois em **Personalizar**.
- Na Seção 1 ("Adicionar permissões obrigatórias de mensagens"), adicione as três permissões:
  - `instagram_business_basic`
  - `instagram_business_manage_comments`
  - `instagram_business_manage_messages`
- Escolha **Acesso padrão** em todas. O "Acesso avançado" pede uma análise longa.

> **Atenção:** cada permissão deve ficar com o status **Pronto para teste**. Se ficar vermelha ou pendente, algo está errado.

No topo do caso de uso aparecem o **ID do app do Instagram** e a **chave secreta do app do Instagram** (clique em Mostrar). Anote as duas.

> **Atenção:** a chave secreta é sensível. Nunca compartilhe e nunca cole em código público.

## Passo 8: Configure o webhook

Ainda dentro da personalização do caso de uso, na Seção 3 ("Configurar webhooks"):

- **URL de callback:** `https://seuprojeto.vercel.app/api/webhook`
- **Verificar token:** gere uma string aleatória de 48 caracteres ou mais e anote. Ela vai tanto aqui quanto no seu servidor.
- Clique em **Verificar e salvar**. Deve aparecer o check verde.
- Na tabela de campos, clique em **Assinar** em `comments` e em `messages`.

> **Atenção:** se não assinar `comments`, o sistema nunca recebe comentários. Confira sempre.

## Passo 9: Configure o OAuth

Na Seção 4 ("Configurar o login da empresa no Instagram" ou similar), preencha:

- **URI de redirecionamento OAuth:** `https://seuprojeto.vercel.app/api/oauth/callback`
- **URI de desautorização:** `https://seuprojeto.vercel.app/api/oauth/deauthorize`
- **URI de exclusão de dados:** `https://seuprojeto.vercel.app/exclusao-de-dados`

Salve. Deve ficar verde.

## Passo 10: Adicione os testadores do Instagram

Cada Instagram que você quer conectar precisa ser adicionado como testador.

- No menu esquerdo: **Funções do app → Funções**.
- Clique em **Adicionar pessoas**, marque **Testador do Instagram** e digite o nome do perfil (sem o @).
- Clique em **Adicionar**. O status fica **Pendente**.

**No celular do dono do Instagram:** abra o Instagram → Perfil → menu ≡ → **Configurações e privacidade** → **Apps e sites** → **Convites de testador** → **Aceitar**.

> **Nota:** o limite grátis é de 25 Instagrams como testadores. Acima disso é preciso passar pelo App Review da Meta, que leva semanas, mas libera o público geral.

## Passo 11: Publique o app em modo ao vivo

> **Importante:** sem publicar, o webhook de comentários não chega. Esse passo é crítico.

Antes, complete em **Configurações → Básico**:

- Ícone do app 1024×1024 (pode usar `placehold.co/1024x1024`).
- URL da Política de Privacidade: `https://seuprojeto.vercel.app/privacidade`
- URL de Exclusão de dados: `https://seuprojeto.vercel.app/exclusao-de-dados`
- URL dos Termos de Serviço: pode ser a mesma da privacidade.
- Categoria: **Utilitários** ou **Empresas e Páginas**.

Depois, no menu esquerdo, abra **Publicar**, role até o final, troque **Modo Desenvolvimento** para **Modo Ao Vivo** e confirme. O status vira **Publicado** em verde.

> **Atenção:** se aparecer "Currently ineligible for submission", falta algum campo em Configurações → Básico. Volte e complete.

---

## Como fica no fim

Você terá um email dedicado, uma conta GitHub com repositório privado, um banco no Supabase, a Vercel pronta para hospedar e um app da Meta configurado, publicado e recebendo webhooks. O código que transforma o webhook em DM automática é o que o prompt do Passo 1 manda o Claude construir.

<a class="t-download" href="/downloads/passo-a-passo-automacao-instagram.docx" download>Baixar o passo a passo (Word) <small>baixar</small></a>
