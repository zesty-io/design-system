import React from "react";
import showdown from "showdown";
// import turndown from "turndown";
// import { gfm } from "turndown-plugin-gfm";

import styles from "./Markdown.less";
export class MarkdownEditor extends React.Component {
  constructor(props) {
    super(props);

    this.converter = new showdown.Converter({
      noHeaderId: true,
      tables: true,
      strikethrough: true
      // backslashEscapesHTMLTags: true
    });

    // this.converter.setFlavor("original");

    // Data can either be (legacy) markdown or (current) html from the API
    let html = this.props.value;

    // It is most likely (legacy) markdown
    if (!this.props.editorChanged && this.props.initialType === "markdown") {
      html = this.converter.makeHtml(html);

      // This will update the global store
      this.props.onChange(html);
    }

    this.state = {
      // Convert back to markdown for this component
      markdown: this.converter.makeMd(html)
    };
  }

  onChange = evt => {
    this.props.onChange(this.converter.makeHtml(evt.target.value));
  };

  render() {
    return (
      <textarea
        className={styles.Markdown}
        onChange={this.onChange}
        placeholder={this.props.placeholder}
        defaultValue={this.state.markdown}
      />
    );
  }
}
