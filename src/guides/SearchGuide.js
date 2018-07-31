import React, { Component } from 'react'

import '../../core/src/Search/Search.less'
import { Search } from '../../core/src/Search'
import GithubEmbed from '../components/githubembed'

export class SearchGuide extends Component {
  render() {
    return (
      <React.Fragment>
        <p>A search component that takes onKeyup and onClick props</p>
        <Search placeholder="Search for something" />
        <br />
        <br />
        <GithubEmbed url="https://gist.githubusercontent.com/grantglidewell/d7de2d8cef48bf918bee7cfc190d49de/raw/0ae7a395d97d33a1db8d75b1d895b732a2149f78/Search.js" />
      </React.Fragment>
    )
  }
}
