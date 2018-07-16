import React, { Component } from "react";

import "@zesty-io/core/Infotip.css";
import { Infotip } from "@zesty-io/core/Infotip";

export class InfotipGuide extends Component {
  render() {
    return (
      <React.Fragment>
        <p>Mouseover for more information</p>
        <Infotip title="This is the Infotip title" />
      </React.Fragment>
    );
  }
}
