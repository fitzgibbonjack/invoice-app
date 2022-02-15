import React, { useContext, useState, useEffect } from "react";
import { collection, onSnapshot, getDocs } from "firebase/firestore";
import { db, auth } from "../firebase";
import { onAuthStateChanged } from "firebase/auth";
import { snapshotToObjectsArray } from "../helpers/firestore";

const InvoicesContext = React.createContext();

export function useInvoices() {
  return useContext(InvoicesContext);
}

export function InvoiceProvider({ children }) {
  const [invoices, setInvoices] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      setLoading(true);
      if (user != null) {
        const collectionRef = collection(db, user.uid);
        onSnapshot(collectionRef, (docs) => {
          const data = snapshotToObjectsArray(docs);
          setInvoices(data);
          setLoading(false);
        });
      } else {
        setLoading(false);
        setInvoices([]);
      }
    });

    return () => {
      unsubscribe();
    };
  }, []);

  return (
    <InvoicesContext.Provider value={invoices}>
      {!loading && children}
    </InvoicesContext.Provider>
  );
}
