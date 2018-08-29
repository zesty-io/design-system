import React, { Component } from "react";

import { Input } from "../Input";

import styles from "./SortFieldType.less";
export class SortFieldType extends Component {
  state = {
    sortValue: Number(this.props.default) || 0,
    required: this.props.required
  };
  handleIncrement = up => {
    if (up) {
      this.setState({ sortValue: Number(this.state.sortValue) + 1 }, () => {
        this.props.callback && this.props.callback(this.state.sortValue);
      });
    } else {
      this.setState({ sortValue: Number(this.state.sortValue) - 1 }, () => {
        this.props.callback && this.props.callback(this.state.sortValue);
      });
    }
  };
  onChange = evt => {
    // handles a manual number entry
    if (this.props.callback) {
      this.props.callback(Number(evt.target.value));
    }
    this.setState({
      sortValue: Number(evt.target.value)
    });
  };
  render() {
    const { sortValue } = this.state;
    return (
      <article className={styles.SortFieldType}>
        <section className={styles.SortFieldTypeLabel}>
          <label>{this.props.label}</label>
        </section>
        <section className={styles.Sort}>
          <span
            className={styles.IncrementL}
            onClick={() => this.handleIncrement(true)}
          >
            +
          </span>
          <Input
            className={styles.SortNumber}
            type="number"
            onChange={this.onChange}
            value={sortValue}
          />
          <span
            className={styles.IncrementR}
            onClick={() => this.handleIncrement()}
          >
            -
          </span>
        </section>
      </article>
    );
  }
}
