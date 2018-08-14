import React, { Component } from 'react'

import { Tag } from '@zesty-io/core/dist/Tag'
import GithubEmbed from '../components/githubembed'
import { CollapsibleCard } from '@zesty-io/core/dist/CollapsibleCard'

export class TagGuide extends Component {
  render() {
    return (
      <React.Fragment>
        <p>Tag component</p>
        <p>Props: tagName, tagZUID</p>
        <br />
        <br />
        <Tag tagName="tag" tagZUID="/tag/zuidHere" />
        <Tag tagName="Another Tag" tagZUID="/tag/zuidHere" />
        <Tag tagName="html" tagZUID="/tag/zuidHere" />
        <Tag
          tagName="JS"
          tagZUID="/tag/zuidHere"
          onRemove={ZUID => console.log(ZUID)}
        />
        <br />
        <br />
        <CollapsibleCard header="Usage" open>
          <GithubEmbed
            height="150px"
            code={`
<Tag tagName="tag" tagZUID="zuidHere" />
<Tag tagName="Another Tag" tagZUID="zuidHere" />
<Tag tagName="html" tagZUID="zuidHere" />
<Tag tagName="JS" tagZUID="/tag/zuidHere" onRemove={ZUID => console.log(ZUID)} />`}
          />
        </CollapsibleCard>
        <CollapsibleCard collapsed header="Code">
          <GithubEmbed
            code={`export class Tag extends Component {
  render() {
    return (
      <span className={styles.Tag}>
        <i className="fa fa-times" onClick={this.removeTag} />
        <a href={this.props.tagZUID}>{this.props.tagName}</a>
      </span>
    )
  }
  removeTag = () => {
    if (this.props.onRemove) {
      this.props.onRemove(this.props.tagZUID)
    }
  }
}`}
          />
        </CollapsibleCard>
      </React.Fragment>
    )
  }
}
