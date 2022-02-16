import React from "react";
import "./Input.scss";

export function TextInput({ name, type = "text" }) {
  return (
    <label htmlFor={name} className="input--text">
      {name.replace(/([a-z])([A-Z])/g, "$1 $2")}
      <input type={type} id={name} name={name} required />
    </label>
  );
}

export function RadioInput({ value, name, defaultChecked, onClick }) {
  return (
    <label className="input--radio" htmlFor={value}>
      <input
        type="radio"
        id={value}
        name={name}
        value={value}
        defaultChecked={defaultChecked}
        onClick={onClick}
      />
      {value}
    </label>
  );
}

export function AddressInput() {
  return (
    <span className="input--address">
      <TextInput name="streetAddress" />
      <TextInput name="city" />
      <TextInput name="postcode" />
      <TextInput name="country" />
    </span>
  );
}

export function DatePicker({ name }) {
  return (
    <label htmlFor={name} className="input--date">
      {name.replace(/([a-z])([A-Z])/g, "$1 $2")}
      <input type="date" id={name} name={name} required />
    </label>
  );
}

export function SelectInput({ name, children }) {
  return (
    <label htmlFor={name} className="input--select">
      {name.replace(/([a-z])([A-Z])/g, "$1 $2")}
      <select>{children}</select>
    </label>
  );
}
