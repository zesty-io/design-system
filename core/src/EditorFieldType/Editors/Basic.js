import React from "react";
import { HtmlEditor, MenuBar } from "@aeaton/react-prosemirror";
import { options, menu } from "./react-prosemirror-config";

import styles from "./Basic.less";
export function BasicEditor({ value, onChange }) {
  return (
    <div className={styles.BasicEditor}>
      <HtmlEditor
        options={options}
        value={value}
        onChange={onChange}
        render={({ editor, state, dispatch }) => (
          <div>
            <MenuBar menu={menu} state={state} dispatch={dispatch} />
            {editor}
          </div>
        )}
      />
    </div>
  );
}
