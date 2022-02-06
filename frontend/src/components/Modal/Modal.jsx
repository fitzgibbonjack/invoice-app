import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";
import ReactDOM from "react-dom";
import "./Modal.scss";

export default function Modal({ title, children }) {
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

    return function cleanup() {
      document.body.removeEventListener("keyup", closeOnEscKey);
    };
  }, []);

  return ReactDOM.createPortal(
    <motion.div
      className="modal"
      onClick={closeModal}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <motion.section
        initial={{ y: "-100vh" }}
        animate={{ y: "0" }}
        exit={{ y: "-100vh" }}
        className="modal__content"
        onClick={(e) => e.stopPropagation()}
      >
        <header className="modal__header">
          <button className="modal__close" type="button" onClick={closeModal}>
            &#x2715;
          </button>
          <h3 className="modal__title">{title}</h3>
        </header>

        <main className="modal__body">{children}</main>
      </motion.section>
    </motion.div>,
    document.getElementById("portal")
  );
}
