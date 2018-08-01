import React, { Component } from 'react'

import '../../core/src/Search/Search.less'
import { Search } from '../../core/src/Search'
import GithubEmbed from '../components/githubembed'
import { CollapsibleCard } from '../../core/src/CollapsibleCard'

export class SearchGuide extends Component {
  render() {
    return (
      <React.Fragment>
        <p>A search component that takes onKeyup and onClick props</p>
        <Search placeholder="Search for something" />
        <br />
        <br />
        <CollapsibleCard header="Usage">
          <GithubEmbed
            height="150px"
            code={` <Search
    className={styles.Search}
    override={this.props.settings && this.props.settings.filter}
    placeholder="Search for something"
    onSubmit={this.onSearch}
    onKeyUp={this.onSearch}
  />`}
          />
        </CollapsibleCard>
        <CollapsibleCard collapsed header="Code">
          <GithubEmbed url="https://gist.githubusercontent.com/grantglidewell/d7de2d8cef48bf918bee7cfc190d49de/raw/1bc36fecab0b77364c541b4af5fb1467d069e815/Search.js" />
        </CollapsibleCard>
      </React.Fragment>
    )
  }
}
