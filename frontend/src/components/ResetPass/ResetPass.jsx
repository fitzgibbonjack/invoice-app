import React, { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { auth } from "../../firebase";
import { sendPasswordResetEmail } from "firebase/auth";
import { Link } from "react-router-dom";

import Button from "../Button/Button";
import Input from "../Input/Input";
import Error from "../Error/Error";
import "./ResetPass.scss";

export default function ResetPass() {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState();
  const navigate = useNavigate();
  const location = useLocation();

  const closeModal = () => {
    navigate(-1);
  };

  async function handleSubmit(e) {
    e.preventDefault();
    let formData = new FormData(e.currentTarget);
    try {
      setError("");
      setLoading(true);
      await sendPasswordResetEmail(auth, formData.get("email"));
      closeModal();
    } catch (error) {
      setError(error.code);
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="reset">
      {error && <Error message={error} />}

      <form className="reset__form" onSubmit={handleSubmit}>
        <Input type="email" name="email" />

        <Button disabled={loading} type="submit" className="reset__submit">
          Send reset email
        </Button>
      </form>
    </div>
  );
}
