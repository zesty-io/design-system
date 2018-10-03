import React, { Component } from "react";
import cx from "classnames";
import debounce from "lodash/debounce";

import { BasicEditor } from "./Editors/Basic.js";
import { AdvancedEditor } from "./Editors/Advanced.js";
import { InlineEditor } from "./Editors/Inline.js";
import { MarkdownEditor } from "./Editors/Markdown.js";

import { Button } from "../Button";
import { ButtonGroup } from "../ButtonGroup";

import styles from "./EditorFieldType.less";

export class EditorFieldType extends Component {
  constructor(props) {
    super(props);
    this.state = {
      editor: this.props.type || "basic",
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
    console.log("Editor:onChange", value);
    if (this.props.onChange) {
      this.props.onChange(this.props.name, value, this.props.datatype);
      // if (this.state.type === "markdown") {
      //   this.props.onChange(
      //     this.props.name,
      //     defaultMarkdownSerializer.serliaze(value),
      //     this.props.datatype
      //   );
      // } else {
      //   this.props.onChange(this.props.name, value, this.props.datatype);
      // }
    }
    this.setState({ value });
  };

  selectEditor = evt => {
    this.setState({
      editor: evt.currentTarget.dataset.value
    });
  };

  renderEditor = () => {
    console.log("Editor: ", this.state.editor);
    switch (this.state.editor) {
      case "basic":
        return (
          <BasicEditor value={this.state.value} onChange={this.onChange} />
        );
        break;
      case "advanced":
        return (
          <AdvancedEditor value={this.state.value} onChange={this.onChange} />
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
      default:
        return <div>Invalid Editor</div>;
    }
  };

  render() {
    return (
      <div className={cx(styles.EditorFieldType, this.props.className)}>
        <label className={styles.EditorFieldTypeLabel}>
          {this.props.label}
        </label>
        <div className={styles.EditorFieldTypePM}>
          <menu className={styles.EditorSelection}>
            <Button onClick={this.selectEditor} data-value="basic">
              WYSIWYG
            </Button>
            <Button onClick={this.selectEditor} data-value="advanced">
              Advanced
            </Button>
            <Button onClick={this.selectEditor} data-value="article_writer">
              Inline (<small>Article Writer</small>)
            </Button>
            <Button onClick={this.selectEditor} data-value="markdown">
              Markdown
            </Button>
          </menu>
          {this.renderEditor()}
        </div>
      </div>
    );
  }
}
