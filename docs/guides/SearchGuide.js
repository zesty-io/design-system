import React, { Component } from "react";

import { Search } from "@zesty-io/core/Search";
import GithubEmbed from "../components/githubembed";
import { CollapsibleCard } from "@zesty-io/core/CollapsibleCard";

export class SearchGuide extends Component {

  render() {
    const myStyle = {
      display: "inline-flex",

    };
    return (
      <React.Fragment>
        <p>A search component that takes onKeyup and onClick props</p>
        <p>Props: onClick, onKeyup, override, noButton</p>
        <div style={myStyle}>
          <Search
            placeholder="Search for something"
            onSubmit={console.log}
            onKeyUp={console.log}
          />
          <br />
        </div>

        <CollapsibleCard header="Usage" open>
          <GithubEmbed
            height="150px"
            code={` <Search
    className={styles.Search}
    override={this.props.settings && this.props.settings.filter}
    placeholder="Search for something"
    onSubmit={this.onSearch}
    onKeyUp={this.onSearch}
    roundedEdge: "true"
  />`}
          />
        </CollapsibleCard>
        <CollapsibleCard collapsed header="Code">
          <GithubEmbed url="https://gist.githubusercontent.com/d88naimi/5f7d63d29ec41e555d6a53ebf9f4e8ce/raw/95e76ec670c4d368c11c0437c83c55d15f997f4f/Search.js" />
        </CollapsibleCard>
      </React.Fragment>
    );
  }
}

