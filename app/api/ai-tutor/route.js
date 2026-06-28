const BEA_API = process.env.BEA_API_URL || "http://localhost:3001";

export async function POST(request) {
  const body = await request.json();

  const upstream = await fetch(`${BEA_API}/api/ai-tutor`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "X-Forwarded-For": request.headers.get("x-forwarded-for") || "127.0.0.1",
    },
    body: JSON.stringify(body),
  });

  return new Response(upstream.body, {
    status: upstream.status,
    headers: {
      "Content-Type": "text/event-stream",
      "Cache-Control": "no-cache",
      Connection: "keep-alive",
    },
  });
}
