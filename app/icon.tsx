import { ImageResponse } from "next/og";

// Ícone da aba do navegador: o mesmo "R" itálico âmbar do logo.
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
          fontSize: 22,
          fontWeight: 700,
          fontStyle: "italic",
          borderRadius: 7,
        }}
      >
        R
      </div>
    ),
    size,
  );
}
