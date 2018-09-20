import React from "react";
import { Editor } from "@tinymce/tinymce-react";
import styles from "./WYSIWYGFieldType.less";

export class WYSIWYGFieldType extends React.Component {
  handleEditorChange = evt => {
    if (this.props.onChange) {
      // getContent() appears to do some event
      // batching and may cause problems
      this.props.onChange(this.props.name, evt.target.getContent());
    }
  };

  render() {
    return (
      <React.Fragment>
        <label>{this.props.label}</label>
        <Editor
          className={styles.WYSIWYGFieldType}
          initialValue={this.props.value || ""}
          init={{
            plugins: "link image code",
            toolbar: this.props.datatype.includes("advanced")
              ? "undo redo | bold italic | link image | alignleft aligncenter alignright | code | styleselect"
              : "undo redo | bold italic | alignleft aligncenter alignright | code"
          }}
          onChange={this.handleEditorChange}
        />
      </React.Fragment>
    );
  }
}
