import React, { Component } from "react";

import "@zesty-io/core/Input.css";
import { Input } from "@zesty-io/core/Input";

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
