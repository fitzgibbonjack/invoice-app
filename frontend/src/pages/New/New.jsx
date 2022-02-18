import React, { useState } from "react";
import { motion } from "framer-motion";

import {
  TextInput,
  AddressInput,
  DatePicker,
  SelectInput,
} from "../../components/Input/Input";
import GoBack from "../../components/GoBack/GoBack";
import ItemInput from "../../components/ItemInput/ItemInput";
import NewInvoiceControls from "../../components/NewInvoiceControls/NewInvoiceControls";
import "./New.scss";

export default function NewPage() {
  const [itemCount, setItemCount] = useState(1);
  let i = 0;

  return (
    <motion.main
      className="container"
      initial={{ opacity: 0, x: "10rem" }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: "10rem" }}
    >
      <GoBack />
      <h1 className="new__title">New Invoice</h1>

      <NewInvoiceControls itemCount={itemCount} />

      <section className="new">
        <form className="new__form" id="newInvoice">
          <fieldset name="senderAddress">
            <legend className="form__legend">Bill From</legend>
            <AddressInput id={0} />
          </fieldset>

          <fieldset name="clientDetails">
            <legend className="form__legend">Bill To</legend>
            <TextInput name="clientName" />
            <TextInput name="clientEmail" type="email" />
            <AddressInput id={1} />
          </fieldset>

          <fieldset name="projectDetails">
            {/* <DatePicker name="invoiceDate" /> */}
            <SelectInput name="paymentTerms">
              <option value="1">Net 1 Day</option>
              <option value="7">Net 7 Days</option>
              <option value="14">Net 14 Days</option>
              <option value="30">Net 30 Days</option>
            </SelectInput>
            <TextInput name="projectDescription" />
          </fieldset>

          <fieldset name="items">
            <legend className="form__legend">Item List</legend>

            <ul style={{ display: "grid", gap: "3rem" }}>
              {[...Array(itemCount)].map(() => (
                <li key={i++}>
                  <ItemInput i={i} />
                </li>
              ))}
            </ul>

            <button
              type="button"
              className="button button--2 items__add"
              onClick={() => setItemCount(itemCount + 1)}
            >
              Add New Item
            </button>
          </fieldset>
        </form>
      </section>
    </motion.main>
  );
}
