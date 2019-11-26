import React, { useState } from "react";
import { Editor } from "@tinymce/tinymce-react";
import cx from "classnames";

import { Select, Option } from "../Select";
import { FieldLabel } from "../FieldLabel";
import { FieldDescription } from "../FieldDescription";

import styles from "./FieldTypeTinyMCE.less";
export const FieldTypeTinyMCE = React.memo(function FieldTypeTinyMCE(props) {
  console.log("FieldTypeTinyMCE:render");

  return (
    <div className={cx(styles.FieldTypeTinyMCE, props.className)}>
      <label className={styles.FieldTypeTinyMCELabel}>
        <FieldLabel
          label={props.label}
          required={props.required}
          tag={props.tag}
          tooltip={props.tooltip}
        />
      </label>
      <div className={styles.FieldTypeTinyMCEPM}>
        <Editor
          initialValue={props.value}
          init={{
            height: 500,
            menubar: false,
            plugins: [
              "advlist autolink lists link image charmap print preview anchor",
              "searchreplace visualblocks code fullscreen",
              "insertdatetime media table paste code help wordcount"
            ],
            toolbar:
              "undo redo | formatselect | bold italic backcolor | \
             alignleft aligncenter alignright alignjustify | \
             bullist numlist outdent indent | removeformat | help"
          }}
          onChange={(evt, editor) => {
            // console.log("onchange", evt.target);

            props.onChange(props.name, evt.target.getContent(), props.datatype);
          }}
        />
      </div>

      {props.description && (
        <FieldDescription description={props.description} />
      )}
    </div>
  );
});
