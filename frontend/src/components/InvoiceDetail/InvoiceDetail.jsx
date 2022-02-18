import React from "react";
import { formatDate, formatCurrency } from "../../helpers/format";
import "./InvoiceDetail.scss";

export default function InvoiceDetail({ data }) {
  return (
    <section className="invoiceDetail card">
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

      <TableTitles />
      <Items data={data.items} />
      <Total data={data.total} />
    </section>
  );
}

// COMPONENTS
function Description({ data }) {
  return (
    <div className="detail__description">
      <h1>
        <span className="txt--secondary fs-inherit">#</span>
        {data.id}
      </h1>
      <p>{data.description}</p>
    </div>
  );
}

function Date({ data, title }) {
  return (
    <div className="Date">
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
      <p style={{ textTransform: "uppercase" }}>{data.postcode}</p>
      <p>{data.country}</p>
    </div>
  );
}

function ClientEmail({ data }) {
  return (
    <div className="detail__clientEmail">
      <h2>Sent To</h2>
      <p>{data}</p>
    </div>
  );
}

function TableTitles() {
  return (
    <div aria-hidden="true" className="detail__tableTitles hide-for-mobile">
      <p>Item Name</p>
      <p>QTY</p>
      <p>Price</p>
      <p>Total</p>
    </div>
  );
}

function Items({ data }) {
  let counter = 0;
  return (
    <ul className="detail__items" aria-label="items">
      {data.map((item) => (
        <li className="detail__item" key={counter++}>
          <h2>{item.name}</h2>
          <p className="hide-for-mobile" aria-label="item quantity">
            {item.quantity}
          </p>
          <p aria-label="item price">
            <span className="hide-for-desktop">{item.quantity}</span>
            <span className="hide-for-desktop">{" x "}</span>
            <span>{formatCurrency(item.price)}</span>
          </p>
          <p aria-label="item total price">{formatCurrency(item.total)}</p>
        </li>
      ))}
    </ul>
  );
}

function Total({ data }) {
  return (
    <div className="detail__total">
      <p>Grand Total</p>
      <p>{formatCurrency(data)}</p>
    </div>
  );
}
