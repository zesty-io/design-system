import React, { Component } from 'react'

import Menu from './components/menu'
import Showcase from './components/showcase'
import Options from './components/options'

import styles from './styles.less'

import ButtonGuide from '../../core/Button/guide'

import ButtonGroupGuide from '../../core/ButtonGroup/guide'

import CardGuide from '../../core/Card/guide'

import DividerGuide from '../../core/Divider/guide'

import Url from '../../core/Url'
import AppLink from '../../core/AppLink'
import Loader from '../../core/Loader'
import WithLoader from '../../core/WithLoader'
import SearchGuide from '../../core/Search/guide'
import SelectGuide from '../../core/Select/guide'
import InputGuide from '../../core/input/guide'
import ToggleGuide from '../../core/Toggle/guide'
import InfotipGuide from '../../core/Infotip/guide'

const components = {
  Button: {
    component: ButtonGuide,
    description:
      'A flexible button component with styles including warn, cancel, and save'
  },
  ButtonGroup: {
    component: ButtonGroupGuide,
    description: 'A wrapper to group buttons'
  },
  Card: {
    component: CardGuide,
    description:
      'Cards are universal use display components, they respond well to grid and flex systems that have their boundaries clearly drawn.'
  },
  Divider: {
    component: DividerGuide,
    description: 'A styled horizontal divider'
  },
  Loader: { component: Loader, description: 'A general loading indicator' },
  Search: {
    component: SearchGuide,
    description: 'A search component that takes onKeyup and onClick props'
  },
  Select: {
    component: SelectGuide,
    code: JSON.stringify(SelectGuide),
    description:
      'The Select component requires that you also import the Option component to nest inside of it for each option. It takes an onSelect prop.'
  },
  Input: { component: InputGuide, description: 'A general use text input' },
  Toggle: { component: ToggleGuide, description: 'A toggle component that works as a checkbox' },
  Infotip: { component: InfotipGuide, description: 'Mouseover for more information' }
}
class App extends Component {
  state = {
    selected: ''
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
          <Menu components={components} onSelect={this.onSelect} />
        </section>
        <section className={styles.showcase}>
          <Showcase selected={components[this.state.selected] || null}>
            {SelectedComponent ? <SelectedComponent /> : 'Select A Component'}
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

export default App
