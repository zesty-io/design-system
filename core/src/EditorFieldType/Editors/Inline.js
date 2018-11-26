import React from "react";
import { HtmlEditor, MenuBar, Floater } from "@aeaton/react-prosemirror";
// import { options } from "@aeaton/react-prosemirror-config-default";

import { options, inline } from "./react-prosemirror-config";
// import menu from "./react-prosemirror-menus/inline";

import styles from "./Inline.less";
export function InlineEditor({ value, onChange }) {
  return (
    <HtmlEditor
      options={options}
      value={value}
      onChange={onChange}
      render={({ editor, view }) => (
        <section className={styles.InlineEditor}>
          <Floater>
            <MenuBar menu={inline} view={view} />
          </Floater>
          {editor}
        </section>
      )}
    />
  );
}
