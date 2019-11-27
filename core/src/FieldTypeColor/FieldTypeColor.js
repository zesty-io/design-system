import React, { useState } from "react";
import cx from "classnames";

import { Input } from "../Input";
import { FieldLabel } from "../FieldLabel";
import { FieldDescription } from "../FieldDescription";

import styles from "./FieldTypeColor.less";
export const FieldTypeColor = React.memo(function FieldTypeColor(props) {
  // console.log("Render:FieldTypeColor");

  const [color, setColor] = useState(props.value || "#ffffff");

  return (
    <label className={cx(styles.FieldTypeColor, props.className)}>
      <FieldLabel
        label={props.label}
        required={props.required}
        tag={props.tag}
        tooltip={props.tooltip}
      />

      <div className={styles.FieldTypeColorInput}>
        <Input
          className={styles.ColorInput}
          type="color"
          required={props.required}
          value={color}
          onChange={evt => {
            if (props.onChange) {
              props.onChange(props.name, evt.target.value, props.datatype);
            }
            setColor(evt.target.value);
          }}
        />
        <i className={cx(styles.Icon, "fa fa-paint-brush")} />
      </div>

      <FieldDescription description={props.description} />
    </label>
  );
});
