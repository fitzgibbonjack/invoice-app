import React, { useState } from "react";
import Header from "../components/Header/Header";
import Modal from "../components/Modal/Modal.jsx";
import Login from "../components/Login/Login";
import "./App.scss";

export default function App() {
  const [show, setShow] = useState(true);

  return (
    <>
      <Header />
      <Modal
        show={show}
        title="Log in"
        onClose={() => {
          setShow(false);
        }}
      >
        <Login />
      </Modal>
    </>
  );
}
