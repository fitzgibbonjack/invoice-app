import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { doc, updateDoc } from "firebase/firestore";
import { useParams } from "react-router-dom";
import { formDataToObject } from "../../helpers/formDataToObject";
import { useInvoices } from "../../contexts/InvoicesContext";
import { useUser } from "../../contexts/UserContext";
import { db } from "../../firebase";

import SidePage from "../../components/SidePage/SidePage";
import InvoiceInput from "../../components/Input/Invoice/Invoice";
import "./Edit.scss";

export default function EditPage() {
	const navigate = useNavigate();
	const params = useParams();

	const invoices = useInvoices();
	const user = useUser();
	const invoiceId = params.invoiceId;
	const [invoice] = invoices.filter((obj) => obj.id === invoiceId);
	const [itemCount, setItemCount] = useState(invoice.items.length);

	const updateInvoice = (e) => {
		e.preventDefault();
		const form = e.currentTarget.form;
		const data = new FormData(form);
		if (!form.checkValidity()) return form.reportValidity();

		let items = [];
		for (let i = 0; i < itemCount; i++) {
			items.push({
				name: data.get(`itemName${i}`),
				quantity: data.get(`quantity${i}`) * 1,
				price: data.get(`price${i}`) * 1,
				total: data.get(`quantity${i}`) * data.get(`price${i}`),
			});
		}

		// add invoice to firestore
		const formData = formDataToObject(data, items, invoice.status);
		const docRef = doc(db, user.uid, invoice.id);
		updateDoc(docRef, formData).then(() =>
			console.log(`#${invoice.id} updated`)
		);

		navigate(`/${invoiceId}`);
	};

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

				<button
					className="button--1"
					type="submit"
					form="editInvoice"
					onClick={updateInvoice}
				>
					Save changes
				</button>
			</span>
		</SidePage>
	);
}
