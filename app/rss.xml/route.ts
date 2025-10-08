import { siteConfig } from "@/lib/site";
import { getAllBlogs, getAllEvents } from "@/lib/content";

// 使用默认的 serverless runtime

function escape(str: string) {
  return str
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");
}

export async function GET() {
  const base = siteConfig.url.replace(/\/$/, "");
  const posts = getAllBlogs().filter((item) => !item.draft);
  const events = getAllEvents().filter((event) => !event.draft);
  const items = [...posts, ...events].map((item) => {
    const description = escape(item.excerpt || "");
    return `
      <item>
        <title>${escape(item.title)}</title>
        <link>${base}${item.url}</link>
        <guid>${base}${item.url}</guid>
        ${item.date ? `<pubDate>${new Date(item.date).toUTCString()}</pubDate>` : ""}
        <description>${description}</description>
      </item>
    `;
  });

  const rss = `<?xml version="1.0" encoding="UTF-8" ?>
  <rss version="2.0">
    <channel>
      <title>${escape(siteConfig.name)}</title>
      <link>${base}</link>
      <description>${escape(siteConfig.description)}</description>
      ${items.join("\n")}
    </channel>
  </rss>`;

  return new Response(rss, {
    headers: {
      "Content-Type": "application/xml; charset=utf-8",
      "Cache-Control": "public, s-maxage=600, stale-while-revalidate=86400",
    },
  });
}
