import React, { Component } from "react";

import { SearchableList, Option } from "../SearchableList";
import { Loader } from "../Loader";

export class InternalLinkFieldType extends Component {
  state = {
    selectedOption: {
      text: "enter a search term",
      value: ""
    },
    options: {},
    loading: true
  };

  componentDidMount() {
    const { value } = this.props;
    if (value && value !== "0") {
      request(`${this.props.queryURL}?q=${value}`).then(data => {
        this.setState({ placeholder: data.data[0].web.metaTitle });
      });
    }
  }

  handleSearch = debounce(term => {
    if (term.length >= 3) {
      this.setState({ loading: true });
      return request(`${this.props.queryURL}?q=${term}`).then(res => {
        const consolidatedData = res.data.reduce((acc, el) => {
          if (!acc[el.meta.ZUID]) {
            acc[el.meta.ZUID] = el;
          }
          return acc;
        }, {});
        this.setState({ options: consolidatedData, loading: false });
      });
    }
  }, 500);

  render() {
    const { placeholder } = this.state;
    return (
      <article>
        <div>
          <label>{this.props.label}</label>
        </div>
        <SearchableList
          name={this.props.name}
          placeholder={placeholder}
          onSelect={this.props.onChange}
          onSearch={this.handleSearch}
        >
          {this.state.loading ? (
            <Option key="searchableListLoading" text={<Loader />} value="" />
          ) : (
            Object.keys(this.state.options).map(optZUID => {
              return (
                <Option
                  key={optZUID}
                  text={this.state.options[optZUID].web.metaTitle}
                  value={optZUID}
                />
              );
            })
          )}
        </SearchableList>
      </article>
    );
  }
}

function debounce(func, wait, immediate) {
  let timeout;
  return function() {
    let context = this,
      args = arguments;
    let later = function() {
      timeout = null;
      if (!immediate) func.apply(context, args);
    };
    let callNow = immediate && !timeout;
    clearTimeout(timeout);
    timeout = setTimeout(later, wait);
    if (callNow) func.apply(context, args);
  };
}
