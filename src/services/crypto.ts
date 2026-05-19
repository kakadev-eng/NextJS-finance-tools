
const API_KEY =
  process.env.FINNHUB_API_KEY;
export async function getCryptoPrices() {
  const response = await fetch(
    "https://api.coingecko.com/api/v3/simple/price?ids=bitcoin,ethereum&vs_currencies=usd&include_24hr_change=true",
    {
      next: {
        revalidate: 60,
      },
    }
  );

  const data = await response.json();
  
  return {
    bitcoin: {
      price: data.bitcoin.usd,
      change:
        data.bitcoin.usd_24h_change,
    },

    ethereum: {
      price: data.ethereum.usd,
      change:
        data.ethereum.usd_24h_change,
    },
  };
}

export async function getCryptoPrice(
  symbol: string
) {
  const response = await fetch(
    `https://finnhub.io/api/v1/quote?symbol=BINANCE:${symbol}USDT&token=${API_KEY}`,
    {
      next: {
        revalidate: 60,
      },
    }
  );

  const data = await response.json();

  return {
    current: data.c,
    high: data.h,
    low: data.l,
    open: data.o,
  };
}