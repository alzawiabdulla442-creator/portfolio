import { ImageResponse } from "next/og";

export const alt = "Abdullah Alzawi — Brand, Digital & Marketing Design";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OG() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          background: "#0a0a0a",
          color: "#f4f1ea",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: "62px 68px",
          fontFamily: "sans-serif",
        }}
      >
        <div style={{ display: "flex", justifyContent: "space-between", fontSize: 20, letterSpacing: 4, color: "#8b867d", textTransform: "uppercase" }}>
          <div style={{ display: "flex" }}>Benghazi, Libya</div>
          <div style={{ display: "flex" }}>Portfolio 2026</div>
        </div>

        <div style={{ display: "flex", flexDirection: "column" }}>
          <div style={{ display: "flex", fontSize: 132, fontWeight: 800, letterSpacing: -6, lineHeight: 1 }}>
            ABDULLAH
          </div>
          <div style={{ display: "flex", fontSize: 132, fontWeight: 800, letterSpacing: -6, lineHeight: 1 }}>
            ALZAWI<span style={{ color: "#FFA600" }}>.</span>
          </div>
        </div>

        <div style={{ display: "flex", flexDirection: "column", gap: 18, borderTop: "1px solid rgba(244,241,234,0.18)", paddingTop: 26 }}>
          <div style={{ display: "flex", fontSize: 32, color: "rgba(244,241,234,0.8)" }}>
            Brand identity · UI/UX · Web development · Digital marketing
          </div>
        </div>
      </div>
    ),
    { ...size }
  );
}
