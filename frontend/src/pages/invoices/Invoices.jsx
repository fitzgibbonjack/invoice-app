import React from "react";
import { Link, useLocation } from "react-router-dom";
import { useUser } from "../../contexts/UserContext";
import { signOut } from "firebase/auth";
import { auth } from "../../firebase";

export default function Invoices() {
  const currentUser = useUser();
  const location = useLocation();

  return (
    <>
      <section>
        <h1>Invoices</h1>

        <p>{currentUser && currentUser.email}</p>

        {currentUser && (
          <button
            type="button"
            className="button"
            onClick={() => signOut(auth)}
          >
            Log out
          </button>
        )}

        {!currentUser && (
          <>
            <Link to={`/login`} state={{ background: location }}>
              Log In
            </Link>
            <Link to={`/signup`} state={{ background: location }}>
              Sign Up
            </Link>
          </>
        )}
      </section>
    </>
  );
}
