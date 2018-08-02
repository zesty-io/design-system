import React from 'react'

import { EditorState } from 'draft-js'
import { Editor } from 'react-draft-wysiwyg'
import { convertFromRaw, convertToRaw } from 'draft-js'
import 'react-draft-wysiwyg/dist/react-draft-wysiwyg.css'

export class DraftFieldType extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      editorState: EditorState.createEmpty()
    }
  }

  onEditorStateChange = editorState => {
    console.log(convertToRaw(editorState.getCurrentContent()))
    this.setState({
      editorState
    })
  }

  render() {
    const { editorState } = this.state
    return (
      <Editor
        initialEditorState={editorState}
        toolbarClassName="toolbarClassName"
        wrapperClassName="wrapperClassName"
        editorClassName="editorClassName"
        onEditorStateChange={this.onEditorStateChange}
      />
    )
  }
}
