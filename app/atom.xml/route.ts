import { siteConfig } from "@/lib/site";
import { getAllBlogs, getAllEvents } from "@/lib/content";

function escape(str: string) {
  return str
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");
}

function escapeHtml(str: string) {
  // 在 CDATA 中不需要转义，直接返回原内容
  return str;
}

export async function GET() {
  const base = siteConfig.url.replace(/\/$/, "");
  const posts = getAllBlogs().filter((item) => !item.draft);
  const events = getAllEvents().filter((event) => !event.draft);
  const items = [...posts, ...events].map((item) => {
    const description = escape(item.excerpt || "");
    const content = escapeHtml(item.body?.raw || "");

    return `
      <entry>
        <title>${escape(item.title)}</title>
        <link href="${base}${item.url}" />
        <id>${base}${item.url}</id>
        ${item.date ? `<updated>${new Date(item.date).toISOString()}</updated>` : ""}
        <summary>${description}</summary>
        ${content ? `<content type="html"><![CDATA[${content}]]></content>` : ""}
        <author>
          <name>${escape(siteConfig.author.name)}</name>
          <email>${siteConfig.author.email}</email>
        </author>
      </entry>
    `;
  });

  const atom = `<?xml version="1.0" encoding="UTF-8" ?>
  <feed xmlns="http://www.w3.org/2005/Atom">
    <title>${escape(siteConfig.name)}</title>
    <link href="${base}" />
    <link href="${base}/atom.xml" rel="self" />
    <id>${base}</id>
    <updated>${new Date().toISOString()}</updated>
    <author>
      <name>${escape(siteConfig.author.name)}</name>
      <email>${siteConfig.author.email}</email>
    </author>
    <subtitle>${escape(siteConfig.description)}</subtitle>
    <rights>© ${new Date().getFullYear()} ${escape(siteConfig.name)}</rights>
    ${items.join("\n")} 
  </feed>`;

  return new Response(atom, {
    headers: {
      "Content-Type": "application/atom+xml; charset=utf-8",
      "Cache-Control": "public, s-maxage=600, stale-while-revalidate=86400",
    },
  });
}
