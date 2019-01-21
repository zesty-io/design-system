import React from "react";

import styles from "./Modal.less";
export const Modal = ({ onClose, children }) => {
  return (
    <div className={styles.ModalContainer}>
      <div className={styles.Modal}>
        <i className="fa fa-window-close" onClick={onClose} />
        {children}
      </div>
    </div>
  );
};
