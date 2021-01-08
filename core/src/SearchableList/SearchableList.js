import React, { Component, Fragment } from "react";
import debounce from "lodash.debounce";
import cx from "classnames";

import { Select, Option } from "../Select";
import { Search } from "../Search";
import { Loader } from "../Loader";

import styles from "./SearchableList.less";
export class SearchableList extends Component {
  constructor(props) {
    super(props);

    this.selectList = React.createRef();

    this.state = {
      loading: false
    };
  }

  onChange = debounce(term => {
    if (!this.props.onSearch) {
      throw Error("SearchableList component missing onChange property");
    }

    if (term) {
      // Examine Select component state and open dropdown while searching
      // Uses internal Select ref to the selector dom element
      if (!this.selectList.current.state.dropdownOpen) {
        this.selectList.current.selector.click();
      }

      this.setState({
        loading: true
      });

      this.props
        .onSearch(term)
        .then(res => {
          this.setState({
            loading: false
          });
        })
        .catch(err => {
          this.setState({
            loading: false
          });
        });
    }
  }, 500);

  render() {
    return (
      <div className={styles.SearchableList}>
        <Search
          className={styles.Search}
          placeholder="Search for items"
          onChange={this.onChange}
        />
        <Select
          ref={this.selectList}
          className={styles.Select}
          name={this.props.name}
          value={this.props.value}
          onSelect={this.props.onSelect}
        >
          {this.state.loading && <Loader />}
          {this.props.children}
        </Select>
      </div>
    );
  }
}
