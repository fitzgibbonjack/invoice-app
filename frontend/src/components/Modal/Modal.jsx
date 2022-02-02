import React, { useEffect } from "react";
import ReactDOM from "react-dom";
import { CSSTransition } from "react-transition-group";
import "./Modal.scss";

export default function Modal({ show, title, children, onClose }) {
  useEffect(() => {
    document.body.addEventListener("keyup", (e) => {
      if (e.key === "Escape") {
        onClose();
      }
    });
  }, []);

  return ReactDOM.createPortal(
    <CSSTransition in={show} timeout={{ enter: 0, exit: 500 }} unmountOnExit>
      <div className="modal" onClick={onClose}>
        <section
          className="modal__content"
          onClick={(e) => e.stopPropagation()}
        >
          <header className="modal__header">
            <button className="modal__close" type="button" onClick={onClose}>
              &#x2715;
            </button>
            <h3 className="modal__title">{title}</h3>
          </header>

          <main className="modal__body">{children}</main>
        </section>
      </div>
    </CSSTransition>,
    document.getElementById("portal")
  );
}
