import React from "react";
import { useUser } from "../contexts/UserContext";
import { useInvoices } from "../contexts/InvoicesContext";
import { motion } from "framer-motion";

import Button from "../components/Button/Button";
import Invoice from "../components/Invoice/Invoice";
import Splash from "../components/Splash/Splash";
import Filters from "../components/Filters/Filters";
import { ReactComponent as PlusIcon } from "../assets/icon-plus.svg";
import "./Invoices.scss";

export default function Main() {
  const invoices = useInvoices();
  const currentUser = useUser();

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
            <p className="invoices__remain">{`${invoices.length} Invoices`}</p>
          </span>

          <span>
            <Filters />
            <Button className="invoices__add" icon={<PlusIcon />}>
              New
            </Button>
          </span>
        </header>

        <ol>
          {invoices.length > 0 &&
            invoices.map((invoice) => (
              <li key={invoice.id}>
                <Invoice data={invoice} />
              </li>
            ))}
        </ol>
      </motion.main>

      {invoices.length === 0 && <Splash />}
    </>
  );
}
