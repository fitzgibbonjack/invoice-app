import React from "react";

export default function Description({ data }) {
	return (
		<div className="detail__description">
			<h1>
				<span className="txt--secondary fs-inherit">#</span>
				{data.id}
			</h1>
			<p>{data.description}</p>
		</div>
	);
}
