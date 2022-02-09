import React, { useState } from "react";
import { AnimatePresence } from "framer-motion";
import Dropdown from "../Dropdown/Dropdown";
import "./Filters.scss";

export default function Filters() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <button
        className={`filters__toggle ${open}`}
        onClick={() => setOpen(!open)}
      >
        Filter
      </button>

      <AnimatePresence>
        {open && <Dropdown className="filters__dropdown"></Dropdown>}
      </AnimatePresence>
    </>
  );
}
