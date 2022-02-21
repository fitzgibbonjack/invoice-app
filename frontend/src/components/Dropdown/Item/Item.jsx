import React from "react";

export default function DropdownItem({ children, onClick, icon }) {
	return (
		<button className="dropdown__item" onClick={onClick}>
			{icon}
			<span>{children}</span>
		</button>
	);
}
