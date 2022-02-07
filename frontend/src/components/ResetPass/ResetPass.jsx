import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { auth } from "../../firebase";
import { sendPasswordResetEmail } from "firebase/auth";

import Modal from "../Modal/Modal";
import Button from "../Button/Button";
import Input from "../Input/Input";
import Alert from "../Alert/Alert";
import "./ResetPass.scss";

export default function ResetPass() {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState();
  const navigate = useNavigate();

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
    <Modal title="Reset password" className="reset">
      {error && <Alert type="error" children={error} />}

      <form className="reset__form" onSubmit={handleSubmit}>
        <Input type="email" name="email" />

        <Button disabled={loading} type="submit" className="reset__submit">
          Get reset link
        </Button>
      </form>
    </Modal>
  );
}
