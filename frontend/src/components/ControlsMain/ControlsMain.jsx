import React, { useState } from "react";
import { AnimatePresence } from "framer-motion";

import Button from "../../components/Button/Button";
import Dropdown from "../../components/Dropdown/Dropdown";
import { ReactComponent as PlusIcon } from "../../assets/icon-plus.svg";
import "./ControlsMain.scss";

export default function ControlsMain({ remain }) {
  const [open, setOpen] = useState(false);

  return (
    <header className="controls">
      <span>
        <h1 className="controls__title">Invoices</h1>
        <p className="controls__remain">{`${remain} Invoices`}</p>
      </span>

      <span>
        <button
          className={`controls__filter ${open}`}
          onClick={() => setOpen(!open)}
        >
          Filter
        </button>

        <Button className="controls__add" icon={<PlusIcon />}>
          New
        </Button>

        <AnimatePresence>
          {open && <Dropdown className="controls__dropdown"></Dropdown>}
        </AnimatePresence>
      </span>
    </header>
  );
}
