import React from "react";
import { HtmlEditor } from "./react-prosemirror";
// import MenuBar from "./react-prosemirror/MenuBar";
import { options, inlineMenu } from "./react-prosemirror-config";

import styles from "./Inline.less";

export function InlineEditor({ value, onChange }) {
  return (
    <HtmlEditor
      options={options}
      value={value}
      onChange={onChange}
      render={({ editor, state, view, dispatch }) => (
        <section className={styles.InlineEditor}>
          <CustomMenuBar
            className={styles.Menu}
            menu={inlineMenu}
            state={state}
            dispatch={dispatch}
            view={view}
            floating={true}
          />
          {editor}
        </section>
      )}
    />
  );
}
