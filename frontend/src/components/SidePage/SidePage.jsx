import React, { useEffect } from "react";
import ReactDOM from "react-dom";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";

import GoBack from "../GoBack/GoBack";
import "./SidePage.scss";

export default function SidePage({ title, children }) {
  const navigate = useNavigate();
  let hasClosed = false;

  const closeSide = () => {
    navigate(-1);
  };

  const closeOnEscKey = (e) => {
    if (e.key === "Escape") {
      closeSide();
    }
  };

  useEffect(() => {
    document.body.addEventListener("keyup", closeOnEscKey);

    return function cleanup() {
      document.body.removeEventListener("keyup", closeOnEscKey);
    };
  }, []);

  return ReactDOM.createPortal(
    <motion.main
      className="sidePage"
      onClick={closeSide}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <motion.section
        className="side__content"
        onClick={(e) => e.stopPropagation()}
        initial={{ x: -200 }}
        animate={{ x: 0 }}
        exit={{ x: -200 }}
      >
        <GoBack className="hide-for-desktop" />
        <h1 className="side__title">{title}</h1>
        {children}
      </motion.section>
    </motion.main>,
    document.getElementById("portal")
  );
}
