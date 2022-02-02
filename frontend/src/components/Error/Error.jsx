import React from "react";
import "./Error.scss";

export default function Error({ message }) {
  return (
    <div className="error">
      <p className="error__message">{message}</p>
    </div>
  );
}
