import React from 'react'

import ReactQuill from '../../../node_modules/react-quill'

import 'react-quill/dist/quill.snow.css'

export class QuillFieldType extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      text: ''
    }
  }

  onEditorStateChange = text => {
    this.setState({
      text
    })
  }

  render() {
    const { text } = this.state
    return (
      <ReactQuill
        value={text}
        theme="snow"
        onChange={this.onEditorStateChange}
      />
    )
  }
}
