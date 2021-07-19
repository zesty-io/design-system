import React, { Component } from "react";

import { Search } from "@zesty-io/core/Search";
import GithubEmbed from "../components/githubembed";
import { CollapsibleCard } from "@zesty-io/core/CollapsibleCard";

export class SearchGuide extends Component {
  render() {
    return (
      <React.Fragment>
        <p>A search component that takes onKeyup and onClick props</p>
        <p>Props: onClick, onKeyup, override, noButton</p>
        <Search
          placeholder="Search for something"
          onSubmit={console.log}
          onKeyUp={console.log}
        />
        <br />
        <p>Rounded Search Bar</p>
        <p>
          Props: onClick, onKeyup, override, noButton, roundedEdge: "true"{" "}
        </p>
        <Search
          placeholder="Search for something"
          onSubmit={console.log}
          onKeyUp={console.log}
          roundedEdge="true"
        />
        <br />
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
          <GithubEmbed url="https://gist.githubusercontent.com/grantglidewell/d7de2d8cef48bf918bee7cfc190d49de/raw/1bc36fecab0b77364c541b4af5fb1467d069e815/Search.js" />
        </CollapsibleCard>
      </React.Fragment>
    );
  }
}
