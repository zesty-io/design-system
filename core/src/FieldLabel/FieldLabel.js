import React from "react";
import styles from "./FieldLabel.less";
import cx from "classnames";
import { Infotip } from "../Infotip";

export function FieldLabel(props) {
  return (
    <p className={styles.TextFieldTypeLabel}>
      <span>
        {props.tooltip && (
          <Infotip className={styles.ToolTip} title={props.tooltip} />
        )}
        {props.label}
        {props.required && (
          <span className={styles.TextFieldRequired}>*</span>
        )}{""}
        {props.subLabel && (
          <span className={styles.SubLabel}>{props.subLabel}</span>
        )}
        {props.tag && <span className={styles.Tag}>{props.tag}</span>}
      </span>
      {props.maxLength && (
        <span className={styles.ValidationLimitHelper}>
          {props.valueLength}/{props.maxLength}
        </span>
      )}
    </p>
  );
}
