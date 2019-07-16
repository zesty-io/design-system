import React from "react";
import styles from "./FieldDescription.less";
import cx from "classnames";

export function FieldDescription(props) {
  return <p className={styles.Description}>{props.description}</p>;
}
