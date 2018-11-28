import React from "react";
// import { MenuBar } from "@aeaton/react-prosemirror";
// import { options } from "@aeaton/react-prosemirror-config-default";

import { HtmlEditor } from "./react-prosemirror/HtmlEditor";
import { MenuBar } from "./react-prosemirror/MenuBar";
import { options, menu } from "./react-prosemirror-config";
// import menu from "./react-prosemirror-config";

import { ImageResizeView } from "./react-prosemirror-views/ImageResizeView";

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
        nodeViews={{
          resizableImage(node, view, getPos) {
            return new ImageResizeView(node, view, getPos);
          }
        }}
      />
    </div>
  );
}
