import React from "react";
import cx from "classnames";
import styles from "./Divider.less";
export function Divider(props) {
  return <hr className={cx(styles.Divider, props.className)} />;
}
