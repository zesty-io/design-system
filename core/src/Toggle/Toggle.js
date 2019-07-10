import React from "react";
import styles from "./Toggle.less";

/**
  @props checked 0:1
  @props onChange() React requires onChange handlers 
**/
export function Toggle({ checked, onChange }) {
  return (
    <label className={styles.switch}>
      <input type="checkbox" checked={checked === 1} onChange={onChange} />
      <span className={styles.slider} />
    </label>
  );
}
