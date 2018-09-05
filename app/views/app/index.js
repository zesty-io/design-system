import React, { Component } from 'react'
import { BrowserRouter, Route, Switch, Link } from 'react-router-dom'

import { Contribute } from './Contribute'
import * as Guides from '../../guides'

import { Nav } from '../../../core/src/Nav'

import styles from './app.less'
export default class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Route
          path="/"
          render={props => {
            return (
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
                      selected={'/' + props.location.pathname.split('/')[1]}
                      content={this.props.atoms.map(el => {
                        return {
                          name: el,
                          path: '/' + el.toLowerCase().replace(' ', '-'),
                          icon: 'cube'
                        }
                      })}
                    />
                    <div className={styles.Title}>MOLECULES</div>
                    <Nav
                      selected={'/' + props.location.pathname.split('/')[1]}
                      content={this.props.molecules.map(el => {
                        return {
                          name: el,
                          path: '/' + el.toLowerCase().replace(' ', '-'),
                          icon: 'cube'
                        }
                      })}
                    />
                    <div className={styles.Title}>ORGANISMS</div>
                    <Nav
                      selected={'/' + props.location.pathname.split('/')[1]}
                      content={this.props.organisms.map(el => {
                        return {
                          name: el,
                          path: '/' + el.toLowerCase().replace(' ', '-'),
                          icon: 'cube'
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
                          path={`/${routeItem.toLowerCase()}`}
                          component={Guides[routeItem]}
                        />
                      ))}
                      <Route path="/" component={Contribute} />
                    </Switch>
                  </main>
                </section>
              </section>
            )
          }}
        />
      </BrowserRouter>
    )
  }
}
