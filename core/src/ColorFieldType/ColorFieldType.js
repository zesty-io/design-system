import React, { Component } from "react";
import cx from "classnames";
import { Input } from "../Input";
import styles from "./ColorFieldType.less";
import { Label } from "../Label";

export class ColorFieldType extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: props.value || "#ffffff"
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
      value: evt.target.value
    });
  };
  render() {
    return (
      <label className={styles.ColorFieldType}>
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
        <div className={styles.ColorFieldTypeInput}>
          <Input
            required={this.props.required}
            type="color"
            onChange={this.onChange}
            value={this.state.value}
            className={styles.ColorInput}
          />
          <i className={cx(styles.Icon, "fa fa-paint-brush")} />
        </div>
      </label>
    );
  }
}
