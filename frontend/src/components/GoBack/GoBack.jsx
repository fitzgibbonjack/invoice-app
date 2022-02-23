import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import "./GoBack.scss";

export default function GoBack({ className, to = -1 }) {
	const navigate = useNavigate();
	const location = useLocation();

	const goBack = () => {
		navigate(to);
	};

	return (
		<button className={`goBack ${className}`} onClick={goBack}>
			Go back
		</button>
	);
}
