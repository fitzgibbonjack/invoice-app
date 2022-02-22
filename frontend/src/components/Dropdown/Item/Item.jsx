import React from "react";
import "./Item.scss";

export default function DropdownItem({ children, onClick, icon }) {
	return (
		<button className="dropdown__item" onClick={onClick}>
			{icon}
			<span>{children}</span>
		</button>
	);
}
