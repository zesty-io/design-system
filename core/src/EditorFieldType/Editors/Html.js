import React from "react";
import styles from "./Html.less";
import { html } from "js-beautify";

import { UnControlled as CodeMirror } from "react-codemirror2";
require("codemirror/mode/htmlmixed/htmlmixed");

export class HtmlEditor extends React.Component {
  onChange = (editor, data, value) => {
    if (this.props.onChange) {
      this.props.onChange(value);
    }
  };

  render() {
    return (
      <CodeMirror
        className={styles.Html}
        value={html(this.props.value, {
          indent_size: 2
        })}
        options={{
          mode: "htmlmixed",
          // theme: "material",
          lineNumbers: true
        }}
        onChange={this.onChange}
      />
    );
  }
}
