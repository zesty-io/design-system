import React from "react";
import styles from "./Input.less";
import cx from "classnames";

export function Input(props) {
  // if (props.disabled) {
  //   props.disabled = "disabled";
  // }
  return (
    <React.Fragment>
      <input
        {...props}
        onChange={props.onChange ? props.onChange : () => {}}
        className={cx(
          styles.Input,
          props.className,
          props.error ? styles.error : null
        )}
      />
      <span className={styles.ErrorMsg}>{props.error}</span>
    </React.Fragment>
  );
}
