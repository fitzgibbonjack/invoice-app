import React from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import { UserProvider } from "../contexts/UserContext";
import { AnimatePresence } from "framer-motion";

import Header from "./Header/Header";
import Modal from "./Modal/Modal";
import Login from "./Login/Login";
import Signup from "./Signup/Signup";
import ResetPass from "./ResetPass/ResetPass";
import Invoices from "../pages/invoices/Invoices";
import "./App.scss";

export default function App() {
  const location = useLocation();
  const background = location.state && location.state.background;

  return (
    <UserProvider>
      <AnimatePresence>
        <Header />
        <Routes location={background || location} key="1">
          <Route path="/" exact element={<Invoices />} />
          {/* RESET PASS MODAL */}
          <Route
            path="/account/reset"
            element={
              <Modal title="Reset password">
                <ResetPass />
              </Modal>
            }
          />
        </Routes>

        {/* MODALS */}
        {background && (
          <Routes location={location} key="2">
            <Route
              path="/login"
              element={
                <Modal title="Log in">
                  <Login />
                </Modal>
              }
            />

            <Route
              path="/signup"
              element={
                <Modal title="Sign up">
                  <Signup />
                </Modal>
              }
            />
          </Routes>
        )}
      </AnimatePresence>
    </UserProvider>
  );
}
