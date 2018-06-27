import React, { Component } from "react";
import { BrowserRouter, Route } from "react-router-dom";
import Guide from "./components/guide";

export default class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Route
          path="*"
          children={props => <Guide {...props} components={components} />}
        />
      </BrowserRouter>
    );
  }
}

// TODO: add URLs to gists
const components = {
  Button: {
    description:
      "A flexible button component with styles including warn, cancel, and save"
  },
  ButtonGroup: {
    description: "A wrapper to group buttons"
  },
  Card: {
    description:
      "Cards are universal use display components, they respond well to grid and flex systems that have their boundaries clearly drawn."
  },
  Divider: {
    description: "A styled horizontal divider"
  },
  Loader: { description: "A loading indicator for inline use" },
  Search: {
    description: "A search component that takes onKeyup and onClick props"
  },
  Select: {
    description:
      "The Select component requires that you also import the Option component to nest inside of it for each option. It takes an onSelect prop."
  },
  Input: { description: "Input component with zesty styling" },
  Toggle: {
    description: "A toggle component that works as a checkbox"
  },
  Infotip: {
    description: "Mouseover for more information"
  }
};
