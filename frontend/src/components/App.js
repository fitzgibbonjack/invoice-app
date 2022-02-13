import React from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import { UserProvider } from "../contexts/UserContext";
import { InvoiceProvider } from "../contexts/InvoicesContext";
import { AnimatePresence } from "framer-motion";

import Nav from "./Nav/Nav";
import Login from "./Login/Login";
import Signup from "./Signup/Signup";
import ResetPass from "./ResetPass/ResetPass";
import InvoicesPage from "../pages/Invoices/Invoices";
import InvoicePage from "../pages/Invoice/Invoice";
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
            <Route path="/:invoiceId" exact element={<InvoicePage />} />
          </Routes>

          <AnimatePresence>
            {background && (
              <Routes location={location}>
                <Route path="/login" element={<Login />} />
                <Route path="/signup" element={<Signup />} />
                <Route path="/reset-password" element={<ResetPass />} />
              </Routes>
            )}
          </AnimatePresence>
        </InvoiceProvider>
      </UserProvider>
    </>
  );
}
