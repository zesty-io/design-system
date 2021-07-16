import React from "react";
import styles from "./Markdown.less";

export function MarkdownEditor({ onChange, placeholder, value }) {
  const onEditorChange = (evt) => {
    onChange(evt.target.value);
  };

  return (
    <textarea
      className={styles.Markdown}
      onChange={onEditorChange}
      placeholder={placeholder}
      value={value}
    />
  );
}
