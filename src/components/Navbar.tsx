import Link from "next/link";

export function Navbar() {
  return (
    <header
      className="
        sticky
        top-0
        z-50
        border-b
        border-zinc-800/80
        bg-zinc-950/70
        backdrop-blur-xl
      "
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between p-4">
        <Link
          href="/"
          className="text-2xl font-bold tracking-tight"
        >
          FinanceTools
        </Link>

        <nav className="flex gap-6 text-sm text-zinc-400">
          <Link href="/">
            Home
          </Link>

          <Link href="/blog">
            Blog
          </Link>

          <Link href="/compound-interest-calculator">
            Compound
          </Link>

          <Link href="/bitcoin-converter">
            Bitcoin
          </Link>
        </nav>
      </div>
    </header>
  );
}