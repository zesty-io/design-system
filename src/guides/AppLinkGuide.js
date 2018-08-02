import React, { Component } from 'react'

import { AppLink } from '../../core/src/AppLink'
import GithubEmbed from '../components/githubembed'
import { CollapsibleCard } from '../../core/src/CollapsibleCard'

export class AppLinkGuide extends Component {
  render() {
    return (
      <React.Fragment>
        <p>A styled wrapper for the react-router Link component</p>
        <AppLink to={`/applink`}>
          <i className="fa fa-pencil-square-o" aria-hidden="true" />&nbsp;Link
          Text
        </AppLink>
        <br />
        <CollapsibleCard header="Usage">
          <GithubEmbed
            height="100px"
            code={`
<AppLink to='/applink'}>
  <i className="fa fa-pencil-square-o" aria-hidden="true" />&nbsp;Link Text
</AppLink>`}
          />
        </CollapsibleCard>
        <CollapsibleCard collapsed header="Code">
          <GithubEmbed
            height="250px"
            code={`export function AppLink(props) {
  return (
    <Link
      {...props}
      className={cx(styles.AppLink, props.className, styles[props.type])}
    >
      {props.text}
      {props.children}
    </Link>
  );
}`}
          />
        </CollapsibleCard>
      </React.Fragment>
    )
  }
}
