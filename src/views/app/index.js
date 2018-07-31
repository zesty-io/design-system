import React, { Component } from 'react'
import { BrowserRouter, Route, Switch, Link } from 'react-router-dom'

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
                  <Nav
                    className={styles.AppMenu}
                    content={[
                      {
                        title: 'Atoms',
                        icon: 'cube',
                        children: this.props.atoms.map(el => {
                          return {
                            name: el,
                            path: el.toLowerCase().replace(' ', '-'),
                            icon: 'cube'
                          }
                        })
                      },
                      {
                        title: 'Molecules',
                        icon: 'gears',
                        children: this.props.molecules.map(el => {
                          return {
                            name: el,
                            path: el.toLowerCase().replace(' ', '-'),
                            icon: 'gears'
                          }
                        })
                      },
                      {
                        title: 'Organisms',
                        icon: 'sitemap',
                        children: this.props.organisms.map(el => {
                          return {
                            name: el,
                            path: el.toLowerCase().replace(' ', '-'),
                            icon: 'sitemap'
                          }
                        })
                      }
                    ]}
                    selected={props.location.pathname.split('/')[1]}
                  />

                  {/* <menu className={styles.AppMenu}>
                    {this.props.components.map((comp, i) => {
                      return (
                        <Link
                          to={`/${comp.toLowerCase().replace(' ', '-')}`}
                          key={i}
                        >
                          {comp}
                        </Link>
                      )
                    })}
                  </menu> */}
                  <main className={styles.AppShowcase}>
                    <Switch>
                      <Route path="/button" component={Guides.ButtonGuide} />
                      <Route
                        path="/button-group"
                        component={Guides.ButtonGroupGuide}
                      />
                      <Route path="/card" component={Guides.CardGuide} />
                      <Route path="/divider" component={Guides.DividerGuide} />
                      <Route path="/search" component={Guides.SearchGuide} />
                      <Route path="/select" component={Guides.SelectGuide} />
                      <Route path="/loader" component={Guides.LoaderGuide} />
                      <Route
                        path="/withloader"
                        component={Guides.WithLoaderGuide}
                      />
                      <Route path="/input" component={Guides.InputGuide} />
                      <Route path="/toggle" component={Guides.ToggleGuide} />
                      <Route path="/infotip" component={Guides.InfotipGuide} />
                      <Route
                        path="/textfieldtype"
                        component={Guides.TextFieldTypeGuide}
                      />
                      <Route
                        path="/numberfieldtype"
                        component={Guides.NumberFieldTypeGuide}
                      />
                      <Route
                        path="/colorfieldtype"
                        component={Guides.ColorFieldTypeGuide}
                      />
                      <Route
                        path="/currencyfieldtype"
                        component={Guides.CurrencyFieldTypeGuide}
                      />
                      <Route
                        path="/binaryfieldtype"
                        component={Guides.BinaryFieldTypeGuide}
                      />{' '}
                      <Route
                        path="/urlfieldtype"
                        component={Guides.UrlFieldTypeGuide}
                      />
                      <Route
                        path="/datefieldtype"
                        component={Guides.DateFieldTypeGuide}
                      />
                      <Route
                        path="/datetimefieldtype"
                        component={Guides.DateTimeFieldTypeGuide}
                      />
                      <Route
                        path="/textareafieldtype"
                        component={Guides.TextareaFieldTypeGuide}
                      />
                      <Route
                        path="/dropdownfieldtype"
                        component={Guides.DropDownFieldTypeGuide}
                      />
                      <Route path="/nav" component={Guides.NavGuide} />
                      <Route
                        path="/"
                        render={props => {
                          return <div>Homepage</div>
                        }}
                      />
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
