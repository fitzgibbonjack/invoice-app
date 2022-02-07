import React from "react";
import { Link, useLocation } from "react-router-dom";
import Illustration from "../../assets/illustration.svg";
import "./Splash.scss";

export default function Splash({ login }) {
  const location = useLocation();

  return (
    <section className="splash">
      <img
        src={Illustration}
        className="splash__img"
        alt="Woman inside an envolope with a megaphone in her hand"
      />
      <h2 className="splash__title">
        {login ? "Stay on top of your invoices" : "There is nothing here"}
      </h2>
      {login ? (
        <p className="splash__text">
          Get started by <span className="emphasis">creating</span> an account
          or using your existing credentials to{" "}
          <span className="emphasis">log in.</span>
        </p>
      ) : (
        <p className="splash__text">
          Create a new invoice by clicking the{" "}
          <span className="emphasis">New Invoice</span> button and get started
        </p>
      )}

      {login && (
        <div className="splash__btns">
          <Link
            to="/signup"
            state={{ background: location }}
            className="button"
          >
            Create account
          </Link>
          <Link to="/login" state={{ background: location }}>
            Log In
          </Link>
        </div>
      )}
    </section>
  );
}
