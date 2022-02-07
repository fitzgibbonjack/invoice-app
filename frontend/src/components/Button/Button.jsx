import React from "react";
import "./Button.scss";

export default function Button({ children, className, type, form, onClick }) {
  return (
    <button
      className={`button ${className}`}
      type={type}
      form={form}
      onClick={onClick}
    >
      {children}
    </button>
  );
}
