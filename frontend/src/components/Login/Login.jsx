import React, { useState } from "react";
import { signInWithEmailAndPassword } from "firebase/auth";
import { useNavigate, Link, useLocation } from "react-router-dom";
import { auth } from "../../firebase";

import Input from "../Input/Input";
import Button from "../Button/Button";
import Error from "../Error/Error";
import "./Login.scss";

export default function Login() {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState();
  const navigate = useNavigate();
  let location = useLocation();

  console.log(location);

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
    <div className="login">
      {error && <Error message={error} />}

      <form className="login__form" onSubmit={handleSubmit}>
        <Input type="email" name="email" />
        <Input type="password" name="password" />

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
    </div>
  );
}
