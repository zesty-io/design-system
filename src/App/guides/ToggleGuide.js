import React, { Component } from "react";
import Toggle from "@zesty-io/core/dist/Toggle";

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
