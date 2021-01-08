import React from "react";
import cx from "classnames";

import { Textarea } from "../Textarea";
import { FieldLabel } from "../FieldLabel";
import { FieldDescription } from "../FieldDescription";

/**
 * Controlled component
 */
import styles from "./FieldTypeTextarea.less";
export const FieldTypeTextarea = React.memo(function FieldTypeTextarea(props) {
  // console.log("FieldTypeTextarea:render");

  if (!props.name) {
    throw new Error(
      'Missing required attribute "name". See https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input#Attributes'
    );
  }

  return (
    <label
      className={cx(
        styles.FieldTypeTextarea,
        props.className,
        (props.value && props.value.length) > (props.maxLength || 150)
          ? styles.Error
          : ""
      )}
    >
      <FieldLabel
        label={props.label}
        required={props.required}
        tag={props.tag}
        maxLength={props.maxLength || 150}
        valueLength={(props.value && props.value.length) || "0"}
        tooltip={props.tooltip}
      />

      <Textarea
        {...props}
        type="textarea"
        onChange={evt => {
          if (props.onChange) {
            props.onChange(evt.target.value, props.name, props.datatype);
          }
        }}
      />
      <FieldDescription description={props.description} />
    </label>
  );
});
