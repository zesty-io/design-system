import React, { Component } from 'react'

import { Input } from '../Input'

import styles from './CollapsibleCard.less'
import { Card, CardHeader, CardContent, CardFooter } from '../Card'

export class CollapsibleCard extends Component {
  static defaultProps = {
    isCollapsed: false,
    header: 'Header Required',
    footer: ''
  }
  state = {
    isCollapsed: false
  }

  componentDidMount() {
    if (this.props.collapsed) {
      this.setState({ isCollapsed: this.props.collapsed })
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
}
