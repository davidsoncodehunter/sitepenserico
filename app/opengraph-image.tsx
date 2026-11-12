import { ImageResponse } from "next/og";
import { OFERTA } from "@/lib/produtos";

// Prévia do link no WhatsApp, Instagram e Facebook. Desenhada em código: não depende de arte enviada.
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";
export const alt = "Pense Rico — 4 cursos para aprender o mercado cripto com método";

export default function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: "68px 72px",
          background: "#0a0908",
          backgroundImage:
            "radial-gradient(900px 520px at 78% 8%, rgba(255,176,32,0.22), transparent 70%), radial-gradient(700px 420px at 6% 100%, rgba(255,138,0,0.12), transparent 70%)",
          color: "#faf7f2",
          fontFamily: "sans-serif",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: 18 }}>
          <div
            style={{
              width: 58,
              height: 58,
              borderRadius: 17,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              background: "linear-gradient(135deg,#ffd166,#ffb020 45%,#ff8a00)",
              color: "#1a1100",
              fontSize: 34,
              fontWeight: 700,
            }}
          >
            ↗
          </div>
          <div style={{ fontSize: 34, fontWeight: 600, letterSpacing: -1 }}>Pense Rico</div>
        </div>

        <div style={{ display: "flex", flexDirection: "column", gap: 26 }}>
          <div style={{ fontSize: 74, fontWeight: 700, letterSpacing: -2.6, lineHeight: 1.05, maxWidth: 920 }}>
            Domine o mercado cripto com método, não com palpite.
          </div>
          <div style={{ fontSize: 31, color: "#a39e96", maxWidth: 880, lineHeight: 1.35 }}>
            4 formações completas em um só combo: do primeiro Bitcoin até uma carteira bem montada.
          </div>
        </div>

        <div style={{ display: "flex", alignItems: "center", gap: 16 }}>
          {[`${OFERTA.parcelas}`, `${OFERTA.garantiaDias} dias de garantia`, `Acesso por ${OFERTA.acesso}`].map((t) => (
            <div
              key={t}
              style={{
                display: "flex",
                padding: "14px 26px",
                borderRadius: 999,
                border: "1px solid rgba(255,255,255,0.16)",
                background: "rgba(255,255,255,0.05)",
                fontSize: 26,
                color: "#faf7f2",
              }}
            >
              {t}
            </div>
          ))}
        </div>
      </div>
    ),
    size,
  );
}
