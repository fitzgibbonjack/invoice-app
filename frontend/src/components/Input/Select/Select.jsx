import React from "react";
import "./Select.scss";

export default function SelectInput({ name, children }) {
	let label = name.replace(/([a-z])([A-Z])/g, "$1 $2");
	label = label.replace(/[0-9]/g, "");

	return (
		<label htmlFor={name} className="input--select">
			{label}
			<select id={name} name={name}>
				{children}
			</select>
		</label>
	);
}
