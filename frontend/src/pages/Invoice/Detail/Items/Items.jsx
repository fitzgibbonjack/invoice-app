import React from "react";
import { formatCurrency } from "../../../../helpers/format";
import "./Items.scss";

export default function Items({ data }) {
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
						<span className="hide-for-desktop">
							{item.quantity}
						</span>
						<span className="hide-for-desktop">{" x "}</span>
						<span>{formatCurrency(item.price)}</span>
					</p>
					<p aria-label="item total price">
						{formatCurrency(item.total)}
					</p>
				</li>
			))}
		</ul>
	);
}
