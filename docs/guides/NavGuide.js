import React, { Component } from "react";

import { Nav } from "@zesty-io/core/Nav";
import { CollapsibleCard } from "@zesty-io/core/CollapsibleCard";
import GithubEmbed from "../components/githubembed";

export class NavGuide extends Component {
  state = {
    selected: ""
  };
  componentDidMount() {
    this.setState({
      selected: `/nav/${this.props.location.pathname.split("/").pop()}`
    });
  }
  static getDerivedStateFromProps(props, state) {
    if (props.location.pathname.split("/").pop() !== state.selected) {
      return { selected: `/nav/${props.location.pathname.split("/").pop()}` };
    } else {
      return null;
    }
  }
  render() {
    return (
      <React.Fragment>
        <p>
          This is our generic navigation component. It is used within the
          manager application in multiple views.
        </p>
        <p>
          <strong>Props:</strong> content (an object containing menu content),
          selected (a string matching the path of the selected item)
        </p>
        <br />
        <Nav
          content={navData}
          name="NavGuide"
          selected={this.state.selected}
          tree={[]}
        />
        <br />
        <br />
        <CollapsibleCard header="Usage" open>
          <GithubEmbed
            height="55px"
            code={`<Nav content={content} selected={selection.identifier} tree={[]} />`}
          />
        </CollapsibleCard>
        <CollapsibleCard collapsed header="code">
          <GithubEmbed url="https://gist.githubusercontent.com/grantglidewell/bf5518a64322afd96b165a41ba3799b5/raw/9ee2a4f7b918acdc4c4570b0920be4c71964f926/Nav.js" />
        </CollapsibleCard>
      </React.Fragment>
    );
  }
}

const navData = [
  {
    name: "Clippings",
    path: "/nav/as1da-asd5ads-dsa",
    icon: "bars"
  },
  { name: "Dashboard Widgets", path: "/nav/asda-aesdads-dsa", icon: "bars" },
  {
    name: "Sidebar Contact Form",
    path: "/nav/as1da-a1sdsdads-dsa",
    icon: "bars"
  },
  {
    name: "Simple Page",
    path: "/nav/as4da-asda1ds-ds4a",
    icon: "bars"
  },
  {
    name: "Homepage",
    path: "/nav/asd1a-asda4ds-dsa",
    icon: "bars",
    children: [
      { name: "child", path: "/nav/252fn0-23n452", icon: "cube" },
      {
        name: "homepages",
        path: "/nav/48198-446f46-12341234",
        icon: "cube",
        children: [
          {
            name: "child",
            path: "/nav/8238-12353f25ads-ewew",
            icon: "cube"
          },
          {
            name: "child",
            path: "/nav/823f8-235asd225ads-ewew",
            icon: "cube",
            children: [
              { name: "buried", path: "/nav/89234dj3ns23u80", icon: "cube" }
            ]
          },
          {
            name: "node",
            path: "/nav/238-45622346",
            icon: "cube"
          }
        ]
      }
    ]
  }
];
