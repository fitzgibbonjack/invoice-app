import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import ReactDOM from "react-dom";
import "./Modal.scss";

export default function Modal({ title, className, children }) {
	const navigate = useNavigate();

	const closeModal = () => {
		navigate(-1);
	};

	const closeOnEscKey = (e) => {
		if (e.key === "Escape") {
			closeModal();
		}
	};

	useEffect(() => {
		document.body.addEventListener("keyup", closeOnEscKey);
		document.body.style.overflow = "hidden";

		return function cleanup() {
			document.body.removeEventListener("keyup", closeOnEscKey);
			document.body.style.overflow = null;
		};
	}, []);

	return ReactDOM.createPortal(
		<motion.div
			className={`modal ${className}`}
			onClick={closeModal}
			initial={{ opacity: 0 }}
			animate={{ opacity: 1 }}
			exit={{ opacity: 0 }}
		>
			<motion.section
				initial={{ y: "-100vh" }}
				animate={{ y: "0" }}
				exit={{ y: "150vh" }}
				className="modal__content"
				onClick={(e) => e.stopPropagation()}
			>
				<header className="modal__header">
					<h3 className="modal__title">{title}</h3>

					<button
						className="modal__close txt--fs-500"
						type="button"
						onClick={closeModal}
					>
						&#x2715;
					</button>
				</header>

				<main className="modal__body">{children}</main>
			</motion.section>
		</motion.div>,
		document.getElementById("portal")
	);
}
