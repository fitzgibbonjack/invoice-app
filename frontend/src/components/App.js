import React, { useState } from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import { UserProvider } from "../contexts/UserContext";

import Header from "./Header/Header";
import Invoices from "../pages/invoices/Invoices";
import Modal from "./Modal/Modal";
import Login from "./Login/Login";
import Signup from "./Signup/Signup";
import "./App.scss";

export default function App() {
  const location = useLocation();
  const background = location.state && location.state.background;

  return (
    <UserProvider>
      <Header />

      <Routes location={background || location}>
        <Route path="/" exact element={<Invoices />} />
      </Routes>

      {background && (
        <Routes>
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
    </UserProvider>
  );
}
