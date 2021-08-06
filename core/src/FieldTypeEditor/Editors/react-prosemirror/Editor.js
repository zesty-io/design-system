import React from "react";
import { EditorState } from "prosemirror-state";
import { EditorView } from "prosemirror-view";
import "prosemirror-view/style/prosemirror.css";

export default class Editor extends React.Component {
  constructor(props) {
    super(props);

    this.editorRef = React.createRef();

    this.view = new EditorView(null, {
      state: EditorState.create(props.options),
      dispatchTransaction: (transaction) => {
        const { state, transactions } = this.view.state.applyTransaction(
          transaction
        );

        this.view.updateState(state);

        if (transactions.some((tr) => tr.docChanged)) {
          this.props.onChange(state.doc);
        }

        this.forceUpdate();
      },
      attributes: this.props.attributes,
      nodeViews: this.props.nodeViews,
    });
  }

  componentDidMount() {
    this.editorRef.current.appendChild(this.view.dom);

    if (this.props.autoFocus) {
      this.view.focus();
    }
  }

  shouldComponentUpdate(nextProps) {
    // If the prosemirror options have changed
    // trigger prosemirrors internal document update
    if (nextProps.options !== this.props.options) {
      this.view.updateState(EditorState.create(nextProps.options));
    }

    return false
  }

  render() {
    // console.log('Editor:render');

    const editor = <div ref={this.editorRef} />;

    return this.props.render
      ? this.props.render({
          editor,
          view: this.view,
        })
      : editor;
  }
}
