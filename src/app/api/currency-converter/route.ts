import { NextRequest, NextResponse } from "next/server";

export async function GET(
  request: NextRequest
) {
  const searchParams =
    request.nextUrl.searchParams;

  const from =
    searchParams.get("from") || "USD";

  const to =
    searchParams.get("to") || "BRL";

  const amount = Number(
    searchParams.get("amount") || 1
  );

  const response = await fetch(
    `https://open.er-api.com/v6/latest/${from}`,
    {
      next: {
        revalidate: 3600,
      },
    }
  );

  const data = await response.json();

  const rate = data.rates[to];

  return NextResponse.json({
    result: amount * rate,
    rate,
  });
}