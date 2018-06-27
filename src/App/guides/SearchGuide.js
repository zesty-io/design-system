import React, { Component } from "react";
import Search from "@zesty-io/core/Search";

export default class SearchGuide extends Component {
  render() {
    return (
      <React.Fragment>
        <Search placeholder="Search for something" />
      </React.Fragment>
    );
  }
}
