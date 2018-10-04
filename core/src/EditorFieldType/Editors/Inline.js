import React from "react";
import { HtmlEditor } from "./react-prosemirror";
import { CustomMenuBar } from "./react-prosemirror/CustomMenuBar";
import { options, inlineMenu } from "./react-prosemirror-config";

import styles from "./Inline.less";

const Menu = ({ editor, state, view, dispatch }) => {
  let inlineStyles = { top: 0, left: 0, display: "none" };

  if (view) {
    if (state.selection.$anchor.pos !== state.selection.$head.pos) {
      const coords = view.coordsAtPos(state.selection.$anchor.pos);
      inlineStyles = {
        top: coords.top - 35,
        left: coords.left - 100,
        display: "block"
      };
    }
  }

  return (
    <section className={styles.InlineEditor}>
      <CustomMenuBar
        style={inlineStyles}
        className={styles.Menu}
        menu={inlineMenu}
        state={state}
        dispatch={dispatch}
      />
      {editor}
    </section>
  );
};

export function InlineEditor({ value, onChange }) {
  return (
    <HtmlEditor
      options={options}
      value={value}
      onChange={onChange}
      render={Menu}
    />
  );
}
