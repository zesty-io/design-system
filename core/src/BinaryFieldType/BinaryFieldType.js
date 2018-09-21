import React, { Component } from "react";
import styles from "./BinaryFieldType.less";

export class BinaryFieldType extends Component {
  constructor(props) {
    super();
    this.state = {
      checked: Boolean(props.checked)
    };
  }
  onChange = evt => {
    const checked = evt.target.checked;
    this.setState({
      checked
    });
    if (this.props.onChange) {
      this.props.onChange(
        this.props.name,
        checked ? 1 : 0, // currently need to return a 1 or 0
        this.props.datatype
      );
    }
  };
  render() {
    return (
      <article className={styles.BinaryFieldType}>
        <div className={styles.BinaryFieldTypeLabel}>
          <label>{this.props.label}</label>
        </div>
        <label className={styles.switch}>
          <input
            type="checkbox"
            name={this.props.name}
            checked={this.state.checked}
            disabled={this.props.disabled}
            onChange={evt => this.onChange(evt)}
            data-text-on={this.props.on || "Yes"}
            data-text-off={this.props.off || "No"}
          />
          <span className={styles.slider} />
        </label>
      </article>
    );
  }
}
