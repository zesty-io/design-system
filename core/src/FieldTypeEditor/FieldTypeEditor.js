import React, { useEffect, useState } from "react";
import cx from "classnames";
import showdown from "showdown";

import { BasicEditor } from "./Editors/Basic.js"; // Covers both WYSIWYGBasic & WYSIWYGAdvanced field types
import { InlineEditor } from "./Editors/Inline.js";
import { MarkdownEditor } from "./Editors/Markdown.js";
import { HtmlEditor } from "./Editors/Html.js";

import { Select, Option } from "../Select";
import { FieldLabel } from "../FieldLabel";
import { FieldDescription } from "../FieldDescription";

const converter = new showdown.Converter({
  noHeaderId: true,
  tables: true,
  strikethrough: true,
  // backslashEscapesHTMLTags: true
});

import styles from "./FieldTypeEditor.less";
export const FieldTypeEditor = React.memo(function FieldTypeEditor(props) {
  const [content, setContent] = useState(props.value || "");

  // update on external props change
  useEffect(() => {
    setContent(props.value || "");
  }, [props.value]);

  // Handle legacy wysiwyg_advanced field type
  const [editorType, setEditorType] = useState(
    props.type === "wysiwyg_advanced"
      ? "wysiwyg_basic"
      : props.type || "wysiwyg_basic"
  );

  const onChange = (value) => {
    // Prosemirror leaves a lingering p tag which is
    // problematic for consumers who check for empty values
    if (value === "<p></p>") {
      value = "";
    }

    // Set internal state before we alter value
    setContent(value);

    // Prosemirror triggers on change events when focusing in and out
    // of the editor so check whether the value has changed.
    if (props.value !== value) {
      if (props.onChange) {
        // Convert the content on the way out of the component
        // When sendings changes to redux store convert to the initial field types value
        // This ensures if it's a markdown field that is being viewed as an html editor it is
        // still saved as markdown content
        let storeContent = value;
        if (props.type === "markdown") {
          if (editorType !== "markdown") {
            storeContent = converter.makeMd(storeContent);
          }
        } else {
          if (editorType === "markdown") {
            storeContent = converter.makeHtml(storeContent);
          }
        }

        props.onChange(storeContent, props.name, props.datatype);
      }
    }
  };

  const selectEditor = (editor) => {
    setEditorType(editor);

    // Convert the content on the way into the component
    // When selecting an editor we convert the content
    // to the appropriate type of value (Markdown | HTML)
    setContent(
      editor === "markdown"
        ? converter.makeMd(content)
        : converter.makeHtml(content)
    );
  };

  const renderEditor = () => {
    switch (editorType) {
      case "wysiwyg_basic":
      case "wysiwyg_advanced":
        return <BasicEditor value={content} onChange={onChange} />;
      case "markdown":
        return <MarkdownEditor value={content} onChange={onChange} />;
      case "article_writer":
        return <InlineEditor value={content} onChange={onChange} />;
      case "html":
        return <HtmlEditor value={content} onChange={onChange} />;
      default:
        return (
          <div>
            <h1>Invalid Editor</h1>
          </div>
        );
    }
  };

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
          name="editorType"
          className={styles.EditorSelection}
          onSelect={selectEditor}
          value={editorType}
        >
          <Option value="wysiwyg_basic" text="WYSIWYG" />
          <Option value="markdown" text="Markdown" />
          <Option value="article_writer" text="Inline" />
          <Option value="html" text="HTML" />
        </Select>
      </label>

      <div className={styles.FieldTypeEditorPM}>{renderEditor()}</div>

      {props.description && (
        <FieldDescription description={props.description} />
      )}
    </div>
  );
});
