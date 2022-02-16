import React from "react";
import { useNavigate } from "react-router-dom";
import "./GoBack.scss";

export default function GoBack() {
  const navigate = useNavigate();

  const goBack = () => {
    navigate(-1);
  };
  return (
    <button className="goBack" onClick={goBack}>
      Go back
    </button>
  );
}
