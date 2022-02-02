import React, { useState } from "react";
import { UserProvider } from "../contexts/UserContext";

import Header from "../components/Header/Header";
import Modal from "../components/Modal/Modal.jsx";
import Signup from "./Signup/Signup";
import "./App.scss";

export default function App() {
  const [show, setShow] = useState(true);

  const closeModal = () => {
    setShow(false);
  };

  return (
    <UserProvider>
      <Header />
      <Modal show={show} title="Sign up" onClose={closeModal}>
        <Signup closeModal={closeModal} />
      </Modal>
    </UserProvider>
  );
}
