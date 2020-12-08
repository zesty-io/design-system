import React from "react";
import cx from "classnames";
import styles from "./CheckeredBackground.less";

export function CheckeredBackground(props) {
  return (
    <div {...props}  className={cx(styles.CheckeredBackground, props.className)}>
       {props.children}
    </div>
  )
}
