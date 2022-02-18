import React from "react";
import { useNavigate } from "react-router-dom";
import "./GoBack.scss";

export default function GoBack({ className }) {
  const navigate = useNavigate();

  const goBack = () => {
    navigate(-1);
  };
  return (
    <button className={`goBack ${className}`} onClick={goBack}>
      Go back
    </button>
  );
}
