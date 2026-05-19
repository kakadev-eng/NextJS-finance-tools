export default function LoadingStock() {
  return (
    <main className="mx-auto max-w-5xl p-8 animate-pulse">
      <div className="mb-10">
        <div className="mb-4 h-16 w-72 rounded-xl bg-zinc-800" />

        <div className="h-5 w-64 rounded-xl bg-zinc-800" />
      </div>

      <div className="rounded-3xl bg-zinc-900 p-8">
        <div className="mb-8 h-6 w-40 rounded-xl bg-zinc-800" />

        <div className="mb-10 h-16 w-52 rounded-xl bg-zinc-800" />

        <div className="h-6 w-32 rounded-xl bg-zinc-800" />
      </div>

      <div className="mt-10 rounded-3xl bg-zinc-900 p-8">
        <div className="mb-8 h-10 w-52 rounded-xl bg-zinc-800" />

        <div className="h-[350px] rounded-2xl bg-zinc-800" />
      </div>
    </main>
  );
}