import React from "react";
import styles from "./Infotip.less";
import cx from "classnames";

export function Infotip(props) {
  return (
    <span className={cx(styles.tip, props.className)}>
      <i
        className={cx(styles.tipIcon, "fa fa-question-circle")}
        aria-hidden="true"
      />
      <p className={styles.tipText}>
        {props.children}
        {props.title}
      </p>
    </span>
  );
}
