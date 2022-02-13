import React from "react";
import { useNavigate, useParams } from "react-router-dom";
import { motion } from "framer-motion";
import { useInvoices } from "../../contexts/InvoicesContext";

import InvoiceDetail from "../../components/InvoiceDetail/InvoiceDetail";
import Alert from "../../components/Alert/Alert";
import "./Invoice.scss";

export default function InvoicePage() {
  const invoices = useInvoices();
  const navigate = useNavigate();
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
        <button className="detail__back" onClick={() => navigate(-1)}>
          Go back
        </button>

        <aside className="detail__aside">
          <Status data={invoice.status} />
          <Controls />
        </aside>

        <InvoiceDetail data={invoice} />
      </motion.main>
    </>
  );
}

function Status({ data }) {
  return (
    <span className="detail__status">
      <p className="txt--secondary">Status</p>
      <Alert type={data} children={data} />
    </span>
  );
}

function Controls() {
  return (
    <span className="detail__controls">
      <button className="button button--2">Edit</button>
      <button className="button button--4">Delete</button>
      <button className="button button--1">Mark as Paid</button>
    </span>
  );
}
