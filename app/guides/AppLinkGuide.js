import React, { Component } from 'react'

import { CodeCard } from '../components/CodeCard'
import { AppLink } from '@zesty-io/core/dist/AppLink'

export class AppLinkGuide extends Component {
  render() {
    return (
      <React.Fragment>
        <p>A styled wrapper for the react-router Link component</p>
        <AppLink to={`/applink`}>
          <i className="fa fa-pencil-square-o" aria-hidden="true" />
          &nbsp;Link Text
        </AppLink>

        <CodeCard header="Usage" height={100} open>
          {`
<AppLink to='/applink'}>
  <i className="fa fa-pencil-square-o" aria-hidden="true" />&nbsp;Link Text
</AppLink>
`}
        </CodeCard>

        <CodeCard header="Code" height={250}>
          {`
export function AppLink(props) {
  return (
    <Link
      {...props}
      className={cx(styles.AppLink, props.className, styles[props.type])}
    >
      {props.text}
      {props.children}
    </Link>
  );
}
`}
        </CodeCard>
      </React.Fragment>
    )
  }
}
