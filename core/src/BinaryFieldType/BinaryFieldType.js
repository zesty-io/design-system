import React, { Component } from "react";

import styles from "./BinaryFieldType.less";
export class BinaryFieldType extends Component {
  static defaultProps = {
    binaryOptions: { No: 0, Yes: 1 },
    trueLabel: "Yes",
    falseLabel: "No",
    default: 1
  };
  state = {
    checked: false
  };
  componentDidMount() {
    this.setState({
      checked:
        this.props.default === this.props.binaryOptions[this.props.trueLabel]
    });
  }
  onChange(evt) {
    // currently need to return a 1 or 0
    // 1 or 0 could be yes
    if (this.props.callback) {
      this.props.callback(
        evt.target.checked
          ? this.props.binaryOptions[this.props.trueLabel]
          : this.props.binaryOptions[this.props.falseLabel]
      );
    }
    this.setState({
      checked: evt.target.checked
    });
  }
  render() {
    const { checked } = this.state;
    const { falseLabel, trueLabel, label, disabled } = this.props;
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
