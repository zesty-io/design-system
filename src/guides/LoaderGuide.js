import React, { Component } from "react";

import "@zesty-io/core/Loader.css";
import { Loader } from "@zesty-io/core/Loader";

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
