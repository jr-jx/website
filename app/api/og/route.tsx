import { ImageResponse } from "next/og";
import { siteConfig } from "@/lib/site";

export const runtime = "edge";

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const title = searchParams.get("title") || siteConfig.name;
  const subtitle = searchParams.get("subtitle") || siteConfig.description;
  const type = searchParams.get("type") || "default"; // 支持不同类型：default, blog, event, team

  // 根据类型选择不同的设计风格
  const getDesignConfig = (type: string) => {
    switch (type) {
      case "blog":
        return {
          primaryColor: "#3b82f6", // blue
          secondaryColor: "#1e40af",
          accentColor: "#60a5fa",
          bgGradient: "linear-gradient(135deg, #1e3a8a 0%, #1e40af 50%, #3b82f6 100%)",
        };
      case "event":
        return {
          primaryColor: "#10b981", // emerald
          secondaryColor: "#047857",
          accentColor: "#34d399",
          bgGradient: "linear-gradient(135deg, #064e3b 0%, #047857 50%, #10b981 100%)",
        };
      case "team":
        return {
          primaryColor: "#8b5cf6", // violet
          secondaryColor: "#6d28d9",
          accentColor: "#a78bfa",
          bgGradient: "linear-gradient(135deg, #4c1d95 0%, #6d28d9 50%, #8b5cf6 100%)",
        };
      default:
        return {
          primaryColor: "#0f172a", // slate
          secondaryColor: "#1e293b",
          accentColor: "#475569",
          bgGradient: "linear-gradient(135deg, #020617 0%, #0f172a 50%, #1e293b 100%)",
        };
    }
  };

  const config = getDesignConfig(type);

  return new ImageResponse(
    (
      <div
        style={{
          height: "100%",
          width: "100%",
          display: "flex",
          flexDirection: "column",
          background: config.bgGradient,
          position: "relative",
          overflow: "hidden",
        }}
      >
        {/* 背景装饰元素 */}
        <div
          style={{
            position: "absolute",
            top: "-50%",
            right: "-20%",
            width: "600px",
            height: "600px",
            background: `radial-gradient(circle, ${config.accentColor}20 0%, transparent 70%)`,
            borderRadius: "50%",
          }}
        />
        <div
          style={{
            position: "absolute",
            bottom: "-30%",
            left: "-10%",
            width: "400px",
            height: "400px",
            background: `radial-gradient(circle, ${config.primaryColor}15 0%, transparent 70%)`,
            borderRadius: "50%",
          }}
        />

        {/* 主要内容区域 */}
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "flex-start",
            padding: "80px 80px 60px 80px",
            height: "100%",
            position: "relative",
            zIndex: 1,
          }}
        >
          {/* 品牌标识 */}
          <div
            style={{
              display: "flex",
              alignItems: "center",
              marginBottom: "40px",
            }}
          >
            <div
              style={{
                width: "48px",
                height: "48px",
                background: config.primaryColor,
                borderRadius: "12px",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                marginRight: "16px",
                fontSize: "24px",
                color: "#ffffff",
              }}
            >
              💻
            </div>
            <div
              style={{
                fontSize: "24px",
                fontWeight: 600,
                color: "#ffffff",
                opacity: 0.9,
              }}
            >
              先锋计算机协会
            </div>
          </div>

          {/* 标题 */}
          <div
            style={{
              fontSize: title.length > 20 ? "48px" : "56px",
              fontWeight: 800,
              color: "#ffffff",
              lineHeight: 1.1,
              marginBottom: "24px",
              maxWidth: "900px",
              textShadow: "0 4px 20px rgba(0,0,0,0.3)",
            }}
          >
            {title}
          </div>

          {/* 副标题 */}
          <div
            style={{
              fontSize: "28px",
              color: "#e2e8f0",
              lineHeight: 1.4,
              maxWidth: "800px",
              opacity: 0.9,
              marginBottom: "40px",
            }}
          >
            {subtitle}
          </div>

          {/* 底部信息 */}
          <div
            style={{
              position: "absolute",
              bottom: "40px",
              left: "80px",
              right: "80px",
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <div
              style={{
                fontSize: "20px",
                color: "#94a3b8",
                fontWeight: 500,
              }}
            >
              {siteConfig.url.replace(/https?:\/\//, "")}
            </div>

            {/* 装饰性代码符号 */}
            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: "8px",
                fontSize: "16px",
                color: config.accentColor,
                fontFamily: "monospace",
              }}
            >
              <span>{"</>"}</span>
              <span>技术 · 创新 · 未来</span>
            </div>
          </div>
        </div>

        {/* 右侧装饰性几何图形 */}
        <div
          style={{
            position: "absolute",
            top: "60px",
            right: "60px",
            width: "120px",
            height: "120px",
            border: `3px solid ${config.accentColor}40`,
            borderRadius: "20px",
            transform: "rotate(15deg)",
          }}
        />
        <div
          style={{
            position: "absolute",
            bottom: "100px",
            right: "100px",
            width: "80px",
            height: "80px",
            background: config.accentColor,
            borderRadius: "50%",
            opacity: 0.2,
          }}
        />
      </div>
    ),
    {
      width: 1200,
      height: 630,
    },
  );
}
