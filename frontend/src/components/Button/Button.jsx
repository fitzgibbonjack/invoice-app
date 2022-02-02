import React from "react";
import "./Button.scss";

export default function Button({ children, className, type, form }) {
  return (
    <button className={`button ${className}`} type={type} form={form}>
      {children}
    </button>
  );
}
