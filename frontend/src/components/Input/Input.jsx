import React from "react";
import "./Input.scss";

export default function Input({ name, type }) {
  return (
    <>
      <label htmlFor={name}>{name.replace(/([a-z])([A-Z])/g, "$1 $2")}</label>
      <input type={type} id={name} name={name} required />
    </>
  );
}
