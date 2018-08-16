import React, { Component } from "react";

import { Input } from "../Input";

import styles from "./ColorFieldType.less";
export class ColorFieldType extends Component {
  constructor(props) {
    super(props);
    this.state = {
      colorInput: "#ffffff"
    };
  }
  componentDidMount() {
    if (this.props.default) {
      this.setState({ colorInput: this.props.default });
    }
  }
  render() {
    const { colorInput } = this.state;
    return (
      <article className={styles.ColorFieldType}>
        <div className={styles.ColorFieldTypeLabel}>
          <label>{this.props.label}</label>
        </div>
        <Input type="text" onChange={this.onChange} value={colorInput} />
        <Input type="color" onChange={this.onChange} value={colorInput} />
      </article>
    );
  }
  onChange = evt => {
    if (this.props.callback) {
      this.props.callback(evt.target.value);
    }
    this.setState({
      colorInput: evt.target.value
    });
  };
}
