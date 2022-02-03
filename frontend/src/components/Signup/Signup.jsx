import React, { useState } from "react";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../firebase";
import { useNavigate } from "react-router-dom";

import Input from "../Input/Input";
import Button from "../Button/Button";
import Error from "../Error/Error";
import "./Signup.scss";

export default function Signup() {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState();
  const navigate = useNavigate();

  async function handleSubmit(e) {
    e.preventDefault();
    let formData = new FormData(e.currentTarget);

    // password match validation
    if (formData.get("password") !== formData.get("passwordComfirmation")) {
      return setError("Passwords do not match");
    }

    try {
      setError("");
      setLoading(true);
      await createUserWithEmailAndPassword(
        auth,
        formData.get("email"),
        formData.get("password")
      );
      setLoading(false);
      navigate("/");
    } catch (error) {
      setError(error.code);
      setLoading(false);
    }
  }

  return (
    <div className="signup">
      {error && <Error message={error} />}

      <form className="signup__form" onSubmit={handleSubmit}>
        <Input type="email" name="email" />
        <Input type="password" name="password" />
        <Input type="password" name="passwordComfirmation" />

        <Button disabled={loading} type="submit" className="signup__submit">
          Sign up
        </Button>
      </form>
    </div>
  );
}
