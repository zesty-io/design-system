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
  static getDerivedStateFromProps(props, state) {
    console.log('props', props.match.params.component, 'state', state.selected)
    if (props.match.params.component !== state.selected) {
      return { selected: props.match.params.component }
    }
    return null
  }
  render() {
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
          <Menu
            history={this.props.history}
            components={components}
            onSelect={this.onSelect}
          />
        </section>
        <section className={styles.showcase}>
          <Showcase selected={components[this.state.selected] || null}>
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
