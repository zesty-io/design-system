import React, { Component } from 'react'
import Router from 'react-router'
import { Route } from 'react-router-dom'

import Menu from './components/menu'
import Showcase from './components/showcase'

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
        <section className={styles.menu}>
          <Menu
            components={[
              { name: 'component', url: '/componentName' },
              { name: 'anotherComponent', url: '/moreComponents' }
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
