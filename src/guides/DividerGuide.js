import React, { Component } from "react";

import "@zesty-io/core/Divider.css";
import { Divider } from "@zesty-io/core/Divider";

export class DividerGuide extends Component {
  render() {
    return (
      <div style={{ width: "20rem" }}>
        <p>A styled horizontal divider</p>
        <Divider />
        vulputate eu scelerisque felis imperdiet
        <Divider />
        pretium nibh ipsum consequat nisl
        <Divider />
        egestas sed sed risus pretium
        <Divider />
      </div>
    );
  }
}
