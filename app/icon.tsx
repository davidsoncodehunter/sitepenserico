import { ImageResponse } from "next/og";

// Ícone da aba do navegador: a mesma seta âmbar do logo.
export const size = { width: 32, height: 32 };
export const contentType = "image/png";

export default function Icon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          background: "linear-gradient(135deg,#ffd166,#ffb020 45%,#ff8a00)",
          color: "#1a1100",
          fontSize: 23,
          fontWeight: 700,
          borderRadius: 7,
        }}
      >
        ↗
      </div>
    ),
    size,
  );
}
