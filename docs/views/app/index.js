import React from 'react'
import { HashRouter, Route, Switch, Link } from 'react-router-dom'

import { Contribute } from './Contribute'
import * as Guides from '../../guides'

import { Nav } from '@zesty-io/core/Nav'

import '@zesty-io/core/vendor.css'
import styles from './app.less'
export default function App(props) {
  const selected = `/design-system#/${window.location.pathname.split('/')[1]}`
  const getPath = el =>
    `/design-system#/${el.toLowerCase().replace(' ', '-')}guide`

  return (
    <HashRouter basename="/design-system">
      <section className={styles.App}>
        <header className={styles.AppHeader}>
          <Link className={styles.Home} to="/">
            <i className={`fa fa-home ${styles.link}`} />{' '}
          </Link>
          <h1>Zesty.io Component Library</h1>
        </header>
        <section className={styles.AppWrap}>
          <nav className={styles.AppMenu}>
            <div className={styles.Title}>ATOMS</div>
            <Nav
              selected={selected}
              tree={props.atoms.map(el => {
                return {
                  label: el,
                  path: getPath(el),
                  icon: 'cube'
                }
              })}
            />
            <div className={styles.Title}>MOLECULES</div>
            <Nav
              selected={selected}
              tree={props.molecules.map(el => {
                return {
                  label: el,
                  path: getPath(el),
                  icon: 'cogs'
                }
              })}
            />
            <div className={styles.Title}>ORGANISMS</div>
            <Nav
              selected={selected}
              tree={props.organisms.map(el => {
                return {
                  label: el,
                  path: getPath(el),
                  icon: 'fa-snowflake-o'
                }
              })}
            />
          </nav>
          <main className={styles.AppShowcase}>
            <Switch>
              {/* Render routes for each component */}
              {Object.keys(Guides).map(routeItem => (
                <Route
                  key={routeItem}
                  path={`/design-system#/${routeItem.toLowerCase()}`}
                  component={Guides[routeItem]}
                />
              ))}
              <Route path="/" component={Contribute} />
            </Switch>
          </main>
        </section>
      </section>
    </HashRouter>
  )
}
