import React, { Component } from "react";

import "@zesty-io/core/Infotip.css";
import { Infotip } from "@zesty-io/core/Infotip";

export default class InfotipGuide extends Component {
  render() {
    return (
      <React.Fragment>
        <Infotip title="This is the Infotip title" />
      </React.Fragment>
    );
  }
}
