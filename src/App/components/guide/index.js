import React, { Component } from 'react'
import { BrowserRouter, Route } from 'react-router-dom'

import Menu from '../menu'
import Showcase from '../showcase'
import Options from '../options'

import styles from './styles.less'

import components from './components'

class Guide extends Component {
  state = {
    selected: ''
  }
  render() {
    console.log(this.props)
  const SelectedComponent =
      this.state.selected && components[this.state.selected].component
    return (
      <main className={styles.main}>
        <section className={styles.options}>
          <Options
            selected={this.state.selected}
            clearSelected={this.clearSelected}
          />
        </section>
        <section className={styles.menu}>
          <Menu components={components} onSelect={this.onSelect} />
        </section>
        <section className={styles.showcase}>
          <Showcase
            selected={components[this.state.selected] || null}>
            {SelectedComponent && <SelectedComponent />}
          </Showcase>
        </section>
      </main>
    )
  }
  onSelect = selected => {
    this.setState({ selected })
  }
  clearSelected = () => {
    this.setState({ selected: '' })
  }
}

export default Guide
