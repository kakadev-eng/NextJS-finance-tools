type Props = {
  title: string;
  price: string;
  change: string;
};

export function MarketCard({
  title,
  price,
  change,
}: Props) {
  const isPositive =
    Number(change) >= 0;

  return (
    <div
      className="
        rounded-3xl
        border
        border-zinc-800/80
        bg-zinc-900/60
        p-6
        backdrop-blur-xl
        transition
        hover:-translate-y-1
        hover:border-zinc-700
      "
    >
      <p className="mb-3 text-zinc-400">
        {title}
      </p>

      <h2 className="mb-3 text-3xl font-bold tracking-tight">
        {price}
      </h2>

      <span
        className={`text-sm font-semibold ${
          isPositive
            ? "text-green-400"
            : "text-red-400"
        }`}
      >
        {change}%
      </span>
    </div>
  );
}