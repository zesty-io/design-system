import React, { Component } from "react";

import { Input } from "../Input";

import styles from "./SortFieldType.less";
export class SortFieldType extends Component {
  state = {
    sortValue: Number(this.props.value) || 0,
    required: this.props.required
  };
  handleClick = increment => {
    let value = increment
      ? Number(this.state.sortValue) + 1
      : Number(this.state.sortValue) - 1;

    if (this.props.onChange) {
      this.props.onChange(this.props.name, value, this.props.datatype);
    }

    this.setState({
      sortValue: value
    });
  };
  render() {
    return (
      <article className={styles.SortFieldType}>
        <section className={styles.SortFieldTypeLabel}>
          <label>{this.props.label}</label>
        </section>
        <section className={styles.Sort}>
          <span
            className={styles.IncrementL}
            onClick={() => this.handleClick(true)}
          >
            <i className="fa fa-plus" />
          </span>
          <Input
            className={styles.SortNumber}
            type="number"
            value={this.state.sortValue}
          />
          <span
            className={styles.IncrementR}
            onClick={() => this.handleClick()}
          >
            <i className="fa fa-minus" />
          </span>
        </section>
      </article>
    );
  }
}
