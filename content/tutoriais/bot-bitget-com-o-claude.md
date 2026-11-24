---
titulo: Bot Bitget
tarja1: Bot Bitget
tarja2: no seu computador
resumo: Instale o bot de futuros COIN-M da Bitget com o painel web, passo a passo, para Mac, Linux e Windows. O pacote para baixar já vai limpo, sem chaves.
categoria: inteligencia-artificial
nivel: Avançado
data: 2026-11-24
ordem: 5
---

Este tutorial instala o **Bot Bitget v1.2**, um bot automático para **futuros COIN-M perpétuo** da Bitget, com um painel web para acompanhar saldo, posições e o log ao vivo. Tudo roda no seu computador e as suas chaves ficam só nele.

<a class="t-download" href="/downloads/bot-bitget-v1.2.zip" download>Baixar o bot (zip) <small>39 KB</small></a>

> **Atenção:** este bot opera **dinheiro real**. Trading de futuros tem risco alto de perda, inclusive perda total, e o bot **não garante lucro**. Comece com saldo pequeno e lembre que você é o único responsável pelas operações na sua conta.

## Passo 1: Instale o Python e o Node.js

São os dois programas que o bot precisa. O resto o script instala sozinho.

- **Python 3.9 ou mais novo:** baixe em **python.org/downloads**. No Windows, marque **"Add Python to PATH"**.
- **Node.js (versão LTS):** baixe em **nodejs.org**.

> **Dica:** baixe os dois só nos sites oficiais.

## Passo 2: Baixe e descompacte o bot

Clique no botão de download no começo da página e descompacte o zip. Vai surgir a pasta `bot-bitget-publico-v1.2`. Anote onde ela ficou, porque os próximos comandos são rodados dentro dela.

> **Importante:** o zip não leva nenhuma chave. O arquivo `.env.example` é só um modelo em branco.

## Passo 3: Instale (uma vez só)

**Mac ou Linux.** Abra o **Terminal** dentro da pasta do bot e rode:

```bash
./instalar.sh
```

**Windows.** Abra o **PowerShell** dentro da pasta do bot e rode:

```powershell
python -m venv .venv
.venv\Scripts\pip install --upgrade pip
.venv\Scripts\pip install aiohttp pandas numpy anthropic python-dotenv ta cryptography scikit-learn streamlit requests
npm install -g pm2
copy .env.example .env
```

> **Nota:** a instalação leva de 2 a 3 minutos para baixar tudo.

## Passo 4: Inicie o bot e o painel

**Mac ou Linux:**

```bash
./iniciar.sh
```

**Windows:**

```powershell
pm2 start bitget_perpetual_agent.py --interpreter .venv\Scripts\python.exe --name bitget-bot --output trading_agent.log --error trading_agent.log
pm2 start .venv\Scripts\streamlit.exe --name bitget-painel --interpreter none -- run painel/Home.py --server.port 8501 --server.headless true
start http://localhost:8501
```

O navegador abre em `http://localhost:8501`, que é o painel.

## Passo 5: Crie as chaves da Bitget e cole no painel

1. No painel, no menu lateral, clique em **Configurar Bitget**.
2. Siga o passo a passo da própria tela para gerar as chaves na Bitget (**bitget.com → API Management**).
3. Cole a **API Key**, o **Secret** e a **Passphrase**.
4. Clique em **Testar e salvar**.
5. Reinicie o bot:

```bash
pm2 restart bitget-bot
```

Permissões da chave na Bitget:

- Marque **Read**.
- Marque **Futures Trading**.
- **Nunca** marque **Withdraw**. É essa opção que permitiria tirar dinheiro da conta.

> **Atenção:** se puder, configure também a lista de IPs permitidos (IP whitelist) com o seu IP.

## Passo 6: Confira se está rodando

No menu lateral do painel, a **Home** mostra saldos, posições abertas e o log do bot ao vivo. Pelo terminal:

```bash
pm2 status
```

```bash
pm2 logs bitget-bot
```

O `pm2 status` deve mostrar os dois processos, `bitget-bot` e `bitget-painel`, como **online**. Para sair do log, use Ctrl+C.

## Passo 7: Entenda como o bot decide

O bot monitora **15 moedas** e opera **só as moedas em que você tem saldo** na conta COIN-M Futuros. A estratégia tem duas camadas:

- **Tendência (1D, 4H, 1H):** confirma a direção em pelo menos 2 tempos gráficos.
- **Entrada (5m, 15m):** o gatilho é um RSI extremo (20 ou menos para compra, 80 ou mais para venda).

Depois de abrir a operação, ele a acompanha com breakeven, trailing stop e saídas parciais (40% no primeiro alvo, 40% no segundo e 20% deixados correr). Também pode ampliar a posição quando a tendência confirma.

> **Nota:** o bot pode passar horas só analisando, sem entrar em nada. Isso é normal: ele só entra quando todas as condições batem.

## Passo 8: Adicione mais moedas

Basta depositar a moeda em **COIN-M Futuros** na Bitget. O bot percebe o novo saldo em até 5 minutos.

**Moedas suportadas (15):** BTC, ETH, DOT, SOL, XRP, ADA, LINK, LTC, AVAX, BNB, MATIC, ATOM, NEAR, FIL, TRX.

## Comandos úteis

| O que fazer | Comando |
|---|---|
| Ver status | `pm2 status` |
| Ver o log do bot ao vivo | `pm2 logs bitget-bot` |
| Reiniciar o bot | `pm2 restart bitget-bot` |
| Reiniciar o painel | `pm2 restart bitget-painel` |
| Parar tudo | `./parar.sh` (ou `pm2 stop bitget-bot bitget-painel`) |
| Remover do pm2 | `pm2 delete bitget-bot bitget-painel` |

## Se der errado

- **`pm2: command not found`:** rode `npm install -g pm2`.
- **`ModuleNotFoundError`:** rode `./instalar.sh` de novo.
- **`apikey/password is incorrect`:** a Passphrase está errada. Corrija em **Configurar Bitget**.
- **`Apikey does not exist`:** a chave foi apagada na Bitget. Crie uma nova e cole no painel.
- **O painel não abre em `localhost:8501`:** rode `pm2 logs bitget-painel --err` para ver o erro.

## Segurança: leia antes de usar

> **Atenção:** as suas chaves ficam só no seu computador, no arquivo `.env`. Nunca envie esse arquivo para ninguém, nem para Google Drive, GitHub ou Dropbox. Nunca mostre o conteúdo dele em vídeo ou print. E nunca marque a permissão **Withdraw**.

Se desconfiar que as chaves vazaram:

1. Entre em **bitget.com → API Management**.
2. **Revogue** as chaves na hora.
3. Gere chaves novas.
4. Atualize no painel, em **Configurar Bitget**.

---

## Aviso de risco

Conteúdo educacional, sem recomendação de investimento. Operar futuros com alavancagem pode causar perda total do valor usado, e resultado passado não garante resultado futuro.

<a class="t-download" href="/downloads/bot-bitget-v1.2.zip" download>Baixar o bot (zip) <small>39 KB</small></a>
