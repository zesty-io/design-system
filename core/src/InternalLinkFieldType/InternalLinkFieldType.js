import React, { Component } from "react";

import { SearchableList } from "../SearchableList";
import { Option } from "../Select";
import { Label } from "../Label";

import styles from "./InternalLinkFieldType.less";

export class InternalLinkFieldType extends Component {
  render() {
    return (
      <article className={this.props.className}>
        <Label {...this.props} />
        <SearchableList
          name={this.props.name}
          placeholder={this.props.placeholder}
          onSelect={this.props.onChange}
          onSearch={this.props.onSearch}
          value={this.props.value}
        >
          {/* You should always be able to un-link an internal link */}
          <Option value="0" text="— None —" />

          {this.props.children
            ? this.props.children
            : this.props.options.map((opt, i) => {
                return <Option key={i} {...opt} />;
              })}
        </SearchableList>
      </article>
    );
  }
}
