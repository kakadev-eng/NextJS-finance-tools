import Link from "next/link";

export function Footer() {
  return (
    <footer className="mt-20 border-t border-zinc-800 py-10">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-8">
        <p className="text-sm text-zinc-500">© 2026 FinanceTools</p>

        <div className="flex gap-6 text-sm text-zinc-400">
          <Link href="/privacy-policy">Privacy</Link>

          <Link href="/terms">Terms</Link>

          <Link href="/blog">Blog</Link>
          <Link href="/about">About</Link>
        </div>
      </div>
    </footer>
  );
}
