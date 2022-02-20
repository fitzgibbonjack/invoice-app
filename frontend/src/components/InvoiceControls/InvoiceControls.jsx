import React from "react";
import { useLocation, Link } from "react-router-dom";
import { db } from "../../firebase";
import { doc, updateDoc } from "firebase/firestore";
import { useUser } from "../../contexts/UserContext";
import "./InvoiceControls.scss";

export default function InvoiceControls({ invoice }) {
  const user = useUser();
  const location = useLocation();

  const handleMarkPaid = () => {
    const invoiceRef = doc(db, user.uid, invoice.id);
    updateDoc(invoiceRef, { status: "paid" })
      .then(() => console.log("status changed to paid"))
      .catch((error) => console.log(error));
  };

  return (
    <span className="card detail__controls">
      <button className="button--2">Edit</button>

      <Link
        to={`/${invoice.id}/delete`}
        className="button--4"
        state={{ background: location, id: invoice.id }}
      >
        Delete
      </Link>

      <button
        className="button--1"
        onClick={handleMarkPaid}
        disabled={invoice.status === "paid"}
      >
        Mark as Paid
      </button>
    </span>
  );
}
