import React from "react";
import { motion } from "framer-motion";
import "./Dropdown.scss";

export default function Dropdown({ children, className }) {
  return (
    <motion.div
      className={`dropdown ${className}`}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      aria-expanded="true"
    >
      {children}
    </motion.div>
  );
}

export function DropdownItem({ children, onClick, icon }) {
  return (
    <button className="dropdown__item" onClick={onClick}>
      {icon}
      <span>{children}</span>
    </button>
  );
}
