import React, { Component } from 'react'

import styles from './menu.less'
class Menu extends Component {
  render() {
    return (
      <ul className={styles.list}>
        {Object.keys(this.props.components).map((comp, i) => {
          return (
            <a onClick={() => {
              this.props.history.push(`/${comp}`)
              }} key={i}>
              <li>{comp}</li>
            </a>
          )
        })}
      </ul>
    )
  }
}

export default Menu
