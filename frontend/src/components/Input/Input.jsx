import React from "react";
import "./Input.scss";

export function TextInput({ name, type }) {
  return (
    <>
      <label htmlFor={name} className="text">
        {name.replace(/([a-z])([A-Z])/g, "$1 $2")}
      </label>
      <input type={type} id={name} name={name} required />
    </>
  );
}

export function RadioInput({ value, name, defaultChecked }) {
  return (
    <label className="radio" htmlFor={value}>
      <input
        type="radio"
        id={value}
        name={name}
        value={value}
        defaultChecked={defaultChecked}
      />
      {value}
    </label>
  );
}
