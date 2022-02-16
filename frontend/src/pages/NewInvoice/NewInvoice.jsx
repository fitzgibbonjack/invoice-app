import React from "react";
import { motion } from "framer-motion";
import GoBack from "../../components/GoBack/GoBack";
import "./NewInvoice.scss";

export default function New() {
  return (
    <motion.main
      className="container new"
      initial={{ opacity: 0, x: "10rem" }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: "10rem" }}
    >
      <GoBack />

      <h1>New Invoice</h1>

      <h2>Bill From</h2>
      <h2>Bill To</h2>
      <h2>Item List</h2>
    </motion.main>
  );
}
