# Site Pense Rico (openserico.com.br)

Site de vendas dos cursos de cripto do Davidson (Hotmart). NÃO é o bot (`~/Documents/agente-pense-rico`), nem vídeos (`~/Documents/videos-pense-rico`), nem Aurora. Não misturar projetos.

## Stack
Next.js 16 + React 19, CSS puro em `app/globals.css` (sem Tailwind). Rodar: `npm run dev` (porta 3177; a 3100 é de outro projeto).

## Design: "Editorial Âmbar"
Creme `#faf9f5` + preto quente `#141413` + âmbar `#f5a524` (laranja quase amarelo, família Claude). Títulos em Fraunces (serifa, itálico âmbar para a palavra-chave), texto em Instrument Sans, números em JetBrains Mono. Tudo por variáveis CSS em `:root`.

## Onde mexer
- `lib/produtos.ts`: produtos, preços, FAQ, bônus, link do checkout, Pixel. Curso separado à venda = trocar `checkout: null` pela URL da Hotmart.
- `components/FotoSlot.tsx`: espaço de foto. Sem `src` mostra o aviso do que enviar; com o arquivo em `public/fotos/`, passe `src`.
- `app/page.tsx` (vendas), `app/curso/[slug]` (um curso), `app/tutoriais` (tutoriais como páginas, sem painel e sem upload).

## Regras
- Sem promessa de ganho ("multiplicar patrimônio", "lucro garantido"): derruba anúncio Meta e Hotmart. Manter aviso de risco no rodapé.
- Sem contagem regressiva falsa.
- Pixel Meta fica no `app/layout.tsx`.
