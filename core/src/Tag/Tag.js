import React from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimesCircle } from "@fortawesome/free-solid-svg-icons";

import styles from "./Tag.less";
export function Tag(props) {
  return (
    <span className={styles.Tag}>
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
