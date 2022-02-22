import React from "react";
import { formatCurrency } from "../../../../helpers/format";
import "./Total.scss";

export default function Total({ data }) {
	return (
		<div className="detail__total">
			<p>Grand Total</p>
			<p>{formatCurrency(data)}</p>
		</div>
	);
}
