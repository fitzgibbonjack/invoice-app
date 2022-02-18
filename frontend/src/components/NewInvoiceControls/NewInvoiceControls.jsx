import React from "react";
import { useNavigate } from "react-router-dom";
import { doc, setDoc } from "firebase/firestore";
import { useUser } from "../../contexts/UserContext";
import { db } from "../../firebase";
import "./NewInvoiceControls.scss";

//helpers
import { generateId } from "../../helpers/generateId";
import { formDataToObject } from "../../helpers/formDataToObject";

export default function NewInvoiceControls({ itemCount }) {
  const navigate = useNavigate();
  const user = useUser();

  const saveInvoice = (e, status) => {
    e.preventDefault();
    const form = e.currentTarget.form;
    const data = new FormData(form);

    // validation
    if (!form.checkValidity()) {
      form.reportValidity();
      return;
    }

    // items form data to array of objects
    let items = [];
    for (let i = 0; i < itemCount; i++) {
      items.push({
        name: data.get(`itemName${i}`),
        // data multiplied by 1 to ensure type is number
        quantity: data.get(`quantity${i}`) * 1,
        price: data.get(`price${i}`) * 1,
        total: data.get(`quantity${i}`) * data.get(`price${i}`),
      });
    }

    // add invoice to firestore
    const invoice = formDataToObject(data, items, status);
    setDoc(doc(db, user.uid, generateId()), invoice)
      .then(() => console.log("document created"))
      .catch((error) => console.log(error));

    navigate("/");
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
