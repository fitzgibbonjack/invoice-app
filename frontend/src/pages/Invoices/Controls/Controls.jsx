import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { formatRemaining } from "../../../helpers/format";
import { useInvoices } from "../../../contexts/InvoicesContext";

import Button from "../../../components/Button/Button";
import Filters from "../Filters/Filters";
import { ReactComponent as PlusIcon } from "../../../assets/icon-plus.svg";
import "./Controls.scss";

export default function Controls({ props }) {
	const navigate = useNavigate();
	const location = useLocation();
	const invoices = useInvoices();
	const [filtered, setFiltered] = props;

	return (
		<aside className="invoices__controls">
			<span>
				<h1 className="invoices__title">Invoices</h1>
				<p className="invoices__remain">
					{formatRemaining(invoices, filtered)}
				</p>
			</span>

			<span>
				<Filters setFiltered={setFiltered} />
				<Button
					className="invoices__add"
					icon={<PlusIcon />}
					onClick={() =>
						navigate("/new", { state: { background: location } })
					}
				>
					New
				</Button>
			</span>
		</aside>
	);
}
