import React, { useContext, useState, useEffect } from "react";
import { useUser } from "./UserContext";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../firebase";
import { snapshotToObjectsArray } from "../helpers/firestore";

const InvoicesContext = React.createContext();

export function useInvoices() {
  return useContext(InvoicesContext);
}

export function InvoiceProvider({ children }) {
  const [invoices, setInvoices] = useState([]);
  const [loading, setLoading] = useState(true);
  const currentUser = useUser();

  useEffect(() => {
    if (!currentUser) {
      setLoading(false);
      setInvoices([]);
    }

    if (currentUser) {
      const collectionRef = collection(db, currentUser.uid);
      getDocs(collectionRef)
        .then((snapshot) => snapshotToObjectsArray(snapshot))
        .then((data) => setInvoices(data))
        .then(() => setLoading(false))
        .catch((error) => console.log(error));
    }
  }, [currentUser]);

  return (
    <InvoicesContext.Provider value={invoices}>
      {!loading && children}
    </InvoicesContext.Provider>
  );
}
