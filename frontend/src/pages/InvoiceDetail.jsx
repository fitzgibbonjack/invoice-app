import React from "react";
import { Link, useParams } from "react-router-dom";
import { motion } from "framer-motion";
import { useInvoices } from "../contexts/InvoicesContext";

import Alert from "../components/Alert/Alert";

import "./InvoiceDetail.scss";

export default function InvoiceDetail() {
  const { invoiceId } = useParams();
  const invoices = useInvoices();
  const invoice = invoices.find((invoice) => invoice.id === invoiceId);

  return (
    <motion.main
      className="container detail"
      initial={{ opacity: 0, x: "10rem" }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: "10rem" }}
    >
      <Link to="/" className="detail__goBack">
        Go back
      </Link>

      <header className="detail__status">
        <p className="txt--secondary">{invoice.status}</p>
        <Alert type={invoice.status} children={invoice.status} />
      </header>
    </motion.main>
  );
}
