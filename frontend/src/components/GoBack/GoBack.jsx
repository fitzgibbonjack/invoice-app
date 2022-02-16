import React from "react";
import { useNavigate } from "react-router-dom";
import "./GoBack.scss";

export default function GoBack() {
  const navigate = useNavigate();
  return (
    <button className="goBack" onClick={() => navigate(-1)}>
      Go back
    </button>
  );
}
