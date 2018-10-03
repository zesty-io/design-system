import React from "react";
import { HtmlEditor, MenuBar } from "@aeaton/react-prosemirror";
import { options, menu } from "@aeaton/react-prosemirror-config-default";

export function AdvancedEditor({ value, onChange }) {
  return (
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
  );
}
