import React from "react";
import "./Address.scss";

export default function Address({ data, name, title }) {
	return (
		<div className="Address">
			{title && <h2>{title}</h2>}
			{name && <p>{name}</p>}
			<p>{data.street}</p>
			<p>{data.city}</p>
			<p style={{ textTransform: "uppercase" }}>{data.postcode}</p>
			<p>{data.country}</p>
		</div>
	);
}
