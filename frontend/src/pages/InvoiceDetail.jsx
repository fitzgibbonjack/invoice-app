import React from "react";
import { useNavigate, useParams } from "react-router-dom";
import { motion } from "framer-motion";
import { useInvoices } from "../contexts/InvoicesContext";

import Alert from "../components/Alert/Alert";
import "./InvoiceDetail.scss";

export default function InvoiceDetail() {
  const { invoiceId } = useParams();
  const navigate = useNavigate();

  const invoices = useInvoices();
  const invoice = invoices.find((invoice) => invoice.id === invoiceId);

  return (
    <motion.main
      className="container detail"
      initial={{ opacity: 0, x: "10rem" }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: "10rem" }}
    >
      <button className="detail__goBack" onClick={() => navigate(-1)}>
        Go back
      </button>

      <header className="detail__status">
        <p className="txt--secondary">Status</p>
        <Alert type={invoice.status} children={invoice.status} />
      </header>
    </motion.main>
  );
}
