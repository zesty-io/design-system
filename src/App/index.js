import React, { Component } from "react";
import { BrowserRouter, Route } from "react-router-dom";
import Guide from "./components/guide";

export default class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Route path="*" children={props => <Guide {...props} />} />
      </BrowserRouter>
    );
  }
}
