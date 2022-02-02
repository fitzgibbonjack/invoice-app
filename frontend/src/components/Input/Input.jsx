import React from "react";
import "./Input.scss";

export default function Input({ label, type }) {
  return (
    <>
      <label htmlFor={label}>{label}</label>
      <input type={type} id={label} required />
    </>
  );
}
