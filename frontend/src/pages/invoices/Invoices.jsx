import React from "react";
import { useUser } from "../../contexts/UserContext";
import Splash from "../../components/Splash/Splash";
import "./Invoices.scss";

export default function Invoices() {
  const currentUser = useUser();

  return (
    <>
      <section className="invoices">
        {currentUser ? <Splash loggedIn /> : <Splash />}
      </section>
    </>
  );
}
