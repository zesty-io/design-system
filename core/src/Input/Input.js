import React from "react";
import cx from "classnames";

import styles from "./Input.less";
export function Input(props) {
  return (
    <React.Fragment>
      <input
        {...props}
        className={cx(
          styles.Input,
          props.className,
          props.error ? styles.error : null
        )}
        onChange={props.onChange ? props.onChange : () => {}}
        value={props.value === null ? "" : props.value}
      />
      <span className={styles.ErrorMsg}>{props.error}</span>
    </React.Fragment>
  );
}
