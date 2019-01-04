import React from "react";
import { MenuBar, Floater } from "@aeaton/react-prosemirror";
// import { options } from "@aeaton/react-prosemirror-config-default";

import { HtmlEditor } from "./react-prosemirror/HtmlEditor";
import { options, inline } from "./react-prosemirror-config";
import { ImageResizeView } from "./react-prosemirror-views/ImageResizeView";

import styles from "./Inline.less";
export function InlineEditor({ value, onChange }) {
  return (
    <HtmlEditor
      options={options}
      value={value}
      onChange={onChange}
      render={({ editor, view }) => (
        <section className={styles.InlineEditor}>
          <Floater view={view}>
            <MenuBar menu={inline} view={view} />
          </Floater>
          {editor}
        </section>
      )}
      nodeViews={{
        image(node, view, getPos) {
          return new ImageResizeView(node, view, getPos);
        }
      }}
    />
  );
}
