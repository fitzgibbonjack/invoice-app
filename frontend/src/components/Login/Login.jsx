import React from "react";
import Input from "../Input/Input";
import Button from "../Button/Button";
import "./Login.scss";

export default function Login() {
  return (
    <div className="login">
      <form role="main" action="" className="login__form">
        <Input type="email" label="username" />
        <Input type="password" label="password" />

        <Button type="submit" className="login__submit">
          Log in
        </Button>
      </form>
      <p className="login__text">
        No account?{" "}
        <button type="button" className="login__create">
          Create one
        </button>
      </p>
    </div>
  );
}
