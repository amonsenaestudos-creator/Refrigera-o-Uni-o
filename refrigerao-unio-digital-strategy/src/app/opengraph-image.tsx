import { ImageResponse } from "next/og";

export const alt = "Refrigeração União — conserto de geladeiras, freezers e máquinas de lavar";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpenGraphImage() {
  return new ImageResponse(
    <div style={{ width: "100%", height: "100%", display: "flex", position: "relative", overflow: "hidden", color: "white", background: "#061f3d", fontFamily: "Arial, sans-serif" }}>
      <div style={{ position: "absolute", width: 420, height: 420, right: -90, top: -80, border: "85px solid rgba(18,183,240,.14)", borderRadius: "50%" }} />
      <div style={{ display: "flex", flexDirection: "column", justifyContent: "center", padding: "74px 80px", width: "78%" }}>
        <div style={{ display: "flex", alignItems: "center", gap: 18, marginBottom: 42 }}>
          <div style={{ width: 86, height: 86, display: "flex", alignItems: "center", justifyContent: "center", borderRadius: 23, fontWeight: 900, fontSize: 34, fontStyle: "italic", background: "#0a315b", boxShadow: "inset 0 -8px 0 rgba(18,183,240,.3)" }}>RU</div>
          <div style={{ display: "flex", flexDirection: "column" }}><span style={{ fontSize: 21, letterSpacing: 2 }}>REFRIGERAÇÃO</span><strong style={{ color: "#54d1ff", fontSize: 38, fontStyle: "italic" }}>UNIÃO</strong></div>
        </div>
        <div style={{ fontSize: 57, fontWeight: 800, lineHeight: 1.05, letterSpacing: -2 }}>Conserto de eletrodomésticos</div>
        <div style={{ marginTop: 24, color: "#b6cedf", fontSize: 25 }}>Geladeiras • Freezers • Máquinas de lavar</div>
        <div style={{ marginTop: 34, display: "flex", alignItems: "center", gap: 12, color: "#73dcff", fontSize: 24, fontWeight: 700 }}>Ligue: (71) 98778-0451</div>
      </div>
    </div>,
    size,
  );
}
