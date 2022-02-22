import React from "react";

export default function Email({ data }) {
	return (
		<div className="detail__clientEmail">
			<h2>Client Email</h2>
			<p>{data}</p>
		</div>
	);
}
