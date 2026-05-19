import { getCryptoPrice } from "@/services/crypto";

type Props = {
  params: Promise<{
    slug: string;
  }>;
};

export async function generateMetadata({
  params,
}: Props) {
  const { slug } = await params;

  const crypto =
    slug.toUpperCase();

  return {
    title: `${crypto} Price`,
    description: `Track ${crypto} live crypto price.`,
  };
}

export default async function CryptoPage({
  params,
}: Props) {
  const { slug } = await params;

  const crypto =
    slug.toUpperCase();

  const data =
    await getCryptoPrice(crypto);

  return (
    <main className="mx-auto max-w-5xl p-8">
      <div className="mb-10">
        <h1 className="mb-4 text-6xl font-bold">
          {crypto} Price
        </h1>

        <p className="text-zinc-400">
          Live cryptocurrency market data.
        </p>
      </div>

      <div className="rounded-3xl border border-zinc-800 bg-zinc-900/60 p-8 backdrop-blur-xl">
        <div className="mb-8">
          <p className="mb-2 text-zinc-400">
            Current Price
          </p>

          <h2 className="text-5xl font-bold">
            $
            {data.current?.toLocaleString(
              "en-US"
            )}
          </h2>
        </div>

        <div className="grid gap-6 md:grid-cols-3">
          <div>
            <p className="text-zinc-400">
              High
            </p>

            <h3 className="text-2xl font-bold text-green-400">
              $
              {data.high?.toLocaleString(
                "en-US"
              )}
            </h3>
          </div>

          <div>
            <p className="text-zinc-400">
              Low
            </p>

            <h3 className="text-2xl font-bold text-red-400">
              $
              {data.low?.toLocaleString(
                "en-US"
              )}
            </h3>
          </div>

          <div>
            <p className="text-zinc-400">
              Open
            </p>

            <h3 className="text-2xl font-bold">
              $
              {data.open?.toLocaleString(
                "en-US"
              )}
            </h3>
          </div>
        </div>
      </div>
    </main>
  );
}