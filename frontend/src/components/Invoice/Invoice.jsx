import React from "react";
import { formatDate, formatCurrency } from "../../helpers/format";

import Alert from "../Alert/Alert";
import IconArrowRight from "../../assets/icon-arrow-right.svg";
import "./Invoice.scss";

export default function Invoice({ data }) {
  return (
    <a className="invoice">
      <h2 className="invoice__id txt--fs-400">
        <span className="txt--secondary">#</span>
        {data.id}
      </h2>

      <p className="invoice__due txt--secondary">
        {"Due " + formatDate(data.paymentDue.seconds)}
      </p>
      <p className="invoice__client txt--secondary">{data.clientName}</p>
      <p className="invoice__total txt--fw-700 txt--fs-500">
        {formatCurrency(data.total)}
      </p>

      <Alert
        className="invoice__status"
        type={data.status}
        children={data.status}
      />

      <img
        src={IconArrowRight}
        className="hide-for-mobile invoice__toDetail"
        aria-label="view invoice details"
      />
    </a>
  );
}
