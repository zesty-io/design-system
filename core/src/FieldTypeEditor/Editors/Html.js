import React from "react";
import styles from "./Html.less";
import { html } from "js-beautify";

import { Controlled as CodeMirror } from "react-codemirror2";
require("codemirror/mode/htmlmixed/htmlmixed");

export class HtmlEditor extends React.Component {
  state = {
    html: html(this.props.value, {
      indent_size: 2,
    }),
  };

  render() {
    return (
      <CodeMirror
        className={styles.Html}
        value={this.state.html}
        options={{
          autoCursor: false,
          mode: "htmlmixed",
          // theme: "material",
          lineNumbers: true,
        }}
        onBeforeChange={(editor, data, value) => {
          this.setState({ html: value.trim() });
        }}
        onChange={(editor, data, value) => {
          if (this.props.onChange) {
            this.props.onChange(value.trim());
          }
        }}
      />
    );
  }
}
