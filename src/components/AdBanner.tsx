"use client";

import { useEffect } from "react";

declare global {
  interface Window {
    adsbygoogle: unknown[];
  }
}

type Props = {
  adSlot: string;
};

export function AdBanner({
  adSlot,
}: Props) {
  useEffect(() => {
    try {
      (
        window.adsbygoogle =
          window.adsbygoogle || []
      ).push({});
    } catch (err) {
      console.log(err);
    }
  }, []);

  return (
    <div className="overflow-hidden rounded-2xl border border-zinc-800 bg-zinc-900 p-4">
      <ins
        className="adsbygoogle"
        style={{
          display: "block",
        }}
        data-ad-client={
          process.env
            .NEXT_PUBLIC_ADSENSE_ID
        }
        data-ad-slot={adSlot}
        data-ad-format="auto"
        data-full-width-responsive="true"
      />
    </div>
  );
}