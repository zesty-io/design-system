import React from "react";
import { EditorState } from "prosemirror-state";
import { EditorView } from "prosemirror-view";

import MenuBar from "./MenuBar";
import Editor from "./Editor";

class EditorWrap extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      state: EditorState.create(props.options)
    };
  }

  createEditorView = node => {
    if (!this.view) {
      this.view = new EditorView(node, {
        state: this.state.state,
        dispatchTransaction: this.dispatchTransaction,
        attributes: {
          placeholder: this.props.placeholder
        }
      });

      if (this.props.autoFocus) {
        this.view.focus();
      }
    }
  };

  dispatchTransaction = transaction => {
    const state = this.view.state.apply(transaction);
    this.view.updateState(state);
    this.setState({ state });
    this.props.onChange(state.doc.content);
  };

  render() {
    return (
      <section>
        {this.props.render ? (
          this.props.render({
            state: this.state.state,
            dispatch: this.dispatchTransaction,
            editor
          })
        ) : (
          <React.Fragment>
            <MenuBar editor={this.view} />
            <Editor createEditor={this.createEditorView} />
          </React.Fragment>
        )}
      </section>
    );
  }
}

export default Editor;
