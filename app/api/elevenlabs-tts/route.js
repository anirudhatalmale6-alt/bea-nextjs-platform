const BEA_API = process.env.BEA_API_URL || "http://localhost:3001";

export async function POST(request) {
  const body = await request.json();

  const upstream = await fetch(`${BEA_API}/api/elevenlabs-tts`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(body),
  });

  const data = await upstream.json();
  return Response.json(data, { status: upstream.status });
}
