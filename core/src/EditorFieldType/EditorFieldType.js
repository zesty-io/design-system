import React, { Component } from "react";
import cx from "classnames";
import showdown from "showdown";

import { BasicEditor } from "./Editors/Basic.js"; // Covers both WYSIWYGBasic & WYSIWYGAdvanced field types
import { InlineEditor } from "./Editors/Inline.js";
import { MarkdownEditor } from "./Editors/Markdown.js";
import { HtmlEditor } from "./Editors/Html.js";

import { Select, Option } from "../Select";

import styles from "./EditorFieldType.less";
export class EditorFieldType extends Component {
  constructor(props) {
    super(props);

    // Handle legacy wysiwyg_advanced field type
    let editor = this.props.type || "wysiwyg_basic";
    if (editor === "wysiwyg_advanced") {
      editor = "wysiwyg_basic";
    }

    this.converter = new showdown.Converter({
      noHeaderId: true,
      tables: true,
      strikethrough: true
      // backslashEscapesHTMLTags: true
    });

    this.state = {
      value: this.props.value || "",
      editor
    };
  }

  onChange = value => {
    // Prosemirror leaves a lingering p tag which is
    // problematic for consumers who check for empty values
    if (value === "<p></p>") {
      value = "";
    }

    // Set internal state before we alter value
    this.setState({ value });

    // Prosemirror triggers on change events when focusing in and out
    // of the editor so check whether the value has changed.
    if (this.props.value !== value) {
      if (this.props.onChange) {
        // Convert the content on the way out of the component
        // When sendings changes to redux store convert to the initial field types value
        // This ensures if it's a markdown field that is being viewed as an html editor it is
        // still saved as markdown content
        let content = value;
        if (this.props.type === "markdown") {
          if (this.state.editor !== "markdown") {
            content = this.converter.makeMd(content);
          }
        } else {
          if (this.state.editor === "markdown") {
            content = this.converter.makeHtml(content);
          }
        }

        this.props.onChange(this.props.name, content, this.props.datatype);
      }
    }
  };

  selectEditor = (name, editor) => {
    // Convert the content on the way into the component
    // When selecting an editor we convert the content
    // to the appropriate type of value (Markdown | HTML)
    let content = this.state.value;
    if (editor === "markdown") {
      content = this.converter.makeMd(content);
    } else {
      content = this.converter.makeHtml(content);
    }

    this.setState({
      value: content,
      editor: editor
    });
  };

  renderEditor = () => {
    switch (this.state.editor) {
      case "wysiwyg_basic":
      case "wysiwyg_advanced":
        return (
          <BasicEditor value={this.state.value} onChange={this.onChange} />
        );
        break;
      case "markdown":
        return (
          <MarkdownEditor value={this.state.value} onChange={this.onChange} />
        );
        break;
      case "article_writer":
        return (
          <InlineEditor value={this.state.value} onChange={this.onChange} />
        );
        break;
      case "html":
        return <HtmlEditor value={this.state.value} onChange={this.onChange} />;
        break;
      default:
        return (
          <div>
            <h1>Invalid Editor</h1>
          </div>
        );
    }
  };

  render() {
    return (
      <div className={cx(styles.EditorFieldType, this.props.className)}>
        <label className={styles.EditorFieldTypeLabel}>
          <span>
            {this.props.label}
            {this.props.required && <span style={{ color: "#9a2803" }}>*</span>}
          </span>
          <span>
            {this.state.value.length}
            /65,000
          </span>
          <Select
            name="editorType"
            className={styles.EditorSelection}
            onSelect={this.selectEditor}
            value={this.state.editor}
          >
            <Option value="wysiwyg_basic" text="WYSIWYG" />
            <Option value="markdown" text="Markdown" />
            <Option value="article_writer" text="Inline" />
            <Option value="html" text="HTML" />
          </Select>
        </label>
        <div className={styles.EditorFieldTypePM}>{this.renderEditor()}</div>
      </div>
    );
  }
}
