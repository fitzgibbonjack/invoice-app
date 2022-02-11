import React, { useState, useEffect } from "react";
import { useUser } from "../contexts/UserContext";
import { useInvoices } from "../contexts/InvoicesContext";
import { motion } from "framer-motion";
import { formatRemaining } from "../helpers/format";

import Button from "../components/Button/Button";
import Invoice from "../components/Invoice/Invoice";
import Splash from "../components/Splash/Splash";
import Filters from "../components/Filters/Filters";
import { ReactComponent as PlusIcon } from "../assets/icon-plus.svg";
import "./Invoices.scss";

export default function Invoices() {
  const currentUser = useUser();
  const invoices = useInvoices();
  const [filtered, setFiltered] = useState();

  // clears filtered array if user log out
  useEffect(() => !currentUser && setFiltered(), [currentUser]);

  if (!currentUser) return <Splash login />;
  return (
    <>
      <motion.main
        className="container"
        initial={{ opacity: 0, x: "-10rem" }}
        animate={{ opacity: 1, x: 0 }}
        exit={{ opacity: 0, x: "-10rem" }}
      >
        <header className="invoices__header">
          <span>
            <h1 className="invoices__title">Invoices</h1>
            <p className="invoices__remain">
              {formatRemaining(invoices, filtered)}
            </p>
          </span>

          <span>
            <Filters setFiltered={setFiltered} />
            <Button className="invoices__add" icon={<PlusIcon />}>
              New
            </Button>
          </span>
        </header>

        <motion.ol layout>
          {filtered
            ? filtered.map((invoice) => (
                <li key={invoice.id}>
                  <Invoice invoice={invoice} />
                </li>
              ))
            : invoices.map((invoice) => (
                <li key={invoice.id}>
                  <Invoice invoice={invoice} />
                </li>
              ))}
        </motion.ol>
      </motion.main>

      {invoices.length === 0 && <Splash />}
    </>
  );
}
