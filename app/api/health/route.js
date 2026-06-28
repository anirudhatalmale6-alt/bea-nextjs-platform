export async function GET() {
  return Response.json({
    status: "ok",
    service: "bea-nextjs",
    timestamp: new Date().toISOString(),
  });
}
