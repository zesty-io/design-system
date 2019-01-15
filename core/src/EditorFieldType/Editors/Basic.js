import React from "react";
// import { MenuBar } from "@aeaton/react-prosemirror";
// import { options } from "@aeaton/react-prosemirror-config-default";

import { HtmlEditor } from "./react-prosemirror/HtmlEditor";
import { MenuBar } from "./react-prosemirror/MenuBar";
import { options, menu } from "./react-prosemirror-config";

import { ImageResizeView } from "./react-prosemirror-views/ImageResizeView";
import { IframeResizeView } from "./react-prosemirror-views/IframeResizeView";
import { VideoResizeView } from "./react-prosemirror-views/VideoResizeView";

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
          image(node, view, getPos) {
            return new ImageResizeView(node, view, getPos);
          },
          iframe(node, view, getPos) {
            return new IframeResizeView(node, view, getPos);
          },
          video(node, view, getPos) {
            return new VideoResizeView(node, view, getPos);
          }
        }}
      />
    </div>
  );
}
