import React, { useEffect, useState } from "react";
import { AnimatePresence } from "framer-motion";
import { useLocation, useNavigate } from "react-router-dom";
import { getFilterFromUrl } from "../../helpers/state";
import { useInvoices } from "../../contexts/InvoicesContext";

import Dropdown from "../Dropdown/Dropdown";
import { RadioInput } from "../Input/Input";
import "./Filters.scss";

export default function Filters({ setFiltered }) {
  const [open, setOpen] = useState(false);
  const [filter, setFilter] = useState();

  const invoices = useInvoices();
  const navigate = useNavigate();
  const location = useLocation();

  const applyFilter = (filter) => {
    const filtered = invoices.filter((invoice) => invoice.status === filter);
    setFiltered(filtered);
    navigate(`?filter=${filter}`);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    e.target.reset();
    navigate("/");
    setFiltered();
    setOpen(false);
  };

  const handleClick = (e) => {
    const filter = e.target.value;
    applyFilter(filter);
    setOpen(false);
  };

  // handle filtering upon url query param change
  useEffect(() => {
    const filter = getFilterFromUrl(location);
    setFilter(filter);
    filter ? applyFilter(filter) : setFiltered();
  }, [location.search]);

  return (
    <>
      <button
        className={`filters__toggle ${open}`}
        onClick={() => setOpen(!open)}
        disabled={invoices.length === 0}
      >
        Filter
      </button>

      <AnimatePresence>
        {open && (
          <Dropdown className="filters__dropdown">
            <form onSubmit={handleSubmit}>
              <RadioInput
                value="draft"
                name="filter"
                onClick={handleClick}
                defaultChecked={filter === "draft"}
              />
              <RadioInput
                value="pending"
                name="filter"
                onClick={handleClick}
                defaultChecked={filter === "pending"}
              />
              <RadioInput
                value="paid"
                name="filter"
                onClick={handleClick}
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
