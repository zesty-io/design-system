import React, { Component } from "react";

import styles from "./BinaryFieldType.less";
export class BinaryFieldType extends Component {
  state = {
    checked: this.props.default === 1,
    trueLabel: "Yes",
    falseLabel: "No"
  };
  componentDidMount() {
    // determine labels
    // label 1 and 0 properly
    const binaryOptions = {
      0: this.props.options.split(";").find(el => el.includes("0")),
      1: this.props.options.split(";").find(el => el.includes("1"))
    };
    this.setState({
      trueLabel: binaryOptions[1].split(":")[1],
      falseLabel: binaryOptions[0].split(":")[1],
      checked: this.props.default === 1
    });
  }
  onChange(evt) {
    // currently need to return a 1 or 0
    this.setState(
      {
        checked: evt.target.checked
      },
      () => {
        if (this.props.callback) {
          this.props.callback(this.state.checked ? 1 : 0);
        }
      }
    );
  }
  render() {
    const { falseLabel, trueLabel, checked } = this.state;
    const { label, disabled } = this.props;
    return (
      <article className={styles.BinaryFieldType}>
        <div className={styles.BinaryFieldTypeLabel}>
          <label>{label}</label>
        </div>
        <label className={styles.switch}>
          <input
            checked={checked}
            disabled={disabled}
            onChange={evt => this.onChange(evt)}
            type="checkbox"
            data-text-on={trueLabel}
            data-text-off={falseLabel}
          />
          <span className={styles.slider} />
        </label>
      </article>
    );
  }
}
