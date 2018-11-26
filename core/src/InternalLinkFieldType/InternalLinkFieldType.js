import React, { Component } from "react";

import { SearchableList, Option } from "../SearchableList";

export class InternalLinkFieldType extends Component {
  static defaultProps = {
    options: [
      {
        text: "there were no options passed to <Select>",
        value: "no options passed to select"
      }
    ],
    searchLength: 50
  };
  state = {
    selectedOption: this.props.options[0],
    options: this.props.options
  };
  handleSearch = term => {
    if (term.length >= 3) {
      this.setState({ loading: true });
      return request(
        `${CONFIG.service.instance_api}/search/items?q=${term}`
      ).then(res => {
        const consolidatedData = res.data.reduce((acc, el) => {
          // consolidate all versions, eliminate self parenting
          // eliminate items that are not routed (no path)
          if (
            !acc[el.meta.ZUID] &&
            el.meta.ZUID !== this.props.ZUID &&
            el.web.path &&
            !el.web.path.includes(this.props.web.pathPart)
          ) {
            acc[el.meta.ZUID] = el;
          }
          return acc;
        }, {});
        this.setState({ parents: consolidatedData, loading: false });
      });
    }
  };
  onChange = evt => {
    if (this.props.onChange) {
      this.props.onChange(
        this.props.name,
        JSON.parse(evt.currentTarget.dataset.value),
        this.props.datatype
      );
    }
    this.setState({
      selectedOption: JSON.parse(evt.currentTarget.dataset.value)
    });
  };
  render() {
    const { selectedOption } = this.state;
    return (
      <article>
        <div>
          <label>{this.props.label}</label>
        </div>
        <SearchableList
          name={this.props.name}
          placeholder={
            this.state.selectedOption.text ||
            this.state.selectedOption.html ||
            ""
          }
          onChange={this.onChange}
          onSearch={this.props.onSearch}
        >
          {this.state.options.map((opt, i) => {
            return (
              <Option key={i} value={JSON.stringify(opt)} text={opt.text} />
            );
          })}
        </SearchableList>
      </article>
    );
  }
}
