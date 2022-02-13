import React from "react";
import { formatDate, formatCurrency } from "../../helpers/format";
import "./InvoiceDetail.scss";

export default function InvoiceDetail({ data }) {
  return (
    <section className="invoiceDetail">
      <Description data={data} />
      <Address data={data.senderAddress} />
      <Date title="Invoice date" data={data.createdAt} />
      <Date title="Payment due" data={data.paymentDue} />

      <Address
        data={data.clientAddress}
        title="Bill to"
        name={data.clientName}
      />

      <ClientEmail data={data.clientEmail} />
      <Items data={data.items} />
      <Total data={data.total} />
    </section>
  );
}

function Description({ data }) {
  return (
    <div className="description">
      <h1>
        <span className="txt--secondary">#</span>
        {data.id}
      </h1>
      <p>{data.description}</p>
    </div>
  );
}

function Date({ data, title }) {
  return (
    <div className="date">
      <h2>{title}</h2>
      <p>{formatDate(data.seconds)}</p>
    </div>
  );
}

function Address({ data, name, title }) {
  return (
    <div className="Address">
      {title && <h2>{title}</h2>}
      {name && <p>{name}</p>}
      <p>{data.street}</p>
      <p>{data.city}</p>
      <p>{data.postcode}</p>
      <p>{data.country}</p>
    </div>
  );
}

function ClientEmail({ data }) {
  return (
    <div className="clientEmail">
      <h2>Sent To</h2>
      <p>{data}</p>
    </div>
  );
}

function Items({ data }) {
  let counter = 1;
  return (
    <ul className="items">
      {data.map((item) => (
        <li className="item" key={counter++}>
          <h2>{item.name}</h2>
          <p>{`${item.quantity} x ${formatCurrency(item.price)}`}</p>
          <p>{formatCurrency(item.total)}</p>
        </li>
      ))}
    </ul>
  );
}

function Total({ data }) {
  return (
    <div className="total">
      <p>Grand Total</p>
      <p>{formatCurrency(data)}</p>
    </div>
  );
}
