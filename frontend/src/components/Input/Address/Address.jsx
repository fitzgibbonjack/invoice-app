import React from "react";
import TextInput from "../Text/Text";
import "./Address.scss";

export default function AddressInput({ id = "", defaultValue }) {
	return (
		<span className="input--address">
			<TextInput
				name={`streetAddress${id}`}
				defaultValue={defaultValue && defaultValue.street}
			/>
			<TextInput
				name={`city${id}`}
				defaultValue={defaultValue && defaultValue.city}
			/>
			<TextInput
				name={`postcode${id}`}
				defaultValue={defaultValue && defaultValue.postcode}
				style={{ textTransform: "uppercase" }}
			/>
			<TextInput
				name={`country${id}`}
				defaultValue={defaultValue && defaultValue.country}
			/>
		</span>
	);
}
