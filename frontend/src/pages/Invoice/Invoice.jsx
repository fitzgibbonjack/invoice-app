import React from "react";
import { useParams, useLocation, Link } from "react-router-dom";
import { motion } from "framer-motion";
import { useInvoices } from "../../contexts/InvoicesContext";
import { db } from "../../firebase";
import { doc, updateDoc } from "firebase/firestore";
import { useUser } from "../../contexts/UserContext";

import GoBack from "../../components/GoBack/GoBack";
import InvoiceDetail from "../../components/InvoiceDetail/InvoiceDetail";
import Alert from "../../components/Alert/Alert";
import "./Invoice.scss";

export default function InvoicePage() {
  const invoices = useInvoices();
  const { invoiceId } = useParams();

  const invoice = invoices.find((invoice) => invoice.id === invoiceId);

  return (
    <>
      <motion.main
        className="container detail"
        initial={{ opacity: 0, x: "10rem" }}
        animate={{ opacity: 1, x: 0 }}
        exit={{ opacity: 0, x: "10rem" }}
      >
        <GoBack />

        <aside className="detail__aside">
          <Status data={invoice.status} />
          <Controls invoice={invoice} />
        </aside>

        <InvoiceDetail data={invoice} />
      </motion.main>
    </>
  );
}

// COMPONENTS
function Status({ data }) {
  return (
    <span className="detail__status">
      <p className="txt--secondary">Status</p>
      <Alert type={data} children={data} />
    </span>
  );
}

function Controls({ invoice }) {
  const user = useUser();
  const location = useLocation();

  const handleMarkPaid = () => {
    if (invoice.status === "paid") return;
    const invoiceRef = doc(db, user.uid, invoice.id);
    updateDoc(invoiceRef, { status: "paid" })
      .then(() => console.log("status changed to paid"))
      .catch((error) => console.log(error));
  };

  return (
    <span className="detail__controls">
      <button className="button button--2">Edit</button>

      <Link
        to={`/${invoice.id}/delete`}
        className="button button--4"
        state={{ background: location, id: invoice.id }}
      >
        Delete
      </Link>

      <button className="button button--1" onClick={handleMarkPaid}>
        Mark as Paid
      </button>
    </span>
  );
}
