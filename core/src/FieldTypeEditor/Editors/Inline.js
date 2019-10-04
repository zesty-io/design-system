import React from "react";

// import { HtmlEditor } from "@aeaton/react-prosemirror";
import { HtmlEditor } from "./react-prosemirror/HtmlEditor";
import { Floater } from "@aeaton/react-prosemirror";
import { MenuBar } from "./react-prosemirror/MenuBar";

import { schema } from "./react-prosemirror-schema";
import { plugins } from "./react-prosemirror-plugins";
import { inline } from "./react-prosemirror-menu";

import { ImageResizeView } from "./prosemirror-views/ImageResizeView";
import { IframeResizeView } from "./prosemirror-views/IframeResizeView";
import { VideoResizeView } from "./prosemirror-views/VideoResizeView";

import styles from "./Inline.less";
export function InlineEditor({ value, onChange }) {
  return (
    <HtmlEditor
      options={{ plugins, schema }}
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
        },
        iframe(node, view, getPos) {
          return new IframeResizeView(node, view, getPos);
        },
        video(node, view, getPos) {
          return new VideoResizeView(node, view, getPos);
        }
      }}
    />
  );
}
