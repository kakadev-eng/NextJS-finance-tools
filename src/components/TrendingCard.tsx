import Link from "next/link";

type Props = {
  title: string;
  value: number;
  href: string;
};

export function TrendingCard({
  title,
  value,
  href,
}: Props) {
  return (
    <Link
      href={href}
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

      <h2 className="text-3xl font-bold">
        $
        {value?.toLocaleString(
          "en-US"
        )}
      </h2>
    </Link>
  );
}