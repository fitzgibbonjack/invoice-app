import React from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import { UserProvider } from "../contexts/UserContext";
import { InvoiceProvider } from "../contexts/InvoicesContext";
import { AnimatePresence } from "framer-motion";

import Nav from "./Nav/Nav";
import Login from "../modals/Login/Login";
import Signup from "../modals/Signup/Signup";
import Delete from "../modals/Delete/Delete";
import ResetPass from "../modals/ResetPass/ResetPass";
import InvoicesPage from "../pages/Invoices/Invoices";
import InvoicePage from "../pages/Invoice/Invoice";
import NewPage from "../pages/New/New";
import EditPage from "../pages/Edit/Edit";
import ProtectedRoute from "./ProtectedRoute/ProtectedRoute";
import "./App.scss";

export default function App() {
	const location = useLocation();
	const background = location.state && location.state.background;
	return (
		<>
			<UserProvider>
				<Nav />

				<InvoiceProvider>
					<Routes location={background || location}>
						<Route path="/" exact element={<InvoicesPage />} />
						<Route
							path="/:invoiceId"
							exact
							element={
								<ProtectedRoute children={<InvoicePage />} />
							}
						/>
					</Routes>

					<AnimatePresence>
						{background && (
							<Routes location={location}>
								<Route path="/login" element={<Login />} />
								<Route path="/signup" element={<Signup />} />
								<Route
									path="/reset-password"
									element={<ResetPass />}
								/>
								<Route
									path="/:invoiceId/delete"
									element={<Delete />}
								/>
								<Route
									path="/:invoiceId/edit"
									element={<EditPage />}
								/>
								<Route
									path="/new"
									exact
									element={<NewPage />}
								/>
							</Routes>
						)}
					</AnimatePresence>
				</InvoiceProvider>
			</UserProvider>
		</>
	);
}
