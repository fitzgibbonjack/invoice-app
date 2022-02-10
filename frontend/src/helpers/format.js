export const formatDate = (dateInSeconds) => {
  const dateInMs = dateInSeconds * 1000;
  let date = new Date(dateInMs);
  return date.toLocaleDateString(undefined, {
    day: "numeric",
    month: "short",
    year: "numeric",
  });
};

export const formatCurrency = (number) => {
  return number.toLocaleString(undefined, {
    minimumFractionDigits: 2,
    style: "currency",
    currency: "GBP",
  });
};

export const formatRemaining = (invoices, filtered) => {
  const remaining = filtered ? filtered.length : invoices.length;
  return remaining === 1 ? "1 Invoice" : `${remaining} invoices`;
};
