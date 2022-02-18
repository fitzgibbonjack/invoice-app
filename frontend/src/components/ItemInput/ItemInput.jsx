import React, { useState } from "react";
import { TextInput } from "../Input/Input";
import { ReactComponent as DeleteIcon } from "../../assets/icon-delete.svg";
import "./ItemInput.scss";

import { formatCurrency } from "../../helpers/format";

export default function ItemInput({ i }) {
  const [priceVal, setPriceVal] = useState(0);
  const [quantityVal, setQuantityVal] = useState(0);

  const removeItem = (e) => {
    const itemDiv = e.currentTarget.parentElement.parentElement;
    itemDiv.remove();
  };

  return (
    <div className="itemInput">
      <TextInput name={`itemName${i}`} />
      <TextInput
        name={`quantity${i}`}
        onChange={(e) => setPriceVal(e.target.value)}
      />
      <TextInput
        name={`price${i}`}
        onChange={(e) => setQuantityVal(e.target.value)}
      />
      <label className="item__total">
        Total
        <span className="input--text">
          {formatCurrency(priceVal * quantityVal)}
        </span>
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
