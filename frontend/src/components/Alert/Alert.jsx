import React from "react";
import "./Alert.scss";

export default function Alert({ type, children, className }) {
	let variant;

	switch (type) {
		case "success":
		case "paid":
			variant = "success";
			break;
		case "pending":
			variant = "pending";
			break;
		case "secondary":
		case "draft":
			variant = "secondary";
			break;
		case "error":
			variant = "error";
			break;
	}

	return (
		<p className={`txt--fw-700 alert--${variant} ${className}`}>
			{children}
		</p>
	);
}
