import React from "react";
import { useLocation, Link } from "react-router-dom";
import { db } from "../../../firebase";
import { doc, updateDoc } from "firebase/firestore";
import { useUser } from "../../../contexts/UserContext";
import "./InvoiceControls.scss";

export default function InvoiceControls({ invoice }) {
	const user = useUser();
	const location = useLocation();
	const newStatus = invoice.status === "draft" ? "pending" : "paid";

	const updateStatus = () => {
		const invoiceRef = doc(db, user.uid, invoice.id);
		updateDoc(invoiceRef, { status: newStatus })
			.then(() => console.log(`Status changed to ${newStatus}`))
			.catch((error) => console.log(error));
	};

	return (
		<span className="card detail__controls">
			<Link
				to={`/${invoice.id}/edit`}
				className="button--2"
				state={{ background: location }}
			>
				Edit
			</Link>

			<Link
				to={`/${invoice.id}/delete`}
				className="button--4"
				state={{ background: location }}
			>
				Delete
			</Link>

			<button
				className="button--1"
				onClick={updateStatus}
				disabled={invoice.status === newStatus}
			>
				{`Mark as ${newStatus}`}
			</button>
		</span>
	);
}
