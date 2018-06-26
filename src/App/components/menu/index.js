import React, { Component } from 'react'

import styles from './menu.less'
class Menu extends Component {
  render() {
    return (
      <ul className={styles.list}>
        {this.props.components.map((comp, i) => {
          return (
            <a href={comp.url} key={i}>
              <li>{comp.name}</li>
            </a>
          )
        })}
      </ul>
    )
  }
}

export default Menu
