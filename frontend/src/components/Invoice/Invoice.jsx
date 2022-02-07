import React from "react";
import Alert from "../Alert/Alert";
import "./Invoice.scss";

export default function Invoice({ data }) {
  const formatDate = (input) => {
    let date = new Date(input * 1000);
    return date.toLocaleDateString();
  };

  const formatCurrency = (input) => {
    return input.toLocaleString(undefined, {
      minimumFractionDigits: 2,
      style: "currency",
      currency: "GBP",
    });
  };

  return (
    <article className="invoice">
      <h2 className="invoice__id">
        <span>#</span>
        {data.id}
      </h2>

      <p className="invoice__due">
        {"Due " + formatDate(data.paymentDue.seconds)}
      </p>
      <p className="invoice__client">{data.clientName}</p>
      <p className="invoice__total">{formatCurrency(data.total)}</p>

      <Alert
        className="invoice__status"
        type={data.status}
        children={data.status}
      />
    </article>
  );
}
