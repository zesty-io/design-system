import React, { Component } from "react";

import "../../core/src/Input/Input.less";
import { Input } from "../../core/src/Input";

export class InputGuide extends Component {
  render() {
    return (
      <React.Fragment>
        <p>Input component with zesty styling</p>
        <Input name="name" placeholder="Name" />
        <Input
          name="name"
          autoComplete="off"
          placeholder="Name (autocomplete disabled)"
        />
        <Input required placeholder="required" />
        <Input placeholder="placeholder" />
        <Input />
      </React.Fragment>
    );
  }
}
