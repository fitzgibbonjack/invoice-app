import React from "react";
import { formatDate } from "../../../../helpers/format";

export default function Date({ data, title }) {
	return (
		<div className="Date">
			<h2>{title}</h2>
			<p>{formatDate(data.seconds)}</p>
		</div>
	);
}
