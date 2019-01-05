import React, { Component } from "react";
import cx from "classnames";

import { Input } from "../Input";
import { Button } from "../Button";

import styles from "./SortFieldType.less";
export class SortFieldType extends Component {
  state = {
    sortValue: Number(this.props.value) || 0
  };
  handleClick = (evt, increment) => {
    evt.stopPropagation();

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
  handleChange = evt => {
    evt.stopPropagation();

    const value = evt.target.value;

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
          <Button
            className={cx(styles.Increment, styles.Left)}
            onClick={evt => this.handleClick(evt, true)}
          >
            <i className="fa fa-plus" />
          </Button>
          <Input
            className={styles.SortNumber}
            type="number"
            value={this.state.sortValue}
            onChange={this.handleChange}
            required={this.props.required}
          />
          <Button
            className={cx(styles.Increment, styles.Right)}
            onClick={evt => this.handleClick(evt)}
          >
            <i className="fa fa-minus" />
          </Button>
        </section>
      </article>
    );
  }
}
