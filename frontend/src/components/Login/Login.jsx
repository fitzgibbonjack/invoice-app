import React from "react";
import Input from "../Input/Input";
import Button from "../Button/Button";
import "./Login.scss";

export default function Login() {
  return (
    <div className="login">
      <form action="" className="login__form">
        <Input type="email" name="email" />
        <Input type="password" name="password" />

        <Button type="submit" className="login__submit" form="login">
          Log in
        </Button>
      </form>
      <p className="login__text">
        No account?{" "}
        <button type="submit" className="login__create">
          Create one
        </button>
      </p>
    </div>
  );
}
