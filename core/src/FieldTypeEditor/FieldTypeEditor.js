import React, { useState } from "react";
import cx from "classnames";

import { Select, Option } from "../Select";
import { FieldLabel } from "../FieldLabel";
import { FieldDescription } from "../FieldDescription";
import { Converter } from "./Converter";

import styles from "./FieldTypeEditor.less";
export const FieldTypeEditor = React.memo(function FieldTypeEditor(props) {
  // Handle legacy wysiwyg_advanced field datatype
  const initialEditorType = props.datatype === "wysiwyg_advanced" ? "wysiwyg_basic" : props.datatype;
  
  // manage component state as the experience allows switching editor types
  const [editor, setEditor] = useState(initialEditorType);

  return (
    <div className={cx(styles.FieldTypeEditor, props.className)}>
      <label className={styles.FieldTypeEditorLabel}>
        <FieldLabel
          label={props.label}
          required={props.required}
          tag={props.tag}
          tooltip={props.tooltip}
        />
        <Select
          name="editor"
          className={styles.EditorSelection}
          onSelect={(editor) => setEditor(editor)}
          value={editor}
        >
          <Option value="wysiwyg_basic" text="WYSIWYG" />
          <Option value="markdown" text="Markdown" />
          <Option value="article_writer" text="Inline" />
          <Option value="html" text="HTML" />
        </Select>
      </label>

      <div className={styles.FieldTypeEditorPM}>
        <Converter
          editor={editor}
          value={props.value}
          version={props.version}
          name={props.name}
          datatype={props.datatype}
          onChange={props.onChange}
          mediaBrowser={props.mediaBrowser}
        />
      </div>

      {props.description && (
        <FieldDescription description={props.description} />
      )}
    </div>
  );
});