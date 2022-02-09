import React from "react";
import "./Button.scss";

export default function Button({ children, className, type, form, icon }) {
  return (
    <button className={`button ${className}`} type={type} form={form}>
      {icon && <span className="button__icon">{icon}</span>}
      {children}
    </button>
  );
}
