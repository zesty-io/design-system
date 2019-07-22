import React from "react";
import styles from "./Textarea.less";
import cx from "classnames";

export function Textarea(props) {
  return (
    <textarea
      {...props}
      className={cx(styles.Textarea, props.className)}
      value={this.props.value === null ? "" : this.props.value}
    />
  );
}
