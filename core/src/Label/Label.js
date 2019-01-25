import React from "react";

import styles from "./Label.less";

export const Label = ({ required, children }) => (
  <label className={styles.Label}>
    {children}
    {required && <span style={{ color: "#9a2803" }}>*</span>}
  </label>
);
