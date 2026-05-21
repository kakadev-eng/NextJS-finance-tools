// "use client";

// import Script from "next/script";

// const ADSENSE_ID =
//   process.env.NEXT_PUBLIC_ADSENSE_ID!;

// export function GoogleAdSense() {
//   return (
//     <Script
//       async
//       strategy="afterInteractive"
//       crossOrigin="anonymous"
//       src={`https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=${ADSENSE_ID}`}
//     />
//   );
// }
"use client";

import { useEffect } from "react";

const ADSENSE_ID =
  process.env.NEXT_PUBLIC_ADSENSE_ID!;

export function GoogleAdSense() {
  useEffect(() => {
    const script =
      document.createElement("script");

    script.async = true;

    script.src = `https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=${ADSENSE_ID}`;

    script.crossOrigin = "anonymous";

    document.head.appendChild(script);

    console.log(
      "ADSENSE SCRIPT ADDED"
    );
  }, []);

  return null;
}