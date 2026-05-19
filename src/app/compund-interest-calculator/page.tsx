"use client";

import { useMemo, useState } from "react";

export default function CompoundInterestPage() {
  const [initialAmount, setInitialAmount] =
    useState(1000);

  const [monthlyContribution, setMonthlyContribution] =
    useState(200);

  const [interestRate, setInterestRate] =
    useState(10);

  const [years, setYears] = useState(10);

  const result = useMemo(() => {
    const monthlyRate = interestRate / 100 / 12;

    const months = years * 12;

    let balance = initialAmount;

    let invested = initialAmount;

    for (let i = 0; i < months; i++) {
      balance =
        balance * (1 + monthlyRate) +
        monthlyContribution;

      invested += monthlyContribution;
    }

    return {
      finalBalance: balance,
      invested,
      interestEarned:
        balance - invested,
    };
  }, [
    initialAmount,
    monthlyContribution,
    interestRate,
    years,
  ]);

  return (
    <main className="mx-auto max-w-6xl p-8">
      <h1 className="mb-2 text-5xl font-bold">
        Compound Interest Calculator
      </h1>

      <p className="mb-10 text-zinc-400">
        Calculate investment growth over time.
      </p>

      <div className="grid gap-8 lg:grid-cols-2">
        <div className="rounded-2xl border border-zinc-800 p-6">
          <div className="mb-6">
            <label className="mb-2 block">
              Initial Investment ($)
            </label>

            <input
              type="number"
              value={initialAmount}
              onChange={(e) =>
                setInitialAmount(
                  Number(e.target.value)
                )
              }
              className="w-full rounded-xl bg-zinc-900 p-3"
            />
          </div>

          <div className="mb-6">
            <label className="mb-2 block">
              Monthly Contribution ($)
            </label>

            <input
              type="number"
              value={monthlyContribution}
              onChange={(e) =>
                setMonthlyContribution(
                  Number(e.target.value)
                )
              }
              className="w-full rounded-xl bg-zinc-900 p-3"
            />
          </div>

          <div className="mb-6">
            <label className="mb-2 block">
              Interest Rate (%)
            </label>

            <input
              type="number"
              value={interestRate}
              onChange={(e) =>
                setInterestRate(
                  Number(e.target.value)
                )
              }
              className="w-full rounded-xl bg-zinc-900 p-3"
            />
          </div>

          <div>
            <label className="mb-2 block">
              Years
            </label>

            <input
              type="number"
              value={years}
              onChange={(e) =>
                setYears(
                  Number(e.target.value)
                )
              }
              className="w-full rounded-xl bg-zinc-900 p-3"
            />
          </div>
        </div>

        <div className="rounded-2xl border border-zinc-800 p-6">
          <h2 className="mb-8 text-3xl font-bold">
            Results
          </h2>

          <div className="mb-6">
            <p className="text-zinc-400">
              Final Balance
            </p>

            <h3 className="text-4xl font-bold">
              $
              {result.finalBalance.toLocaleString(
                "en-US",
                {
                  maximumFractionDigits: 0,
                }
              )}
            </h3>
          </div>

          <div className="mb-6">
            <p className="text-zinc-400">
              Total Invested
            </p>

            <h3 className="text-2xl font-bold">
              $
              {result.invested.toLocaleString(
                "en-US",
                {
                  maximumFractionDigits: 0,
                }
              )}
            </h3>
          </div>

          <div>
            <p className="text-zinc-400">
              Interest Earned
            </p>

            <h3 className="text-2xl font-bold text-green-400">
              $
              {result.interestEarned.toLocaleString(
                "en-US",
                {
                  maximumFractionDigits: 0,
                }
              )}
            </h3>
          </div>
        </div>
      </div>
    </main>
  );
}