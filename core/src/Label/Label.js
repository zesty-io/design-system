import React from "react";

import styles from "./Label.less";

export const Label = ({ label, name, datatype, required }) => (
  <label className={styles.Label}>
    {label}{" "}
    <span className={styles.Context}>
      [{name}]{datatype}
    </span>
    {required && <span style={{ color: "#9a2803" }}>*</span>}
  </label>
);
