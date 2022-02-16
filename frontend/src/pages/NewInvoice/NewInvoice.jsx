import React, { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

import {
  TextInput,
  AddressInput,
  DatePicker,
  SelectInput,
} from "../../components/Input/Input";
import GoBack from "../../components/GoBack/GoBack";
import { ReactComponent as DeleteIcon } from "../../assets/icon-delete.svg";
import "./NewInvoice.scss";

export default function New() {
  const [itemCount, setItemCount] = useState();

  return (
    <motion.main
      className="container"
      initial={{ opacity: 0, x: "10rem" }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: "10rem" }}
    >
      <GoBack />
      <section className="new">
        <h1 className="new__title">New Invoice</h1>

        <form className="new__form" id="newInvoice">
          <fieldset name="senderAddress">
            <legend className="form__legend">Bill From</legend>
            <AddressInput />
          </fieldset>

          <fieldset name="clientDetails">
            <legend className="form__legend">Bill To</legend>
            <TextInput name="clientName" />
            <TextInput name="clientEmail" type="email" />
            <AddressInput />
          </fieldset>

          <fieldset name="projectDetails">
            <DatePicker name="invoiceDate" />
            <SelectInput name="paymentTerms">
              <option value="1">Net 1 Day</option>
              <option value="7">Net 7 Days</option>
              <option value="14">Net 14 Days</option>
              <option value="30">Net 30 Days</option>
            </SelectInput>
            <TextInput name="projectDescription" />
          </fieldset>

          <fieldset name="items" style={{ gap: "3rem" }}>
            <legend className="form__legend">Item List</legend>

            <Item />
            <Item />
            <Item />

            <button type="button" className="button button--2 items__add">
              Add New Item
            </button>
          </fieldset>
        </form>
      </section>

      <Controls />
    </motion.main>
  );
}

function Item() {
  const removeItem = (e) => {
    const itemDiv = e.currentTarget.parentElement;
    itemDiv.remove();
  };

  return (
    <motion.div className="new__item">
      <TextInput name="itemName" />
      <TextInput name="quantity" />
      <TextInput name="price" />
      <label className="item__total">
        Total
        <span className="input--text">400.00</span>
      </label>
      <button className="item__delete" onClick={removeItem} type="button">
        <DeleteIcon aria-hidden="true" />
      </button>
    </motion.div>
  );
}

function Controls() {
  return (
    <aside className="new__controls">
      <button className="button button--2">Discard</button>
      <button className="button button--3">Save as Draft</button>
      <button className="button button--1">Save &amp; Send</button>
    </aside>
  );
}
