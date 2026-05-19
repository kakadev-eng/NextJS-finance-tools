import { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: "https://finance-tools.vercel.app",

      lastModified: new Date(),
    },

    {
      url:
        "https://finance-tools.vercel.app/compound-interest-calculator",

      lastModified: new Date(),
    },

    {
      url:
        "https://finance-tools.vercel.app/bitcoin-converter",

      lastModified: new Date(),
    },

    {
      url:
        "https://finance-tools.vercel.app/currency-converter",

      lastModified: new Date(),
    },
  ];
}