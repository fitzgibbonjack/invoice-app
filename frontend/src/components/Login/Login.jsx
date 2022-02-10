import React, { useState } from "react";
import { signInWithEmailAndPassword } from "firebase/auth";
import { useNavigate, Link, useLocation } from "react-router-dom";
import { auth } from "../../firebase";

import Modal from "../Modal/Modal";
import { TextInput } from "../Input/Input";
import Button from "../Button/Button";
import Alert from "../Alert/Alert";
import "./Login.scss";

export default function Login() {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState();
  const navigate = useNavigate();
  let location = useLocation();

  const closeModal = () => {
    navigate(-1);
  };

  async function handleSubmit(e) {
    e.preventDefault();
    let formData = new FormData(e.currentTarget);
    try {
      setError("");
      setLoading(true);
      await signInWithEmailAndPassword(
        auth,
        formData.get("email"),
        formData.get("password")
      );
      closeModal();
    } catch (error) {
      setError(error.code);
    } finally {
      setLoading(false);
    }
  }

  return (
    <Modal title="Log in" className="login">
      {error && <Alert type="error" children={error} />}

      <form className="login__form" onSubmit={handleSubmit}>
        <TextInput type="email" name="email" />
        <TextInput type="password" name="password" />

        <Button disabled={loading} type="submit" className="login__submit">
          Log in
        </Button>
      </form>
      <Link
        to="/reset-password"
        state={location.state && { background: location.state.background }}
        className="login__link"
      >
        Forgot password?
      </Link>
    </Modal>
  );
}
