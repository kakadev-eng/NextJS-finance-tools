export async function convertCurrency(
  from: string,
  to: string,
  amount: number
) {
  const response = await fetch(
    `https://open.er-api.com/v6/latest/${from}`,
    {
      next: {
        revalidate: 3600,
      },
    }
  );

  const data = await response.json();

  const rate = data.rates[to];

  return amount * rate;
}