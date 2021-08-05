import React from "react";
import cx from "classnames";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimesCircle } from "@fortawesome/free-solid-svg-icons";

import styles from "./Tag.less";
export function Tag(props) {
  return (
    <span className={cx(styles.Tag, props.error && styles.Error)}>
      <span className={styles.Content}>{props.children}</span>
      <FontAwesomeIcon
        icon={faTimesCircle}
        className={styles.Remove}
        onClick={(evt) => {
          evt.stopPropagation();
          evt.preventDefault();
          if (props.onRemove) {
            return props.onRemove(props.value, props.name);
          }
        }}
      />
    </span>
  );
}
