import React from "react";
import { EditorState } from "prosemirror-state";
import { EditorView } from "prosemirror-view";
import "prosemirror-view/style/prosemirror.css";
import { parser } from "./HtmlEditor";

// import './Editor.css'

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
    // Perf: parsing a prosemirror doc in the update lifecycle is expensive so only do so when the content has changed
    if (this.props.value !== nextProps.value) {
      return true;
    }

    return false;
  }

  componentDidUpdate() {
    /**
     * Prosemirror is an uncontrolled react component.
     * Because of this we need to update prosemirrors internal document
     * whenever the value of this component changes. This requires reparsing the html
     * string into a prosemirror document and recreating the editor state.
     */
    const parse = parser(this.props.options.schema);
    const doc = parse(this.props.value);

    this.view.updateState(
      EditorState.create({
        ...this.props.options,
        doc: doc,
      })
    );
  }

  render() {
    const editor = <div ref={this.editorRef} />;

    return this.props.render
      ? this.props.render({
          editor,
          view: this.view,
        })
      : editor;
  }
}
