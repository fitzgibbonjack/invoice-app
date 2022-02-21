import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";
import { useInvoices } from "../../contexts/InvoicesContext";

import SidePage from "../../components/SidePage/SidePage";
import InvoiceInput from "../../components/Input/Invoice/Invoice";
import "./Edit.scss";

export default function EditPage() {
	const [itemCount, setItemCount] = useState(1);
	const invoices = useInvoices();
	const params = useParams();

	const invoiceId = params.invoiceId;
	const [invoice] = invoices.filter((obj) => obj.id === invoiceId);

	return (
		<SidePage title={`Edit #${invoiceId}`}>
			<InvoiceInput
				props={[itemCount, setItemCount]}
				action="edit"
				invoice={invoice}
			/>

			<span className="card edit__controls">
				<Link to={-1} className="button--2">
					Cancel
				</Link>
				<button className="button--1">Save changes</button>
			</span>
		</SidePage>
	);
}
