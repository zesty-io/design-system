import React, { Component } from 'react'

import Menu from './components/menu'
import Showcase from './components/showcase'
import Options from './components/options'

import styles from './styles.less'

import Button from '../../core/Button'
import ButtonGroup from '../../core/ButtonGroup'

import { Card, CardHeader, CardContent, CardFooter } from '../../core/Card'
import Divider from '../../core/Divider'
import Url from '../../core/Url'
import AppLink from '../../core/AppLink'
import Loader from '../../core/Loader'
import WithLoader from '../../core/WithLoader'
import Search from '../../core/Search'
import Select from '../../core/Select'
import Input from '../../core/Input'
import Toggle from '../../core/Toggle'
import Infotip from '../../core/Infotip'

const components = {
  Button: { component: Button },
  ButtonGroup: { component: ButtonGroup },
  Card: { component: Card },
  Divider: { component: Divider },
  Url: { component: Url },
  AppLink: { component: AppLink },
  Loader: { component: Loader },
  WithLoader: { component: WithLoader },
  Search: { component: Search },
  Select: { component: Select },
  Input: { component: Input },
  Toggle: { component: Toggle },
  Infotip: { component: Infotip }
}
class App extends Component {
  state = {
    selected: ''
  }
  render() {
    const SelectedComponent = this.state.selected && components[this.state.selected].component
    return (
      <main className={styles.main}>
        <section className={styles.options}>
          <Options selected={this.state.selected} />
        </section>
        <section className={styles.menu}>
          <Menu components={components} onSelect={this.onSelect} />
        </section>
        <section className={styles.showcase}>
          <Showcase>
            {SelectedComponent ? (
              <SelectedComponent />
            ) : (null
              // This is currently broken because many components 
              // cannot mount in their current form
              // Object.keys(components)(comp => {
              //   let DynComponent = components[comp].component
              //   return <DynComponent />
              // })
            )}
          </Showcase>
        </section>
      </main>
    )
  }
  onSelect = selected => {
    console.log(selected)
    this.setState({ selected })
  }
}

export default App
