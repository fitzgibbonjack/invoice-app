import React from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import { UserProvider } from "../contexts/UserContext";
import { AnimatePresence } from "framer-motion";

import Nav from "./Nav/Nav";
import Login from "./Login/Login";
import Signup from "./Signup/Signup";
import ResetPass from "./ResetPass/ResetPass";
import Main from "../pages/Main/Main";
import "./App.scss";

export default function App() {
  const location = useLocation();
  const background = location.state && location.state.background;

  return (
    <UserProvider>
      <Nav />

      <Routes location={background || location}>
        <Route path="/" exact element={<Main />} />
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
    </UserProvider>
  );
}
