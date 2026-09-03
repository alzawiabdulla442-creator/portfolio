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
          background: "#f7f4ee",
          color: "#0e0d0b",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: "62px 68px",
          fontFamily: "sans-serif",
        }}
      >
        <div style={{ display: "flex", justifyContent: "space-between", fontSize: 20, letterSpacing: 4, color: "#6b655c", textTransform: "uppercase" }}>
          <div style={{ display: "flex" }}>Benghazi, Libya</div>
          <div style={{ display: "flex" }}>Portfolio 2026</div>
        </div>

        <div style={{ display: "flex", flexDirection: "column" }}>
          <div style={{ display: "flex", fontSize: 132, fontWeight: 800, letterSpacing: -6, lineHeight: 1 }}>
            THREE
          </div>
          <div style={{ display: "flex", fontSize: 132, fontWeight: 800, letterSpacing: -6, lineHeight: 1 }}>
            ROOMS<span style={{ color: "#FFA600" }}>.</span>
          </div>
        </div>

        <div style={{ display: "flex", flexDirection: "column", gap: 18, borderTop: "1px solid rgba(244,241,234,0.18)", paddingTop: 26 }}>
          <div style={{ display: "flex", fontSize: 32, color: "rgba(14,13,11,0.75)" }}>
            Abdullah Alzawi — Brand · Digital · Marketing
          </div>
        </div>
      </div>
    ),
    { ...size }
  );
}
