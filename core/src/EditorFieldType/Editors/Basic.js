import React from "react";
import { MenuBar } from "@aeaton/react-prosemirror";
// import { options } from "@aeaton/react-prosemirror-config-default";

import { HtmlEditor } from "./react-prosemirror";
import { options, menu } from "./react-prosemirror-config";
// import menu from "./react-prosemirror-config";

import styles from "./Basic.less";
export function BasicEditor({ value, onChange }) {
  return (
    <div className={styles.BasicEditor}>
      <HtmlEditor
        options={options}
        value={value}
        onChange={onChange}
        render={({ editor, view }) => (
          <div>
            <MenuBar menu={menu} view={view} />
            {editor}
          </div>
        )}
      />
    </div>
  );
}
