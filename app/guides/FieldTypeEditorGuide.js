import React, { Component } from 'react'

import { FieldTypeEditor } from '@zesty-io/core/dist/FieldTypeEditor'
import { CollapsibleCard } from '@zesty-io/core/dist/CollapsibleCard'
import GithubEmbed from '../components/githubembed'

export class FieldTypeEditorGuide extends Component {
  render() {
    return (
      <React.Fragment>
        <FieldTypeEditor
          label="Prose Mirror Custom Editor"
          name="wysiwyg_basic"
          onChange={console.log}
          value=""
          tooltip="Don't be a tooltip"
          description="Write your description here..."
        />
      </React.Fragment>
    )
  }
}
