import React, { Component } from "react";
import { Select, Option } from "../Select";

import styles from "./OneToOneFieldType.less";
import { Label } from "../Label";

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
        <Label required={this.props.required}>
          {this.props.label}{" "}
          {this.props.name && this.props.datatype && (
            <span style={{ color: "#c3cddf" }}>
              <span style={{ paddingLeft: "4px" }}>[{this.props.name}]</span>
              <span style={{ paddingLeft: "4px", padingRight: "4px" }}>
                {this.props.datatype}
              </span>
            </span>
          )}
        </Label>
        <Select
          name={this.props.name}
          value={this.props.value || "0"}
          onClick={this.onClick}
          onSelect={this.onSelect}
        >
          <Option value="0" text="— None —" />
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
