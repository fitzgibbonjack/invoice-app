import React, { useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { deleteDoc, doc } from "firebase/firestore";
import { db } from "../../firebase";
import { useUser } from "../../contexts/UserContext";

import Modal from "../Modal/Modal";
import "./Delete.scss";

export default function Delete() {
  const params = useParams();
  const user = useUser();
  const navigate = useNavigate();
  const invoiceId = params.invoiceId;

  // block page scroll on component mount
  useEffect(() => {
    document.body.style.overflow = "hidden";
    return () => (document.body.style.overflow = "");
  }, []);

  const handleDelete = () => {
    navigate("/");
    const docRef = doc(db, user.uid, invoiceId);
    deleteDoc(docRef)
      .then(() => console.log(`invoice #${invoiceId} deleted`))
      .catch((error) => console.log(error));
  };

  return (
    <Modal title="Comfirm deletion" className="delete">
      <p className="txt--secondary">
        Are you sure you want to delete invoice #{invoiceId}? This action cannot
        be undone.
      </p>

      <button className="button button--4" onClick={handleDelete}>
        Delete
      </button>
    </Modal>
  );
}
