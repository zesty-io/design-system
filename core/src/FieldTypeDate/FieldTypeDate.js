import React from "react";
import cx from "classnames";

import Flatpickr from "react-flatpickr";
import confirmDatePlugin from "flatpickr/dist/plugins/confirmDate/confirmDate";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCalendar } from "@fortawesome/free-solid-svg-icons";

import { Button } from "../Button";
import { FieldDescription } from "../FieldDescription";
import { FieldLabel } from "../FieldLabel";

import styles from "./FieldTypeDate.less";
export const FieldTypeDate = React.memo(function FieldTypeDate(props) {
  // console.log("FieldTypeDate:render");

  const onChange = date => {
    if (props.onChange) {
      props.onChange(date[0], props.name, props.datatype);
    }
  };

  return (
    <label className={cx(styles.FieldTypeDate, props.className)}>
      <FieldLabel
        label={props.label}
        required={props.required}
        tooltip={props.tooltip}
        tag={props.tag}
      />

      <span className={styles.FieldTypeDateInput}>
        {props.datatype === "datetime" ? (
          <Flatpickr
            data-enable-time
            className={cx(styles.DatePicker, props.className)}
            name={props.name}
            value={props.value}
            onChange={onChange}
            options={{
              altFormat: "F j Y, at h:i K",
              altInput: true,
              plugins: [
                new confirmDatePlugin({
                  confirmIcon: "<i class='fa fa-check'></i>",
                  confirmText: "CONFIRM ",
                  showAlways: false,
                  theme: "light"
                })
              ]
            }}
          />
        ) : (
          <Flatpickr
            className={cx(styles.DatePicker, props.className)}
            name={props.name}
            value={props.value}
            onChange={onChange}
          />
        )}
        <Button className={styles.Icon}>
          <FontAwesomeIcon icon={faCalendar} />
        </Button>
      </span>

      <FieldDescription description={props.description} />
    </label>
  );
});
