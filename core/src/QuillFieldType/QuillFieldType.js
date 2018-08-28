import React from "react";
import ReactQuill from "react-quill";

import "react-quill/dist/quill.snow.css";

export class QuillFieldType extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      text: props.default
    };
  }

  onEditorStateChange = text => {
    if (this.props.callback) {
      this.props.callback(text);
    }
    this.setState({
      text
    });
  };

  render() {
    const { text } = this.state;
    return (
      <ReactQuill
        value={text}
        theme="snow"
        onChange={this.onEditorStateChange}
      />
    );
  }
}
