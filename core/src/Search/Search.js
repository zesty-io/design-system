import React, { Component } from "react";

import { Button } from "../Button";

import styles from "./Search.less";
import cx from "classnames";

export class Search extends Component {
  state = {
    searchTerm: ""
  };
  componentDidMount() {
    // lets the user override the initial value in the search box
    if (this.props.override) {
      this.setState({ searchTerm: this.props.override });
    }
  }
  handleSubmit = evt => {
    evt.preventDefault();
    if (this.props.onSubmit) {
      this.props.onSubmit(this.state.searchTerm);
    }
  };
  handleKeyUp = evt => {
    // return the target value of the input
    this.setState(
      {
        searchTerm: evt.target.value
      },
      () =>
        this.props.onKeyUp(
          this.props.name,
          this.state.searchTerm,
          this.props.datatype
        )
    );
  };
  render() {
    return (
      <div className={cx(styles.search, this.props.className)}>
        {this.props.noButton ? null : (
          <Button className={styles.searchBtn} onClick={this.handleSubmit}>
            <i
              className={cx(styles.searchIcon, "fa fa-search")}
              aria-hidden="true"
            />
          </Button>
        )}
        <input
          type="text"
          name="term"
          autoComplete="off"
          value={this.state.searchTerm}
          className={styles.searchField}
          placeholder={this.props.placeholder}
          onFocus={this.props.onFocus}
          onChange={this.handleKeyUp}
        />
        {this.state.searchTerm && (
          <i
            className={`${styles.clearBtn} fa fa-times`}
            onClick={() =>
              this.handleKeyUp({
                target: { value: "" }
              })
            }
          />
        )}
      </div>
    );
  }
}
