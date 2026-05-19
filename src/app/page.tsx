import Link from "next/link";

import { MarketCard } from "@/components/MarketCard";

import { getCryptoPrices } from "@/services/crypto";

import { getStockQuote } from "@/services/stock";

import { SearchStock } from "@/components/SearchStock";

import { AdBanner } from "@/components/AdBanner";

import { trendingStocks } from "@/constants/trendingStock";

import { trendingCrypto } from "@/constants/trendingCrypto";

import { getCryptoPrice } from "@/services/crypto";

import { TrendingCard } from "@/components/TrendingCard";

export default async function Home() {
  const crypto = await getCryptoPrices();

  const apple = await getStockQuote("AAPL");

  const tesla = await getStockQuote("TSLA");

  const nvidia = await getStockQuote("NVDA");

  const amazon = await getStockQuote("AMZN");

  const stocks = await Promise.all(
    trendingStocks.map(async (symbol) => {
      const data = await getStockQuote(symbol);

      return {
        symbol,
        value: data.current,
      };
    }),
  );

  const cryptos = await Promise.all(
    trendingCrypto.map(async (symbol) => {
      const data = await getCryptoPrice(symbol);

      return {
        symbol,
        value: data.current,
      };
    }),
  );

  return (
    <main className="mx-auto max-w-7xl p-8">
      <section className="mb-16">
        <AdBanner />
        <h1 className="mb-4 text-7xl font-bold leading-tight">
          Smart Finance Tools
        </h1>

        <div className="mt-10">
          <SearchStock />
        </div>

        <p className="max-w-2xl text-xl text-zinc-400">
          Financial calculators, bitcoin converter, stock prices and market
          insights.
        </p>
      </section>

      <section className="mb-16">
        <h2 className="mb-6 text-3xl font-bold">Crypto Market</h2>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          <MarketCard
            title="Bitcoin"
            price={`$${crypto.bitcoin.price.toLocaleString("en-US")}`}
            change={crypto.bitcoin.change.toFixed(2)}
          />

          <MarketCard
            title="Ethereum"
            price={`$${crypto.ethereum.price.toLocaleString("en-US")}`}
            change={crypto.ethereum.change.toFixed(2)}
          />
        </div>
      </section>

      <section className="mt-20">
        <div className="mb-8 flex items-center justify-between">
          <h2 className="text-4xl font-bold">Trending Crypto</h2>
        </div>

        <div className="grid gap-6 md:grid-cols-3">
          {cryptos.map((crypto) => (
            <TrendingCard
              key={crypto.symbol}
              title={crypto.symbol}
              value={crypto.value}
              href={`/crypto/${crypto.symbol.toLowerCase()}`}
            />
          ))}
        </div>
      </section>

      <section className="mt-20">
        <div className="mb-8 flex items-center justify-between">
          <h2 className="text-4xl font-bold">Trending Stocks</h2>
        </div>

        <div className="grid gap-6 md:grid-cols-3">
          {stocks.map((stock) => (
            <TrendingCard
              key={stock.symbol}
              title={stock.symbol}
              value={stock.value}
              href={`/stocks/${stock.symbol.toLowerCase()}`}
            />
          ))}
        </div>
      </section>

      <section className="mb-16">
        <h2 className="mb-6 text-3xl font-bold">Top Stocks</h2>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          <MarketCard
            title="Apple"
            price={`$${apple.current}`}
            change={apple.changePercent.toFixed(2)}
          />

          <MarketCard
            title="Tesla"
            price={`$${tesla.current}`}
            change={tesla.changePercent.toFixed(2)}
          />

          <MarketCard
            title="Nvidia"
            price={`$${nvidia.current}`}
            change={nvidia.changePercent.toFixed(2)}
          />

          <MarketCard
            title="Amazon"
            price={`$${amazon.current}`}
            change={amazon.changePercent.toFixed(2)}
          />
        </div>
      </section>

      <section>
        <h2 className="mb-8 text-4xl font-bold">Popular Tools</h2>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          <Link
            href="/compound-interest-calculator"
            className="rounded-2xl border border-zinc-800 bg-zinc-900 p-6"
          >
            <h3 className="mb-3 text-2xl font-bold">Compound Interest</h3>

            <p className="text-zinc-400">Calculate investment growth.</p>
          </Link>

          <Link
            href="/bitcoin-converter"
            className="rounded-2xl border border-zinc-800 bg-zinc-900 p-6"
          >
            <h3 className="mb-3 text-2xl font-bold">Bitcoin Converter</h3>

            <p className="text-zinc-400">Convert BTC instantly.</p>
          </Link>

          <Link
            href="/currency-converter"
            className="rounded-2xl border border-zinc-800 bg-zinc-900 p-6"
          >
            <h3 className="mb-3 text-2xl font-bold">Currency Converter</h3>

            <p className="text-zinc-400">Convert world currencies.</p>
          </Link>
        </div>
      </section>
    </main>
  );
}
