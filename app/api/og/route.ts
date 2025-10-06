import { ImageResponse } from "next/og";
import { siteConfig } from "@/lib/site";

export const runtime = "edge";

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const title = searchParams.get("title") || siteConfig.name;
  const subtitle = searchParams.get("subtitle") || siteConfig.description;

  return new ImageResponse(
    (
      <div
        style={{
          height: "100%",
          width: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          padding: 64,
          background: "#0a0a0a",
          color: "#fff",
        }}
      >
        <div style={{ fontSize: 60, fontWeight: 700 }}>{title}</div>
        <div style={{ marginTop: 16, fontSize: 28, color: "#ccc" }}>{subtitle}</div>
        <div style={{ position: "absolute", bottom: 48, left: 64, fontSize: 20, color: "#9ca3af" }}>
          {siteConfig.url.replace(/https?:\/\//, "")}
        </div>
      </div>
    ),
    {
      width: 1200,
      height: 630,
    }
  );
}


