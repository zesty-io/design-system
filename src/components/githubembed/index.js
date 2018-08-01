import React, { Component } from 'react'
import brace from 'brace'
import AceEditor from 'react-ace'

import 'brace/mode/javascript'
import 'brace/theme/idle_fingers'

export default class GithubEmbed extends Component {
  state = {
    code: 'github code'
  }
  componentDidMount() {
    // RAW link from public gist
    fetch(this.props.url)
      .then(res => res.text())
      .then(code => {
        this.setState({ code })
      })
  }
  render() {
    return (
      <AceEditor
        mode="javascript"
        theme="idle_fingers"
        height="600px"
        width="800px"
        fontSize="14px"
        value={this.state.code}
        readOnly={true}
        showGutter={false}
        showPrintMargin={false}
        editorProps={{ $blockScrolling: true }}
      />
    )
  }
}
