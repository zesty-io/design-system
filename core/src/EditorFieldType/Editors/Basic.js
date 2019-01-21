import React from "react";

import { HtmlEditor } from "@aeaton/react-prosemirror";
// import { MenuBar } from "@aeaton/react-prosemirror";
import { MenuBar } from "./react-prosemirror-menu/MenuBar";

import { schema } from "./react-prosemirror-schema";
import { plugins } from "./react-prosemirror-plugins";
import { menu } from "./react-prosemirror-menu";

import { ImageResizeView } from "./prosemirror-views/ImageResizeView";
import { IframeResizeView } from "./prosemirror-views/IframeResizeView";
import { VideoResizeView } from "./prosemirror-views/VideoResizeView";

import { Modal } from "../../Modal";

import styles from "./Basic.less";
export function BasicEditor({ value, onChange }) {
  return (
    <div className={styles.BasicEditor}>
      <HtmlEditor
        options={{ plugins, schema }}
        value={value}
        onChange={onChange}
        render={({ editor, view }) => (
          <div>
            {/*<Modal onClose={() => {}} onOpen={() => {}}>
              TEST
            </Modal>*/}

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
