import React, { useState } from "react";
import { AnimatePresence } from "framer-motion";

import { useInvoices } from "../../contexts/InvoicesContext";
import Dropdown from "../Dropdown/Dropdown";
import { RadioInput } from "../Input/Input";
import "./Filters.scss";

export default function Filters({ setFiltered }) {
  const [open, setOpen] = useState(false);
  const [filter, setFilter] = useState();
  const invoices = useInvoices();

  const applyFilter = (filter) => {
    const filtered = invoices.filter((invoice) => invoice.status === filter);
    setFiltered(filtered);
    setFilter(filter);
    setOpen(false);
  };

  const removeFilter = (e) => {
    e.preventDefault();
    e.target.reset();
    setFiltered(null);
    setFilter(filter);
    setOpen(false);
  };

  return (
    <>
      <button
        className={`filters__toggle ${open}`}
        onClick={() => setOpen(!open)}
      >
        Filter
      </button>

      <AnimatePresence>
        {open && (
          <Dropdown className="filters__dropdown">
            <form
              onChange={(e) => applyFilter(e.target.value)}
              onSubmit={removeFilter}
            >
              <RadioInput
                value="draft"
                name="filter"
                defaultChecked={filter === "draft"}
              />
              <RadioInput
                value="pending"
                name="filter"
                defaultChecked={filter === "pending"}
              />
              <RadioInput
                value="paid"
                name="filter"
                defaultChecked={filter === "paid"}
              />

              <button className=" filters__remove txt--secondary">
                Remove filter
              </button>
            </form>
          </Dropdown>
        )}
      </AnimatePresence>
    </>
  );
}
