import React from "react";
import { TextInput } from "../Input/Input";
import { ReactComponent as DeleteIcon } from "../../assets/icon-delete.svg";
import "./ItemInput.scss";

export default function ItemInput({ i }) {
  const removeItem = (e) => {
    const itemDiv = e.currentTarget.parentElement.parentElement;
    itemDiv.remove();
  };

  return (
    <div className="itemInput">
      <TextInput name={`itemName${i}`} />
      <TextInput name={`quantity${i}`} />
      <TextInput name={`price${i}`} />
      <label className="item__total">
        Total
        <span className="input--text">400.00</span>
      </label>
      <button
        className="item__delete"
        onClick={removeItem}
        type="button"
        aria-label="remove item"
      >
        <DeleteIcon aria-hidden="true" />
      </button>
    </div>
  );
}
