import React, { Component } from "react";
import debounce from "lodash.debounce";
import { Textarea } from "../Textarea";
import styles from "./TextareaFieldType.less";

/**
 * Controlled component
 */
export class TextareaFieldType extends Component {
  constructor(props) {
    super(props);

    if (!props.name) {
      throw new Error(
        'Missing required attribute "name". See https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input#Attributes'
      );
    }

    if (this.props.onChange) {
      this.notifyStore = debounce(this.props.onChange, 1000);
    }

    this.state = {
      value: props.value || ""
    };
  }
  onChange = evt => {
    const value = evt.target.value;
    const name = evt.target.name;

    if (this.notifyStore) {
      this.notifyStore(name, value, this.props.datatype);
    }

    this.setState({ value });
  };
  render() {
    return (
      <article
        className={`${styles.TextareaFieldType} ${
          this.props.maxLength && this.state.value.length > this.props.maxLength
            ? styles.Error
            : ""
        }`}
      >
        <div className={styles.TextareaFieldTypeLabel}>
          <label>{this.props.label}</label>
          {this.props.maxLength && (
            <span>
              {this.state.value.length}/{this.props.maxLength}
            </span>
          )}
        </div>
        <Textarea
          name={this.props.name}
          value={this.state.value}
          onChange={this.onChange}
        />
      </article>
    );
  }
}
