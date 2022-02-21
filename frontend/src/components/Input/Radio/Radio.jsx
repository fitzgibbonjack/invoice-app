import React from "react";
import "./Radio.scss";

export default function RadioInput({ value, name, defaultChecked, onClick }) {
	return (
		<label className="input--radio" htmlFor={value}>
			<input
				type="radio"
				id={value}
				name={name}
				value={value}
				defaultChecked={defaultChecked}
				onClick={onClick}
			/>
			{value}
		</label>
	);
}
