import React, { Component } from "react";

import "../../core/src/Button/Button.less";
import "../../core/src/ButtonGroup/ButtonGroup.less";

import { Button } from "../../core/src/Button";
import { ButtonGroup } from "../../core/src/ButtonGroup";

export class ButtonGroupGuide extends Component {
  render() {
    return (
      <React.Fragment>
        <p>A wrapper to group buttons</p>

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
