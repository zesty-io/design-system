import React, { Component } from 'react'
import Router from 'react-router'
import { Route } from 'react-router-dom'

import Menu from './components/menu'
import Showcase from './components/showcase'
import Options from './components/options'

import Button from '../../core/Button'
import ButtonGroup from '../../core/ButtonGroup'
import { Card, CardHeader, CardContent, CardFooter } from '../../core/Card'
import Divider from '../../core/Divider'
import Url from '../../core/Url'
import AppLink from '../../core/AppLink'
import Loader from '../../core/Loader'
import WithLoader from '../../core/WithLoader'
import Search from '../../core/Search'
import { Select, Option } from '../../core/Select'
import Input from '../../core/Input'
import Toggle from '../../core/Toggle'
import Infotip from '../../core/Infotip'

import styles from './styles.less'
class App extends Component {
  render() {
    return (
      <main className={styles.main}>
        <section className={styles.options}>
          <Options />
        </section>
        <section className={styles.menu}>
          <Menu
            components={[
              { name: 'Button', url: '/componentName' },
              { name: 'ButtonGroup', url: '/componentName' },
              { name: 'Card', url: '/componentName' },
              { name: 'Divider', url: '/componentName' },
              { name: 'Url', url: '/componentName' },
              { name: 'AppLink', url: '/componentName' },
              { name: 'Loader', url: '/componentName' },
              { name: 'WithLoader', url: '/componentName' },
              { name: 'Search', url: '/componentName' },
              { name: 'Select', url: '/componentName' },
              { name: 'Input', url: '/componentName' },
              { name: 'Toggle', url: '/componentName' },
              { name: 'Infotip', url: '/moreComponents' }
            ]}
          />
        </section>
        <section className={styles.showcase}>
          <Showcase />
        </section>
      </main>
    )
  }
}

export default App
