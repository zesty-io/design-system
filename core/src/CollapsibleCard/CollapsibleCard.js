import React from "react";
import cx from "classnames";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCaretRight, faCaretDown } from "@fortawesome/free-solid-svg-icons";

import { Card, CardHeader, CardContent, CardFooter } from "../Card";

import styles from "./CollapsibleCard.less";
export class CollapsibleCard extends React.Component {
  state = {
    isCollapsed: true,
  };

  componentDidMount() {
    if (this.props.open) {
      this.setState({
        isCollapsed: false,
      });
    }
  }

  onCollapse = () => {
    this.setState({
      isCollapsed: !this.state.isCollapsed,
    });
  };

  render() {
    return (
      <Card className={cx(styles.Card, this.props.className)}>
        <CardHeader className={styles.CardHeader}>
          <div className={styles.HeaderWrap} onClick={this.onCollapse}>
            {this.state.isCollapsed ? (
              <FontAwesomeIcon icon={faCaretRight} className={styles.Caret} />
            ) : (
              <FontAwesomeIcon icon={faCaretDown} className={styles.Caret} />
            )}
            <div className={styles.ProvidedContent}>{this.props.header}</div>
          </div>
        </CardHeader>
        {/* render or dont render, later I want to do animation with css on close */}
        {!this.state.isCollapsed && this.props.children}
      </Card>
    );
  }
}

// Re-export content and footer components
export { CardContent, CardFooter };
