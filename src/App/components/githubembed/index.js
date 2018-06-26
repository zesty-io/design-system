import React, { Component } from 'react'

export default class GithubEmbed extends Component {
  state = {
    code: 'github code'
  }
  componentDidMount() {
    // when we have public gists of each component
    // we will fetch them here
    
    // fetch('https://gist.githubusercontent.com/grantglidewell/20012eb14f0120ab2dad886e4923c191/raw/04d3b408cc3156f4c99a358acf61daf94b585d08/parseURL.js')
    //   .then(res => res.text()).then(code => {
    //     this.setState({code})
    //   })
  }
  render() {
    return <code>{this.state.code}</code>
  }
}
