import React from "react";

import styles from "./Label.less";

export const Label = ({ label, name, datatype, required }) => (
  <label className={styles.Label}>
    {label}{" "}
    {datatype && name && (
      <span className={styles.Context}>
        <span>[{name}]</span>
        <span>{datatype}</span>
      </span>
    )}
    {required && <span style={{ color: "#9a2803" }}>*</span>}
  </label>
);
