import { search } from "@/lib/search";

export const runtime = "edge";

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const q = searchParams.get("q") || "";
  const results = await search(q);
  return Response.json({ q, results });
}


