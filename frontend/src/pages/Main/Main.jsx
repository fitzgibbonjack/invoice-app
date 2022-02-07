import React, { useEffect, useState } from "react";
import { useUser } from "../../contexts/UserContext";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../../firebase";
import { snapshotToObjectsArray } from "../../helpers/firestore";

import Invoice from "../../components/Invoice/Invoice";
import Splash from "../../components/Splash/Splash";
import "./Main.scss";

export default function Main() {
  const [invoices, setInvoices] = useState([]);
  const [loading, setLoading] = useState(true);
  const currentUser = useUser();

  // get invoices from db
  useEffect(() => {
    if (!currentUser) return setLoading(false);

    if (currentUser) {
      const collectionRef = collection(db, currentUser.uid);
      getDocs(collectionRef)
        .then((snapshot) => snapshotToObjectsArray(snapshot))
        .then((data) => setInvoices(data))
        .then(() => setLoading(false))
        .catch((error) => console.log(error));
    }
  }, [currentUser]);

  if (loading) return null;
  if (!currentUser) return <Splash login />;
  return (
    <main className="container">
      <div className="actions">
        <h1>Invoices</h1>
        <p>{`${invoices.length} Invoices`}</p>
      </div>

      {invoices.length === 0 && <Splash />}

      <ol className="invoices">
        {invoices.length > 0 &&
          invoices.map((invoice) => (
            <li key={invoice.id}>
              <Invoice data={invoice} />
            </li>
          ))}
      </ol>
    </main>
  );
}
