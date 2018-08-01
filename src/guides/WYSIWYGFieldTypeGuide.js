import React, { Component } from 'react'

import { WYSIWYGFieldType } from '../../core/src/WYSIWYGFieldType'
import { CollapsibleCard } from '../../core/src/CollapsibleCard'
import GithubEmbed from '../components/githubembed'

export class WYSIWYGFieldTypeGuide extends Component {
  render() {
    return (
      <React.Fragment>
        <p>A WYSIWYG (Tiny MCE) component</p>
        <br />
        <p>normal</p>
        <WYSIWYGFieldType />
        <br />
        <br />
        <CollapsibleCard header="Usage">
          <GithubEmbed height="50px" code="<WYSIWYGFieldType />" />
        </CollapsibleCard>
        <CollapsibleCard collapsed header="Code">
          <GithubEmbed
            code={`
export class WYSIWYGFieldType extends React.Component {
  handleEditorChange = e => {
    console.log('Content was updated:', e.target.getContent())
  }

  render() {
    return (
      <Editor
        initialValue="<p>This is the initial content of the editor</p>"
        init={{
          plugins: 'link image code',
          toolbar:
            'undo redo | bold italic | alignleft aligncenter alignright | code'
        }}
        onChange={this.handleEditorChange}
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
