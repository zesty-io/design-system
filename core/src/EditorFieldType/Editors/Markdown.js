import React from "react";
import showdown from "showdown";
import turndown from "turndown";
import { gfm } from "turndown-plugin-gfm";

import styles from "./Markdown.less";
export class MarkdownEditor extends React.Component {
  componentWillMount() {
    this.toHtml = new showdown.Converter();
    this.toMarkdown = new turndown({
      headingStyle: "atx"
    });
    this.toMarkdown.use(gfm);

    // Handle legacy API data that is in the markdown format
    // convert it to html and trigger an update cycle
    if (!this.props.editorChanged && this.props.initialType === "markdown") {
      this.props.onChange(this.toHtml.makeHtml(this.props.value));
    }
  }

  onChange = evt => {
    this.props.onChange(this.toHtml.makeHtml(evt.target.value));
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
