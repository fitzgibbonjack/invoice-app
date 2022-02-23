import React from "react";
import { useParams } from "react-router-dom";
import { motion } from "framer-motion";
import { useInvoices } from "../../contexts/InvoicesContext";

import GoBack from "../../components/GoBack/GoBack";
import Alert from "../../components/Alert/Alert";
import Detail from "./Detail/Detail";
import InvoiceControls from "./Controls/InvoiceControls";
import "./Invoice.scss";

export default function InvoicePage() {
	const invoices = useInvoices();
	const { invoiceId } = useParams();

	const invoice = invoices.find((invoice) => invoice.id === invoiceId);

	return (
		<>
			<motion.main
				className="container detail"
				initial={{ opacity: 0, x: "10rem" }}
				animate={{ opacity: 1, x: 0 }}
				exit={{ opacity: 0, x: "10rem" }}
			>
				<GoBack to="/" />

				<aside className="detail__aside">
					<Status data={invoice.status} />
					<InvoiceControls invoice={invoice} />
				</aside>

				<Detail data={invoice} />
			</motion.main>
		</>
	);
}

function Status({ data }) {
	return (
		<span className="detail__status">
			<p className="txt--secondary">Status</p>
			<Alert type={data} children={data} />
		</span>
	);
}
