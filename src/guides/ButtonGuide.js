import React, { Component } from "react";

import "../../core/src/Button/Button.less";
import { Button } from "../../core/src/Button";

export class ButtonGuide extends Component {
  render() {
    return (
      <React.Fragment>
        <p>
          A flexible button component with styles including warn, cancel, and
          save
        </p>
        <Button type="" text="Button" />
        <Button type="save" text="Save" />
        <Button type="cancel" text="Cancel" />
        <Button type="warn" text="Warn" />
        <Button type="alt" text="Alt" />
      </React.Fragment>
    );
  }
}
