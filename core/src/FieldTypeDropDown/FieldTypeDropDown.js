import React from "react";
import cx from "classnames";

import { Select, Option } from "../Select";
import { FieldDescription } from "../FieldDescription";
import { FieldLabel } from "../FieldLabel";

import styles from "./FieldTypeDropDown.less";
export const FieldTypeDropDown = React.memo(function FieldTypeDropDown(props) {
  // console.log("FieldTypeDropDown:render");

  return (
    <label className={cx(styles.FieldTypeDropDown, props.className)}>
      <FieldLabel
        label={props.label}
        required={props.required}
        tag={props.tag}
        tooltip={props.tooltip}
      />

      <Select
        name={props.name}
        loading={props.loading}
        value={props.value || "0"}
        onSelect={(value, name) => {
          if (props.onChange) {
            props.onChange(value, name, props.datatype);
          }
        }}
      >
        <Option
          value={props.defaultOptValue || "0"}
          text={props.defaultOptText || "— None —"}
        />
        {props.children
          ? props.children
          : props.options.map((opt, i) => {
              return <Option key={i} {...opt} />;
            })}
      </Select>

      {props.description && (
        <FieldDescription description={props.description} />
      )}
    </label>
  );
});
