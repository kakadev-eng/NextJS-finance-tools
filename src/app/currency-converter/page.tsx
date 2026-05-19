"use client";

import { useEffect, useState } from "react";

const currencies = [
  "USD",
  "BRL",
  "EUR",
  "GBP",
  "JPY",
];

export default function CurrencyConverterPage() {
  const [amount, setAmount] =
    useState(1);

  const [from, setFrom] =
    useState("USD");

  const [to, setTo] =
    useState("BRL");

  const [result, setResult] =
    useState(0);

  const [rate, setRate] =
    useState(0);

  useEffect(() => {
    async function convert() {
      const response = await fetch(
        `/api/currency-converter?from=${from}&to=${to}&amount=${amount}`
      );

      const data = await response.json();

      setResult(data.result);

      setRate(data.rate);
    }

    convert();
  }, [amount, from, to]);

  return (
    <main className="mx-auto max-w-5xl p-8">
      <h1 className="mb-2 text-5xl font-bold">
        Currency Converter
      </h1>

      <p className="mb-10 text-zinc-400">
        Convert currencies instantly.
      </p>

      <div className="grid gap-8 lg:grid-cols-2">
        <div className="rounded-2xl border border-zinc-800 p-6">
          <div className="mb-6">
            <label className="mb-2 block">
              Amount
            </label>

            <input
              type="number"
              value={amount}
              onChange={(e) =>
                setAmount(
                  Number(e.target.value)
                )
              }
              className="w-full rounded-xl bg-zinc-900 p-3"
            />
          </div>

          <div className="grid gap-4 md:grid-cols-2">
            <div>
              <label className="mb-2 block">
                From
              </label>

              <select
                value={from}
                onChange={(e) =>
                  setFrom(e.target.value)
                }
                className="w-full rounded-xl bg-zinc-900 p-3"
              >
                {currencies.map((currency) => (
                  <option
                    key={currency}
                    value={currency}
                  >
                    {currency}
                  </option>
                ))}
              </select>
            </div>

            <div>
              <label className="mb-2 block">
                To
              </label>

              <select
                value={to}
                onChange={(e) =>
                  setTo(e.target.value)
                }
                className="w-full rounded-xl bg-zinc-900 p-3"
              >
                {currencies.map((currency) => (
                  <option
                    key={currency}
                    value={currency}
                  >
                    {currency}
                  </option>
                ))}
              </select>
            </div>
          </div>
        </div>

        <div className="rounded-2xl border border-zinc-800 p-6">
          <p className="mb-2 text-zinc-400">
            Exchange Rate
          </p>

          <h2 className="mb-8 text-3xl font-bold">
            {rate.toFixed(2)}
          </h2>

          <p className="text-zinc-400">
            Converted Amount
          </p>

          <h3 className="text-5xl font-bold text-green-400">
            {result.toLocaleString(
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