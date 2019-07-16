import React from "react";
import styles from "./FieldLabel.less";
import cx from "classnames";

export function FieldLabel(props) {
  return (
    <p className={styles.TextFieldTypeLabel}>
      <span>
        {props.label}
        {props.required && <span className={styles.TextFieldRequired}>*</span>}
        {props.fieldType && (
          <span className={styles.TextFieldType}>{props.fieldType}</span>
        )}
      </span>
      {props.maxLength && (
        <span className={styles.ValidationLimitHelper}>
          {props.valueLength}/{props.maxLength}
        </span>
      )}
    </p>
  );
}
