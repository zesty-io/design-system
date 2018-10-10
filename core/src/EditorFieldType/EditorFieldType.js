import React, { Component } from "react";
import cx from "classnames";
// import debounce from "lodash/debounce";

// Covers both WYSIWYGBasic & WYSIWYGAdvanced field types
import { BasicEditor } from "./Editors/Basic.js";
import { InlineEditor } from "./Editors/Inline.js";
import { MarkdownEditor } from "./Editors/Markdown.js";
import { HtmlEditor } from "./Editors/Html.js";

import { Select, Option } from "../Select";

import styles from "./EditorFieldType.less";
export class EditorFieldType extends Component {
  constructor(props) {
    super(props);
    this.state = {
      editor: this.props.type || "wysiwyg_basic",
      value: this.props.value
    };

    // this.onChange = debounce(
    //   evt => {
    //     console.log("Editor:onChange", evt);
    //     const value = evt.target.value;
    //
    //     if (this.props.onChange) {
    //       this.props.onChange(this.props.name, value, this.props.datatype);
    //     }
    //     this.setState({ value });
    //   },
    //   1000,
    //   { maxWait: 5000 }
    // );
  }

  onChange = value => {
    if (this.props.onChange) {
      this.props.onChange(this.props.name, value, this.props.datatype);
    }
    this.setState({ value });
  };

  selectEditor = evt => {
    this.setState({
      editor: evt.currentTarget.dataset.value
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
          <span>{this.props.label}</span>
          <span>0/65,000</span>
          <Select
            className={styles.EditorSelection}
            onSelect={this.selectEditor}
            default={{
              value: "wysiwyg_basic",
              text: "WYSIWYG"
            }}
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
