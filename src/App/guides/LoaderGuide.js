import React, { Component } from "react";

import "@zesty-io/core/Loader.css";
import { Loader } from "@zesty-io/core/Loader";

export default class LoaderGuide extends Component {
  render() {
    return (
      <React.Fragment>
        <Loader />
      </React.Fragment>
    );
  }
}
