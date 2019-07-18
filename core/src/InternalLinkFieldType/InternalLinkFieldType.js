import React, { Component } from "react";
import debounce from "lodash.debounce";

import { Select, Option } from "../Select";
import { FieldLabel } from "../FieldLabel";
import { FieldDescription } from "../FieldDescription";

import styles from "./InternalLinkFieldType.less";
export class InternalLinkFieldType extends Component {
  state = {
    loading: false
  };

  onSearch = debounce((name, term, datatype) => {
    if (term) {
      this.setState({
        loading: true
      });
      this.props.onSearch(term).then(() => {
        this.setState({
          loading: false
        });
      });
    }
  }, 250);

  render() {
    return (
      <article className={this.props.className}>
        <label htmlFor={this.props.name}>
          <FieldLabel
            label={this.props.label}
            required={this.props.required}
            tag={this.props.tag}
            tooltip={this.props.tooltip}
          />
        </label>

        <Select
          name={this.props.name}
          placeholder={this.props.placeholder}
          value={this.props.value || "0"}
          onSelect={this.props.onChange}
          onFilter={this.onSearch}
          // always render search input
          searchPlaceholder="Do not see the item you are looking for? Enter a term to search your API."
          searchLength="0"
          loading={this.state.loading}
        >
          {/* You should always be able to unlink an internal link */}
          <Option
            value={this.props.defaultOptValue || "0"}
            text={this.props.defaultOptText || "— None —"}
          />

          {this.props.options.map((option, i) => {
            return <Option key={i} {...option} />;
          })}
        </Select>

        {this.props.description && (
          <FieldDescription description={this.props.description} />
        )}
      </article>
    );
  }
}
