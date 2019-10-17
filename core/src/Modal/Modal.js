import React, { useState, useEffect } from "react";
import cx from "classnames";

import { Button } from "../Button";

import styles from "./Modal.less";
export const Modal = React.memo(function Modal(props) {
  const [open, setOpen] = useState(Boolean(props.open));

  const styleLocal = props.type === "local" ? styles.Local : null;
  const styleOpen = open ? styles.Open : null;

  const onClose = evt => {
    setOpen(false);
    if (props.onClose) {
      props.onClose(evt);
    }
  };

  const onEsc = evt => {
    if (evt.key === "Escape" || evt.keyCode == 27) {
      onClose(evt);
    }
  };

  useEffect(() => {
    window.addEventListener("keyup", onEsc);
    return () => {
      window.removeEventListener("keyup", onEsc);
    };
  }, []);

  // Allow consumer to update internal open state
  useEffect(() => setOpen(Boolean(props.open)), [props.open]);

  return (
    <div className={cx(styles.ModalAligner, styleLocal, styleOpen)}>
      <article className={cx(styles.Modal, styleLocal, props.className)}>
        <Button className={styles.Close} onClick={onClose}>
          <i className="fa fa-times" aria-hidden="true" />
        </Button>
        {props.children}
      </article>
    </div>
  );
});

export const ModalHeader = React.memo(function ModalHeader(props) {
  return (
    <header className={cx(styles.ModalHeader, props.className)}>
      {props.children}
    </header>
  );
});

export const ModalContent = React.memo(function ModalContent(props) {
  return (
    <main {...props} className={cx(styles.ModalContent, props.className)}>
      {props.children}
    </main>
  );
});

export const ModalFooter = React.memo(function ModalFooter(props) {
  return (
    <footer className={cx(styles.ModalFooter, props.className)}>
      {props.children}
    </footer>
  );
});
