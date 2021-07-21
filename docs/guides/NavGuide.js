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
      //selected: `/nav/${this.props.location.pathname.split("/").pop()}`
      selected: `/design-system/content/6-3998c8-rtfq3n`
    });
  }
  static getDerivedStateFromProps(props, state) {
    if (props.location.pathname.split("/").pop() !== state.selected) {
      return { selected: `/design-system/content/6-3998c8-rtfq3n` };
    } else {
      return null;
    }
  }
  render() {
    const navExample = [{"ZUID":"6-a6fcb6dbd5-719m72","label":"Advanced Publish Examples","type":"pageset","contentModelZUID":"6-a6fcb6dbd5-719m72","sort":119,"path":"/content/6-a6fcb6dbd5-719m72","icon":{"prefix":"fas","iconName":"list-alt","icon":[512,512,[],"f022","M464 480H48c-26.51 0-48-21.49-48-48V80c0-26.51 21.49-48 48-48h416c26.51 0 48 21.49 48 48v352c0 26.51-21.49 48-48 48zM128 120c-22.091 0-40 17.909-40 40s17.909 40 40 40 40-17.909 40-40-17.909-40-40-40zm0 96c-22.091 0-40 17.909-40 40s17.909 40 40 40 40-17.909 40-40-17.909-40-40-40zm0 96c-22.091 0-40 17.909-40 40s17.909 40 40 40 40-17.909 40-40-17.909-40-40-40zm288-136v-32c0-6.627-5.373-12-12-12H204c-6.627 0-12 5.373-12 12v32c0 6.627 5.373 12 12 12h200c6.627 0 12-5.373 12-12zm0 96v-32c0-6.627-5.373-12-12-12H204c-6.627 0-12 5.373-12 12v32c0 6.627 5.373 12 12 12h200c6.627 0 12-5.373 12-12zm0 96v-32c0-6.627-5.373-12-12-12H204c-6.627 0-12 5.373-12 12v32c0 6.627 5.373 12 12 12h200c6.627 0 12-5.373 12-12z"]},"children":[]},{"ZUID":"7-e8a990-8b9dvg","label":"Example Data","type":"item","contentModelZUID":"6-ddf428-gd0xxn","sort":null,"path":"/content/6-ddf428-gd0xxn/7-e8a990-8b9dvg","icon":{"prefix":"fas","iconName":"file","icon":[384,512,[],"f15b","M224 136V0H24C10.7 0 0 10.7 0 24v464c0 13.3 10.7 24 24 24h336c13.3 0 24-10.7 24-24V160H248c-13.2 0-24-10.8-24-24zm160-14.1v6.1H256V0h6.1c6.4 0 12.5 2.5 17 7l97.9 98c4.5 4.5 7 10.6 7 16.9z"]},"children":[{"ZUID":"6-3998c8-rtfq3n","label":"Glossary","type":"dataset","contentModelZUID":"6-3998c8-rtfq3n","sort":99,"parentZUID":"7-e8a990-8b9dvg","path":"/content/6-3998c8-rtfq3n","icon":{"prefix":"fas","iconName":"database","icon":[448,512,[],"f1c0","M448 73.143v45.714C448 159.143 347.667 192 224 192S0 159.143 0 118.857V73.143C0 32.857 100.333 0 224 0s224 32.857 224 73.143zM448 176v102.857C448 319.143 347.667 352 224 352S0 319.143 0 278.857V176c48.125 33.143 136.208 48.572 224 48.572S399.874 209.143 448 176zm0 160v102.857C448 479.143 347.667 512 224 512S0 479.143 0 438.857V336c48.125 33.143 136.208 48.572 224 48.572S399.874 369.143 448 336z"]},"children":[]}]},{"ZUID":"7-ac9cf8c1cf-kr9n2v","label":"Example Data Alternate Test","type":"item","contentModelZUID":"6-ddf428-gd0xxn","sort":134,"path":"/content/6-ddf428-gd0xxn/7-ac9cf8c1cf-kr9n2v","children":[]},{"ZUID":"7-c005a8-zv6024","label":"Homepage","type":"item","contentModelZUID":"6-b6245c-qzgvh9","sort":0,"path":"/content/6-b6245c-qzgvh9/7-c005a8-zv6024","icon":{"prefix":"fas","iconName":"home","icon":[576,512,[],"f015","M280.37 148.26L96 300.11V464a16 16 0 0 0 16 16l112.06-.29a16 16 0 0 0 15.92-16V368a16 16 0 0 1 16-16h64a16 16 0 0 1 16 16v95.64a16 16 0 0 0 16 16.05L464 480a16 16 0 0 0 16-16V300L295.67 148.26a12.19 12.19 0 0 0-15.3 0zM571.6 251.47L488 182.56V44.05a12 12 0 0 0-12-12h-56a12 12 0 0 0-12 12v72.61L318.47 43a48 48 0 0 0-61 0L4.34 251.47a12 12 0 0 0-1.6 16.9l25.5 31A12 12 0 0 0 45.15 301l235.22-193.74a12.19 12.19 0 0 1 15.3 0L530.9 301a12 12 0 0 0 16.9-1.6l25.5-31a12 12 0 0 0-1.7-16.93z"]},"children":[]},{"ZUID":"6-ac3120-cz8636","label":"Parsley Tests","type":"pageset","contentModelZUID":"6-ac3120-cz8636","sort":1,"path":"/content/6-ac3120-cz8636","children":[]},{"ZUID":"6-ccc6bd8bd7-w55p86","label":"Publish Examples","type":"pageset","contentModelZUID":"6-ccc6bd8bd7-w55p86","sort":115,"path":"/content/6-ccc6bd8bd7-w55p86","children":[]},{"ZUID":"6-c9c624-14bzxf","label":"tour","type":"pageset","contentModelZUID":"6-c9c624-14bzxf","sort":99,"path":"/content/6-c9c624-14bzxf","children":[]}]

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
        <h1>Light (lightMode="true")</h1>
        <hr/>
        <br/>
        <Nav
          name="NavGuide"
          lightMode="true"
          selected={this.state.selected}
          tree={navExample}/>
        <br />
        <h1>Dark (Default)</h1>
        <hr/>
        <br/>
        <Nav
          name="NavGuide"
          selected={this.state.selected}
          tree={navExample}/>
        <br />
        <CollapsibleCard header="Usage" open>
          <GithubEmbed
            height="55px"
            code={`<Nav selected={selection.identifier} tree={[{"ZUID":"6-a6fcb6dbd5-719m72","label":"Advanced Publish Examples","type":"pageset","contentModelZUID":"6-a6fcb6dbd5-719m72","sort":119,"path":"/content/6-a6fcb6dbd5-719m72","icon":{"prefix":"fas","iconName":"list-alt","icon":[512,512,[],"f022","M464 480H48c-26.51 0-48-21.49-48-48V80c0-26.51 21.49-48 48-48h416c26.51 0 48 21.49 48 48v352c0 26.51-21.49 48-48 48zM128 120c-22.091 0-40 17.909-40 40s17.909 40 40 40 40-17.909 40-40-17.909-40-40-40zm0 96c-22.091 0-40 17.909-40 40s17.909 40 40 40 40-17.909 40-40-17.909-40-40-40zm0 96c-22.091 0-40 17.909-40 40s17.909 40 40 40 40-17.909 40-40-17.909-40-40-40zm288-136v-32c0-6.627-5.373-12-12-12H204c-6.627 0-12 5.373-12 12v32c0 6.627 5.373 12 12 12h200c6.627 0 12-5.373 12-12zm0 96v-32c0-6.627-5.373-12-12-12H204c-6.627 0-12 5.373-12 12v32c0 6.627 5.373 12 12 12h200c6.627 0 12-5.373 12-12zm0 96v-32c0-6.627-5.373-12-12-12H204c-6.627 0-12 5.373-12 12v32c0 6.627 5.373 12 12 12h200c6.627 0 12-5.373 12-12z"]},"children":[]},{"ZUID":"7-e8a990-8b9dvg","label":"Example Data","type":"item","contentModelZUID":"6-ddf428-gd0xxn","sort":null,"path":"/content/6-ddf428-gd0xxn/7-e8a990-8b9dvg","icon":{"prefix":"fas","iconName":"file","icon":[384,512,[],"f15b","M224 136V0H24C10.7 0 0 10.7 0 24v464c0 13.3 10.7 24 24 24h336c13.3 0 24-10.7 24-24V160H248c-13.2 0-24-10.8-24-24zm160-14.1v6.1H256V0h6.1c6.4 0 12.5 2.5 17 7l97.9 98c4.5 4.5 7 10.6 7 16.9z"]},"children":[{"ZUID":"6-3998c8-rtfq3n","label":"Glossary","type":"dataset","contentModelZUID":"6-3998c8-rtfq3n","sort":99,"parentZUID":"7-e8a990-8b9dvg","path":"/content/6-3998c8-rtfq3n","icon":{"prefix":"fas","iconName":"database","icon":[448,512,[],"f1c0","M448 73.143v45.714C448 159.143 347.667 192 224 192S0 159.143 0 118.857V73.143C0 32.857 100.333 0 224 0s224 32.857 224 73.143zM448 176v102.857C448 319.143 347.667 352 224 352S0 319.143 0 278.857V176c48.125 33.143 136.208 48.572 224 48.572S399.874 209.143 448 176zm0 160v102.857C448 479.143 347.667 512 224 512S0 479.143 0 438.857V336c48.125 33.143 136.208 48.572 224 48.572S399.874 369.143 448 336z"]},"children":[]}]},{"ZUID":"7-ac9cf8c1cf-kr9n2v","label":"Example Data Alternate Test","type":"item","contentModelZUID":"6-ddf428-gd0xxn","sort":134,"path":"/content/6-ddf428-gd0xxn/7-ac9cf8c1cf-kr9n2v","children":[]},{"ZUID":"7-c005a8-zv6024","label":"Homepage","type":"item","contentModelZUID":"6-b6245c-qzgvh9","sort":0,"path":"/content/6-b6245c-qzgvh9/7-c005a8-zv6024","icon":{"prefix":"fas","iconName":"home","icon":[576,512,[],"f015","M280.37 148.26L96 300.11V464a16 16 0 0 0 16 16l112.06-.29a16 16 0 0 0 15.92-16V368a16 16 0 0 1 16-16h64a16 16 0 0 1 16 16v95.64a16 16 0 0 0 16 16.05L464 480a16 16 0 0 0 16-16V300L295.67 148.26a12.19 12.19 0 0 0-15.3 0zM571.6 251.47L488 182.56V44.05a12 12 0 0 0-12-12h-56a12 12 0 0 0-12 12v72.61L318.47 43a48 48 0 0 0-61 0L4.34 251.47a12 12 0 0 0-1.6 16.9l25.5 31A12 12 0 0 0 45.15 301l235.22-193.74a12.19 12.19 0 0 1 15.3 0L530.9 301a12 12 0 0 0 16.9-1.6l25.5-31a12 12 0 0 0-1.7-16.93z"]},"children":[]},{"ZUID":"6-ac3120-cz8636","label":"Parsley Tests","type":"pageset","contentModelZUID":"6-ac3120-cz8636","sort":1,"path":"/content/6-ac3120-cz8636","children":[]},{"ZUID":"6-ccc6bd8bd7-w55p86","label":"Publish Examples","type":"pageset","contentModelZUID":"6-ccc6bd8bd7-w55p86","sort":115,"path":"/content/6-ccc6bd8bd7-w55p86","children":[]},{"ZUID":"6-c9c624-14bzxf","label":"tour","type":"pageset","contentModelZUID":"6-c9c624-14bzxf","sort":99,"path":"/content/6-c9c624-14bzxf","children":[]}]} />`}
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
