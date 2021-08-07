import React, { forwardRef } from "react";
import cx from "classnames";

import { Input } from "../Input";
import { FieldLabel } from "../FieldLabel";
import { FieldDescription } from "../FieldDescription";

import styles from "./FieldTypeText.less";
export const FieldTypeText = React.memo(  forwardRef(function FieldTypeText(props, ref) {
  // console.log("FieldTypeText:render");

  if (!props.name) {
    throw new Error(
      'Missing required attribute "name". See https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input#Attributes'
    );
  }

  const maxLength = props.maxLength ? props.maxLength : 150;
  const valueLength =
    props.value && props.value.length ? props.value.length : 0;

  return (
    <label
      ref={props.innerRef}
      className={cx(
        styles.FieldTypeText,
        props.className,
        valueLength > maxLength ? styles.Error : ""
      )}
    >
      <FieldLabel
        label={props.label}
        required={props.required}
        tag={props.tag}
        maxLength={maxLength}
        valueLength={valueLength}
        tooltip={props.tooltip}
      />
      <Input
        {...props}
        ref={ref}
        type={props.type || "text"}
        name={props.name}
        value={props.value}
        placeholder={props.placeholder}
        required={props.required}
        autoFocus={props.autofocus}
        onChange={(evt) => {
          if (props.onChange) {
            props.onChange(evt.target.value, evt.target.name, props.datatype);
          }
        }}
        disabled={props.disabled}
        error={props.error}
      />
      {valueLength > maxLength && (
        <span className={styles.ErrorDescription}>
          Your input is over the specified limit
        </span>
      )}
      <FieldDescription description={props.description} />
    </label>
  );
}));
