import React from "react";
import "./Text.scss";

export default function TextInput({
	name,
	onChange,
	defaultValue,
	type = "text",
}) {
	let label = name.replace(/([a-z])([A-Z])/g, "$1 $2");
	label = label.replace(/[0-9]/g, "");

	return (
		<label htmlFor={name} className="input--text">
			{label}
			<input
				type={type}
				step={type === "number" && "any"}
				id={name}
				name={name}
				onChange={onChange}
				defaultValue={defaultValue}
				required
			/>
		</label>
	);
}
