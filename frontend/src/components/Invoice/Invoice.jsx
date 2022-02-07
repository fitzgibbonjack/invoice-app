import React from "react";
import Alert from "../Alert/Alert";
import "./Invoice.scss";

export default function Invoice({ data }) {
  const formatDate = (dateInSeconds) => {
    const dateInMs = dateInSeconds * 1000;
    let date = new Date(dateInMs);
    return date.toLocaleDateString();
  };

  const formatCurrency = (number) => {
    return number.toLocaleString(undefined, {
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
