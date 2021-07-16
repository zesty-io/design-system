import React, { useEffect, useRef } from "react";
import { EditorState } from "prosemirror-state";
import { EditorView } from "prosemirror-view";
import "prosemirror-view/style/prosemirror.css";

const Editor = ({
  autoFocus,
  options,
  onChange,
  attributes,
  nodeViews,
  render,
}) => {
  const editorRef = useRef();
  const view = useRef(
    new EditorView(null, {
      state: EditorState.create(options),
      dispatchTransaction: (transaction) => {
        const { state, transactions } = view.current.state.applyTransaction(
          transaction
        );

        view.current.updateState(state);

        if (transactions.some((tr) => tr.docChanged)) {
          onChange(state.doc);
        }

        //forceUpdate();
      },
      attributes,
      nodeViews,
    })
  );

  useEffect(() => {
    editorRef.current.appendChild(view.current.dom);

    if (autoFocus) {
      view.current.focus();
    }
  }, []);

  useEffect(() => {
    view.current.updateState(EditorState.create(options));
  }, [options]);

  const editor = <div ref={editorRef} />;

  return render
    ? render({
        editor,
        view: view.current,
      })
    : editor;
};

export default Editor;
