import React from "react";

import styles from "./Toggle.less";
export function Toggle(props) {
  return (
    <label
      className={styles.switch}
      onClick={evt => {
        evt.stopPropagation();
        props.onClick();
      }}
    >
      <input type="checkbox" checked={props.checked ? "checked" : null} />
      <span className={styles.slider} />
    </label>
  );
}
