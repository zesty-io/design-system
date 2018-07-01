import React, { Component } from "react";

import "@zesty-io/core/Toggle.css";
import { Toggle } from "@zesty-io/core/Toggle";

export default class ToggleGuide extends Component {
  render() {
    return (
      <React.Fragment>
        <p>normal</p>
        <Toggle onChange={() => console.log("changed")} />
        <p>default checked</p>
        <Toggle defaultChecked={true} />
      </React.Fragment>
    );
  }
}
