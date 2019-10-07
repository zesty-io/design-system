import React from "react";
import styles from "./Markdown.less";
export class MarkdownEditor extends React.Component {
  onChange = evt => {
    this.props.onChange(evt.target.value);
  };

  render() {
    return (
      <textarea
        className={styles.Markdown}
        onChange={this.onChange}
        placeholder={this.props.placeholder}
        defaultValue={this.props.value}
      />
    );
  }
}
