import React, { Component } from "react";
import { Input } from "../Input";
import styles from "./NumberFieldType.less";
import { Label } from "../Label";

export class NumberFieldType extends Component {
  constructor(props) {
    super(props);
    this.state = {
      number: props.value || ""
    };
  }

  onChange = evt => {
    if (this.props.onChange) {
      this.props.onChange(
        this.props.name,
        evt.target.value,
        this.props.datatype
      );
    }
    this.setState({
      number: evt.target.value
    });
  };

  render() {
    return (
      <label className={styles.NumberFieldType}>
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
        <Input
          type="number"
          required={this.props.required}
          onChange={this.onChange}
          value={this.state.number}
        />
      </label>
    );
  }
}
