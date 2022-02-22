import React from "react";

import Address from "./Address/Address";
import Date from "./Date/Date";
import Items from "./Items/Items";
import Description from "./Description/Description";
import Email from "./Email/Email";
import Total from "./Total/Total";
import "./Detail.scss";
import "./grid.scss";

export default function Detail({ data }) {
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
			<Email data={data.clientEmail} />

			<TableTitles />
			<Items data={data.items} />
			<Total data={data.total} />
		</section>
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
