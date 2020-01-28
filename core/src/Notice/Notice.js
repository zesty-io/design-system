import React from "react";
import cx from "classnames";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faExclamationTriangle } from "@fortawesome/free-solid-svg-icons";

import styles from "./Notice.less";
export const Notice = React.memo(function Notice(props) {
  return (
    <aside className={cx(styles.Notice, styles.Warn, props.className)}>
      <FontAwesomeIcon icon={faExclamationTriangle} className={styles.Icon} />
      {props.children}
    </aside>
  );
});
