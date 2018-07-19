import React, { Component } from "react";

import "../../core/src/Loader/Loader.less";
import { Loader } from "../../core/src/Loader";

export class LoaderGuide extends Component {
  render() {
    return (
      <React.Fragment>
        <p>A loading indicator for inline use</p>
        <Loader />
      </React.Fragment>
    );
  }
}
