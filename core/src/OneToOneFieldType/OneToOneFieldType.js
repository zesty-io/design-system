import React, { Component } from "react";
import { Select, Option } from "../Select";

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
        <p>
          <label className={styles.OneToOneFieldTypeLabel}>
            {this.props.label}
            {this.props.required && <span style={{ color: "#9a2803" }}>*</span>}
          </label>
        </p>

        <p className={styles.Description}>{this.props.description}</p>

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
      </article>
    );
  }
}
