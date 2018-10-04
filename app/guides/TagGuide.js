import React, { Component } from 'react'

import { Tag } from '@zesty-io/core/dist/Tag'
import GithubEmbed from '../components/githubembed'
import { CollapsibleCard } from '@zesty-io/core/dist/CollapsibleCard'

export class TagGuide extends Component {
  render() {
    return (
      <React.Fragment>
        <p>Tag component</p>
        <p>Props: name, ZUID</p>
        <br />
        <br />
        <div style={{ display: 'flex' }}>
          <Tag name="tag" ZUID="/tag/zuidHere" />
          <Tag name="Another Tag" ZUID="/tag/zuidHere" />
          <Tag name="html" ZUID="/tag/zuidHere" />
          <Tag
            name="JS"
            ZUID="/tag/zuidHere"
            onRemove={ZUID => console.log(ZUID)}
          />
        </div>
        <br />
        <br />
        <CollapsibleCard header="Usage" open>
          <GithubEmbed
            height="150px"
            code={`
<Tag name="tag" ZUID="zuidHere" />
<Tag name="Another Tag" ZUID="zuidHere" />
<Tag name="html" ZUID="zuidHere" />
<Tag name="JS" ZUID="/tag/zuidHere" onRemove={ZUID => console.log(ZUID)} />`}
          />
        </CollapsibleCard>
        <CollapsibleCard collapsed header="Code">
          <GithubEmbed
            code={`export class Tag extends Component {
  render() {
    return (
      <span className={styles.Tag}>
        <i className="fa fa-times" onClick={this.removeTag} />
        <a href={this.props.ZUID}>{this.props.name}</a>
      </span>
    )
  }
  removeTag = () => {
    if (this.props.onRemove) {
      this.props.onRemove(this.props.ZUID)
    }
  }
}`}
          />
        </CollapsibleCard>
      </React.Fragment>
    )
  }
}
