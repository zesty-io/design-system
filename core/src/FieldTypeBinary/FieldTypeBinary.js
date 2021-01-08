import React from "react";
import cx from "classnames";

import { ToggleButton } from "../ToggleButton";
import { FieldLabel } from "../FieldLabel";
import { FieldDescription } from "../FieldDescription";

import styles from "./FieldTypeBinary.less";
export const FieldTypeBinary = React.memo(function FieldTypeBinary(props) {
  // console.log("FieldTypeBinary:render");

  return (
    <article className={cx(styles.FieldTypeBinary, props.className)}>
      <label className={styles.FieldTypeBinaryLabel}>
        <FieldLabel
          label={props.label}
          required={props.required}
          tag={props.tag}
          tooltip={props.tooltip}
        />
      </label>
      <div className={styles.switch}>
        <ToggleButton
          {...props}
          onChange={(value, name) => {
            if (props.onChange) {
              props.onChange(value, name, props.datatype);
            }
          }}
        />
        <span className={styles.slider} />
      </div>
      <FieldDescription description={props.description} />
    </article>
  );
});
