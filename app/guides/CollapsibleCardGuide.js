import React, { Component } from 'react'

import { CollapsibleCard } from '@zesty-io/core/CollapsibleCard'
import GithubEmbed from '../components/githubembed'

export class CollapsibleCardGuide extends Component {
  render() {
    // defaults
    return (
      <React.Fragment>
        <p>Collapsible Card</p>
        <p>
          Props: header (string), open (boolean), CHILDREN (rendered as body),
          footer (string optional)
        </p>
        <br />
        <CollapsibleCard header="Open Me" footer="this is a footer">
          <p>This is the body</p>
        </CollapsibleCard>
        <CollapsibleCard header="Default Open" open>
          <h3>Pass JSX or a component!</h3>
        </CollapsibleCard>
        <br />
        <br />
        <CollapsibleCard header="Usage" open>
          <GithubEmbed
            height="150px"
            code={`<CollapsibleCard header="Open Me" footer="this is a footer">
  <p>This is the body</p>
</CollapsibleCard>
<CollapsibleCard header="Default Open" open>
  <h3>Pass JSX or a component!</h3>
</CollapsibleCard>`}
          />
        </CollapsibleCard>
        <CollapsibleCard header="Code">
          <GithubEmbed
            code={`export class CollapsibleCard extends Component {
  static defaultProps = {
    isCollapsed: true,
    header: 'Header Required',
    footer: ''
  }
  state = {
    isCollapsed: true
  }

  componentDidMount() {
    if (this.props.open) {
      this.setState({ isCollapsed: false })
    }
  }

  render() {
    const { isCollapsed } = this.state
    const { header, footer } = this.props
    return (
      <Card className={styles.Card}>
        <CardHeader className={styles.CardHeader}>
          <i
            className={isCollapsed ? 'fa fa-caret-left' : 'fa fa-caret-down'}
            onClick={this.onCollapse}
          />
          <h2>{header}</h2>
        </CardHeader>
        {/* render or dont render, later I want to do animation with css on close */}
        {isCollapsed ? null : (
          <React.Fragment>
            <CardContent>{this.props.children}</CardContent>
            <CardFooter>{footer}</CardFooter>
          </React.Fragment>
        )}
      </Card>
    )
  }
  onCollapse = () => {
    this.setState({
      isCollapsed: !this.state.isCollapsed
    })
  }
}`}
          />
        </CollapsibleCard>
      </React.Fragment>
    )
  }
}
