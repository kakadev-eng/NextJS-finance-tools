import {
  getStockQuote,
  getStockCandles,
} from "@/services/stock";

import { StockChart } from "@/components/StockChart";

type Props = {
  params: Promise<{
    symbol: string;
  }>;
};

export async function generateMetadata({
  params,
}: Props) {
  const { symbol } = await params;

  const formattedSymbol =
    symbol.toUpperCase();

  return {
    title: `${formattedSymbol} Stock Price`,
    description: `Track ${formattedSymbol} stock price and market performance.`,
  };
}

export default async function StockPage({
  params,
}: Props) {
  const { symbol } = await params;

  const formattedSymbol =
    symbol.toUpperCase();

  const stock =
    await getStockQuote(
      formattedSymbol
    );

  const chartData =
    await getStockCandles(
      formattedSymbol
    );

  return (
    <main className="mx-auto max-w-5xl p-8">
      <div className="mb-10">
        <h1 className="mb-2 text-7xl font-bold">
          {formattedSymbol} Stock
        </h1>

        <p className="text-zinc-400">
          Real-time stock market data.
        </p>
      </div>

      <div className="rounded-2xl border border-zinc-800 bg-zinc-900 p-8">
        <div className="mb-8">
          <p className="mb-2 text-zinc-400">
            Current Price
          </p>

          <h2 className="text-5xl font-bold text-amber-50">
            $
            {stock.current.toLocaleString(
              "en-US"
            )}
          </h2>
        </div>

        <div>
          <p className="mb-2 text-zinc-400">
            Daily Change
          </p>

          <h3
            className={`text-3xl font-bold ${
              stock.changePercent >= 0
                ? "text-green-400"
                : "text-red-400"
            }`}
          >
            {stock.changePercent.toFixed(
              2
            )}
            %
          </h3>
        </div>
      </div>

      <div className="mt-10 rounded-2xl border border-zinc-800 bg-zinc-900 p-8">
        <h2 className="mb-8 text-3xl font-bold">
          Price Chart
        </h2>

        <StockChart data={chartData} />
      </div>
    </main>
  );
}