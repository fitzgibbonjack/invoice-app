import React from "react";
import "./Input.scss";

export function TextInput({ name, type = "text" }) {
  let label = name.replace(/([a-z])([A-Z])/g, "$1 $2");
  label = label.replace(/[0-9]/g, "");
  return (
    <label htmlFor={name} className="input--text">
      {label}
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

export function AddressInput({ id = "" }) {
  return (
    <span className="input--address">
      <TextInput name={`streetAddress${id}`} />
      <TextInput name={`city${id}`} />
      <TextInput name={`postcode${id}`} />
      <TextInput name={`country${id}`} />
    </span>
  );
}

export function DatePicker({ name }) {
  let label = name.replace(/([a-z])([A-Z])/g, "$1 $2");
  label = label.replace(/[0-9]/g, "");
  return (
    <label htmlFor={name} className="input--date">
      {label}
      <input type="date" id={name} name={name} required />
    </label>
  );
}

export function SelectInput({ name, children }) {
  let label = name.replace(/([a-z])([A-Z])/g, "$1 $2");
  label = label.replace(/[0-9]/g, "");
  return (
    <label htmlFor={name} className="input--select">
      {label}
      <select id={name} name={name}>
        {children}
      </select>
    </label>
  );
}
