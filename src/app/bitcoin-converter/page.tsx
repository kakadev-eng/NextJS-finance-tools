"use client";

import { useEffect, useState } from "react";

export default function BitcoinConverterPage() {
  const [btcAmount, setBtcAmount] =
    useState(1);

  const [bitcoinPrice, setBitcoinPrice] =
    useState(0);

  useEffect(() => {
    async function loadPrice() {
      const response = await fetch(
        "/api/bitcoin-price"
      );

      const data = await response.json();

      setBitcoinPrice(data.price);
    }

    loadPrice();
  }, []);

  const total =
    btcAmount * bitcoinPrice;

  return (
    <main className="mx-auto max-w-5xl p-8">
      <h1 className="mb-2 text-5xl font-bold">
        Bitcoin Converter
      </h1>

      <p className="mb-10 text-zinc-400">
        Convert Bitcoin to USD instantly.
      </p>

      <div className="grid gap-8 lg:grid-cols-2">
        <div className="rounded-2xl border border-zinc-800 p-6">
          <label className="mb-2 block">
            Bitcoin Amount (BTC)
          </label>

          <input
            type="number"
            value={btcAmount}
            onChange={(e) =>
              setBtcAmount(
                Number(e.target.value)
              )
            }
            className="w-full rounded-xl bg-zinc-900 p-3"
          />
        </div>

        <div className="rounded-2xl border border-zinc-800 p-6">
          <p className="mb-2 text-zinc-400">
            Current BTC Price
          </p>

          <h2 className="mb-8 text-3xl font-bold">
            $
            {bitcoinPrice.toLocaleString(
              "en-US"
            )}
          </h2>

          <p className="text-zinc-400">
            Converted Value
          </p>

          <h3 className="text-5xl font-bold text-green-400">
            $
            {total.toLocaleString(
              "en-US",
              {
                maximumFractionDigits: 2,
              }
            )}
          </h3>
        </div>
      </div>
    </main>
  );
}