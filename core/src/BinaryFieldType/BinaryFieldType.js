import React, { Component } from "react";
import styles from "./BinaryFieldType.less";

export class BinaryFieldType extends Component {
  constructor(props) {
    super();
    this.state = {
      checked: Boolean(props.checked)
    };
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
    return (
      <article className={styles.BinaryFieldType}>
        <div className={styles.BinaryFieldTypeLabel}>
          <label>{this.props.label}</label>
        </div>
        <label className={styles.switch}>
          <input
            type="checkbox"
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
