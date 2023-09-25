import React, { useState } from "react";
import cx from "classnames";

import { Select, Option } from "../Select";
import { FieldLabel } from "../FieldLabel";
import { FieldDescription } from "../FieldDescription";
import { Converter } from "./Converter";

import styles from "./FieldTypeEditor.less";
export const FieldTypeEditor = React.memo(function FieldTypeEditor(props) {
  // Handle legacy wysiwyg_advanced field datatype
  const initialEditorType =
    props.datatype === "wysiwyg_advanced" ? "wysiwyg_basic" : props.datatype;

  return (
    <div className={cx(styles.FieldTypeEditor, props.className)}>
      <div
        className={styles.FieldTypeEditorPM}
        onFocus={props.onFocus}
        onBlur={props.onBlur}
      >
        <Converter
          editor={props.editor ?? initialEditorType}
          value={props.value}
          version={props.version}
          name={props.name}
          datatype={props.datatype}
          onChange={props.onChange}
          mediaBrowser={props.mediaBrowser}
        />
      </div>
    </div>
  );
});
