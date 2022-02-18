import React from "react";
import { useNavigate } from "react-router-dom";
import { doc, setDoc, Timestamp } from "firebase/firestore";
import { useUser } from "../../contexts/UserContext";
import { db } from "../../firebase";
import { generateId } from "../../helpers/generateId";
import "./NewInvoiceControls.scss";

export default function NewInvoiceControls({ itemCount }) {
  const navigate = useNavigate();
  const user = useUser();

  const saveInvoice = (e, status) => {
    e.preventDefault();
    const form = e.currentTarget.form;
    const data = new FormData(form);

    if (!form.checkValidity()) {
      form.reportValidity();
      return;
    }

    // add invoice to firestore
    setDoc(doc(db, user.uid, generateId()), {
      description: data.get("projectDescription"),
      clientName: data.get("clientName"),
      clientEmail: data.get("clientEmail"),
      status: status,
      senderAddress: {
        street: data.get("streetAddress0"),
        city: data.get("city0"),
        postcode: data.get("postcode0"),
        country: data.get("country0"),
      },
      clientAddress: {
        street: data.get("streetAddress1"),
        city: data.get("city1"),
        postcode: data.get("postcode1"),
        country: data.get("country1"),
      },
      items: [...items],
    })
      .then(() => console.log("document created"))
      .catch((error) => console.log(error));

    // items form data to array of objects
    let items = [];
    for (let i = 0; i < itemCount; i++) {
      items.push({
        name: data.get(`itemName${i}`),
        quantity: data.get(`quantity${i}`),
        price: data.get(`price${i}`),
        total: data.get(`quantity${i}`) * data.get(`price${i}`),
      });
    }
  };

  return (
    <aside className="new__controls">
      <button
        className="button button--2"
        onClick={() => navigate("/")}
        type="button"
      >
        Discard
      </button>
      <button
        className="button button--3"
        type="submit"
        form="newInvoice"
        onClick={(e) => saveInvoice(e, "draft")}
      >
        Save as Draft
      </button>
      <button
        className="button button--1"
        type="submit"
        form="newInvoice"
        onClick={(e) => saveInvoice(e, "pending")}
      >
        Save &amp; Send
      </button>
    </aside>
  );
}
