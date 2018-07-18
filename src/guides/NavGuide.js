import React, { Component } from "react";

// import '../../core/src/Nav/Nav.less'
import { Nav } from "../../core/src/Nav";

export class NavGuide extends Component {
  state = {
    selected: ""
  };
  componentDidMount() {
    this.setState({
      selected: window.location.href.split("/").pop()
    });
  }
  render() {
    return (
      <React.Fragment>
        <p>
          This is our generic navigation component. It is used within the
          manager application in multiple views.
        </p>
        <Nav content={content} selected={this.state.selected} />
      </React.Fragment>
    );
  }
}

const content = [
  {
    title: "PAGES",
    icon: "file-o",
    children: [
      {
        name: "Simple Page",
        ZUID: "nav/as4da-asdads-ds4a",
        icon: "bars"
      },
      {
        name: "Homepage",
        ZUID: "nav/asda-asda4ds-dsa",
        icon: "bars",
        children: [
          { name: "child", ZUID: "nav/252n0-23n452", icon: "cube" },
          {
            name: "homepages",
            ZUID: "nav/4898-44646-12341234",
            icon: "cube",
            children: [
              {
                name: "child",
                ZUID: "nav/8238-235325ads-ewew",
                icon: "cube"
              },
              {
                name: "child",
                ZUID: "nav/8238-235asd25ads-ewew",
                icon: "cube",
                children: [
                  { name: "burried", ZUID: "nav/89234djns23u80", icon: "cube" }
                ]
              },
              {
                name: "node",
                ZUID: "nav/238-4562346",
                icon: "cube"
              }
            ]
          }
        ]
      }
    ]
  },
  {
    title: "PAGE GROUPS",
    icon: "files-o",
    children: []
  },
  {
    title: "DATA SETS",
    icon: "database",
    children: [
      {
        name: "Clippings",
        ZUID: "nav/asda-asd5ads-dsa",
        icon: "bars"
      },
      { name: "Dashboard Widgets", ZUID: "nav/asda-aesdads-dsa", icon: "bars" },
      {
        name: "Sidebar Contact Form",
        ZUID: "nav/asda-asdsdads-dsa",
        icon: "bars"
      }
    ]
  }
];
