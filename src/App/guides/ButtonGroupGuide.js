import React, { Component } from "react";

import Button from "@zesty-io/core/Button";
import ButtonGroup from "@zesty-io/core/ButtonGroup";

export default class ButtonGroupGuide extends Component {
  render() {
    return (
      <React.Fragment>
        <ButtonGroup>
          <Button type="" text="Button1" />
          <Button type="" text="Button2" />
          <Button type="" text="Button3" />
        </ButtonGroup>
        <ButtonGroup>
          <Button type="cancel" text="Cancel" />
          <Button type="save" text="Save" />
        </ButtonGroup>
        <ButtonGroup>
          <Button type="" text="Button1" />
          <Button type="warn" text="Button2" />
          <Button type="" text="Button3" />
          <Button type="alt" text="Button4" />
          <Button type="" text="Button5" />
        </ButtonGroup>
      </React.Fragment>
    );
  }
}
