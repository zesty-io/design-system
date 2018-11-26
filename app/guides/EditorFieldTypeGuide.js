import React, { Component } from 'react'

import { EditorFieldType } from '@zesty-io/core/dist/EditorFieldType'
import { CollapsibleCard } from '@zesty-io/core/dist/CollapsibleCard'
import GithubEmbed from '../components/githubembed'

export class EditorFieldTypeGuide extends Component {
  render() {
    return (
      <React.Fragment>
        <EditorFieldType
          label="Prose Mirror Custom Editor"
          name="wysiwyg_basic"
          onChange={console.log}
          value=""
        />
      </React.Fragment>
    )
  }
}
