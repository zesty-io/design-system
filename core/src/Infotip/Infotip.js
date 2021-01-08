import React from "react";
import cx from "classnames";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faQuestionCircle } from "@fortawesome/free-solid-svg-icons";

import styles from "./Infotip.less";
export function Infotip(props) {
  return (
    <span className={cx(styles.tip, props.className)}>
      <FontAwesomeIcon icon={faQuestionCircle} className={styles.tipIcon} />
      <small className={styles.tipText}>
        {props.children}
        {props.title}
      </small>
    </span>
  );
}
