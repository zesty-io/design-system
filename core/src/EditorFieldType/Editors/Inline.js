import React from "react";
import { HtmlEditor, MenuBar } from "@aeaton/react-prosemirror";
import { options, menu } from "@aeaton/react-prosemirror-config-default";

import styles from "./Inline.less";
export function InlineEditor({ value, onChange }) {
  return (
    <div className={styles.InlineEditor}>
      <HtmlEditor options={options} value={value} onChange={onChange} />
    </div>
  );
}
