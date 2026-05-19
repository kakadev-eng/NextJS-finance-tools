import { NextResponse } from "next/server";

export async function GET() {
  const response = await fetch(
    "https://api.coingecko.com/api/v3/simple/price?ids=bitcoin&vs_currencies=usd",
    {
      next: {
        revalidate: 60,
      },
    }
  );

  const data = await response.json();

  return NextResponse.json({
    price: data.bitcoin.usd,
  });
}