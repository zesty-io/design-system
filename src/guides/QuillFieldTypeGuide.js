import React, { Component } from 'react'

import { QuillFieldType } from '../../core/src/QuillFieldType'
import { CollapsibleCard } from '../../core/src/CollapsibleCard'
import GithubEmbed from '../components/githubembed'

export class QuillFieldTypeGuide extends Component {
  render() {
    return (
      <React.Fragment>
        <p>A WYSIWYG (Quill.js) component</p>
        <br />
        <QuillFieldType />
        <br />
        <br />
        <CollapsibleCard header="Usage">
          <GithubEmbed height="50px" code="<QuillFieldType />" />
        </CollapsibleCard>
        <CollapsibleCard collapsed header="Code">
          <GithubEmbed
            code={`
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
        onEditorStateChange={this.onEditorStateChange}
      />
    )
  }
}`}
          />
        </CollapsibleCard>
      </React.Fragment>
    )
  }
}
