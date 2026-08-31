import { ImageResponse } from "next/og";
import { siteConfig } from "@/lib/site-config";

export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          padding: "80px",
          background: "linear-gradient(135deg, #067a54 0%, #10b981 55%, #34d399 100%)",
          fontFamily: "sans-serif",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: 18 }}>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              width: 72,
              height: 72,
              borderRadius: 18,
              background: "rgba(255,255,255,0.16)",
              color: "white",
              fontSize: 40,
              fontWeight: 800,
            }}
          >
            B
          </div>
          <div style={{ display: "flex", color: "white", fontSize: 44, fontWeight: 800 }}>
            {siteConfig.name}
          </div>
        </div>
        <div
          style={{
            display: "flex",
            marginTop: 44,
            maxWidth: 900,
            color: "white",
            fontSize: 52,
            fontWeight: 800,
            lineHeight: 1.15,
          }}
        >
          Offline POS, Inventory &amp; GST Billing for Indian Retailers
        </div>
        <div
          style={{
            display: "flex",
            marginTop: 28,
            maxWidth: 820,
            color: "rgba(255,255,255,0.9)",
            fontSize: 26,
          }}
        >
          100% Offline &middot; Zero Monthly Fees &middot; Google Drive Backup
        </div>
      </div>
    ),
    { ...size }
  );
}
