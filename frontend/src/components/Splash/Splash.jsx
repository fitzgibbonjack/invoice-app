import React from "react";
import { Link, useLocation } from "react-router-dom";
import Illustration from "../../assets/illustration.svg";
import "./Splash.scss";

export default function Splash({ loggedIn }) {
  const location = useLocation();

  return (
    <section className="splash">
      <img
        src={Illustration}
        className="splash__img"
        alt="Woman inside an envolope with a megaphone in her hand"
      />
      <h2 className="splash__title">
        {loggedIn ? "There is nothing here" : "Stay on top of your invoices"}
      </h2>
      {loggedIn ? (
        <p className="splash__text">
          Create a new invoice by clicking the{" "}
          <span className="emphasis">New Invoice</span> button and get started
        </p>
      ) : (
        <p className="splash__text">
          Get started by <span className="emphasis">creating</span> an account
          or using your existing credentials to{" "}
          <span className="emphasis">log in.</span>
        </p>
      )}

      {!loggedIn && (
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
