import React from "react";

import styles from "./Toggle.less";
export function Toggle({ checked, onClick }) {
  console.log("checked", checked);
  return (
    <label
      className={styles.switch}
      onClick={evt => {
        evt.stopPropagation();
        evt.preventDefault();
        return onClick();
      }}
    >
      <input type="checkbox" checked={checked === 1} />
      <span className={styles.slider} />
    </label>
  );
}
