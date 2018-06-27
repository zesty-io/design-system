import React, { Component } from 'react'
import brace from 'brace';
import AceEditor from 'react-ace';

import 'brace/mode/javascript';
import 'brace/theme/monokai';

export default class GithubEmbed extends Component {
  state = {
    code: 'github code'
  }
  componentDidMount() {
    // when we have public gists of each component
    // we will fetch them here
    // we need the 'raw' link from the gist
    fetch( this.props.url ||
      'https://gist.githubusercontent.com/grantglidewell/d1f6376d8831703482320c9356086398/raw/d713eb856495a308160589c8ce9a29876198b70f/confirmComponent.js'
    )
      .then(res => res.text())
      .then(code => {
        this.setState({ code })
      })
  }
  render() {
    return <AceEditor
    mode="javascript"
    theme="monokai"
    height="600px"
    width="800px"
    value={this.state.code}
    readOnly={true}
    showGutter={false}
    showPrintMargin={false}
    editorProps={{$blockScrolling: true}}
  />
  }
}
