import React, { useState } from "react";
import { TextInput } from "../Input/Input";
import { ReactComponent as DeleteIcon } from "../../assets/icon-delete.svg";
import "./ItemInput.scss";

import { formatCurrency } from "../../helpers/format";

export default function ItemInput({ i, defaultValue }) {
  const [priceVal, setPriceVal] = useState(
    defaultValue ? defaultValue.price : 0
  );
  const [quantityVal, setQuantityVal] = useState(
    defaultValue ? defaultValue.quantity : 0
  );

  const removeItem = (e) => {
    const itemDiv = e.currentTarget.parentElement.parentElement;
    itemDiv.remove();
  };

  return (
    <div className="itemInput">
      <TextInput
        name={`itemName${i}`}
        defaultValue={defaultValue && defaultValue.name}
      />
      <TextInput
        name={`quantity${i}`}
        onChange={(e) => setPriceVal(e.target.value)}
        type="number"
        defaultValue={defaultValue && defaultValue.quantity}
      />
      <TextInput
        name={`price${i}`}
        onChange={(e) => setQuantityVal(e.target.value)}
        type="number"
        defaultValue={defaultValue && defaultValue.price}
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
