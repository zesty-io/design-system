import React from "react";
import styles from "./Textarea.less";
import cx from "classnames";

export function Textarea(props) {
  const opts = {};
  if (props.disabled) {
    opts["disabled"] = "disabled";
  }
  return (
    <textarea
      {...props}
      {...opts}
      className={cx(styles.Textarea, props.className)}
    />
  );
}
