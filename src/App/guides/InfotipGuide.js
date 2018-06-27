import React, { Component } from "react";
import Infotip from "@zesty-io/core/dist/Infotip";

export default class InfotipGuide extends Component {
  render() {
    return (
      <React.Fragment>
        <Infotip title="This is the Infotip title" />
      </React.Fragment>
    );
  }
}
