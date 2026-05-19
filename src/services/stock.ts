const API_KEY =
  process.env.FINNHUB_API_KEY;

export async function getStockQuote(
  symbol: string
) {
  const response = await fetch(
    `https://finnhub.io/api/v1/quote?symbol=${symbol}&token=${API_KEY}`,
    {
      next: {
        revalidate: 60,
      },
    }
  );

  const data = await response.json();

  return {
    current: data.c,
    changePercent: data.dp,
  };
}

export async function getStockCandles(
  symbol: string
) {
  const now = Math.floor(
    Date.now() / 1000
  );

  const oneMonthAgo =
    now - 60 * 60 * 24 * 30;

  const response = await fetch(
    `https://finnhub.io/api/v1/stock/candle?symbol=${symbol}&resolution=D&from=${oneMonthAgo}&to=${now}&token=${API_KEY}`,
    {
      next: {
        revalidate: 3600,
      },
    }
  );

  const data = await response.json();

  if (
    data.s !== "ok" ||
    !data.c ||
    !data.t
  ) {
    return [];
  }

  return data.c.map(
    (
      price: number,
      index: number
    ) => {
      const date = new Date(
        data.t[index] * 1000
      );

      return {
        day:
          date.toLocaleDateString(
            "en-US",
            {
              month: "short",
              day: "numeric",
            }
          ),

        price,
      };
    }
  );
}