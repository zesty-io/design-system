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
          <Tag children="tag" ZUID="/tag/zuidHere" />
          <Tag children="Another Tag" ZUID="/tag/zuidHere" />
          <Tag children="html" ZUID="/tag/zuidHere" />
          <Tag
            children="JS"
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
<Tag children="tag" ZUID="zuidHere" />
<Tag children="Another Tag" ZUID="zuidHere" />
<Tag children="html" ZUID="zuidHere" />
<Tag children="JS" ZUID="/tag/zuidHere" onRemove={ZUID => console.log(ZUID)} />`}
          />
        </CollapsibleCard>
        <CollapsibleCard collapsed header="Code">
          <GithubEmbed
            code={`export function Tag(props) {
  return (
    <span className={styles.Tag}>
      {props.link ? (
        <a href={props.link}>{props.children}</a>
      ) : (
        <span>{props.children}</span>
      )}
      <i
        className={cx("fa fa-times-circle", styles.Remove)}
        onClick={evt => {
          evt.stopPropagation();
          if (props.onRemove) {
            props.onRemove(props.value);
          }
        }}
      />
    </span>
  );
}`}
          />
        </CollapsibleCard>
      </React.Fragment>
    )
  }
}
