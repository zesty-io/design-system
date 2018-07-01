import React, { Component } from "react";

import "@zesty-io/core/Select.css";
import { Select, Option } from "@zesty-io/core/Select";

export default class SelectGuide extends Component {
  render() {
    return (
      <React.Fragment>
        <Select
          selection={{ value: "Value1", text: "Initial" }}
          onSelect={() => console.log("onSelect")}
        >
          <Option key="1" value="1" text="Selection 1" />
          <Option key="2" value="2" text="Selection 2" />
          <Option key="3" value="3" text="Selection 3" />
        </Select>
      </React.Fragment>
    );
  }
}
