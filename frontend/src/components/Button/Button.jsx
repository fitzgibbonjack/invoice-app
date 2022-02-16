import React from "react";
import "./Button.scss";

export default function Button({ children, className, type, icon, onClick }) {
  return (
    <button
      className={`button button--1 icon ${className}`}
      type={type}
      onClick={onClick}
    >
      {icon && <span className="button__icon">{icon}</span>}
      {children}
    </button>
  );
}
