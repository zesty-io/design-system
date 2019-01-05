import React, { Component } from "react";
import cx from "classnames";

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

    this.state = {
      value: this.props.value || "",
      editor,
      editorChanged: false // We have to track whether the editor has been changed so we can properly render legacy markdown content
    };
  }

  onChange = value => {
    this.setState({ value }, () => {
      // Prosemirror triggers on change events when focusing in and out of the editor
      // so check whether the initial value has changed.
      if (this.props.value !== this.state.value) {
        if (this.props.onChange) {
          this.props.onChange(this.props.name, value, this.props.datatype);
        }
      }
    });
  };

  selectEditor = (name, value) => {
    this.setState({
      editor: value,
      editorChanged: true
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
          <MarkdownEditor
            value={this.state.value}
            initialType={this.props.type}
            editorChanged={this.state.editorChanged}
            onChange={this.onChange}
          />
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
