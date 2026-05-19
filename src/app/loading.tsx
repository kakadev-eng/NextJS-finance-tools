export default function Loading() {
  return (
    <main className="mx-auto max-w-7xl p-8">
      <div className="animate-pulse">
        <div className="mb-8 h-14 w-96 rounded-xl bg-zinc-800" />

        <div className="mb-12 h-6 w-[500px] rounded-xl bg-zinc-800" />

        <div className="grid gap-6 md:grid-cols-3">
          <div className="h-40 rounded-3xl bg-zinc-900" />

          <div className="h-40 rounded-3xl bg-zinc-900" />

          <div className="h-40 rounded-3xl bg-zinc-900" />
        </div>
      </div>
    </main>
  );
}