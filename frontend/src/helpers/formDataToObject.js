import { Timestamp } from "firebase/firestore";

export function formDataToObject(data, items, status) {
  // calculate payment due date in ms
  const daysInMs = data.get("paymentTerms") * 24 * 60 * 60 * 1000;
  const paymentDue = Date.now() + daysInMs;

  // calculate total
  const calculateTotal = () => {
    let total = 0;
    items.forEach((item) => {
      total += item.total;
    });
    return total;
  };

  return {
    createdAt: Timestamp.fromDate(new Date()),
    paymentDue: Timestamp.fromDate(new Date(paymentDue)),
    description: data.get("projectDescription"),
    clientName: data.get("clientName"),
    clientEmail: data.get("clientEmail"),
    status: status,
    senderAddress: {
      street: data.get("streetAddress0"),
      city: data.get("city0"),
      postcode: data.get("postcode0"),
      country: data.get("country0"),
    },
    clientAddress: {
      street: data.get("streetAddress1"),
      city: data.get("city1"),
      postcode: data.get("postcode1"),
      country: data.get("country1"),
    },
    items: [...items],
    total: calculateTotal(),
  };
}
