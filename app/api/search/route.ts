import { search } from "@/lib/search";
import { z } from "zod";

export const runtime = "edge";

const QuerySchema = z.object({
  q: z.string().min(1).max(100),
  type: z.enum(["all", "blog", "event"]).optional().default("all"),
  limit: z.coerce.number().int().min(1).max(50).optional().default(20),
});

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const parsed = QuerySchema.safeParse({
    q: searchParams.get("q") ?? "",
    type: searchParams.get("type") ?? undefined,
    limit: searchParams.get("limit") ?? undefined,
  });
  if (!parsed.success) {
    return Response.json({ error: "Invalid query" }, { status: 400 });
  }
  const { q, type, limit } = parsed.data;
  const results = await search(q, { type, limit });
  return Response.json({ q, type, limit, results });
}


