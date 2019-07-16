import React from "react";
import styles from "./FieldLabel.less";
import cx from "classnames";
import { Infotip } from "../Infotip";

export function FieldLabel(props) {
  return (
    <p className={styles.TextFieldTypeLabel}>
      <span>
        {props.label}
        {props.required && <span className={styles.TextFieldRequired}>*</span>}
        {props.tooltip && (
          <Infotip className={styles.ToolTip} title={props.tooltip} />
        )}
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
