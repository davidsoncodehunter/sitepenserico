import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono, Instrument_Serif } from "next/font/google";
import Script from "next/script";
import { PIXEL_ID } from "@/lib/produtos";
import "./globals.css";

// Geist: sans moderna e nítida para títulos e texto. Instrument Serif itálico só nas palavras de destaque.
const sans = Geist({ subsets: ["latin"], variable: "--font-sans", display: "swap" });
const mono = Geist_Mono({ subsets: ["latin"], variable: "--font-mono", display: "swap" });
const serif = Instrument_Serif({ subsets: ["latin"], weight: "400", style: ["normal", "italic"], variable: "--font-serif", display: "swap" });

export const metadata: Metadata = {
  metadataBase: new URL("https://openserico.com.br"),
  title: {
    default: "Pense Rico | Aprenda o mercado cripto com método",
    template: "%s | Pense Rico",
  },
  description:
    "Combo com 4 cursos para aprender o mercado de criptomoedas do zero: futuros, Bitcoin, mentalidade e carteira. 7 dias de garantia.",
  applicationName: "Pense Rico",
  keywords: [
    "curso de criptomoedas",
    "curso de bitcoin",
    "mercado de futuros cripto",
    "aprender a investir em cripto",
    "carteira de criptomoedas",
    "Pense Rico",
  ],
  authors: [{ name: "Davidson — Pense Rico" }],
  creator: "Davidson",
  alternates: { canonical: "/" },
  openGraph: {
    title: "Pense Rico | Aprenda o mercado cripto com método",
    description: "4 cursos, 1 combo. Do zero ao método, com 7 dias de garantia.",
    url: "/",
    siteName: "Pense Rico",
    type: "website",
    locale: "pt_BR",
  },
  twitter: {
    card: "summary_large_image",
    title: "Pense Rico | Aprenda o mercado cripto com método",
    description: "4 cursos, 1 combo. Do zero ao método, com 7 dias de garantia.",
  },
  robots: { index: true, follow: true },
};

// Ficha da marca para o Google (não aparece na tela).
const DADOS_MARCA = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "Pense Rico",
  url: "https://openserico.com.br",
  description: "Educação sobre o mercado de criptomoedas, com método e sem atalhos.",
  founder: { "@type": "Person", name: "Davidson" },
  email: "pensericodigital@gmail.com",
  sameAs: ["https://www.instagram.com/davidson.penserico", "https://www.youtube.com/@PenseRico"],
};

export const viewport: Viewport = { themeColor: "#0a0908" };

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pt-BR" className={`${sans.variable} ${mono.variable} ${serif.variable}`}>
      <body>
        {children}
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(DADOS_MARCA) }} />
        <Script id="meta-pixel" strategy="afterInteractive">{`
          !function(f,b,e,v,n,t,s){if(f.fbq)return;n=f.fbq=function(){n.callMethod?n.callMethod.apply(n,arguments):n.queue.push(arguments)};if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';n.queue=[];t=b.createElement(e);t.async=!0;t.src=v;s=b.getElementsByTagName(e)[0];s.parentNode.insertBefore(t,s)}(window,document,'script','https://connect.facebook.net/en_US/fbevents.js');
          fbq('init','${PIXEL_ID}');fbq('track','PageView');
        `}</Script>
      </body>
    </html>
  );
}
