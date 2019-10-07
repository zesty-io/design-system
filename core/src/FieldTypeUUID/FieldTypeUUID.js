import React, { useEffect } from "react";
import cx from "classnames";
import uuidv4 from "uuid/v4";

import { Input } from "../Input";
import { FieldDescription } from "../FieldDescription";
import { FieldLabel } from "../FieldLabel";

import styles from "./FieldTypeUUID.less";

export const FieldTypeUUID = React.memo(function FieldTypeUUID(props) {
  // console.log("FieldTypeUUID:render");

  useEffect(() => {
    // NOTE may want to add a check to ensure the itemZUID is 'new'
    if (props.name && !props.value) {
      // there is no UUID and it needs to be generated
      props.onChange(props.name, uuidv4(), props.datatype);
    }
  }, []);

  return (
    <label className={cx(styles.FieldTypeUUID, props.className)}>
      <FieldLabel
        label={props.label}
        required={props.required}
        tag={props.tag}
        tooltip={props.tooltip}
      />
      <div className={styles.DateFieldTypeInput}>
        <i
          className={cx(styles.Icon, "fa fa-clipboard")}
          aria-hidden="true"
          title="Click to Copy"
          onClick={e => {
            const input = document.createElement("input");
            document.body.appendChild(input);
            input.value = props.value;
            input.focus();
            input.select();
            const result = document.execCommand("copy");
            input.remove();
            if (result === "unsuccessful") {
              return props.dispatch(
                notify({
                  type: "error",
                  message: "Failed to copy the team ID to your clipboard"
                })
              );
            }
          }}
        />
        <Input
          type="text"
          readOnly={true}
          required={props.required}
          defaultValue={props.value || ""}
        />
      </div>
      <FieldDescription description={props.description} />
    </label>
  );
});
