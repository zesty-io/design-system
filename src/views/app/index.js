import React, { Component } from "react";
import { BrowserRouter, Route, Switch, Link } from "react-router-dom";

import * as Guides from "../../guides";

import styles from "./app.less";
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
                    <i className={`fa fa-home ${styles.link}`} />{" "}
                  </Link>
                  <h1>Zesty.io Component Library</h1>
                </header>
                <section className={styles.AppWrap}>
                  <menu className={styles.AppMenu}>
                    {this.props.components.map((comp, i) => {
                      return (
                        <Link
                          to={`/${comp.toLowerCase().replace(" ", "-")}`}
                          key={i}
                        >
                          {comp}
                        </Link>
                      );
                    })}
                  </menu>
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
                      <Route path="/input" component={Guides.InputGuide} />
                      <Route path="/toggle" component={Guides.ToggleGuide} />
                      <Route path="/infotip" component={Guides.InfotipGuide} />
                      <Route
                        path="/"
                        render={props => {
                          return <div>Homepage</div>;
                        }}
                      />
                    </Switch>
                  </main>
                </section>
              </section>
            );
          }}
        />
      </BrowserRouter>
    );
  }
}
