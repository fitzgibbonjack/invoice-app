import React from "react";
import "./Alert.scss";

export default function Alert({ type, children, className }) {
  switch (type) {
    case "success":
    case "paid":
      return (
        <div className={`alert alert--success ${className}`}>
          <p className="alert__message">{children}</p>
        </div>
      );
    case "pending":
      return (
        <div className={`alert alert--pending ${className}`}>
          <p className="alert__message">{children}</p>
        </div>
      );
    case "secondary":
    case "draft":
      return (
        <div className={`alert alert--secondary ${className}`}>
          <p className="alert__message">{children}</p>
        </div>
      );
    case "error":
      return (
        <div className={`alert alert--error  ${className}`}>
          <p className="alert__message">{children}</p>
        </div>
      );
  }
}
