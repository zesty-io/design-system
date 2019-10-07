import React from "react";
import cx from "classnames";

import { Input } from "../Input";
import { FieldLabel } from "../FieldLabel";
import { FieldDescription } from "../FieldDescription";

import styles from "./FieldTypeUrl.less";
export const FieldTypeUrl = React.memo(function FieldTypeUrl(props) {
  // console.log("FieldTypeUrl:render");

  return (
    <article
      className={cx(
        styles.FieldTypeUrl,
        props.className,
        props.maxLength && props.value.length > props.maxLength
          ? styles.Error
          : null
      )}
    >
      <FieldLabel
        label={props.label}
        required={props.required}
        tag={props.tag}
        maxLength={props.maxLength}
        valueLength={(props.value && props.value.length) || "0"}
        tooltip={props.tooltip}
      />
      <Input
        type="url"
        required={props.required}
        onChange={evt => {
          if (props.onChange) {
            props.onChange(props.name, evt.target.value, props.datatype);
          }
        }}
        value={props.value}
      />
      <FieldDescription description={props.description} />
    </article>
  );
});
