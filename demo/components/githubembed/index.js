import React, { PureComponent } from 'react'
import AceEditor from 'react-ace'

// import 'brace/mode/javascript'
// import 'brace/theme/idle_fingers'

import 'ace-builds/src-noconflict/mode-javascript'
import 'ace-builds/src-noconflict/theme-monokai'

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
      <div style={{ backgroundColor: '#323232', padding: '1rem 0' }}>
        <AceEditor
          mode="javascript"
          theme="monokai"
          height={this.props.height || '600px'}
          width="800px"
          fontSize="14px"
          value={this.state.code}
          readOnly={true}
          showGutter={false}
          showPrintMargin={false}
          editorProps={{ $blockScrolling: true }}
          style={{ margin: '1rem auto' }}
        />
      </div>
    )
  }
}
