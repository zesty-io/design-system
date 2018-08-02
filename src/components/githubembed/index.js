import React, { PureComponent } from 'react'
import brace from 'brace'
import AceEditor from 'react-ace'

import 'brace/mode/javascript'
import 'brace/theme/idle_fingers'

export default class GithubEmbed extends PureComponent {
  state = {
    code: 'github code'
  }
  componentDidMount() {
    // RAW link from public gist
    if (this.props.url) {
      fetch(this.props.url)
        .then(res => res.text())
        .then(code => {
          this.setState({ code })
        })
    } else if (this.props.code) {
      this.setState({ code: this.props.code })
    }
  }
  render() {
    return (
      <AceEditor
        mode="javascript"
        theme="idle_fingers"
        height={this.props.height || '600px'}
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
