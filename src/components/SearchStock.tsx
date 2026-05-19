"use client";

import { useState } from "react";

import { useRouter } from "next/navigation";

type Stock = {
  description: string;
  symbol: string;
};

export function SearchStock() {
  const router = useRouter();

  const [query, setQuery] =
    useState("");

  const [results, setResults] =
    useState<Stock[]>([]);

  async function handleSearch(
    value: string
  ) {
    setQuery(value);

    if (!value) {
      setResults([]);

      return;
    }

    const response = await fetch(
      `/api/search-stock?q=${value}`
    );

    const data = await response.json();

    setResults(data);
  }

  return (
    <div className="relative w-full max-w-xl">
      <input
        type="text"
        value={query}
        onChange={(e) =>
          handleSearch(e.target.value)
        }
        placeholder="Search stocks..."
        className="w-full rounded-2xl border border-zinc-700 bg-zinc-900 p-4 text-white outline-none"
      />

      {results.length > 0 && (
        <div className="absolute mt-2 w-full rounded-2xl border border-zinc-800 bg-zinc-900 shadow-2xl">
          {results.map((stock) => (
            <button
              key={stock.symbol}
              onClick={() =>
                router.push(
                  `/stocks/${stock.symbol.toLowerCase()}`
                )
              }
              className="flex w-full flex-col border-b border-zinc-800 p-4 text-left transition hover:bg-zinc-800"
            >
              <span className="font-bold">
                {stock.symbol}
              </span>

              <span className="text-sm text-zinc-400">
                {stock.description}
              </span>
            </button>
          ))}
        </div>
      )}
    </div>
  );
}