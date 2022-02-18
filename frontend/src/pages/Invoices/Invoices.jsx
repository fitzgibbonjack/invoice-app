import React, { useState, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { useUser } from "../../contexts/UserContext";
import { useInvoices } from "../../contexts/InvoicesContext";
import { motion } from "framer-motion";
import { formatRemaining } from "../../helpers/format";

import Button from "../../components/Button/Button";
import Invoice from "../../components/Invoice/Invoice";
import Splash from "../../components/Splash/Splash";
import Filters from "../../components/Filters/Filters";
import { ReactComponent as PlusIcon } from "../../assets/icon-plus.svg";
import "./Invoices.scss";

export default function InvoicesPage() {
  const navigate = useNavigate();
  const location = useLocation();

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
        style={{ paddingBottom: "1.5rem" }}
        initial={{ opacity: 0, x: "-10rem" }}
        animate={{ opacity: 1, x: 0 }}
        exit={{ opacity: 0, x: "-10rem" }}
      >
        <aside className="invoices__controls">
          <span>
            <h1 className="invoices__title">Invoices</h1>
            <p className="invoices__remain">
              {formatRemaining(invoices, filtered)}
            </p>
          </span>

          <span>
            <Filters setFiltered={setFiltered} />
            <Button
              className="invoices__add"
              icon={<PlusIcon />}
              onClick={() =>
                navigate("/new", { state: { background: location } })
              }
            >
              New
            </Button>
          </span>
        </aside>

        <section>
          <ol>
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
          </ol>
        </section>
      </motion.main>

      {invoices.length === 0 && <Splash />}
    </>
  );
}
