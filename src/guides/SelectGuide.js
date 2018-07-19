import React, { Component } from "react";

import "../../core/src/Select/Select.less";
import { Select, Option } from "../../core/src/Select";

export class SelectGuide extends Component {
  render() {
    return (
      <React.Fragment>
        <p>
          The Select component requires that you also import the Option
          component to nest inside of it for each option. It takes an onSelect
          prop.
        </p>
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
