import React from "react";

import { Editor } from "@tinymce/tinymce-react";
export class WYSIWYGFieldType extends React.Component {
  handleEditorChange = evt => {
    if (this.props.callback) {
      // getContent() appears to do some event
      // batching and may cause problems
      this.props.callback(evt.target.getContent());
    }
  };

  render() {
    return (
      <React.Fragment>
        <label>{this.props.label}</label>
        <Editor
          initialValue={this.props.default}
          init={{
            plugins: "link image code",
            toolbar:
              "undo redo | bold italic | alignleft aligncenter alignright | code"
          }}
          onChange={this.handleEditorChange}
        />
      </React.Fragment>
    );
  }
}
