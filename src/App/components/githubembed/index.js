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
    // the gist must have html pre-formatted
    // we need the 'raw' link from the gist
    fetch(
      'https://gist.githubusercontent.com/grantglidewell/d1f6376d8831703482320c9356086398/raw/d3632fc67b805a9870bb965061dc71dfcda6250d/confirmComponent.js'
    )
      .then(res => res.text())
      .then(code => {
        this.setState({ code })
      })
  }
  onChange = (evt) => {
    console.log(evt)
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
    // return <code dangerouslySetInnerHTML={{ __html: this.state.code }} />
  }
}
