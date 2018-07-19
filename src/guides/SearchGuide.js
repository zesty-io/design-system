import React, { Component } from "react";

import "../../core/src/Search/Search.less";
import { Search } from "../../core/src/Search";

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
