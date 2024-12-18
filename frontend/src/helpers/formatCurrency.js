export function formatCurrency(value) {
  const intl = new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
  });
  return intl.format(value);
}
