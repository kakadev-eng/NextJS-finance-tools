"use client";

import Script from "next/script";

const ADSENSE_ID =
  process.env.NEXT_PUBLIC_ADSENSE_ID!;

export function GoogleAdSense() {
  return (
    <Script
      async
      strategy="afterInteractive"
      crossOrigin="anonymous"
      src={`https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=${ADSENSE_ID}`}
    />
  );
}