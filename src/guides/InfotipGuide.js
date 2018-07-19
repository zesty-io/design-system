import React, { Component } from "react";

import "../../core/src/Infotip/Infotip.less";
import { Infotip } from "../../core/src/Infotip";

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
