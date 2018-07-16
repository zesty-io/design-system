import React, { Component } from "react";

import "@zesty-io/core/Search.css";
import { Search } from "@zesty-io/core/Search";

export class SearchGuide extends Component {
  render() {
    return (
      <React.Fragment>
        <p>A search component that takes onKeyup and onClick props</p>
        <Search placeholder="Search for something" />
      </React.Fragment>
    );
  }
}
