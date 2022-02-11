import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { formatDate, formatCurrency } from "../../helpers/format";

import Alert from "../Alert/Alert";
import IconArrowRight from "../../assets/icon-arrow-right.svg";
import "./Invoice.scss";

export default function Invoice({ invoice }) {
  return (
    <Link
      to={`/${invoice.id}`}
      style={{
        color: "inherit",
        fontWeight: "inherit",
        textDecoration: "none",
      }}
    >
      <motion.article className="invoice" layout>
        <h2 className="invoice__id txt--fs-400">
          <span className="txt--secondary">#</span>
          {invoice.id}
        </h2>

        <p className="invoice__due txt--secondary">
          {"Due " + formatDate(invoice.paymentDue.seconds)}
        </p>
        <p className="invoice__client txt--secondary">{invoice.clientName}</p>
        <p className="invoice__total txt--fw-700 txt--fs-500">
          {formatCurrency(invoice.total)}
        </p>

        <Alert
          className="invoice__status"
          type={invoice.status}
          children={invoice.status}
        />

        <img
          src={IconArrowRight}
          className="hide-for-mobile invoice__toDetail"
          aria-label="view invoice details"
        />
      </motion.article>
    </Link>
  );
}
