import React from "react";
import showdown from "showdown";
import turndown from "turndown";

import styles from "./Markdown.less";
export class MarkdownEditor extends React.Component {
  componentWillMount() {
    this.toMarkdown = new turndown();
    this.toHtml = new showdown.Converter();
  }

  onChange = evt => {
    const value = evt.target.value;
    if (this.props.onChange) {
      this.props.onChange(this.toHtml.makeHtml(value));
    }
  };

  render() {
    return (
      <textarea
        className={styles.Markdown}
        onChange={this.onChange}
        placeholder={this.props.placeholder}
        defaultValue={this.toMarkdown.turndown(this.props.value)}
      />
    );
  }
}
