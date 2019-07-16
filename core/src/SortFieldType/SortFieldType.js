import React, { Component } from "react";
import cx from "classnames";

import { Input } from "../Input";
import { Button } from "../Button";
import { FieldLabel } from "../FieldLabel";
import { FieldDescription } from "../FieldDescription";

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
      <article className={cx(styles.SortFieldType, this.props.className)}>
        <section className={styles.SortFieldTypeLabel}>
          <label>
            <FieldLabel
              label={this.props.label}
              required={this.props.required}
              fieldType="sort"
            />
          </label>
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
        {this.props.description && (
          <FieldDescription description={this.props.description} />
        )}
      </article>
    );
  }
}
