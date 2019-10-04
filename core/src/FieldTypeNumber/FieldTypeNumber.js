import React, { useState } from "react";
import cx from "classnames";

import { Input } from "../Input";
import { FieldLabel } from "../FieldLabel";
import { FieldDescription } from "../FieldDescription";

import styles from "./FieldTypeNumber.less";
export const FieldTypeNumber = React.memo(props => {
  console.log("FieldTypeNumber:render");

  const [number, setNumber] = useState(props.value || "");

  return (
    <label className={cx(styles.FieldTypeNumber, props.className)}>
      <FieldLabel
        label={props.label}
        required={props.required}
        tag={props.tag}
        tooltip={props.tooltip}
      />

      <Input
        type="number"
        required={props.required}
        value={number}
        onChange={evt => {
          if (props.onChange) {
            props.onChange(props.name, evt.target.value, props.datatype);
          }
          setNumber(evt.target.value);
        }}
      />

      <FieldDescription description={props.description} />
    </label>
  );
});
