import { NextRequest } from "next/server";

const API_KEY =
  process.env.FINNHUB_API_KEY;

export async function GET(
  request: NextRequest
) {
  const searchParams =
    request.nextUrl.searchParams;

  const query =
    searchParams.get("q");

  if (!query) {
    return Response.json([]);
  }

  const response = await fetch(
    `https://finnhub.io/api/v1/search?q=${query}&token=${API_KEY}`,
    {
      next: {
        revalidate: 3600,
      },
    }
  );

  const data = await response.json();

  return Response.json(
    data.result.slice(0, 5)
  );
}