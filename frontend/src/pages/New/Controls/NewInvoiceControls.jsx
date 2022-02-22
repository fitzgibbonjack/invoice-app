import React from "react";
import { useNavigate } from "react-router-dom";
import "./NewInvoiceControls.scss";

export default function NewInvoiceControls({ saveInvoice }) {
	const navigate = useNavigate();

	return (
		<aside className="new__controls">
			<button
				className="button--2"
				onClick={() => navigate("/")}
				type="button"
			>
				Discard
			</button>

			<button
				className="button--3"
				type="submit"
				form="newInvoice"
				onClick={(e) => saveInvoice(e, "draft")}
			>
				Save as Draft
			</button>

			<button
				className="button--1"
				type="submit"
				form="newInvoice"
				onClick={(e) => saveInvoice(e, "pending")}
			>
				Save
			</button>
		</aside>
	);
}
