import React from "react";
import cx from "classnames";

import { Card, CardHeader, CardContent, CardFooter } from "../Card";

import styles from "./CollapsibleCard.less";
export class CollapsibleCard extends React.Component {
  state = {
    isCollapsed: true
  };

  componentDidMount() {
    if (this.props.open) {
      this.setState({
        isCollapsed: false
      });
    }
  }

  onCollapse = () => {
    this.setState({
      isCollapsed: !this.state.isCollapsed
    });
  };

  render() {
    return (
      <Card className={cx(styles.Card, this.props.className)}>
        <CardHeader className={styles.CardHeader}>
          <div className={styles.HeaderWrap} onClick={this.onCollapse}>
            <i
              className={cx(
                styles.Caret,
                this.state.isCollapsed
                  ? "fa fa-caret-right"
                  : "fa fa-caret-down"
              )}
            />
            <div className={styles.ProvidedContent}>{this.props.header}</div>
          </div>
        </CardHeader>
        {/* render or dont render, later I want to do animation with css on close */}
        {!this.state.isCollapsed && (
          <React.Fragment>
            <CardContent>{this.props.children}</CardContent>
            <CardFooter>{this.props.footer}</CardFooter>
          </React.Fragment>
        )}
      </Card>
    );
  }
}
