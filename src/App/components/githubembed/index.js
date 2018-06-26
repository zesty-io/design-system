import React, { Component } from 'react'

export default class GithubEmbed extends Component {
  state = {
    code: 'github code'
  }
  componentDidMount() {
    // when we have public gists of each component
    // we will fetch them here
    // the gist must have html pre-formatted 
    // we need the 'raw' link from the gist
    fetch(
      'https://gist.githubusercontent.com/grantglidewell/20012eb14f0120ab2dad886e4923c191/raw/419fbf77ac2cf3385834540592ba96c7d2e67045/parseURL.js'
    )
      .then(res => res.text())
      .then(code => {
        this.setState({ code })
      })
  }
  render() {
    return <code dangerouslySetInnerHTML={{ __html: this.state.code }} />
  }
}
