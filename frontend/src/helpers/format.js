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
