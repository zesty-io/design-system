import React, { Component } from "react";
import { Select, Option } from "../Select";
import { FieldLabel } from "../FieldLabel";
import { FieldDescription } from "../FieldDescription";

import styles from "./OneToOneFieldType.less";

export class OneToOneFieldType extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loaded: false,
      loading: false
    };
  }

  onClick = () => {
    if (!this.state.loaded && this.props.onOpen) {
      this.props.onOpen().then(() => {
        this.setState({
          loading: false
        });
      });

      this.setState({
        loaded: true, // Only load data once
        loading: true
      });
    }
  };

  onSelect = (name, value) => {
    if (this.props.onChange) {
      this.props.onChange(name, value, this.props.datatype);
    }
  };

  render() {
    return (
      <article className={this.props.className}>
        <label htmlFor={this.props.name}>
          <FieldLabel
            label={this.props.label}
            required={this.props.required}
            tag={this.props.tag}
            tooltip={this.props.tooltip}
          />
        </label>

        <Select
          name={this.props.name}
          value={this.props.value || "0"}
          onClick={this.onClick}
          onSelect={this.onSelect}
        >
          <Option
            value={this.props.defaultOptValue || "0"}
            text={this.props.defaultOptText || "— None —"}
          />
          {this.state.loading && <Loader />}
          {this.props.children
            ? this.props.children
            : this.props.options.map((opt, i) => {
                return <Option key={i} {...opt} />;
              })}
        </Select>

        {this.props.description && (
          <FieldDescription description={this.props.description} />
        )}
      </article>
    );
  }
}
