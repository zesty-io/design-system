import React, { Component } from 'react'

import styles from './CollapsibleCard.less'
import { Card, CardHeader, CardContent, CardFooter } from '../Card'

export class CollapsibleCard extends Component {
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
          <h2 onClick={this.onCollapse}>
            <i
              className={isCollapsed ? 'fa fa-caret-right' : 'fa fa-caret-down'}
            />
            {header}
          </h2>
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
    console.log('onCollapse')
    this.setState({
      isCollapsed: !this.state.isCollapsed
    })
  }
}
