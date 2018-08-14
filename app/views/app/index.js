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
                    <Nav
                      title="atoms"
                      selected={props.location.pathname.split('/')[1]}
                      content={this.props.atoms.map(el => {
                        return {
                          name: el,
                          path: el.toLowerCase().replace(' ', '-'),
                          icon: 'cube'
                        }
                      })}
                    />
                    <Nav
                      title="molecules"
                      selected={props.location.pathname.split('/')[1]}
                      content={this.props.molecules.map(el => {
                        return {
                          name: el,
                          path: el.toLowerCase().replace(' ', '-'),
                          icon: 'cube'
                        }
                      })}
                    />
                    <Nav
                      title="organisms"
                      selected={props.location.pathname.split('/')[1]}
                      content={this.props.organisms.map(el => {
                        return {
                          name: el,
                          path: el.toLowerCase().replace(' ', '-'),
                          icon: 'cube'
                        }
                      })}
                    />
                  </nav>
                  <main className={styles.AppShowcase}>
                    <Switch>
                      <Route path="/button" component={Guides.ButtonGuide} />
                      <Route
                        path="/button-group"
                        component={Guides.ButtonGroupGuide}
                      />
                      <Route path="/card" component={Guides.CardGuide} />
                      <Route path="/divider" component={Guides.DividerGuide} />
                      <Route path="/applink" component={Guides.AppLinkGuide} />
                      <Route path="/url" component={Guides.UrlGuide} />
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
                      <Route
                        path="/collapsiblecard"
                        component={Guides.CollapsibleCardGuide}
                      />{' '}
                      <Route
                        path="/wysiwygfieldtype"
                        component={Guides.WYSIWYGFieldTypeGuide}
                      />
                      <Route
                        path="/draftfieldtype"
                        component={Guides.DraftFieldTypeGuide}
                      />
                      <Route
                        path="/quillfieldtype"
                        component={Guides.QuillFieldTypeGuide}
                      />
                      <Route
                        path="/onetoonefieldtype"
                        component={Guides.OneToOneFieldTypeGuide}
                      />
                      <Route
                        path="/searchablelist"
                        component={Guides.SearchableListGuide}
                      />
                      <Route path="/tag" component={Guides.TagGuide} />
                      <Route path="/nav" component={Guides.NavGuide} />
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
