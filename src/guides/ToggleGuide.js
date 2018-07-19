import React, { Component } from "react";

import "../../core/src/Toggle/Toggle.less";
import { Toggle } from "../../core/src/Toggle";

export class ToggleGuide extends Component {
  render() {
    return (
      <React.Fragment>
        <p>A toggle component that works as a checkbox</p>
        <p>normal</p>
        <Toggle onChange={() => console.log("changed")} />
        <p>default checked</p>
        <Toggle defaultChecked={true} />
      </React.Fragment>
    );
  }
}
