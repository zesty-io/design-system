import React, { Component } from "react";

import { SearchableList } from "../SearchableList";
import { Option } from "../Select";
import { Label } from "../Label";

import styles from "./InternalLinkFieldType.less";

export class InternalLinkFieldType extends Component {
  render() {
    return (
      <article className={this.props.className}>
        <Label required={this.props.required}>
          {this.props.label}{" "}
          {this.props.name && this.props.datatype && (
            <span style={{ color: "#c3cddf" }}>
              <span style={{ paddingLeft: "4px" }}>[{this.props.name}]</span>
              <span style={{ paddingLeft: "4px", padingRight: "4px" }}>
                {this.props.datatype}
              </span>
            </span>
          )}
        </Label>
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
