import { siteConfig } from "@/lib/site";
import { listContent, loadContentBySlug } from "@/lib/mdx";

export const runtime = "edge";

function escape(str: string) {
  return str.replace(/[<&>\"]+/g, (c) => ({ "<": "&lt;", ">": "&gt;", "&": "&amp;", '"': "&quot;" })[c] as string);
}

export async function GET() {
  const base = siteConfig.url.replace(/\/$/, "");
  const posts = await listContent("content/blog");
  const items = await Promise.all(
    posts.map(async (p) => {
      const full = await loadContentBySlug("content/blog", p.slug);
      const description = escape(full?.excerpt || "");
      return `
        <item>
          <title>${escape(p.title)}</title>
          <link>${base}/blog/${p.slug}</link>
          <guid>${base}/blog/${p.slug}</guid>
          ${p.date ? `<pubDate>${new Date(p.date).toUTCString()}</pubDate>` : ""}
          <description>${description}</description>
        </item>
      `;
    })
  );

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


