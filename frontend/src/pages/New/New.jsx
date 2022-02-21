import React, { useState } from "react";

import SidePage from "../../components/SidePage/SidePage";
import { useNavigate } from "react-router-dom";
import { doc, setDoc } from "firebase/firestore";
import { useUser } from "../../contexts/UserContext";
import { db } from "../../firebase";

import { generateId } from "../../helpers/generateId";
import { formDataToObject } from "../../helpers/formDataToObject";

import NewInvoiceControls from "./Controls/NewInvoiceControls";
import InvoiceInput from "../../components/Input/Invoice/Invoice";

import "./New.scss";

export default function NewPage() {
	const [itemCount, setItemCount] = useState(1);
	const navigate = useNavigate();
	const user = useUser();

	const saveInvoice = (e, status) => {
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
		const invoice = formDataToObject(data, items, status);
		setDoc(doc(db, user.uid, generateId()), invoice)
			.then(() => console.log("document created"))
			.catch((error) => console.log(error));

		navigate("/");
	};

	return (
		<SidePage title="New Invoice">
			<InvoiceInput props={[itemCount, setItemCount]} action="new" />
			<NewInvoiceControls saveInvoice={saveInvoice} />
		</SidePage>
	);
}
