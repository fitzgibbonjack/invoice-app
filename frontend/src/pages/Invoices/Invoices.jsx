import React, { useState, useEffect } from "react";
import { useUser } from "../../contexts/UserContext";
import { useInvoices } from "../../contexts/InvoicesContext";
import { motion } from "framer-motion";

import Invoice from "./Invoice/Invoice";
import Controls from "./Controls/Controls";
import Splash from "../../components/Splash/Splash";
import "./Invoices.scss";

export default function InvoicesPage() {
	const currentUser = useUser();
	const invoices = useInvoices();
	const [filtered, setFiltered] = useState();

	// clears filtered array if user log out
	useEffect(() => !currentUser && setFiltered(), [currentUser]);

	if (!currentUser) return <Splash login />;
	return (
		<>
			<motion.main
				className="container"
				style={{ paddingBottom: "1.5rem" }}
				initial={{ opacity: 0, x: "-10rem" }}
				animate={{ opacity: 1, x: 0 }}
				exit={{ opacity: 0, x: "-10rem" }}
			>
				<Controls props={[filtered, setFiltered]} />

				<section>
					<ol>
						{filtered
							? filtered.map((invoice) => (
									<li key={invoice.id}>
										<Invoice invoice={invoice} />
									</li>
							  ))
							: invoices.map((invoice) => (
									<li key={invoice.id}>
										<Invoice invoice={invoice} />
									</li>
							  ))}
					</ol>
				</section>
			</motion.main>

			{invoices.length === 0 && <Splash />}
		</>
	);
}
