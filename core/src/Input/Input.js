import React from "react";
import styles from "./Input.less";
import cx from "classnames";

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
