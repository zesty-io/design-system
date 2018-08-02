import React, { Component } from 'react'

import { Url } from '../../core/src/Url'
import GithubEmbed from '../components/githubembed'
import { CollapsibleCard } from '../../core/src/CollapsibleCard'

export class UrlGuide extends Component {
  render() {
    return (
      <React.Fragment>
        <p>A styled wrapper for the react-router Link component</p>
        <Url onClick={() => console.log('clicked Url')}>
          <i className="fa fa-trash-o" />
        </Url>
        <Url href="www.zesty.io" target="_blank">
          <i className="fa fa-github" aria-hidden="true" />
        </Url>
        <Url href="www.zesty.io" target="_blank">
          Text only child
        </Url>
        <br />
        <CollapsibleCard header="Usage">
          <GithubEmbed
            height="200px"
            code={`
<Url onClick={() => console.log('clicked Url')}>
  <i className='fa fa-trash-o' />
</Url>
<Url href='www.zesty.io' target="_blank">
  <i className="fa fa-github" aria-hidden="true" />
</Url>
<Url href='www.zesty.io' target="_blank">
  Text only child
</Url>`}
          />
        </CollapsibleCard>
        <CollapsibleCard collapsed header="Code">
          <GithubEmbed
            height="300px"
            code={`export function Url(props) {
  let opts = {
    ...props,
    className: cx(styles.link, props.className),
    href: props.href ? props.href : "javascript:void(0)",
    onClick: props.onClick,
    "data-data": props.data
  };
  return (
    <a {...opts}>
      {props.text}
      {props.children}
    </a>
  );
}`}
          />
        </CollapsibleCard>
      </React.Fragment>
    )
  }
}
