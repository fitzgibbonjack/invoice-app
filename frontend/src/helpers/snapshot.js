export const snapshotToObjectsArray = (snapshot) => {
  let invoices = [];

  snapshot.docs.forEach((doc) => {
    invoices.push({ ...doc.data(), id: doc.id });
  });

  return invoices;
};
